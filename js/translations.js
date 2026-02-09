/**
 * js/translations.js
 * Multi-language Content Store (EN, TR, PT)
 */

const TRANSLATIONS = {
    // ============================================
    // 1. GLOBAL UI (Header, Footer, Navigation)
    // ============================================
    common: {
        en: {
            // Meta & Layout
            index: 'INDEX',
            tools: 'TOOLS',
            guides: 'GUIDES',
            about: 'About',
            contact: 'Contact',
            buyMeACoffee: 'Buy Me A Coffee',
            footer_desc: 'Detailed guides, calculators, smart tools. All in one place. Completely free, an open resource for everyone.',
            footer_about: 'About',
            footer_contact: 'Contact',
            
            // Search & States
            search_placeholder: 'Search',
            no_results: 'NO DATA FOUND',
            
            // Languages
            lang_en: 'English', 
            lang_tr: 'Türkçe', 
            lang_pt: 'Português',
            
            // Mobile Drawer
            drawer_recent: "Recently Used",
            drawer_favs: "Favourites",
            drawer_cats: "Categories"
        },
        tr: {
            index: 'ANASAYFA',
            tools: 'ARAÇLAR',
            guides: 'REHBERLER',
            about: 'Hakkımda',
            contact: 'İletişim',
            buyMeACoffee: 'Kahve Ismarla',
            footer_desc: 'Kapsamlı rehberler, hesaplayıcılar ve akıllı araçlar. Hepsi bir arada. Tamamen ücretsiz, herkese açık bir kaynak.',
            footer_about: 'Hakkımda',
            footer_contact: 'İletişim',
            
            search_placeholder: 'Ara',
            no_results: 'SONUÇ BULUNAMADI',
            
            lang_en: 'English', 
            lang_tr: 'Türkçe', 
            lang_pt: 'Português',
            
            drawer_recent: "Son Kullanılanlar",
            drawer_favs: "Favorilerim",
            drawer_cats: "Kategoriler"
        },
        pt: {
            index: 'INÍCIO',
            tools: 'FERRAMENTAS',
            guides: 'GUIAS',
            about: 'Sobre',
            contact: 'Contato',
            buyMeACoffee: 'Pague Um Bica',
            footer_desc: 'Guias detalhados e ferramentas inteligentes. Tudo num só lugar. Totalmente gratuito.',
            footer_about: 'SOBRE',
            footer_contact: 'CONTATO',
            
            search_placeholder: 'Pesquisar',
            no_results: 'NENHUM DADO',
            
            lang_en: 'English', 
            lang_tr: 'Türkçe', 
            lang_pt: 'Português',
            
            drawer_recent: "Recentes",
            drawer_favs: "Favoritos",
            drawer_cats: "Categorias"
        }
    },

    // ============================================
    // 2. INTERFACE ELEMENTS (Buttons, Labels)
    // ============================================
    ui: {
        en: {
            // Filters
            tag_ALL: 'ALL', 
            tag_FAVS: 'FAVS', 
            tag_TEXT: 'TEXT', 
            tag_FORMAT: 'FORMAT', 
            tag_GENERATE: 'GEN', 
            tag_PRODUCT: 'VISA',

            // Input/Output
            input_label: 'WORKSPACE',
            input_placeholder: 'Type or paste content here...',
            result_label: 'RESULTS',
            
            // Common Actions
            btn_clear: 'CLEAR',
            btn_copy: 'COPY',
            msg_copied: 'COPIED!',
            btn_download: 'DOWNLOAD',
            btn_process: 'PROCESS',

            // Text Tools Specific
            btn_upper: 'UPPERCASE', 
            btn_lower: 'LOWERCASE', 
            btn_sentence: 'SENTENCE CASE',
            btn_capital: 'CAPITALIZED',
            btn_alternating: 'ALTERNATING',
            btn_title: 'TITLE CASE',
            btn_inverse: 'INVERSE',
            
            // List/Cleaner Tools
            btn_to_commas: 'LINES → COMMAS', 
            btn_to_lines: 'COMMAS → LINES',
            btn_fix_spaces: 'FIX SPACES', 
            btn_rem_lines: 'REMOVE EMPTY LINES',
            btn_strip: 'CLEAR HTML',

            // PortaVisa
            pv_calc_title: 'Schengen Calculator',
            pv_calc_desc: 'Calculate remaining days.'
        },
        tr: {
            // Filtreler
            tag_ALL: 'TÜMÜ', 
            tag_FAVS: 'FAV', 
            tag_TEXT: 'METİN', 
            tag_FORMAT: 'FORMAT', 
            tag_GENERATE: 'ÜRET', 
            tag_PRODUCT: 'VİZE',

            // Girdi/Çıktı
            input_label: 'ÇALIŞMA ALANI',
            input_placeholder: 'Buraya yazın veya yapıştırın...',
            result_label: 'SONUÇLAR',
            
            // İşlemler
            btn_clear: 'TEMİZLE',
            btn_copy: 'KOPYALA',
            msg_copied: 'KOPYALANDI!',
            btn_download: 'İNDİR',
            btn_process: 'İŞLE',

            // Metin Araçları
            btn_upper: 'BÜYÜK HARF', 
            btn_lower: 'KÜÇÜK HARF', 
            btn_sentence: 'CÜMLE DÜZENİ',
            btn_capital: 'BAŞ HARFLER',
            btn_alternating: 'DeĞiŞkEn',
            btn_title: 'BAŞLIK',
            btn_inverse: 'TERSİNE',
            
            // Liste Araçları
            btn_to_commas: 'SATIR → VİRGÜL', 
            btn_to_lines: 'VİRGÜL → SATIR',
            btn_fix_spaces: 'BOŞLUK DÜZELT', 
            btn_rem_lines: 'BOŞ SATIR SİL',
            btn_strip: 'HTML TEMİZLE',

            // PortaVisa
            pv_calc_title: 'Schengen Hesaplayıcı',
            pv_calc_desc: 'Kalan gün hesabı.'
        },
        pt: {
            // Filtros
            tag_ALL: 'TODOS', 
            tag_FAVS: 'FAVS', 
            tag_TEXT: 'TEXTO', 
            tag_FORMAT: 'FORMATO', 
            tag_GENERATE: 'GERAR', 
            tag_PRODUCT: 'VISTO',

            // Input
            input_label: 'ÁREA DE TRABALHO',
            input_placeholder: 'Escreva ou cole aqui...',
            result_label: 'RESULTADOS',
            
            // Ações
            btn_clear: 'LIMPAR',
            btn_copy: 'COPIAR',
            msg_copied: 'COPIADO!',
            btn_download: 'BAIXAR',
            btn_process: 'PROCESSAR',

            // Texto
            btn_upper: 'MAIÚSCULAS', 
            btn_lower: 'MINÚSCULAS', 
            btn_sentence: 'FRASE',
            btn_capital: 'CAPITALIZADA',
            btn_alternating: 'ALTERNADO',
            btn_title: 'TÍTULO',
            btn_inverse: 'INVERSO',
            
            // Lista
            btn_to_commas: 'LINHAS → VÍRGULAS', 
            btn_to_lines: 'VÍRGULAS → LINHAS',
            btn_fix_spaces: 'CORRIGIR ESPAÇOS', 
            btn_rem_lines: 'REMOVER LINHAS',
            btn_strip: 'LIMPAR HTML',

            // PortaVisa
            pv_calc_title: 'Calculadora Schengen',
            pv_calc_desc: 'Calcular dias restantes.'
        }
    },

    // ============================================
    // 3. TOOLS METADATA (Card Titles & Descs)
    // ============================================
    tools: {
        en: {
            char_title: 'Character Counter', char_desc: 'Count characters, words, sentences, and paragraphs in real-time.',
            case_title: 'Case Converter', case_desc: 'Changes text to uppercase, lowercase, or sentence case instantly.',
            line_title: 'List Fixer', line_desc: 'Remove line breaks, add commas, or sort lists alphabetically.',
            clean_title: 'Text Cleaner', clean_desc: 'Remove extra spaces, strip HTML, and clean up messy text.',
            lorem_title: 'Lorem Ipsum', lorem_desc: 'Generate placeholder text for your designs.',
            style_title: 'Style Remover', style_desc: 'Remove formatting from text for a clean paste.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Schengen calculator and visa tracking assistant.'
        },
        tr: {
            char_title: 'Karakter Sayıcı', char_desc: 'Karakterleri, kelimeleri, cümleleri ve paragrafları anlık sayın.',
            case_title: 'Büyük/Küçük Harf', case_desc: 'Metni anında büyük, küçük veya cümle düzenine çevirin.',
            line_title: 'Liste Düzenleyici', line_desc: 'Satır sonlarını kaldırın, virgül ekleyin veya listeleri sıralayın.',
            clean_title: 'Metin Temizleyici', clean_desc: 'Fazla boşlukları, HTML kodlarını ve gereksiz karakterleri temizleyin.',
            lorem_title: 'Lorem Ipsum', lorem_desc: 'Tasarımlarınız için dolgu metni oluşturun.',
            style_title: 'Biçim Temizleyici', style_desc: 'Metin biçimlendirmelerini kaldırarak temiz yapıştırma sağlayın.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Schengen hesaplayıcı ve vize takip asistanı.'
        },
        pt: {
            char_title: 'Contador de Caracteres', char_desc: 'Conte caracteres, palavras, frases e parágrafos em tempo real.',
            case_title: 'Conversor de Maiúsculas', case_desc: 'Mude o texto para maiúsculas, minúsculas ou sentença instantaneamente.',
            line_title: 'Fixador de Lista', line_desc: 'Remova quebras de linha, adicione vírgulas ou ordene listas.',
            clean_title: 'Limpador de Texto', clean_desc: 'Remova espaços extras, HTML e limpe textos bagunçados.',
            lorem_title: 'Lorem Ipsum', lorem_desc: 'Gere texto de preenchimento para seus designs.',
            style_title: 'Removedor de Estilo', style_desc: 'Remova a formatação do texto para uma colagem limpa.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Calculadora Schengen e assistente de rastreamento de vistos.'
        }
    }
};

/**
 * Helper: t(section, key, lang)
 * Güvenli çeviri fonksiyonu. Hata durumunda key'in kendisini döndürür.
 */
function t(section, key, lang) {
    // 1. Dil belirle (Parametre > URL > LocalStorage > Default)
    if (!lang) {
        const urlParams = new URLSearchParams(window.location.search);
        lang = urlParams.get('lang') || localStorage.getItem('userLang') || 'en';
    }

    try {
        // 2. Çeviriyi bul
        if (TRANSLATIONS[section]?.[lang]?.[key]) {
            return TRANSLATIONS[section][lang][key];
        }
        // 3. Bulamazsan İngilizce'ye düş (Fallback)
        if (TRANSLATIONS[section]?.['en']?.[key]) {
            return TRANSLATIONS[section]['en'][key];
        }
        // 4. Hiçbiri yoksa key'i döndür
        return key; 
    } catch (e) {
        console.warn(`Translation Error: ${section}.${key}`);
        return key; 
    }
}