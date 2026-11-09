// Contenu de la page « La Maison » (présentation) — trilingue. Brouillon à valider : aucun chiffre inventé.
import { L } from './content.mjs';

export const M = {
  meta: {
    title: L('The House — NABATE', 'La Maison — NABATE', 'البيت — نبت'),
    desc: L('Origin, quality, the chef, raw materials, the laboratory and our partner Bongard: what Maison NABATE is made of.',
            'Origine, qualité, chef, matières premières, laboratoire et partenaire Bongard : de quoi est faite la Maison NABATE.',
            'الأصل والجودة والشيف والمواد الأولية والمختبر وشريكنا بونغار: مما يتكوّن بيت نبت.')
  },
  hero: {
    eyebrow: L('The House', 'La Maison', 'البيت'),
    h1: L('Origin, quality, gesture.', 'L\'origine, la qualité, le geste.', 'الأصل، الجودة، الحركة.'),
    lead: L('Maison NABATE is an artisan house of French training, born in Riyadh. Here is what it is made of.',
            'Maison NABATE est une maison artisanale de formation française, née à Riyad. Voici de quoi elle est faite.',
            'بيت نبت دارٌ حِرَفية بتكوين فرنسي، وُلدت في الرياض. هذا ما تتكوّن منه.')
  },
  origin: {
    eyebrow: L('Origin', 'L\'origine', 'الأصل'),
    title: L('A name that means to grow.', 'Un nom qui veut dire germer.', 'اسمٌ معناه الإنبات.'),
    p: L('NABATE comes from the Arabic root ن-ب-ت: to sprout, to grow, to pass on. The Nabataeans, builders of roads and links, inspire us. They are a source, never a decoration.',
         'NABATE vient de la racine arabe ن-ب-ت : germer, grandir, transmettre. Les Nabatéens, bâtisseurs de routes et de liens, nous inspirent. Ils sont une source, jamais un décor.',
         'نبت من الجذر العربي ن-ب-ت: أن تنبت، أن تنمو، أن تُورَّث. الأنباط، بُناة الطرق والروابط، يُلهموننا. هم مصدر، لا ديكور.')
  },
  quality: {
    eyebrow: L('Quality', 'La qualité', 'الجودة'),
    title: L('Quality begins with what we choose.', 'La qualité commence par ce que l\'on choisit.', 'الجودة تبدأ مما نختار.'),
    p: L('Butter, flour, eggs, milk, chocolate, coffee: reference houses, constant quality, traced lots. We never compromise on the raw material, because nothing can fix it afterwards.',
         'Beurre, farine, œufs, lait, chocolat, café : des maisons de référence, une qualité constante, des lots tracés. Nous ne transigeons jamais sur la matière première, car rien ne la rattrape ensuite.',
         'زبدة وطحين وبيض وحليب وشوكولاتة وقهوة: بيوت مرجعية وجودة ثابتة ودفعات موثَّقة. لا نتهاون في المادة الأولية، فلا شيء يُصلحها بعد ذلك.')
  },
  chef: {
    eyebrow: L('The chef', 'Le chef', 'الشيف'),
    title: L('A chef at the helm.', 'Un chef à la barre.', 'شيف على رأس البيت.'),
    p: L('Abdelhafid Arbi: twenty years in the trade, trained in France at the INBP. Recipes, standards and quality checks start with the chef, then are written down so the house never depends on a single day.',
         'Abdelhafid Arbi : vingt ans de métier, formé en France à l\'INBP. Recettes, standards et contrôles qualité partent du chef, puis sont écrits pour que la maison ne dépende jamais d\'un seul jour.',
         'عبد الحفيظ عربي: عشرون عامًا في المهنة، تكوّن في فرنسا بمعهد INBP. الوصفات والمعايير ومراقبة الجودة تنطلق من الشيف ثم تُدوَّن كي لا يرتهن البيت بيومٍ واحد.'),
    link: L('Meet the chef', 'Rencontrer le chef', 'تعرّف على الشيف')
  },
  lab: {
    eyebrow: L('The laboratory', 'Le laboratoire', 'المختبر'),
    title: L('What happens inside.', 'Ce qui se passe à l\'intérieur.', 'ما يجري في الداخل.'),
    lead: L('Quality first, experience in every gesture. Four steps, each one written and checked.',
            'La qualité d\'abord, l\'expérience dans chaque geste. Quatre étapes, chacune écrite et contrôlée.',
            'الجودة أولًا، والخبرة في كل حركة. أربع مراحل، كلٌّ منها مكتوبة ومُراقَبة.'),
    steps: [
      { t: L('Selection and weighing', 'Sélection et pesée', 'الانتقاء والوزن'), p: L('Every ingredient is chosen, weighed and traced before each batch.', 'Chaque ingrédient est choisi, pesé et tracé avant chaque lot.', 'كل مكوّن يُنتقى ويُوزن ويُوثَّق قبل كل دفعة.') },
      { t: L('Fermentation and lamination', 'Fermentation et laminage', 'التخمير والتصفيح'), p: L('Time and the French gesture: slow doughs, patient lamination.', 'Le temps et le geste français : pâtes lentes, laminage patient.', 'الوقت والحركة الفرنسية: عجائن بطيئة وتصفيح صبور.') },
      { t: L('Baking, set to the detail', 'Cuisson réglée au détail', 'خَبز مضبوط بالتفصيل'), p: L('Baking programmes defined product by product, so the tenth batch matches the first.', 'Des programmes de cuisson définis produit par produit, pour que le dixième lot ressemble au premier.', 'برامج خَبز محدَّدة لكل منتج، فتشبه الدفعة العاشرة الأولى.') },
      { t: L('Finishing and packing', 'Finition et conditionnement', 'التشطيب والتغليف'), p: L('Each reference leaves finished, packed and ready to serve.', 'Chaque référence part finie, emballée et prête à servir.', 'كل منتج يخرج جاهزًا ومغلَّفًا وصالحًا للتقديم.') }
    ]
  },
  partner: {
    eyebrow: L('Our partner', 'Notre partenaire', 'شريكنا'),
    name: 'BONGARD',
    title: L('Equipped with Bongard.', 'Équipé par Bongard.', 'مُجهَّز بمعدات بونغار.'),
    p: L('Bongard is the French reference in professional bakery ovens. The right equipment lets the craftsman\'s gesture repeat itself, batch after batch, without ever being replaced.',
         'Bongard est la référence française du four de boulangerie professionnel. Le bon équipement permet au geste de l\'artisan de se répéter, lot après lot, sans jamais être remplacé.',
         'بونغار هي المرجع الفرنسي للأفران المهنية. المعدّات المناسبة تتيح لحركة الحِرَفي أن تتكرر دفعةً بعد دفعة، دون أن تُستبدل أبدًا.')
  },
  cta: {
    title: L('Come and see the house.', 'Venez voir la maison.', 'تعالوا لتروا البيت.'),
    b1: L('Discover Origin by NABATE', 'Découvrir Origin by NABATE', 'اكتشف Origin by NABATE'),
    b2: L('Get in touch', 'Nous contacter', 'تواصل معنا')
  }
};

export const M2 = {
  ing: {
    eyebrow: L('Raw materials', 'Les matières premières', 'المواد الأولية'),
    title: L('Ingredients we trust.', 'Des ingrédients de confiance.', 'مكوّنات نثق بها.'),
    lead: L('Flour, butter, cream, chocolate and fruit come from reference houses, chosen for their constant quality and traced lot by lot.',
            'Farine, beurre, crème, chocolat et fruits viennent de maisons de référence, choisies pour leur qualité constante et tracées lot par lot.',
            'الطحين والزبدة والقشطة والشوكولاتة والفاكهة من بيوت مرجعية، اختيرت لثبات جودتها وتُتتبَّع دفعةً دفعة.')
  },
  partners: {
    eyebrow: L('Our partners', 'Nos partenaires', 'شركاؤنا'),
    title: L('Reference houses, a constant standard.', 'Des maisons de référence, un standard constant.', 'بيوت مرجعية، ومعيار ثابت.'),
    more: L('See all partners', 'Voir tous les partenaires', 'عرض كل الشركاء')
  },
  back: {
    eyebrow: L('Behind the scenes', 'Dans les coulisses', 'خلف الكواليس'),
    title: L('What stands behind every loaf.', 'Ce qui se cache derrière chaque pain.', 'ما يقف خلف كل رغيف.'),
    cards: [
      { id: 'lab', t: L('The laboratory', 'Le laboratoire', 'المختبر'), p: L('Four written, checked steps: selection, fermentation, baking, finishing.', 'Quatre étapes écrites et contrôlées : sélection, fermentation, cuisson, finition.', 'أربع مراحل مكتوبة ومُراقَبة: الانتقاء والتخمير والخَبز والتشطيب.') },
      { id: 'ingredients', t: L('The ingredients', 'Les ingrédients', 'المكوّنات'), p: L('Reference flour, butter, chocolate and fruit, traced lot by lot.', 'Farine, beurre, chocolat et fruits de référence, tracés lot par lot.', 'طحين وزبدة وشوكولاتة وفاكهة مرجعية، تُتتبَّع دفعةً دفعة.') },
      { id: 'partners', t: L('Our partner Bongard', 'Notre partenaire Bongard', 'شريكنا بونغار'), p: L('The French reference in professional ovens, for a gesture that repeats itself.', 'La référence française du four professionnel, pour un geste qui se répète.', 'المرجع الفرنسي للأفران المهنية، لحركة تتكرر.') }
    ],
    link: L('Discover', 'Découvrir', 'اكتشف')
  },
  menu: {
    meta: { title: L('Menu — Maison NABATE', 'Menu — Maison NABATE', 'القائمة — بيت نبت'),
            desc: L('The indicative menu of Maison NABATE: bakery, viennoiserie, pastry, breakfast and coffee.', 'La carte indicative de Maison NABATE : boulangerie, viennoiserie, pâtisserie, petit-déjeuner et café.', 'القائمة الإرشادية لبيت نبت: المخبوزات والمعجنات والحلويات والإفطار والقهوة.') },
    eyebrow: L('The menu', 'La carte', 'القائمة'),
    h1: L('From the oven to the cup.', 'Du four à la tasse.', 'من الفرن إلى الفنجان.'),
    lead: L('Bread, viennoiserie, pastry and coffee, made every day in the French way.', 'Pain, viennoiserie, pâtisserie et café, faits chaque jour à la française.', 'خبز ومعجنات وحلويات وقهوة، تُصنع كل يوم على الطريقة الفرنسية.'),
    note: L('Indicative menu, subject to change. Prices are given on site. Please tell us about any allergy.', 'Carte indicative, susceptible d\'évoluer. Les prix sont communiqués sur place. Signalez-nous toute allergie.', 'قائمة إرشادية قابلة للتغيير. تُعلَن الأسعار في المكان. يُرجى إبلاغنا عن أي حساسية.'),
    families: [
      { id: 'pains', amb: 'amb-pains', t: L('Bakery', 'Boulangerie', 'المخبوزات'), p: L('Long fermentation, natural leaven, baked every morning.', 'Longue fermentation, levain naturel, cuits chaque matin.', 'تخمير طويل وخميرة طبيعية، يُخبز كل صباح.'),
        items: [
          { s: 'baguette', t: L('Sourdough baguette', 'Baguette au levain', 'باغيت بالخميرة الطبيعية') },
          { s: 'campagne', t: L('Country loaf', 'Pain de campagne', 'خبز الريف') },
          { s: 'complet', t: L('Wholegrain seeded loaf', 'Pain complet aux graines', 'خبز كامل الحبوب بالبذور') },
          { s: 'focaccia', t: L('Focaccia', 'Focaccia', 'فوكاتشيا') },
          { s: 'dattes-noix', t: L('Date and walnut bread', 'Pain dattes & noix', 'خبز التمر والجوز') },
          { s: 'brioche', t: L('Brioche loaf', 'Brioche tressée', 'بريوش مجدول') }
        ] },
      { id: 'vienn', amb: 'amb-vienn', t: L('Viennoiserie', 'Viennoiserie', 'المعجنات'), p: L('Butter lamination, patient and French.', 'Un laminage au beurre, patient et français.', 'تصفيح بالزبدة، صبور وفرنسي.'),
        items: [
          { s: 'croissant', t: L('Butter croissant', 'Croissant au beurre', 'كرواسون بالزبدة') },
          { s: 'chocolat', t: L('Pain au chocolat', 'Pain au chocolat', 'بان أو شوكولا') },
          { s: 'amande', t: L('Almond croissant', 'Croissant aux amandes', 'كرواسون اللوز') },
          { s: 'zaatar', t: L('Zaatar croissant', 'Croissant zaatar', 'كرواسون زعتر') },
          { s: 'pistache', t: L('Pistachio croissant', 'Croissant pistache', 'كرواسون الفستق') },
          { s: 'kouign', t: L('Kouign-amann', 'Kouign-amann', 'كوين أمان') },
          { s: 'suisse', t: L('Pain suisse', 'Pain suisse', 'بان سويس') }
        ] },
      { id: 'pat', amb: 'amb-pat', t: L('Pastry', 'Pâtisserie', 'الحلويات'), p: L('French classics, with a few local touches: dates, saffron, pistachio.', 'Les classiques français, avec quelques touches d\'ici : dattes, safran, pistache.', 'كلاسيكيات فرنسية بلمسات محلية: التمر والزعفران والفستق.'),
        items: [
          { s: 'eclair-chocolat', t: L('Chocolate éclair', 'Éclair chocolat', 'إكلير الشوكولاتة') },
          { s: 'eclair-pistache', t: L('Pistachio éclair', 'Éclair pistache', 'إكلير الفستق') },
          { s: 'eclair-vanille', t: L('Vanilla éclair', 'Éclair vanille', 'إكلير الفانيليا') },
          { s: 'eclair-cafe', t: L('Coffee éclair', 'Éclair café', 'إكلير القهوة') },
          { s: 'macarons', t: L('Macarons, assortment of six', 'Macarons, assortiment de six', 'ماكارون، تشكيلة من ستة') },
          { s: 'madeleines', t: L('Madeleines', 'Madeleines', 'مادلين') },
          { s: 'eclair-dattes', t: L('Date and caramel éclair', 'Éclair dattes & caramel', 'إكلير التمر والكراميل') },
          { s: 'paris-brest', t: L('Paris-Brest', 'Paris-Brest', 'باريس برست') },
          { s: 'citron', t: L('Lemon meringue tart', 'Tarte citron meringuée', 'تارت الليمون والميرينغ') },
          { s: 'tarte-pistache', t: L('Pistachio tart', 'Tarte pistache', 'تارت الفستق') },
          { s: 'entremets-safran', t: L('Saffron entremets', 'Entremets safran', 'أنتريميه الزعفران') },
          { s: 'mille-feuille', t: L('Mille-feuille', 'Mille-feuille', 'ميل فاي') }
        ] },
      { id: 'brk', amb: 'amb-brk', t: L('Breakfast', 'Petit-déjeuner', 'الإفطار'), p: L('Served all morning, built on the house bread.', 'Servi toute la matinée, sur le pain de la maison.', 'يُقدَّم طوال الصباح على خبز البيت.'),
        items: [
          { s: 'toast-caramel', t: L('Caramel French toast', 'French toast caramel', 'فرنش توست بالكراميل') },
          { s: 'toast-fruits', t: L('Berry French toast', 'French toast fruits rouges', 'فرنش توست بالتوت') },
          { s: 'gaufre-miel', t: L('Golden waffle, honey', 'Gaufre dorée au miel', 'وافل ذهبي بالعسل') },
          { s: 'gaufre-chocolat', t: L('Golden waffle, chocolate', 'Gaufre dorée au chocolat', 'وافل ذهبي بالشوكولاتة') },
          { s: 'gaufre-fruits', t: L('Golden waffle, red berries', 'Gaufre dorée aux fruits rouges', 'وافل ذهبي بالتوت') },
          { s: 'toast-pistache', t: L('Pistachio French toast', 'French toast pistache', 'فرنش توست بالفستق') },
          { s: 'muffin', t: L('Blueberry muffin', 'Muffin myrtille', 'مافن التوت الأزرق') },
          { s: 'avocat', t: L('Avocado toast, poached egg', 'Toast avocat, œuf poché', 'توست الأفوكادو والبيض المسلوق') },
          { s: 'omelette', t: L('Smoked salmon omelette', 'Omelette saumon fumé', 'أومليت السلمون المدخن') },
          { s: 'granola', t: L('Yogurt and granola', 'Yaourt & granola', 'زبادي وغرانولا') }
        ] },
      { id: 'cafe', amb: 'amb-cafe', t: L('Hot coffee', 'Café chaud', 'القهوة الساخنة'), p: L('Specialty coffee, served in our stone cups.', 'Café de spécialité, servi dans nos gobelets pierre.', 'قهوة مختصة تُقدَّم في أكوابنا الحجرية.'),
        items: [
          { s: 'espresso', t: L('Espresso · 4 oz', 'Espresso · 4 oz', 'إسبريسو') },
          { s: 'macchiato', t: L('Espresso macchiato · 4 oz', 'Espresso macchiato · 4 oz', 'ماكياتو') },
          { s: 'cortado', t: L('Cortado · 6 oz', 'Cortado · 6 oz', 'كورتادو') },
          { s: 'cappuccino', t: L('Cappuccino · 8 oz', 'Cappuccino · 8 oz', 'كابتشينو') },
          { s: 'flat-white', t: L('Flat white · 8 oz', 'Flat white · 8 oz', 'فلات وايت') },
          { s: 'latte', t: L('Latte · 12 oz', 'Latte · 12 oz', 'لاتيه') },
          { s: 'cafe-jour', t: L('Coffee of the day · 12 oz', 'Café du jour · 12 oz', 'قهوة اليوم') },
          { s: 'v60', t: L('V60 · pour over, single origin', 'V60 · filtre, origine unique', 'في 60 · تقطير، أصل واحد') },
          { s: 'cafe-arabe', t: L('Arabic coffee and dates', 'Café arabe et dattes', 'قهوة عربية وتمر') },
          { s: 'cafe-emporter', t: L('Coffee to go · 12 oz', 'Café à emporter · 12 oz', 'قهوة للأخذ') }
        ] },
      { id: 'froid', t: L('Cold coffee and drinks', 'Café froid & boissons fraîches', 'القهوة والمشروبات الباردة'), p: L('Served in clear cups, over ice.', 'Servis en gobelets transparents, sur glace.', 'تُقدَّم في أكواب شفافة مع الثلج.'),
        items: [
          { s: 'americano', t: L('Iced americano · 16 oz', 'Americano glacé · 16 oz', 'أمريكانو مثلج') },
          { s: 'cafe-glace', t: L('Iced coffee of the day · 16 oz', 'Café du jour glacé · 16 oz', 'قهوة اليوم المثلجة') },
          { s: 'ice-drip', t: L('Ice drip · 16 oz', 'Ice drip · 16 oz', 'آيس دريب') },
          { s: 'latte-glace', t: L('Iced latte · 16 oz', 'Latte glacé · 16 oz', 'لاتيه مثلج') },
          { s: 'the-glace', t: L('Iced tea, lemon and mint · 16 oz', 'Thé glacé citron-menthe · 16 oz', 'شاي مثلج') },
          { s: 'karkade', t: L('Iced karkadé · 16 oz', 'Karkadé glacé · 16 oz', 'كركديه مثلج') },
          { s: 'jus-orange', t: L('Fresh orange juice · 16 oz', 'Jus d’orange frais · 16 oz', 'عصير برتقال طازج') }
        ] },
      { id: 'special', t: L('Signature drinks', 'Boissons signature', 'مشروبات مميزة'), p: L('Our signature cups, in obsidian and gold.', 'Nos créations, dans le gobelet obsidienne et or.', 'إبداعاتنا في كوب الأوبسيديان والذهب.'),
        items: [
          { s: 'matcha', t: L('Matcha latte · 12 oz', 'Matcha latte · 12 oz', 'ماتشا لاتيه') },
          { s: 'matcha-glace', t: L('Iced matcha latte · 16 oz', 'Matcha latte glacé · 16 oz', 'ماتشا لاتيه مثلج') },
          { s: 'caramel-sale', t: L('Salted caramel latte · 12 oz', 'Latte caramel beurre salé · 12 oz', 'لاتيه كراميل مالح') },
          { s: 'spanish-latte', t: L('Spanish latte · 12 oz', 'Spanish latte · 12 oz', 'لاتيه إسباني') },
          { s: 'mocha', t: L('Mocha · 12 oz', 'Mocha · 12 oz', 'موكا') },
          { s: 'chocolat-chaud', t: L('Hot chocolate · 12 oz', 'Chocolat chaud · 12 oz', 'شوكولاتة ساخنة') }
        ] },
      { id: 'boissons', t: L('Tea', 'Thés', 'الشاي'), p: L('Loose-leaf teas, hot.', 'Thés en feuilles, servis chauds.', 'شاي أوراق يُقدَّم ساخنًا.'),
        items: [
          { s: 'the', t: L('English breakfast tea · 12 oz', 'Thé English breakfast · 12 oz', 'شاي إنجليزي') },
          { s: 'the-vert', t: L('Green tea, mint · 12 oz', 'Thé vert à la menthe · 12 oz', 'شاي أخضر بالنعناع') }
        ] },
      { id: 'nuancier', season: true, t: L('Seasonal palette', 'Nuancier de saison', 'لوحة الموسم'), p: L('One ingredient, worked in every form: pastry, viennoiserie, breakfast and cup. Choose a shade.', 'Un seul ingrédient, travaillé sous toutes ses formes : pâtisserie, viennoiserie, petit-déjeuner et gobelet. Choisissez une nuance.', 'مكوّن واحد بكل أشكاله: حلويات ومعجنات وإفطار وكوب. اختر درجة.'),
        tabs: [
          { id: 'pistache', t: L('Pistachio', 'Pistache', 'الفستق'),
            items: [
            { s: 'pi-croissant', t: L('Pistachio croissant', 'Croissant pistache', 'كرواسون الفستق') },
            { s: 'pi-tarte', t: L('Pistachio tart', 'Tarte pistache', 'تارت الفستق') },
            { s: 'pi-entremets', t: L('Pistachio and raspberry entremets', 'Entremets pistache-framboise', 'أنتريميه الفستق والتوت') },
            { s: 'pi-paris-brest', t: L('Pistachio Paris-Brest', 'Paris-Brest pistache', 'باريس برست بالفستق') },
            { s: 'pi-eclair', t: L('Pistachio éclair', 'Éclair pistache', 'إكلير الفستق') },
            { s: 'pi-macaron', t: L('Pistachio macarons', 'Macarons pistache', 'ماكارون الفستق') },
            { s: 'pi-financier', t: L('Pistachio financier', 'Financier pistache', 'فينانسيه الفستق') },
            { s: 'pi-latte', t: L('Pistachio latte · 12 oz', 'Latte pistache · 12 oz', 'لاتيه الفستق') }
            ] },
          { id: 'chocolat', t: L('Chocolate', 'Chocolat', 'الشوكولاتة'),
            items: [
            { s: 'ch-croissant', t: L('Chocolate pain au chocolat', 'Pain au chocolat', 'بان أو شوكولا') },
            { s: 'ch-eclair', t: L('Chocolate éclair', 'Éclair chocolat', 'إكلير الشوكولاتة') },
            { s: 'ch-tarte', t: L('Dark chocolate tart', 'Tarte chocolat noir', 'تارت الشوكولاتة الداكنة') },
            { s: 'ch-entremets', t: L('Chocolate hazelnut entremets', 'Entremets chocolat-noisette', 'أنتريميه الشوكولاتة والبندق') },
            { s: 'ch-cookie', t: L('Double chocolate cookies', 'Cookies double chocolat', 'كوكيز دبل شوكولاتة') },
            { s: 'ch-brownie', t: L('Fudgy brownie', 'Brownie fondant', 'براوني') },
            { s: 'ch-macaron', t: L('Chocolate macarons', 'Macarons chocolat', 'ماكارون الشوكولاتة') },
            { s: 'ch-mocha', t: L('Mocha · 12 oz', 'Mocha · 12 oz', 'موكا') }
            ] },
          { id: 'fruits-rouges', t: L('Red berries', 'Fruits rouges', 'التوت الأحمر'),
            items: [
            { s: 'fr-tarte', t: L('Red berry tart', 'Tarte fruits rouges', 'تارت التوت') },
            { s: 'fr-entremets', t: L('Red berry entremets', 'Entremets fruits rouges', 'أنتريميه التوت') },
            { s: 'fr-eclair', t: L('Raspberry éclair', 'Éclair framboise', 'إكلير التوت') },
            { s: 'fr-cheesecake', t: L('Red berry cheesecake', 'Cheesecake fruits rouges', 'تشيز كيك التوت') },
            { s: 'fr-pavlova', t: L('Red berry pavlova', 'Pavlova fruits rouges', 'بافلوفا التوت') },
            { s: 'fr-macaron', t: L('Raspberry macarons', 'Macarons framboise', 'ماكارون التوت') },
            { s: 'fr-toast', t: L('Red berry French toast', 'French toast fruits rouges', 'فرنش توست بالتوت') },
            { s: 'fr-limonade', t: L('Red berry lemonade · 16 oz', 'Limonade fruits rouges · 16 oz', 'ليمونادة التوت') }
            ] },
          { id: 'dattes', t: L('Dates', 'Dattes', 'التمر'),
            items: [
            { s: 'da-eclair', t: L('Date and caramel éclair', 'Éclair dattes & caramel', 'إكلير التمر والكراميل') },
            { s: 'da-tarte', t: L('Date and walnut tart', 'Tarte dattes & noix', 'تارت التمر والجوز') },
            { s: 'da-sticky', t: L('Sticky date pudding', 'Sticky date pudding', 'بودينغ التمر') },
            { s: 'da-cake', t: L('Date and walnut cake', 'Cake dattes & noix', 'كيكة التمر والجوز') },
            { s: 'da-maamoul', t: L('Date maamoul', 'Maamoul aux dattes', 'معمول بالتمر') },
            { s: 'da-croissant', t: L('Date croissant', 'Croissant aux dattes', 'كرواسون التمر') },
            { s: 'da-latte', t: L('Date latte · 12 oz', 'Latte dattes · 12 oz', 'لاتيه التمر') },
            { s: 'da-financier', t: L('Date financier', 'Financier aux dattes', 'فينانسيه التمر') }
            ] }
        ] }
    ],
    cta: L('Order or reserve', 'Commander ou réserver', 'اطلب أو احجز')
  }
};
