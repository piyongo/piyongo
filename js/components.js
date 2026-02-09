/* js/components.js - V47.0 (Mobile Hover Fix & Consistent Clear Button) */

const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
const pathPrefix = isRoot ? '' : '../';

const APP_CONFIG = {
    containerClass: 'max-w-6xl mx-auto px-6',
    colors: { brand: '#FF4F00', surface: '#171717' }
};

document.addEventListener('DOMContentLoaded', () => {
    injectGlobalStyles();
    injectGlobalHeader();
    injectFooter();
    initLanguageSystem();
    initFavoritesSystem();
    renderAppNav(); 
    renderDesktopCoffee();
    trackRecentTool(); 
    document.body.style.overflow = '';
    
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.lang-dropdown');
        const menu = document.querySelector('.lang-menu');
        if (dropdown && !dropdown.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
});

function injectGlobalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Inter:wght@400;700;900&display=swap');
        
        html { -webkit-tap-highlight-color: transparent; scroll-behavior: smooth; }
        body { overflow-x: hidden; min-height: 100vh; position: relative; } 
        .font-comic { font-family: 'Comic Neue', cursive, sans-serif !important; }

        /* DESKTOP & HOVER CAPABLE DEVICES ONLY */
        @media (min-width: 768px) and (hover: hover) {
            .tool-card { transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
            .tool-card:hover { transform: translateY(-6px); box-shadow: 8px 8px 0px 0px #000; border-color: #000; }
            .tool-card:hover h3 { color: ${APP_CONFIG.colors.brand}; }
            .tool-card:hover .card-icon-box { background-color: ${APP_CONFIG.colors.brand}; color: white; border-color: ${APP_CONFIG.colors.brand}; }
            
            .lang-dropdown:hover .lang-menu { display: block; }
        }

        @media (min-width: 768px) {
            .action-group-right { margin-left: auto; display: flex; align-items: center; gap: 0.75rem; }
        }

        @media (max-width: 768px) {
            .is-tool-page header { display: none !important; }
            .is-tool-page main { padding-top: 24px !important; padding-bottom: 100px !important; }
            .is-tool-page [data-i18n$="_desc"] { display: none !important; }
            
            .mobile-action-bar { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 12px; }
            
            .icon-btn { 
                width: 44px; height: 44px; flex-shrink: 0;
                display: flex; align-items: center; justify-content: center;
                border: 2px solid #E5E5E5; border-radius: 12px; color: #000;
                background: white; transition: all 0.2s;
            }
            .icon-btn:active { background: #f5f5f5; transform: scale(0.95); }

            .copy-btn-mobile { 
                flex-grow: 1; height: 44px;
                background-color: #E5E5E5 !important; 
                color: #000 !important; 
                border: 2px solid #E5E5E5 !important; 
                border-radius: 12px;
                display: flex; align-items: center; justify-content: center;
            }

            .mobile-app-bar {
                position: fixed; bottom: 20px; left: 50%;
                transform: translateX(-50%); width: calc(100% - 32px);
                max-width: 380px; height: 56px; 
                background: #FF4F00; 
                border-radius: 14px; display: flex; justify-content: space-around; 
                align-items: center; z-index: 1000; 
                box-shadow: 0 8px 24px rgba(255, 79, 0, 0.35);
            }
            .app-bar-item { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; }
            
            .app-bar-coffee {
                background: #000000; 
                width: 56px; height: 56px;
                border-radius: 9999px; display: flex; align-items: center; justify-content: center;
                margin-top: -30px; 
                border: none; 
                box-shadow: 0 6px 16px rgba(0,0,0,0.25); 
                color: white; 
            }
            
            .app-drawer {
                position: fixed; bottom: -100%; left: 0; width: 100%;
                background: #F2F2F2; border-radius: 24px 24px 0 0;
                z-index: 2000; transition: bottom 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                padding: 24px 24px 100px 24px; 
                box-shadow: 0 -10px 40px rgba(0,0,0,0.15); border-top: 1px solid #e5e5e5;
                max-height: 85dvh; 
                overflow-y: auto; pointer-events: none;
            }
            .app-drawer.open { bottom: 0; pointer-events: auto; }
            .drawer-overlay {
                position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(2px);
                z-index: 1500; opacity: 0; pointer-events: none; transition: opacity 0.3s;
            }
            .drawer-overlay.open { opacity: 1; pointer-events: auto; }
        }
        
        .share-modal {
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9);
            background: white; padding: 24px; border-radius: 24px; border: 2px solid black;
            box-shadow: 8px 8px 0px 0px black; z-index: 3000; width: 90%; max-width: 320px;
            opacity: 0; pointer-events: none; transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .share-modal.open { transform: translate(-50%, -50%) scale(1); opacity: 1; pointer-events: auto; }
        .share-overlay {
            position: fixed; inset: 0; background: rgba(0,0,0,0.2); backdrop-filter: blur(2px);
            z-index: 2900; opacity: 0; pointer-events: none; transition: opacity 0.2s;
        }
        .share-overlay.open { opacity: 1; pointer-events: auto; }
    `;
    document.head.appendChild(style);
}

// ... All other functions (renderDrawerContent, injectFooter, etc.) remain the same ...
window.toggleLangMenu = (e) => { e.stopPropagation(); const menu = document.querySelector('.lang-menu'); menu.classList.toggle('hidden'); };
function injectGlobalHeader() { const existingHeader = document.querySelector('header'); if (existingHeader) existingHeader.remove(); const header = document.createElement('header'); header.className = `${APP_CONFIG.containerClass} pt-8 pb-8 md:pt-12 md:pb-8 flex justify-between items-center relative z-50 w-full mb-4 md:mb-8`; const currentLang = localStorage.getItem('userLang') || 'en'; const langFlags = { 'en': '🇺🇸', 'tr': '🇹🇷', 'pt': '🇵🇹' }; const langLabels = { 'en': 'English', 'tr': 'Türkçe', 'pt': 'Português' }; const langCodes = { 'en': 'EN', 'tr': 'TR', 'pt': 'PT' }; const showCodeClass = (window.innerWidth < 768 && isRoot) ? 'inline-block' : 'hidden'; header.innerHTML = `<a href="${pathPrefix}index.html" class="font-black text-2xl md:text-3xl tracking-tight hover:text-[#FF4F00] transition-colors z-50">PIYONGO.</a><div class="lang-dropdown relative group z-50"><button onclick="toggleLangMenu(event)" class="flex items-center gap-2 font-bold font-mono text-sm bg-neutral-100 text-neutral-600 rounded-lg px-3 py-2 transition-colors group-hover:text-[#FF4F00] group-hover:bg-neutral-50"><span class="${showCodeClass} text-xs text-neutral-400 mr-0.5">${langCodes[currentLang]}</span><span class="text-lg leading-none">${langFlags[currentLang]}</span><span class="hidden md:inline-block pt-0.5">${langLabels[currentLang]}</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="opacity-60 transition-transform group-hover:rotate-180"><path d="M6 9l6 6 6-6"></path></svg></button><div class="lang-menu hidden absolute right-0 top-full pt-2 w-40 z-50"><div class="bg-white border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"><div onclick="setLanguage('en')" class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 cursor-pointer transition-colors ${currentLang==='en'?'bg-neutral-50':''}"><span class="text-lg">🇺🇸</span><span class="font-bold font-mono text-xs uppercase">English</span></div><div onclick="setLanguage('tr')" class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 cursor-pointer transition-colors ${currentLang==='tr'?'bg-neutral-50':''}"><span class="text-lg">🇹🇷</span><span class="font-bold font-mono text-xs uppercase">Türkçe</span></div><div onclick="setLanguage('pt')" class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 cursor-pointer transition-colors ${currentLang==='pt'?'bg-neutral-50':''}"><span class="text-lg">🇵🇹</span><span class="font-bold font-mono text-xs uppercase">Português</span></div></div></div></div>`; document.body.prepend(header); }
function renderAppNav() { if (window.innerWidth > 768) return; if (window.PAGE_CONFIG && window.PAGE_CONFIG.type === 'tool') document.body.classList.add('is-tool-page'); const overlay = document.createElement('div'); overlay.className = 'drawer-overlay'; overlay.id = 'drawerOverlay'; document.body.appendChild(overlay); const drawer = document.createElement('div'); drawer.className = 'app-drawer'; drawer.id = 'appDrawer'; document.body.appendChild(drawer); const bar = document.createElement('div'); bar.className = 'mobile-app-bar'; const homeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`; const coffeeSvg = `<svg width="24" height="24" viewBox="0 0 128 128" fill="none"><path d="M38 12H90C96 12 100 18 100 24H28C28 18 32 12 38 12Z" stroke="white" stroke-width="8" stroke-linejoin="round"></path><path d="M26 30H102V38C102 42 98 46 92 46H36C30 46 26 42 26 38V30Z" stroke="white" stroke-width="6" stroke-linejoin="round"></path><path d="M36 48H92L86 112C86 116 82 118 78 118H50C46 118 42 116 42 112L36 48Z" stroke="white" stroke-width="8" stroke-linejoin="round"></path><path d="M36 70H92V98H42C38 98 36 96 36 92V70Z" fill="white"></path></svg>`; const menuIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`; bar.innerHTML = `<a href="${pathPrefix}index.html" class="app-bar-item">${homeIcon}</a><a href="https://ko-fi.com/piyongo" target="_blank" class="app-bar-coffee">${coffeeSvg}</a><div id="drawerToggle" class="app-bar-item">${menuIcon}</div>`; document.body.appendChild(bar); document.getElementById('drawerToggle').onclick = toggleDrawer; overlay.onclick = toggleDrawer; }
function renderDrawerContent() { const drawer = document.getElementById('appDrawer'); const lang = localStorage.getItem('userLang') || 'en'; const favs = JSON.parse(localStorage.getItem('piyongo_favs') || '[]'); const recents = JSON.parse(localStorage.getItem('piyongo_recents') || '[]'); const t_recent = (typeof t === 'function') ? t('common', 'drawer_recent', lang) : "Recent"; const t_favs = (typeof t === 'function') ? t('common', 'drawer_favs', lang) : "Favourites"; const t_cats = (typeof t === 'function') ? t('common', 'drawer_cats', lang) : "Categories"; const cats = ['TEXT', 'FORMAT', 'GENERATE', 'PRODUCT']; const catButtons = cats.map(cat => { const label = (typeof t === 'function') ? t('ui', 'tag_' + cat, lang) : cat; return `<button onclick="handleCategoryClick('${cat}')" class="px-3 py-2 bg-white text-black rounded-lg text-[10px] font-black border border-black/10 uppercase tracking-wider shadow-sm">${label}</button>`; }).join(''); drawer.innerHTML = `<div class="w-10 h-1 bg-neutral-300 rounded-full mx-auto mb-6"></div><div class="space-y-6 pb-12"><section class="bg-white p-4 rounded-2xl shadow-sm border border-black/5"><h4 class="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3 flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>${t_recent}</h4><div class="grid grid-cols-1 gap-1.5">${recents.length ? recents.map(id => `<a href="${pathPrefix}tools/${id}.html" class="block px-3 py-2.5 bg-neutral-50 rounded-lg font-bold uppercase text-xs border border-black/5 hover:bg-neutral-100 transition-colors">${id.replace(/-/g, ' ')}</a>`).join('') : '<p class="text-xs text-neutral-400 italic px-2">No tools used yet.</p>'}</div></section><section class="bg-white p-4 rounded-2xl shadow-sm border border-black/5"><h4 class="text-[10px] font-black uppercase tracking-widest text-[#FF4F00] mb-3 flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="#FF4F00" stroke="#FF4F00" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>${t_favs}</h4><div class="grid grid-cols-1 gap-1.5">${favs.length ? favs.map(id => `<a href="${pathPrefix}tools/${id}.html" class="block px-3 py-2.5 bg-[#FFF4F0] text-[#FF4F00] rounded-lg font-bold uppercase text-xs border border-[#FF4F00]/10 hover:bg-[#FFF0EB] transition-colors">${id.replace(/-/g, ' ')}</a>`).join('') : '<p class="text-xs text-neutral-400 italic px-2">No favorites yet.</p>'}</div></section><section><h4 class="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3 ml-2">${t_cats}</h4><div class="flex flex-wrap gap-2 px-1">${catButtons}</div></section></div>`; }
function injectFooter() { const existingFooter = document.querySelector('footer'); if (existingFooter) existingFooter.remove(); const footer = document.createElement('footer'); footer.className = `mt-16 md:mt-32 pb-8 md:pb-12 border-t-2 border-black bg-white`; footer.innerHTML = `<div class="${APP_CONFIG.containerClass} py-12 md:py-16"><div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"><div class="col-span-1 md:col-span-2"><a href="${pathPrefix}index.html" class="inline-block text-2xl font-black mb-4 tracking-tight hover:text-[#FF4F00] transition-colors">PIYONGO<span class="text-[#FF4F00]">.</span></a><p class="text-neutral-600 max-w-sm font-mono text-sm leading-relaxed" data-i18n="common.footer_desc">Detailed guides, calculators, smart tools. All in one place. Completely free.</p></div><div><h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-neutral-400">ECOSYSTEM</h4><ul class="space-y-3 text-sm font-mono text-neutral-600"><li><a href="${pathPrefix}about.html" class="hover:text-[#FF4F00] transition-colors" data-i18n="common.about">About</a></li><li><a href="${pathPrefix}contact.html" class="hover:text-[#FF4F00] transition-colors" data-i18n="common.contact">Contact</a></li></ul></div><div><h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-neutral-400">CONNECT</h4><ul class="space-y-3 text-sm font-mono text-neutral-600"><li><a href="https://twitter.com/piyongo" target="_blank" class="hover:text-[#FF4F00] transition-colors">Tiktok</a></li><li><a href="https://instagram.com/piyongo" class="hover:text-[#FF4F00] transition-colors">Instagram</a></li></ul></div></div><div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200"><p class="text-xs text-neutral-400 font-mono">© 2025 Piyongo.</p></div></div>`; const main = document.querySelector('main'); if(main) main.parentNode.insertBefore(footer, main.nextSibling); else document.body.appendChild(footer); }
function handleCategoryClick(cat) { if (isRoot) { if (typeof filterTools === 'function') { filterTools(cat); toggleDrawer(); } } else { window.location.href = `${pathPrefix}index.html?filter=${cat}`; } }
function initLanguageSystem() { const currentLang = localStorage.getItem('userLang') || 'en'; updateLanguageText(currentLang); }
function updateLanguageText(lang) { document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (typeof t === 'function') { const [sec, k] = key.split('.'); const translated = t(sec, k, lang); if (translated && translated !== k) el.textContent = translated; } }); document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { const key = el.getAttribute('data-i18n-placeholder'); if (typeof t === 'function') { const [sec, k] = key.split('.'); const translated = t(sec, k, lang); if (translated && translated !== k) el.placeholder = translated; } }); }
function setLanguage(lang) { localStorage.setItem('userLang', lang); location.reload(); }
function renderDesktopCoffee() { const placeholders = document.querySelectorAll('#coffee-btn-placeholder'); if (placeholders.length === 0) return; const currentLang = localStorage.getItem('userLang') || 'en'; const coffeeText = (typeof t === 'function') ? t('common', 'buyMeACoffee', currentLang) : 'Buy Me A Coffee'; const buttonHtml = `<a href="https://ko-fi.com/piyongo" target="_blank" class="flex items-center justify-center gap-3 w-full md:w-auto h-12 md:h-14 bg-[#FF4F00] text-white border-2 border-black rounded-[20px] md:rounded-[24px] px-5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-y-0 active:shadow-none transition-all group"><div class="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:rotate-12 transition-transform duration-300"><svg width="100%" height="100%" viewBox="0 0 128 128" fill="none"><path d="M38 12H90C96 12 100 18 100 24H28C28 18 32 12 38 12Z" stroke="white" stroke-width="8" stroke-linejoin="round"></path><path d="M26 30H102V38C102 42 98 46 92 46H36C30 46 26 42 26 38V30Z" stroke="white" stroke-width="6" stroke-linejoin="round"></path><path d="M36 48H92L86 112C86 116 82 118 78 118H50C46 118 42 116 42 112L36 48Z" stroke="white" stroke-width="8" stroke-linejoin="round"></path><path d="M36 70H92V98H42C38 98 36 96 36 92V70Z" fill="white"></path></svg></div><span class="text-lg md:text-xl pt-1 font-comic font-bold">${coffeeText}</span></a>`; placeholders.forEach(el => el.innerHTML = buttonHtml); }
function initFavoritesSystem() { const btn = document.getElementById('favBtn'); if (!btn) return; const toolId = window.PAGE_CONFIG.id; const storageKey = 'piyongo_favs'; const svgPath = btn.querySelector('svg path'); const updateIcon = (active) => { btn.classList.toggle('text-[#FF4F00]', active); if (svgPath) svgPath.setAttribute('fill', active ? '#FF4F00' : 'none'); }; let favs = JSON.parse(localStorage.getItem(storageKey) || '[]'); updateIcon(favs.includes(toolId)); btn.onclick = (e) => { e.preventDefault(); favs = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (favs.includes(toolId)) favs = favs.filter(id => id !== toolId); else favs.push(toolId); localStorage.setItem(storageKey, JSON.stringify(favs)); updateIcon(favs.includes(toolId)); }; }
function toggleDrawer() { const drawer = document.getElementById('appDrawer'); const overlay = document.getElementById('drawerOverlay'); const isOpen = drawer.classList.toggle('open'); overlay.classList.toggle('open'); document.body.style.overflow = isOpen ? 'hidden' : ''; if(isOpen) renderDrawerContent(); }
function trackRecentTool() { if (!window.PAGE_CONFIG || window.PAGE_CONFIG.type !== 'tool') return; let recents = JSON.parse(localStorage.getItem('piyongo_recents') || '[]'); recents = [window.PAGE_CONFIG.id, ...recents.filter(id => id !== window.PAGE_CONFIG.id)].slice(0, 3); localStorage.setItem('piyongo_recents', JSON.stringify(recents)); }
function shareResult() { const textData = document.getElementById('inputArea') ? document.getElementById('inputArea').value : ''; const title = document.title; const url = window.location.href; if (navigator.share) { navigator.share({ title: title, text: textData ? `Check this:\n${textData.substring(0, 100)}...` : 'Check out this tool!', url: url }).catch(err => { console.log('Share dismissed', err); }); } else { openShareModal(url); } }
function openShareModal(url) { if (!document.getElementById('shareModal')) { const modal = document.createElement('div'); modal.className = 'share-modal'; modal.id = 'shareModal'; modal.innerHTML = `<div class="text-center"><h4 class="font-bold text-lg mb-4">Share Tool</h4><div class="grid grid-cols-1 gap-3"><button onclick="copyLink('${url}')" class="p-3 bg-neutral-100 rounded-xl font-bold text-sm hover:bg-neutral-200 transition-colors">🔗 Copy Link</button><a href="mailto:?subject=Piyongo&body=${url}" class="block p-3 bg-neutral-100 rounded-xl font-bold text-sm hover:bg-neutral-200 transition-colors">✉️ Email</a><a href="https://wa.me/?text=${encodeURIComponent(url)}" target="_blank" class="block p-3 bg-neutral-100 rounded-xl font-bold text-sm hover:bg-neutral-200 transition-colors">💬 WhatsApp</a></div><button onclick="closeShareModal()" class="mt-6 text-xs text-neutral-400 font-bold uppercase tracking-widest hover:text-red-500">Close</button></div>`; document.body.appendChild(modal); const overlay = document.createElement('div'); overlay.className = 'share-overlay'; overlay.id = 'shareOverlay'; overlay.onclick = closeShareModal; document.body.appendChild(overlay); } requestAnimationFrame(() => { document.getElementById('shareModal').classList.add('open'); document.getElementById('shareOverlay').classList.add('open'); }); }
function closeShareModal() { const m = document.getElementById('shareModal'); const o = document.getElementById('shareOverlay'); if(m) m.classList.remove('open'); if(o) o.classList.remove('open'); }
window.copyLink = (url) => { navigator.clipboard.writeText(url); const btn = document.querySelector('#shareModal button'); if(btn) btn.textContent = '✅ Copied!'; setTimeout(() => closeShareModal(), 800); };