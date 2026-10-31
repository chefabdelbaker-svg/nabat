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
