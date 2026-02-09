/**
 * js/components.js
 * PIYONGO UI ENGINE v4.2 (Final Architecture)
 * -----------------------------------------
 * Manages global UI elements AND Homepage Logic.
 * Centralized Logic, No inline JS in HTML.
 */

document.addEventListener('DOMContentLoaded', () => {
    if (!window.CORE_CONFIG) { console.error('CRITICAL: config.js missing!'); return; }
    AppUI.init();
});

const AppUI = {
    config: window.CORE_CONFIG,
    isRoot: window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/'),
    pathPrefix: (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) ? '' : '../',
    currentFilter: 'ALL',

    init: function() {
        this.injectHeader();
        this.injectFooter();
        this.initLanguage();
        this.initFavorites();
        this.renderMobileNav();
        this.renderDesktopCoffee();
        this.trackRecents();
        
        // Anasayfa Mantığını Başlat
        this.initHome();
        
        document.body.style.overflow = '';
        
        // Dropdown kapatma mantığı
        document.addEventListener('click', (e) => {
            const dropdown = document.querySelector('.lang-dropdown');
            const menu = document.querySelector('.lang-menu');
            if (dropdown && !dropdown.contains(e.target) && menu) {
                menu.classList.add('hidden');
            }
        });
    },

    /* =========================================
       1. HOMEPAGE LOGIC (Motor Kısmı)
       ========================================= */
    initHome: function() {
        // Sadece anasayfada çalış
        if (!this.isRoot) return;

        // Arama kutusunu dinle
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.renderTools(e.target.value));
            
            // URL'den filtreyi oku (?filter=TEXT)
            const urlParams = new URLSearchParams(window.location.search);
            const filterParam = urlParams.get('filter');
            
            if (filterParam) {
                this.filterTools(filterParam);
            } else {
                this.renderTools(); // Varsayılan listeleme
            }
        }
    },

    getInitials: function(title) {
        const words = title.replace(/[^a-zA-Z0-9 ]/g, ' ').trim().split(/\s+/);
        if (words.length >= 2) return (words[0][0] + words[words.length - 1][0]).toUpperCase();
        if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
        return "PY";
    },

    filterTools: function(category) {
        this.currentFilter = category;
        
        // Buton stillerini güncelle
        document.querySelectorAll('.filter-btn').forEach(btn => {
            // data-i18n="ui.tag_ALL" -> "ALL" kısmını al
            const btnKey = btn.getAttribute('data-i18n').split('_').pop();
            
            // Temel stiller
            const baseClasses = "filter-btn px-4 py-1.5 rounded-full font-bold font-mono text-xs uppercase tracking-wider transition-all border-2 cursor-pointer";
            
            if (btnKey === category) {
                btn.className = `${baseClasses} active border-black bg-black text-white`;
            } else {
                btn.className = `${baseClasses} border-neutral-200 bg-white text-neutral-500 hover:border-black hover:text-black`;
            }
        });
        
        const searchInput = document.getElementById('searchInput');
        this.renderTools(searchInput ? searchInput.value : '');
    },

    renderTools: function(searchText = '') {
        const grid = document.getElementById('toolsGrid');
        if (!grid) return; // Grid yoksa dur (Örn: tool sayfasındayız)

        grid.innerHTML = '';
        const favorites = JSON.parse(localStorage.getItem('piyongo_favs') || '[]');
        const currentLang = localStorage.getItem('userLang') || this.config.i18n.default;
        
        // Veriyi Config dosyasından alıyoruz
        const tools = this.config.tools || [];
        
        tools.forEach(tool => {
            // Çeviri anahtarlarını ayrıştır (tools.char_title -> char_title)
            const titleKey = tool.titleKey.split('.')[1];
            const descKey = tool.descKey.split('.')[1];
            
            const title = t('tools', titleKey, currentLang);
            const desc = t('tools', descKey, currentLang);
            
            // Filtreleme Mantığı
            const matchesSearch = title.toLowerCase().includes(searchText.toLowerCase()) || desc.toLowerCase().includes(searchText.toLowerCase());
            const matchesCategory = this.currentFilter === 'ALL' || tool.tag === this.currentFilter || (this.currentFilter === 'FAVS' && favorites.includes(tool.id));

            if(matchesSearch && matchesCategory) {
                const card = document.createElement('a');
                card.href = tool.link;
                
                // PortaVisa ise 'PV', değilse Baş Harfler
                const generatedIcon = tool.id === 'portavisa' ? 'PV' : this.getInitials(title);
                
                // Kart HTML'i
                card.className = `tool-card group relative flex flex-col justify-between p-6 border-2 border-black rounded-[32px] overflow-hidden bg-white ${tool.featured ? 'md:col-span-2' : ''}`;
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h3 class="text-xl md:text-2xl font-bold mb-2 transition-colors tracking-tight">${title}</h3>
                            <p class="text-xs md:text-sm text-neutral-500 font-mono line-clamp-2 leading-relaxed">${desc}</p>
                        </div>
                        <div class="pt-1 text-neutral-300 group-hover:text-black transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                    </div>
                    <div class="flex justify-between items-end">
                        <span class="px-3 py-1 bg-neutral-100 rounded-lg text-[10px] font-bold text-neutral-500 uppercase tracking-widest">${tool.tag}</span>
                        <div class="card-icon-box w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-bold font-mono transition-all group-hover:bg-[#FF4F00] group-hover:text-white">${generatedIcon}</div>
                    </div>
                `;
                grid.appendChild(card);
            }
        });

        // "Sonuç Bulunamadı" kontrolü
        const noRes = document.getElementById('noResults');
        if (noRes) {
            if (grid.children.length === 0) noRes.classList.remove('hidden');
            else noRes.classList.add('hidden');
        }
    },

    /* =========================================
       2. UI INJECTION (Header, Footer, Nav)
       ========================================= */
    injectHeader: function() {
        const existingHeader = document.querySelector('header');
        if (existingHeader) existingHeader.remove();
        
        const header = document.createElement('header');
        header.className = 'max-w-6xl mx-auto px-6 pt-8 pb-8 md:pt-12 md:pb-8 flex justify-between items-center relative z-50 w-full mb-4 md:mb-8';
        
        const currentLang = localStorage.getItem('userLang') || this.config.i18n.default;
        const langFlags = { 'en': '🇺🇸', 'tr': '🇹🇷', 'pt': '🇵🇹' };
        const langLabels = { 'en': 'English', 'tr': 'Türkçe', 'pt': 'Português' };
        const langCodes = { 'en': 'EN', 'tr': 'TR', 'pt': 'PT' };
        const showCodeClass = (window.innerWidth < 768 && this.isRoot) ? 'inline-block' : 'hidden';

        header.innerHTML = `
            <a href="${this.pathPrefix}index.html" class="font-black text-2xl md:text-3xl tracking-tight hover:text-[#FF4F00] transition-colors z-50">${this.config.brand.name}.</a>
            <div class="lang-dropdown relative group z-50">
                <button onclick="AppUI.toggleLangMenu(event)" class="flex items-center gap-2 font-bold font-mono text-sm bg-neutral-100 text-neutral-600 rounded-lg px-3 py-2 transition-colors group-hover:text-[#FF4F00] group-hover:bg-neutral-50">
                    <span class="${showCodeClass} text-xs text-neutral-400 mr-0.5">${langCodes[currentLang]}</span>
                    <span class="text-lg leading-none">${langFlags[currentLang]}</span>
                    <span class="hidden md:inline-block pt-0.5">${langLabels[currentLang]}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="opacity-60 transition-transform group-hover:rotate-180"><path d="M6 9l6 6 6-6"></path></svg>
                </button>
                <div class="lang-menu hidden absolute right-0 top-full pt-2 w-40 z-50">
                    <div class="bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                        ${this.config.i18n.supported.map(code => `
                            <div onclick="AppUI.setLanguage('${code}')" class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 cursor-pointer transition-colors ${currentLang===code?'bg-neutral-50':''}">
                                <span class="text-lg">${langFlags[code]}</span>
                                <span class="font-bold font-mono text-xs uppercase">${langLabels[code]}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>`;
        document.body.prepend(header);
    },

    injectFooter: function() {
        const existingFooter = document.querySelector('footer');
        if (existingFooter) existingFooter.remove();
        
        const lang = localStorage.getItem('userLang') || this.config.i18n.default;
        const footer = document.createElement('footer');
        footer.className = 'mt-16 md:mt-32 pb-8 md:pb-12 border-t-2 border-black bg-white';
        
        const t_desc = t('common', 'footer_desc', lang);
        const t_about = t('common', 'footer_about', lang) || 'About';
        const t_contact = t('common', 'footer_contact', lang) || 'Contact';

        footer.innerHTML = `
            <div class="max-w-6xl mx-auto px-6 py-12 md:py-16">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div class="col-span-1 md:col-span-2">
                        <a href="${this.pathPrefix}index.html" class="inline-block text-2xl font-black mb-4 tracking-tight hover:text-[#FF4F00] transition-colors">${this.config.brand.name}<span class="text-[#FF4F00]">.</span></a>
                        <p class="text-neutral-600 max-w-sm font-mono text-sm leading-relaxed" data-i18n="common.footer_desc">${t_desc}</p>
                    </div>
                    <div>
                        <h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-neutral-400">ECOSYSTEM</h4>
                        <ul class="space-y-3 text-sm font-mono text-neutral-600">
                            <li><a href="${this.pathPrefix}about.html" class="hover:text-[#FF4F00] transition-colors" data-i18n="common.footer_about">${t_about}</a></li>
                            <li><a href="${this.pathPrefix}contact.html" class="hover:text-[#FF4F00] transition-colors" data-i18n="common.footer_contact">${t_contact}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-neutral-400">CONNECT</h4>
                        <ul class="space-y-3 text-sm font-mono text-neutral-600">
                            <li><a href="https://twitter.com/piyongo" target="_blank" class="hover:text-[#FF4F00] transition-colors">Twitter</a></li>
                            <li><a href="https://instagram.com/piyongo" class="hover:text-[#FF4F00] transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200">
                    <p class="text-xs text-neutral-400 font-mono">© 2026 ${this.config.brand.name}.</p>
                </div>
            </div>`;
        
        const main = document.querySelector('main');
        if(main) main.parentNode.insertBefore(footer, main.nextSibling); 
        else document.body.appendChild(footer);
    },

    renderMobileNav: function() {
        if (window.innerWidth > 768) return;
        if (window.PAGE_CONFIG && window.PAGE_CONFIG.type === 'tool') {
            document.body.classList.add('is-tool-page');
        }

        const overlay = document.createElement('div'); overlay.className = 'drawer-overlay'; overlay.id = 'drawerOverlay'; document.body.appendChild(overlay); 
        const drawer = document.createElement('div'); drawer.className = 'app-drawer'; drawer.id = 'appDrawer'; document.body.appendChild(drawer); 
        const bar = document.createElement('div'); bar.className = 'mobile-app-bar';
        
        const homeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
        const coffeeSvg = `<svg width="24" height="24" viewBox="0 0 128 128" fill="none"><path d="M38 12H90C96 12 100 18 100 24H28C28 18 32 12 38 12Z" stroke="white" stroke-width="8" stroke-linejoin="round"></path><path d="M26 30H102V38C102 42 98 46 92 46H36C30 46 26 42 26 38V30Z" stroke="white" stroke-width="6" stroke-linejoin="round"></path><path d="M36 48H92L86 112C86 116 82 118 78 118H50C46 118 42 116 42 112L36 48Z" stroke="white" stroke-width="8" stroke-linejoin="round"></path><path d="M36 70H92V98H42C38 98 36 96 36 92V70Z" fill="white"></path></svg>`;
        const menuIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;

        bar.innerHTML = `<a href="${this.pathPrefix}index.html" class="app-bar-item">${homeIcon}</a><a href="${this.config.links.kofi}" target="_blank" class="app-bar-coffee">${coffeeSvg}</a><div id="drawerToggle" class="app-bar-item">${menuIcon}</div>`;
        document.body.appendChild(bar);

        document.getElementById('drawerToggle').onclick = () => this.toggleDrawer();
        overlay.onclick = () => this.toggleDrawer();
    },

    toggleDrawer: function() {
        const drawer = document.getElementById('appDrawer');
        const overlay = document.getElementById('drawerOverlay');
        const isOpen = drawer.classList.toggle('open');
        overlay.classList.toggle('open');
        document.body.style.overflow = isOpen ? 'hidden' : '';
        if(isOpen) this.renderDrawerContent();
    },

    renderDrawerContent: function() {
        const drawer = document.getElementById('appDrawer');
        const lang = localStorage.getItem('userLang') || this.config.i18n.default;
        const favs = JSON.parse(localStorage.getItem('piyongo_favs') || '[]');
        const recents = JSON.parse(localStorage.getItem('piyongo_recents') || '[]');
        
        const t_recent = t('common', 'drawer_recent', lang);
        const t_favs = t('common', 'drawer_favs', lang);
        const t_cats = t('common', 'drawer_cats', lang);
        
        const cats = ['TEXT', 'FORMAT', 'GENERATE', 'PRODUCT'];
        const catButtons = cats.map(cat => {
            const label = t('ui', 'tag_' + cat, lang);
            return `<button onclick="AppUI.handleCategoryClick('${cat}')" class="px-3 py-2 bg-white text-black rounded-lg text-[10px] font-black border border-black/10 uppercase tracking-wider shadow-sm">${label}</button>`;
        }).join('');

        drawer.innerHTML = `
            <div class="w-10 h-1 bg-neutral-300 rounded-full mx-auto mb-6"></div>
            <div class="space-y-6 pb-12">
                <section class="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                    <h4 class="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>${t_recent}</h4>
                    <div class="grid grid-cols-1 gap-1.5">${recents.length ? recents.map(id => `<a href="${this.pathPrefix}tools/${id}.html" class="block px-3 py-2.5 bg-neutral-50 rounded-lg font-bold uppercase text-xs border border-black/5 hover:bg-neutral-100 transition-colors">${id.replace(/-/g, ' ')}</a>`).join('') : '<p class="text-xs text-neutral-400 italic px-2">No tools used yet.</p>'}</div>
                </section>
                <section class="bg-white p-4 rounded-2xl shadow-sm border border-black/5">
                    <h4 class="text-[10px] font-black uppercase tracking-widest text-[#FF4F00] mb-3 flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="#FF4F00" stroke="#FF4F00" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>${t_favs}</h4>
                    <div class="grid grid-cols-1 gap-1.5">${favs.length ? favs.map(id => `<a href="${this.pathPrefix}tools/${id}.html" class="block px-3 py-2.5 bg-[#FFF4F0] text-[#FF4F00] rounded-lg font-bold uppercase text-xs border border-[#FF4F00]/10 hover:bg-[#FFF0EB] transition-colors">${id.replace(/-/g, ' ')}</a>`).join('') : '<p class="text-xs text-neutral-400 italic px-2">No favorites yet.</p>'}</div>
                </section>
                <section><h4 class="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3 ml-2">${t_cats}</h4><div class="flex flex-wrap gap-2 px-1">${catButtons}</div></section>
            </div>`;
    },

    handleCategoryClick: function(cat) {
        if (this.isRoot) { 
            // Anasayfadaysak direkt filtrele
            this.filterTools(cat); 
            this.toggleDrawer(); 
        } else { 
            // Başka sayfadaysak anasayfaya git
            window.location.href = `${this.pathPrefix}index.html?filter=${cat}`; 
        }
    },

    renderDesktopCoffee: function() {
        const placeholders = document.querySelectorAll('#coffee-btn-placeholder');
        if (placeholders.length === 0) return;
        const lang = localStorage.getItem('userLang') || this.config.i18n.default;
        const coffeeText = t('common', 'buyMeACoffee', lang);
        
        const buttonHtml = `<a href="${this.config.links.kofi}" target="_blank" class="flex items-center justify-center gap-3 w-full md:w-auto h-12 md:h-14 bg-[#FF4F00] text-white border-2 border-black rounded-[20px] md:rounded-[24px] px-5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-y-0 active:shadow-none transition-all group"><div class="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:rotate-12 transition-transform duration-300"><svg width="100%" height="100%" viewBox="0 0 128 128" fill="none"><path d="M38 12H90C96 12 100 18 100 24H28C28 18 32 12 38 12Z" stroke="white" stroke-width="8" stroke-linejoin="round"></path><path d="M26 30H102V38C102 42 98 46 92 46H36C30 46 26 42 26 38V30Z" stroke="white" stroke-width="6" stroke-linejoin="round"></path><path d="M36 48H92L86 112C86 116 82 118 78 118H50C46 118 42 116 42 112L36 48Z" stroke="white" stroke-width="8" stroke-linejoin="round"></path><path d="M36 70H92V98H42C38 98 36 96 36 92V70Z" fill="white"></path></svg></div><span class="text-lg md:text-xl pt-1 font-comic font-bold">${coffeeText}</span></a>`;
        placeholders.forEach(el => el.innerHTML = buttonHtml);
    },

    initLanguage: function() { this.updateLanguageText(localStorage.getItem('userLang') || this.config.i18n.default); },
    updateLanguageText: function(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); const [sec, k] = key.split('.'); const translated = t(sec, k, lang); if (translated && translated !== k) el.textContent = translated; });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { const key = el.getAttribute('data-i18n-placeholder'); const [sec, k] = key.split('.'); const translated = t(sec, k, lang); if (translated && translated !== k) el.placeholder = translated; });
    },
    setLanguage: function(lang) { localStorage.setItem('userLang', lang); location.reload(); },
    toggleLangMenu: function(e) { e.stopPropagation(); const menu = document.querySelector('.lang-menu'); if(menu) menu.classList.toggle('hidden'); },
    
    initFavorites: function() {
        const btn = document.getElementById('favBtn'); if (!btn) return;
        const toolId = window.PAGE_CONFIG.id; const storageKey = 'piyongo_favs'; const svgPath = btn.querySelector('svg path');
        const updateIcon = (active) => { btn.classList.toggle('text-[#FF4F00]', active); if (svgPath) svgPath.setAttribute('fill', active ? '#FF4F00' : 'none'); };
        let favs = JSON.parse(localStorage.getItem(storageKey) || '[]'); updateIcon(favs.includes(toolId));
        btn.onclick = (e) => { e.preventDefault(); favs = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (favs.includes(toolId)) favs = favs.filter(id => id !== toolId); else favs.push(toolId); localStorage.setItem(storageKey, JSON.stringify(favs)); updateIcon(favs.includes(toolId)); };
    },
    trackRecents: function() {
        if (!window.PAGE_CONFIG || window.PAGE_CONFIG.type !== 'tool') return;
        let recents = JSON.parse(localStorage.getItem('piyongo_recents') || '[]');
        recents = [window.PAGE_CONFIG.id, ...recents.filter(id => id !== window.PAGE_CONFIG.id)].slice(0, 3);
        localStorage.setItem('piyongo_recents', JSON.stringify(recents));
    }
};

/* GLOBAL HELPERS (Window Scope) */
window.shareResult = function() {
    const textData = document.getElementById('inputArea') ? document.getElementById('inputArea').value : '';
    const title = document.title; const url = window.location.href;
    if (navigator.share) { navigator.share({ title: title, text: textData ? `Check this:\n${textData.substring(0, 100)}...` : 'Check out this tool!', url: url }).catch(err => console.log('Share dismissed')); } 
    else { openShareModal(url); }
};
function openShareModal(url) {
    if (!document.getElementById('shareModal')) {
        const modal = document.createElement('div'); modal.className = 'share-modal'; modal.id = 'shareModal';
        modal.innerHTML = `<div class="text-center"><h4 class="font-bold text-lg mb-4">Share Tool</h4><div class="grid grid-cols-1 gap-3"><button onclick="copyLink('${url}')" class="p-3 bg-neutral-100 rounded-xl font-bold text-sm hover:bg-neutral-200 transition-colors">🔗 Copy Link</button><a href="mailto:?subject=Piyongo&body=${url}" class="block p-3 bg-neutral-100 rounded-xl font-bold text-sm hover:bg-neutral-200 transition-colors">✉️ Email</a><a href="https://wa.me/?text=${encodeURIComponent(url)}" target="_blank" class="block p-3 bg-neutral-100 rounded-xl font-bold text-sm hover:bg-neutral-200 transition-colors">💬 WhatsApp</a></div><button onclick="closeShareModal()" class="mt-6 text-xs text-neutral-400 font-bold uppercase tracking-widest hover:text-red-500">Close</button></div>`;
        document.body.appendChild(modal);
        const overlay = document.createElement('div'); overlay.className = 'share-overlay'; overlay.id = 'shareOverlay'; overlay.onclick = closeShareModal; document.body.appendChild(overlay);
    }
    requestAnimationFrame(() => { document.getElementById('shareModal').classList.add('open'); document.getElementById('shareOverlay').classList.add('open'); });
}
function closeShareModal() { const m = document.getElementById('shareModal'); const o = document.getElementById('shareOverlay'); if(m) m.classList.remove('open'); if(o) o.classList.remove('open'); }
window.copyLink = (url) => { navigator.clipboard.writeText(url); const btn = document.querySelector('#shareModal button'); if(btn) btn.textContent = '✅ Copied!'; setTimeout(() => closeShareModal(), 800); };