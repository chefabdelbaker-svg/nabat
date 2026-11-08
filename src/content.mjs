// ==========================================================================
// NABATE — Contenu éditorial EN / FR / AR
// Chaque texte est une triade L(en, fr, ar). Modifier ici, puis `npm run build`.
// Les affirmations factuelles sur le chef proviennent de ses propres déclarations (voir PLACEHOLDERS.md).
// ==========================================================================
export const L = (en, fr, ar) => ({ en, fr, ar });

export const C = {
  meta: {
    home: {
      title: L('NABATE — Bakery · Coffee · Culture', 'NABATE — Boulangerie · Café · Culture', 'نبت — مخبز · قهوة · ثقافة'),
      desc: L('NABATE: an artisan bakery and coffee house born of the Nabataean spirit, carried by a chef with twenty years of craft. Origin by NABATE is its professional space.',
              'NABATE : une maison artisanale du pain et du café, née de l\'esprit nabatéen, portée par un chef de vingt ans de métier. Origin by NABATE est son espace professionnel.',
              'نبت: بيت حِرَفي للخبز والقهوة وُلد من روح الأنباط، يحمله شيف بخبرة عشرين عامًا. وOrigin by NABATE هو فضاؤه المهني.')
    },
    origin: {
      title: L('Origin by NABATE — Chef to Chef', 'Origin by NABATE — Chef to Chef', 'Origin by NABATE — Chef to Chef'),
      desc: L('The professional space of NABATE: premium bakery and pastry for hotels, restaurants, cafés and caterers. Catalogue, laboratory, partners, collaboration and pricing.',
              'L\'espace professionnel de NABATE : boulangerie et pâtisserie premium pour hôtels, restaurants, cafés et traiteurs. Catalogue, laboratoire, partenaires, collaboration et tarifs.',
              'الفضاء المهني لنبت: مخبوزات وحلويات فاخرة للفنادق والمطاعم والمقاهي ومقدّمي الضيافة. الكتالوج والمختبر والشركاء والتعاون والأسعار.')
    },
    catalogue: { title: L('Catalogue — Origin by NABATE', 'Catalogue — Origin by NABATE', 'الكتالوج — Origin by NABATE'),
      desc: L('Fifteen families of bakery and pastry, one standard. Browse the references and build your request.', 'Quinze familles de boulangerie et de pâtisserie, un seul standard. Parcourez les références et construisez votre demande.', 'خمس عشرة فئة من المخبوزات والحلويات، ومعيار واحد. تصفّح المنتجات وكوّن طلبك.') },
    laboratory: { title: L('Laboratory — Origin by NABATE', 'Laboratoire — Origin by NABATE', 'المختبر — Origin by NABATE'),
      desc: L('Professional production, artisan spirit: how a standard is built before the oven.', 'Production professionnelle, esprit artisan : comment se construit un standard avant le four.', 'إنتاج احترافي بروح حِرَفية: كيف يُبنى المعيار قبل الفرن.') },
    partners: { title: L('Partners — Origin by NABATE', 'Partenaires — Origin by NABATE', 'الشركاء — Origin by NABATE'),
      desc: L('Reference brands for equipment and ingredients, chosen for their consistency.', 'Des marques de référence pour l\'équipement et les ingrédients, choisies pour leur régularité.', 'علامات مرجعية للمعدات والمكوّنات، اختيرت لثباتها.') },
    collaborate: { title: L('Collaborate — Origin by NABATE', 'Collaborer — Origin by NABATE', 'التعاون — Origin by NABATE'),
      desc: L('Four levels of integration, from catalogue supply to white label, and a clear development method.', 'Quatre niveaux d\'intégration, de la fourniture catalogue à la marque blanche, et une méthode de développement claire.', 'أربعة مستويات للتعاون، من التوريد من الكتالوج إلى العلامة البيضاء، ومنهج تطوير واضح.') },
    pricing: { title: L('Pricing — Origin by NABATE', 'Tarifs — Origin by NABATE', 'الأسعار — Origin by NABATE'),
      desc: L('One product, one code, one price on quote. Volume tiers and the full code list.', 'Un produit, un code, un prix sur devis. Paliers de volume et liste complète des codes.', 'منتج واحد، رمز واحد، وسعر عند الطلب. شرائح الكميات وقائمة الرموز كاملة.') },
    start: { title: L('Start a project — Origin by NABATE', 'Démarrer un projet — Origin by NABATE', 'ابدأ مشروعك — Origin by NABATE'),
      desc: L('Tell us about your kitchen: volumes, formats, delivery. We build the answer around it.', 'Parlez-nous de votre cuisine : volumes, formats, livraison. Nous construisons la réponse autour.', 'حدّثنا عن مطبخك: الكميات والصيغ والتوصيل. نبني الجواب حوله.') }
  },

  splash: {
    hello: L('Welcome to', 'Bienvenue chez', 'أهلًا بكم في'),
    sub: L('Bakery · Café · Culture', 'Boulangerie · Café · Culture', 'مخبز · مقهى · ثقافة'),
    enter: L('Enter', 'Entrer', 'ادخل'),
    enterSound: L('Enter and listen', 'Entrer et écouter', 'ادخل واستمع')
  },
  ui: {
    listen: L('Listen to the presentation', 'Écouter la présentation', 'استمع إلى التقديم'),
    pause: L('Pause', 'Pause', 'إيقاف مؤقت'),
    skip: L('Skip to content', 'Aller au contenu', 'تخطَّ إلى المحتوى'),
    menuOpen: L('Open menu', 'Ouvrir le menu', 'افتح القائمة'),
    menuClose: L('Close menu', 'Fermer le menu', 'أغلق القائمة'),
    langLabel: L('Language', 'Langue', 'اللغة'),
    langNames: { fr: 'Français', en: 'English', ar: 'العربية' },
    cta: L('Get in touch', 'Nous contacter', 'تواصل معنا'),
    wa: L('WhatsApp', 'WhatsApp', 'واتساب'),
    call: L('Call', 'Appeler', 'اتصال'),
    message: L('Message', 'Écrire', 'راسلنا'),
    backToNabat: L('NABATE', 'NABATE', 'NABATE'),
    illustrative: L('Illustrative visuals', 'Visuels d\'illustration', 'صور توضيحية'),
    rights: L('All rights reserved.', 'Tous droits réservés.', 'جميع الحقوق محفوظة.'),
    brandsNote: L('Brands mentioned belong to their respective owners.', 'Les marques citées appartiennent à leurs propriétaires respectifs.', 'العلامات المذكورة مملوكة لأصحابها.')
  },

  nav: {
    house: L('The house', 'La maison', 'البيت'),
    menu: L('Menu', 'Menu', 'القائمة'),
    craft: L('Bread & Coffee', 'Pain & Café', 'الخبز والقهوة'),
    chef: L('The chef', 'Le chef', 'الشيف'),
    vision: L('Vision', 'Vision', 'الرؤية'),
    origin: L('B2B · Origin by NABATE', 'B2B · Origin by NABATE', 'B2B · Origin by NABATE'),
    contact: L('Contact', 'Contact', 'تواصل'),
    oHome: L('Origin', 'Origin', 'Origin'),
    catalogue: L('Catalogue', 'Catalogue', 'الكتالوج'),
    laboratory: L('Laboratory', 'Laboratoire', 'المختبر'),
    partners: L('Partners', 'Partenaires', 'الشركاء'),
    collaborate: L('Collaborate', 'Collaborer', 'التعاون'),
    pricing: L('Pricing', 'Tarifs', 'الأسعار'),
    start: L('Start a project', 'Démarrer un projet', 'ابدأ مشروعك')
  },

  // ---------------------------------------------------------------- FAÇADE
  hero: {
    eyebrow: L('Bakery · Coffee · Culture', 'Boulangerie · Café · Culture', 'مخبز · قهوة · ثقافة'),
    tagline: L('The journey of wheat, the birth of bread.', 'Le voyage du blé, la naissance du pain.', 'رحلة القمح، وولادة الخبز.'),
    cta1: L('Discover the house', 'Découvrir la maison', 'اكتشف البيت'),
    cta2: L('B2B · Origin by NABATE', 'B2B · Origin by NABATE', 'B2B · Origin by NABATE'),
    scroll: L('Scroll', 'Défiler', 'مرِّر')
  },
  marquee: [
    L('Bread', 'Pain', 'الخبز'), L('Coffee', 'Café', 'القهوة'), L('Viennoiserie', 'Viennoiserie', 'الفينواسري'),
    L('Pastry', 'Pâtisserie', 'الحلويات'), L('Hospitality', 'Hospitalité', 'الضيافة'), L('Time', 'Temps', 'الوقت')
  ],
  manifesto: {
    eyebrow: L('The house', 'La maison', 'البيت'),
    title: L('A bakery born of a road.', 'Une boulangerie née d\'une route.', 'مخبز وُلد من طريق.'),
    lines: [
      L('They built no empires. They built <em>roads</em>.', 'Ils n\'ont pas bâti des empires. Ils ont bâti des <em>routes</em>.', 'لم يبنوا إمبراطوريات. بنَوا <em>طرقًا</em>.'),
      L('They conquered no peoples. They <em>connected</em> them.', 'Ils n\'ont pas conquis des peuples. Ils les ont <em>reliés</em>.', 'لم يغزوا الشعوب. <em>وصلوا</em> بينها.'),
      L('They were called the Nabataeans. Their spirit became ours.', 'Ils s\'appelaient les Nabatéens. Leur esprit est devenu le nôtre.', 'كانوا يُسمَّون الأنباط. وصارت روحهم روحنا.')
    ],
    after: L('At NABATE we own nothing: not the bread, which began thousands of years before us, nor the coffee, born in Ethiopia and carried through Yemen. What belongs to us is the link between these stories. NABATE is the bridge, the keeper of the halt on the road.',
             'Chez NABATE, nous ne possédons rien : ni le pain, né des millénaires avant nous, ni le café, venu d\'Éthiopie par le Yémen. Ce qui nous appartient, c\'est le lien entre ces histoires. NABATE est le pont, le passeur, la halte sur la route.',
             'في نبت لا نملك شيئًا: لا الخبز الذي وُلد قبل آلاف السنين، ولا القهوة التي جاءت من إثيوبيا عبر اليمن. ما نملكه هو الرابط بين هذه الحكايات. نبت هو الجسر، وهو المحطة على الطريق.'),
    sign: L('The caravan never stops. It only rests.', 'La caravane n\'est jamais à l\'arrêt. Elle fait juste une halte.', 'القافلة لا تتوقف أبدًا. إنها فقط تستريح.')
  },
  ambassadors: {
    eyebrow: L('Two ambassadors', 'Deux ambassadeurs', 'سفيران'),
    title: L('Bread and coffee, two languages of one house.', 'Le pain et le café, deux langages d\'une même maison.', 'الخبز والقهوة، لغتان لبيت واحد.'),
    bread: { name: L('Bread', 'Le pain', 'الخبز'), sub: L('The memory of the earth', 'La mémoire de la terre', 'ذاكرة الأرض'),
      text: L('The sourdough fed every day, the crust that crackles, the crumb still warm. The moment bread is torn is prepared hours before you arrive.',
              'Le levain nourri chaque jour, la croûte qui craque, la mie encore tiède. Ce moment où l\'on rompt le pain se prépare des heures avant votre arrivée.',
              'العجين المخمَّر يُغذّى كل يوم، والقشرة التي تتكسّر، والفتات الدافئ. لحظة كسر الخبز تُحضَّر قبل وصولك بساعات.') },
    coffee: { name: L('Coffee', 'Le café', 'القهوة'), sub: L('The road in a cup', 'La route dans la tasse', 'الطريق في فنجان'),
      text: L('Ethiopia gave the bean, Yemen the roast, Arabia the qahwa. Offering coffee is the oldest gesture of hospitality here, and the most contemporary.',
              'L\'Éthiopie a donné le grain, le Yémen la torréfaction, l\'Arabie la qahwa. Offrir un café est le plus ancien geste d\'hospitalité de la région, et le plus contemporain.',
              'أعطت إثيوبيا الحبّة، واليمن التحميص، والجزيرة العربية القهوة. تقديم القهوة أقدم أفعال الضيافة هنا، وأكثرها معاصرة.') }
  },
  formula: {
    eyebrow: L('The compass', 'La boussole', 'البوصلة'),
    title: L('Four lines, one philosophy of time.', 'Quatre lignes, une philosophie du temps.', 'أربعة أسطر، وفلسفة واحدة للوقت.'),
    items: [
      { t: L('The past is the foundation', 'Le passé est la fondation', 'الماضي هو الأساس'),
        p: L('The history of bread and of roads gives depth to every product. It is felt in the taste, never staged.', 'L\'histoire du pain et des routes donne de la profondeur à chaque produit. Elle se ressent, elle ne se met pas en scène.', 'تاريخ الخبز والطرق يمنح كل منتج عمقه. يُحَسّ في الطعم ولا يُعرَض كمشهد.') },
      { t: L('The Nabataeans are the spark', 'Les Nabatéens sont l\'étincelle', 'الأنباط هم الشرارة'),
        p: L('Builders of links, travellers, carriers of grain and know-how. Their spirit inspires NABATE; it is not its museum.', 'Bâtisseurs de liens, voyageurs, passeurs de grains et de savoir-faire. Leur esprit inspire NABATE, il n\'en est pas le musée.', 'بُناة الروابط والمسافرون، وناقلو الحبوب والخبرة. روحهم تُلهم نبت ولا تحوّله إلى متحف.') },
      { t: L('Time is the thread', 'Le temps est le fil conducteur', 'الوقت هو الخيط الناظم'),
        p: L('The long time of the craft, the human time of the encounter. We respect both and oppose neither.', 'Le temps long du geste artisanal, le temps humain de la rencontre. Nous respectons les deux, sans les opposer.', 'الوقت الطويل للحرفة، والوقت الإنساني للّقاء. نحترمهما معًا دون أن نجعلهما ضدّين.') },
      { t: L('Bread and coffee are the ambassadors', 'Le pain et le café sont les ambassadeurs', 'الخبز والقهوة سفيران'),
        p: L('Bread is memory and anchor. Coffee is journey and encounter. Together they tell the whole of NABATE.', 'Le pain est mémoire et ancrage. Le café est voyage et rencontre. Ensemble, ils racontent tout NABATE.', 'الخبز ذاكرة وجذور. والقهوة سفر ولقاء. معًا يحكيان نبت كلّه.') }
    ]
  },
  chef: {
    eyebrow: L('The chef', 'Le chef', 'الشيف'),
    name: 'Abdelhafid Arbi',
    role: L('Chef entrepreneur and international consultant', 'Chef entrepreneur et consultant international', 'شيف ورائد أعمال ومستشار دولي'),
    intro: L('Twenty years in the trade. A French-trained baker and pastry chef who has built, trained and advised, in France and abroad, notably in Uruguay and Saudi Arabia. NABATE carries that experience: demanding in the dough, generous at the table.',
             'Vingt ans de métier. Boulanger-pâtissier formé en France, il a construit, formé et conseillé, en France et à l\'international, notamment en Uruguay et en Arabie saoudite. NABATE porte cette expérience : exigeant dans la pâte, généreux à table.',
             'عشرون عامًا في المهنة. خبّاز وحلوانيّ تكوّن في فرنسا، بنى ودرّب واستشار في فرنسا وخارجها، ولا سيما في الأوروغواي والمملكة العربية السعودية. ونبت يحمل هذه الخبرة: صارمٌ في العجين، كريمٌ على المائدة.'),
    stats: [
      { n: 20, s: '', l: L('years of craft', 'ans de métier', 'عامًا من الحرفة') },
      { n: 5, s: '+', l: L('countries of consulting', 'pays de conseil', 'دول من الاستشارات') },
      { n: 2019, s: '', l: L('World Pain au Chocolat Championship', 'Championnat du Monde du Pain au Chocolat', 'بطولة العالم لبان أو شوكولا') }
    ],
    facts: [
      L('Trained in France at the INBP: CAP Boulanger, CAP Pâtissier, CQP Tourier.', 'Formé en France à l\'INBP : CAP Boulanger, CAP Pâtissier, CQP Tourier.', 'تكوّن في فرنسا بمعهد INBP: شهادة خبّاز CAP، وحلوانيّ CAP، وCQP تويرييه.'),
      L('Trained under Meilleur Ouvrier de France Olivier Magne.', 'Formé auprès du Meilleur Ouvrier de France Olivier Magne.', 'تدرّب على يد أفضل عامل في فرنسا (MOF) أوليفييه ماني.'),
      L('Selected for the 2019 World Pain au Chocolat Championship.', 'Sélectionné pour le Championnat du Monde du Pain au Chocolat 2019.', 'اختير للمشاركة في بطولة العالم لبان أو شوكولا 2019.'),
      L('Took part in opening four Croi Bakehouse shops and in training more than 150 team members.', 'A participé à l\'ouverture de quatre boutiques Croi Bakehouse et à la formation de plus de 150 collaborateurs.', 'شارك في افتتاح أربعة فروع لـ Croi Bakehouse وفي تدريب أكثر من 150 موظفًا.'),
      L('Founded a bakery in Uruguay, today four branches.', 'A fondé une boulangerie en Uruguay, aujourd\'hui quatre points de vente.', 'أسّس مخبزًا في الأوروغواي، صار اليوم أربعة فروع.'),
      L('Consulting missions in France, Uruguay, Morocco, Bahrain, Algeria and Saudi Arabia.', 'Missions de conseil en France, en Uruguay, au Maroc, à Bahreïn, en Algérie et en Arabie saoudite.', 'مهام استشارية في فرنسا والأوروغواي والمغرب والبحرين والجزائر والمملكة العربية السعودية.')
    ],
    photoAlt: L('Portrait of Abdelhafid Arbi', 'Portrait d\'Abdelhafid Arbi', 'صورة عبد الحفيظ عربي'),
    photoSoon: L('Portrait of the chef · photo coming', 'Portrait du chef · photo à venir', 'صورة الشيف · قريبًا')
  },
  gesture: {
    eyebrow: L('The craft', 'Le geste', 'الحرفة'),
    title: L('Time, folded layer by layer.', 'Le temps, plié couche après couche.', 'الوقت، مطويًّا طبقةً بعد طبقة.'),
    text: L('Fermentation needs time. Lamination needs time. Roasting needs time. At NABATE, the time we give to things can be felt in what you receive.',
            'La fermentation a besoin de temps. Le laminage a besoin de temps. La torréfaction a besoin de temps. Chez NABATE, le temps que nous donnons aux choses se ressent dans ce que vous en recevez.',
            'التخمير يحتاج وقتًا. والتصفيح يحتاج وقتًا. والتحميص يحتاج وقتًا. في نبت، الوقت الذي نمنحه للأشياء تشعر به فيما تتلقّاه.'),
    tags: [L('Sourdough', 'Levain', 'العجين المخمَّر'), L('Viennoiserie', 'Viennoiserie', 'الفينواسري'), L('Pastry', 'Pâtisserie', 'الحلويات'), L('Coffee', 'Café', 'القهوة'), L('Hospitality', 'Hospitalité', 'الضيافة')],
    alt: L('A butter croissant cut open to show its lamination', 'Un croissant coupé en deux montrant son feuilletage', 'كرواسون مقطوع نصفين يُظهر طبقاته')
  },
  vision: {
    eyebrow: L('Vision', 'Vision', 'الرؤية'),
    title: L('A house built to travel.', 'Une maison conçue pour voyager.', 'بيت صُمِّم ليسافر.'),
    lead: L('A craft kept intact at every scale. One standard, several ways to meet it.', 'Un artisanat préservé à chaque échelle. Un seul standard, plusieurs façons de le rencontrer.', 'حرفة محفوظة على كل نطاق. معيار واحد، وعدّة طرق للقائه.'),
    steps: [
      { k: L('01 · Craft', '01 · Le geste', '01 · الحرفة'), t: L('The workshop', 'L\'atelier', 'الورشة'),
        p: L('Recipes, gestures and quality checks written down once, so the house never depends on a mood or a day.', 'Recettes, gestes et contrôles qualité écrits une fois pour toutes : la maison ne dépend jamais d\'une humeur ni d\'un jour.', 'وصفات وحركات ومعايير جودة تُكتب مرة واحدة، فلا يتوقف البيت على مزاجٍ أو يوم.') },
      { k: L('02 · Houses', '02 · Les maisons', '02 · البيوت'), t: L('The NABATE houses', 'Les maisons NABATE', 'بيوت نبت'),
        p: L('Boutiques and café-bakeries where bread, viennoiserie, pastry and coffee are served with the same hospitality.', 'Boutiques et café-boulangeries où pain, viennoiserie, pâtisserie et café sont servis avec la même hospitalité.', 'متاجر ومخابز-مقاهٍ يُقدَّم فيها الخبز والفينواسري والحلويات والقهوة بالضيافة نفسها.') },
      { k: L('03 · Network', '03 · Le réseau', '03 · الشبكة'), t: L('A network', 'Un réseau', 'شبكة'),
        p: L('A central production backbone and trusted partners to carry the standard further, city after city.', 'Une colonne vertébrale de production centrale et des partenaires de confiance pour porter le standard plus loin, ville après ville.', 'عمود فقري إنتاجي مركزي وشركاء موثوقون يحملون المعيار أبعد، مدينةً بعد مدينة.') }
    ],
    note: L('NABATE is presented here as a vision. Details are shared in person.', 'NABATE est présenté ici comme une vision. Les détails se partagent en personne.', 'يُعرَض نبت هنا كرؤية. وتُشارَك التفاصيل لقاءً.')
  },
  teaser: {
    eyebrow: L('For professionals', 'Pour les professionnels', 'للمحترفين'),
    title: L('Chef to Chef.', 'Chef to Chef.', 'Chef to Chef.'),
    lead: L('Premium bakery and pastry, a production laboratory and clear ways to collaborate, for hotels, restaurants, cafés and caterers. By a chef, with chefs.',
            'Boulangerie et pâtisserie premium, un laboratoire de production et des façons claires de collaborer, pour hôtels, restaurants, cafés et traiteurs. Par un chef, avec des chefs.',
            'مخبوزات وحلويات فاخرة، ومختبر إنتاج، وطرق واضحة للتعاون، للفنادق والمطاعم والمقاهي ومقدّمي الضيافة. من شيف، مع الشيفات.'),
    cta: L('Enter Origin', 'Entrer dans Origin', 'ادخل Origin'),
    cta2: L('Start a project', 'Démarrer un projet', 'ابدأ مشروعك'),
    mini: [L('Catalogue', 'Catalogue', 'الكتالوج'), L('Laboratory', 'Laboratoire', 'المختبر'), L('Partners', 'Partenaires', 'الشركاء'), L('Pricing', 'Tarifs', 'الأسعار')]
  },
  contact: {
    eyebrow: L('Contact', 'Contact', 'تواصل'),
    title: L('Let\'s talk.', 'Parlons-en.', 'لنتحدّث.'),
    text: L('A question, a partnership, a project: reach us directly.', 'Une question, un partenariat, un projet : écrivez-nous directement.', 'سؤال أو شراكة أو مشروع: تواصل معنا مباشرة.'),
    labels: { wa: L('WhatsApp', 'WhatsApp', 'واتساب'), call: L('Call', 'Appel', 'اتصال'), mail: L('E-mail', 'E-mail', 'البريد الإلكتروني') },
    form: {
      name: L('Your name', 'Votre nom', 'اسمك'),
      company: L('Company or role', 'Société ou fonction', 'الشركة أو الصفة'),
      interest: L('I am interested in', 'Je suis intéressé par', 'أنا مهتم بـ'),
      interests: [
        L('Discovering NABATE', 'Découvrir NABATE', 'التعرّف على نبت'),
        L('A partnership or investment', 'Un partenariat ou un investissement', 'شراكة أو استثمار'),
        L('Professional supply (Origin)', 'Une fourniture professionnelle (Origin)', 'توريد مهني (Origin)'),
        L('Something else', 'Autre chose', 'شيء آخر')
      ],
      phone: L('Phone or WhatsApp', 'Téléphone ou WhatsApp', 'الهاتف أو واتساب'),
      message: L('Message', 'Message', 'الرسالة'),
      sendWa: L('Send via WhatsApp', 'Envoyer par WhatsApp', 'أرسل عبر واتساب'),
      sendMail: L('Send by e-mail', 'Envoyer par e-mail', 'أرسل بالبريد'),
      note: L('Your message opens in WhatsApp or your mail app, ready to send. Nothing is stored on this site.', 'Votre message s\'ouvre dans WhatsApp ou votre messagerie, prêt à envoyer. Rien n\'est enregistré sur ce site.', 'تُفتح رسالتك في واتساب أو تطبيق البريد جاهزةً للإرسال. لا يُخزَّن شيء على هذا الموقع.')
    },
    s: {
      greet: L('Hello NABATE, I would like to get in touch.', 'Bonjour NABATE, je souhaite vous contacter.', 'مرحبًا نبت، أودّ التواصل معكم.'),
      lName: L('Name', 'Nom', 'الاسم'), lCompany: L('Company / role', 'Société / fonction', 'الشركة / الصفة'),
      lInterest: L('Interest', 'Intérêt', 'الاهتمام'), lPhone: L('Phone', 'Téléphone', 'الهاتف'), lMessage: L('Message', 'Message', 'الرسالة'),
      needName: L('Please add your name.', 'Merci d\'indiquer votre nom.', 'يُرجى كتابة اسمك.'),
      subject: L('Contact — NABATE', 'Contact — NABATE', 'تواصل — NABATE')
    }
  },
  footer: {
    tag: L('Bakery · Coffee · Culture', 'Boulangerie · Café · Culture', 'مخبز · قهوة · ثقافة'),
    house: L('The house', 'La maison', 'البيت'),
    pro: L('B2B · Origin by NABATE', 'B2B · Origin by NABATE', 'B2B · Origin by NABATE'),
    contact: L('Contact', 'Contact', 'تواصل')
  },

  // ---------------------------------------------------------------- ORIGIN
  o: {
    home: {
      badge: L('Origin by NABATE', 'Origin by NABATE', 'Origin by NABATE'),
      h1: 'Chef to Chef',
      lead: L('Premium bakery and pastry, made to professional standards, for the kitchens, counters and tables of those who serve others.',
              'Boulangerie et pâtisserie premium, pensées pour les exigences professionnelles, pour les cuisines, comptoirs et tables de ceux qui servent les autres.',
              'مخبوزات وحلويات فاخرة، صُمّمت لمعايير المحترفين، لمطابخ ومنصّات وموائد من يخدمون الآخرين.'),
      cta1: L('View the catalogue', 'Voir le catalogue', 'تصفّح الكتالوج'),
      cta2: L('Start a project', 'Démarrer un projet', 'ابدأ مشروعك'),
      whyEyebrow: L('Our approach', 'Notre approche', 'نهجنا'),
      whyTitle: L('A partner, not a supplier.', 'Un partenaire, pas un fournisseur.', 'شريك لا مورّد.'),
      why: [
        { k: '01', t: L('We listen first', 'On écoute d\'abord', 'نُصغي أولًا'),
          p: L('We work like a chef\'s brigade: your kitchen, your volumes and your constraints come before any proposal.', 'Nous travaillons comme une brigade : votre cuisine, vos volumes et vos contraintes passent avant toute proposition.', 'نعمل كفريق مطبخ: مطبخك وكمياتك وقيودك تسبق أي اقتراح.') },
        { k: '02', t: L('Every product is a system', 'Chaque produit est un système', 'كل منتج منظومة'),
          p: L('Recipe, format, packaging, delivery rhythm: each reference is defined, documented and repeatable.', 'Recette, format, emballage, rythme de livraison : chaque référence est définie, documentée et reproductible.', 'وصفة وصيغة وتغليف وإيقاع توصيل: كل منتج محدَّد وموثَّق وقابل للتكرار.') },
        { k: '03', t: L('Quality arrives on time', 'La qualité arrive à l\'heure', 'الجودة تصل في موعدها'),
          p: L('The right product, in the right quantity, in the right conditions, at the agreed time. Every time.', 'Le bon produit, en bonne quantité, dans les bonnes conditions, à l\'heure convenue. À chaque fois.', 'المنتج الصحيح، بالكمية الصحيحة، في الظروف الصحيحة، في الوقت المتفق عليه. في كل مرة.') }
      ],
      stats: [
        { n: 15, l: L('product families', 'familles de produits', 'فئة منتجات') },
        { n: 210, s: '', l: L('references in the catalogue', 'références au catalogue', 'منتج في الكتالوج') },
        { n: 4, l: L('levels of collaboration', 'niveaux de collaboration', 'مستويات للتعاون') },
        { n: 3, l: L('languages', 'langues', 'لغات') }
      ],
      catTitle: L('The catalogue', 'Le catalogue', 'الكتالوج'),
      catText: L('From viennoiserie to semi-finished products, fifteen families built around the real needs of professional kitchens.', 'De la viennoiserie aux semi-finis, quinze familles construites autour des vrais besoins des cuisines professionnelles.', 'من الفينواسري إلى المنتجات نصف المصنّعة، خمس عشرة فئة مبنية على احتياجات المطابخ المهنية الفعلية.'),
      labTitle: L('The laboratory', 'Le laboratoire', 'المختبر'),
      labText: L('Where a standard is built before the oven: raw materials, baking programmes, finishing.', 'Là où se construit un standard avant le four : matières premières, programmes de cuisson, finition.', 'حيث يُبنى المعيار قبل الفرن: المواد الأولية وبرامج الخَبز واللمسة الأخيرة.'),
      more: L('Discover', 'Découvrir', 'اكتشف'),
      ctaTitle: L('Tell us about your kitchen.', 'Parlez-nous de votre cuisine.', 'حدّثنا عن مطبخك.')
    },
    catalogue: {
      eyebrow: L('Catalogue', 'Catalogue', 'الكتالوج'),
      h1: L('What we make, what we build.', 'Ce que nous faisons, ce que nous construisons.', 'ما نصنعه وما نبنيه.'),
      lead: L('Fifteen families, one standard. Add references to your request and we build the quote around your kitchen.', 'Quinze familles, un seul standard. Ajoutez des références à votre demande, nous construisons le devis autour de votre cuisine.', 'خمس عشرة فئة، ومعيار واحد. أضِف المنتجات إلى طلبك ونبني العرض حول مطبخك.'),
      search: L('Search a product or a code', 'Chercher un produit ou une référence', 'ابحث عن منتج أو رمز'),
      all: L('All', 'Tout', 'الكل'),
      refs: L('references', 'références', 'منتجًا'),
      add: L('Add', 'Ajouter', 'أضِف'),
      added: L('Added', 'Ajouté', 'أُضيف'),
      empty: L('No product matches. Try another word, or ask for a custom development.', 'Aucun produit ne correspond. Essayez un autre mot, ou demandez un développement sur mesure.', 'لا يوجد منتج مطابق. جرّب كلمة أخرى، أو اطلب تطويرًا خاصًا.'),
      note: L('Catalogue under construction: the deployment order of the families and the formats are confirmed with each partner. Photos are illustrative.', 'Catalogue en construction : l\'ordre de déploiement des familles et les formats sont à confirmer avec chaque partenaire. Photos indicatives.', 'الكتالوج قيد الإنشاء: ترتيب إطلاق الفئات والصيغ يُؤكَّد مع كل شريك. الصور توضيحية.'),
      imgNone: L('Photo coming', 'Photo à venir', 'الصورة قريبًا')
    },
    lab: {
      eyebrow: L('The laboratory', 'Le laboratoire', 'المختبر'),
      h1: L('Professional production. Artisan spirit.', 'Production professionnelle. Esprit artisan.', 'إنتاج احترافي. روح حِرَفية.'),
      lead: L('Mechanise the process, keep the gesture. That is how a craft stays itself at scale.', 'Mécaniser le process, préserver le geste. C\'est ainsi qu\'un artisanat reste lui-même à l\'échelle.', 'نُميكِن العملية ونحفظ الحركة. هكذا تبقى الحرفة على حالها مهما كبر الحجم.'),
      blocks: [
        { t: L('Everything is decided before the oven', 'Tout se décide avant le four', 'كل شيء يُحسَم قبل الفرن'),
          p: L('Butter, flour, eggs, milk: selected, weighed and traced before each batch. Consistency begins upstream.', 'Beurre, farine, œufs, lait : sélectionnés, pesés et tracés avant chaque lot. La régularité commence en amont.', 'الزبدة والطحين والبيض والحليب: تُنتقى وتُوزن وتُتتبَّع قبل كل دفعة. الثبات يبدأ من المنبع.'),
          img: 'lab_a', alt: L('Raw materials and worktop', 'Matières premières et plan de travail', 'مواد أولية وسطح عمل') },
        { t: L('Baking, set to the detail', 'La cuisson, réglée au détail', 'الخَبز، مضبوط بالتفصيل'),
          p: L('Professional ovens and baking programmes defined product by product, so the tenth batch matches the first.', 'Des fours professionnels et des programmes de cuisson définis produit par produit, pour que le dixième lot ressemble au premier.', 'أفران احترافية وبرامج خَبز محدَّدة لكل منتج، لتشبه الدفعة العاشرة الدفعة الأولى.'),
          img: 'lab_b', alt: L('A professional oven at work', 'Un four professionnel au travail', 'فرن احترافي أثناء العمل') },
        { t: L('Ready to sell, in your image', 'Prêt à vendre, à votre image', 'جاهز للبيع، بصورتك'),
          p: L('Each reference leaves finished and packed: boxes, labels, formats, even under your own brand when you wish.', 'Chaque référence part finie et emballée : coffrets, étiquettes, formats, et même sous votre propre marque si vous le souhaitez.', 'كل منتج يخرج جاهزًا ومغلَّفًا: علب وملصقات وصيغ، وحتى بعلامتك الخاصة إن رغبت.'),
          img: 'bongard', alt: L('Dough and baking equipment', 'Pâte et équipement de cuisson', 'عجين ومعدات خَبز') }
      ],
      stdTitle: L('What defines our standard', 'Ce qui définit notre standard', 'ما يحدّد معيارنا'),
      std: [
        { t: L('Standardisation', 'Standardisation', 'التوحيد'), p: L('The recipe belongs to the system, not to a person: it is written, weighed and repeated.', 'La recette appartient au système, pas à une personne : elle est écrite, pesée, répétée.', 'الوصفة ملك المنظومة لا الأشخاص: تُكتب وتُوزن وتُكرَّر.') },
        { t: L('Food safety', 'Sécurité alimentaire', 'سلامة الغذاء'), p: L('Quality is checked, not assumed. Composition, allergens, shelf life and storage conditions are provided for each product.', 'La qualité est contrôlée, pas supposée. Composition, allergènes, durée de vie et conservation fournis pour chaque produit.', 'الجودة تُراقَب ولا تُفترَض. التركيب ومسبّبات الحساسية ومدة الصلاحية وشروط الحفظ لكل منتج.') },
        { t: L('Raw materials', 'Matières premières', 'المواد الأولية'), p: L('Ingredients worthy of the premium: reference houses, constant quality, traced lots.', 'Des ingrédients à la hauteur du premium : maisons de référence, qualité constante, lots tracés.', 'مكوّنات بمستوى الفخامة: بيوت مرجعية، وجودة ثابتة، ودفعات مُتتبَّعة.') },
        { t: L('The French gesture', 'Le geste français', 'الحركة الفرنسية'), p: L('French-trained craft at the heart of the process: lamination, fermentation, finishing.', 'Un savoir-faire de formation française au cœur du process : laminage, fermentation, finition.', 'حرفة بتكوين فرنسي في قلب العملية: التصفيح والتخمير واللمسة الأخيرة.') }
      ],
      caption: L('Illustrative visual', 'Visuel d\'illustration', 'صورة توضيحية')
    },
    partners: {
      eyebrow: L('Partners', 'Partenaires', 'الشركاء'),
      h1: L('Reference brands, a constant standard.', 'Des marques de référence, un standard constant.', 'علامات مرجعية، ومعيار ثابت.'),
      lead: L('Every NABATE product rests on reference raw materials and equipment, chosen from houses known for their consistency.', 'Chaque produit NABATE repose sur des matières premières et des équipements de référence, choisis auprès de maisons reconnues pour leur régularité.', 'يقوم كل منتج من نبت على مواد ومعدات مرجعية، اختيرت من بيوت معروفة بثباتها.'),
      eqTitle: L('Equipment', 'Équipement', 'المعدات'),
      ingTitle: L('Ingredients', 'Ingrédients', 'المكوّنات'),
      list: [
        { id: 'bongard-me', name: 'Bongard Middle East', kind: L('Ovens', 'Fours', 'الأفران'), p: L('Professional French ovens for bakery and pastry.', 'Fours professionnels français pour la boulangerie et la pâtisserie.', 'أفران فرنسية احترافية للمخابز والحلويات.'), group: 'eq' },
        { id: 'restofair', name: 'Restofair Saudi Arabia', kind: L('Small equipment and moulds', 'Petit équipement et moules', 'المعدات الصغيرة والقوالب'), p: L('Reseller of small equipment and moulds for bakery and pastry.', 'Revendeur de petit équipement et de moules pour la boulangerie et la pâtisserie.', 'موزّع للمعدات الصغيرة والقوالب للمخابز والحلويات.'), group: 'eq' },
        { id: 'gmp', name: 'Grands Moulins de Paris', kind: L('Flour', 'Farine', 'الطحين'), p: L('French flours for bakery and pastry.', 'Farines françaises pour la boulangerie et la pâtisserie.', 'طحين فرنسي للمخابز والحلويات.'), group: 'ing' },
        { id: 'valrhona', name: 'Valrhona', kind: L('Chocolate', 'Chocolat', 'الشوكولاتة'), p: L('Couverture chocolates for professional pastry.', 'Chocolats de couverture pour la pâtisserie professionnelle.', 'شوكولاتة كوفرتير للحلويات الاحترافية.'), group: 'ing' },
        { id: 'elle-vire', name: 'Elle & Vire', kind: L('Butter and cream', 'Beurre et crème', 'الزبدة والقشطة'), p: L('Butters and creams for pastry and viennoiserie.', 'Beurres et crèmes pour la pâtisserie et la viennoiserie.', 'زبدة وقشطة للحلويات والفينواسري.'), group: 'ing' },
        { id: 'president', name: 'Président', kind: L('Dairy', 'Produits laitiers', 'الألبان'), p: L('French dairy products for professionals.', 'Produits laitiers français pour les professionnels.', 'منتجات ألبان فرنسية للمحترفين.'), group: 'ing' },
        { id: 'isigny', name: 'Isigny Sainte-Mère', kind: L('Butter and cream', 'Beurre et crème', 'الزبدة والقشطة'), p: L('Butters and creams from Normandy.', 'Beurres et crèmes de Normandie.', 'زبدة وقشطة من نورماندي.'), group: 'ing' },
        { id: 'ponthier', name: 'La Maison Ponthier', kind: L('Fruit', 'Fruit', 'الفاكهة'), p: L('Fruit purées and preparations for pastry.', 'Purées et préparations de fruits pour la pâtisserie.', 'هريس وتحضيرات فواكه للحلويات.'), group: 'ing' }
      ]
    },
    collab: {
      eyebrow: L('Ways to work together', 'Façons de travailler ensemble', 'طرق العمل معًا'),
      h1: L('Choose your level of integration.', 'Choisissez votre niveau d\'intégration.', 'اختر مستوى التكامل.'),
      lead: L('From a simple supply to a product built for you alone: four levels, one standard.', 'D\'un simple approvisionnement à un produit construit pour vous seul : quatre niveaux, un standard.', 'من توريد بسيط إلى منتج مبنيّ لك وحدك: أربعة مستويات، ومعيار واحد.'),
      levels: [
        { k: '01', t: L('Catalogue supply', 'Fourniture catalogue', 'التوريد من الكتالوج'), p: L('Choose from the references. Ordered by code, delivered at your rhythm.', 'Choisissez parmi les références. Commandées par code, livrées à votre rythme.', 'اختر من المنتجات. تُطلب بالرمز وتُسلَّم بإيقاعك.') },
        { k: '02', t: L('Adapted formats', 'Formats adaptés', 'صيغ مُكيَّفة'), p: L('Sizes, weights and packaging adjusted to your counter, your menu or your event.', 'Tailles, grammages et emballages ajustés à votre comptoir, votre carte ou votre événement.', 'مقاسات وأوزان وتغليف مضبوطة على منصّتك أو قائمتك أو فعاليتك.') },
        { k: '03', t: L('Co-development', 'Co-développement', 'التطوير المشترك'), p: L('We build a new product with you, from the idea to a recipe ready to produce.', 'Nous construisons un nouveau produit avec vous, de l\'idée à la recette prête à produire.', 'نبني منتجًا جديدًا معك، من الفكرة إلى وصفة جاهزة للإنتاج.') },
        { k: '04', t: L('White label', 'Marque blanche', 'العلامة البيضاء'), p: L('Your recipe or ours, under your name. We produce, you sell.', 'Votre recette ou la nôtre, sous votre nom. Nous produisons, vous vendez.', 'وصفتك أو وصفتنا، باسمك. نحن ننتج وأنت تبيع.') }
      ],
      procEyebrow: L('Method', 'Méthode', 'المنهج'),
      procTitle: L('From an idea to a product ready to produce.', 'D\'une idée à un produit prêt à produire.', 'من فكرة إلى منتج جاهز للإنتاج.'),
      proc: [
        { t: L('Brief', 'Brief', 'الإحاطة'), p: L('Your concept, your customers, your constraints and your target cost.', 'Votre concept, vos clients, vos contraintes et votre coût cible.', 'مفهومك وعملاؤك وقيودك وتكلفتك المستهدفة.') },
        { t: L('Tasting and prototypes', 'Dégustation et prototypes', 'التذوّق والنماذج'), p: L('Recipes tested together until the result is the right one.', 'Recettes testées ensemble jusqu\'au bon résultat.', 'وصفات تُختبر معًا حتى نصل إلى النتيجة الصحيحة.') },
        { t: L('Costing', 'Ingénierie des coûts', 'هندسة التكلفة'), p: L('Yield, raw materials, labour and packaging: a clear cost per piece.', 'Rendement, matières, main-d\'œuvre et emballage : un coût clair par pièce.', 'المردود والمواد والعمالة والتغليف: تكلفة واضحة للقطعة.') },
        { t: L('Production trial', 'Essai de production', 'تجربة إنتاج'), p: L('A first batch on the real line, measured against the prototype.', 'Un premier lot sur la vraie ligne, mesuré face au prototype.', 'دفعة أولى على خط الإنتاج الفعلي، تُقارَن بالنموذج.') },
        { t: L('Launch and follow-up', 'Lancement et suivi', 'الإطلاق والمتابعة'), p: L('Regular deliveries, quality checks and adjustments over time.', 'Livraisons régulières, contrôles qualité et ajustements dans le temps.', 'توصيلات منتظمة وفحوص جودة وتعديلات مع الوقت.') }
      ],
      offEyebrow: L('Beyond the catalogue', 'Au-delà du catalogue', 'ما بعد الكتالوج'),
      offTitle: L('Offers to go further.', 'Des offres pour aller plus loin.', 'عروض للذهاب أبعد.'),
      off: [
        { t: L('B2B subscriptions', 'Abonnements B2B', 'اشتراكات للأعمال'), p: L('A fixed rhythm and a fixed selection for your counter, week after week.', 'Un rythme et une sélection fixes pour votre comptoir, semaine après semaine.', 'إيقاع واختيار ثابتان لمنصّتك، أسبوعًا بعد أسبوع.'), img: 'bx3' },
        { t: L('Event boxes', 'Event Box', 'علب الفعاليات'), p: L('Assortments sized for receptions, meetings and launches.', 'Assortiments dimensionnés pour réceptions, réunions et lancements.', 'تشكيلات مُقاسة للاستقبالات والاجتماعات والإطلاقات.'), img: 'bx2' },
        { t: L('Gift boxes', 'Box cadeaux', 'علب الهدايا'), p: L('Pastries, pralines and house preserves for corporate gifts and occasions.', 'Pâtisseries, pralinés et confitures maison pour cadeaux d\'entreprise et grandes occasions.', 'حلويات وبرالين ومربّيات منزلية لهدايا الشركات والمناسبات.'), img: 'k0' },
        { t: L('White label', 'Marque blanche', 'العلامة البيضاء'), p: L('Two ways to work under your name: your recipe, our production; or our recipe, your brand.', 'Deux façons de travailler sous votre nom : votre recette, notre production ; ou notre recette, votre marque.', 'طريقتان للعمل باسمك: وصفتك وإنتاجنا، أو وصفتنا وعلامتك.'), img: 'h0' }
      ]
    },
    pricing: {
      eyebrow: L('Pricing', 'Tarifs', 'الأسعار'),
      h1: L('One product, one code, one price on quote.', 'Un produit, un code, un prix sur devis.', 'منتج واحد، رمز واحد، وسعر عند الطلب.'),
      lead: L('Each reference carries a unique code to reuse in your request. Prices depend on volume, production level and contract length: we set them product by product.', 'Chaque référence porte un code unique, à reprendre dans votre demande. Les prix dépendent du volume, du niveau de production et de la durée du contrat : nous les établissons produit par produit.', 'لكل منتج رمز فريد يُعاد استخدامه في طلبك. تعتمد الأسعار على الكمية ومستوى الإنتاج ومدة العقد: نحدّدها منتجًا بمنتج.'),
      tiersTitle: L('Volume pricing', 'Tarif dégressif', 'تسعير حسب الكمية'),
      tiersSub: L('The more you order, the less each piece costs.', 'Plus vous commandez, moins vous payez.', 'كلما زادت الكمية، قلّ سعر القطعة.'),
      pieces: L('pieces', 'pièces', 'قطعة'),
      shared: L('Price shared', 'Prix communiqué', 'السعر عند الطلب'),
      tiers: ['1 – 19', '20 – 49', '50 – 99', '100 – 199', '200 – 500'],
      beyond: L('Above 500 pieces: price on quote.', 'Au-delà de 500 pièces : tarif sur devis.', 'فوق 500 قطعة: السعر عند الطلب.'),
      search: L('Search a code or a product', 'Chercher un code ou un produit', 'ابحث عن رمز أو منتج'),
      cols: { code: L('Code', 'Code', 'الرمز'), product: L('Product', 'Produit', 'المنتج'), family: L('Family', 'Famille', 'الفئة'), price: L('Price', 'Prix', 'السعر') },
      onQuote: L('On quote', 'Sur devis', 'عند الطلب'),
      csv: L('Download the code list (CSV)', 'Télécharger la liste des codes (CSV)', 'حمّل قائمة الرموز (CSV)'),
      terms: L('Terms (minimum order, lead time, contract length, raw-material price revision clause) are shared with each quote.', 'Les conditions (commande minimum, délai, durée de contrat, clause de révision du prix des matières) sont communiquées avec chaque devis.', 'تُرسَل الشروط (الحد الأدنى للطلب، والمهلة، ومدة العقد، وبند مراجعة أسعار المواد) مع كل عرض.')
    },
    start: {
      eyebrow: L('Logistics and reliability', 'Logistique et fiabilité', 'اللوجستيات والموثوقية'),
      h1: L('Quality is a promise kept on time.', 'La qualité est une promesse tenue à l\'heure.', 'الجودة وعدٌ يُنجَز في موعده.'),
      lead: L('The right product, in the right quantity, in the right conditions, at the agreed time. Tell us how your kitchen works.', 'Le bon produit, en bonne quantité, dans les bonnes conditions, à l\'heure convenue. Dites-nous comment fonctionne votre cuisine.', 'المنتج الصحيح، بالكمية الصحيحة، في الظروف الصحيحة، في الوقت المتفق عليه. أخبرنا كيف يعمل مطبخك.'),
      freqLabel: L('1 · Delivery frequency', '1 · Fréquence de livraison', '1 · وتيرة التوصيل'),
      freq: [
        { v: L('Daily', 'Quotidienne', 'يومية'), p: L('Every working day. Recommended for fresh products.', 'Chaque jour d\'activité. Recommandée pour le frais.', 'كل يوم عمل. موصى بها للمنتجات الطازجة.') },
        { v: L('3 times a week', '3 fois par semaine', '3 مرات أسبوعيًا'), p: L('Moderate volumes.', 'Volume modéré.', 'كميات متوسطة.') },
        { v: L('2 times a week', '2 fois par semaine', 'مرتان أسبوعيًا'), p: L('Lower-volume accounts.', 'Comptes à plus faible volume.', 'حسابات أقل كمية.') },
        { v: L('On request', 'Sur demande', 'عند الطلب'), p: L('Order by order, with notice.', 'Commande par commande, avec préavis.', 'طلبًا بطلب، مع إشعار مسبق.') }
      ],
      modeLabel: L('2 · How you receive', '2 · Mode de réception', '2 · طريقة الاستلام'),
      mode: [
        { v: L('NABATE delivery', 'Livraison NABATE', 'توصيل نبت'), p: L('Delivered to your site on the agreed rhythm.', 'Livré sur votre site au rythme convenu.', 'يُوصَّل إلى موقعك بالإيقاع المتفق عليه.') },
        { v: L('Pick-up', 'Retrait par le client', 'استلام من العميل'), p: L('At our laboratory, in an agreed slot.', 'À notre laboratoire, sur un créneau convenu.', 'من مختبرنا، في موعد متفق عليه.') },
        { v: L('Third-party carrier', 'Transporteur tiers', 'ناقل خارجي'), p: L('Your carrier or courier; we prepare and pack at the dock.', 'Votre transporteur ou coursier ; nous préparons et emballons à quai.', 'ناقلك أو مندوبك؛ نحن نجهّز ونغلّف عند الرصيف.') }
      ],
      sfda: L('Food-safety compliance: composition, allergens, shelf life and storage conditions are provided for each product.', 'Conformité sanitaire : composition, allergènes, durée de vie et conditions de conservation fournis pour chaque produit.', 'الامتثال الغذائي: التركيب ومسبّبات الحساسية ومدة الصلاحية وشروط الحفظ متوفرة لكل منتج.'),
      formLabel: L('3 · Tell us about your kitchen', '3 · Parlez-nous de votre cuisine', '3 · حدّثنا عن مطبخك'),
      formTitle: L('Your request', 'Votre demande', 'طلبك'),
      formNote: L('State your products, volumes, supply format, storage, ovens and delivery set-up: we confirm the formats your kitchen can handle.', 'Indiquez vos produits, volumes, format de fourniture, stockage, fours et organisation de livraison : nous confirmons les formats que votre cuisine peut accueillir.', 'اذكر منتجاتك وكمياتك وصيغة التوريد والتخزين والأفران وتنظيم التوصيل: نؤكد الصيغ التي يستوعبها مطبخك.'),
      cartTitle: L('My selection', 'Ma sélection', 'اختياراتي'),
      cartEmpty: L('Nothing yet. Add products from the catalogue.', 'Rien pour l\'instant. Ajoutez des produits depuis le catalogue.', 'لا شيء بعد. أضِف منتجات من الكتالوج.'),
      f: {
        company: L('Company', 'Société', 'الشركة'), name: L('Contact', 'Contact', 'الشخص المسؤول'), phone: L('Phone or WhatsApp', 'Téléphone ou WhatsApp', 'الهاتف أو واتساب'),
        activity: L('Activity', 'Activité', 'النشاط'),
        activities: [L('Café or bakery', 'Café ou boulangerie', 'مقهى أو مخبز'), L('Hotel or restaurant', 'Hôtel ou restaurant', 'فندق أو مطعم'), L('Caterer or events', 'Traiteur ou événementiel', 'تموين أو فعاليات'), L('Franchise or chain', 'Franchise ou chaîne', 'امتياز أو سلسلة'), L('Other', 'Autre', 'أخرى')],
        volumes: L('Estimated volumes', 'Volumes estimés', 'الكميات التقديرية'), volumesPh: L('Pieces per day or per week', 'Pièces par jour ou par semaine', 'قطع في اليوم أو الأسبوع'),
        site: L('Storage, ovens, delivery', 'Stockage, fours, livraison', 'التخزين والأفران والتوصيل'), sitePh: L('Equipment on your site, cold storage, reception hours', 'Équipement de votre site, stockage froid, horaires de réception', 'معدات موقعك، والتخزين البارد، وساعات الاستلام'),
        message: L('Message', 'Message', 'الرسالة'), messagePh: L('Your project in a few lines', 'Votre projet en quelques lignes', 'مشروعك في بضعة أسطر'),
        sendWa: L('WhatsApp', 'WhatsApp', 'واتساب'), sendMail: L('Send by e-mail', 'Envoyer par e-mail', 'أرسل بالبريد'), copy: L('Copy the address', 'Copier l\'adresse', 'انسخ العنوان'), sendTo: L('Send it to', 'Envoyez-la à', 'أرسلها إلى')
      },
      s: {
        greetB2B: L('Hello NABATE, here is my project request (Origin).', 'Bonjour NABATE, voici ma demande de projet (Origin).', 'مرحبًا نبت، هذا طلب مشروعي (Origin).'),
        lCompany: L('Company', 'Société', 'الشركة'), lName: L('Contact', 'Contact', 'المسؤول'), lPhone: L('Phone', 'Téléphone', 'الهاتف'), lActivity: L('Activity', 'Activité', 'النشاط'),
        lVolumes: L('Volumes', 'Volumes', 'الكميات'), lFreq: L('Frequency', 'Fréquence', 'الوتيرة'), lMode: L('Reception', 'Réception', 'الاستلام'), lSite: L('Site', 'Site', 'الموقع'),
        lMessage: L('Message', 'Message', 'الرسالة'), lSelection: L('Selection', 'Sélection', 'الاختيارات'),
        needName: L('Please add your company or name.', 'Merci d\'indiquer votre société ou votre nom.', 'يُرجى كتابة اسم الشركة أو اسمك.'),
        subjectB2B: L('Project request — Origin by NABATE', 'Demande de projet — Origin by NABATE', 'طلب مشروع — Origin by NABATE'),
        add: L('Add', 'Ajouter', 'أضِف'), added: L('Added', 'Ajouté', 'أُضيف'), remove: L('Remove', 'Retirer', 'أزِل'), copied: L('Address copied', 'Adresse copiée', 'تم نسخ العنوان'), refs: L('references', 'références', 'منتجًا')
      }
    },
    cta: { title: L('Tell us about your kitchen.', 'Parlez-nous de votre cuisine.', 'حدّثنا عن مطبخك.'), btn: L('Start a project', 'Démarrer un projet', 'ابدأ مشروعك') }
  }
};
