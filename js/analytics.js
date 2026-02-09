/* js/analytics.js - Piyongo Tracking System */

// LÜTFEN KENDİ ID'LERİNİ BURAYA YAZ
const CONFIG = {
    ga4: 'G-G-EML270XP8E', // Google Analytics ID
    clarity: 'v6i879hm37' // Microsoft Clarity ID
};

// 1. Google Analytics 4
function loadGA() {
    if(!CONFIG.ga4) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.ga4}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', CONFIG.ga4);
}

// 2. Microsoft Clarity
function loadClarity() {
    if(!CONFIG.clarity) return;
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", CONFIG.clarity);
}

// Başlat
document.addEventListener('DOMContentLoaded', () => {
    // Localhost'ta çalışma (isteğe bağlı)
    if (window.location.hostname !== 'localhost') {
        loadGA();
        loadClarity();
        console.log('🚀 Piyongo Analytics Loaded');
    }
});