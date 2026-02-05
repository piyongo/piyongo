/* js/components.js - FINAL V7.0 */

const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
const pathPrefix = isRoot ? '' : '../';

document.addEventListener('DOMContentLoaded', () => {
    injectNavigation();
    if (!isRoot) injectGlobalHeader(); 
    injectFooter(); 
    
    // 1. Önce Kahve Butonunu Yerleştir
    const coffeePlaceholder = document.getElementById('coffee-btn-placeholder');
    if (coffeePlaceholder) coffeePlaceholder.innerHTML = getCoffeeButtonHTML();
    
    // 2. Çevirileri Çalıştır
    initLanguageSystem();
    
    // 3. Favori Sistemini Başlat
    handleFavoritesSystem();
});

/* --- FAVORITES SYSTEM (BRAND COLOR FIX) --- */
function handleFavoritesSystem() {
    const favorites = JSON.parse(localStorage.getItem('piyongoFavorites')) || [];

    // Tool Sayfaları için (Header'daki Büyük Kalp)
    if (window.PAGE_CONFIG && window.PAGE_CONFIG.id) {
        const toolId = window.PAGE_CONFIG.id;
        const favBtn = document.getElementById('toolFavBtn');
        
        if (favBtn) {
            // Kalp Rengi Fonksiyonu (Strict Orange)
            const setHeartState = (isActive) => {
                const svg = favBtn.querySelector('svg');
                if(isActive) {
                    favBtn.classList.add('active');
                    // BRAND COLOR: ORANGE
                    svg.style.fill = "#FF4F00";
                    svg.style.stroke = "#FF4F00";
                } else {
                    favBtn.classList.remove('active');
                    svg.style.fill = "transparent";
                    svg.style.stroke = "currentColor";
                }
            };
            
            // Başlangıç kontrolü
            if (favorites.includes(toolId)) setHeartState(true);

            // Tıklama kontrolü
            favBtn.onclick = () => {
                let currentFavs = JSON.parse(localStorage.getItem('piyongoFavorites')) || [];
                
                if (currentFavs.includes(toolId)) {
                    // Çıkar
                    currentFavs = currentFavs.filter(id => id !== toolId);
                    setHeartState(false);
                    // Pop efekti
                    favBtn.style.transform = "scale(0.9)";
                    setTimeout(() => favBtn.style.transform = "scale(1)", 150);
                } else {
                    // Ekle
                    currentFavs.push(toolId);
                    setHeartState(true);
                    // Pop efekti
                    favBtn.style.transform = "scale(1.2)";
                    setTimeout(() => favBtn.style.transform = "scale(1)", 150);
                }
                localStorage.setItem('piyongoFavorites', JSON.stringify(currentFavs));
            };
        }
    }
}

/* ... Diğer fonksiyonlar (injectNavigation, injectGlobalHeader, initLanguageSystem, getCoffeeButtonHTML) AYNEN KALIYOR ... */
function injectNavigation() { /* Eski kodun aynısı */ 
    const navHTML = `
    <div id="menuOverlay" class="menu-overlay" onclick="toggleMenu()"></div>
    <aside id="commandSidebar" class="command-sidebar">
        <div class="p-8 flex flex-col h-full relative">
            <button onclick="toggleMenu()" class="absolute top-6 right-6 p-2 hover:bg-black/5 rounded transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div class="text-3xl font-bold tracking-tighter font-mono mb-12 mt-4">
                PIYONGO<span class="text-[#FF4F00]">.</span>
            </div>
            <nav class="flex flex-col gap-5">
                <a href="${pathPrefix}index.html" class="font-mono text-xl font-bold hover:text-[#FF4F00] transition-colors" data-i18n="common.index">INDEX</a>
                <a href="${pathPrefix}about.html" class="font-mono text-xl font-bold hover:text-[#FF4F00] transition-colors" data-i18n="common.about">ABOUT</a>
                <a href="${pathPrefix}contact.html" class="font-mono text-xl font-bold hover:text-[#FF4F00] transition-colors" data-i18n="common.contact">CONTACT</a>
                <div class="h-0.5 w-12 bg-black/10 my-2"></div>
                <a href="#" class="font-mono text-base text-neutral-500 hover:text-[#FF4F00] transition-colors flex items-center gap-2">LOGIN <span class="text-[10px] bg-neutral-100 px-1 border border-neutral-200 rounded text-neutral-400">SOON</span></a>
                <a href="#" class="font-mono text-base text-neutral-500 hover:text-[#FF4F00] transition-colors flex items-center gap-2">FAVORITES <span class="text-[10px] bg-neutral-100 px-1 border border-neutral-200 rounded text-neutral-400">SOON</span></a>
                <a href="#" class="font-mono text-base text-neutral-500 hover:text-[#FF4F00] transition-colors">SETTINGS</a>
            </nav>
            <div class="mt-auto border-t-2 border-black pt-6">
                 <div class="text-[10px] font-mono uppercase text-neutral-400 mb-2" data-i18n="common.systemStatus">SYSTEM STATUS</div>
                 <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-sm font-mono font-bold" data-i18n="common.operational">OPERATIONAL</span>
                 </div>
                 <div class="mt-8 md:hidden">${getCoffeeButtonHTML()}</div>
            </div>
        </div>
    </aside>`;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
}
function injectGlobalHeader() { /* Eski kodun aynısı */ 
    const headerHTML = `
    <header class="max-w-7xl mx-auto px-4 pt-6 flex justify-between items-center relative z-50 mb-12 w-full">
        <div class="flex items-center gap-4">
            <button class="p-2 hover:bg-black/5 rounded transition-all" onclick="toggleMenu()">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5">
                    <line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="16" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <a href="${pathPrefix}index.html" class="text-2xl font-bold tracking-tighter hover:text-[#FF4F00] transition-colors">
                PIYONGO<span class="text-[#FF4F00]">.</span>
            </a>
        </div>
        <div id="languageSwitcher" class="relative group py-2"></div>
    </header>`;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}
function injectFooter() { /* Eski kodun aynısı */ 
    const year = new Date().getFullYear();
    const footerHTML = `
    <footer class="border-t-2 border-black bg-white mt-auto w-full">
        <div class="max-w-7xl mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-2xl font-bold mb-4">PIYONGO<span class="text-[#FF4F00]">.</span></h3>
                    <p class="text-neutral-600 max-w-sm font-mono text-sm leading-relaxed" data-i18n="common.footer_desc">Minimalist digital tools.</p>
                </div>
                <div>
                    <h4 class="font-bold uppercase tracking-widest text-xs mb-4" data-i18n="common.ecosystem">ECOSYSTEM</h4>
                    <ul class="space-y-2 text-sm font-mono text-neutral-600">
                        <li><a href="${pathPrefix}about.html" class="hover:text-[#FF4F00]" data-i18n="common.about">About</a></li>
                        <li><a href="${pathPrefix}contact.html" class="hover:text-[#FF4F00]" data-i18n="common.contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold uppercase tracking-widest text-xs mb-4" data-i18n="common.connect">CONNECT</h4>
                    <ul class="space-y-2 text-sm font-mono text-neutral-600">
                        <li><a href="https://twitter.com/benyusk" target="_blank" class="hover:text-[#FF4F00]">Twitter</a></li>
                        <li><a href="mailto:hello@piyongo.com" class="hover:text-[#FF4F00]">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200">
                <p class="text-xs text-neutral-400 font-mono">© ${year} Piyongo.</p>
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-[10px] font-mono font-bold text-neutral-400" data-i18n="common.operational">OPERATIONAL</span>
                </div>
            </div>
        </div>
    </footer>`;
    const existing = document.querySelector('footer');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
function initLanguageSystem() { /* Eski kodun aynısı */
    const urlParams = new URLSearchParams(window.location.search);
    let currentLang = urlParams.get('lang') || localStorage.getItem('userLang') || 'en';
    localStorage.setItem('userLang', currentLang);
    
    const langs = {
        'en': { flag: '🇺🇸', label: 'English' },
        'tr': { flag: '🇹🇷', label: 'Türkçe' },
        'pt': { flag: '🇵🇹', label: 'Português' }
    };

    const current = langs[currentLang] || langs['en'];
    const switcher = document.getElementById('languageSwitcher');
    
    if(switcher) {
        switcher.innerHTML = `
            <div class="flex items-center gap-2 cursor-pointer font-mono font-bold text-sm">
                <span>${current.flag}</span> <span class="hidden md:inline">${current.label}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
            </div>
            <div class="absolute right-0 top-full pt-2 hidden group-hover:block w-40 z-[100]">
                <div class="bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <a href="?lang=en" class="block p-3 hover:bg-[#FF4F00] hover:text-white border-b border-black/10 transition-colors font-mono">🇺🇸 English</a>
                    <a href="?lang=tr" class="block p-3 hover:bg-[#FF4F00] hover:text-white border-b border-black/10 transition-colors font-mono">🇹🇷 Türkçe</a>
                    <a href="?lang=pt" class="block p-3 hover:bg-[#FF4F00] hover:text-white transition-colors font-mono">🇵🇹 Português</a>
                </div>
            </div>`;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const [section, label] = key.split('.');
        if (typeof t === 'function') el.textContent = t(section, label, currentLang);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const [section, label] = key.split('.');
        if (typeof t === 'function') el.placeholder = t(section, label, currentLang);
    });
 }
function getCoffeeButtonHTML() { /* Eski kodun aynısı */ 
    return `
    <a href="https://www.ko-fi.com/piyongo" target="_blank" class="btn-coffee-inviting">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
            <path d="M38 12H90C96 12 100 18 100 24H28C28 18 32 12 38 12Z" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
            <path d="M26 30H102V38C102 42 98 46 92 46H36C30 46 26 42 26 38V30Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/>
            <path d="M36 48H92L86 112C86 116 82 118 78 118H50C46 118 42 116 42 112L36 48Z" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
            <path d="M36 70H92V98H42C38 98 36 96 36 92V70Z" fill="currentColor"/>
        </svg>
        <span data-i18n="common.buyMeACoffee">BUY ME A COFFEE</span>
    </a>`;
}
window.toggleMenu = function() { /* Eski kodun aynısı */ 
    const sidebar = document.getElementById('commandSidebar');
    const overlay = document.getElementById('menuOverlay');
    const mainLogo = document.querySelector('.main-logo-area');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    if(sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        if(mainLogo && window.innerWidth < 768) mainLogo.style.opacity = '0';
    } else {
        document.body.style.overflow = '';
        if(mainLogo) mainLogo.style.opacity = '1';
    }
};

// ==========================================
// FAVORİ SİSTEMİ (KALP İKONU)
// ==========================================
function initFavoriteSystem() {
    const btn = document.getElementById('favBtn');
    
    // Eğer sayfada kalp butonu veya sayfa ID'si yoksa çalışmayı durdur
    if (!btn || !window.PAGE_CONFIG || !window.PAGE_CONFIG.id) return;

    const toolId = window.PAGE_CONFIG.id;
    const storageKey = 'piyongo_favs';
    const path = btn.querySelector('svg path');

    // İkonu Dolu/Boş Yapma Fonksiyonu
    const updateIconVisual = (isActive) => {
        if (isActive) {
            btn.classList.add('text-[#FF4F00]'); // İkon rengi turuncu
            path.setAttribute('fill', 'currentColor'); // İçini doldur
            path.setAttribute('stroke', 'currentColor');
        } else {
            btn.classList.remove('text-[#FF4F00]'); // Rengi sıfırla
            path.setAttribute('fill', 'none'); // İçini boşalt
            path.setAttribute('stroke', 'currentColor');
        }
    };

    // 1. Sayfa açılınca: Bu tool favorilerde mi kontrol et
    let favs = [];
    try {
        favs = JSON.parse(localStorage.getItem(storageKey) || '[]');
    } catch (e) { favs = []; }

    updateIconVisual(favs.includes(toolId));

    // 2. Tıklama Olayı
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Güncel listeyi tekrar çek (başka sekmede değişmiş olabilir)
        try {
            favs = JSON.parse(localStorage.getItem(storageKey) || '[]');
        } catch (e) { favs = []; }

        if (favs.includes(toolId)) {
            // Varsa çıkar (Remove)
            favs = favs.filter(id => id !== toolId);
            updateIconVisual(false);
        } else {
            // Yoksa ekle (Add)
            favs.push(toolId);
            updateIconVisual(true);
        }

        // Yeni listeyi kaydet
        localStorage.setItem(storageKey, JSON.stringify(favs));
        
        // Küçük bir animasyon efekti
        btn.style.transform = "scale(0.8)";
        setTimeout(() => btn.style.transform = "scale(1)", 150);
    });
}

// Sayfa yüklendiğinde sistemi başlat
document.addEventListener('DOMContentLoaded', initFavoriteSystem);