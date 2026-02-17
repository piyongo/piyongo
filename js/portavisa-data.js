/**
 * js/portavisa-data.js
 */
const PORTAVISA_DB = [

{
id: 'easytoll-foreign-plates',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Infraestruturas de Portugal',
date: '05.02.2026',
title: { en: 'Easytoll: Tolls for Foreign Cars', tr: 'Easytoll: Yabancı Araçlar İçin Geçiş', pt: 'Easytoll: Portagens para Matrículas Estrangeiras' },
content: {
en: `<p class='mb-4'>If you drive a car with foreign plates into Portugal, you cannot use the Via Verde lanes immediately. You must register for "Easytoll" at the border welcome points (Welcome Centers).</p>

<p class='mb-4'>You insert your credit card into the machine, and it links your license plate to the card for 30 days. Without this, you cannot pay for electronic tolls (SCUTs) legally, and fines will be sent to your home country.</p>`,
tr: `<p class='mb-4'>Portekiz'e yabancı plakalı bir araçla girerseniz, Via Verde şeritlerini hemen kullanamazsınız. Sınırdaki karşılama noktalarında (Welcome Centers) "Easytoll"a kaydolmalısınız.</p>
<p class='mb-4'>Kredi kartınızı makineye takarsınız ve plakanızı 30 gün boyunca karta bağlar. Bu olmadan, elektronik geçişleri (SCUT) yasal olarak ödeyemezsiniz ve cezalar ülkenizdeki adresinize gönderilir.</p>`,
pt: `<p class='mb-4'>Se entrar em Portugal com matrícula estrangeira, não pode usar a Via Verde imediatamente. Deve aderir ao "Easytoll" nos pontos de boas-vindas na fronteira.</p>
<p class='mb-4'>Insere o cartão de crédito na máquina, que associa a matrícula ao cartão por 30 dias. Sem isto, não consegue pagar portagens eletrónicas (SCUTs) legalmente e as multas seguem para o seu país.</p>`
}
},
{
id: 'freelancer-quarterly-declaration',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Social Security / Segurança Social',
date: '20.01.2026',
title: { en: 'Freelancers: The Quarterly Declaration', tr: 'Freelancerlar: Üç Aylık Beyanname', pt: 'Declaração Trimestral' },
content: {
en: `<p class='mb-4'>Freelancers (Trabalhadores Independentes) must submit a declaration of their income to Social Security four times a year: in January, April, July, and October. This determines your monthly contribution for the next quarter.</p>
<p class='mb-4'>Even if you had zero income, you must submit the declaration. Failing to do so results in a default assessment based on minimum wage, forcing you to pay contributions you might not actually owe.</p>`,
tr: `<p class='mb-4'>Freelancerlar (Trabalhadores Independentes), gelir beyanlarını yılda dört kez Sosyal Güvenlik'e sunmalıdır: Ocak, Nisan, Temmuz ve Ekim aylarında. Bu, bir sonraki çeyrek için aylık priminizi belirler.</p>
<p class='mb-4'>Sıfır geliriniz olsa bile beyannameyi vermelisiniz. Vermemek, asgari ücret üzerinden varsayılan bir değerlendirmeye yol açar ve aslında borçlu olmadığınız primleri ödemek zorunda kalırsınız.</p>`,
pt: `<p class='mb-4'>Os Trabalhadores Independentes devem entregar a declaração de rendimentos à Segurança Social quatro vezes por ano: janeiro, abril, julho e outubro. Isto define a contribuição mensal do trimestre seguinte.</p>
<p class='mb-4'>Mesmo com rendimento zero, deve entregar a declaração. Falhar resulta numa avaliação oficiosa baseada no salário mínimo, obrigando a pagar contribuições que talvez não deva.</p>`
}
},
{
id: 'ehic-health-card',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'Social Security / Segurança Social',
date: '17.02.2026',
title: { en: 'Getting the EHIC (European Health Card)', tr: 'EHIC (Avrupa Sağlık Kartı) Almak', pt: 'Cartão Europeu de Seguro de Doença' },
content: {
en: `<p class='mb-4'>Once you have a Social Security number (NISS), you can apply for the European Health Insurance Card (CESD). This card gives you access to public healthcare during temporary stays in any other EU country.</p>
<p class='mb-4'>You can request it easily via the "Segurança Social Direta" portal, and it is mailed to your home within a week. It is essential for travel, covering you for emergencies in Spain, France, or Germany.</p>`,
tr: `<p class='mb-4'>Sosyal Güvenlik numaranız (NISS) olduğunda, Avrupa Sağlık Sigortası Kartı'na (CESD) başvurabilirsiniz. Bu kart, diğer AB ülkelerindeki geçici kalışlarınızda kamu sağlık hizmetlerine erişim sağlar.</p>
<p class='mb-4'>"Segurança Social Direta" portalından kolayca talep edebilirsiniz ve bir hafta içinde evinize postalanır. İspanya, Fransa veya Almanya'daki acil durumları kapsadığı için seyahatlerde şarttır.</p>`,
pt: `<p class='mb-4'>Tendo número de Segurança Social (NISS), pode pedir o Cartão Europeu de Seguro de Doença (CESD). Dá acesso a saúde pública em estadias temporárias noutros países da UE.</p>
<p class='mb-4'>Pode pedir na "Segurança Social Direta" e chega a casa numa semana. É essencial para viajar, cobrindo emergências em Espanha, França ou Alemanha.</p>`
}
},
{
id: 'casa-pronta-property',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Ministry of Justice',
date: '28.01.2026',
title: { en: 'Casa Pronta: Buying a House Fast', tr: 'Casa Pronta: Hızlı Ev Alımı', pt: 'Serviço Casa Pronta' },
content: {
en: `<p class='mb-4'>"Casa Pronta" (Ready House) is a government service that allows you to handle all procedures related to buying a property at a single desk in a Registry Office, avoiding separate trips to the Notary and Tax Authority.</p>
<p class='mb-4'>It is cheaper and faster than the traditional method. You can pay taxes (IMT), sign the deed, and update the land registry in one appointment. However, it requires standard contracts that leave less room for customization.</p>`,
tr: `<p class='mb-4'>"Casa Pronta" (Hazır Ev), mülk alımıyla ilgili tüm işlemleri Sicil Dairesi'ndeki tek bir masada halletmenizi sağlayan, Noter ve Vergi Dairesi'ne ayrı ayrı gitmeyi önleyen bir devlet hizmetidir.</p>
<p class='mb-4'>Geleneksel yöntemden daha ucuz ve hızlıdır. Vergileri (IMT) ödeyebilir, tapuyu imzalayabilir ve tapu kaydını tek randevuda güncelleyebilirsiniz. Ancak, özelleştirmeye daha az yer bırakan standart sözleşmeler gerektirir.</p>`,
pt: `<p class='mb-4'>O "Casa Pronta" é um serviço público que permite tratar de tudo na compra de casa num único balcão da Conservatória, evitando idas separadas ao Notário e Finanças.</p>
<p class='mb-4'>É mais barato e rápido que o método tradicional. Paga impostos (IMT), assina a escritura e atualiza o registo num só ato. Porém, usa contratos padrão com menos margem para personalização.</p>`
}
},
{
id: 'fishing-license-multibanco',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'DGRM / Multibanco',
date: '14.02.2026',
title: { en: 'Getting a Fishing License', tr: 'Balıkçılık Lisansı Almak', pt: 'Licença de Pesca Lúdica' },
content: {
en: `<p class='mb-4'>Fishing in the ocean or rivers requires a license. The easiest way to get one is at any Multibanco ATM. Select "Licença de Pesca," choose the type (National, Regional, or Local), and pay the fee (around €12/year).</p>
<p class='mb-4'>The ATM receipt serves as your license; keep it with your ID while fishing. Fishing without a license carries fines, and maritime police patrol the coastlines regularly.</p>`,
tr: `<p class='mb-4'>Okyanusta veya nehirlerde balık tutmak lisans gerektirir. Almanın en kolay yolu herhangi bir Multibanco ATM'sidir. "Licença de Pesca"yı seçin, türü belirleyin (Ulusal, Bölgesel veya Yerel) ve ücreti ödeyin (yıllık yaklaşık 12€).</p>
<p class='mb-4'>ATM makbuzu lisansınız yerine geçer; balık tutarken kimliğinizle birlikte saklayın. Lisanssız balık tutmanın cezası vardır ve deniz polisi kıyı şeridini düzenli olarak devriye gezer.</p>`,
pt: `<p class='mb-4'>Pescar no mar ou rio exige licença. A forma mais fácil é no Multibanco. Selecione "Licença de Pesca", escolha o tipo (Nacional, Regional, Local) e pague (cerca de 12€/ano).</p>
<p class='mb-4'>O talão serve de licença; guarde-o com o CC enquanto pesca. Pescar sem licença dá multa e a Polícia Marítima patrulha a costa regularmente.</p>`
}
},
{
id: 'supermarket-take-away',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Community Insights',
date: '03.02.2026',
title: { en: 'Supermarket Take-Away Counters', tr: 'Süpermarket Hazır Yemek Reyonları', pt: 'Take-Away de Supermercado' },
content: {
en: `<p class='mb-4'>Major supermarkets like Pingo Doce and Continente have excellent "Take-Away" sections serving hot meals. A whole grilled chicken (Frango Assado) costs around €5-€7, and sides like rice or fries are sold by weight.</p>
<p class='mb-4'>It is a staple for Portuguese families on busy weeknights. The food is fresh, cheap, and often healthier than fast food. You take a ticket, order at the counter, and pay at the main checkout.</p>`,
tr: `<p class='mb-4'>Pingo Doce ve Continente gibi büyük süpermarketlerin sıcak yemek servisi yapan mükemmel "Take-Away" bölümleri vardır. Bütün ızgara tavuk (Frango Assado) yaklaşık 5€-7€ tutar, pilav veya patates gibi yan ürünler tartılarak satılır.</p>
<p class='mb-4'>Yoğun hafta içi akşamlarında Portekizli ailelerin vazgeçilmezidir. Yemekler taze, ucuz ve genellikle fast food'dan daha sağlıklıdır. Sıra numarası alır, tezgahta sipariş verir ve ana kasada ödersiniz.</p>`,
pt: `<p class='mb-4'>Supermercados como Pingo Doce e Continente têm ótimos balcões de Take-Away. Um frango assado custa cerca de 5€-7€, e acompanhamentos como arroz ou batatas são vendidos ao peso.</p>
<p class='mb-4'>É essencial para famílias portuguesas em dias agitados. A comida é fresca, barata e muitas vezes mais saudável que fast food. Tira a senha, pede ao balcão e paga na caixa.</p>`
}
},
{
id: 'alcohol-driving-limits',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Road Code / Código da Estrada',
date: '10.02.2026',
title: { en: 'Alcohol Limits for Drivers', tr: 'Sürücüler İçin Alkol Sınırı', pt: 'Limites de Álcool ao Volante' },
content: {
en: `<p class='mb-4'>The legal blood alcohol limit in Portugal is <strong>0.5 g/l</strong>. This is roughly equivalent to one large beer or two small glasses of wine. For new drivers (less than 3 years of license) and professionals, the limit is stricter: 0.2 g/l.</p>
<p class='mb-4'>Penalties are severe. Between 0.5 and 0.8 g/l is a serious offense (fine + license suspension). Above 1.2 g/l is a crime, resulting in immediate arrest and a court appearance.</p>`,
tr: `<p class='mb-4'>Portekiz'de yasal kan alkol sınırı <strong>0,5 g/l</strong>'dir. Bu kabaca bir büyük biraya veya iki küçük kadeh şaraba eşdeğerdir. Yeni sürücüler (3 yıldan az ehliyet) ve profesyoneller için sınır daha katıdır: 0,2 g/l.</p>
<p class='mb-4'>Cezalar ağırdır. 0,5 ile 0,8 g/l arası ciddi suçtur (para cezası + ehliyetin askıya alınması). 1,2 g/l üzeri suçtur, derhal tutuklanma ve mahkemeye çıkma ile sonuçlanır.</p>`,
pt: `<p class='mb-4'>O limite legal de álcool é <strong>0,5 g/l</strong>. Equivale a uma cerveja grande ou dois copos de vinho. Para recém-encartados (menos de 3 anos) e profissionais, o limite é 0,2 g/l.</p>
<p class='mb-4'>As penas são severas. Entre 0,5 e 0,8 g/l é contraordenação grave (multa + inibição). Acima de 1,2 g/l é crime, resultando em detenção imediata e tribunal.</p>`
}
},
{
id: 'irs-vat-deductions',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '12.02.2026',
title: { en: 'Getting 15% VAT Back', tr: '%15 KDV İadesi Almak', pt: 'Recuperar 15% do IVA' },
content: {
en: `<p class='mb-4'>You can deduct 15% of the VAT paid in specific sectors from your annual income tax. These sectors are: Restaurants/Hotels, Hairdressers, Car Repair, Veterinary Services, and Gym Memberships.</p>
<p class='mb-4'>To get this benefit, you must ask for "Fatura com NIF" at payment. The limit is €250 per household per year. It happens automatically if you validate the invoices in the e-fatura app.</p>`,
tr: `<p class='mb-4'>Belirli sektörlerde ödenen KDV'nin %15'ini yıllık gelir verginizden düşebilirsiniz. Bu sektörler: Restoranlar/Oteller, Kuaförler, Oto Tamir, Veteriner Hizmetleri ve Spor Salonu Üyelikleridir.</p>
<p class='mb-4'>Bu avantajı elde etmek için ödeme sırasında "Fatura com NIF" istemelisiniz. Hane başına yıllık limit 250€'dur. Faturaları e-fatura uygulamasında doğruladığınızda otomatik olarak gerçekleşir.</p>`,
pt: `<p class='mb-4'>Pode deduzir 15% do IVA pago em setores específicos no seu IRS. São eles: Restauração/Hotéis, Cabeleireiros, Oficinas, Veterinários e Ginásios.</p>
<p class='mb-4'>Para ter o benefício, peça "Fatura com NIF". O limite é 250€ por agregado/ano. Acontece automaticamente se validar as faturas na app e-fatura.</p>`
}
},
{
id: 'gas-station-etiquette',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Community Insights',
date: '17.02.2026',
title: { en: 'Gas Station Etiquette', tr: 'Benzin İstasyonu Adabı', pt: 'Etiqueta nas Bombas de Gasolina' },
content: {
en: `<p class='mb-4'>In Portugal, you usually pump your own gas first and pay inside afterwards. However, at night (after 22:00) or on highways, many pumps require pre-payment (Pré-Pagamento) at the counter or via an automated terminal.</p>
<p class='mb-4'>Never leave your car parked at the pump after filling up to go do extensive shopping inside. Move your car to a parking spot first. "Gasóleo" is Diesel (black/yellow handle), and "Gasolina 95" is Unleaded (green handle).</p>`,
tr: `<p class='mb-4'>Portekiz'de genellikle önce benzini kendiniz doldurur, sonra içeride ödersiniz. Ancak gece (22:00'den sonra) veya otoyollarda, birçok pompa kasada veya otomat terminalinde ön ödeme (Pré-Pagamento) gerektirir.</p>
<p class='mb-4'>Depoyu doldurduktan sonra içeride uzun alışveriş yapmak için aracınızı pompada bırakmayın. Önce park yerine çekin. "Gasóleo" Dizeldir (siyah/sarı sap), "Gasolina 95" Kurşunsuzdur (yeşil sap).</p>`,
pt: `<p class='mb-4'>Em Portugal, geralmente abastece primeiro e paga depois. Contudo, à noite (pós-22:00) ou autoestradas, muitas bombas exigem Pré-Pagamento na caixa ou terminal.</p>
<p class='mb-4'>Nunca deixe o carro na bomba após abastecer para ir fazer compras demoradas. Mova o carro primeiro. "Gasóleo" é Diesel (pega preta/amarela), "Gasolina 95" é Sem Chumbo (pega verde).</p>`
}
},
{
id: 'online-shopping-returns',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Consumer Law / UE Directive',
date: '17.02.2026',
title: { en: '14-Day Return Right (Online)', tr: '14 Gün İade Hakkı (Online)', pt: 'Direito de Livre Resolução' },
content: {
en: `<p class='mb-4'>For any product bought online (distance selling), you have a legal "Cooling Off Period" of 14 days to return it for a full refund without giving any reason. This applies even if the package has been opened (but the item must be undamaged).</p>
<p class='mb-4'>The seller must reimburse you within 14 days of receiving the return request. This protection does not apply to in-store purchases, where returns are a courtesy, not a legal right (unless defective).</p>`,
tr: `<p class='mb-4'>Online satın alınan (mesafeli satış) herhangi bir ürün için, sebep göstermeksizin tam iade ile geri göndermek üzere 14 günlük yasal "Cayma Hakkınız" vardır. Paket açılmış olsa bile geçerlidir (ancak ürün hasarsız olmalıdır).</p>
<p class='mb-4'>Satıcı, iade talebini aldıktan sonra 14 gün içinde paranızı iade etmelidir. Bu koruma, iadenin yasal bir hak değil (kusurlu olmadıkça) bir nezaket olduğu mağaza içi alışverişler için geçerli değildir.</p>`,
pt: `<p class='mb-4'>Para produtos comprados online, tem um "Direito de Livre Resolução" de 14 dias para devolver sem justificação e com reembolso total. Aplica-se mesmo se a embalagem for aberta (item intacto).</p>
<p class='mb-4'>O vendedor deve reembolsar em 14 dias. Esta proteção não se aplica a compras em loja física, onde a devolução é cortesia, não direito (salvo defeito).</p>`
}
},

{
id: 'sephardic-ancestry-changes',
stage: 'discover',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'Ministry of Justice',
date: '17.02.2026',
title: { en: 'Sephardic Jewish Ancestry Rules', tr: 'Sefarad Yahudisi Soyu Kuralları', pt: 'Regras de Descendência Sefardita' },
content: {
en: `<p class='mb-4'>The path to citizenship via Sephardic ancestry has become significantly stricter. As of 2024/2025, applicants must now prove a genuine connection to Portugal, which usually requires <strong>3 years of legal residency</strong> in the country.</p>

<p class='mb-4'>Simply proving ancestry via a certificate from the Jewish Community of Lisbon (CIL) is no longer sufficient on its own. This change effectively merges this route with the standard residency-to-citizenship timeline.</p>`,
tr: `<p class='mb-4'>Sefarad soyu üzerinden vatandaşlık yolu önemli ölçüde zorlaştı. 2024/2025 itibarıyla, başvuru sahiplerinin artık Portekiz ile gerçek bir bağ kanıtlaması gerekiyor, bu da genellikle ülkede <strong>3 yıl yasal ikamet</strong> gerektiriyor.</p>
<p class='mb-4'>Sadece Lizbon Yahudi Cemaati'nden (CIL) alınan bir sertifika ile soyu kanıtlamak artık tek başına yeterli değil. Bu değişiklik, bu yolu fiilen standart oturumdan vatandaşlığa geçiş süreciyle birleştiriyor.</p>`,
pt: `<p class='mb-4'>A via para a nacionalidade por ascendência sefardita tornou-se muito mais rigorosa. Desde 2024/2025, os requerentes devem provar uma ligação efetiva a Portugal, o que exige geralmente <strong>3 anos de residência legal</strong>.</p>
<p class='mb-4'>Apenas provar a ascendência via certificado da Comunidade Israelita de Lisboa (CIL) já não é suficiente. Esta alteração funde efetivamente esta via com o prazo padrão de residência.</p>`
}
},
{
id: 'gift-tax-donations',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: 'Gift Tax: Sending Money to Friends', tr: 'Hediye Vergisi: Arkadaşlara Para Göndermek', pt: 'Imposto do Selo em Doações' },
content: {
en: `<p class='mb-4'>Portugal does not have inheritance tax between close family (spouses, parents, children). However, donations or cash transfers to anyone else (friends, siblings, unmarried partners) are subject to <strong>10% Stamp Duty</strong> (Imposto do Selo).</p>
<p class='mb-4'>If you transfer €5,000 to a friend, you are legally required to declare it to Finanças and pay €500. Banks flag large transfers, so be cautious with informal loans or gifts.</p>`,
tr: `<p class='mb-4'>Portekiz'de yakın aile (eşler, ebeveynler, çocuklar) arasında veraset vergisi yoktur. Ancak, başkalarına (arkadaşlar, kardeşler, evli olmayan partnerler) yapılan bağışlar veya nakit transferleri <strong>%10 Damga Vergisi</strong>'ne (Imposto do Selo) tabidir.</p>
<p class='mb-4'>Bir arkadaşınıza 5.000€ transfer ederseniz, yasal olarak bunu Finanças'a beyan etmeniz ve 500€ ödemeniz gerekir. Bankalar büyük transferleri işaretler, bu yüzden gayri resmi borçlara veya hediyelere dikkat edin.</p>`,
pt: `<p class='mb-4'>Portugal não tem imposto sucessório entre familiares diretos (cônjuges, pais, filhos). Contudo, doações a outros (amigos, irmãos, namorados) estão sujeitas a <strong>10% de Imposto do Selo</strong>.</p>
<p class='mb-4'>Se transferir 5.000€ a um amigo, é obrigado a declarar às Finanças e pagar 500€. Os bancos sinalizam grandes transferências, por isso cuidado com empréstimos informais.</p>`
}
},
{
id: 'pets-public-transport',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'CP / Metro Lisboa',
date: '05.02.2026',
title: { en: 'Pets on Trains and Metro', tr: 'Tren ve Metroda Evcil Hayvanlar', pt: 'Animais nos Transportes' },
content: {
en: `<p class='mb-4'>You can take pets on public transport in Portugal, usually for free. Small pets must travel in a carrier. Larger dogs are allowed but must be on a short leash and wear a muzzle (açaime), regardless of the breed.</p>
<p class='mb-4'>You must also carry the pet's vaccination bulletin and registration document. Conductors can refuse entry if the train is too crowded or if the animal appears aggressive or dirty.</p>`,
tr: `<p class='mb-4'>Portekiz'de toplu taşımaya evcil hayvan kabul edilir, genellikle ücretsizdir. Küçük evcil hayvanlar taşıma çantasında olmalıdır. Daha büyük köpeklere izin verilir ancak ırkı ne olursa olsun kısa tasmada olmalı ve ağızlık (açaime) takmalıdır.</p>
<p class='mb-4'>Ayrıca evcil hayvanın aşı karnesini ve kayıt belgesini yanınızda bulundurmalısınız. Tren çok kalabalıksa veya hayvan saldırgan/kirli görünüyorsa kondüktörler girişi reddedebilir.</p>`,
pt: `<p class='mb-4'>Pode levar animais nos transportes, geralmente grátis. Animais pequenos devem ir em transportadora. Cães grandes são permitidos mas devem ter trela curta e açaime, independentemente da raça.</p>
<p class='mb-4'>Deve levar o boletim de vacinas e registo. Os revisores podem recusar a entrada se o comboio estiver cheio ou o animal parecer agressivo ou sujo.</p>`
}
},
{
id: 'cinema-language-dubbing',
stage: 'discover',
category: { en: 'Language & Culture', tr: 'Dil & Kültür', pt: 'Língua e Cultura' },
source: 'Community Insights',
date: '14.02.2026',
title: { en: 'Cinema: Subtitles vs. Dubbing', tr: 'Sinema: Altyazı ve Dublaj', pt: 'Cinema: Legendas vs. Dobragem' },
content: {
en: `<p class='mb-4'>Good news for expats: Portugal rarely dubs movies for adults. Films are shown in their original language (usually English) with Portuguese subtitles. Look for "VO" (Versão Original) on the listing.</p>
<p class='mb-4'>The exception is animated movies for children, which are almost always dubbed ("VP" - Versão Portuguesa). If you want to see a Disney movie in English, you must specifically look for a late-night session marked "VO".</p>`,
tr: `<p class='mb-4'>Gurbetçiler için iyi haber: Portekiz yetişkin filmlerine nadiren dublaj yapar. Filmler orijinal dillerinde (genellikle İngilizce) ve Portekizce altyazılı gösterilir. Listede "VO" (Versão Original) ibaresini arayın.</p>
<p class='mb-4'>İstisna, neredeyse her zaman dublajlı olan ("VP" - Versão Portuguesa) çocuk animasyonlarıdır. Bir Disney filmini İngilizce izlemek istiyorsanız, özellikle "VO" işaretli geç seansları aramalısınız.</p>`,
pt: `<p class='mb-4'>Boas notícias: Portugal raramente dobra filmes para adultos. São exibidos na língua original (geralmente inglês) com legendas. Procure "VO" (Versão Original) no cartaz.</p>
<p class='mb-4'>A exceção são filmes de animação, quase sempre dobrados ("VP" - Versão Portuguesa). Se quiser ver um filme da Disney em inglês, deve procurar sessões noturnas marcadas como "VO".</p>`
}
},
{
id: 'subletting-illegal-risks',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Civil Code / Código Civil',
date: '20.01.2026',
title: { en: 'The Risks of Subletting', tr: 'Evi Başkasına Kiralamanın Riskleri', pt: 'Riscos do Subarrendamento' },
content: {
en: `<p class='mb-4'>Subletting your apartment (e.g., putting a room on Airbnb while you travel) is illegal without written authorization from your landlord. If caught, this is grounds for immediate eviction.</p>
<p class='mb-4'>Furthermore, income from subletting must be declared to Finanças. If you are a tenant, you cannot charge more rent to a sub-tenant than what you pay proportionally to the landlord (plus a max 20% margin for furniture).</p>`,
tr: `<p class='mb-4'>Dairenizi başkasına kiralamak (örn. seyahatteyken bir odayı Airbnb'ye koymak), ev sahibinin yazılı izni olmadan yasa dışıdır. Yakalanırsanız, bu derhal tahliye sebebidir.</p>
<p class='mb-4'>Ayrıca, alt kiralamadan elde edilen gelir Finanças'a beyan edilmelidir. Kiracıysanız, alt kiracıdan ev sahibine orantılı olarak ödediğinizden (artı mobilya için maks. %20 marj) daha fazla kira talep edemezsiniz.</p>`,
pt: `<p class='mb-4'>Subarrendar (ex: pôr um quarto no Airbnb) é ilegal sem autorização escrita do senhorio. Se for apanhado, é motivo para despejo imediato.</p>
<p class='mb-4'>Além disso, a renda do subarrendamento deve ser declarada. Se for inquilino, não pode cobrar ao subarrendatário mais do que paga proporcionalmente (mais 20% máx. pela mobília).</p>`
}
},
{
id: 'company-unipessoal-lda',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Empresa na Hora',
date: '12.02.2026',
title: { en: 'Freelancer vs. Company (Unipessoal)', tr: 'Freelancer ve Şirket (Unipessoal) Farkı', pt: 'Recibos Verdes vs. Unipessoal Lda' },
content: {
en: `<p class='mb-4'>If your annual income exceeds €30k-€40k, switching from Freelancer (Recibos Verdes) to a "Unipessoal Lda" (Single-Member Company) might be tax-efficient. It allows you to deduct more business expenses.</p>
<p class='mb-4'>However, a company requires a certified accountant (TOC), which costs €150-€200/month. You also pay Corporate Tax (IRC) on profits. Consult a specialist to calculate the break-even point for your specific situation.</p>`,
tr: `<p class='mb-4'>Yıllık geliriniz 30k-40k€'yu aşıyorsa, Freelancer'dan (Recibos Verdes) "Unipessoal Lda"ya (Tek Ortaklı Şirket) geçmek vergi açısından verimli olabilir. Daha fazla iş gideri düşmenize olanak tanır.</p>
<p class='mb-4'>Ancak, bir şirket yeminli mali müşavir (TOC) gerektirir, bu da aylık 150€-200€ tutar. Ayrıca kâr üzerinden Kurumlar Vergisi (IRC) ödersiniz. Durumunuz için başa baş noktasını hesaplamak adına bir uzmana danışın.</p>`,
pt: `<p class='mb-4'>Se faturar mais de 30k-40k€, mudar de Recibos Verdes para "Unipessoal Lda" pode ser eficiente. Permite deduzir mais despesas.</p>
<p class='mb-4'>Contudo, exige Contabilista Certificado (TOC), custando 150€-200€/mês. Também paga IRC sobre lucros. Consulte um especialista para calcular o ponto de equilíbrio.</p>`
}
},
{
id: 'overstay-fines-schengen',
stage: 'discover',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'AIMA / Border Control',
date: '17.02.2026',
title: { en: 'Fines for Overstaying Visas', tr: 'Vize Süresini Aşma Cezaları', pt: 'Multas por Excesso de Estadia' },
content: {
en: `<p class='mb-4'>If you stay in Portugal past your visa expiry without a pending AIMA appointment, you are illegal. If caught exiting the country, fines range from €80 to €700 depending on the duration of the overstay.</p>
<p class='mb-4'>More importantly, you may be flagged in the Schengen Information System (SIS), which could lead to entry bans for future trips to any EU country. Always carry proof of your AIMA appointment to justify your stay.</p>`,
tr: `<p class='mb-4'>Bekleyen bir AIMA randevunuz olmadan vize sürenizi aşarsanız kaçak durumuna düşersiniz. Ülkeden çıkarken yakalanırsanız, sürenin uzunluğuna bağlı olarak 80€ ile 700€ arasında para cezası uygulanır.</p>
<p class='mb-4'>Daha da önemlisi, Schengen Bilgi Sistemi'nde (SIS) işaretlenebilirsiniz, bu da herhangi bir AB ülkesine gelecekteki seyahatlerinizde giriş yasağına yol açabilir. Kalışınızı haklı çıkarmak için AIMA randevu kanıtınızı daima taşıyın.</p>`,
pt: `<p class='mb-4'>Se ficar além do visto sem agendamento na AIMA, está ilegal. Ao sair, as multas variam de 80€ a 700€ dependendo da duração.</p>
<p class='mb-4'>Mais importante, pode ser sinalizado no Sistema de Informação Schengen (SIS), levando a proibição de entrada na UE. Leve sempre prova do agendamento para justificar a estadia.</p>`
}
},
{
id: 'school-grade-equivalency',
stage: 'settle',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'DGE / Ministry of Education',
date: '28.01.2026',
title: { en: 'School Grade Equivalency', tr: 'Okul Not Denklik İşlemleri', pt: 'Equivalência de Habilitações' },
content: {
en: `<p class='mb-4'>To enroll your child in a Portuguese school at the correct grade level, you need "Equivalência de Habilitações". You must submit their previous school records (apostilled and translated) to the chosen school or the DGE.</p>
<p class='mb-4'>Without this, the school may place the child in a lower grade based solely on age or force them to take placement tests. Start this process months before the school year begins in September.</p>`,
tr: `<p class='mb-4'>Çocuğunuzu Portekiz okuluna doğru sınıf seviyesinde kaydettirmek için "Equivalência de Habilitações"e ihtiyacınız vardır. Önceki okul kayıtlarını (apostilli ve tercüme edilmiş) seçilen okula veya DGE'ye sunmalısınız.</p>
<p class='mb-4'>Bu olmadan, okul çocuğu sadece yaşına göre daha alt bir sınıfa yerleştirebilir veya seviye tespit sınavlarına girmeye zorlayabilir. Bu süreci okul yılı Eylül'de başlamadan aylar önce başlatın.</p>`,
pt: `<p class='mb-4'>Para matricular o seu filho no ano correto, precisa de "Equivalência de Habilitações". Deve entregar o histórico escolar (apostilado e traduzido) na escola ou DGE.</p>
<p class='mb-4'>Sem isto, a escola pode colocar a criança num ano inferior ou exigir testes. Inicie o processo meses antes do ano letivo começar em setembro.</p>`
}
},
{
id: 'medical-thermal-baths',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'SNS / Termas de Portugal',
date: '03.02.2026',
title: { en: 'Prescribed Thermal Treatments', tr: 'Reçeteli Kaplıca Tedavileri', pt: 'Termas com Comparticipação' },
content: {
en: `<p class='mb-4'>Portugal has a rich culture of Medical Spas (Termas). Treatments for respiratory or musculoskeletal issues can be prescribed by your family doctor and are partially subsidized (comparticipado) by the SNS.</p>
<p class='mb-4'>A typical treatment lasts 12 to 14 days. You pay the spa directly, and the state reimburses a percentage (usually 35%) later. It is a popular and effective therapy for chronic conditions like asthma or arthritis.</p>`,
tr: `<p class='mb-4'>Portekiz zengin bir Tıbbi Kaplıca (Termas) kültürüne sahiptir. Solunum veya kas-iskelet sorunları için tedaviler aile hekiminiz tarafından reçete edilebilir ve SNS tarafından kısmen karşılanır (comparticipado).</p>
<p class='mb-4'>Tipik bir tedavi 12 ila 14 gün sürer. Ödemeyi doğrudan kaplıcaya yaparsınız ve devlet daha sonra bir yüzdesini (genellikle %35) geri öder. Astım veya artrit gibi kronik durumlar için popüler ve etkili bir terapidir.</p>`,
pt: `<p class='mb-4'>Portugal tem uma rica cultura de Termas. Tratamentos respiratórios ou musculares podem ser prescritos pelo médico de família e são comparticipados pelo SNS.</p>
<p class='mb-4'>Um tratamento dura 12 a 14 dias. Paga às termas e o estado reembolsa uma percentagem (geralmente 35%). É uma terapia popular para asma ou artrite.</p>`
}
},
{
id: 'transport-strikes-greve',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Community Insights',
date: '12.02.2026',
title: { en: 'Surviving Transport Strikes', tr: 'Ulaşım Grevlerinde Hayatta Kalmak', pt: 'Sobreviver a Greves de Transportes' },
content: {
en: `<p class='mb-4'>Strikes (Greves) are common in Portugal, particularly affecting trains (CP) and the Metro. However, the law guarantees "Serviços Mínimos" (Minimum Services) during strikes, ensuring rush hour trains still run.</p>
<p class='mb-4'>Check the operator's website a day before travel. If a strike is announced, plan for delays or use ride-hailing apps, though prices for Uber/Bolt usually surge during these disruptions.</p>`,
tr: `<p class='mb-4'>Grevler (Greves) Portekiz'de yaygındır, özellikle trenleri (CP) ve Metroyu etkiler. Ancak yasa, grevler sırasında "Serviços Mínimos"u (Asgari Hizmetler) garanti eder, bu da yoğun saatlerde trenlerin çalışmasını sağlar.</p>
<p class='mb-4'>Seyahatten bir gün önce operatörün sitesini kontrol edin. Grev duyurulursa gecikmelere hazırlıklı olun veya araç çağırma uygulamalarını kullanın, ancak bu aksaklıklarda Uber/Bolt fiyatları genellikle fırlar.</p>`,
pt: `<p class='mb-4'>Greves são comuns, afetando especialmente a CP e o Metro. Contudo, a lei garante "Serviços Mínimos", assegurando comboios nas horas de ponta.</p>
<p class='mb-4'>Verifique o site do operador na véspera. Se houver greve, conte com atrasos ou use apps de transporte, embora os preços da Uber/Bolt disparem nestas alturas.</p>`
}
},

    {
id: 'irs-annex-j-foreign-income',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: 'IRS Annex J: Declaring Foreign Income', tr: 'IRS Ek J: Yabancı Gelir Beyanı', pt: 'IRS Anexo J: Rendimentos Estrangeiros' },
content: {
en: `<p class='mb-4'>If you are a tax resident in Portugal (like most D7/D8 holders), you must declare your worldwide income, not just what you earn locally. This is done in "Annex J" of your annual tax return.</p>

<p class='mb-4'>You must list pensions, dividends, and salaries earned abroad. Even if this income is not taxed in Portugal due to Double Taxation Treaties, failing to declare it is tax evasion and carries heavy fines.</p>`,
tr: `<p class='mb-4'>Portekiz'de vergi mukimiyseniz (çoğu D7/D8 sahibi gibi), sadece yerel kazancınızı değil, dünya çapındaki gelirinizi de beyan etmelisiniz. Bu işlem, yıllık vergi beyannamenizin "Ek J" bölümünde yapılır.</p>
<p class='mb-4'>Yurtdışından elde edilen emekli maaşlarını, temettüleri ve maaşları listelemelisiniz. Çifte Vergilendirmeyi Önleme Anlaşmaları nedeniyle bu gelir Portekiz'de vergilendirilmese bile, beyan etmemek vergi kaçakçılığıdır ve ağır cezaları vardır.</p>`,
pt: `<p class='mb-4'>Se é residente fiscal (como a maioria dos vistos D7/D8), deve declarar o seu rendimento mundial, não apenas o local. Isto é feito no "Anexo J" da declaração anual.</p>
<p class='mb-4'>Deve listar pensões, dividendos e salários do estrangeiro. Mesmo que não seja tributado em Portugal devido a Acordos de Dupla Tributação, não declarar é evasão fiscal e dá multa.</p>`
}
},
{
id: 'pets-in-rentals-law',
stage: 'discover',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Civil Code / Código Civil',
date: '17.02.2026',
title: { en: 'Can Landlords Ban Pets?', tr: 'Ev Sahipleri Evcil Hayvanı Yasaklayabilir mi?', pt: 'Senhorios Podem Proibir Animais?' },
content: {
en: `<p class='mb-4'>Contrary to popular belief, landlords in Portugal <strong>can</strong> legally include a "no pets" clause in a rental contract. While the law prevents blanket bans in condominiums, private rental contracts are based on mutual agreement.</p>
<p class='mb-4'>However, if the contract does not explicitly forbid pets, the landlord cannot evict you later for getting a dog or cat, provided the animal does not disturb the neighbors or damage the property.</p>`,
tr: `<p class='mb-4'>Yaygın inanışın aksine, Portekiz'deki ev sahipleri kira sözleşmesine "evcil hayvan yasak" maddesi <strong>koyabilir</strong>. Yasa apartman yönetimlerinin genel yasak koymasını engellese de, özel kira sözleşmeleri karşılıklı anlaşmaya dayanır.</p>
<p class='mb-4'>Ancak, sözleşme evcil hayvanları açıkça yasaklamıyorsa, hayvan komşuları rahatsız etmediği veya mülke zarar vermediği sürece ev sahibi sonradan kedi veya köpek aldığınız için sizi tahliye edemez.</p>`,
pt: `<p class='mb-4'>Ao contrário do que se pensa, os senhorios <strong>podem</strong> incluir uma cláusula de "proibido animais" no contrato. Embora a lei impeça proibições gerais em condomínios, os contratos privados baseiam-se no acordo mútuo.</p>
<p class='mb-4'>Contudo, se o contrato não proibir explicitamente, o senhorio não o pode despejar por ter um cão ou gato, desde que o animal não incomode vizinhos nem danifique o imóvel.</p>`
}
},
{
id: 'driving-foreign-plates',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Customs Authority / Alfândega',
date: '05.02.2026',
title: { en: 'Driving a Foreign Car in Portugal', tr: 'Portekiz\'de Yabancı Plakalı Araç Kullanmak', pt: 'Conduzir Carro Estrangeiro' },
content: {
en: `<p class='mb-4'>If you become a resident, you cannot drive a foreign-plated car for more than 20 working days. You must either legalize it (import it) or sell/export it. The "6-month rule" applies only to tourists.</p>
<p class='mb-4'>Police frequently check foreign cars near schools and residential areas. If they suspect you are a resident driving a foreign car to avoid taxes, they can seize the vehicle and issue a massive fine equal to the unpaid import tax.</p>`,
tr: `<p class='mb-4'>Oturum izni alırsanız, yabancı plakalı bir aracı 20 iş gününden fazla kullanamazsınız. Ya yasallaştırmalı (ithal etmeli) ya da satmalı/ihraç etmelisiniz. "6 ay kuralı" sadece turistler için geçerlidir.</p>
<p class='mb-4'>Polis, okul ve yerleşim yerleri yakınında yabancı araçları sıkça kontrol eder. Vergiden kaçınmak için yabancı araç kullanan bir mukim olduğunuzdan şüphelenirlerse, araca el koyabilir ve ödenmemiş ithalat vergisine eşit devasa bir ceza kesebilirler.</p>`,
pt: `<p class='mb-4'>Se se tornar residente, não pode conduzir um carro estrangeiro por mais de 20 dias úteis. Deve legalizá-lo ou exportá-lo. A "regra dos 6 meses" aplica-se apenas a turistas.</p>
<p class='mb-4'>A polícia fiscaliza carros estrangeiros em zonas residenciais. Se suspeitarem que é residente a evitar impostos, podem apreender o veículo e aplicar uma multa igual ao imposto em falta.</p>`
}
},
{
id: 'vat-exemption-freelancers',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Tax Authority / Finanças',
date: '12.02.2026',
title: { en: 'VAT Exemption for Freelancers', tr: 'Freelancerlar İçin KDV Muafiyeti', pt: 'Isenção de IVA (Artigo 53)' },
content: {
en: `<p class='mb-4'>Freelancers earning below a certain annual threshold (approx. €15,000 in 2026) are exempt from charging VAT (IVA) under "Article 53". This simplifies invoicing significantly.</p>
<p class='mb-4'>However, once you cross this threshold in a calendar year, you must submit a declaration of change in January of the following year and start charging VAT on all invoices from February onwards.</p>`,
tr: `<p class='mb-4'>Belirli bir yıllık eşiğin (2026'da yaklaşık 15.000€) altında kazanan freelancerlar, "Madde 53" kapsamında KDV (IVA) tahsil etmekten muaftır. Bu, faturalamayı önemli ölçüde basitleştirir.</p>
<p class='mb-4'>Ancak, bir takvim yılında bu eşiği geçtiğinizde, bir sonraki yılın Ocak ayında değişiklik beyannamesi vermeli ve Şubat ayından itibaren tüm faturalarda KDV tahsil etmeye başlamalısınız.</p>`,
pt: `<p class='mb-4'>Freelancers que faturem abaixo de um certo limite (aprox. 15.000€ em 2026) estão isentos de IVA ao abrigo do "Artigo 53". Isto simplifica muito a faturação.</p>
<p class='mb-4'>Contudo, ao ultrapassar este limite num ano civil, deve entregar declaração de alteração em janeiro seguinte e começar a cobrar IVA a partir de fevereiro.</p>`
}
},
{
id: 'pregnancy-sns-free',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'SNS Official',
date: '28.01.2026',
title: { en: 'Pregnancy & Childbirth Costs', tr: 'Hamilelik ve Doğum Masrafları', pt: 'Custos de Gravidez e Parto' },
content: {
en: `<p class='mb-4'>Maternal healthcare is entirely free in the public system (SNS), regardless of your residency status complexity. Pregnant women receive a "Boletim de Saúde da Grávida" which exempts them from all medical user fees.</p>
<p class='mb-4'>This covers all prenatal appointments, ultrasounds, and the delivery itself. Public hospitals in Portugal are well-equipped for births, though you may share a recovery room with other mothers.</p>`,
tr: `<p class='mb-4'>Annelik sağlık hizmetleri, oturum durumunuz ne olursa olsun kamu sisteminde (SNS) tamamen ücretsizdir. Hamile kadınlara, tüm tıbbi kullanıcı ücretlerinden muaf tutan bir "Boletim de Saúde da Grávida" verilir.</p>
<p class='mb-4'>Bu, tüm doğum öncesi randevuları, ultrasonları ve doğumun kendisini kapsar. Portekiz'deki devlet hastaneleri doğum için iyi donanımlıdır, ancak iyileşme odasını diğer annelerle paylaşabilirsiniz.</p>`,
pt: `<p class='mb-4'>A saúde materna é totalmente gratuita no SNS, independentemente do estatuto de residência. As grávidas recebem o "Boletim de Saúde da Grávida" que as isenta de taxas moderadoras.</p>
<p class='mb-4'>Cobre consultas pré-natais, ecografias e o parto. Os hospitais públicos estão bem equipados, embora possa ter de partilhar o quarto de recuperação com outras mães.</p>`
}
},
{
id: 'registered-mail-cancellation',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'CTT Official',
date: '03.02.2026',
title: { en: 'The Power of "Carta Registada"', tr: '"Carta Registada"nın Gücü', pt: 'O Poder da Carta Registada' },
content: {
en: `<p class='mb-4'>In Portugal, email is often ignored for legal matters. To cancel a contract (gym, internet, rent) or send a formal complaint, you must use "Carta Registada com Aviso de Receção" (Registered Mail with Return Receipt).</p>
<p class='mb-4'>The signed receipt you get back is your legal proof that the entity received your request on a specific date. Without this little yellow card, companies can claim they never received your cancellation notice.</p>`,
tr: `<p class='mb-4'>Portekiz'de e-posta yasal konularda genellikle göz ardı edilir. Bir sözleşmeyi (spor salonu, internet, kira) iptal etmek veya resmi şikayet göndermek için "Carta Registada com Aviso de Receção" (İadeli Taahhütlü Posta) kullanmalısınız.</p>
<p class='mb-4'>Geri aldığınız imzalı makbuz, kurumun talebinizi belirli bir tarihte aldığına dair yasal kanıtınızdır. Bu küçük sarı kart olmadan, şirketler iptal bildiriminizi asla almadıklarını iddia edebilirler.</p>`,
pt: `<p class='mb-4'>Em Portugal, o e-mail é ignorado em questões legais. Para cancelar contratos (ginásio, net, renda), deve usar "Carta Registada com Aviso de Receção".</p>
<p class='mb-4'>O aviso assinado que recebe de volta é a prova legal de que a entidade recebeu o pedido naquela data. Sem este cartão amarelo, as empresas podem alegar que nunca receberam o aviso.</p>`
}
},
{
id: 'rustic-vs-urban-land',
stage: 'discover',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Real Estate Law',
date: '20.01.2026',
title: { en: 'Buying Land: Rustic vs. Urban', tr: 'Arazi Alımı: Kırsal ve Kentsel', pt: 'Terreno Rústico vs. Urbano' },
content: {
en: `<p class='mb-4'>Be very careful when buying cheap land. "Terreno Rústico" is agricultural land where building is strictly prohibited or severely limited to small support structures. You cannot build a house there.</p>
<p class='mb-4'>To build a home, you need "Terreno Urbano" or a plot with a pre-approved "Viabilidade de Construção". Many expats get stuck with useless land because they didn't check the PDM (Municipal Master Plan) at the City Hall.</p>`,
tr: `<p class='mb-4'>Ucuz arazi alırken çok dikkatli olun. "Terreno Rústico", yapılaşmanın kesinlikle yasak olduğu veya küçük destek yapılarıyla ciddi şekilde sınırlandırıldığı tarım arazisidir. Oraya ev yapamazsınız.</p>
<p class='mb-4'>Ev yapmak için "Terreno Urbano"ya veya önceden onaylanmış "Viabilidade de Construção"ya sahip bir parsele ihtiyacınız vardır. Birçok gurbetçi, Belediye'de PDM'yi (Belediye İmar Planı) kontrol etmediği için işe yaramaz arazilerle ortada kalır.</p>`,
pt: `<p class='mb-4'>Cuidado ao comprar terreno barato. "Terreno Rústico" é agrícola, onde a construção é proibida ou limitada a pequenos apoios. Não pode construir uma casa lá.</p>
<p class='mb-4'>Para construir, precisa de "Terreno Urbano" ou com "Viabilidade de Construção". Muitos estrangeiros ficam com terrenos inúteis por não consultarem o PDM na Câmara.</p>`
}
},
{
id: 'permanent-residency-requirements',
stage: 'settle',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'AIMA Official',
date: '17.02.2026',
title: { en: 'Permanent Residency (5 Years)', tr: 'Daimi Oturum İzni (5 Yıl)', pt: 'Residência Permanente' },
content: {
en: `<p class='mb-4'>After 5 years of temporary residency, you can apply for Permanent Residency. Unlike citizenship, this does not give you a passport, but it grants a 10-year renewable card and protects you from deportation.</p>
<p class='mb-4'>You still need to prove basic Portuguese knowledge (A2 level) and financial means. It is a good alternative for those whose home countries do not allow dual citizenship.</p>`,
tr: `<p class='mb-4'>5 yıllık geçici oturumdan sonra Daimi Oturum İzni'ne başvurabilirsiniz. Vatandaşlığın aksine bu size pasaport vermez, ancak 10 yıllık yenilenebilir bir kart sağlar ve sizi sınır dışı edilmekten korur.</p>
<p class='mb-4'>Yine de temel Portekizce bilgisini (A2 seviyesi) ve finansal yeterliliği kanıtlamanız gerekir. Kendi ülkeleri çifte vatandaşlığa izin vermeyenler için iyi bir alternatiftir.</p>`,
pt: `<p class='mb-4'>Após 5 anos de residência temporária, pode pedir Residência Permanente. Ao contrário da nacionalidade, não dá passaporte, mas garante um cartão de 10 anos e proteção contra deportação.</p>
<p class='mb-4'>Ainda precisa de provar português básico (A2) e meios financeiros. É uma boa alternativa para quem vem de países que não permitem dupla nacionalidade.</p>`
}
},
{
id: 'beer-ordering-imperial-fino',
stage: 'discover',
category: { en: 'Language & Culture', tr: 'Dil & Kültür', pt: 'Língua e Cultura' },
source: 'Community Insights',
date: '14.02.2026',
title: { en: 'Ordering Beer: Imperial vs. Fino', tr: 'Bira Siparişi: Imperial ve Fino', pt: 'Pedir Cerveja: Imperial vs. Fino' },
content: {
en: `<p class='mb-4'>Ordering a draft beer requires geography skills. In Lisbon and the south, you ask for an "Imperial". In Porto and the north, you ask for a "Fino". Both refer to the same 20cl draft beer.</p>
<p class='mb-4'>If you want a larger glass (usually 40cl or 50cl), ask for a "Caneca". Portuguese beer is typically a lager, with Super Bock (North) and Sagres (South) being the eternal rivals.</p>`,
tr: `<p class='mb-4'>Fıçı bira sipariş etmek coğrafya bilgisi gerektirir. Lizbon ve güneyde "Imperial" istersiniz. Porto ve kuzeyde "Fino" istersiniz. İkisi de aynı 20cl fıçı birayı ifade eder.</p>
<p class='mb-4'>Daha büyük bir bardak (genellikle 40cl veya 50cl) isterseniz "Caneca" isteyin. Portekiz birası genellikle lagerdir; Super Bock (Kuzey) ve Sagres (Güney) ezeli rakiplerdir.</p>`,
pt: `<p class='mb-4'>Pedir imperial requer geografia. Em Lisboa e no sul, pede-se uma "Imperial". No Porto e norte, pede-se um "Fino". Ambos referem-se à mesma cerveja de pressão de 20cl.</p>
<p class='mb-4'>Se quiser um copo maior (40cl ou 50cl), peça uma "Caneca". A cerveja portuguesa é tipicamente lager, com a Super Bock e a Sagres como rivais eternas.</p>`
}
},
{
id: 'consumer-arbitration-centers',
stage: 'settle',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'Ministry of Justice',
date: '10.02.2026',
title: { en: 'Free Legal Help: Arbitration Centers', tr: 'Ücretsiz Hukuki Yardım: Tahkim Merkezleri', pt: 'Centros de Arbitragem' },
content: {
en: `<p class='mb-4'>If you have a dispute with a utility provider, bank, or insurance company, you don't need a lawyer immediately. You can appeal to a "Centro de Arbitragem de Conflitos de Consumo".</p>
<p class='mb-4'>These centers offer mediation and binding decisions for free or a nominal fee. They are specialized by sector (e.g., Energy, Insurance, Auto) and are much faster than the court system for resolving consumer complaints.</p>`,
tr: `<p class='mb-4'>Bir hizmet sağlayıcı, banka veya sigorta şirketiyle anlaşmazlığınız varsa hemen avukata ihtiyacınız yoktur. "Centro de Arbitragem de Conflitos de Consumo"ya (Tüketici Uyuşmazlıkları Tahkim Merkezi) başvurabilirsiniz.</p>
<p class='mb-4'>Bu merkezler ücretsiz veya sembolik bir ücret karşılığında arabuluculuk ve bağlayıcı kararlar sunar. Sektöre göre (Enerji, Sigorta, Otomotiv) uzmanlaşmışlardır ve tüketici şikayetlerini çözmek için mahkemeden çok daha hızlıdırlar.</p>`,
pt: `<p class='mb-4'>Se tiver disputas com fornecedores de luz, bancos ou seguros, não precisa logo de advogado. Pode recorrer a um "Centro de Arbitragem de Conflitos de Consumo".</p>
<p class='mb-4'>Oferecem mediação e decisões vinculativas gratuitamente ou por valor simbólico. São especializados por setor e muito mais rápidos que os tribunais.</p>`
}
},

    {
id: 'certificado-bagagem-customs',
stage: 'apply',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'Portuguese Consulate / Customs',
date: '17.02.2026',
title: { en: 'Moving Your Belongings Tax-Free', tr: 'Eşyalarınızı Vergisiz Taşımak', pt: 'Certificado de Bagagem' },
content: {
en: `<p class='mb-4'>To bring your furniture and personal goods to Portugal without paying 23% VAT, you need a "Certificado de Bagagem" (Baggage Certificate). You must request this at the Portuguese Consulate in your home country <strong>before</strong> you move.</p>

<p class='mb-4'>You will need a detailed inventory list (Lista de Bens) of everything you are bringing. You must have owned these items for at least 6 months. Without this certificate, your container could be stuck in customs for months with heavy fees.</p>`,
tr: `<p class='mb-4'>Mobilyalarınızı ve kişisel eşyalarınızı %23 KDV ödemeden Portekiz'e getirmek için bir "Certificado de Bagagem" (Bagaj Sertifikası) almanız gerekir. Bunu taşınmadan <strong>önce</strong> ülkenizdeki Portekiz Konsolosluğu'ndan talep etmelisiniz.</p>
<p class='mb-4'>Getireceğiniz her şeyin detaylı bir envanter listesine (Lista de Bens) ihtiyacınız olacak. Bu eşyalara en az 6 aydır sahip olmalısınız. Bu sertifika olmadan, konteyneriniz gümrükte aylarca kalabilir ve ağır ücretler ödeyebilirsiniz.</p>`,
pt: `<p class='mb-4'>Para trazer móveis e bens pessoais para Portugal sem pagar 23% de IVA, precisa de um "Certificado de Bagagem". Deve pedi-lo no Consulado Português do seu país <strong>antes</strong> de se mudar.</p>
<p class='mb-4'>Precisará de uma lista de inventário detalhada (Lista de Bens). Deve possuir estes itens há pelo menos 6 meses. Sem este certificado, o contentor pode ficar retido na alfândega com taxas pesadas.</p>`
}
},
{
id: 'subsidio-alimentacao-meal-card',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'State Budget 2026',
date: '10.02.2026',
title: { en: 'Meal Allowance (Subsídio de Alimentação)', tr: 'Yemek Ödeneği (Subsídio de Alimentação)', pt: 'Subsídio de Alimentação' },
content: {
en: `<p class='mb-4'>In addition to salary, most Portuguese companies pay a daily Meal Allowance. If paid in cash, it is tax-free up to €6.00 per day. If paid onto a "Meal Card" (Cartão Refeição), the tax-free limit increases to €9.60 per day.</p>
<p class='mb-4'>This card can be used at supermarkets and restaurants. It is a smart way to increase your net income, so always ask potential employers if they offer the allowance via card to maximize the benefit.</p>`,
tr: `<p class='mb-4'>Maaşa ek olarak, çoğu Portekiz şirketi günlük Yemek Ödeneği öder. Nakit ödenirse, günlük 6,00€'ya kadar vergiden muaftır. "Yemek Kartı" (Cartão Refeição) ile ödenirse, vergisiz limit günlük 9,60€'ya çıkar.</p>
<p class='mb-4'>Bu kart süpermarketlerde ve restoranlarda kullanılabilir. Net gelirinizi artırmanın akıllıca bir yoludur, bu yüzden potansiyel işverenlere ödeneği kartla verip vermediklerini mutlaka sorun.</p>`,
pt: `<p class='mb-4'>Além do salário, a maioria das empresas paga Subsídio de Alimentação. Se pago em dinheiro, é isento de imposto até 6,00€/dia. Se pago em "Cartão Refeição", o limite sobe para 9,60€/dia.</p>
<p class='mb-4'>Este cartão pode ser usado em supermercados e restaurantes. É uma forma inteligente de aumentar o rendimento líquido, por isso pergunte sempre se pagam via cartão.</p>`
}
},
{
id: 'basic-bank-account-services',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Bank of Portugal',
date: '17.02.2026',
title: { en: 'Low-Cost Banking: SMB Account', tr: 'Düşük Maliyetli Bankacılık: SMB Hesabı', pt: 'Conta de Serviços Mínimos Bancários' },
content: {
en: `<p class='mb-4'>If you only have one bank account in Portugal, you can request to convert it into a "Conta de Serviços Mínimos Bancários". By law, the maintenance fee for this account cannot exceed roughly €5 per year.</p>
<p class='mb-4'>It includes a debit card, online banking, and transfers within the EU. Banks often hide this option to sell expensive packages, but they are legally obliged to provide it if you meet the criteria (holding no other active accounts).</p>`,
tr: `<p class='mb-4'>Portekiz'de sadece bir banka hesabınız varsa, bunu "Conta de Serviços Mínimos Bancários"a dönüştürmeyi talep edebilirsiniz. Yasaya göre, bu hesabın bakım ücreti yıllık yaklaşık 5€'yu geçemez.</p>
<p class='mb-4'>Banka kartı, internet bankacılığı ve AB içi transferleri içerir. Bankalar pahalı paketler satmak için bu seçeneği genellikle gizler, ancak kriterleri karşılıyorsanız (başka aktif hesabınız yoksa) bunu sağlamakla yasal olarak yükümlüdürler.</p>`,
pt: `<p class='mb-4'>Se tiver apenas uma conta bancária em Portugal, pode pedir para convertê-la em "Conta de Serviços Mínimos Bancários". Por lei, a comissão de manutenção não pode exceder cerca de 5€ por ano.</p>
<p class='mb-4'>Inclui cartão de débito, homebanking e transferências na UE. Os bancos escondem esta opção para vender pacotes caros, mas são obrigados a fornecê-la se cumprir os critérios.</p>`
}
},
{
id: 'mandatory-gas-inspection',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'DGEG / Energy Directorate',
date: '05.02.2026',
title: { en: 'Mandatory Gas Inspections', tr: 'Zorunlu Gaz Tesisatı Muayenesi', pt: 'Inspeção Obrigatória de Gás' },
content: {
en: `<p class='mb-4'>If your home uses piped natural gas, the installation must be inspected every 5 years (for installations over 20 years old) or when changing the contract holder. This is crucial for safety and insurance validity.</p>
<p class='mb-4'>The inspection costs around €50-€80. You must hire an accredited entity. If a leak is found, the gas supply will be cut off immediately until repairs are made by a certified technician.</p>`,
tr: `<p class='mb-4'>Eviniz doğalgaz kullanıyorsa, tesisat her 5 yılda bir (20 yaşından büyük tesisatlar için) veya sözleşme sahibi değiştiğinde muayene edilmelidir. Bu, güvenlik ve sigorta geçerliliği için kritiktir.</p>
<p class='mb-4'>Muayene yaklaşık 50€-80€ tutar. Akredite bir kuruluşla anlaşmalısınız. Kaçak bulunursa, sertifikalı bir teknisyen tarafından onarım yapılana kadar gaz arzı derhal kesilir.</p>`,
pt: `<p class='mb-4'>Se a casa usa gás natural canalizado, a instalação deve ser inspecionada a cada 5 anos (instalações com mais de 20 anos) ou ao mudar de titular. É crucial para segurança e seguros.</p>
<p class='mb-4'>A inspeção custa cerca de 50€-80€. Deve contratar uma entidade credenciada. Se houver fuga, o gás é cortado imediatamente até ser reparado por técnico certificado.</p>`
}
},
{
id: 'wild-camping-rules',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'GNR / Environmental Guard',
date: '12.02.2026',
title: { en: 'Is Wild Camping Legal?', tr: 'Vahşi Kamp Yasal mı?', pt: 'Campismo Selvagem é Legal?' },
content: {
en: `<p class='mb-4'>Wild camping (Campismo Selvagem) and overnight stays in non-designated areas are generally prohibited in Portugal, especially in coastal zones and protected nature parks (Rede Natura 2000).</p>
<p class='mb-4'>Motorhomes (Autocaravanas) can only park overnight (max 48h) in specific municipalities that allow it, but opening awnings or putting out chairs is considered "camping" and is illegal outside campsites. Fines range from €60 to €600.</p>`,
tr: `<p class='mb-4'>Vahşi kamp (Campismo Selvagem) ve belirlenmemiş alanlarda gecelemek, özellikle kıyı bölgelerinde ve korunan doğa parklarında (Rede Natura 2000) Portekiz'de genellikle yasaktır.</p>
<p class='mb-4'>Karavanlar (Autocaravanas) sadece izin veren belirli belediyelerde geceleyebilir (maks. 48 saat), ancak tente açmak veya sandalye çıkarmak "kamp yapmak" sayılır ve kamp alanları dışında yasa dışıdır. Cezalar 60€ ile 600€ arasındadır.</p>`,
pt: `<p class='mb-4'>O campismo selvagem e pernoitas fora de locais designados são proibidos, especialmente na orla costeira e parques naturais (Rede Natura 2000).</p>
<p class='mb-4'>Autocaravanas só podem pernoitar (máx 48h) em municípios que o permitam, mas abrir toldos ou cadeiras é considerado "campismo" e ilegal fora de parques. Multas de 60€ a 600€.</p>`
}
},
{
id: 'julgados-de-paz-court',
stage: 'settle',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'Ministry of Justice',
date: '20.01.2026',
title: { en: 'Julgados de Paz: Fast Justice', tr: 'Julgados de Paz: Hızlı Adalet', pt: 'Julgados de Paz' },
content: {
en: `<p class='mb-4'>For disputes involving values under €15,000 (like landlord issues, consumer rights, or condominium conflicts), you don't need a traditional court. You can use the <strong>Julgados de Paz</strong> (Peace Courts).</p>
<p class='mb-4'>They are faster, cheaper (fixed cost of €70), and less formal than regular courts. Decisions made here have the same legal validity as a First Instance Court ruling. It is the best way to resolve small civil disputes.</p>`,
tr: `<p class='mb-4'>15.000€'nun altındaki anlaşmazlıklar için (ev sahibi sorunları, tüketici hakları veya apartman çatışmaları gibi) geleneksel mahkemeye ihtiyacınız yoktur. <strong>Julgados de Paz</strong> (Barış Mahkemeleri) kullanabilirsiniz.</p>
<p class='mb-4'>Normal mahkemelerden daha hızlı, daha ucuz (sabit 70€ ücret) ve daha az resmidirler. Burada alınan kararlar, İlk Derece Mahkemesi kararıyla aynı yasal geçerliliğe sahiptir. Küçük hukuki anlaşmazlıkları çözmenin en iyi yoludur.</p>`,
pt: `<p class='mb-4'>Para litígios até 15.000€ (senhorios, consumo, condomínio), não precisa de tribunal tradicional. Pode usar os <strong>Julgados de Paz</strong>.</p>
<p class='mb-4'>São mais rápidos, baratos (custo fixo de 70€) e informais. As decisões têm o mesmo valor legal que um Tribunal de 1ª Instância. É a melhor forma de resolver pequenos litígios civis.</p>`
}
},
{
id: 'speed-limits-radars',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'ANSR / Road Safety',
date: '17.02.2026',
title: { en: 'Speed Limits & Average Speed Cameras', tr: 'Hız Limitleri ve Ortalama Hız Kameraları', pt: 'Limites de Velocidade e Radares' },
content: {
en: `<p class='mb-4'>Standard speed limits are 50 km/h in cities, 90 km/h on national roads, and 120 km/h on highways. Portugal has recently introduced "Velocidade Média" (Average Speed) cameras.</p>
<p class='mb-4'>These cameras record your entry and exit time between two points to calculate your average speed. Slowing down just for the camera won't work. Look for the specific traffic sign (H42) indicating these zones to avoid expensive fines.</p>`,
tr: `<p class='mb-4'>Standart hız limitleri şehir içinde 50 km/s, ulusal yollarda 90 km/s ve otoyollarda 120 km/s'dir. Portekiz yakın zamanda "Velocidade Média" (Ortalama Hız) kameralarını tanıttı.</p>
<p class='mb-4'>Bu kameralar, ortalama hızınızı hesaplamak için iki nokta arasındaki giriş ve çıkış zamanınızı kaydeder. Sadece kamera için yavaşlamak işe yaramaz. Pahalı cezalardan kaçınmak için bu bölgeleri gösteren özel trafik işaretine (H42) dikkat edin.</p>`,
pt: `<p class='mb-4'>Os limites são 50 km/h nas cidades, 90 km/h em estradas nacionais e 120 km/h em autoestradas. Portugal introduziu recentemente radares de "Velocidade Média".</p>
<p class='mb-4'>Estes registam a entrada e saída entre dois pontos para calcular a média. Travar só no radar não funciona. Procure o sinal específico (H42) para evitar multas caras.</p>`
}
},
{
id: 'generic-medicines-savings',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'Infarmed',
date: '03.02.2026',
title: { en: 'Saving with Generic Medicines', tr: 'Jenerik İlaçlarla Tasarruf', pt: 'Poupar com Medicamentos Genéricos' },
content: {
en: `<p class='mb-4'>Doctors in Portugal prescribe by active ingredient (molecule), not brand name. When you go to the pharmacy, they will ask if you want the "Genérico". These are chemically identical to brand-name drugs but cost significantly less.</p>
<p class='mb-4'>Always say yes to generics unless you have a specific allergy to an excipient. The price difference can be huge (e.g., €2 vs €15), and they are subject to the same strict safety regulations by Infarmed.</p>`,
tr: `<p class='mb-4'>Portekiz'deki doktorlar marka adıyla değil, etken maddeyle (molekül) reçete yazar. Eczaneye gittiğinizde "Genérico" isteyip istemediğinizi sorarlar. Bunlar markalı ilaçlarla kimyasal olarak aynıdır ancak çok daha ucuzdur.</p>
<p class='mb-4'>Bir yardımcı maddeye özel alerjiniz yoksa her zaman jeneriklere evet deyin. Fiyat farkı büyük olabilir (örn. 2€'ya karşı 15€) ve Infarmed tarafından aynı sıkı güvenlik düzenlemelerine tabidirler.</p>`,
pt: `<p class='mb-4'>Os médicos prescrevem pelo princípio ativo, não pela marca. Na farmácia, perguntam se quer o "Genérico". São quimicamente idênticos aos de marca mas custam muito menos.</p>
<p class='mb-4'>Diga sempre sim, a menos que tenha alergia a algum excipiente. A diferença de preço pode ser enorme (ex: 2€ vs 15€) e seguem as mesmas regras de segurança do Infarmed.</p>`
}
},
{
id: 'professional-orders-registration',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Professional Orders Council',
date: '28.01.2026',
title: { en: 'Regulated Professions (Ordens)', tr: 'Düzenlenmiş Meslekler (Ordens)', pt: 'Ordens Profissionais' },
content: {
en: `<p class='mb-4'>In Portugal, you cannot practice certain professions (Doctor, Architect, Engineer, Lawyer, Psychologist) just by having a degree. You must register with the respective "Ordem Profissional".</p>
<p class='mb-4'>This often involves proving your qualifications, paying registration fees, and sometimes completing an internship or exam. Practicing without this registration is a crime (Usurpação de Funções).</p>`,
tr: `<p class='mb-4'>Portekiz'de sadece diplomanızla belirli meslekleri (Doktor, Mimar, Mühendis, Avukat, Psikolog) icra edemezsiniz. İlgili "Ordem Profissional"a (Meslek Odası) kaydolmalısınız.</p>
<p class='mb-4'>Bu genellikle niteliklerinizi kanıtlamayı, kayıt ücretlerini ödemeyi ve bazen bir staj veya sınavı tamamlamayı içerir. Bu kayıt olmadan mesleği icra etmek suçtur (Usurpação de Funções).</p>`,
pt: `<p class='mb-4'>Em Portugal, não pode exercer certas profissões (Médico, Arquiteto, Engenheiro, Advogado) apenas com o curso. Deve inscrever-se na respetiva "Ordem Profissional".</p>
<p class='mb-4'>Isto envolve provar qualificações, pagar quotas e por vezes estágio ou exame. Exercer sem esta inscrição é crime (Usurpação de Funções).</p>`
}
},
{
id: 'sales-seasons-saldos',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Economy Ministry',
date: '14.02.2026',
title: { en: 'Official Sales Seasons (Saldos)', tr: 'Resmi İndirim Dönemleri (Saldos)', pt: 'Épocas de Saldos' },
content: {
en: `<p class='mb-4'>While promotions can happen anytime, the official "Saldos" (Sales) periods are traditionally in January/February (Winter) and July/August (Summer). This is when you find the deepest discounts, often up to 70%.</p>
<p class='mb-4'>Shops are legally required to show the original price crossed out next to the new price. If you are planning big purchases like clothes or appliances, waiting for these months can save you a fortune.</p>`,
tr: `<p class='mb-4'>Promosyonlar her zaman olabilir ancak resmi "Saldos" (İndirim) dönemleri geleneksel olarak Ocak/Şubat (Kış) ve Temmuz/Ağustos (Yaz) aylarındadır. Genellikle %70'e varan en büyük indirimleri bu zamanlarda bulursunuz.</p>
<p class='mb-4'>Mağazaların yasal olarak yeni fiyatın yanında üstü çizili orijinal fiyatı göstermesi gerekir. Kıyafet veya beyaz eşya gibi büyük alışverişler planlıyorsanız, bu ayları beklemek size servet kazandırabilir.</p>`,
pt: `<p class='mb-4'>Embora haja promoções sempre, os "Saldos" oficiais são tradicionalmente em janeiro/fevereiro (Inverno) e julho/agosto (Verão). É quando encontra os maiores descontos, até 70%.</p>
<p class='mb-4'>As lojas são obrigadas a mostrar o preço original riscado. Se planeia grandes compras como roupa ou eletrodomésticos, esperar por estes meses pode poupar-lhe uma fortuna.</p>`
}
},

{
id: 'iuc-car-tax-annual',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: 'Annual Circulation Tax (IUC)', tr: 'Yıllık Taşıt Pulu (IUC)', pt: 'Imposto Único de Circulação (IUC)' },
content: {
en: `<p class='mb-4'>Unlike the one-time purchase tax (ISV), the IUC is an annual tax paid for owning a car. It is calculated based on the engine size (cc) and CO2 emissions. Payment is due in the month of the car's registration anniversary.</p>

<p class='mb-4'>You must generate the payment reference on the Finanças portal; you will not receive a bill in the mail. Failure to pay in the correct month results in an automatic fine, even if you didn't drive the car.</p>`,
tr: `<p class='mb-4'>Tek seferlik satın alma vergisinin (ISV) aksine, IUC araç sahipliği için ödenen yıllık bir vergidir. Motor hacmi (cc) ve CO2 emisyonlarına göre hesaplanır. Ödeme, aracın tescil yıl dönümü ayında yapılır.</p>
<p class='mb-4'>Ödeme referansını Finanças portalında oluşturmalısınız; posta yoluyla fatura gelmez. Doğru ayda ödeme yapmamak, aracı kullanmamış olsanız bile otomatik para cezasıyla sonuçlanır.</p>`,
pt: `<p class='mb-4'>Ao contrário do imposto único de compra (ISV), o IUC é um imposto anual pela posse do carro. É calculado com base na cilindrada e emissões de CO2. O pagamento é devido no mês da matrícula do carro.</p>
<p class='mb-4'>Deve gerar a referência de pagamento no portal das Finanças; não receberá conta pelo correio. A falta de pagamento no mês correto resulta em multa automática.</p>`
}
},
{
id: 'couvert-restaurant-rules',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Consumer Law / AHRESP',
date: '17.02.2026',
title: { en: 'The "Couvert" Rule in Restaurants', tr: 'Restoranlarda "Kuver" Kuralı', pt: 'A Regra do Couvert' },
content: {
en: `<p class='mb-4'>When you sit down at a restaurant, waiters will bring bread, olives, cheese, or paté (the Couvert). These are <strong>not free</strong>. If you eat them, you pay for them. Prices can range from €2 to €10 depending on the venue.</p>
<p class='mb-4'>Legally, you have the right to refuse them. If you don't want to pay, simply tell the waiter "Não, obrigado" immediately or don't touch them. If they charge you for untouched items, it is a violation of consumer law.</p>`,
tr: `<p class='mb-4'>Bir restorana oturduğunuzda garsonlar ekmek, zeytin, peynir veya ezme (Kuver) getirir. Bunlar <strong>ücretsiz değildir</strong>. Yerseniz ödersiniz. Fiyatlar mekana göre 2€ ile 10€ arasında değişebilir.</p>
<p class='mb-4'>Yasal olarak reddetme hakkınız vardır. Ödemek istemiyorsanız, garsona hemen "Não, obrigado" deyin veya dokunmayın. Dokunulmamış ürünler için ücret alırlarsa, bu tüketici yasasının ihlalidir.</p>`,
pt: `<p class='mb-4'>Ao sentar-se num restaurante, trazem pão, azeitonas, queijo ou paté (o Couvert). Estes <strong>não são grátis</strong>. Se comer, paga. Os preços variam entre 2€ e 10€ dependendo do local.</p>
<p class='mb-4'>Legalmente, pode recusar. Se não quiser pagar, diga "Não, obrigado" imediatamente ou não toque. Se cobrarem por itens intocados, é uma violação da lei do consumidor.</p>`
}
},
{
id: 'resignation-notice-periods',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Labor Code / Código do Trabalho',
date: '20.01.2026',
title: { en: 'Resigning: Notice Periods', tr: 'İstifa: İhbar Süreleri', pt: 'Demissão: Prazos de Aviso Prévio' },
content: {
en: `<p class='mb-4'>If you want to quit your job, you cannot just walk away. If you have worked for less than 2 years, you must give 30 days' notice. If you have worked for more than 2 years, the notice period is 60 days.</p>
<p class='mb-4'>You must send a registered letter to your employer. If you leave without giving notice, the employer can legally deduct the pay for the missing days from your final settlement.</p>`,
tr: `<p class='mb-4'>İşinizden ayrılmak istiyorsanız, öylece çekip gidemezsiniz. 2 yıldan az çalıştıysanız 30 gün önceden haber vermelisiniz. 2 yıldan fazla çalıştıysanız ihbar süresi 60 gündür.</p>
<p class='mb-4'>İşvereninize taahhütlü mektup göndermelisiniz. Haber vermeden ayrılırsanız, işveren eksik günlerin ücretini yasal olarak son ödemenizden kesebilir.</p>`,
pt: `<p class='mb-4'>Se quiser despedir-se, não pode simplesmente sair. Se trabalhou menos de 2 anos, deve dar 30 dias de aviso. Se trabalhou mais de 2 anos, o aviso é de 60 dias.</p>
<p class='mb-4'>Deve enviar carta registada ao empregador. Se sair sem aviso, o empregador pode descontar legalmente o valor dos dias em falta no acerto de contas final.</p>`
}
},
{
id: 'creche-feliz-free-daycare',
stage: 'settle',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'Social Security / Segurança Social',
date: '28.01.2026',
title: { en: 'Free Daycare (Creche Feliz)', tr: 'Ücretsiz Kreş (Creche Feliz)', pt: 'Creche Feliz Gratuita' },
content: {
en: `<p class='mb-4'>The "Creche Feliz" program guarantees free daycare for children born after September 1, 2021. This applies to the network of IPSS (non-profits) and participating private daycares if no public slots are available.</p>
<p class='mb-4'>It covers tuition, food, and insurance. However, slots are extremely limited, and waiting lists are long. You should apply while pregnant or immediately after birth to secure a spot in your area.</p>`,
tr: `<p class='mb-4'>"Creche Feliz" programı, 1 Eylül 2021'den sonra doğan çocuklar için ücretsiz kreşi garanti eder. Bu, IPSS (kâr amacı gütmeyen kuruluşlar) ağı ve kamu kontenjanı yoksa katılımcı özel kreşler için geçerlidir.</p>
<p class='mb-4'>Eğitim, yemek ve sigortayı kapsar. Ancak kontenjanlar son derece sınırlıdır ve bekleme listeleri uzundur. Bölgenizde yer bulmak için hamileyken veya doğumdan hemen sonra başvurmalısınız.</p>`,
pt: `<p class='mb-4'>O programa "Creche Feliz" garante creche gratuita para crianças nascidas após 1 de setembro de 2021. Aplica-se à rede de IPSS e creches privadas aderentes se não houver vagas públicas.</p>
<p class='mb-4'>Cobre mensalidade, alimentação e seguro. Contudo, as vagas são limitadas e as listas de espera longas. Deve inscrever-se durante a gravidez ou logo após o nascimento.</p>`
}
},
{
id: 'multibanco-reference-payments',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'SIBS Official',
date: '12.02.2026',
title: { en: 'Paying by Multibanco Reference', tr: 'Multibanco Referansı ile Ödeme', pt: 'Pagamento por Referência MB' },
content: {
en: `<p class='mb-4'>When shopping online in Portugal, you will often see "Pagamento por Referência Multibanco". The merchant gives you an Entity (5 digits), Reference (9 digits), and Amount. You can pay this via your banking app or at any ATM.</p>
<p class='mb-4'>It is extremely secure because you never share your card details with the website. It is the preferred payment method for utilities, taxes, and even Amazon purchases in Portugal.</p>`,
tr: `<p class='mb-4'>Portekiz'de online alışveriş yaparken sıkça "Pagamento por Referência Multibanco" görürsünüz. Satıcı size bir Kurum (5 hane), Referans (9 hane) ve Tutar verir. Bunu banka uygulamanızdan veya herhangi bir ATM'den ödeyebilirsiniz.</p>
<p class='mb-4'>Kart bilgilerinizi web sitesiyle asla paylaşmadığınız için son derece güvenlidir. Faturalar, vergiler ve hatta Amazon alışverişleri için tercih edilen ödeme yöntemidir.</p>`,
pt: `<p class='mb-4'>Ao comprar online, verá frequentemente "Pagamento por Referência Multibanco". O comerciante dá-lhe Entidade, Referência e Montante. Pode pagar via app bancária ou ATM.</p>
<p class='mb-4'>É extremamente seguro pois nunca partilha dados do cartão com o site. É o método preferido para contas, impostos e até compras na Amazon em Portugal.</p>`
}
},
{
id: 'water-bill-tiers',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'ERSAR / Water Regulator',
date: '05.02.2026',
title: { en: 'Understanding Water Bill Tiers', tr: 'Su Faturası Kademelerini Anlamak', pt: 'Escalões da Fatura da Água' },
content: {
en: `<p class='mb-4'>Water pricing in Portugal is progressive. The first few cubic meters (1st Tier) are cheap, but the price per liter skyrockets if you exceed certain limits (2nd and 3rd Tiers). This encourages conservation.</p>
<p class='mb-4'>Large families (5+ people) can apply for the "Tarifa Familiar" at their municipality. This adjusts the tier limits so you aren't penalized for having more people in the household showering and washing clothes.</p>`,
tr: `<p class='mb-4'>Portekiz'de su fiyatlandırması artan oranlıdır. İlk birkaç metreküp (1. Kademe) ucuzdur, ancak belirli sınırları (2. ve 3. Kademeler) aşarsanız litre fiyatı fırlar. Bu, tasarrufu teşvik eder.</p>
<p class='mb-4'>Kalabalık aileler (5+ kişi) belediyelerine "Tarifa Familiar" için başvurabilir. Bu, evde duş alan ve çamaşır yıkayan daha fazla kişi olduğu için cezalandırılmamanız adına kademe sınırlarını ayarlar.</p>`,
pt: `<p class='mb-4'>O preço da água é progressivo. Os primeiros metros cúbicos (1º Escalão) são baratos, mas o preço dispara se exceder certos limites. Isto incentiva a poupança.</p>
<p class='mb-4'>Famílias numerosas (5+ pessoas) podem pedir a "Tarifa Familiar" no município. Isto ajusta os limites dos escalões para não serem penalizados por terem mais pessoas em casa.</p>`
}
},
{
id: 'rede-expressos-buses',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Community Insights',
date: '14.02.2026',
title: { en: 'Intercity Buses (Rede Expressos)', tr: 'Şehirlerarası Otobüsler', pt: 'Rede Expressos' },
content: {
en: `<p class='mb-4'>While trains connect major coastal cities, the interior of Portugal is best explored by bus. <strong>Rede Expressos</strong> is the national operator, connecting almost every town and village.</p>
<p class='mb-4'>Buses are modern, equipped with Wi-Fi, and often punctual. Tickets are cheaper than trains, especially for last-minute travel. The "RFLEX" fare allows you to cancel or change your ticket up to 2 hours before departure.</p>`,
tr: `<p class='mb-4'>Trenler büyük kıyı şehirlerini birbirine bağlarken, Portekiz'in iç kesimleri en iyi otobüsle keşfedilir. <strong>Rede Expressos</strong>, neredeyse her kasaba ve köyü birbirine bağlayan ulusal operatördür.</p>
<p class='mb-4'>Otobüsler moderndir, Wi-Fi ile donatılmıştır ve genellikle dakiktir. Biletler, özellikle son dakika seyahatleri için trenlerden daha ucuzdur. "RFLEX" tarifesi, kalkıştan 2 saat öncesine kadar biletinizi iptal etmenize veya değiştirmenize olanak tanır.</p>`,
pt: `<p class='mb-4'>Enquanto os comboios ligam o litoral, o interior explora-se melhor de autocarro. A <strong>Rede Expressos</strong> é o operador nacional, ligando quase todas as vilas.</p>
<p class='mb-4'>Os autocarros são modernos, com Wi-Fi e pontuais. Os bilhetes são mais baratos que o comboio. A tarifa "RFLEX" permite cancelar ou alterar até 2 horas antes da partida.</p>`
}
},
{
id: 'power-of-attorney-procuracao',
stage: 'apply',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'Notaries Order',
date: '17.02.2026',
title: { en: 'Power of Attorney (Procuração)', tr: 'Vekaletname (Procuração)', pt: 'Procuração' },
content: {
en: `<p class='mb-4'>If you cannot be in Portugal to sign a deed or get a NIF, you can give a "Procuração" to a lawyer or friend. This legal document authorizes them to act on your behalf for specific tasks.</p>
<p class='mb-4'>It must be signed at a Notary in Portugal or at a Portuguese Consulate abroad. Be specific about the powers you grant (e.g., "only to buy house X" rather than "general management") to protect your assets.</p>`,
tr: `<p class='mb-4'>Tapu imzalamak veya NIF almak için Portekiz'de bulunamıyorsanız, bir avukata veya arkadaşınıza "Procuração" verebilirsiniz. Bu yasal belge, belirli görevler için adınıza hareket etme yetkisi verir.</p>
<p class='mb-4'>Portekiz'de bir Noterde veya yurtdışındaki Portekiz Konsolosluğunda imzalanmalıdır. Varlıklarınızı korumak için verdiğiniz yetkiler konusunda spesifik olun ("genel yönetim" yerine "sadece X evini satın almak için" gibi).</p>`,
pt: `<p class='mb-4'>Se não puder estar em Portugal para assinar escritura ou pedir NIF, pode passar uma "Procuração". Este documento autoriza alguém a agir em seu nome.</p>
<p class='mb-4'>Deve ser assinada num Cartório ou Consulado. Seja específico sobre os poderes que concede (ex: "apenas para comprar casa X" em vez de "gestão geral") para proteger os seus bens.</p>`
}
},
{
id: 'santos-populares-festivals',
stage: 'discover',
category: { en: 'Language & Culture', tr: 'Dil & Kültür', pt: 'Língua e Cultura' },
source: 'Community Insights',
date: '01.02.2026',
title: { en: 'Santos Populares Festivals', tr: 'Santos Populares Festivalleri', pt: 'Santos Populares' },
content: {
en: `<p class='mb-4'>June is the month of "Santos Populares". Lisbon celebrates St. Anthony (June 12-13) with parades on Avenida da Liberdade and street parties in Alfama. Porto celebrates St. John (June 23-24) by hitting people with plastic hammers.</p>
<p class='mb-4'>The air smells of grilled sardines and basil (manjerico). These are the biggest parties of the year, often lasting until sunrise. If you live in a historic district, expect noise and crowds during this month.</p>`,
tr: `<p class='mb-4'>Haziran "Santos Populares" ayıdır. Lizbon, Avenida da Liberdade'de geçit törenleri ve Alfama'da sokak partileriyle Aziz Anthony'yi (12-13 Haziran) kutlar. Porto, insanların kafasına plastik çekiçle vurarak Aziz John'u (23-24 Haziran) kutlar.</p>
<p class='mb-4'>Hava ızgara sardalya ve fesleğen (manjerico) kokar. Bunlar yılın en büyük partileridir ve genellikle gün doğumuna kadar sürer. Tarihi bir bölgede yaşıyorsanız, bu ay boyunca gürültü ve kalabalığa hazırlıklı olun.</p>`,
pt: `<p class='mb-4'>Junho é o mês dos Santos Populares. Lisboa celebra Santo António (12-13) com marchas e arraiais. O Porto celebra São João (23-24) com martelinhos de plástico.</p>
<p class='mb-4'>O ar cheira a sardinha assada e manjerico. São as maiores festas do ano. Se vive num bairro histórico, conte com barulho e multidões durante este mês.</p>`
}
},
{
id: 'sns-24-app-features',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'SNS 24 Official',
date: '10.02.2026',
title: { en: 'The SNS 24 App', tr: 'SNS 24 Uygulaması', pt: 'A App SNS 24' },
content: {
en: `<p class='mb-4'>The SNS 24 App is your digital health wallet. It stores your vaccine bulletin, medical prescriptions (Receita Sem Papel), and upcoming hospital appointments. You can show the pharmacy the QR code in the app to pick up meds.</p>
<p class='mb-4'>It also allows you to access the "Teleconsulta" service for minor issues. To activate it, you need your Chave Móvel Digital or your SNS user number and date of birth.</p>`,
tr: `<p class='mb-4'>SNS 24 Uygulaması dijital sağlık cüzdanınızdır. Aşı karnenizi, tıbbi reçetelerinizi (Kağıtsız Reçete) ve yaklaşan hastane randevularınızı saklar. İlaçları almak için eczaneye uygulamadaki QR kodunu gösterebilirsiniz.</p>
<p class='mb-4'>Ayrıca küçük sorunlar için "Teleconsulta" hizmetine erişmenizi sağlar. Etkinleştirmek için Chave Móvel Digital'inize veya SNS kullanıcı numaranıza ve doğum tarihinize ihtiyacınız vardır.</p>`,
pt: `<p class='mb-4'>A App SNS 24 é a sua carteira digital de saúde. Guarda o boletim de vacinas, receitas médicas e consultas. Pode mostrar o QR code na farmácia para levantar medicamentos.</p>
<p class='mb-4'>Permite também aceder à "Teleconsulta". Para ativar, precisa da Chave Móvel Digital ou do número de utente e data de nascimento.</p>`
}
},

{
id: 'energy-certificate-housing',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'ADENE / Energy Agency',
date: '17.02.2026',
title: { en: 'The Energy Certificate', tr: 'Enerji Kimlik Belgesi', pt: 'O Certificado Energético' },
content: {
en: `<p class='mb-4'>Every property listed for rent or sale in Portugal must have a valid Energy Certificate. It rates the home's efficiency from A+ (best) to F (worst). This document is mandatory for signing a rental contract.</p>

<p class='mb-4'>Tenants should pay close attention to this rating. An "F" rated apartment might look cheap to rent, but it will be freezing in winter and expensive to heat, costing you much more in electricity bills.</p>`,
tr: `<p class='mb-4'>Portekiz'de kiralık veya satılık her mülkün geçerli bir Enerji Kimlik Belgesi olması gerekir. Evin verimliliğini A+ (en iyi) ile F (en kötü) arasında derecelendirir. Bu belge kira sözleşmesi imzalamak için zorunludur.</p>
<p class='mb-4'>Kiracılar bu derecelendirmeye çok dikkat etmelidir. "F" sınıfı bir dairenin kirası ucuz görünebilir, ancak kışın buz gibi olur ve ısıtması pahalıya patlar, size elektrik faturasında çok daha fazlasına mal olur.</p>`,
pt: `<p class='mb-4'>Todos os imóveis para arrendar ou vender devem ter um Certificado Energético válido. Classifica a eficiência de A+ (melhor) a F (pior). É obrigatório para assinar contrato.</p>
<p class='mb-4'>Inquilinos devem atentar a isto. Um apartamento "F" pode parecer barato, mas será gelado no inverno e caro de aquecer, custando muito mais em eletricidade.</p>`
}
},
{
id: 'ctt-mail-redirection',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'CTT Official',
date: '03.02.2026',
title: { en: 'Mail Redirection Service', tr: 'Posta Yönlendirme Hizmeti', pt: 'Reexpedição Postal' },
content: {
en: `<p class='mb-4'>When moving houses, you can pay CTT to redirect your mail to your new address for 3, 6, or 12 months. This is crucial for receiving AIMA notifications or bank cards sent to your old address.</p>
<p class='mb-4'>You must apply at a CTT branch at least 3 days before you move. The service costs around €20 for 3 months but saves you the headache of missing vital government correspondence.</p>`,
tr: `<p class='mb-4'>Ev taşırken, postalarınızı 3, 6 veya 12 ay boyunca yeni adresinize yönlendirmesi için CTT'ye ödeme yapabilirsiniz. Bu, eski adresinize gönderilen AIMA bildirimlerini veya banka kartlarını almak için çok önemlidir.</p>
<p class='mb-4'>Taşınmadan en az 3 gün önce bir CTT şubesine başvurmalısınız. Hizmet 3 ay için yaklaşık 20€ tutarındadır ancak sizi hayati devlet yazışmalarını kaçırma derdinden kurtarır.</p>`,
pt: `<p class='mb-4'>Ao mudar de casa, pode pagar aos CTT para reencaminhar o correio para a nova morada por 3, 6 ou 12 meses. É crucial para receber notificações da AIMA ou cartões bancários.</p>
<p class='mb-4'>Deve pedir num balcão CTT 3 dias antes de mudar. Custa cerca de 20€ por 3 meses mas poupa-lhe a dor de cabeça de perder correspondência vital.</p>`
}
},
{
id: 'zapping-transport-card',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Transportes de Lisboa',
date: '10.02.2026',
title: { en: 'Zapping: Pay-As-You-Go', tr: 'Zapping: Kullandıkça Öde', pt: 'Zapping: Pré-Pago' },
content: {
en: `<p class='mb-4'>If you don't travel enough to justify a monthly pass, the "Zapping" method is the cheapest option. You load money (min €3) onto a reusable Navegante card, and each trip deducts a discounted fare.</p>
<p class='mb-4'>A single Metro ticket costs €1.80, but with Zapping, it drops to around €1.61. It works across different operators (Metro, Bus, Train, Ferry), saving you from buying different tickets for each mode of transport.</p>`,
tr: `<p class='mb-4'>Aylık kart alacak kadar seyahat etmiyorsanız, "Zapping" yöntemi en ucuz seçenektir. Yeniden kullanılabilir Navegante kartına para (min 3€) yüklersiniz ve her yolculukta indirimli ücret düşülür.</p>
<p class='mb-4'>Tek bir Metro bileti 1,80€ iken, Zapping ile yaklaşık 1,61€'ya düşer. Farklı operatörlerde (Metro, Otobüs, Tren, Vapur) çalışır ve sizi her ulaşım aracı için ayrı bilet almaktan kurtarır.</p>`,
pt: `<p class='mb-4'>Se não viaja o suficiente para o passe mensal, o "Zapping" é a opção mais barata. Carrega dinheiro (mín 3€) no cartão Navegante e cada viagem desconta um valor reduzido.</p>
<p class='mb-4'>Um bilhete de Metro custa 1,80€, mas com Zapping desce para 1,61€. Funciona em vários operadores (Metro, Autocarro, Comboio), evitando comprar bilhetes diferentes.</p>`
}
},
{
id: 'overtime-pay-rules',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Labor Code / Código do Trabalho',
date: '20.01.2026',
title: { en: 'Overtime Pay Rights', tr: 'Fazla Mesai Hakları', pt: 'Trabalho Suplementar' },
content: {
en: `<p class='mb-4'>In Portugal, overtime (Trabalho Suplementar) is strictly regulated. The first hour of overtime must be paid at regular rate +25%, and subsequent hours at +37.5%. Work on rest days (Sundays/Holidays) is paid at +50%.</p>
<p class='mb-4'>Companies often try to offer "Time in Lieu" (extra vacation days) instead of cash. You have the right to refuse this if it wasn't agreed upon in your contract. Unpaid overtime is illegal.</p>`,
tr: `<p class='mb-4'>Portekiz'de fazla mesai (Trabalho Suplementar) sıkı kurallara bağlıdır. İlk saat normal ücret +%25, sonraki saatler +%37,5 olarak ödenmelidir. Tatil günlerinde (Pazar/Bayram) çalışma +%50 ödenir.</p>
<p class='mb-4'>Şirketler genellikle nakit yerine "İzin Karşılığı" (ekstra tatil günü) teklif etmeye çalışır. Sözleşmenizde anlaşılmadıysa bunu reddetme hakkınız vardır. Ödenmeyen fazla mesai yasa dışıdır.</p>`,
pt: `<p class='mb-4'>O Trabalho Suplementar é regulado. A primeira hora extra paga-se a +25%, as seguintes a +37,5%. Trabalho em dias de descanso paga-se a +50%.</p>
<p class='mb-4'>Empresas tentam oferecer "Banco de Horas" em vez de dinheiro. Tem o direito de recusar se não estiver no contrato. Horas extras não pagas são ilegais.</p>`
}
},
{
id: 'pharmacy-on-duty',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'ANF / Farmácias Portuguesas',
date: '17.02.2026',
title: { en: 'Finding a Night Pharmacy', tr: 'Nöbetçi Eczane Bulmak', pt: 'Farmácia de Serviço' },
content: {
en: `<p class='mb-4'>Standard pharmacies close around 19:00 or 20:00. If you need urgent medication at night, you must find a "Farmácia de Serviço". Every pharmacy displays a list of the nearest open ones on their door.</p>
<p class='mb-4'>You can also check the <a href='https://www.farmaciasdeservico.net' class='text-orange-500 underline font-bold'>farmaciasdeservico.net</a> website. Note that buying non-urgent items (like shampoo) at 3 AM involves a surcharge; stick to emergencies.</p>`,
tr: `<p class='mb-4'>Standart eczaneler 19:00 veya 20:00 civarında kapanır. Gece acil ilaca ihtiyacınız varsa "Farmácia de Serviço" bulmalısınız. Her eczane, kapısında en yakın açık eczanelerin listesini asar.</p>
<p class='mb-4'>Ayrıca <a href='https://www.farmaciasdeservico.net' class='text-orange-500 underline font-bold'>farmaciasdeservico.net</a> sitesini kontrol edebilirsiniz. Gece 3'te acil olmayan ürünler (şampuan gibi) almanın ek ücrete tabi olduğunu unutmayın; acil durumlarla sınırlı kalın.</p>`,
pt: `<p class='mb-4'>As farmácias fecham pelas 19:00 ou 20:00. Para urgências noturnas, procure uma "Farmácia de Serviço". Todas as farmácias afixam na porta a lista das mais próximas.</p>
<p class='mb-4'>Consulte também <a href='https://www.farmaciasdeservico.net' class='text-orange-500 underline font-bold'>farmaciasdeservico.net</a>. Comprar itens não urgentes de madrugada tem taxa extra; limite-se a emergências.</p>`
}
},
{
id: 'alcohol-purchase-laws',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Economic Authority (ASAE)',
date: '05.02.2026',
title: { en: 'Alcohol Purchase Restrictions', tr: 'Alkol Satış Kısıtlamaları', pt: 'Restrições à Venda de Álcool' },
content: {
en: `<p class='mb-4'>The legal drinking age is 18 for all types of alcohol. However, buying alcohol at gas stations is prohibited between 00:00 and 08:00. Street drinking is generally tolerated unless it causes public disorder.</p>
<p class='mb-4'>Supermarkets sell alcohol until closing time, but local laws in nightlife districts (like Bairro Alto in Lisbon) may restrict street sales of glass bottles after a certain hour to prevent accidents.</p>`,
tr: `<p class='mb-4'>Yasal içki içme yaşı her tür alkol için 18'dir. Ancak, benzin istasyonlarında 00:00 ile 08:00 arasında alkol satışı yasaktır. Sokakta içmek, kamu düzenini bozmadığı sürece genellikle hoş görülür.</p>
<p class='mb-4'>Süpermarketler kapanışa kadar alkol satar, ancak gece hayatı bölgelerindeki (Lizbon'daki Bairro Alto gibi) yerel yasalar, kazaları önlemek için belirli bir saatten sonra cam şişe satışını kısıtlayabilir.</p>`,
pt: `<p class='mb-4'>A idade legal é 18 anos. Contudo, a venda em bombas de gasolina é proibida entre as 00:00 e as 08:00. Beber na rua é tolerado se não causar desordem.</p>
<p class='mb-4'>Supermercados vendem até fechar, mas leis locais em zonas noturnas (como Bairro Alto) podem restringir a venda de garrafas de vidro após certa hora.</p>`
}
},
{
id: 'recycling-cooking-oil',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Municipal Councils',
date: '12.02.2026',
title: { en: 'Recycling Cooking Oil (Oleão)', tr: 'Kızartma Yağı Geri Dönüşümü', pt: 'Reciclagem de Óleo (Oleão)' },
content: {
en: `<p class='mb-4'>Pouring used cooking oil down the sink is a major taboo in Portugal as it clogs municipal pipes. Instead, you should pour cooled oil into a plastic bottle and deposit it in an orange bin called an <strong>Oleão</strong>.</p>
<p class='mb-4'>These bins are often located near supermarkets or large recycling points. Some municipalities even offer free funnels to help you transfer the oil into bottles cleanly.</p>`,
tr: `<p class='mb-4'>Kullanılmış yağı lavaboya dökmek, belediye borularını tıkadığı için Portekiz'de büyük bir tabudur. Bunun yerine, soğumuş yağı plastik bir şişeye doldurup <strong>Oleão</strong> adı verilen turuncu kutulara atmalısınız.</p>
<p class='mb-4'>Bu kutular genellikle süpermarketlerin veya büyük geri dönüşüm noktalarının yakınında bulunur. Bazı belediyeler, yağı şişelere temiz bir şekilde aktarmanıza yardımcı olmak için ücretsiz huniler bile dağıtır.</p>`,
pt: `<p class='mb-4'>Deitar óleo no ralo é um tabu pois entope os canos municipais. Deve deitar o óleo frio numa garrafa de plástico e depositá-la num contentor laranja chamado <strong>Oleão</strong>.</p>
<p class='mb-4'>Estes contentores estão perto de supermercados. Alguns municípios oferecem funis gratuitos para ajudar a transferir o óleo para as garrafas.</p>`
}
},
{
id: 'private-deed-document',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'IRN / Notaries',
date: '28.01.2026',
title: { en: 'Private Deed vs. Public Deed', tr: 'Özel Senet ve Resmi Tapu', pt: 'Documento Particular vs. Escritura' },
content: {
en: `<p class='mb-4'>Buying a house doesn't always require a public Notary. A "Documento Particular Autenticado" (Authenticated Private Document) signed before a Lawyer or Solicitor has the same legal value as a public deed (Escritura).</p>
<p class='mb-4'>This method is often faster and cheaper than waiting for a slot at a public Notary office. However, if you are taking a mortgage, the bank will usually dictate which method and professional they prefer.</p>`,
tr: `<p class='mb-4'>Ev almak her zaman resmi Noter gerektirmez. Bir Avukat veya Solicitador huzurunda imzalanan "Documento Particular Autenticado" (Tasdikli Özel Belge), resmi tapu (Escritura) ile aynı yasal değere sahiptir.</p>
<p class='mb-4'>Bu yöntem genellikle resmi Noter'den randevu beklemekten daha hızlı ve ucuzdur. Ancak, kredi çekiyorsanız, banka genellikle hangi yöntemi ve profesyoneli tercih ettiğini dikte eder.</p>`,
pt: `<p class='mb-4'>Comprar casa nem sempre exige Notário. Um "Documento Particular Autenticado" assinado perante Advogado ou Solicitador tem o mesmo valor que uma Escritura.</p>
<p class='mb-4'>É muitas vezes mais rápido e barato. Contudo, se pedir crédito habitação, o banco ditará geralmente qual o método e profissional que prefere.</p>`
}
},
{
id: 'gira-bikes-lisbon',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'EMEL / Gira',
date: '17.02.2026',
title: { en: 'Gira: Lisbon\'s Public Bikes', tr: 'Gira: Lizbon\'un Kamu Bisikletleri', pt: 'Gira: Bicicletas de Lisboa' },
content: {
en: `<p class='mb-4'>Lisbon's public bike system, <strong>Gira</strong>, is excellent for short commutes. For a monthly fee (around €25/year for residents), you get unlimited rides of up to 45 minutes. Most bikes are electric, helping you tackle the city's hills.</p>
<p class='mb-4'>You need the App to unlock them. Stations are plentiful in the city center and along the river. If you exceed 45 minutes, you pay a small fee, so dock and swap bikes to keep riding for free.</p>`,
tr: `<p class='mb-4'>Lizbon'un kamu bisiklet sistemi <strong>Gira</strong>, kısa mesafeler için mükemmeldir. Yıllık ücret karşılığında (sakinler için yaklaşık 25€), 45 dakikaya kadar sınırsız sürüş hakkınız olur. Çoğu bisiklet elektriklidir, yokuşları çıkmanıza yardım eder.</p>
<p class='mb-4'>Kilidi açmak için Uygulamaya ihtiyacınız var. İstasyonlar şehir merkezinde ve nehir boyunca boldur. 45 dakikayı aşarsanız küçük bir ücret ödersiniz, bu yüzden ücretsiz sürmeye devam etmek için bisikleti kilitleyip değiştirin.</p>`,
pt: `<p class='mb-4'>O sistema <strong>Gira</strong> de Lisboa é excelente. Por uma taxa (aprox. 25€/ano para residentes), tem viagens ilimitadas de 45 minutos. A maioria é elétrica, ajudando nas colinas.</p>
<p class='mb-4'>Precisa da App para desbloquear. Se exceder 45 minutos, paga uma taxa, por isso estacione e troque de bicicleta para continuar a andar de graça.</p>`
}
},
{
id: 'sun-safety-uv-index',
stage: 'discover',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'DGS / Health Authority',
date: '10.02.2026',
title: { en: 'The Portuguese Sun: A Warning', tr: 'Portekiz Güneşi: Bir Uyarı', pt: 'O Sol Português: Um Aviso' },
content: {
en: `<p class='mb-4'>The UV index in Portugal can reach extreme levels (10+) in summer. Sunburn can happen in less than 20 minutes. Health authorities recommend avoiding direct exposure between 11:00 and 17:00.</p>
<p class='mb-4'>Always wear sunscreen, even on cloudy days. Pharmacies sell high-quality sunblock (Protetor Solar). Skin cancer rates are rising, so take the "Portuguese lunch break" seriously and stay in the shade during peak hours.</p>`,
tr: `<p class='mb-4'>Portekiz'de UV indeksi yazın aşırı seviyelere (10+) ulaşabilir. Güneş yanığı 20 dakikadan kısa sürede oluşabilir. Sağlık yetkilileri 11:00 ile 17:00 arasında doğrudan maruziyetten kaçınılmasını önerir.</p>
<p class='mb-4'>Bulutlu günlerde bile güneş kremi sürün. Eczaneler kaliteli güneş kremi (Protetor Solar) satar. Cilt kanseri oranları artıyor, bu yüzden "Portekiz öğle molasını" ciddiye alın ve yoğun saatlerde gölgede kalın.</p>`,
pt: `<p class='mb-4'>O índice UV em Portugal atinge níveis extremos (10+) no verão. Queimaduras ocorrem em menos de 20 minutos. As autoridades recomendam evitar exposição entre as 11:00 e as 17:00.</p>
<p class='mb-4'>Use sempre protetor solar. As taxas de cancro de pele estão a subir, por isso leve a sério a "hora de almoço portuguesa" e fique à sombra nas horas de maior calor.</p>`
}
},

{
id: 'uniao-de-facto-rights',
stage: 'apply',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'Civil Code / Código Civil',
date: '17.02.2026',
title: { en: 'Unmarried Couples (União de Facto)', tr: 'Evli Olmayan Çiftler (União de Facto)', pt: 'União de Facto' },
content: {
en: `<p class='mb-4'>If you have lived with your partner for over 2 years, Portugal recognizes your relationship as a "União de Facto". This grants you similar rights to marriage regarding taxes (IRS), inheritance, and social security.</p>

<p class='mb-4'>To prove this status for visa or tax purposes, you usually need a declaration from your local Junta de Freguesia stating that you reside at the same address. It is a valid route for family reunification without a marriage certificate.</p>`,
tr: `<p class='mb-4'>Partnerinizle 2 yıldan fazla süredir birlikte yaşıyorsanız, Portekiz ilişkinizi "União de Facto" olarak tanır. Bu, vergi (IRS), miras ve sosyal güvenlik konularında evliliğe benzer haklar tanır.</p>
<p class='mb-4'>Vize veya vergi amaçlı bu statüyü kanıtlamak için, genellikle yerel Junta de Freguesia'dan aynı adreste ikamet ettiğinize dair bir beyana ihtiyacınız vardır. Evlilik cüzdanı olmadan aile birleşimi için geçerli bir yoldur.</p>`,
pt: `<p class='mb-4'>Se vive com o seu parceiro há mais de 2 anos, Portugal reconhece a "União de Facto". Isto dá direitos semelhantes ao casamento no IRS, heranças e segurança social.</p>
<p class='mb-4'>Para provar este estatuto, precisa geralmente de uma declaração da Junta de Freguesia atestando que residem na mesma morada. É uma via válida para reagrupamento familiar sem casamento.</p>`
}
},
{
id: 'rent-increase-coefficient',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'INE / Housing Portal',
date: '10.02.2026',
title: { en: 'Annual Rent Increases', tr: 'Yıllık Kira Artışları', pt: 'Aumento Anual de Rendas' },
content: {
en: `<p class='mb-4'>Landlords cannot raise your rent arbitrarily. The annual increase is capped by a government coefficient based on inflation (published every October for the following year). For 2026, the cap is strictly regulated.</p>
<p class='mb-4'>The landlord must notify you in writing (registered letter) at least 30 days before the increase takes effect. If the contract does not explicitly mention annual updates, the rent must remain fixed.</p>`,
tr: `<p class='mb-4'>Ev sahipleri kiranızı keyfi olarak artıramaz. Yıllık artış, enflasyona dayalı bir hükümet katsayısı ile sınırlandırılmıştır (her Ekim ayında bir sonraki yıl için yayınlanır). 2026 için tavan sıkı bir şekilde düzenlenmiştir.</p>
<p class='mb-4'>Ev sahibi, artış yürürlüğe girmeden en az 30 gün önce sizi yazılı olarak (taahhütlü mektup) bilgilendirmelidir. Sözleşmede yıllık güncellemelerden açıkça bahsedilmiyorsa, kira sabit kalmalıdır.</p>`,
pt: `<p class='mb-4'>Os senhorios não podem aumentar a renda arbitrariamente. O aumento anual é limitado por um coeficiente baseado na inflação. Para 2026, o teto é estritamente regulado.</p>
<p class='mb-4'>O senhorio deve notificá-lo por escrito (carta registada) 30 dias antes. Se o contrato não mencionar explicitamente atualizações anuais, a renda deve manter-se fixa.</p>`
}
},
{
id: 'police-psp-vs-gnr',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Internal Administration',
date: '05.02.2026',
title: { en: 'Police: PSP vs. GNR', tr: 'Polis: PSP ve GNR Farkı', pt: 'Polícia: PSP vs. GNR' },
content: {
en: `<p class='mb-4'>Portugal has two main police forces. The <strong>PSP</strong> (Blue uniforms) operates in large cities like Lisbon and Porto. The <strong>GNR</strong> (Green uniforms) is a military force that patrols rural areas and highways.</p>
<p class='mb-4'>If you have a car accident or a noise complaint, you must call the force responsible for your specific jurisdiction. Dialing 112 will automatically route you to the correct one, but knowing the difference helps when visiting a station.</p>`,
tr: `<p class='mb-4'>Portekiz'in iki ana polis gücü vardır. <strong>PSP</strong> (Mavi üniformalar) Lizbon ve Porto gibi büyük şehirlerde çalışır. <strong>GNR</strong> (Yeşil üniformalar) kırsal alanlarda ve otoyollarda devriye gezen askeri bir güçtür.</p>
<p class='mb-4'>Trafik kazası veya gürültü şikayetiniz varsa, bölgenizden sorumlu gücü aramalısınız. 112'yi aramak sizi otomatik olarak doğru olana yönlendirir, ancak farkı bilmek karakola giderken yardımcı olur.</p>`,
pt: `<p class='mb-4'>Portugal tem duas forças policiais. A <strong>PSP</strong> (Azul) opera nas grandes cidades. A <strong>GNR</strong> (Verde) é uma força militar que patrulha áreas rurais e autoestradas.</p>
<p class='mb-4'>Em caso de acidente ou ruído, deve chamar a força responsável pela sua jurisdição. O 112 encaminha-o automaticamente, mas saber a diferença ajuda ao visitar uma esquadra.</p>`
}
},
{
id: 'telecom-cancellation-emigration',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'ANACOM',
date: '17.02.2026',
title: { en: 'Canceling Internet When Leaving', tr: 'Taşınırken İnterneti İptal Etmek', pt: 'Cancelar Internet ao Emigrar' },
content: {
en: `<p class='mb-4'>Breaking a 24-month internet contract usually incurs a fine. However, "Emigration" is considered a valid reason for penalty-free cancellation. You must provide proof, such as a deregistration certificate from the municipality or a work contract abroad.</p>
<p class='mb-4'>Simply moving to a new house within Portugal is <strong>not</strong> a valid reason to cancel unless the provider cannot supply service at the new address. Always submit your cancellation request in writing.</p>`,
tr: `<p class='mb-4'>24 aylık internet sözleşmesini bozmak genellikle ceza gerektirir. Ancak "Göç Etmek", cezasız iptal için geçerli bir neden sayılır. Belediyeden kayıt silme belgesi veya yurtdışı iş sözleşmesi gibi kanıtlar sunmalısınız.</p>
<p class='mb-4'>Portekiz içinde yeni bir eve taşınmak, sağlayıcı yeni adreste hizmet veremediği durumlar haricinde iptal için geçerli bir neden <strong>değildir</strong>. İptal talebinizi her zaman yazılı olarak iletin.</p>`,
pt: `<p class='mb-4'>Quebrar a fidelização de 24 meses gera multa. Contudo, "Emigração" é motivo válido para cancelamento sem penalização. Deve provar com certificado de desregisto ou contrato no estrangeiro.</p>
<p class='mb-4'>Mudar de casa em Portugal <strong>não</strong> é motivo válido, a menos que o operador não tenha cobertura na nova morada. Envie sempre o pedido por escrito.</p>`
}
},
{
id: 'voting-rights-foreigners',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'National Elections Commission',
date: '20.01.2026',
title: { en: 'Can Foreigners Vote?', tr: 'Yabancılar Oy Kullanabilir mi?', pt: 'Estrangeiros Podem Votar?' },
content: {
en: `<p class='mb-4'>Generally, only Portuguese citizens can vote in national elections. However, residents from EU countries and specific nations with reciprocity agreements (like Brazil, Cape Verde, UK) can vote in <strong>Local Municipal Elections</strong>.</p>
<p class='mb-4'>To exercise this right, you must register at your local parish council (Junta) or via the voter census portal. Brazilians with "Equal Rights Status" (Estatuto de Igualdade) can also vote in national elections.</p>`,
tr: `<p class='mb-4'>Genellikle sadece Portekiz vatandaşları genel seçimlerde oy kullanabilir. Ancak, AB ülkelerinden ve karşılıklılık anlaşması olan belirli ülkelerden (Brezilya, Yeşil Burun Adaları, İngiltere gibi) sakinler <strong>Yerel Belediye Seçimlerinde</strong> oy kullanabilir.</p>
<p class='mb-4'>Bu hakkı kullanmak için yerel belediyenize (Junta) veya seçmen kütüğü portalına kaydolmalısınız. "Eşit Haklar Statüsü"ne (Estatuto de Igualdade) sahip Brezilyalılar genel seçimlerde de oy kullanabilir.</p>`,
pt: `<p class='mb-4'>Geralmente, só cidadãos portugueses votam nas legislativas. Porém, residentes da UE e países com reciprocidade (Brasil, Cabo Verde, UK) podem votar nas <strong>Autárquicas</strong>.</p>
<p class='mb-4'>Para exercer este direito, deve recensear-se na Junta ou no portal do eleitor. Brasileiros com "Estatuto de Igualdade" também podem votar nas legislativas.</p>`
}
},
{
id: 'irs-automatico-system',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '12.02.2026',
title: { en: 'IRS Automático: Automatic Tax Filing', tr: 'IRS Automático: Otomatik Vergi Beyanı', pt: 'IRS Automático' },
content: {
en: `<p class='mb-4'>For employees and pensioners with simple income sources, Portugal offers "IRS Automático". The tax authority pre-fills your declaration based on reported income and e-fatura expenses.</p>
<p class='mb-4'>Between April 1st and June 30th, you simply log in to confirm the data. If you do nothing, it is automatically submitted at the end of the period, but it is safer to review it manually to ensure all deductions (health, rent) are counted.</p>`,
tr: `<p class='mb-4'>Basit gelir kaynaklarına sahip çalışanlar ve emekliler için Portekiz "IRS Automático" sunar. Vergi dairesi, bildirilen gelir ve e-fatura harcamalarına dayanarak beyannamenizi önceden doldurur.</p>
<p class='mb-4'>1 Nisan ile 30 Haziran arasında giriş yapıp verileri onaylamanız yeterlidir. Hiçbir şey yapmazsanız dönem sonunda otomatik gönderilir, ancak tüm indirimlerin (sağlık, kira) sayıldığından emin olmak için manuel incelemek daha güvenlidir.</p>`,
pt: `<p class='mb-4'>Para trabalhadores e pensionistas com rendimentos simples, existe o "IRS Automático". As Finanças pré-preenchem a declaração com base nos rendimentos e e-fatura.</p>
<p class='mb-4'>Entre 1 de abril e 30 de junho, basta confirmar os dados. Se não fizer nada, é submetido automaticamente, mas é mais seguro rever manualmente para garantir todas as deduções.</p>`
}
},
{
id: 'smoking-vaping-laws',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Ministry of Health',
date: '28.01.2026',
title: { en: 'Smoking & Vaping Restrictions', tr: 'Sigara ve Elektronik Sigara Kısıtlamaları', pt: 'Restrições ao Tabaco e Vaping' },
content: {
en: `<p class='mb-4'>Portugal treats vaping and heated tobacco (like IQOS) exactly the same as traditional cigarettes. Smoking is strictly prohibited in all indoor public spaces, including bars and restaurants, unless they have specialized ventilation.</p>
<p class='mb-4'>New laws also ban smoking outdoors near schools, hospitals, and public transport stops. Fines for breaking these rules can reach €750. Always look for the "Proibido Fumar" sign before lighting up.</p>`,
tr: `<p class='mb-4'>Portekiz, elektronik sigara ve ısıtılmış tütünü (IQOS gibi) geleneksel sigaralarla tamamen aynı görür. Özel havalandırması olmayan barlar ve restoranlar dahil tüm kapalı kamusal alanlarda sigara içmek kesinlikle yasaktır.</p>
<p class='mb-4'>Yeni yasalar ayrıca okul, hastane ve toplu taşıma duraklarının yakınındaki açık alanlarda da sigarayı yasaklamaktadır. Kuralları ihlal etmenin cezası 750€'ya kadar çıkabilir. Yakmadan önce her zaman "Proibido Fumar" işaretini arayın.</p>`,
pt: `<p class='mb-4'>Portugal trata o vaping e tabaco aquecido (IQOS) como cigarros tradicionais. É proibido fumar em espaços públicos fechados, incluindo bares, salvo com ventilação especial.</p>
<p class='mb-4'>Novas leis proíbem fumar ao ar livre perto de escolas, hospitais e paragens. As multas podem chegar aos 750€. Procure sempre o sinal "Proibido Fumar".</p>`
}
},
{
id: 'landlord-entry-rights',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Civil Code / Código Civil',
date: '17.02.2026',
title: { en: 'Can the Landlord Enter My Home?', tr: 'Ev Sahibi Evime Girebilir mi?', pt: 'O Senhorio Pode Entrar em Casa?' },
content: {
en: `<p class='mb-4'>In Portugal, a rented property is your private home. The landlord <strong>cannot</strong> enter without your permission or prior notice, even to inspect the condition of the flat. Unannounced visits are illegal.</p>
<p class='mb-4'>The only exception is for urgent repairs (like a burst pipe) or during the final months of the contract to show the apartment to new tenants, but even then, the visits must be agreed upon mutually.</p>`,
tr: `<p class='mb-4'>Portekiz'de kiralık mülk sizin özel evinizdir. Ev sahibi, dairenin durumunu kontrol etmek için bile olsa izniniz veya önceden bildirim olmadan <strong>giremez</strong>. Habersiz ziyaretler yasa dışıdır.</p>
<p class='mb-4'>Tek istisna, acil onarımlar (patlayan boru gibi) veya sözleşmenin son aylarında daireyi yeni kiracılara göstermektir, ancak o zaman bile ziyaretler karşılıklı olarak kararlaştırılmalıdır.</p>`,
pt: `<p class='mb-4'>Em Portugal, o imóvel arrendado é o seu lar. O senhorio <strong>não pode</strong> entrar sem permissão ou aviso, mesmo para inspeção. Visitas sem aviso são ilegais.</p>
<p class='mb-4'>A única exceção é para reparações urgentes ou, nos últimos meses de contrato, para mostrar a casa, mas mesmo aí as visitas devem ser acordadas mutuamente.</p>`
}
},
{
id: 'aima-card-fees',
stage: 'apply',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'AIMA Official',
date: '17.02.2026',
title: { en: 'AIMA Residency Card Fees', tr: 'AIMA Oturum Kartı Ücretleri', pt: 'Taxas do Cartão de Residência' },
content: {
en: `<p class='mb-4'>While the AIMA appointment is free or low-cost, issuing the residency card carries a significant fee. For initial temporary residence permits, the fee is approximately €170 per person.</p>
<p class='mb-4'>You must pay this on the day of your appointment, usually via Multibanco (card) at the counter. Cash is often not accepted. Renewals are cheaper, typically costing around €30-€40 if done online.</p>`,
tr: `<p class='mb-4'>AIMA randevusu ücretsiz veya düşük maliyetli olsa da, oturum kartının basılması önemli bir ücrete tabidir. İlk geçici oturum izinleri için ücret kişi başı yaklaşık 170€'dur.</p>
<p class='mb-4'>Bunu randevu günü, genellikle gişede Multibanco (kart) ile ödemelisiniz. Nakit genellikle kabul edilmez. Yenilemeler daha ucuzdur, çevrimiçi yapılırsa genellikle 30€-40€ civarındadır.</p>`,
pt: `<p class='mb-4'>Embora o agendamento AIMA seja barato, a emissão do cartão tem um custo significativo. Para a primeira autorização de residência, a taxa é de aproximadamente 170€ por pessoa.</p>
<p class='mb-4'>Deve pagar no dia do agendamento, geralmente via Multibanco. Dinheiro raramente é aceite. Renovações são mais baratas, rondando os 30€-40€ se feitas online.</p>`
}
},
{
id: 'return-ticket-entry',
stage: 'discover',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'Border Control / SEF Legacy',
date: '10.02.2026',
title: { en: 'Entry Requirement: Return Ticket', tr: 'Giriş Şartı: Dönüş Bileti', pt: 'Requisito de Entrada: Bilhete de Volta' },
content: {
en: `<p class='mb-4'>If you enter Portugal on a tourist visa (or visa-free) intending to apply for residency later, border control may still demand proof of a return flight. Failing to show this can lead to denied entry.</p>
<p class='mb-4'>Even if you have a D-type visa, carrying a one-way ticket is safer only if your visa explicitly allows for residency. For tourists scouting the country, a refundable return ticket is the best safety net.</p>`,
tr: `<p class='mb-4'>Portekiz'e turist vizesiyle (veya vizesiz) girip daha sonra oturum başvurusu yapmayı planlıyorsanız, sınır kontrolü yine de dönüş bileti kanıtı isteyebilir. Bunu gösterememek giriş reddine yol açabilir.</p>
<p class='mb-4'>D tipi vizeniz olsa bile, tek yön bilet sadece vizeniz açıkça oturuma izin veriyorsa güvenlidir. Ülkeyi keşfe gelen turistler için iade edilebilir bir dönüş bileti en iyi güvenlik ağıdır.</p>`,
pt: `<p class='mb-4'>Se entrar como turista tencionando pedir residência, o controlo de fronteira pode exigir prova de voo de regresso. Não apresentar isto pode levar à recusa de entrada.</p>
<p class='mb-4'>Mesmo com visto D, um bilhete só de ida é seguro apenas se o visto permitir residência. Para turistas em prospeção, um bilhete de volta reembolsável é a melhor segurança.</p>`
}
},

    {
id: 'parental-leave-rights',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Social Security / Segurança Social',
date: '17.02.2026',
title: { en: 'Parental Leave (Licença Parental)', tr: 'Ebeveyn İzni Hakları', pt: 'Direitos de Licença Parental' },
content: {
en: `<p class='mb-4'>Portugal offers generous parental leave. The standard "Initial Parental Leave" lasts 120 or 150 days, paid at 100% or 80% of the salary, respectively. It can be shared between parents.</p>

<p class='mb-4'>There is a "Sharing Bonus": if each parent takes at least 30 days of leave exclusively (not at the same time), the total duration extends to 180 days paid at 100%. Fathers must legally take specific days immediately after birth.</p>`,
tr: `<p class='mb-4'>Portekiz cömert ebeveyn izni sunar. Standart "İlk Ebeveyn İzni", maaşın sırasıyla %100'ü veya %80'i ödenerek 120 veya 150 gün sürer. Ebeveynler arasında paylaşılabilir.</p>
<p class='mb-4'>"Paylaşım Bonusu" vardır: Her ebeveyn en az 30 gün (aynı anda olmamak kaydıyla) izin kullanırsa, toplam süre %100 maaşla 180 güne çıkar. Babaların doğumdan hemen sonra belirli günleri kullanması yasal zorunluluktur.</p>`,
pt: `<p class='mb-4'>Portugal oferece uma licença parental generosa. A "Licença Parental Inicial" dura 120 ou 150 dias, paga a 100% ou 80% do salário. Pode ser partilhada entre os pais.</p>
<p class='mb-4'>Existe um "Bónus de Partilha": se cada pai gozar pelo menos 30 dias em exclusivo, a duração total estende-se para 180 dias pagos a 100%. Os pais são legalmente obrigados a tirar dias específicos após o nascimento.</p>`
}
},
{
id: 'imt-property-transfer-tax',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: 'IMT: The Property Transfer Tax', tr: 'IMT: Emlak Devir Vergisi', pt: 'IMT: Imposto Municipal sobre Transmissões' },
content: {
en: `<p class='mb-4'>Unlike the annual IMI, the IMT is a one-off tax paid <strong>before</strong> signing the deed (Escritura) to buy a house. The rate is progressive and depends on the property value, location, and purpose (primary vs. secondary home).</p>
<p class='mb-4'>For a permanent home costing €200,000, the IMT is roughly €5,000. However, recent 2025/2026 measures have introduced exemptions for young people (under 35) buying their first permanent home.</p>`,
tr: `<p class='mb-4'>Yıllık IMI'nin aksine, IMT, evi satın almak için tapuyu (Escritura) imzalamadan <strong>önce</strong> ödenen tek seferlik bir vergidir. Oran artan oranlıdır ve mülk değerine, konumuna ve amacına (daimi veya ikincil konut) bağlıdır.</p>
<p class='mb-4'>200.000€ değerindeki daimi bir konut için IMT kabaca 5.000€'dur. Ancak, 2025/2026 önlemleri, ilk daimi evini alan gençler (35 yaş altı) için muafiyetler getirmiştir.</p>`,
pt: `<p class='mb-4'>Ao contrário do IMI anual, o IMT é um imposto único pago <strong>antes</strong> da escritura. A taxa é progressiva e depende do valor, localização e fim (habitação própria vs. secundária).</p>
<p class='mb-4'>Para uma casa de 200.000€, o IMT ronda os 5.000€. Contudo, medidas recentes de 2025/2026 introduziram isenções para jovens (sub-35) na compra da primeira habitação.</p>`
}
},
{
id: 'golden-visa-2026-status',
stage: 'discover',
category: { en: 'Visa Types', tr: 'Vize Türleri', pt: 'Tipos de Visto' },
source: 'AIMA Official',
date: '17.02.2026',
title: { en: 'Golden Visa: What Remains in 2026?', tr: 'Golden Visa: 2026\'da Ne Kaldı?', pt: 'Golden Visa: O Que Resta em 2026?' },
content: {
en: `<p class='mb-4'>The Real Estate route for the Golden Visa is officially dead. You can no longer buy a house to get residency. In 2026, the primary remaining routes are Investment Funds (€500k) or Donations to Arts/Culture (€250k).</p>
<p class='mb-4'>The fund option remains popular because it requires only 7 days of physical presence in Portugal per year, making it the only true "Plan B" residency for those who do not wish to relocate immediately.</p>`,
tr: `<p class='mb-4'>Golden Visa için Gayrimenkul rotası resmen kapandı. Artık oturum almak için ev satın alamazsınız. 2026'da kalan ana yollar Yatırım Fonları (500k€) veya Sanat/Kültür Bağışlarıdır (250k€).</p>
<p class='mb-4'>Fon seçeneği popülerliğini koruyor çünkü yılda sadece 7 gün Portekiz'de fiziksel bulunma gerektiriyor, bu da hemen taşınmak istemeyenler için tek gerçek "B Planı" oturum izni olmasını sağlıyor.</p>`,
pt: `<p class='mb-4'>A via Imobiliária para o Golden Visa acabou oficialmente. Já não pode comprar casa para obter residência. Em 2026, as principais vias são Fundos de Investimento (500k€) ou Doações às Artes (250k€).</p>
<p class='mb-4'>A opção de fundos continua popular pois exige apenas 7 dias de presença física por ano, tornando-se o único verdadeiro "Plano B" para quem não quer mudar-se já.</p>`
}
},
{
id: 'national-vaccination-plan',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'SNS Official',
date: '05.02.2026',
title: { en: 'National Vaccination Plan (PNV)', tr: 'Ulusal Aşı Planı (PNV)', pt: 'Plano Nacional de Vacinação' },
content: {
en: `<p class='mb-4'>Portugal has one of the world's highest vaccination rates. The National Vaccination Plan (PNV) is free for all residents, including foreigners. It covers vaccines for Tetanus, Measles, Hepatitis B, and more.</p>
<p class='mb-4'>To enroll children in school, their vaccination bulletin (Boletim de Vacinas) must be up to date. You can update foreign records at your local health center; just bring the original documents from your home country.</p>`,
tr: `<p class='mb-4'>Portekiz dünyanın en yüksek aşılama oranlarından birine sahiptir. Ulusal Aşı Planı (PNV), yabancılar dahil tüm sakinler için ücretsizdir. Tetanoz, Kızamık, Hepatit B ve daha fazlasını kapsar.</p>
<p class='mb-4'>Çocukları okula kaydettirmek için aşı karnelerinin (Boletim de Vacinas) güncel olması gerekir. Yabancı kayıtları yerel sağlık merkezinizde güncelleyebilirsiniz; sadece ülkenizden orijinal belgeleri getirin.</p>`,
pt: `<p class='mb-4'>Portugal tem uma das maiores taxas de vacinação do mundo. O Plano Nacional de Vacinação (PNV) é gratuito para todos os residentes. Cobre Tétano, Sarampo, Hepatite B, entre outras.</p>
<p class='mb-4'>Para inscrever crianças na escola, o Boletim de Vacinas deve estar atualizado. Pode transcrever registos estrangeiros no centro de saúde; basta levar os documentos originais.</p>`
}
},
{
id: 'driving-license-renewal-age',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'IMT Official',
date: '20.01.2026',
title: { en: 'When to Renew Your License', tr: 'Ehliyet Ne Zaman Yenilenir', pt: 'Quando Renovar a Carta' },
content: {
en: `<p class='mb-4'>Portuguese driving licenses do not just expire every 10 years. They expire at specific ages: 30, 40, 50, 60, 65, and then every 2 years. If you exchanged your foreign license, check the validity date carefully.</p>
<p class='mb-4'>You must renew it within 6 months <strong>before</strong> your birthday in the renewal year. Missing this deadline can result in fines or even the cancellation of your license, forcing you to retake the driving exam.</p>`,
tr: `<p class='mb-4'>Portekiz ehliyetlerinin süresi sadece her 10 yılda bir dolmaz. Belirli yaşlarda sona ererler: 30, 40, 50, 60, 65 ve sonrasında her 2 yılda bir. Yabancı ehliyetinizi değiştirdiyseniz, geçerlilik tarihini dikkatlice kontrol edin.</p>
<p class='mb-4'>Yenileme yılındaki doğum gününüzden <strong>önceki</strong> 6 ay içinde yenilemelisiniz. Bu tarihi kaçırmak para cezasına veya ehliyetinizin iptaline yol açarak sizi tekrar direksiyon sınavına girmeye zorlayabilir.</p>`,
pt: `<p class='mb-4'>As cartas portuguesas não expiram apenas a cada 10 anos. Expiram em idades específicas: 30, 40, 50, 60, 65 e depois a cada 2 anos. Se trocou a sua carta, verifique a validade.</p>
<p class='mb-4'>Deve renovar nos 6 meses <strong>antes</strong> do aniversário no ano de renovação. Falhar o prazo pode resultar em multas ou cancelamento da carta, obrigando a repetir o exame.</p>`
}
},
{
id: 'electric-vehicle-incentives',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Environmental Fund',
date: '12.02.2026',
title: { en: 'Incentives for Electric Vehicles', tr: 'Elektrikli Araç Teşvikleri', pt: 'Incentivos para Veículos Elétricos' },
content: {
en: `<p class='mb-4'>Portugal strongly encourages EV adoption. Fully electric cars are exempt from the annual road tax (IUC) and the purchase tax (ISV). In cities like Lisbon, you can get a "Green Disc" for heavily discounted or free street parking.</p>
<p class='mb-4'>The charging network (Mobi.E) is unified. One card from any provider (like EDP or Galp) works on all public chargers nationwide. You don't need multiple apps for different stations.</p>`,
tr: `<p class='mb-4'>Portekiz EV kullanımını güçlü bir şekilde teşvik eder. Tam elektrikli araçlar yıllık yol vergisinden (IUC) ve satın alma vergisinden (ISV) muaftır. Lizbon gibi şehirlerde, indirimli veya ücretsiz park için "Yeşil Disk" alabilirsiniz.</p>
<p class='mb-4'>Şarj ağı (Mobi.E) birleşiktir. Herhangi bir sağlayıcıdan (EDP veya Galp gibi) alacağınız tek bir kart, ülke çapındaki tüm kamu şarj cihazlarında çalışır. Farklı istasyonlar için birden fazla uygulamaya ihtiyacınız yoktur.</p>`,
pt: `<p class='mb-4'>Portugal incentiva fortemente os elétricos. Carros 100% elétricos estão isentos de IUC e ISV. Em Lisboa, pode obter um "Dístico Verde" para estacionamento gratuito ou com desconto.</p>
<p class='mb-4'>A rede de carregamento (Mobi.E) é unificada. Um cartão de qualquer fornecedor (como EDP ou Galp) funciona em todos os postos públicos. Não precisa de várias apps.</p>`
}
},
{
id: 'marriage-regimes-property',
stage: 'apply',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'Civil Code / Código Civil',
date: '17.02.2026',
title: { en: 'Marriage Regimes: Assets & Debt', tr: 'Evlilik Rejimleri: Mal ve Borç', pt: 'Regimes de Casamento' },
content: {
en: `<p class='mb-4'>If you marry in Portugal without a prenuptial agreement, the default regime is "Comunhão de Adquiridos". This means assets bought <em>after</em> marriage are shared, but what you owned <em>before</em> remains yours.</p>
<p class='mb-4'>You can opt for "Separação de Bens" (Total Separation), which is mandatory if one spouse is over 60. This choice affects not just divorce, but also inheritance and liability for your spouse's debts.</p>`,
tr: `<p class='mb-4'>Portekiz'de evlilik sözleşmesi olmadan evlenirseniz, varsayılan rejim "Comunhão de Adquiridos"tur. Bu, evlilikten <em>sonra</em> alınan malların ortak olduğu, ancak <em>önce</em> sahip olduklarınızın size kaldığı anlamına gelir.</p>
<p class='mb-4'>Eşlerden biri 60 yaşın üzerindeyse zorunlu olan "Separação de Bens" (Tam Ayrılık) rejimini seçebilirsiniz. Bu seçim sadece boşanmayı değil, mirası ve eşinizin borçlarından sorumluluğu da etkiler.</p>`,
pt: `<p class='mb-4'>Se casar em Portugal sem convenção antenupcial, o regime padrão é "Comunhão de Adquiridos". Bens comprados <em>após</em> o casamento são comuns, mas o que tinha <em>antes</em> é seu.</p>
<p class='mb-4'>Pode optar pela "Separação de Bens", obrigatória se um cônjuge tiver mais de 60 anos. A escolha afeta não só o divórcio, mas também heranças e dívidas do cônjuge.</p>`
}
},
{
id: 'university-tuition-fees',
stage: 'settle',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'DGES / Ministry of Education',
date: '28.01.2026',
title: { en: 'University Tuition Fees (Propinas)', tr: 'Üniversite Harçları (Propinas)', pt: 'Propinas Universitárias' },
content: {
en: `<p class='mb-4'>Public university fees in Portugal are capped by the state. For EU citizens and residents, the maximum annual fee for a Bachelor's degree is around €697. Masters degrees can cost slightly more.</p>
<p class='mb-4'>However, "International Students" (without residency) pay significantly more, often between €3,000 and €7,000 per year. Once you get your residency card (D7/D8), you can usually request to switch to the domestic fee structure.</p>`,
tr: `<p class='mb-4'>Portekiz'de devlet üniversitesi harçları devlet tarafından sınırlandırılmıştır. AB vatandaşları ve sakinleri için lisans derecesi yıllık harcı maksimum 697€ civarındadır. Yüksek lisans biraz daha pahalı olabilir.</p>
<p class='mb-4'>Ancak, (oturumu olmayan) "Uluslararası Öğrenciler" çok daha fazlasını, genellikle yılda 3.000€ ile 7.000€ arasında öder. Oturum kartınızı (D7/D8) aldığınızda, genellikle yerli ücret yapısına geçmeyi talep edebilirsiniz.</p>`,
pt: `<p class='mb-4'>As propinas públicas são limitadas pelo estado. Para cidadãos da UE e residentes, o máximo anual para licenciatura ronda os 697€. Mestrados podem custar um pouco mais.</p>
<p class='mb-4'>Contudo, "Estudantes Internacionais" pagam muito mais, entre 3.000€ e 7.000€. Ao obter o cartão de residência, pode geralmente pedir a alteração para o regime de propinas nacional.</p>`
}
},
{
id: 'nif-for-children',
stage: 'apply',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'Tax Authority / Finanças',
date: '17.02.2026',
title: { en: 'Do Children Need a NIF?', tr: 'Çocukların NIF\'e İhtiyacı Var mı?', pt: 'As Crianças Precisam de NIF?' },
content: {
en: `<p class='mb-4'>Yes, children need a NIF to enroll in school and for you to deduct their health and education expenses on your IRS tax return. Without it, you lose significant tax benefits.</p>
<p class='mb-4'>You can request a NIF for a child at any Loja de Cidadão. You will need the child's birth certificate and your own identification. It is free and issued immediately.</p>`,
tr: `<p class='mb-4'>Evet, çocukların okula kaydolması ve sağlık/eğitim masraflarını IRS vergi beyannamenizden düşebilmeniz için NIF'e ihtiyacı vardır. Bu olmadan önemli vergi avantajlarını kaybedersiniz.</p>
<p class='mb-4'>Herhangi bir Loja de Cidadão'dan çocuk için NIF talep edebilirsiniz. Çocuğun doğum belgesine ve kendi kimliğinize ihtiyacınız olacak. Ücretsizdir ve hemen verilir.</p>`,
pt: `<p class='mb-4'>Sim, as crianças precisam de NIF para a matrícula escolar e para deduzir despesas de saúde e educação no IRS. Sem ele, perde benefícios fiscais importantes.</p>
<p class='mb-4'>Pode pedir o NIF para criança em qualquer Loja de Cidadão. Precisa da certidão de nascimento e da sua identificação. É gratuito e emitido na hora.</p>`
}
},
{
id: 'social-energy-tariff',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'ERSE / Social Security',
date: '03.02.2026',
title: { en: 'Social Energy Tariff', tr: 'Sosyal Enerji Tarifesi', pt: 'Tarifa Social de Energia' },
content: {
en: `<p class='mb-4'>Households with low income or those receiving social benefits (like unemployment or child benefits) are automatically eligible for the Social Tariff. This provides a discount of over 30% on electricity and gas bills.</p>
<p class='mb-4'>The process is automatic via data cross-referencing between Social Security and energy providers. If you believe you are eligible but aren't receiving the discount, you must contact your energy supplier to force a check.</p>`,
tr: `<p class='mb-4'>Düşük gelirli veya sosyal yardım (işsizlik veya çocuk yardımı gibi) alan haneler otomatik olarak Sosyal Tarife'ye hak kazanır. Bu, elektrik ve gaz faturalarında %30'un üzerinde indirim sağlar.</p>
<p class='mb-4'>Süreç, Sosyal Güvenlik ve enerji sağlayıcıları arasındaki veri çapraz kontrolü ile otomatiktir. Hak kazandığınızı düşünüyor ancak indirim almıyorsanız, kontrolü zorlamak için tedarikçinizle iletişime geçmelisiniz.</p>`,
pt: `<p class='mb-4'>Famílias com baixos rendimentos ou benefícios sociais (como desemprego ou abono) são elegíveis para a Tarifa Social. Isto dá um desconto superior a 30% na luz e gás.</p>
<p class='mb-4'>O processo é automático via cruzamento de dados. Se acha que é elegível mas não tem o desconto, deve contactar o fornecedor para forçar uma verificação.</p>`
}
},


{
id: 'job-seeker-visa-rules',
stage: 'discover',
category: { en: 'Visa Types', tr: 'Vize Türleri', pt: 'Tipos de Visto' },
source: 'Ministry of Foreign Affairs',
date: '17.02.2026',
title: { en: 'The Job Seeker Visa', tr: 'İş Arama Vizesi', pt: 'Visto de Procura de Trabalho' },
content: {
en: `<p class='mb-4'>This visa allows you to enter Portugal specifically to look for work for 120 days, renewable for another 60. You do not need a job offer beforehand, but you must show proof of financial means (3x minimum wage).</p>

<p class='mb-4'>If you find a job, you can apply for residency directly from within Portugal. If you fail to secure employment within the validity period, you must leave the country, and you cannot reapply for this specific visa for one year.</p>`,
tr: `<p class='mb-4'>Bu vize, 120 gün boyunca (60 gün daha uzatılabilir) iş aramak için Portekiz'e girmenizi sağlar. Önceden bir iş teklifine ihtiyacınız yoktur, ancak finansal yeterlilik (asgari ücretin 3 katı) göstermelisiniz.</p>
<p class='mb-4'>İş bulursanız, doğrudan Portekiz içinden oturum iznine başvurabilirsiniz. Geçerlilik süresi içinde iş bulamazsanız ülkeden ayrılmanız gerekir ve bu özel vizeye bir yıl boyunca tekrar başvuramazsınız.</p>`,
pt: `<p class='mb-4'>Este visto permite entrar em Portugal para procurar trabalho durante 120 dias, renováveis por mais 60. Não precisa de oferta de emprego prévia, mas deve provar meios financeiros (3x salário mínimo).</p>
<p class='mb-4'>Se encontrar trabalho, pode pedir residência diretamente em Portugal. Se não conseguir emprego dentro do prazo, deve sair do país e não pode voltar a pedir este visto específico durante um ano.</p>`
}
},
{
id: 'citizenship-5-year-rule',
stage: 'settle',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'Civil Registry / IRN',
date: '10.02.2026',
title: { en: 'Citizenship: The 5-Year Countdown', tr: 'Vatandaşlık: 5 Yıllık Geri Sayım', pt: 'Nacionalidade: A Contagem de 5 Anos' },
content: {
en: `<p class='mb-4'>You can apply for Portuguese citizenship after 5 years of legal residency. Crucially, the clock starts ticking from the moment you <strong>submitted your residency request</strong>, not from the day you received your card.</p>
<p class='mb-4'>To qualify, you must pass a basic Portuguese language test (CIPLE level A2) and have a clean criminal record. This passport grants you full rights to live and work anywhere in the European Union.</p>`,
tr: `<p class='mb-4'>5 yıllık yasal ikametten sonra Portekiz vatandaşlığına başvurabilirsiniz. Kritik nokta şudur: Süre, kartınızı aldığınız günden değil, <strong>oturum talebinizi sunduğunuz</strong> andan itibaren işlemeye başlar.</p>
<p class='mb-4'>Hak kazanmak için temel Portekizce dil sınavını (CIPLE seviye A2) geçmeli ve temiz bir adli sicile sahip olmalısınız. Bu pasaport size Avrupa Birliği'nin herhangi bir yerinde yaşama ve çalışma hakkı verir.</p>`,
pt: `<p class='mb-4'>Pode pedir nacionalidade portuguesa após 5 anos de residência legal. O tempo conta a partir do momento em que <strong>submeteu o pedido de residência</strong>, e não do dia em que recebeu o cartão.</p>
<p class='mb-4'>Para se qualificar, deve passar no teste de língua portuguesa (CIPLE nível A2) e ter registo criminal limpo. Este passaporte dá-lhe plenos direitos para viver e trabalhar em qualquer lugar da UE.</p>`
}
},
{
id: 'scut-electronic-tolls',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Infraestruturas de Portugal',
date: '05.02.2026',
title: { en: 'SCUT Highways: The Invisible Tolls', tr: 'SCUT Otoyolları: Görünmez Gişeler', pt: 'Autoestradas SCUT: Portagens Invisíveis' },
content: {
en: `<p class='mb-4'>Some highways, known as SCUTs, have no payment booths but are not free. Cameras record your license plate as you pass under gantries. If you don't have a Via Verde device, you must pay manually.</p>
<p class='mb-4'>You cannot pay immediately. You must wait 48 hours for the debt to appear in the system, then pay it at a CTT shop or Payshop agent within 5 days. Forgetting this process is the #1 cause of fines for new residents.</p>`,
tr: `<p class='mb-4'>SCUT olarak bilinen bazı otoyollarda ödeme gişesi yoktur ancak ücretsiz değildirler. Kameralar siz altından geçerken plakanızı kaydeder. Via Verde cihazınız yoksa manuel ödeme yapmalısınız.</p>
<p class='mb-4'>Hemen ödeme yapamazsınız. Borcun sisteme düşmesi için 48 saat beklemeli, ardından 5 gün içinde bir CTT şubesi veya Payshop noktasında ödemelisiniz. Bunu unutmak, yeni sakinlerin ceza almasının bir numaralı nedenidir.</p>`,
pt: `<p class='mb-4'>Algumas autoestradas, conhecidas como SCUTs, não têm portagens mas não são grátis. Câmaras registam a matrícula nos pórticos. Se não tiver Via Verde, deve pagar manualmente.</p>
<p class='mb-4'>Não pode pagar imediatamente. Deve esperar 48 horas para a dívida aparecer, e depois pagar num CTT ou Payshop em 5 dias. Esquecer este processo é a causa nº 1 de multas para novos residentes.</p>`
}
},
{
id: 'irs-jovem-tax-break',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '17.02.2026',
title: { en: 'IRS Jovem: Tax Breaks for Youth', tr: 'IRS Jovem: Gençler İçin Vergi İndirimi', pt: 'IRS Jovem' },
content: {
en: `<p class='mb-4'>Young workers (up to 35 years old) with a bachelor's degree or higher can benefit from the "IRS Jovem" scheme. This offers a massive tax exemption on income for the first 5 years of your career in Portugal.</p>
<p class='mb-4'>In the first year, you are 100% exempt from income tax (up to a limit). The exemption decreases gradually over the 5 years. You must explicitly select this option when filing your annual tax return.</p>`,
tr: `<p class='mb-4'>Lisans veya daha yüksek derecesi olan genç çalışanlar (35 yaşına kadar) "IRS Jovem" programından yararlanabilir. Bu, Portekiz'deki kariyerinizin ilk 5 yılında gelir vergisinde büyük bir muafiyet sağlar.</p>
<p class='mb-4'>İlk yıl, gelir vergisinden %100 muafsınız (belirli bir limite kadar). Muafiyet 5 yıl içinde kademeli olarak azalır. Yıllık vergi beyannamenizi verirken bu seçeneği açıkça seçmelisiniz.</p>`,
pt: `<p class='mb-4'>Jovens trabalhadores (até 35 anos) com licenciatura ou superior podem beneficiar do "IRS Jovem". Oferece uma isenção fiscal massiva nos primeiros 5 anos de carreira em Portugal.</p>
<p class='mb-4'>No primeiro ano, está 100% isento de IRS (até um limite). A isenção diminui gradualmente ao longo dos 5 anos. Deve selecionar explicitamente esta opção ao entregar a declaração anual.</p>`
}
},
{
id: 'beach-rules-music',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Maritime Authority',
date: '02.02.2026',
title: { en: 'Beach Rules: No Loud Music', tr: 'Plaj Kuralları: Yüksek Sesli Müzik Yasak', pt: 'Regras de Praia: Sem Música Alta' },
content: {
en: `<p class='mb-4'>Portugal has strict etiquette for its beaches. Using portable speakers to play loud music is legally prohibited and can result in fines ranging from €200 to €4,000 if someone complains to the Maritime Police.</p>
<p class='mb-4'>Also, dogs are generally banned from concessioned beaches (those with lifeguards and sunbeds) during the bathing season (June-September), unless explicitly marked as "Pet Friendly".</p>`,
tr: `<p class='mb-4'>Portekiz plajlarında katı görgü kuralları vardır. Taşınabilir hoparlörlerle yüksek sesli müzik çalmak yasal olarak yasaktır ve biri Deniz Polisine şikayet ederse 200€ ile 4.000€ arasında para cezasına yol açabilir.</p>
<p class='mb-4'>Ayrıca, "Evcil Hayvan Dostu" olarak açıkça işaretlenmedikçe, yüzme sezonunda (Haziran-Eylül) köpeklerin işletilen (cankurtaranlı ve şezlonglu) plajlara girmesi genellikle yasaktır.</p>`,
pt: `<p class='mb-4'>Portugal tem regras estritas nas praias. Usar colunas portáteis com música alta é proibido e pode dar multas de 200€ a 4.000€ se houver queixa à Polícia Marítima.</p>
<p class='mb-4'>Além disso, cães são geralmente proibidos em praias concessionadas (com nadadores-salvadores) durante a época balnear, a menos que marcadas como "Pet Friendly".</p>`
}
},
{
id: 'unemployment-benefits-foreigners',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Social Security / Segurança Social',
date: '20.01.2026',
title: { en: 'Unemployment Benefits for Expats', tr: 'Yabancılar İçin İşsizlik Maaşı', pt: 'Subsídio de Desemprego para Estrangeiros' },
content: {
en: `<p class='mb-4'>Foreign residents have the same right to unemployment benefits as citizens, provided they have contributed to Social Security. To qualify, you must have worked as an employee for at least 360 days in the last 24 months.</p>
<p class='mb-4'>You must register at the IEFP (Employment Center) immediately after losing your job involuntarily. Resigning voluntarily (demissão) disqualifies you from receiving these benefits.</p>`,
tr: `<p class='mb-4'>Yabancı sakinler, Sosyal Güvenliğe katkıda bulunmuş olmaları şartıyla vatandaşlarla aynı işsizlik maaşı hakkına sahiptir. Hak kazanmak için son 24 ayda en az 360 gün sigortalı çalışmış olmanız gerekir.</p>
<p class='mb-4'>İşinizi istemsiz olarak kaybettikten hemen sonra IEFP'ye (İş ve İşçi Bulma Kurumu) kayıt olmalısınız. Kendi isteğinizle istifa etmek (demissão), bu yardımları almanızı engeller.</p>`,
pt: `<p class='mb-4'>Residentes estrangeiros têm o mesmo direito ao subsídio de desemprego, desde que tenham descontado. Para se qualificar, deve ter trabalhado por conta de outrem pelo menos 360 dias nos últimos 24 meses.</p>
<p class='mb-4'>Deve inscrever-se no IEFP imediatamente após perder o emprego involuntariamente. Demitir-se voluntariamente desqualifica-o de receber estes benefícios.</p>`
}
},
{
id: 'birth-citizenship-jus-soli',
stage: 'settle',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'IRN / Civil Registry',
date: '17.02.2026',
title: { en: 'Citizenship for Babies Born Here', tr: 'Burada Doğan Bebekler İçin Vatandaşlık', pt: 'Nacionalidade para Bebés Nascidos Cá' },
content: {
en: `<p class='mb-4'>Children born in Portugal to foreign parents are automatically entitled to Portuguese citizenship if at least one parent has legally resided in the country for at least <strong>one year</strong> at the time of birth.</p>
<p class='mb-4'>This applies even if the parent holds a temporary residence permit. You can register the baby directly at the maternity ward or a Civil Registry office, granting them an EU passport immediately.</p>`,
tr: `<p class='mb-4'>Yabancı ebeveynlerden Portekiz'de doğan çocuklar, doğum anında ebeveynlerden en az biri ülkede en az <strong>bir yıldır</strong> yasal olarak ikamet ediyorsa otomatik olarak Portekiz vatandaşlığına hak kazanır.</p>
<p class='mb-4'>Bu, ebeveyn geçici oturum iznine sahip olsa bile geçerlidir. Bebeği doğrudan doğum servisinde veya Nüfus Müdürlüğü'nde kaydettirebilir ve onlara hemen bir AB pasaportu kazandırabilirsiniz.</p>`,
pt: `<p class='mb-4'>Filhos de estrangeiros nascidos em Portugal têm direito automático à nacionalidade se pelo menos um dos pais residir legalmente no país há pelo menos <strong>um ano</strong> à data do nascimento.</p>
<p class='mb-4'>Isto aplica-se mesmo com autorização de residência temporária. Pode registar o bebé na maternidade ou Conservatória, garantindo-lhe imediatamente passaporte da UE.</p>`
}
},
{
id: 'large-waste-monstros',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Municipal Councils',
date: '28.01.2026',
title: { en: 'Disposing of Large Items (Monstros)', tr: 'Büyük Eşya Atımı (Monstros)', pt: 'Recolha de Monstros' },
content: {
en: `<p class='mb-4'>Leaving old furniture or mattresses next to street bins is illegal and carries heavy fines. Instead, every municipality offers a free pickup service for "Monstros" (Monsters/Large Waste).</p>
<p class='mb-4'>You simply call your local parish council (Junta de Freguesia) or check their app to schedule a pickup time. They will tell you exactly when to place the item outside your door for collection.</p>`,
tr: `<p class='mb-4'>Eski mobilya veya yatakları sokak kutularının yanına bırakmak yasaktır ve ağır cezaları vardır. Bunun yerine, her belediye "Monstros" (Canavarlar/Büyük Atıklar) için ücretsiz toplama hizmeti sunar.</p>
<p class='mb-4'>Sadece yerel belediyenizi (Junta de Freguesia) arayın veya uygulamalarından bir toplama saati planlayın. Eşyayı tam olarak ne zaman kapınızın önüne koymanız gerektiğini size söyleyeceklerdir.</p>`,
pt: `<p class='mb-4'>Deixar móveis velhos ou colchões junto ao lixo é ilegal e dá multa. Em vez disso, cada município oferece um serviço gratuito de recolha de "Monstros".</p>
<p class='mb-4'>Basta ligar para a Junta de Freguesia ou usar a app para agendar. Eles dirão exatamente quando colocar o objeto à porta para recolha.</p>`
}
},
{
id: 'yellow-complaint-book-public',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'AMA / Public Administration',
date: '12.02.2026',
title: { en: 'The Yellow Complaint Book', tr: 'Sarı Şikayet Defteri', pt: 'O Livro Amarelo' },
content: {
en: `<p class='mb-4'>While the Red Book is for private businesses, the <strong>Yellow Book</strong> (Livro Amarelo) is specifically for complaints against public services like AIMA, Finanças, or Social Security.</p>
<p class='mb-4'>If you face rude behavior, unreasonable delays, or administrative errors at a government office, requesting the Yellow Book triggers an internal review. It is a powerful tool to ensure your rights are respected in the public sector.</p>`,
tr: `<p class='mb-4'>Kırmızı Defter özel işletmeler içinken, <strong>Sarı Defter</strong> (Livro Amarelo) özellikle AIMA, Finanças veya Sosyal Güvenlik gibi kamu hizmetlerine yönelik şikayetler içindir.</p>
<p class='mb-4'>Bir devlet dairesinde kaba davranış, mantıksız gecikmeler veya idari hatalarla karşılaşırsanız, Sarı Defter'i istemek bir iç inceleme başlatır. Kamu sektöründe haklarınıza saygı duyulmasını sağlamak için güçlü bir araçtır.</p>`,
pt: `<p class='mb-4'>Enquanto o Livro Vermelho é para privados, o <strong>Livro Amarelo</strong> é específico para queixas contra serviços públicos como AIMA, Finanças ou Segurança Social.</p>
<p class='mb-4'>Se enfrentar rudeza, atrasos irrazoáveis ou erros administrativos, pedir o Livro Amarelo desencadeia uma revisão interna. É uma ferramenta poderosa para garantir os seus direitos no setor público.</p>`
}
},
{
id: 'ctt-lockers-delivery',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'CTT Official',
date: '03.02.2026',
title: { en: 'CTT Lockers: Never Miss a Parcel', tr: 'CTT Dolapları: Kargoyu Kaçırmayın', pt: 'Cifres CTT: Nunca Perca uma Encomenda' },
content: {
en: `<p class='mb-4'>If you work during the day, home delivery can be a headache. CTT offers a network of "Lockers" (Cifres) located in supermarkets and gas stations accessible 24/7.</p>
<p class='mb-4'>You can register on the CTT website to get a virtual address. When ordering online, use this address. You will receive a PIN code via SMS to open the locker and collect your package at your convenience.</p>`,
tr: `<p class='mb-4'>Gündüz çalışıyorsanız, eve teslimat baş ağrısı olabilir. CTT, süpermarketlerde ve benzin istasyonlarında bulunan ve 7/24 erişilebilen bir "Dolap" (Cifres) ağı sunar.</p>
<p class='mb-4'>Sanal bir adres almak için CTT web sitesine kaydolabilirsiniz. Online sipariş verirken bu adresi kullanın. Dolabı açmak ve paketinizi istediğiniz zaman almak için SMS ile bir PIN kodu alırsınız.</p>`,
pt: `<p class='mb-4'>Se trabalha de dia, a entrega em casa é uma dor de cabeça. Os CTT oferecem uma rede de "Cifres" em supermercados e bombas de gasolina acessíveis 24/7.</p>
<p class='mb-4'>Pode registar-se no site CTT para ter uma morada virtual. Ao encomendar, use essa morada. Receberá um PIN por SMS para abrir o cacifo e levantar a encomenda quando quiser.</p>`
}
},

{
id: 'manifestacao-interesse-abolished',
stage: 'discover',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'AIMA Official',
date: '17.02.2026',
title: { en: 'No More "Manifestação de Interesse"', tr: '"Manifestação de Interesse" Kaldırıldı', pt: 'Fim da Manifestação de Interesse' },
content: {
en: `<p class='mb-4'>The old route of entering Portugal as a tourist and applying for residency (Manifestação de Interesse) was abolished in June 2024. In 2026, you strictly cannot legalize your status from within the country without a valid visa.</p>

<p class='mb-4'>If you arrive without a D-type visa (D7, D8, D2), you must return to your country of origin to apply. Do not listen to outdated advice suggesting you can "lock" your entry and wait; this path is legally closed.</p>`,
tr: `<p class='mb-4'>Portekiz'e turist olarak girip oturum başvurusu yapma (Manifestação de Interesse) yolu Haziran 2024'te kaldırıldı. 2026'da, geçerli bir vizeniz olmadan ülke içinden statünüzü yasallaştırmanız kesinlikle mümkün değildir.</p>
<p class='mb-4'>D tipi bir vize (D7, D8, D2) olmadan gelirseniz, başvurmak için menşe ülkenize dönmelisiniz. Girişinizi "kilitleyip" bekleyebileceğinizi söyleyen eski tavsiyelere kulak asmayın; bu yol yasal olarak kapalıdır.</p>`,
pt: `<p class='mb-4'>A antiga via de entrar como turista e pedir residência (Manifestação de Interesse) foi abolida em junho de 2024. Em 2026, não pode legalizar o seu estatuto dentro do país sem um visto válido.</p>
<p class='mb-4'>Se chegar sem visto D (D7, D8, D2), deve regressar ao país de origem para o pedir. Não dê ouvidos a conselhos desatualizados; esta via está legalmente fechada.</p>`
}
},
{
id: 'parking-blue-zones',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'EMEL / Municipalities',
date: '05.02.2026',
title: { en: 'Parking Rules: Blue vs. Yellow Lines', tr: 'Park Kuralları: Mavi ve Sarı Çizgiler', pt: 'Estacionamento: Linhas Azuis vs. Amarelas' },
content: {
en: `<p class='mb-4'>In cities like Lisbon and Porto, parking is strictly regulated. <strong>Blue lines</strong> on the pavement indicate paid parking zones. You must pay at the meter or via apps like Telpark/Via Verde. <strong>Yellow lines</strong> mean parking is strictly forbidden.</p>
<p class='mb-4'>Residents can apply for a "Dístico de Residente" to park for free in their specific neighborhood. Without this badge, leaving your car in a blue zone overnight can result in it being clamped or towed.</p>`,
tr: `<p class='mb-4'>Lizbon ve Porto gibi şehirlerde park etme sıkı kurallara bağlıdır. Kaldırımdaki <strong>Mavi çizgiler</strong> ücretli park bölgelerini gösterir. Parkmetreden veya Telpark/Via Verde gibi uygulamalardan ödeme yapmalısınız. <strong>Sarı çizgiler</strong> park etmenin kesinlikle yasak olduğu anlamına gelir.</p>
<p class='mb-4'>Sakinler, kendi mahallelerinde ücretsiz park etmek için "Dístico de Residente" başvurusunda bulunabilirler. Bu kart olmadan aracınızı gece mavi bölgede bırakmak, tekerleğin kilitlenmesine veya çekilmesine neden olabilir.</p>`,
pt: `<p class='mb-4'>Em cidades como Lisboa e Porto, o estacionamento é rigoroso. <strong>Linhas azuis</strong> indicam zonas pagas. Deve pagar no parquímetro ou via apps. <strong>Linhas amarelas</strong> significam que é proibido estacionar.</p>
<p class='mb-4'>Os residentes podem pedir um "Dístico de Residente" para estacionar gratuitamente no seu bairro. Sem este selo, deixar o carro numa zona azul durante a noite pode levar ao bloqueio ou reboque.</p>`
}
},
{
id: 'dental-care-sns',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'SNS Official',
date: '17.02.2026',
title: { en: 'Dental Care in Portugal', tr: 'Portekiz\'de Diş Tedavisi', pt: 'Medicina Dentária em Portugal' },
content: {
en: `<p class='mb-4'>The public health system (SNS) generally does not cover routine dental care for adults. Most residents pay out-of-pocket at private clinics or use private health insurance that includes a dental plan (Estomatologia).</p>
<p class='mb-4'>However, vulnerable groups (children, pregnant women, and elderly with low income) can access "Cheque-Dentista," a voucher system allowing free treatments at partner private clinics. Check with your family doctor if you qualify.</p>`,
tr: `<p class='mb-4'>Kamu sağlık sistemi (SNS) genellikle yetişkinler için rutin diş bakımını kapsamaz. Çoğu sakin, özel kliniklerde cebinden ödeme yapar veya diş planı (Estomatologia) içeren özel sağlık sigortası kullanır.</p>
<p class='mb-4'>Ancak, hassas gruplar (çocuklar, hamile kadınlar ve düşük gelirli yaşlılar), anlaşmalı özel kliniklerde ücretsiz tedavi sağlayan "Cheque-Dentista" kupon sisteminden yararlanabilir. Uygun olup olmadığınızı aile hekiminize danışın.</p>`,
pt: `<p class='mb-4'>O SNS geralmente não cobre tratamentos dentários de rotina para adultos. A maioria paga do bolso em clínicas privadas ou usa seguro de saúde com estomatologia.</p>
<p class='mb-4'>Contudo, grupos vulneráveis (crianças, grávidas, idosos carenciados) têm acesso ao "Cheque-Dentista", que permite tratamentos gratuitos em clínicas aderentes. Verifique a elegibilidade com o médico de família.</p>`
}
},
{
id: 'prato-do-dia-lunch',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Community Insights',
date: '14.02.2026',
title: { en: 'The "Prato do Dia" Economy', tr: '"Prato do Dia" Ekonomisi', pt: 'A Economia do Prato do Dia' },
content: {
en: `<p class='mb-4'>Eating out for lunch is often cheaper than cooking at home if you know where to go. Look for the "Prato do Dia" (Dish of the Day) menu. For €8 to €12, you typically get soup, a main dish, a drink (wine included), and coffee.</p>
<p class='mb-4'>This is distinct from the tourist menu. It is usually written on a paper tablecloth or a chalkboard outside. It's how locals sustain themselves, offering high-quality, freshly cooked traditional food at a fixed low price.</p>`,
tr: `<p class='mb-4'>Nereye gideceğinizi biliyorsanız, öğle yemeğini dışarıda yemek evde pişirmekten daha ucuza gelebilir. "Prato do Dia" (Günün Yemeği) menüsünü arayın. 8€ ile 12€ arasında genellikle çorba, ana yemek, içecek (şarap dahil) ve kahve alırsınız.</p>
<p class='mb-4'>Bu, turist menüsünden farklıdır. Genellikle kağıt masa örtüsüne veya dışarıdaki kara tahtaya yazılır. Yerel halkın taze pişmiş geleneksel yemeklerle uygun fiyata beslenmesinin yoludur.</p>`,
pt: `<p class='mb-4'>Almoçar fora é muitas vezes mais barato que cozinhar se souber onde ir. Procure o "Prato do Dia". Por 8€ a 12€, geralmente inclui sopa, prato principal, bebida e café.</p>
<p class='mb-4'>Isto é diferente do menu turístico. Geralmente está escrito na toalha de papel ou numa lousa. É assim que os locais se sustentam, com comida tradicional fresca a preço fixo.</p>`
}
},
{
id: 'customs-ctt-packages',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'CTT / Customs Authority',
date: '10.02.2026',
title: { en: 'Ordering Packages from Outside EU', tr: 'AB Dışından Paket Siparişi', pt: 'Encomendas Fora da UE' },
content: {
en: `<p class='mb-4'>Ordering from Amazon UK, US, or AliExpress requires customs clearance (Desalfandegamento). Even for small amounts, you must pay VAT (23%) and a handling fee. If the value exceeds €150, import duties also apply.</p>
<p class='mb-4'>You will receive an SMS or email from CTT. You must log in to the CTT Customs Portal, upload the invoice, and pay the fees online. If you ignore this for a few weeks, the package will be returned to the sender or destroyed.</p>`,
tr: `<p class='mb-4'>Amazon İngiltere, ABD veya AliExpress'ten sipariş vermek gümrükleme (Desalfandegamento) gerektirir. Küçük tutarlar için bile KDV (%23) ve işlem ücreti ödemelisiniz. Değer 150€'yu aşarsa gümrük vergisi de uygulanır.</p>
<p class='mb-4'>CTT'den bir SMS veya e-posta alırsınız. CTT Gümrük Portalına giriş yapmalı, faturayı yüklemeli ve ücretleri çevrimiçi ödemelisiniz. Birkaç hafta ihmal ederseniz, paket göndericiye iade edilir veya imha edilir.</p>`,
pt: `<p class='mb-4'>Encomendar da Amazon UK, EUA ou AliExpress exige desalfandegamento. Mesmo para valores baixos, paga IVA (23%) e taxa de processamento. Se exceder 150€, aplicam-se taxas aduaneiras.</p>
<p class='mb-4'>Receberá um SMS ou e-mail dos CTT. Deve aceder ao Portal de Desalfandegamento, carregar a fatura e pagar online. Se ignorar por algumas semanas, a encomenda é devolvida ou destruída.</p>`
}
},
{
id: 'probation-period-work',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Labor Code / Código do Trabalho',
date: '20.01.2026',
title: { en: 'Probation Periods in Contracts', tr: 'Sözleşmelerde Deneme Süresi', pt: 'Período Experimental' },
content: {
en: `<p class='mb-4'>When you start a job, the first 90 days are typically the "Período Experimental" (Probation Period). During this time, either you or the employer can terminate the contract without cause and without compensation.</p>
<p class='mb-4'>For highly technical roles or management positions, this period can extend to 180 or even 240 days. Always check this clause in your contract, as your job security is not guaranteed until this period officially ends.</p>`,
tr: `<p class='mb-4'>İşe başladığınızda, ilk 90 gün genellikle "Período Experimental" (Deneme Süresi) olarak geçer. Bu süre zarfında, siz veya işveren sözleşmeyi sebep göstermeksizin ve tazminatsız feshedebilirsiniz.</p>
<p class='mb-4'>Yüksek teknik roller veya yöneticilik pozisyonları için bu süre 180 hatta 240 güne çıkabilir. Sözleşmenizdeki bu maddeyi mutlaka kontrol edin, çünkü bu süre resmen bitene kadar iş güvenceniz garanti değildir.</p>`,
pt: `<p class='mb-4'>Ao iniciar um emprego, os primeiros 90 dias são tipicamente o "Período Experimental". Durante este tempo, você ou o empregador podem terminar o contrato sem justa causa e sem compensação.</p>
<p class='mb-4'>Para cargos técnicos ou de gestão, este período pode ir até 180 ou 240 dias. Verifique sempre esta cláusula, pois a sua segurança no emprego não está garantida até este período terminar.</p>`
}
},
{
id: 'vat-iva-rates',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '12.02.2026',
title: { en: 'Understanding VAT (IVA) Rates', tr: 'KDV (IVA) Oranlarını Anlamak', pt: 'Taxas de IVA' },
content: {
en: `<p class='mb-4'>Portugal has three VAT rates. The standard rate is <strong>23%</strong> for most goods and services. An intermediate rate of <strong>13%</strong> applies to restaurant meals and wine. A reduced rate of <strong>6%</strong> applies to essential foods, medicine, and hotel stays.</p>
<p class='mb-4'>Prices displayed in shops always include IVA. However, if you are a freelancer invoicing foreign clients, you need to know exactly which rate applies to your specific service to avoid fines.</p>`,
tr: `<p class='mb-4'>Portekiz'de üç KDV oranı vardır. Standart oran çoğu mal ve hizmet için <strong>%23</strong>'tür. Restoran yemekleri ve şarap için <strong>%13</strong> ara oran uygulanır. Temel gıdalar, ilaçlar ve otel konaklamaları için <strong>%6</strong> indirimli oran geçerlidir.</p>
<p class='mb-4'>Mağazalardaki fiyatlara her zaman KDV dahildir. Ancak, yabancı müşterilere fatura kesen bir freelancersanız, cezalardan kaçınmak için hizmetinize hangi oranın uygulandığını tam olarak bilmelisiniz.</p>`,
pt: `<p class='mb-4'>Portugal tem três taxas de IVA. A taxa normal é <strong>23%</strong>. A intermédia de <strong>13%</strong> aplica-se a restauração e vinhos. A reduzida de <strong>6%</strong> aplica-se a bens essenciais, medicamentos e hotéis.</p>
<p class='mb-4'>Os preços nas lojas incluem sempre IVA. Contudo, se for freelancer a faturar a clientes estrangeiros, deve saber exatamente qual a taxa aplicável ao seu serviço para evitar multas.</p>`
}
},
{
id: 'furnished-vs-equipped',
stage: 'discover',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Community Insights',
date: '28.01.2026',
title: { en: 'Furnished vs. Equipped: The Difference', tr: 'Eşyalı ve Donanımlı Farkı', pt: 'Mobilado vs. Equipado' },
content: {
en: `<p class='mb-4'>When renting, terms matter. "Mobilado" means fully furnished (beds, sofa, tables). "Sem mobília" means empty. However, the most critical term is "Cozinha Equipada" (Equipped Kitchen).</p>
<p class='mb-4'>An apartment can be unfurnished but still have an equipped kitchen (fridge, stove, washing machine). If a listing says "Sem Equipamento," you will have to buy your own appliances, which is a significant upfront cost for a rental.</p>`,
tr: `<p class='mb-4'>Kiralarken terimler önemlidir. "Mobilado" tam eşyalı (yatak, kanepe, masa) demektir. "Sem mobília" boş demektir. Ancak en kritik terim "Cozinha Equipada"dır (Donanımlı Mutfak).</p>
<p class='mb-4'>Bir daire eşyasız olabilir ama yine de donanımlı bir mutfağa (buzdolabı, ocak, çamaşır makinesi) sahip olabilir. İlan "Sem Equipamento" diyorsa, kendi beyaz eşyalarınızı almanız gerekir ki bu kiralık ev için büyük bir maliyettir.</p>`,
pt: `<p class='mb-4'>Ao alugar, os termos importam. "Mobilado" tem camas, sofás, etc. "Sem mobília" está vazio. O termo crítico é "Cozinha Equipada".</p>
<p class='mb-4'>Um apartamento pode não ter mobília mas ter cozinha equipada (frigorífico, fogão). Se disser "Sem Equipamento", terá de comprar os seus eletrodomésticos, o que é um custo inicial significativo.</p>`
}
},
{
id: 'consumer-warranty-rights',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Consumer Law / Lei das Garantias',
date: '17.02.2026',
title: { en: '3-Year Warranty on Goods', tr: 'Ürünlerde 3 Yıl Garanti', pt: 'Garantia de 3 Anos' },
content: {
en: `<p class='mb-4'>In Portugal, the legal warranty period for new movable goods (electronics, furniture, appliances) is <strong>3 years</strong>. If a product breaks within this period due to a defect, the seller must repair, replace, or refund it.</p>
<p class='mb-4'>Always keep your receipt (fatura). For the first two years, the defect is presumed to have existed at delivery. In the third year, you may need to prove the defect wasn't caused by misuse.</p>`,
tr: `<p class='mb-4'>Portekiz'de yeni taşınır mallar (elektronik, mobilya, beyaz eşya) için yasal garanti süresi <strong>3 yıldır</strong>. Bir ürün bu süre içinde kusur nedeniyle bozulursa, satıcı tamir etmek, değiştirmek veya iade almak zorundadır.</p>
<p class='mb-4'>Faturanızı (fatura) daima saklayın. İlk iki yıl, kusurun teslimatta var olduğu varsayılır. Üçüncü yılda, kusurun kullanıcı hatasından kaynaklanmadığını kanıtlamanız gerekebilir.</p>`,
pt: `<p class='mb-4'>Em Portugal, a garantia legal para bens móveis novos é de <strong>3 anos</strong>. Se um produto avariar neste período por defeito, o vendedor deve reparar, substituir ou reembolsar.</p>
<p class='mb-4'>Guarde sempre a fatura. Nos primeiros dois anos, presume-se que o defeito já existia. No terceiro ano, poderá ter de provar que o defeito não foi causado por mau uso.</p>`
}
},
{
id: 'rental-deposit-return',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Community Insights',
date: '02.02.2026',
title: { en: 'Getting Your Security Deposit Back', tr: 'Depozito İadesini Almak', pt: 'Devolução da Caução' },
content: {
en: `<p class='mb-4'>Disputes over the security deposit (Caução) are common. Landlords often try to keep it for "painting" or minor wear and tear. Legally, the deposit covers damage, not normal usage.</p>
<p class='mb-4'>To protect yourself, take detailed photos of the apartment on the day you move in and the day you move out. If the landlord refuses to return the deposit without a valid invoice for repairs, you can file a complaint or threaten legal action.</p>`,
tr: `<p class='mb-4'>Güvenlik depozitosu (Caução) konusundaki anlaşmazlıklar yaygındır. Ev sahipleri genellikle bunu "boya" veya ufak aşınmalar için tutmaya çalışır. Yasal olarak depozito normal kullanımı değil, hasarı kapsar.</p>
<p class='mb-4'>Kendinizi korumak için, taşındığınız gün ve çıktığınız gün dairenin detaylı fotoğraflarını çekin. Ev sahibi geçerli bir tamir faturası olmadan depozitoyu iade etmeyi reddederse, şikayette bulunabilir veya yasal işlem başlatabilirsiniz.</p>`,
pt: `<p class='mb-4'>Disputas sobre a Caução são comuns. Senhorios tentam muitas vezes retê-la para "pinturas". Legalmente, a caução cobre danos, não o desgaste normal.</p>
<p class='mb-4'>Para se proteger, tire fotos detalhadas ao entrar e ao sair. Se o senhorio recusar devolver a caução sem fatura válida de reparação, pode apresentar queixa ou ameaçar com ação legal.</p>`
}
},

{
id: 'crypto-tax-rules',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: 'Crypto Taxes: The 1-Year Rule', tr: 'Kripto Vergileri: 1 Yıl Kuralı', pt: 'Impostos Cripto: Regra de 1 Ano' },
content: {
en: `<p class='mb-4'>Portugal is no longer a tax-free haven for short-term crypto trading. Gains from assets held for less than 365 days are taxed at a flat rate of 28%. However, if you hold the asset for more than a year, the profit remains tax-exempt.</p>

<p class='mb-4'>You must declare all crypto operations in your annual IRS statement (Annex G), even if no tax is due. Failure to report these holdings can trigger audits, as exchanges now share data with the Tax Authority.</p>`,
tr: `<p class='mb-4'>Portekiz artık kısa vadeli kripto ticareti için vergisiz bir cennet değil. 365 günden az elde tutulan varlıklardan elde edilen kazançlar %28 sabit oranda vergilendirilir. Ancak, varlığı bir yıldan fazla tutarsanız kâr vergiden muaftır.</p>
<p class='mb-4'>Vergi ödenmesi gerekmese bile tüm kripto işlemlerini yıllık IRS beyannamenizde (Ek G) bildirmelisiniz. Borsalar artık Vergi Dairesi ile veri paylaştığından, bunları bildirmemek denetimleri tetikleyebilir.</p>`,
pt: `<p class='mb-4'>Portugal já não é um paraíso fiscal para trading de curto prazo. Ganhos de ativos detidos por menos de 365 dias são tributados a 28%. Contudo, se detiver o ativo por mais de um ano, o lucro permanece isento.</p>
<p class='mb-4'>Deve declarar todas as operações cripto no IRS anual (Anexo G), mesmo sem imposto a pagar. Não reportar pode desencadear auditorias, pois as exchanges partilham dados com a Autoridade Tributária.</p>`
}
},
{
id: 'condominium-fees-rules',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Civil Code / Código Civil',
date: '17.02.2026',
title: { en: 'Condominium Fees (Condomínio)', tr: 'Apartman Aidatı (Condomínio)', pt: 'Quotas de Condomínio' },
content: {
en: `<p class='mb-4'>In Portugal, building maintenance fees (Condomínio) are typically the responsibility of the landlord, not the tenant, unless explicitly stated otherwise in the rental contract. Always check your lease for this clause.</p>
<p class='mb-4'>If you buy an apartment, request a "Declaration of No Debt" from the administrator before signing the deed. Without this, you could legally inherit the previous owner's unpaid debts for elevator repairs or building painting.</p>`,
tr: `<p class='mb-4'>Portekiz'de bina bakım ücretleri (Condomínio), kira sözleşmesinde açıkça aksi belirtilmedikçe genellikle kiracının değil ev sahibinin sorumluluğundadır. Sözleşmenizde bu maddeyi mutlaka kontrol edin.</p>
<p class='mb-4'>Daire satın alırsanız, tapuyu imzalamadan önce yöneticiden "Borcu Yoktur" yazısı isteyin. Bu olmadan, önceki sahibinin asansör tamiri veya bina boyası için ödenmemiş borçlarını yasal olarak devralabilirsiniz.</p>`,
pt: `<p class='mb-4'>Em Portugal, as quotas de condomínio são tipicamente responsabilidade do senhorio, não do inquilino, salvo indicação em contrário no contrato. Verifique sempre esta cláusula.</p>
<p class='mb-4'>Se comprar apartamento, peça uma "Declaração de Não Dívida" ao administrador antes da escritura. Sem isto, pode herdar legalmente as dívidas do proprietário anterior por obras ou manutenção.</p>`
}
},
{
id: 'tap-water-safety',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'EPAL / Water Authority',
date: '05.02.2026',
title: { en: 'Can You Drink Tap Water?', tr: 'Musluk Suyu İçilir mi?', pt: 'Pode Beber Água da Torneira?' },
content: {
en: `<p class='mb-4'>Yes, tap water in Portugal is safe to drink and strictly monitored (99% safety rating). However, in older buildings with ancient piping, the water might taste slightly metallic or chlorinated.</p>
<p class='mb-4'>In restaurants, asking for "Copo de água" (glass of tap water) is free or very cheap. If you ask for "Água", they will bring a bottled water which costs money. Locals often use filter jugs (like Brita) to improve the taste at home.</p>`,
tr: `<p class='mb-4'>Evet, Portekiz'de musluk suyu içilebilir ve sıkı bir şekilde izlenir (%99 güvenlik oranı). Ancak, eski boru tesisatına sahip eski binalarda suyun tadı biraz metalik veya klorlu olabilir.</p>
<p class='mb-4'>Restoranlarda "Copo de água" (bir bardak musluk suyu) istemek ücretsiz veya çok ucuzdur. "Água" derseniz ücretli şişe su getirirler. Yerel halk evde tadı iyileştirmek için genellikle filtreli sürahiler kullanır.</p>`,
pt: `<p class='mb-4'>Sim, a água da torneira em Portugal é segura e monitorizada (99% de segurança). Porém, em prédios antigos com canalização velha, a água pode saber a metal ou cloro.</p>
<p class='mb-4'>Nos restaurantes, pedir um "Copo de água" é grátis ou barato. Se pedir "Água", trazem garrafa paga. Os locais usam frequentemente jarros com filtro para melhorar o sabor em casa.</p>`
}
},
{
id: 'siga-app-appointments',
stage: 'apply',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'AMA / Digital Agency',
date: '17.02.2026',
title: { en: 'The SIGA App: Skip the Line', tr: 'SIGA Uygulaması: Sırayı Atlayın', pt: 'A App SIGA: Evite Filas' },
content: {
en: `<p class='mb-4'>The <strong>SIGA</strong> app is the secret weapon for navigating Portuguese bureaucracy. It allows you to book appointments for Social Security, IRN (Registry), and Tax offices directly from your phone.</p>
<p class='mb-4'>More importantly, for some services, you can pull a "digital ticket" before you arrive at the location. This means you can wait in a café instead of standing in line, receiving a notification when your number is about to be called.</p>`,
tr: `<p class='mb-4'><strong>SIGA</strong> uygulaması, Portekiz bürokrasisinde gezinmek için gizli silahtır. Sosyal Güvenlik, IRN (Sicil) ve Vergi daireleri için doğrudan telefonunuzdan randevu almanızı sağlar.</p>
<p class='mb-4'>Daha da önemlisi, bazı hizmetler için mekana varmadan önce "dijital numara" alabilirsiniz. Bu, sırada beklemek yerine bir kafede oturup sıranız gelmek üzereyken bildirim alabileceğiniz anlamına gelir.</p>`,
pt: `<p class='mb-4'>A app <strong>SIGA</strong> é a arma secreta para navegar na burocracia. Permite agendar atendimentos na Segurança Social, IRN e Finanças diretamente do telemóvel.</p>
<p class='mb-4'>Mais importante, para alguns serviços, pode tirar uma "senha digital" antes de chegar. Isto significa que pode esperar num café em vez de na fila, recebendo um aviso quando a sua vez chegar.</p>`
}
},
{
id: 'cp-train-discounts',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'CP - Comboios de Portugal',
date: '12.02.2026',
title: { en: 'Train Travel Discounts (Promo Tickets)', tr: 'Tren İndirimleri (Promo Biletler)', pt: 'Descontos em Comboios (Bilhetes Promo)' },
content: {
en: `<p class='mb-4'>If you book Intercidades or Alfa Pendular trains at least 5 to 8 days in advance, you can get "Promo" tickets with discounts of up to 65%. A trip from Lisbon to Porto can cost as little as €10 instead of €30.</p>
<p class='mb-4'>These tickets are non-refundable and tied to a specific time, but you can change the date once. Always book via the CP App or website, as ticket counters often sell full-price fares unless you specifically ask for promos.</p>`,
tr: `<p class='mb-4'>Intercidades veya Alfa Pendular trenlerini en az 5 ila 8 gün önceden rezerve ederseniz, %65'e varan indirimlerle "Promo" biletler alabilirsiniz. Lizbon-Porto arası 30€ yerine 10€ kadar düşebilir.</p>
<p class='mb-4'>Bu biletler iade edilemez ve belirli bir saate bağlıdır, ancak tarihi bir kez değiştirebilirsiniz. Gişeler genellikle tam fiyatlı bilet sattığı için, promosyon sormadıkça her zaman CP Uygulaması veya web sitesinden alın.</p>`,
pt: `<p class='mb-4'>Se reservar Intercidades ou Alfa Pendular com 5 a 8 dias de antecedência, consegue bilhetes "Promo" com descontos até 65%. Uma viagem Lisboa-Porto pode custar 10€ em vez de 30€.</p>
<p class='mb-4'>Estes bilhetes não são reembolsáveis, mas pode alterar a data uma vez. Reserve sempre via App CP ou site, pois as bilheteiras vendem preço total a menos que peça promoções.</p>`
}
},
{
id: 'sick-leave-self-declaration',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'SNS 24 Official',
date: '20.01.2026',
title: { en: 'Short Sick Leave (Self-Declaration)', tr: 'Kısa Süreli Rapor (Öz Beyan)', pt: 'Baixa de Curta Duração (Autodeclaração)' },
content: {
en: `<p class='mb-4'>For illnesses lasting up to 3 days, you no longer need to see a doctor. You can issue a "Self-Declaration of Illness" (Autodeclaração de Doença) directly through the SNS 24 app or website.</p>
<p class='mb-4'>You can use this mechanism twice a year. It justifies your absence from work but does not entitle you to sick pay from Social Security for those 3 days. It is strictly to protect you from disciplinary action for missing work.</p>`,
tr: `<p class='mb-4'>3 güne kadar süren hastalıklar için artık doktora görünmenize gerek yok. SNS 24 uygulaması veya web sitesi üzerinden doğrudan "Hastalık Öz Beyanı" (Autodeclaração de Doença) düzenleyebilirsiniz.</p>
<p class='mb-4'>Bu mekanizmayı yılda iki kez kullanabilirsiniz. İşe devamsızlığınızı haklı çıkarır ancak bu 3 gün için Sosyal Güvenlik'ten hastalık ödeneği almanızı sağlamaz. Sadece işe gelmediğiniz için disiplin cezası almanızı önler.</p>`,
pt: `<p class='mb-4'>Para doenças até 3 dias, já não precisa de ir ao médico. Pode emitir uma "Autodeclaração de Doença" diretamente através da app ou site do SNS 24.</p>
<p class='mb-4'>Pode usar este mecanismo duas vezes por ano. Justifica a falta ao trabalho mas não dá direito a subsídio da Segurança Social nesses 3 dias. Serve para o proteger de processos disciplinares.</p>`
}
},
{
id: 'registering-foreign-marriage',
stage: 'apply',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'IRN / Civil Registry',
date: '17.02.2026',
title: { en: 'Registering Your Marriage', tr: 'Evliliğinizi Kaydettirmek', pt: 'Averbar o Casamento' },
content: {
en: `<p class='mb-4'>If you acquire Portuguese residency or citizenship, you must register your foreign marriage with the Civil Registry (IRN). This process, called "Averbamento," ensures your civil status is updated in the Portuguese system.</p>
<p class='mb-4'>It is mandatory if you plan to apply for a spouse's residency or citizenship later. You will need your original marriage certificate, apostilled and translated, and the process can take several months to finalize.</p>`,
tr: `<p class='mb-4'>Portekiz oturumu veya vatandaşlığı alırsanız, yabancı evliliğinizi Nüfus Müdürlüğü'ne (IRN) kaydettirmelisiniz. "Averbamento" adı verilen bu süreç, medeni durumunuzun Portekiz sisteminde güncellenmesini sağlar.</p>
<p class='mb-4'>Daha sonra eşinizin oturumu veya vatandaşlığı için başvurmayı planlıyorsanız bu zorunludur. Apostilli ve tercüme edilmiş orijinal evlilik cüzdanınıza ihtiyacınız olacak ve sürecin tamamlanması birkaç ay sürebilir.</p>`,
pt: `<p class='mb-4'>Se adquirir residência ou nacionalidade, deve registar o casamento estrangeiro no Registo Civil (IRN). Este processo, chamado "Averbamento", atualiza o seu estado civil no sistema.</p>
<p class='mb-4'>É obrigatório se planear pedir residência ou nacionalidade para o cônjuge. Precisará da certidão de casamento original, apostilada e traduzida. O processo pode demorar meses.</p>`
}
},
{
id: 'atm-withdrawal-limits',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Bank of Portugal',
date: '10.02.2026',
title: { en: 'ATM Withdrawal Limits', tr: 'ATM Para Çekme Limitleri', pt: 'Limites de Levantamento MB' },
content: {
en: `<p class='mb-4'>Security rules limit ATM withdrawals in Portugal to €200 per transaction and a total of €400 per day per card. If you need more cash, you must go to a bank counter with your ID.</p>
<p class='mb-4'>This limit applies to all Portuguese cards. Foreign cards might allow higher withdrawals depending on your home bank, but the machine itself may still enforce the €200 per transaction cap.</p>`,
tr: `<p class='mb-4'>Güvenlik kuralları, Portekiz'de ATM'den para çekmeyi işlem başına 200€ ve kart başına günlük toplam 400€ ile sınırlar. Daha fazla nakde ihtiyacınız varsa, kimliğinizle banka gişesine gitmelisiniz.</p>
<p class='mb-4'>Bu limit tüm Portekiz kartları için geçerlidir. Yabancı kartlar kendi bankanıza bağlı olarak daha yüksek çekime izin verebilir, ancak makine yine de işlem başına 200€ sınırını uygulayabilir.</p>`,
pt: `<p class='mb-4'>Regras de segurança limitam os levantamentos a 200€ por transação e um total de 400€ por dia por cartão. Se precisar de mais dinheiro, deve ir ao balcão do banco com o CC.</p>
<p class='mb-4'>Este limite aplica-se a cartões portugueses. Cartões estrangeiros podem permitir mais dependendo do banco de origem, mas a máquina pode impor o limite de 200€ por operação.</p>`
}
},
{
id: 'laundry-drying-winter',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Community Insights',
date: '03.02.2026',
title: { en: 'Laundry & Drying in Winter', tr: 'Kışın Çamaşır Kurutma', pt: 'Lavar e Secar Roupa no Inverno' },
content: {
en: `<p class='mb-4'>Most Portuguese apartments have washing machines but rarely tumble dryers. In the humid winter, clothes can take days to dry on racks, often developing a musty smell.</p>
<p class='mb-4'>Self-service laundromats (Lavandarias Self-Service) are very popular for their large industrial dryers. A 15-minute drying cycle costs around €2-€3 and is the most efficient way to handle bedsheets and towels during the rainy season.</p>`,
tr: `<p class='mb-4'>Çoğu Portekiz dairesinde çamaşır makinesi vardır ancak kurutma makinesi nadirdir. Nemli kış aylarında, çamaşırların askıda kuruması günler sürebilir ve genellikle küf kokusu oluşur.</p>
<p class='mb-4'>Self-servis çamaşırhaneler (Lavandarias Self-Service), büyük sanayi tipi kurutucuları nedeniyle çok popülerdir. 15 dakikalık bir kurutma döngüsü yaklaşık 2€-3€ tutar ve yağmurlu mevsimde çarşaf ve havluları kurutmanın en verimli yoludur.</p>`,
pt: `<p class='mb-4'>A maioria dos apartamentos tem máquina de lavar mas raramente de secar. No inverno húmido, a roupa demora dias a secar nos estendais, ganhando cheiro a mofo.</p>
<p class='mb-4'>As Lavandarias Self-Service são populares pelas máquinas de secar industriais. Um ciclo de 15 minutos custa cerca de 2€-3€ e é a forma mais eficiente de tratar lençóis e toalhas na época das chuvas.</p>`
}
},
{
id: 'dinner-times-culture',
stage: 'discover',
category: { en: 'Language & Culture', tr: 'Dil & Kültür', pt: 'Língua e Cultura' },
source: 'Community Insights',
date: '14.02.2026',
title: { en: 'Dining Times in Portugal', tr: 'Portekiz\'de Yemek Saatleri', pt: 'Horários das Refeições' },
content: {
en: `<p class='mb-4'>Portuguese dining schedules are later than in Northern Europe. Lunch is strictly between 13:00 and 14:30. Dinner restaurants often don't open until 19:30, and locals typically arrive around 20:30 or 21:00.</p>
<p class='mb-4'>Trying to find a full kitchen open for dinner at 18:00 is difficult outside of tourist traps. If you are hungry early, look for a "Snack Bar" serving toasts or soup rather than a formal "Restaurante".</p>`,
tr: `<p class='mb-4'>Portekiz yemek saatleri Kuzey Avrupa'dan daha geçtir. Öğle yemeği kesinlikle 13:00 ile 14:30 arasındadır. Akşam yemeği restoranları genellikle 19:30'dan önce açılmaz ve yerel halk 20:30 veya 21:00 gibi gelir.</p>
<p class='mb-4'>Saat 18:00'de akşam yemeği için açık bir mutfak bulmak, turistik yerler dışında zordur. Erken acıkırsanız, resmi bir "Restaurante" yerine tost veya çorba servisi yapan bir "Snack Bar" arayın.</p>`,
pt: `<p class='mb-4'>Os horários das refeições são mais tardios que no Norte da Europa. O almoço é entre as 13:00 e as 14:30. Os restaurantes ao jantar abrem às 19:30, e os locais chegam por volta das 20:30 ou 21:00.</p>
<p class='mb-4'>Tentar jantar às 18:00 é difícil fora das zonas turísticas. Se tiver fome cedo, procure um "Snack Bar" que sirva tostas ou sopa em vez de um "Restaurante" formal.</p>`
}
},

{
id: 'mold-humidity-housing',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Community Insights',
date: '05.02.2026',
title: { en: 'Dealing with Mold & Cold', tr: 'Küf ve Soğukla Mücadele', pt: 'Lidar com Bolor e Frio' },
content: {
en: `<p class='mb-4'>Portuguese houses are notoriously cold in winter due to poor insulation and lack of central heating. High humidity often leads to mold (bolor) on walls and clothes. This is a shock for many expats coming from colder but better-insulated countries.</p>
<p class='mb-4'>A high-quality dehumidifier (desumidificador) is an essential investment, not a luxury. Electric oil heaters are the most common heating solution, but be careful with electricity bills. Ventilate your house daily, even in winter.</p>`,
tr: `<p class='mb-4'>Portekiz evleri, zayıf yalıtım ve merkezi ısıtma eksikliği nedeniyle kışın meşhur derecede soğuktur. Yüksek nem, genellikle duvarlarda ve giysilerde küfe (bolor) yol açar. Bu, daha soğuk ama iyi yalıtımlı ülkelerden gelenler için bir şoktur.</p>
<p class='mb-4'>Kaliteli bir nem alma cihazı (desumidificador) lüks değil, temel bir yatırımdır. Elektrikli yağlı radyatörler en yaygın ısınma çözümüdür, ancak elektrik faturasına dikkat edin. Kışın bile evinizi her gün havalandırın.</p>`,
pt: `<p class='mb-4'>As casas portuguesas são notoriamente frias no inverno devido ao mau isolamento. A humidade elevada leva frequentemente a bolor nas paredes e roupa. É um choque para quem vem de países mais frios mas bem isolados.</p>
<p class='mb-4'>Um desumidificador de qualidade é um investimento essencial. Aquecedores a óleo são a solução mais comum, mas cuidado com a conta da luz. Ventile a casa diariamente, mesmo no inverno.</p>`
}
},
{
id: 'recibos-verdes-vs-contract',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Authority for Working Conditions (ACT)',
date: '12.02.2026',
title: { en: 'Recibos Verdes vs. Employment Contract', tr: 'Recibos Verdes ve İş Sözleşmesi', pt: 'Recibos Verdes vs. Contrato de Trabalho' },
content: {
en: `<p class='mb-4'>Workers in Portugal fall into two main categories: "Trabalhador por Conta de Outrem" (Employee with a contract) and "Trabalhador Independente" (Freelancer issuing Green Receipts/Recibos Verdes).</p>
<p class='mb-4'>Employees get 14 salaries and paid vacation. Freelancers earn gross income and must handle their own Social Security and VAT payments. Be wary of "False Green Receipts," where companies treat you like an employee but force you to invoice them to avoid taxes.</p>`,
tr: `<p class='mb-4'>Portekiz'deki çalışanlar iki ana kategoriye ayrılır: "Trabalhador por Conta de Outrem" (Sözleşmeli çalışan) ve "Trabalhador Independente" (Yeşil Makbuz/Recibos Verdes kesen serbest çalışan).</p>
<p class='mb-4'>Çalışanlar 14 maaş ve ücretli izin alır. Freelancerlar brüt kazanır ve kendi Sosyal Güvenlik/KDV ödemelerini yönetir. Şirketlerin sizi çalışan gibi yönetip vergi ödememek için fatura kestirdiği "Sahte Yeşil Makbuz"lara dikkat edin.</p>`,
pt: `<p class='mb-4'>Os trabalhadores dividem-se em: "Trabalhador por Conta de Outrem" (com contrato) e "Trabalhador Independente" (Recibos Verdes). Os empregados recebem 14 salários e férias pagas.</p>
<p class='mb-4'>Os independentes gerem a sua própria Segurança Social e IVA. Cuidado com os "Falsos Recibos Verdes", onde empresas o tratam como empregado mas exigem faturas para evitar impostos.</p>`
}
},
{
id: 'health-user-fees',
stage: 'settle',
category: { en: 'Healthcare', tr: 'Sağlık', pt: 'Saúde' },
source: 'SNS Official',
date: '17.02.2026',
title: { en: 'Are Public Hospitals Free?', tr: 'Devlet Hastaneleri Ücretsiz mi?', pt: 'Os Hospitais Públicos são Gratuitos?' },
content: {
en: `<p class='mb-4'>Since 2022, most "Taxas Moderadoras" (User Fees) in the public health system (SNS) have been abolished. Consultations at health centers and most hospital treatments are now free for residents.</p>
<p class='mb-4'>However, fees still apply if you go to the hospital emergency room without a referral from SNS 24 or your family doctor (unless you are admitted). Always call 808 24 24 24 before rushing to the ER to avoid these costs.</p>`,
tr: `<p class='mb-4'>2022'den bu yana, kamu sağlık sistemindeki (SNS) çoğu "Taxas Moderadoras" (Kullanıcı Ücreti) kaldırıldı. Sağlık ocaklarındaki muayeneler ve çoğu hastane tedavisi artık sakinler için ücretsizdir.</p>
<p class='mb-4'>Ancak, SNS 24'ten veya aile hekiminden sevk almadan acil servise giderseniz (yatış yapılmadığı sürece) ücret ödersiniz. Bu masraflardan kaçınmak için acile gitmeden önce mutlaka 808 24 24 24'ü arayın.</p>`,
pt: `<p class='mb-4'>Desde 2022, a maioria das "Taxas Moderadoras" no SNS foi abolida. Consultas nos centros de saúde e tratamentos hospitalares são agora gratuitos para residentes.</p>
<p class='mb-4'>Contudo, aplicam-se taxas se for à urgência sem referenciação do SNS 24 ou médico de família (exceto se for internado). Ligue sempre 808 24 24 24 antes de ir à urgência.</p>`
}
},
{
id: 'supermarket-brands',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Consumer Defense (DECO)',
date: '03.02.2026',
title: { en: 'Supermarket Wars: Where to Shop', tr: 'Süpermarket Savaşları: Nereden Almalı', pt: 'Guerra dos Supermercados' },
content: {
en: `<p class='mb-4'><strong>Continente</strong> and <strong>Pingo Doce</strong> are the market leaders, offering a mix of brands and good loyalty card discounts. <strong>Mercadona</strong> (Spanish) has gained massive popularity for its high-quality own-brand products.</p>
<p class='mb-4'>For budget shopping, <strong>Lidl</strong> and <strong>Aldi</strong> are the go-to choices. <strong>Auchan</strong> usually has the widest variety of international products. Always get the loyalty app for the store you visit most, as coupons are personalized.</p>`,
tr: `<p class='mb-4'><strong>Continente</strong> ve <strong>Pingo Doce</strong>, marka çeşitliliği ve sadakat kartı indirimleriyle pazar lideridir. <strong>Mercadona</strong> (İspanyol), yüksek kaliteli kendi markalı ürünleriyle büyük popülerlik kazanmıştır.</p>
<p class='mb-4'>Bütçe dostu alışveriş için <strong>Lidl</strong> ve <strong>Aldi</strong> tercih edilir. <strong>Auchan</strong> genellikle en geniş uluslararası ürün yelpazesine sahiptir. Kuponlar kişiye özel olduğu için en çok gittiğiniz marketin uygulamasını mutlaka indirin.</p>`,
pt: `<p class='mb-4'><strong>Continente</strong> e <strong>Pingo Doce</strong> lideram o mercado, com boas marcas e descontos em cartão. A <strong>Mercadona</strong> ganhou enorme popularidade pelos seus produtos de marca própria.</p>
<p class='mb-4'>Para poupar, <strong>Lidl</strong> e <strong>Aldi</strong> são as escolhas. O <strong>Auchan</strong> tem a maior variedade de produtos internacionais. Instale sempre a app da loja que mais visita para cupões personalizados.</p>`
}
},
{
id: 'bank-guarantee-rent',
stage: 'apply',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Bank of Portugal',
date: '20.01.2026',
title: { en: 'Bank Guarantee Instead of Guarantor', tr: 'Kefil Yerine Banka Teminatı', pt: 'Garantia Bancária vs. Fiador' },
content: {
en: `<p class='mb-4'>If you cannot find a guarantor (Fiador) and don't want to pay 12 months of rent upfront, you can propose a "Garantia Bancária". This involves locking a specific amount (e.g., 6 months' rent) in a Portuguese bank account.</p>
<p class='mb-4'>The bank issues a document guaranteeing payment to the landlord if you default. It costs a setup fee and a quarterly maintenance fee, but it provides security to the landlord without risking your cash being handed over directly.</p>`,
tr: `<p class='mb-4'>Kefil (Fiador) bulamazsanız ve 12 aylık kirayı peşin ödemek istemezseniz, "Garantia Bancária" önerebilirsiniz. Bu, belirli bir tutarın (örn. 6 aylık kira) bir Portekiz banka hesabında bloke edilmesini içerir.</p>
<p class='mb-4'>Banka, ödeme yapmamanız durumunda ev sahibine ödemeyi garanti eden bir belge düzenler. Kurulum ve üç aylık bakım ücreti vardır, ancak paranızı doğrudan teslim etme riski olmadan ev sahibine güvence sağlar.</p>`,
pt: `<p class='mb-4'>Se não tiver Fiador e não quiser pagar 12 meses adiantados, proponha uma "Garantia Bancária". Isto envolve bloquear um valor (ex: 6 meses de renda) numa conta portuguesa.</p>
<p class='mb-4'>O banco emite um documento garantindo o pagamento ao senhorio em caso de incumprimento. Tem custos de emissão e manutenção, mas dá segurança ao senhorio sem entregar dinheiro diretamente.</p>`
}
},
{
id: 'roundabout-rules',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Road Code / Código da Estrada',
date: '10.02.2026',
title: { en: 'How to Drive on Roundabouts', tr: 'Döner Kavşak Kuralları', pt: 'Como Circular nas Rotundas' },
content: {
en: `<p class='mb-4'>Portugal has strict rules for roundabouts. You must only use the right-hand (outside) lane if you are taking the <strong>very next exit</strong>. For all other exits, you must enter the inner lanes.</p>
<p class='mb-4'>Police frequently fine drivers who stay in the outside lane to go straight or left. You must signal right before you exit. If you are in the inner lane, you must yield to traffic in the outer lane before moving over to exit.</p>`,
tr: `<p class='mb-4'>Portekiz'de döner kavşak kuralları katıdır. Sağ (dış) şeridi yalnızca <strong>hemen sonraki çıkıştan</strong> çıkacaksanız kullanmalısınız. Diğer tüm çıkışlar için iç şeritlere girmelisiniz.</p>
<p class='mb-4'>Polis, düz gitmek veya sola dönmek için dış şeritte kalan sürücülere sıkça ceza keser. Çıkmadan hemen önce sağ sinyal vermelisiniz. İç şeritteyseniz, çıkışa geçmeden önce dış şeritteki trafiğe yol vermelisiniz.</p>`,
pt: `<p class='mb-4'>Portugal tem regras estritas para rotundas. Só deve usar a via da direita (fora) se for sair na <strong>saída imediata</strong>. Para as outras saídas, deve usar as vias interiores.</p>
<p class='mb-4'>A polícia multa quem se mantém na via de fora para seguir em frente. Deve sinalizar à direita antes de sair. Se estiver na via interior, deve ceder passagem a quem está fora antes de mudar de via.</p>`
}
},
{
id: 'digital-complaint-book',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Consumer Directorate',
date: '17.02.2026',
title: { en: 'Online Complaint Book', tr: 'Çevrimiçi Şikayet Defteri', pt: 'Livro de Reclamações Eletrónico' },
content: {
en: `<p class='mb-4'>You don't need to be in the store to file a formal complaint. The <a href='https://www.livroreclamacoes.pt' class='text-orange-500 underline font-bold'>livroreclamacoes.pt</a> platform allows you to submit complaints digitally against any registered business, including utility providers.</p>
<p class='mb-4'>The business has 15 working days to respond. If they don't, or if the response is unsatisfactory, the regulator intervenes. It is often more effective than the physical book for complex issues like internet contracts.</p>`,
tr: `<p class='mb-4'>Resmi şikayette bulunmak için mağazada olmanıza gerek yok. <a href='https://www.livroreclamacoes.pt' class='text-orange-500 underline font-bold'>livroreclamacoes.pt</a> platformu, hizmet sağlayıcılar dahil kayıtlı tüm işletmelere karşı dijital olarak şikayet göndermenizi sağlar.</p>
<p class='mb-4'>İşletmenin yanıt vermek için 15 iş günü vardır. Vermezlerse veya yanıt yetersizse düzenleyici kurum müdahale eder. İnternet sözleşmeleri gibi karmaşık konularda fiziksel defterden daha etkilidir.</p>`,
pt: `<p class='mb-4'>Não precisa de estar na loja para reclamar. A plataforma <a href='https://www.livroreclamacoes.pt' class='text-orange-500 underline font-bold'>livroreclamacoes.pt</a> permite submeter queixas digitais contra qualquer empresa registada.</p>
<p class='mb-4'>A empresa tem 15 dias úteis para responder. Se não o fizer, o regulador intervém. É muitas vezes mais eficaz que o livro físico para questões complexas como contratos de internet.</p>`
}
},
{
id: 'digital-nomad-tax-rate',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: '20% Flat Tax for Digital Nomads', tr: 'Dijital Göçebeler İçin %20 Sabit Vergi', pt: 'Taxa Fixa de 20% para Nómadas' },
content: {
en: `<p class='mb-4'>Under the new tax rules, D8 visa holders may qualify for a special 20% flat tax rate on their professional income derived from "high value-added activities." This is separate from the general progressive IRS rates that go up to 48%.</p>
<p class='mb-4'>To qualify, your profession must be listed in the official government ordinance (Portaria). Unlike the old NHR, this does not automatically exempt foreign passive income, so consult a tax accountant to optimize your setup.</p>`,
tr: `<p class='mb-4'>Yeni vergi kuralları kapsamında, D8 vizesi sahipleri, "yüksek katma değerli faaliyetlerden" elde edilen mesleki gelirlerinde %20'lik özel sabit vergi oranına hak kazanabilirler. Bu, %48'e varan genel artan oranlı IRS'den ayrıdır.</p>
<p class='mb-4'>Hak kazanmak için mesleğinizin resmi hükümet listesinde (Portaria) yer alması gerekir. Eski NHR'nin aksine, bu durum yabancı pasif geliri otomatik olarak muaf tutmaz, bu yüzden kurulumunuzu optimize etmek için bir muhasebeciye danışın.</p>`,
pt: `<p class='mb-4'>Sob as novas regras, titulares do visto D8 podem qualificar-se para uma taxa fixa de 20% sobre rendimentos de "atividades de alto valor acrescentado". Isto é separado das taxas progressivas de IRS.</p>
<p class='mb-4'>Para se qualificar, a sua profissão deve constar na Portaria oficial. Ao contrário do antigo RNH, isto não isenta automaticamente rendimentos passivos estrangeiros, por isso consulte um contabilista.</p>`
}
},
{
id: 'automatic-renewal-irn',
stage: 'settle',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'IRN / AIMA Official',
date: '17.02.2026',
title: { en: 'Automatic Renewal of Residency', tr: 'Oturum İzninin Otomatik Yenilenmesi', pt: 'Renovação Automática de Residência' },
content: {
en: `<p class='mb-4'>To reduce backlogs, Portugal has implemented an "Automatic Renewal" system via the IRN website. If your biometric data is up to date, you can renew your card online without visiting an AIMA office.</p>
<p class='mb-4'>You simply log in, pay the fee (approx. €30), and the new card is mailed to your home. Check the IRN portal 30 days before your card expires to see if you are eligible for this streamlined process.</p>`,
tr: `<p class='mb-4'>Yığılmaları azaltmak için Portekiz, IRN web sitesi üzerinden "Otomatik Yenileme" sistemini hayata geçirdi. Biyometrik verileriniz güncelse, AIMA ofisine gitmeden kartınızı çevrimiçi yenileyebilirsiniz.</p>
<p class='mb-4'>Sadece giriş yapın, ücreti ödeyin (yaklaşık 30€) ve yeni kart evinize postalansın. Bu hızlı sürece uygun olup olmadığınızı görmek için kartınızın süresi dolmadan 30 gün önce IRN portalını kontrol edin.</p>`,
pt: `<p class='mb-4'>Para reduzir atrasos, Portugal implementou a "Renovação Automática" via site do IRN. Se os dados biométricos estiverem atuais, pode renovar online sem visitar a AIMA.</p>
<p class='mb-4'>Basta fazer login, pagar a taxa (aprox. 30€) e o novo cartão é enviado para casa. Verifique o portal do IRN 30 dias antes de o cartão expirar para ver se é elegível.</p>`
}
},



{
id: 'cpcv-property-buying',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Real Estate Law',
date: '17.02.2026',
title: { en: 'The Promissory Contract (CPCV)', tr: 'Satış Vaadi Sözleşmesi (CPCV)', pt: 'O Contrato Promessa (CPCV)' },
content: {
en: `<p class='mb-4'>Before the final deed (Escritura), buyers and sellers sign a CPCV. You typically pay a deposit (Sinal) of 10% to 20%. This contract is legally binding and protects both parties before the bank finalizes the mortgage.</p>

<p class='mb-4'>If you back out, you lose your deposit. If the seller backs out, they must pay you back <strong>double</strong> the deposit amount. Never sign a CPCV without a lawyer reviewing the property's legal history first.</p>`,
tr: `<p class='mb-4'>Nihai tapu devrinden (Escritura) önce, alıcı ve satıcı bir CPCV imzalar. Genellikle %10 ila %20 oranında bir kapora (Sinal) ödersiniz. Bu sözleşme yasal olarak bağlayıcıdır ve banka krediyi onaylamadan önce her iki tarafı da korur.</p>
<p class='mb-4'>Siz vazgeçerseniz, kaporayı kaybedersiniz. Satıcı vazgeçerse, size kaporanın <strong>iki katını</strong> geri ödemek zorundadır. Mülkün yasal geçmişini bir avukata inceletmeden asla CPCV imzalamayın.</p>`,
pt: `<p class='mb-4'>Antes da Escritura, compradores e vendedores assinam um CPCV. Paga-se geralmente um Sinal de 10% a 20%. Este contrato é vinculativo e protege ambas as partes antes de o banco finalizar o crédito.</p>
<p class='mb-4'>Se desistir, perde o sinal. Se o vendedor desistir, tem de lhe pagar o <strong>dobro</strong> do sinal. Nunca assine um CPCV sem um advogado rever primeiro o histórico legal da propriedade.</p>`
}
},
{
id: 'imi-property-tax',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: 'Annual Property Tax (IMI)', tr: 'Yıllık Emlak Vergisi (IMI)', pt: 'Imposto Municipal sobre Imóveis (IMI)' },
content: {
en: `<p class='mb-4'>If you own property, you must pay IMI annually. The rate varies by municipality (usually between 0.3% and 0.45% of the tax asset value). Payments are due in May, but larger amounts can be split into installments in May, August, and November.</p>
<p class='mb-4'>New homeowners can often claim an IMI exemption for the first 3 years if the property is their permanent residence and the value is below a certain threshold (currently around €125,000).</p>`,
tr: `<p class='mb-4'>Mülk sahibiyseniz, yıllık IMI ödemelisiniz. Oran belediyeye göre değişir (genellikle vergi değerinin %0,3'ü ile %0,45'i arası). Ödemeler Mayıs ayındadır, ancak büyük tutarlar Mayıs, Ağustos ve Kasım aylarında taksitlendirilebilir.</p>
<p class='mb-4'>Yeni ev sahipleri, mülk daimi ikametgahlarıysa ve değeri belirli bir eşiğin (şu anda yaklaşık 125.000€) altındaysa, genellikle ilk 3 yıl için IMI muafiyeti talep edebilirler.</p>`,
pt: `<p class='mb-4'>Se possui imóvel, deve pagar IMI anualmente. A taxa varia por município (geralmente 0,3% a 0,45% do valor patrimonial). O pagamento é em maio, mas valores maiores podem ser divididos em maio, agosto e novembro.</p>
<p class='mb-4'>Novos proprietários podem pedir isenção de IMI nos primeiros 3 anos se for habitação própria permanente e o valor for inferior a um certo limite (atualmente cerca de 125.000€).</p>`
}
},
{
id: 'electricity-tariffs-bi-horario',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'ERSE',
date: '17.02.2026',
title: { en: 'Simple vs. Bi-Hourly Electricity', tr: 'Tek Zamanlı ve Çift Zamanlı Elektrik', pt: 'Tarifa Simples vs. Bi-Horária' },
content: {
en: `<p class='mb-4'>When setting up electricity, you can choose between a "Simples" tariff (same price all day) or "Bi-horário" (cheaper at night and weekends, more expensive during the day). Bi-horário is ideal if you can run washing machines or heaters after 22:00.</p>
<p class='mb-4'>Check your lifestyle. If you work from home and use AC during the day, the Simple tariff is likely cheaper. You can switch between these tariffs for free by contacting your provider.</p>`,
tr: `<p class='mb-4'>Elektrik bağlatırken "Simples" (tüm gün aynı fiyat) veya "Bi-horário" (gece ve hafta sonu ucuz, gündüz pahalı) tarifesi arasında seçim yapabilirsiniz. Çamaşır makinesi veya ısıtıcıları 22:00'den sonra çalıştırabiliyorsanız Bi-horário idealdir.</p>
<p class='mb-4'>Yaşam tarzınızı kontrol edin. Evden çalışıyorsanız ve gündüz klima kullanıyorsanız, Tek Zamanlı tarife muhtemelen daha ucuzdur. Sağlayıcınızla görüşerek bu tarifeler arasında ücretsiz geçiş yapabilirsiniz.</p>`,
pt: `<p class='mb-4'>Ao contratar eletricidade, pode escolher entre tarifa "Simples" (mesmo preço todo o dia) ou "Bi-horária" (mais barato à noite/fim de semana). A Bi-horária é ideal se usar máquinas ou aquecedores após as 22:00.</p>
<p class='mb-4'>Verifique o seu estilo de vida. Se trabalha em casa e usa AC de dia, a tarifa Simples é provavelmente mais barata. Pode alternar entre tarifas gratuitamente contactando o fornecedor.</p>`
}
},
{
id: 'tvde-uber-bolt-rules',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Mobility Institute / IMT',
date: '05.02.2026',
title: { en: 'Ride-Hailing (TVDE) Rules', tr: 'Araç Çağırma (TVDE) Kuralları', pt: 'Regras de TVDE (Uber/Bolt)' },
content: {
en: `<p class='mb-4'>Uber and Bolt are legally classified as TVDE. Unlike traditional taxis, they cannot pick up passengers at designated taxi ranks or be hailed on the street; all rides must be booked via the app.</p>
<p class='mb-4'>Traveling with small children? Most TVDE cars do not carry child seats. You must request a "Family" or "Kids" option specifically, or bring your own portable seat, otherwise the driver can legally refuse the ride.</p>`,
tr: `<p class='mb-4'>Uber ve Bolt yasal olarak TVDE sınıfındadır. Geleneksel taksilerin aksine, taksi duraklarından yolcu alamazlar veya sokaktan çevrilemezler; tüm sürüşler uygulama üzerinden rezerve edilmelidir.</p>
<p class='mb-4'>Küçük çocuklarla mı seyahat ediyorsunuz? Çoğu TVDE aracında çocuk koltuğu bulunmaz. Özellikle "Aile" veya "Çocuk" seçeneğini istemeli veya kendi portatif koltuğunuzu getirmelisiniz, aksi takdirde sürücü sürüşü yasal olarak reddedebilir.</p>`,
pt: `<p class='mb-4'>Uber e Bolt são classificados como TVDE. Ao contrário dos táxis, não podem apanhar passageiros nas praças de táxis nem ser chamados na rua; todas as viagens devem ser marcadas pela app.</p>
<p class='mb-4'>Viaja com crianças? A maioria dos TVDE não tem cadeirinhas. Deve pedir a opção "Family" ou "Kids", ou levar a sua, caso contrário o motorista pode recusar a viagem legalmente.</p>`
}
},
{
id: 'social-etiquette-tu-voce',
stage: 'settle',
category: { en: 'Language & Culture', tr: 'Dil & Kültür', pt: 'Língua e Cultura' },
source: 'Community Insights',
date: '14.02.2026',
title: { en: 'Social Etiquette: Tu vs. Você', tr: 'Sosyal Görgü: Tu ve Você', pt: 'Etiqueta Social: Tu vs. Você' },
content: {
en: `<p class='mb-4'>Portuguese is formal. Never address a stranger, an older person, or a service worker as "Tu" (You). This is reserved for close friends and children. Instead, use "Você" implied by the verb conjugation, or address them as "O senhor / A senhora".</p>
<p class='mb-4'>Using "Tu" too early can be seen as disrespectful or uneducated. When in doubt, stick to the formal third person until the other person explicitly says "Podes tratar-me por tu" (You can treat me as 'tu').</p>`,
tr: `<p class='mb-4'>Portekizce resmi bir dildir. Bir yabancıya, yaşlı birine veya hizmet çalışanına asla "Tu" (Sen) diye hitap etmeyin. Bu, yakın arkadaşlar ve çocuklar içindir. Bunun yerine fiil çekimiyle ima edilen "Você"yi veya "O senhor / A senhora"yı kullanın.</p>
<p class='mb-4'>Erkenden "Tu" kullanmak saygısızlık veya eğitimsizlik olarak görülebilir. Şüpheniz varsa, karşı taraf "Podes tratar-me por tu" (Bana sen diyebilirsin) diyene kadar resmi üçüncü şahısta kalın.</p>`,
pt: `<p class='mb-4'>O português é formal. Nunca trate um estranho, um idoso ou um funcionário por "Tu". Isso é para amigos íntimos e crianças. Use "Você" implícito ou trate-os por "O senhor / A senhora".</p>
<p class='mb-4'>Usar "Tu" demasiado cedo pode ser visto como desrespeitoso. Na dúvida, mantenha a terceira pessoa formal até que a outra pessoa diga "Podes tratar-me por tu".</p>`
}
},
{
id: 'child-benefits-abono',
stage: 'settle',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'Social Security / Segurança Social',
date: '28.01.2026',
title: { en: 'Child Benefits (Abono de Família)', tr: 'Çocuk Yardımı (Abono de Família)', pt: 'Abono de Família' },
content: {
en: `<p class='mb-4'>All legal residents contributing to Social Security are entitled to child benefits, regardless of nationality. The amount depends on the family's income bracket (Escalão) and the age of the child.</p>
<p class='mb-4'>Even high earners usually receive a nominal amount. You must apply at the Segurança Social Direta portal. It is also a prerequisite for other benefits, such as free school meals or transport passes for students.</p>`,
tr: `<p class='mb-4'>Sosyal Güvenliğe katkıda bulunan tüm yasal sakinler, milliyetine bakılmaksızın çocuk yardımına hak kazanır. Tutar, ailenin gelir dilimine (Escalão) ve çocuğun yaşına bağlıdır.</p>
<p class='mb-4'>Yüksek gelirliler bile genellikle sembolik bir miktar alır. Segurança Social Direta portalından başvurmalısınız. Bu ayrıca öğrenciler için ücretsiz okul yemeği veya ulaşım kartı gibi diğer yardımlar için de bir ön koşuldur.</p>`,
pt: `<p class='mb-4'>Todos os residentes legais que descontam para a Segurança Social têm direito ao abono, independentemente da nacionalidade. O valor depende do escalão de rendimentos e da idade da criança.</p>
<p class='mb-4'>Mesmo quem ganha bem recebe um valor nominal. Deve pedir na Segurança Social Direta. É pré-requisito para outros benefícios, como refeições escolares ou passes gratuitos.</p>`
}
},
{
id: 'dangerous-dog-breeds',
stage: 'apply',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'DGAV / Veterinary Authority',
date: '17.02.2026',
title: { en: 'Rules for Dangerous Dog Breeds', tr: 'Tehlikeli Köpek Irkları Kuralları', pt: 'Regras para Raças Potencialmente Perigosas' },
content: {
en: `<p class='mb-4'>Portugal classifies 7 breeds (including Pitbulls, Rottweilers, and Staffordshire Terriers) as "potentially dangerous". Owners must have a clean criminal record, specific liability insurance, and the dog must be sterilized.</p>
<p class='mb-4'>You also need to pass a physical/psychological aptitude test to own these breeds. When walking them, a muzzle and a short leash (max 1 meter) are mandatory by law. Failure to comply can lead to the animal being seized.</p>`,
tr: `<p class='mb-4'>Portekiz, 7 ırkı (Pitbull, Rottweiler ve Staffordshire Terrier dahil) "potansiyel olarak tehlikeli" sınıflandırır. Sahiplerinin temiz bir adli sicili, özel sorumluluk sigortası olmalı ve köpek kısırlaştırılmış olmalıdır.</p>
<p class='mb-4'>Bu ırklara sahip olmak için fiziksel/psikolojik yeterlilik testini de geçmelisiniz. Onları gezdirirken ağızlık ve kısa tasma (maks. 1 metre) yasal olarak zorunludur. Uyulmaması hayvanın el konulmasına yol açabilir.</p>`,
pt: `<p class='mb-4'>Portugal classifica 7 raças (incluindo Pitbulls, Rottweilers) como "potencialmente perigosas". Os donos devem ter registo criminal limpo, seguro de responsabilidade civil e o cão deve ser esterilizado.</p>
<p class='mb-4'>Também precisa de um teste de aptidão física/psicológica. Ao passear, açaime e trela curta (máx. 1 metro) são obrigatórios. O incumprimento pode levar à apreensão do animal.</p>`
}
},
{
id: 'vies-vat-freelancers',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Tax Authority / Finanças',
date: '12.02.2026',
title: { en: 'VIES for Freelancers (Recibos Verdes)', tr: 'Freelancerlar İçin VIES (KDV)', pt: 'VIES para Trabalhadores Independentes' },
content: {
en: `<p class='mb-4'>If you are a freelancer (Recibos Verdes) invoicing clients in other EU countries, you must register for VIES to use the "Reverse Charge" VAT mechanism. This allows you to issue invoices without adding Portuguese VAT.</p>
<p class='mb-4'>You must select this option when opening your activity or submit a change declaration later. Without VIES validation, your EU clients may be forced to withhold tax, complicating your accounting significantly.</p>`,
tr: `<p class='mb-4'>Diğer AB ülkelerindeki müşterilere fatura kesen bir freelancersanız (Recibos Verdes), "Ters İbraz" KDV mekanizmasını kullanmak için VIES'e kaydolmalısınız. Bu, Portekiz KDV'si eklemeden fatura kesmenizi sağlar.</p>
<p class='mb-4'>Faaliyetinizi açarken bu seçeneği seçmeli veya daha sonra değişiklik beyannamesi vermelisiniz. VIES doğrulaması olmadan, AB müşterileriniz vergi kesintisi yapmak zorunda kalabilir, bu da muhasebenizi zorlaştırır.</p>`,
pt: `<p class='mb-4'>Se é trabalhador independente e fatura a clientes noutros países da UE, deve registar-se no VIES para usar o mecanismo de "Autoliquidação" do IVA. Isto permite faturar sem adicionar IVA português.</p>
<p class='mb-4'>Deve selecionar esta opção ao abrir atividade ou entregar declaração de alteração. Sem validação VIES, os clientes da UE podem ter de reter imposto, complicando a sua contabilidade.</p>`
}
},
{
id: 'ctt-post-office-services',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'CTT Official',
date: '03.02.2026',
title: { en: 'CTT: More Than Just Mail', tr: 'CTT: Postadan Daha Fazlası', pt: 'CTT: Mais do que Correio' },
content: {
en: `<p class='mb-4'>The Portuguese Post Office (CTT) acts as a secondary bank and administrative center. You can pay highway tolls, buy government savings bonds (Certificados de Aforro), and even purchase health insurance there.</p>
<p class='mb-4'>CTT Bank is also a popular option for retirees due to its low fees and physical presence in almost every town. If you receive a registered letter notice, you must usually pick it up at the specific CTT branch listed on the slip.</p>`,
tr: `<p class='mb-4'>Portekiz Postanesi (CTT), ikincil bir banka ve idari merkez gibi çalışır. Otoyol geçiş ücretlerini ödeyebilir, devlet tasarruf bonoları (Certificados de Aforro) alabilir ve hatta sağlık sigortası satın alabilirsiniz.</p>
<p class='mb-4'>CTT Bank, düşük ücretleri ve hemen her kasabada bulunması nedeniyle emekliler için popülerdir. Taahhütlü mektup bildirimi alırsanız, genellikle kağıtta belirtilen belirli CTT şubesinden almanız gerekir.</p>`,
pt: `<p class='mb-4'>Os CTT funcionam como um banco secundário e centro administrativo. Pode pagar portagens, comprar Certificados de Aforro e até fazer seguros de saúde.</p>
<p class='mb-4'>O Banco CTT é popular entre reformados pelas taxas baixas e presença física. Se receber um aviso de carta registada, deve geralmente levantá-la na estação CTT específica indicada no talão.</p>`
}
},
{
id: 'lawyer-vs-solicitor',
stage: 'apply',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'Bar Association / Ordem dos Advogados',
date: '20.01.2026',
title: { en: 'Lawyer vs. Solicitor: Who to Hire?', tr: 'Avukat ve "Solicitador" Farkı', pt: 'Advogado vs. Solicitador' },
content: {
en: `<p class='mb-4'>In Portugal, both Lawyers (Advogados) and Solicitors (Solicitadores) can handle legal paperwork, property deeds, and tax representation. Solicitors are often cheaper and specialize in bureaucracy and contracts.</p>
<p class='mb-4'>However, only Lawyers can represent you in court. For standard visa applications or buying a house, a Solicitor is often sufficient and more cost-effective. Both have the power to certify copies of documents (making them valid for AIMA).</p>`,
tr: `<p class='mb-4'>Portekiz'de hem Avukatlar (Advogados) hem de "Solicitador"lar yasal evrakları, tapu işlemlerini ve vergi temsilciliğini yürütebilir. Solicitador'lar genellikle daha ucuzdur ve bürokrasi ile sözleşmelerde uzmanlaşmıştır.</p>
<p class='mb-4'>Ancak, sizi mahkemede sadece Avukatlar temsil edebilir. Standart vize başvuruları veya ev almak için bir Solicitador genellikle yeterli ve daha ekonomiktir. Her ikisi de belgelerin kopyalarını tasdik etme yetkisine sahiptir.</p>`,
pt: `<p class='mb-4'>Em Portugal, tanto Advogados como Solicitadores podem tratar de papelada legal, escrituras e representação fiscal. Os Solicitadores são muitas vezes mais baratos e especialistas em burocracia.</p>
<p class='mb-4'>Porém, só os Advogados o podem representar em tribunal. Para vistos ou comprar casa, um Solicitador é muitas vezes suficiente. Ambos têm poder para certificar cópias de documentos (válidos para a AIMA).</p>`
}
},


    {
id: 'salary-13th-14th-month',
stage: 'settle',
category: { en: 'Work & Business', tr: 'İş & Ekonomi', pt: 'Trabalho e Negócios' },
source: 'Labor Code / Código do Trabalho',
date: '17.02.2026',
title: { en: 'The 13th and 14th Month Salary', tr: '13. ve 14. Maaş (İkramiye)', pt: 'O 13º e 14º Mês de Salário' },
content: {
en: `<p class='mb-4'>In Portugal, annual salaries are typically divided into 14 payments rather than 12. Employees receive a Holiday Subsidy (Subsidio de Férias) in summer and a Christmas Subsidy (Subsidio de Natal) in December.</p>

<p class='mb-4'>When negotiating a salary, always clarify if the offer is "Gross Annual" or "Monthly Net". If it is monthly, ask if it includes the subsidies (duodecimos) distributed throughout the year or if they are paid in bulk twice a year.</p>`,
tr: `<p class='mb-4'>Portekiz'de yıllık maaşlar genellikle 12 yerine 14 ödemeye bölünür. Çalışanlar yazın Tatil Ödeneği (Subsidio de Férias) ve Aralık ayında Noel Ödeneği (Subsidio de Natal) alırlar.</p>
<p class='mb-4'>Maaş pazarlığı yaparken, teklifin "Yıllık Brüt" mü yoksa "Aylık Net" mi olduğunu mutlaka netleştirin. Aylıksa, ödeneklerin yıla yayılarak mı (duodecimos) yoksa yılda iki kez toplu mu ödendiğini sorun.</p>`,
pt: `<p class='mb-4'>Em Portugal, os salários anuais são tipicamente divididos em 14 pagamentos. Os trabalhadores recebem o Subsídio de Férias no verão e o Subsídio de Natal em dezembro.</p>
<p class='mb-4'>Ao negociar salário, esclareça sempre se a oferta é "Bruto Anual" ou "Líquido Mensal". Se for mensal, pergunte se inclui os subsídios (duodécimos) distribuídos ao longo do ano ou se são pagos em duas tranches.</p>`
}
},
{
id: 'irs-tax-deadlines',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: 'IRS Declaration Deadlines', tr: 'IRS Beyanname Tarihleri', pt: 'Prazos de Entrega do IRS' },
content: {
en: `<p class='mb-4'>The tax season in Portugal runs strictly from April 1st to June 30th. During this window, you must submit your IRS declaration for the previous year's income. Missing this deadline results in automatic fines starting at €25.</p>
<p class='mb-4'>Even if you have no tax to pay (or have "Automatic IRS"), you must confirm your submission on the Portal das Finanças. For the 2025 tax year (declared now in 2026), ensure your bank account (IBAN) is updated on the portal to receive any refunds.</p>`,
tr: `<p class='mb-4'>Portekiz'de vergi dönemi kesin olarak 1 Nisan ile 30 Haziran arasındadır. Bu aralıkta, önceki yılın geliri için IRS beyannamenizi sunmalısınız. Bu tarihi kaçırmak, 25€'dan başlayan otomatik cezalara neden olur.</p>
<p class='mb-4'>Ödenecek verginiz olmasa bile (veya "Otomatik IRS" olsa bile), Portal das Finanças üzerinden gönderiminizi onaylamalısınız. 2025 vergi yılı için (şimdi 2026'da beyan edilen), iadeleri almak için portalda IBAN'ınızın güncel olduğundan emin olun.</p>`,
pt: `<p class='mb-4'>A época fiscal em Portugal decorre estritamente de 1 de abril a 30 de junho. Deve entregar a declaração de IRS referente aos rendimentos do ano anterior. Falhar o prazo resulta em multas automáticas a partir de 25€.</p>
<p class='mb-4'>Mesmo sem imposto a pagar (ou com "IRS Automático"), deve confirmar a submissão no Portal das Finanças. Para o ano fiscal de 2025 (declarado agora em 2026), garanta que o IBAN está atualizado para receber reembolsos.</p>`
}
},
{
id: 'degree-recognition-dges',
stage: 'apply',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'DGES Official',
date: '15.01.2026',
title: { en: 'Recognizing Foreign Degrees', tr: 'Yabancı Diplomaların Tanınması', pt: 'Reconhecimento de Diplomas Estrangeiros' },
content: {
en: `<p class='mb-4'>To work in regulated professions (like architecture, medicine, or teaching) or to pursue a PhD, you must have your foreign degree recognized by DGES. The process is now largely digital but requires an apostilled diploma and transcript.</p>
<p class='mb-4'>There are two types: "Automatic Recognition" (faster, for degrees from EU/OECD countries with similar structures) and "Specific Recognition" (slower, requires a panel review). Prices range from €27.90 to over €500 depending on the complexity.</p>`,
tr: `<p class='mb-4'>Düzenlenmiş mesleklerde (mimarlık, tıp veya öğretmenlik gibi) çalışmak veya doktora yapmak için yabancı diplomanızı DGES'e tanıttırmalısınız. Süreç artık büyük ölçüde dijitaldir ancak apostilli diploma ve transkript gerektirir.</p>
<p class='mb-4'>İki tür vardır: "Otomatik Tanıma" (daha hızlı, benzer yapıdaki AB/OECD diplomaları için) ve "Özel Tanıma" (daha yavaş, kurul incelemesi gerektirir). Fiyatlar karmaşıklığa bağlı olarak 27,90€ ile 500€ üzeri arasında değişir.</p>`,
pt: `<p class='mb-4'>Para trabalhar em profissões reguladas (como arquitetura, medicina ou ensino) ou fazer doutoramento, deve reconhecer o diploma estrangeiro na DGES. O processo é digital mas exige diploma e certificado apostilados.</p>
<p class='mb-4'>Existem dois tipos: "Reconhecimento Automático" (rápido, para graus UE/OCDE similares) e "Reconhecimento Específico" (lento, requer avaliação). Os preços variam de 27,90€ a mais de 500€.</p>`
}
},
{
id: 'noise-laws-quiet-hours',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Noise Regulation / Lei do Ruído',
date: '17.02.2026',
title: { en: 'Quiet Hours & Noise Laws', tr: 'Sessizlik Saatleri ve Gürültü Yasaları', pt: 'Horário de Silêncio e Lei do Ruído' },
content: {
en: `<p class='mb-4'>Portuguese law protects rest periods. The "Quiet Hours" are strictly defined between 23:00 and 07:00. During this time, loud music, washing machines, or construction work in apartments are prohibited.</p>
<p class='mb-4'>Construction work is only allowed on weekdays between 08:00 and 20:00. If neighbors violate these rules, you can call the police (PSP or GNR), who can issue fines. Persistent noise issues can also be reported to the City Hall (Câmara Municipal).</p>`,
tr: `<p class='mb-4'>Portekiz yasaları dinlenme sürelerini korur. "Sessizlik Saatleri" kesin olarak 23:00 ile 07:00 arasındadır. Bu süre zarfında apartmanlarda yüksek sesli müzik, çamaşır makinesi veya inşaat çalışması yasaktır.</p>
<p class='mb-4'>İnşaat çalışmalarına sadece hafta içi 08:00 - 20:00 saatleri arasında izin verilir. Komşular bu kuralları ihlal ederse, para cezası kesebilecek olan polisi (PSP veya GNR) arayabilirsiniz. Sürekli gürültü sorunları Belediye'ye de bildirilebilir.</p>`,
pt: `<p class='mb-4'>A lei portuguesa protege o descanso. O "Horário de Silêncio" é entre as 23:00 e as 07:00. Durante este período, música alta, máquinas de lavar ou obras em apartamentos são proibidas.</p>
<p class='mb-4'>Obras só são permitidas nos dias úteis entre as 08:00 e as 20:00. Se os vizinhos violarem as regras, pode chamar a polícia (PSP ou GNR). Problemas de ruído persistentes podem ser reportados à Câmara Municipal.</p>`
}
},
{
id: 'tipping-etiquette',
stage: 'discover',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Community Insights',
date: '05.02.2026',
title: { en: 'Tipping Culture in Portugal', tr: 'Portekiz\'de Bahşiş Kültürü', pt: 'Cultura de Gorjeta em Portugal' },
content: {
en: `<p class='mb-4'>Tipping (Gorjeta) is not mandatory in Portugal, unlike in the US. Service charges are usually included in the bill. However, leaving a small tip is appreciated for good service.</p>
<p class='mb-4'>In cafes, locals often round up to the nearest euro (leaving 10-20 cents). In restaurants, a tip of 5% to 10% is generous and well-received. Tipping taxi drivers or couriers is not expected but rounding up the fare is common courtesy.</p>`,
tr: `<p class='mb-4'>Portekiz'de bahşiş (Gorjeta), ABD'nin aksine zorunlu değildir. Hizmet bedeli genellikle hesaba dahildir. Ancak, iyi hizmet için küçük bir bahşiş bırakmak takdir edilir.</p>
<p class='mb-4'>Kafelerde yerel halk genellikle en yakın Euro'ya yuvarlar (10-20 cent bırakır). Restoranlarda %5 ila %10'luk bir bahşiş cömerttir ve iyi karşılanır. Taksi şoförlerine veya kuryelere bahşiş beklenmez ancak ücreti yuvarlamak yaygın bir nezakettir.</p>`,
pt: `<p class='mb-4'>A gorjeta não é obrigatória em Portugal. O serviço está geralmente incluído. No entanto, deixar uma pequena gorjeta é apreciado pelo bom serviço.</p>
<p class='mb-4'>Nos cafés, os locais arredondam para o euro mais próximo. Em restaurantes, 5% a 10% é generoso. Não se espera gorjeta para taxistas ou estafetas, mas arredondar o valor é uma cortesia comum.</p>`
}
},
{
id: 'gas-bottles-utilities',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'ERSE (Energy Regulator)',
date: '12.02.2026',
title: { en: 'Piped Gas vs. Gas Bottles', tr: 'Doğalgaz ve Tüp Gaz', pt: 'Gás Canalizado vs. Botija' },
content: {
en: `<p class='mb-4'>Many older apartments in Portugal do not have piped natural gas and rely on butane or propane bottles (Gás de Botija) for cooking and water heating. You buy these from gas stations or schedule delivery services like Rubis or Galp.</p>
<p class='mb-4'>When renting, check the water heater. If it uses a bottle, you will need to monitor your usage to avoid running out of hot water mid-shower. An empty bottle is exchanged for a full one, costing around €30-€35 depending on global prices.</p>`,
tr: `<p class='mb-4'>Portekiz'deki birçok eski dairede doğalgaz hattı yoktur ve yemek pişirme/su ısıtma için bütan veya propan tüplerine (Gás de Botija) güvenilir. Bunları benzin istasyonlarından alır veya Rubis/Galp gibi teslimat servislerini kullanırsınız.</p>
<p class='mb-4'>Kiralarken su ısıtıcısını kontrol edin. Tüple çalışıyorsa, duşun ortasında sıcak suyun bitmemesi için kullanımınızı takip etmelisiniz. Boş tüp doluyla değiştirilir, fiyatı küresel fiyatlara göre 30€-35€ civarındadır.</p>`,
pt: `<p class='mb-4'>Muitos apartamentos antigos não têm gás natural canalizado e dependem de botijas de butano ou propano. Compram-se em postos de combustível ou agendam-se entregas (Rubis, Galp).</p>
<p class='mb-4'>Ao alugar, verifique o esquentador. Se usar botija, deve monitorizar o consumo para não ficar sem água quente no banho. Uma garrafa vazia é trocada por uma cheia, custando cerca de 30€-35€.</p>`
}
},
{
id: 'change-address-aima',
stage: 'settle',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'AIMA Official',
date: '17.02.2026',
title: { en: 'Changing Your Address', tr: 'Adres Değişikliği', pt: 'Alteração de Morada' },
content: {
en: `<p class='mb-4'>Changing your address at the Tax Authority (Finanças) does <strong>not</strong> automatically update your residency record. You must legally notify AIMA of any address change within 60 days of moving.</p>
<p class='mb-4'>This process can sometimes be done via the AIMA portal, but often requires an appointment or an email with your new Junta certificate. Failure to update AIMA can lead to missed notifications about card renewals.</p>`,
tr: `<p class='mb-4'>Vergi Dairesi'nde (Finanças) adres değiştirmek, oturum kaydınızı otomatik olarak <strong>güncellemez</strong>. Taşındıktan sonraki 60 gün içinde adres değişikliğini AIMA'ya yasal olarak bildirmelisiniz.</p>
<p class='mb-4'>Bu işlem bazen AIMA portalından yapılabilir, ancak genellikle randevu veya yeni Junta belgenizle bir e-posta gerektirir. AIMA'yı güncellememek, kart yenilemeleriyle ilgili bildirimleri kaçırmanıza yol açabilir.</p>`,
pt: `<p class='mb-4'>Mudar a morada nas Finanças <strong>não</strong> atualiza automaticamente o registo de residência. Deve notificar legalmente a AIMA de qualquer mudança no prazo de 60 dias.</p>
<p class='mb-4'>O processo pode por vezes ser feito no portal AIMA, mas requer frequentemente agendamento ou e-mail com o novo atestado da Junta. Falhar a atualização pode levar à perda de notificações sobre renovações.</p>`
}
},
{
id: 'wildfire-prevention-rules',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Civil Protection / Proteção Civil',
date: '01.02.2026',
title: { en: 'Wildfire Prevention & Safety', tr: 'Orman Yangını Önleme ve Güvenlik', pt: 'Prevenção de Incêndios e Segurança' },
content: {
en: `<p class='mb-4'>Portugal is prone to wildfires in summer. If you own land or a house in a rural area, you are legally required to clean the vegetation within 50 meters of your property by April 30th each year. Fines for non-compliance are heavy.</p>
<p class='mb-4'>During the "Critical Fire Period" (usually June to September), lighting bonfires, burning garden waste, or using fireworks is strictly prohibited. In case of fire, dial 112 immediately.</p>`,
tr: `<p class='mb-4'>Portekiz yazın orman yangınlarına yatkındır. Kırsal alanda araziniz veya eviniz varsa, her yıl 30 Nisan'a kadar mülkünüzün 50 metre çevresindeki bitki örtüsünü temizlemek yasal zorunluluktur. Uymamanın cezaları ağırdır.</p>
<p class='mb-4'>"Kritik Yangın Dönemi"nde (genellikle Haziran-Eylül), ateş yakmak, bahçe atığı yakmak veya havai fişek kullanmak kesinlikle yasaktır. Yangın durumunda derhal 112'yi arayın.</p>`,
pt: `<p class='mb-4'>Portugal é propenso a incêndios no verão. Se tiver terreno ou casa em zona rural, é obrigado a limpar a vegetação num raio de 50 metros até 30 de abril. As multas por incumprimento são pesadas.</p>
<p class='mb-4'>Durante o "Período Crítico" (junho a setembro), fazer fogueiras, queimar lixo ou usar fogo de artifício é proibido. Em caso de incêndio, ligue 112 imediatamente.</p>`
}
},
{
id: 'al-license-restrictions',
stage: 'discover',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Mais Habitação Law',
date: '20.01.2026',
title: { en: 'Alojamento Local (AL) Restrictions', tr: 'Alojamento Local (AL) Kısıtlamaları', pt: 'Restrições ao Alojamento Local' },
content: {
en: `<p class='mb-4'>If you plan to buy property to rent out to tourists (Airbnb style), be aware that new AL licenses are currently suspended in high-density areas like Lisbon, Porto, and parts of the Algarve under the "Mais Habitação" law.</p>
<p class='mb-4'>Condominiums (building assemblies) now also have the power to ban short-term rentals in their buildings with a simple majority vote. Always check the specific regulations of the municipality and the building before investing.</p>`,
tr: `<p class='mb-4'>Turistlere kiralamak için (Airbnb tarzı) mülk almayı planlıyorsanız, "Mais Habitação" yasası kapsamında Lizbon, Porto ve Algarve'nin bazı kısımlarında yeni AL lisanslarının askıya alındığını bilin.</p>
<p class='mb-4'>Apartman yönetimleri de artık basit çoğunluk oyuyla binalarında kısa süreli kiralamayı yasaklama yetkisine sahip. Yatırım yapmadan önce belediyenin ve binanın özel yönetmeliklerini mutlaka kontrol edin.</p>`,
pt: `<p class='mb-4'>Se planeia comprar casa para alugar a turistas (estilo Airbnb), saiba que novas licenças AL estão suspensas em áreas de alta densidade como Lisboa e Porto, ao abrigo da lei "Mais Habitação".</p>
<p class='mb-4'>Os condomínios têm agora poder para proibir o alojamento local nos seus edifícios por maioria simples. Verifique sempre os regulamentos do município e do prédio antes de investir.</p>`
}
},
{
id: 'certified-translations-legal',
stage: 'apply',
category: { en: 'Legal & NIF', tr: 'Yasal & NIF', pt: 'Legal e NIF' },
source: 'Community Insights',
date: '17.02.2026',
title: { en: 'Certified Translations', tr: 'Yeminli Tercümeler', pt: 'Traduções Certificadas' },
content: {
en: `<p class='mb-4'>Documents like birth certificates or criminal records must be translated into Portuguese. A simple translation is not enough; it must be certified. This can be done by a notary, a lawyer, or the Portuguese Consulate in your home country.</p>
<p class='mb-4'>In Portugal, "Yeminli Tercüman" (Sworn Translator) works differently than in Turkey. Here, the translator signs the document, and a lawyer or notary certifies their signature. Ensure your translator follows this specific protocol.</p>`,
tr: `<p class='mb-4'>Doğum belgesi veya adli sicil kaydı gibi belgeler Portekizceye çevrilmelidir. Basit bir çeviri yetmez; tasdikli olmalıdır. Bu işlem noter, avukat veya ülkenizdeki Portekiz Konsolosluğu tarafından yapılabilir.</p>
<p class='mb-4'>Portekiz'de "Yeminli Tercüman" sistemi Türkiye'den farklı işler. Burada tercüman belgeyi imzalar, bir avukat veya noter ise imzayı tasdik eder. Tercümanınızın bu özel protokole uyduğundan emin olun.</p>`,
pt: `<p class='mb-4'>Documentos como certidões de nascimento ou registo criminal devem ser traduzidos. Uma tradução simples não basta; deve ser certificada. Pode ser feito por notário, advogado ou Consulado.</p>
<p class='mb-4'>Em Portugal, o sistema funciona de forma diferente. O tradutor assina o documento e um advogado ou notário certifica a assinatura. Garanta que o seu tradutor segue este protocolo específico.</p>`
}
}

,{

    id: 'nhr-ifici-tax-regime',
stage: 'discover',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Tax Authority / Finanças',
date: '10.02.2026',
title: { en: 'The New NHR (IFICI) Regime', tr: 'Yeni NHR (IFICI) Rejimi', pt: 'O Novo Regime RNH (IFICI)' },
content: {
en: `<p class='mb-4'>The old Non-Habitual Resident (NHR) regime has been replaced by the IFICI (Tax Incentive for Scientific Research and Innovation). Unlike the broad NHR, this new version is strictly for specific careers in science, technology, and startups.</p>

<p class='mb-4'>If you qualify, you get a flat 20% tax rate on Portuguese income and exemptions on foreign income for 10 years. However, passive income pensioners (D7) generally no longer qualify for the flat tax unless grandfathered in under previous rules.</p>`,
tr: `<p class='mb-4'>Eski Alışılmışın Dışında Mukim (NHR) rejiminin yerini IFICI (Bilimsel Araştırma ve İnovasyon Vergi Teşviki) aldı. Geniş kapsamlı NHR'nin aksine, bu yeni sürüm kesinlikle bilim, teknoloji ve startup alanındaki belirli kariyerler içindir.</p>
<p class='mb-4'>Hak kazanırsanız, 10 yıl boyunca Portekiz gelirlerinde %20 sabit vergi oranı ve yabancı gelirlerde muafiyet alırsınız. Ancak, pasif gelirli emekliler (D7), önceki kurallar kapsamında kazanılmış hakları yoksa genellikle artık sabit vergiden yararlanamazlar.</p>`,
pt: `<p class='mb-4'>O antigo regime de Residente Não Habitual (RNH) foi substituído pelo IFICI (Incentivo Fiscal à Investigação Científica e Inovação). Ao contrário do RNH, esta nova versão é estritamente para carreiras específicas em ciência, tecnologia e startups.</p>
<p class='mb-4'>Se for elegível, obtém uma taxa fixa de 20% sobre o rendimento português e isenções sobre o rendimento estrangeiro durante 10 anos. Pensionistas (D7) geralmente já não se qualificam, a menos que abrangidos por regras anteriores.</p>`
}
},
{
id: 'importing-car-isv-exemption',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'Customs Authority / Alfândega',
date: '17.02.2026',
title: { en: 'Importing Your Car Tax-Free', tr: 'Aracınızı Vergisiz Getirmek', pt: 'Importar Carro Sem Imposto' },
content: {
en: `<p class='mb-4'>Vehicle tax (ISV) in Portugal can be extremely high. However, new residents can import one car tax-free if they have owned it for at least 6 months in their country of origin before moving.</p>
<p class='mb-4'>You must start this process at Customs (Alfândega) within 12 months of getting your residency. Be warned: if you sell the car within the first 12 months of importing it, you will have to pay the full tax retroactively.</p>`,
tr: `<p class='mb-4'>Portekiz'de araç vergisi (ISV) son derece yüksek olabilir. Ancak, yeni sakinler, taşınmadan önce menşe ülkelerinde en az 6 aydır sahip oldukları bir aracı vergisiz olarak getirebilirler.</p>
<p class='mb-4'>Bu süreci, oturum iznini aldıktan sonraki 12 ay içinde Gümrükte (Alfândega) başlatmalısınız. Dikkat: Aracı ithal ettikten sonraki ilk 12 ay içinde satarsanız, tam vergiyi geriye dönük olarak ödemek zorunda kalırsınız.</p>`,
pt: `<p class='mb-4'>O Imposto Sobre Veículos (ISV) em Portugal pode ser extremamente alto. No entanto, novos residentes podem importar um carro isento de impostos se o tiverem possuído por pelo menos 6 meses no país de origem.</p>
<p class='mb-4'>Deve iniciar este processo na Alfândega no prazo de 12 meses após obter residência. Atenção: se vender o carro nos primeiros 12 meses após a importação, terá de pagar o imposto total retroativamente.</p>`
}
},
{
id: 'cplp-visa-mobility',
stage: 'discover',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'AIMA Official',
date: '05.02.2026',
title: { en: 'CPLP Mobility Visa Rules', tr: 'CPLP Hareketlilik Vizesi Kuralları', pt: 'Regras do Visto CPLP' },
content: {
en: `<p class='mb-4'>Citizens of CPLP countries (like Brazil, Angola, Cape Verde) have a streamlined residency process. The CPLP visa is often processed automatically online, bypassing the standard AIMA interview queue.</p>
<p class='mb-4'>However, the CPLP residence permit has a limitation: it is not a standard Schengen permit. While it allows you to live and work in Portugal, it does not technically grant visa-free travel to other Schengen countries (like France or Germany) without a separate visa.</p>`,
tr: `<p class='mb-4'>CPLP ülkeleri (Brezilya, Angola, Yeşil Burun Adaları gibi) vatandaşları için basitleştirilmiş bir oturum süreci vardır. CPLP vizesi genellikle standart AIMA görüşme sırasını atlayarak çevrimiçi olarak otomatik işlenir.</p>
<p class='mb-4'>Ancak, CPLP oturum izninin bir sınırlaması vardır: Standart bir Schengen izni değildir. Portekiz'de yaşamanıza ve çalışmanıza izin verse de, teknik olarak diğer Schengen ülkelerine (Fransa veya Almanya gibi) ayrı bir vize olmadan seyahat hakkı tanımaz.</p>`,
pt: `<p class='mb-4'>Cidadãos da CPLP (como Brasil, Angola, Cabo Verde) têm um processo de residência simplificado. O visto CPLP é frequentemente processado automaticamente online, evitando a fila padrão da AIMA.</p>
<p class='mb-4'>No entanto, a autorização CPLP tem uma limitação: não é uma autorização Schengen padrão. Embora permita viver e trabalhar em Portugal, tecnicamente não garante viagens sem visto para outros países Schengen sem um visto separado.</p>`
}
},
{
id: 'rental-contract-termination',
stage: 'settle',
category: { en: 'Housing', tr: 'Konaklama', pt: 'Habitação' },
source: 'Civil Code / Código Civil',
date: '20.01.2026',
title: { en: 'Terminating a Rental Contract', tr: 'Kira Sözleşmesini Feshetmek', pt: 'Denúncia do Contrato de Arrendamento' },
content: {
en: `<p class='mb-4'>Tenants can usually terminate a rental contract after serving one-third of the lease duration. You must provide written notice via registered mail. The notice period depends on the contract length (usually 120 days for contracts over a year).</p>
<p class='mb-4'>If you leave early without proper notice, the landlord can legally demand rent for the missing notice period. Always keep the receipt of the registered letter (Carta Registada) as proof of your notification.</p>`,
tr: `<p class='mb-4'>Kiracılar genellikle kira süresinin üçte birini tamamladıktan sonra sözleşmeyi feshedebilirler. İadeli taahhütlü posta ile yazılı bildirimde bulunmalısınız. İhbar süresi sözleşme uzunluğuna bağlıdır (bir yıldan uzun sözleşmeler için genellikle 120 gün).</p>
<p class='mb-4'>Uygun bildirimde bulunmadan erken ayrılırsanız, ev sahibi eksik ihbar süresi için yasal olarak kira talep edebilir. Bildiriminizin kanıtı olarak taahhütlü mektubun (Carta Registada) makbuzunu daima saklayın.</p>`,
pt: `<p class='mb-4'>Os inquilinos podem geralmente denunciar o contrato após cumprir um terço da duração. Deve enviar aviso por carta registada. O pré-aviso depende da duração do contrato (geralmente 120 dias para contratos superiores a um ano).</p>
<p class='mb-4'>Se sair mais cedo sem aviso prévio, o senhorio pode exigir legalmente as rendas do período em falta. Guarde sempre o talão da Carta Registada como prova da sua notificação.</p>`
}
},
{
id: 'aima-portal-registration',
stage: 'apply',
category: { en: 'Visas & AIMA', tr: 'Vize & AIMA', pt: 'Vistos e AIMA' },
source: 'AIMA Tech Support',
date: '17.02.2026',
title: { en: 'Registering on the AIMA Portal', tr: 'AIMA Portalına Kayıt', pt: 'Registo no Portal AIMA' },
content: {
en: `<p class='mb-4'>If the link on your visa sticker doesn't work, you must register manually on the AIMA/SEF portal. When asked for "Título de Residência", do not panic. Use your visa number, but often the system requires the "Body" number (top right) rather than the visa number itself.</p>
<p class='mb-4'>If registration fails repeatedly, try different browser combinations or clear your cache. The system is notoriously glitchy with foreign IP addresses, so using a VPN set to Portugal might help.</p>`,
tr: `<p class='mb-4'>Vize etiketinizdeki link çalışmıyorsa, AIMA/SEF portalına manuel olarak kayıt olmalısınız. "Título de Residência" sorulduğunda panik yapmayın. Vize numaranızı kullanın, ancak sistem genellikle vize numarasından ziyade sağ üstteki "Gövde" numarasını ister.</p>
<p class='mb-4'>Kayıt sürekli başarısız olursa, farklı tarayıcıları deneyin veya önbelleğinizi temizleyin. Sistem yabancı IP adresleriyle sorunlu çalışabilir, bu yüzden Portekiz konumlu bir VPN kullanmak yardımcı olabilir.</p>`,
pt: `<p class='mb-4'>Se o link no visto não funcionar, deve registar-se manualmente no portal AIMA. Quando pedirem "Título de Residência", use o número do visto, mas o sistema requer frequentemente o número do "Corpo" (canto superior direito).</p>
<p class='mb-4'>Se o registo falhar, tente outros browsers ou limpe a cache. O sistema tem falhas com IPs estrangeiros, por isso usar uma VPN definida para Portugal pode ajudar.</p>`
}
},
{
id: 'public-vs-private-schools',
stage: 'settle',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'Ministry of Education',
date: '28.01.2026',
title: { en: 'Public vs. Private Schools', tr: 'Devlet Okulları ve Özel Okullar', pt: 'Escolas Públicas vs. Privadas' },
content: {
en: `<p class='mb-4'>Public schools in Portugal are free and generally high quality, but instruction is 100% in Portuguese. For older children (10+), the language barrier can be tough. Private international schools cost between €500 and €1,500 monthly.</p>
<p class='mb-4'>To register for public school, you need to go to the "Agrupamento de Escolas" in your residential area. Priority is given to students living in the neighborhood. The school year starts in mid-September.</p>`,
tr: `<p class='mb-4'>Portekiz'deki devlet okulları ücretsizdir ve genellikle kalitelidir, ancak eğitim %100 Portekizcedir. Daha büyük çocuklar (10+) için dil bariyeri zorlayıcı olabilir. Özel uluslararası okulların aylık ücreti 500€ ile 1.500€ arasındadır.</p>
<p class='mb-4'>Devlet okuluna kayıt olmak için ikamet bölgenizdeki "Agrupamento de Escolas"a gitmeniz gerekir. Öncelik mahallede yaşayan öğrencilere verilir. Okul yılı Eylül ortasında başlar.</p>`,
pt: `<p class='mb-4'>As escolas públicas são gratuitas e de boa qualidade, mas o ensino é 100% em português. Para crianças mais velhas (10+), a barreira linguística é difícil. Escolas internacionais custam entre 500€ e 1.500€ mensais.</p>
<p class='mb-4'>Para se inscrever na escola pública, deve ir ao "Agrupamento de Escolas" da sua área. A prioridade é dada a alunos residentes no bairro. O ano letivo começa em meados de setembro.</p>`
}
},
{
id: 'capital-gains-real-estate',
stage: 'settle',
category: { en: 'Finance & Tax', tr: 'Finans & Vergi', pt: 'Finanças e Impostos' },
source: 'Finance Experts',
date: '12.02.2026',
title: { en: 'Capital Gains on Property', tr: 'Gayrimenkulde Değer Artış Kazancı', pt: 'Mais-Valias Imobiliárias' },
content: {
en: `<p class='mb-4'>If you sell a property in Portugal, you pay tax on the profit (Mais-Valias). Residents are taxed on 50% of the gain at their progressive IRS rate. Non-residents used to be taxed on 100%, but laws have shifted to equalize this.</p>
<p class='mb-4'>You can avoid this tax if you reinvest the proceeds into another permanent home in Portugal (or the EU) within 36 months. You must declare the intention to reinvest in your tax return for the year of the sale.</p>`,
tr: `<p class='mb-4'>Portekiz'de mülk satarsanız, kâr üzerinden vergi (Mais-Valias) ödersiniz. Mukimler, kazancın %50'si üzerinden artan oranlı IRS dilimine göre vergilendirilir. Mukim olmayanlar eskiden %100 üzerinden vergilendirilirdi ancak yasalar eşitlendi.</p>
<p class='mb-4'>Geliri 36 ay içinde Portekiz'de (veya AB'de) başka bir daimi konuta yatırırsanız bu vergiden kaçınabilirsiniz. Satışın yapıldığı yılın vergi beyannamesinde yeniden yatırım yapma niyetinizi beyan etmelisiniz.</p>`,
pt: `<p class='mb-4'>Se vender um imóvel, paga imposto sobre o lucro (Mais-Valias). Residentes são tributados em 50% do ganho à sua taxa de IRS. Não residentes eram tributados a 100%, mas as leis mudaram para igualar.</p>
<p class='mb-4'>Pode evitar este imposto se reinvestir o valor noutra habitação permanente em Portugal (ou na UE) em 36 meses. Deve declarar a intenção de reinvestir na declaração de IRS do ano da venda.</p>`
}
},
{
id: 'eu-pet-passport-conversion',
stage: 'settle',
category: { en: 'Family & Education', tr: 'Aile & Eğitim', pt: 'Família e Educação' },
source: 'Veterinarian Union',
date: '08.02.2026',
title: { en: 'Getting an EU Pet Passport', tr: 'AB Evcil Hayvan Pasaportu Almak', pt: 'Obter o Passaporte Animal UE' },
content: {
en: `<p class='mb-4'>Once you arrive with your pet using the Turkish paperwork, you should visit a local vet to convert it into an EU Pet Passport. This blue booklet allows you to travel freely within Europe without needing new titration tests for every trip.</p>
<p class='mb-4'>The cost is usually low (around €20-€40). The vet will register your pet in the national database (SIAC), which is mandatory by law for all dogs and cats residing in Portugal.</p>`,
tr: `<p class='mb-4'>Evcil hayvanınızla Türk evraklarını kullanarak geldikten sonra, bunu AB Evcil Hayvan Pasaportuna dönüştürmek için yerel bir veterinere gitmelisiniz. Bu mavi kitapçık, her seyahatte yeni titrasyon testlerine ihtiyaç duymadan Avrupa içinde özgürce gezmenizi sağlar.</p>
<p class='mb-4'>Maliyet genellikle düşüktür (yaklaşık 20€-40€). Veteriner, evcil hayvanınızı Portekiz'de yaşayan tüm kedi ve köpekler için yasal olarak zorunlu olan ulusal veritabanına (SIAC) kaydedecektir.</p>`,
pt: `<p class='mb-4'>Ao chegar com o seu animal usando a papelada turca, deve visitar um veterinário para converter para o Passaporte Animal da UE. Este livro azul permite viajar livremente na Europa sem novos testes de titulação.</p>
<p class='mb-4'>O custo é baixo (cerca de 20€-40€). O veterinário registará o animal na base de dados nacional (SIAC), o que é obrigatório por lei para todos os cães e gatos residentes em Portugal.</p>`
}
},
{
id: 'internet-fiber-contracts',
stage: 'settle',
category: { en: 'Daily Life', tr: 'Günlük Yaşam', pt: 'Vida Quotidiana' },
source: 'ANACOM',
date: '17.02.2026',
title: { en: 'Internet Contracts & Loyalty', tr: 'İnternet Sözleşmeleri ve Taahhüt', pt: 'Contratos de Internet e Fidelização' },
content: {
en: `<p class='mb-4'>Internet in Portugal is fast (Fiber is standard), but contracts are rigid. Almost all providers (MEO, NOS, Vodafone) require a 24-month loyalty period (Fidelização). Canceling early results in heavy fines.</p>
<p class='mb-4'>If you move houses, you can usually transfer the contract to the new address. If the provider cannot supply service at the new address, you <em>might</em> be able to cancel without penalty, but it requires a struggle with customer service.</p>`,
tr: `<p class='mb-4'>Portekiz'de internet hızlıdır (Fiber standarttır), ancak sözleşmeler katıdır. Neredeyse tüm sağlayıcılar (MEO, NOS, Vodafone) 24 aylık bir taahhüt süresi (Fidelização) ister. Erken iptal etmek ağır cezalara yol açar.</p>
<p class='mb-4'>Ev taşırsanız, sözleşmeyi genellikle yeni adrese nakledebilirsiniz. Sağlayıcı yeni adreste hizmet veremiyorsa, cezasız iptal edebilirsiniz <em>belki</em>, ancak bu müşteri hizmetleriyle bir mücadele gerektirir.</p>`,
pt: `<p class='mb-4'>A internet em Portugal é rápida (Fibra é padrão), mas os contratos são rígidos. Quase todos os operadores exigem uma fidelização de 24 meses. Cancelar mais cedo resulta em multas pesadas.</p>
<p class='mb-4'>Se mudar de casa, geralmente pode transferir o contrato. Se o operador não puder fornecer serviço na nova morada, <em>poderá</em> cancelar sem penalização, mas exige luta com o apoio ao cliente.</p>`
}
},
{
id: 'public-holidays-bridge-days',
stage: 'discover',
category: { en: 'Language & Culture', tr: 'Dil & Kültür', pt: 'Língua e Cultura' },
source: 'Community Insights',
date: '01.01.2026',
title: { en: 'Public Holidays & "Pontes"', tr: 'Resmi Tatiller ve "Köprüler"', pt: 'Feriados e Pontes' },
content: {
en: `<p class='mb-4'>Portugal has 13 mandatory public holidays. If a holiday falls on a Tuesday or Thursday, it is common practice to take the Monday or Friday off as well. This is called doing a "Ponte" (Bridge).</p>
<p class='mb-4'>Important dates include April 25th (Freedom Day) and June 10th (Portugal Day). Lisbon has a specific holiday on June 13th (St. Anthony), while Porto celebrates on June 24th (St. John). Government offices are closed on these days.</p>`,
tr: `<p class='mb-4'>Portekiz'de 13 zorunlu resmi tatil vardır. Tatil Salı veya Perşembe gününe denk gelirse, Pazartesi veya Cuma gününü de izinli geçirmek yaygındır. Buna "Ponte" (Köprü) yapmak denir.</p>
<p class='mb-4'>Önemli tarihler arasında 25 Nisan (Özgürlük Günü) ve 10 Haziran (Portekiz Günü) bulunur. Lizbon 13 Haziran'da (Aziz Anthony), Porto ise 24 Haziran'da (Aziz John) kendi tatilini kutlar. Devlet daireleri bu günlerde kapalıdır.</p>`,
pt: `<p class='mb-4'>Portugal tem 13 feriados obrigatórios. Se um feriado calhar à terça ou quinta, é comum tirar a segunda ou sexta de folga. A isto chama-se fazer uma "Ponte".</p>
<p class='mb-4'>Datas importantes incluem 25 de Abril (Liberdade) e 10 de Junho (Dia de Portugal). Lisboa tem feriado a 13 de Junho (Santo António) e o Porto a 24 de Junho (São João). Repartições públicas fecham nestes dias.</p>`
}
}


];