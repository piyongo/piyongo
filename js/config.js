/**
 * js/config.js
 * PIYONGO CORE SYSTEM v4.0
 * -----------------------------------------
 * Contains:
 * 1. Configuration (Constants, IDs, Links)
 * 2. System Logic (Analytics Loader, Environment Check)
 */

(function(window) {
    'use strict';

    // =========================================================================
    // 1. CONFIGURATION (AYARLAR)
    // =========================================================================
    const CONFIG = {

        tools: [
        { 
            id: 'character-counter', 
            link: 'tools/character-counter.html', 
            titleKey: 'tools.char_title', 
            descKey: 'tools.char_desc', 
            tag: 'TEXT',
            featured: false 
        },
        { 
            id: 'case-converter', 
            link: 'tools/case-converter.html', 
            titleKey: 'tools.case_title', 
            descKey: 'tools.case_desc', 
            tag: 'TEXT',
            featured: false 
        },
        { 
            id: 'list-fixer', 
            link: 'tools/list-fixer.html', 
            titleKey: 'tools.line_title', 
            descKey: 'tools.line_desc', 
            tag: 'FORMAT',
            featured: false 
        },
        { 
            id: 'text-cleaner', 
            link: 'tools/line-cleaner.html', 
            titleKey: 'tools.clean_title', 
            descKey: 'tools.clean_desc', 
            tag: 'FORMAT',
            featured: false 
        },
        { 
            id: 'lorem-ipsum', 
            link: 'tools/lorem-ipsum.html', 
            titleKey: 'tools.lorem_title', 
            descKey: 'tools.lorem_desc', 
            tag: 'GENERATE',
            featured: false 
        },
        { 
            id: 'style-remover', 
            link: 'tools/style-remover.html', 
            titleKey: 'tools.style_title', 
            descKey: 'tools.style_desc', 
            tag: 'FORMAT',
            featured: false 
        },
        { 
            id: 'portavisa', 
            link: 'products/portavisa.html', 
            titleKey: 'tools.portavisa_title', 
            descKey: 'tools.portavisa_desc', 
            tag: 'PRODUCT',
            featured: true 
        }
    ],

        system: {
            version: '4.0.0',
            env: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'dev' : 'prod',
            debug: false
        },

        analytics: {
            enabled: true,
            // Google Analytics 4 ID
            ga4_id: 'G-EML270XP8E', 
            // Microsoft Clarity ID
            clarity_id: 'v6i879hm37'
        },

        brand: {
            name: 'PIYONGO',
            domain: 'piyongo.com',
            author: 'Yusuf Kaya',
            tagline: {
                en: 'Free Tools and Guides',
                tr: 'Ücretsiz Araçlar ve Kılavuzlar',
                pt: 'Ferramentas e Guias Gratuitos'
            }
        },

        links: {
            home: 'index.html',
            kofi: 'https://www.ko-fi.com/piyongo',
            github: 'https://github.com/piyongo',
            contact: 'mailto:hello@piyongo.com'
        },

        i18n: {
            default: 'en',
            supported: ['en', 'tr', 'pt']
        }
    };

    // =========================================================================
    // 2. SYSTEM LOGIC (MOTOR)
    // =========================================================================
    
    const System = {
        /**
         * Analytics servislerini başlatır (Sadece Production ortamında)
         */
        initAnalytics: function() {
            if (CONFIG.system.env !== 'prod' || !CONFIG.analytics.enabled) {
                console.log('🚧 Analytics: Dev Mode (Disabled)');
                return;
            }

            // A. Google Analytics 4
            if (CONFIG.analytics.ga4_id) {
                const script = document.createElement('script');
                script.async = true;
                script.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.analytics.ga4_id}`;
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', CONFIG.analytics.ga4_id);
                console.log('✅ GA4 Loaded');
            }

            // B. Microsoft Clarity
            if (CONFIG.analytics.clarity_id) {
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", CONFIG.analytics.clarity_id);
                console.log('✅ Clarity Loaded');
            }
        },

        /**
         * Sistemi ayağa kaldırır
         */
        boot: function() {
            // Config'i global erişime aç (diğer scriptler için)
            window.CORE_CONFIG = CONFIG;
            
            // Analytics'i başlat
            this.initAnalytics();
            
            // Konsola imza at (Hata ayıklama için)
            if (CONFIG.system.debug || CONFIG.system.env === 'dev') {
                console.log(`🚀 Piyongo v${CONFIG.system.version} [${CONFIG.system.env}]`);
            }
        }
    };

    // =========================================================================
    // 3. EXECUTION (ÇALIŞTIR)
    // =========================================================================
    System.boot();

})(window);