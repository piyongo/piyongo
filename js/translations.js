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
            buyMeACoffee: 'Buy Me A Coffee',
            footer_desc: 'Detailed guides, calculators, smart tools. All in one place. Completely free, an open resource for everyone.',
            
            // FOOTER HEADERS
            footer_eco: 'Ecosystem',
            footer_legal: 'Legal',
            footer_social: 'Connect',

            // FOOTER LINKS
            footer_about: 'About',
            footer_contact: 'Contact',
            footer_privacy: 'Privacy',
            footer_terms: 'Terms',
            
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
            drawer_cats: "Categories",
        },
        tr: {
            //META & LAYOUT
            buyMeACoffee: 'Kahve Ismarla',
            footer_desc: 'Kapsamlı rehberler, hesaplayıcılar ve akıllı araçlar. Hepsi bir arada. Tamamen ücretsiz, herkese açık bir kaynak.',

            // FOOTER HEADERS
            footer_eco: 'Ekosistem',
            footer_legal: 'Yasal',
            footer_social: 'Bağlantı',

            // FOOTER LINKS
            footer_about: 'Hakkımda',
            footer_contact: 'İletişim',
            footer_privacy: 'Gizlilik',
            footer_terms: 'Koşullar',
            
            search_placeholder: 'Ara',
            no_results: 'SONUÇ BULUNAMADI',
            
            lang_en: 'English', 
            lang_tr: 'Türkçe', 
            lang_pt: 'Português',
            
            drawer_recent: "Son Kullanılanlar",
            drawer_favs: "Favorilerim",
            drawer_cats: "Kategoriler",
        },
        pt: {
            buyMeACoffee: 'Pague Um Bica',
            footer_desc: 'Guias detalhados e ferramentas inteligentes. Tudo num só lugar. Totalmente gratuito.',
            
            // FOOTER HEADERS
            footer_eco: 'Ecossistema',
            footer_legal: 'Legal',
            footer_social: 'Conectar',

            // FOOTER LINKS
            footer_about: 'Sobre',
            footer_contact: 'Contato',
            footer_privacy: 'Privacidade',
            footer_terms: 'Termos',
            
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
            btn_rem_lines: 'REMOVE EMPTY LINES',
            btn_fix_spaces: 'FIX SPACES',
            btn_add_para: 'ADD PARAGRAPH',
            btn_add_sent: 'ADD SENTENCE',
            btn_strip: 'REMOVE STYLE',

            // İSTATİSTİK LABEL'LARI (HEPSİ BÜYÜK HARF)
            stat_chars: 'CHARS',
            stat_words: 'WORDS',
            stat_sentences: 'SENTENCES',
            stat_paragraphs: 'PARAGRAPHS',

            // Input/Output
            input_label: 'WORKSPACE',
            input_placeholder: 'Type or paste here',
            result_label: 'RESULTS',
            
            // Common Actions
            btn_clear: 'CLEAR',
            btn_share: 'SHARE',
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
            btn_rem_lines: 'BOŞ SATIRLARI SİL',
            btn_fix_spaces: 'BOŞLUKLARI DÜZELT',
            btn_add_para: 'PARAGRAF EKLE',
            btn_add_sent: 'CÜMLE EKLE',
            btn_strip: 'BİÇİMİ TEMİZLE',
            
            // Girdi/Çıktı
            input_label: 'ÇALIŞMA ALANI',
            input_placeholder: 'Buraya yazın veya yapıştırın',
            result_label: 'SONUÇLAR',
            
            // İşlemler
            btn_clear: 'TEMİZLE',
            btn_share: 'PAYLAŞ',
            btn_copy: 'KOPYALA',
            msg_copied: 'KOPYALANDI!',
            btn_download: 'İNDİR',
            btn_process: 'İŞLE',

            //ISTATISTIK
            stat_chars: 'KARAKTER',
            stat_words: 'KELİME',
            stat_sentences: 'CÜMLE',
            stat_paragraphs: 'PARAGRAF',

            // Metin Araçları
            btn_upper: 'BÜYÜK HARF', 
            btn_lower: 'KÜÇÜK HARF', 
            btn_sentence: 'CÜMLE DÜZENİ',
            btn_capital: 'BAŞ HARFLER',
            btn_alternating: 'DeĞİŞKEn',
            btn_title: 'BAŞLIK',
            btn_inverse: 'TERSİNE',
            
            // Liste Araçları
            btn_to_commas: 'SATIRLAR → VİRGÜLE', 
            btn_to_lines: 'VİRGÜLLER → SATIRA',
            btn_fix_spaces: 'BOŞLUK DÜZELT', 
            btn_rem_lines: 'BOŞ SATIR SİL',

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
            btn_rem_lines: 'REMOVER LINHAS VAZIAS',
            btn_fix_spaces: 'CORRIGIR ESPAÇOS',
            btn_add_para: 'ADICIONAR PARÁGRAFO',
            btn_add_sent: 'ADICIONAR FRASE',
            btn_strip: 'REMOVER FORMATAÇÃO',

            // Input
            input_label: 'ÁREA DE TRABALHO',
            input_placeholder: 'Escreva ou cole aqui',
            result_label: 'RESULTADOS',
            
            //STATISTICS
            stat_chars: 'CARACTERES',
            stat_words: 'PALAVRAS',
            stat_sentences: 'FRASES',
            stat_paragraphs: 'PARÁGRAFOS',

            // Ações
            btn_clear: 'LIMPAR',
            btn_copy: 'COPIAR',
            btn_share: 'PARTILHAR',
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
            char_title: 'Character Counter', char_desc: 'Counts characters, words, sentences, and paragraphs.',
            case_title: 'Case Converter', case_desc: 'Changes text to uppercase, lowercase, or sentence case.',
            line_title: 'List Fixer', line_desc: 'Converts line breaks to commas, or commas to lıne breaks.',
            clean_title: 'Line Cleaner', clean_desc: 'Removes empty lines and extra spaces within the list.',
            lorem_title: 'Lorem Ipsum', lorem_desc: 'Generates placeholder text for your designs.',
            style_title: 'Style Remover', style_desc: 'Removes formatting from text for a clean paste.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Comprehensive guide about Portugal residince visa types.'
        },
        tr: {
            char_title: 'Karakter Sayıcı', char_desc: 'Karakterleri, kelimeleri, cümleleri ve paragrafları sayar.',
            case_title: 'Büyük/Küçük Harf', case_desc: 'Metni büyük harf, küçük harf veya cümle düzenine çevirir.',
            line_title: 'Liste Düzenleyici', line_desc: 'Satırları yanyana yazıp aralara virgül koyar yada tam tersini yapar',
            clean_title: 'Metin Temizleyici', clean_desc: 'Boş satırları ve fazla boşlukları temizler.',
            lorem_title: 'Metin Oluşturucu', lorem_desc: 'Geçici metin ihtiyaçlarınız için taslak metinler oluşturur.',
            style_title: 'Biçim Temizleyici', style_desc: 'Metin biçimlendirmelerini kaldırarak temiz yapıştırma sağlar.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Portekiz oturum vizeleri ve yaşamı hakkında kapsamlı bilgiler'
        },
        pt: {
            char_title: 'Contador de Caracteres', char_desc: 'Conte caracteres, palavras, frases e parágrafos em tempo real.',
            case_title: 'Conversor de Maiúsculas', case_desc: 'Mude o texto para maiúsculas, minúsculas ou sentença.',
            line_title: 'Fixador de Lista', line_desc: 'Converte quebras de linha em vírgulas ou vírgulas em quebras de linha.',
            clean_title: 'Limpador de Texto', clean_desc: 'Remove linhas vazias e espaços extras dentro da lista.',
            lorem_title: 'Lorem Ipsum', lorem_desc: 'Gere texto de preenchimento para seus designs.',
            style_title: 'Removedor de Estilo', style_desc: 'Remova a formatação do texto para uma colagem limpa.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Contém informações abrangentes sobre os vistos de residência em Portugal.'
        }
    },

    /* js/translations.js - Eklenecek Bölüm */

    // ... (tools bittikten sonra, parantez kapanmadan önce)

    // ============================================
    // 4. PAGES CONTENT (About, Contact, Legal)
    // ============================================
    pages: {
        // --- 404 PAGE ---
        '404': {
            en: { title: 'Wrong Turn?', body: 'The page you are looking for has vanished into the digital void. Or maybe it never existed.' },
            tr: { title: 'Yanlış Yol?', body: 'Aradığınız sayfa dijital boşlukta kaybolmuş olabilir. Ya da belki hiç var olmamıştır.' },
            pt: { title: 'Caminho Errado?', body: 'A página que procura desapareceu no vazio digital. Ou talvez nunca tenha existido.' }
        },

        // --- ABOUT PAGE ---
        about: {
            en: {
                title: 'Istanbul to Lisbon <br><span class="text-[#FF4F00]">An unfinished story.</span>',
                body: `
                    <div class="bg-black text-white rounded-[40px] p-8 md:p-14 mt-12 relative overflow-hidden border border-neutral-800">
                        <div class="relative z-10 max-w-3xl">
                            <div class="font-sans text-base md:text-lg space-y-6 text-neutral-300 leading-relaxed tracking-wide">
                                <p>My name is <strong>Yusuf Kaya</strong>. I am a Senior Digital Designer. After 11 years at my company, I lost my job in a single day. At 42, I decided to pack my life into two suitcases and move to Lisbon to start over.</p>
                                
                                <p>I didn't start this project alone. I had the support of my closest companion of 15 years. He was the one who believed in me while I worked through the nights to build this. However, in the middle of this journey, I lost him. It was a very deep pain, but I didn't stop.</p>
                                
                                <p>I chose to continue for him. Today, Piyongo is how I keep his memory alive and prove my strength. I build these guides and tools to make your journey to Portugal a bit easier and cleaner. It is my way of finishing what we started.</p>
                                
                                <p class="text-[#FF4F00] font-bold pt-6 text-lg md:text-xl leading-snug">
                                    That is why Piyongo is totally free; I would be happy if you support my work.
                                </p>
                                <p class="text-white font-medium opacity-80 pt-2">Thank you for being part of this journey.</p>
                            </div>
                            <div class="mt-12 flex flex-col md:flex-row gap-4">
                                <a href="https://ko-fi.com/piyongo" class="inline-block bg-[#FF4F00] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors text-center text-sm md:text-base">Buy a coffee —></a>
                                <a href="contact.html" class="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors text-center text-sm md:text-base">Get in touch</a>
                            </div>
                        </div>
                    </div>`
                },

            tr: {
                title: 'İstanbul\'dan Lizbon\'a <br><span class="text-[#FF4F00]">Yarım kalmış bir hikaye.</span>',
                body: `
                    <div class="bg-black text-white rounded-[40px] p-8 md:p-14 mt-12 relative overflow-hidden border border-neutral-800">
                        <div class="relative z-10 max-w-3xl">
                            <div class="font-sans text-base md:text-lg space-y-6 text-neutral-300 leading-relaxed tracking-wide">
                                <p>Benim adım <strong>Yusuf</strong>. Multidisipliner tasarımcıyım. 11 yıllık işimi kaybettikten sonra hayatımı iki bavula sığdırarak yeni bir sayfa açmak için Lizbon'a taşındım ve bu proje üzerine çalışmaya başladım.</p>
                                
                                <p>Bu yolculukta tek başıma sayılmazdım. 15 yıllık yol arkadaşımın desteği hem taşınırken hem Piyongo üzerine çalışırken hep yanımdaydı. Sabahlara kadar çalıştığım her an desteğini hiç esirgemedi. Ne yazık ki, bu sürecin tam ortasında onu kaybettim. Acım çok derindi ama pes etmedim.</p>
                                
                                <p>Onun anısına devam etme kararı aldım. Bugün Piyongo, hem ona verdiğim bir söz hem de hayata yeniden tutunma yolum. Portekiz yolculuğunuzu bir nebze kolaylaştırmak için bu rehberleri ve araçları üretiyorum. Bu proje, zorluklara karşı duruşumun bir sembolü.</p>
                                
                                <p class="text-[#FF4F00] font-bold pt-6 text-lg md:text-xl leading-snug">
                                    Piyongo tamamen ücretsizdir. Hikayemin bir parçası olduğunuz ve bana destek verdiğiniz için teşekkür ederim.
                                </p>
                            </div>
                            <div class="mt-12 flex flex-col md:flex-row gap-4">
                                <a href="https://ko-fi.com/piyongo" class="inline-block bg-[#FF4F00] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors text-center text-sm md:text-base">Bir kahve ısmarla —></a>
                                <a href="contact.html" class="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors text-center text-sm md:text-base">İletişime geç</a>
                            </div>
                        </div>
                    </div>`
                },

            pt: {
                title: 'De Istambul para Lisboa<br><span class="text-[#FF4F00]">Uma história inacabada.</span>',
                body: `
                    <div class="bg-black text-white rounded-[40px] p-8 md:p-14 mt-12 relative overflow-hidden border border-neutral-800">
                        <div class="relative z-10 max-w-3xl">
                            <div class="font-sans text-base md:text-lg space-y-6 text-neutral-300 leading-relaxed tracking-wide">
                                <p>O meu nome é <strong>Yusuf Kaya</strong>. Trabalho como designer digital há muitos anos. Após 11 anos de carreira, tudo mudou num único dia e perdi o meu emprego. Aos 42 anos, decidi colocar toda a minha vida em duas malas e mudar-me para Lisboa para começar um novo capítulo.</p>
                                
                                <p>Não comecei esta jornada sozinho. Tive o apoio incondicional do meu companheiro de vida de 15 anos. Foi ele quem acreditou em mim em cada madrugada em que trabalhei para dar vida a este projeto. No entanto, perdi-o em pleno processo de mudança. A dor foi profunda, mas não desisti.</p>
                                
                                <p>Escolhi continuar como forma de honrar a sua memória. Hoje, o Piyongo é a minha forma de manter viva a sua lembrança e de provar a minha própria resiliência. Crio estes guias e ferramentas para tornar a sua jornada em Portugal um pouco mais fácil e simples. É, no fundo, o meu esforço para terminar o que começámos juntos.</p>
                                
                                <p class="text-[#FF4F00] font-bold pt-4 text-lg md:text-xl">Obrigado por fazer parte desta jornada.</p>
                            </div>
                            <div class="mt-12 flex flex-col md:flex-row gap-4">
                                <a href="https://ko-fi.com/piyongo" class="inline-block bg-[#FF4F00] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors text-center text-sm md:text-base">Pagar um café —></a>
                                <a href="contact.html" class="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition-colors text-center text-sm md:text-base">Entrar em contacto</a>
                            </div>
                        </div>
                    </div>`
                },
        },

        // --- CONTACT PAGE ---
        contact: {
            en: {
                title: "Let's Talk.",
                body: `<p class="text-neutral-500 font-mono text-lg mb-12 max-w-md mx-auto">Have a tool suggestion? Found a bug? Or just want to say hi? I'm all ears.</p><a href="mailto:hello@piyongo.com" class="group inline-flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-[#FF4F00] transition-colors border-b-4 border-black hover:border-[#FF4F00] pb-2">hello@piyongo.com<svg class="w-8 h-8 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>`
            },
            tr: {
                title: "Konuşalım.",
                body: `<p class="text-neutral-500 font-mono text-lg mb-12 max-w-md mx-auto">Bir araç öneriniz mi var? Hata mı buldunuz? Yoksa sadece merhaba mı demek istiyorsunuz?</p><a href="mailto:hello@piyongo.com" class="group inline-flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-[#FF4F00] transition-colors border-b-4 border-black hover:border-[#FF4F00] pb-2">hello@piyongo.com<svg class="w-8 h-8 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>`
            },
            pt: {
                title: "Vamos Falar.",
                body: `<p class="text-neutral-500 font-mono text-lg mb-12 max-w-md mx-auto">Tem uma sugestão? Encontrou um erro? Ou apenas quer dizer olá? Sou todo ouvidos.</p><a href="mailto:hello@piyongo.com" class="group inline-flex items-center gap-4 text-2xl md:text-4xl font-bold hover:text-[#FF4F00] transition-colors border-b-4 border-black hover:border-[#FF4F00] pb-2">hello@piyongo.com<svg class="w-8 h-8 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>`
            }
        },

        // --- PRIVACY POLICY ---
        privacy: {
            en: { title: 'Privacy Policy', body: `<div class="prose prose-neutral max-w-3xl font-mono text-sm space-y-6 leading-relaxed text-neutral-600"><p class="text-black"><strong>Effective Date:</strong> February 2026</p><p>We do not collect PII (Personally Identifiable Information). We use anonymous analytics (Google Analytics & Clarity) to improve the service.</p><p>For concerns: <a href="mailto:hello@piyongo.com" class="text-[#FF4F00]">hello@piyongo.com</a></p></div>` },
            tr: { title: 'Gizlilik Politikası', body: `<div class="prose prose-neutral max-w-3xl font-mono text-sm space-y-6 leading-relaxed text-neutral-600"><p class="text-black"><strong>Geçerlilik Tarihi:</strong> Şubat 2026</p><p>Kişisel Tanımlanabilir Bilgi (PII) toplamıyoruz. Hizmeti geliştirmek için anonim analitikler (Google Analytics & Clarity) kullanıyoruz.</p><p>İletişim: <a href="mailto:hello@piyongo.com" class="text-[#FF4F00]">hello@piyongo.com</a></p></div>` },
            pt: { title: 'Política de Privacidade', body: `<div class="prose prose-neutral max-w-3xl font-mono text-sm space-y-6 leading-relaxed text-neutral-600"><p class="text-black"><strong>Data Efetiva:</strong> Fevereiro 2026</p><p>Não recolhemos PII (Informação Pessoalmente Identificável). Utilizamos análises anónimas (Google Analytics & Clarity) para melhorar o serviço.</p><p>Contacto: <a href="mailto:hello@piyongo.com" class="text-[#FF4F00]">hello@piyongo.com</a></p></div>` }
        },

        // --- TERMS ---
        terms: {
            en: { title: 'Terms of Service', body: `<div class="prose prose-neutral max-w-3xl font-mono text-sm space-y-6 leading-relaxed text-neutral-600"><p>Tools are provided "as is". Piyongo is not liable for calculation errors. Visa tools are for informational purposes only.</p></div>` },
            tr: { title: 'Kullanım Koşulları', body: `<div class="prose prose-neutral max-w-3xl font-mono text-sm space-y-6 leading-relaxed text-neutral-600"><p>Araçlar "olduğu gibi" sunulur. Piyongo hesaplama hatalarından sorumlu değildir. Vize araçları sadece bilgilendirme amaçlıdır.</p></div>` },
            pt: { title: 'Termos de Serviço', body: `<div class="prose prose-neutral max-w-3xl font-mono text-sm space-y-6 leading-relaxed text-neutral-600"><p>As ferramentas são fornecidas "como estão". Piyongo não se responsabiliza por erros de cálculo.</p></div>` }
        }
    }
}; // TRANSLATIONS OBJESİ BURADA BİTİYOR


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