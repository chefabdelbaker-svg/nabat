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
    lead: L('Mechanise the process, keep the gesture. Four steps, each one written and checked.',
            'Mécaniser le process, préserver le geste. Quatre étapes, chacune écrite et contrôlée.',
            'نُميكِن العملية ونحفظ الحركة. أربع مراحل، كلٌّ منها مكتوبة ومُراقَبة.'),
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
            desc: L('The indicative menu of Maison NABATE: breads, viennoiserie, pastry, coffee and light lunch.', 'La carte indicative de Maison NABATE : pains, viennoiserie, pâtisserie, café et déjeuner léger.', 'القائمة الإرشادية لبيت نبت: الخبز والمعجنات والحلويات والقهوة وغداء خفيف.') },
    eyebrow: L('The menu', 'La carte', 'القائمة'),
    h1: L('From the oven to the cup.', 'Du four à la tasse.', 'من الفرن إلى الفنجان.'),
    lead: L('Bread, viennoiserie, pastry and coffee, made every day in the French way.', 'Pain, viennoiserie, pâtisserie et café, faits chaque jour à la française.', 'خبز ومعجنات وحلويات وقهوة، تُصنع كل يوم على الطريقة الفرنسية.'),
    note: L('Indicative menu, subject to change. Prices are given on site.', 'Carte indicative, susceptible d\'évoluer. Les prix sont communiqués sur place.', 'قائمة إرشادية قابلة للتغيير. تُعلَن الأسعار في المكان.'),
    families: [
      { t: L('Breads', 'Les pains', 'الخبز'), p: L('Long fermentation, natural leaven, baked every morning.', 'Longue fermentation, levain naturel, cuits chaque matin.', 'تخمير طويل وخميرة طبيعية، يُخبز كل صباح.'),
        items: [L('Traditional baguette', 'Baguette tradition', 'باغيت تقليدي'), L('Sourdough boule', 'Pain au levain', 'خبز العجين المخمَّر'), L('Country loaf', 'Pain de campagne', 'خبز ريفي'), L('Seeded grain bread', 'Pain aux céréales', 'خبز الحبوب'), L('Brioche loaf', 'Pain brioché', 'خبز البريوش')] },
      { t: L('Viennoiserie', 'La viennoiserie', 'المعجنات'), p: L('Butter lamination, patient and French.', 'Un laminage au beurre, patient et français.', 'تصفيح بالزبدة، صبور وفرنسي.'),
        items: [L('Butter croissant', 'Croissant au beurre', 'كرواسان بالزبدة'), L('Pain au chocolat', 'Pain au chocolat', 'بان أو شوكولا'), L('Almond croissant', 'Croissant aux amandes', 'كرواسان باللوز'), L('Pain aux raisins', 'Pain aux raisins', 'بان أو ريزان'), L('Kouign-amann', 'Kouign-amann', 'كوين آمان')] },
      { t: L('Pastry', 'La pâtisserie', 'الحلويات'), p: L('Classics of the French repertoire, made with precision.', 'Les classiques du répertoire français, faits avec précision.', 'كلاسيكيات المطبخ الفرنسي، بدقة.'),
        items: [L('Éclair', 'Éclair', 'إكلير'), L('Paris-Brest', 'Paris-Brest', 'باريس بريست'), L('Lemon tart', 'Tarte au citron', 'تارت الليمون'), L('Millefeuille', 'Millefeuille', 'ميل فاي'), L('Opéra', 'Opéra', 'أوبرا')] },
      { t: L('Coffee', 'Le café', 'القهوة'), p: L('Espresso classics and the Arabic coffee served with dates.', 'Les classiques de l\'espresso et le café arabe servi avec des dattes.', 'كلاسيكيات الإسبريسو والقهوة العربية تُقدَّم مع التمر.'),
        items: [L('Espresso', 'Espresso', 'إسبريسو'), L('Cappuccino', 'Cappuccino', 'كابتشينو'), L('Flat white', 'Flat white', 'فلات وايت'), L('Filter coffee', 'Café filtre', 'قهوة مفلترة'), L('Arabic coffee and dates', 'Café arabe et dattes', 'قهوة عربية وتمر')] },
      { t: L('Light lunch', 'Déjeuner léger', 'غداء خفيف'), p: L('Simple dishes built on the bakery.', 'Des plats simples bâtis sur la boulangerie.', 'أطباق بسيطة قائمة على المخبز.'),
        items: [L('Ham and butter baguette', 'Jambon-beurre', 'ساندويتش باغيت'), L('Croque-monsieur', 'Croque-monsieur', 'كروك مسيو'), L('Quiche of the day', 'Quiche du jour', 'كيش اليوم'), L('Open sandwich', 'Tartine', 'تارتين')] }
    ],
    cta: L('Order or reserve', 'Commander ou réserver', 'اطلب أو احجز')
  }
};
