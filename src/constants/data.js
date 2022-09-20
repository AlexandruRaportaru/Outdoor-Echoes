import images from './images';
import { IoIosMan, IoIosWoman } from 'react-icons/io';
import { ImManWoman, ImHome3 } from 'react-icons/im';
import { BsSunglasses, BsTools } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import { TbDiscount2 } from 'react-icons/tb';

const productsExamples = [
  'A T-SHIRT',
  'LEGGINGS',
  'A JACKET',
  'SUNGLASSES',
  'A JUMPER',
  'SNOW BOOTS',
  'A BACKPACK'
]

const menus = [
  {
    title: 'Home',
    path: '/',
    icon: <ImHome3 style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Men',
    path: '/products',
    icon: <IoIosMan style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Women',
    path: '/products',
    icon: <IoIosWoman style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Kids',
    path: '/products',
    icon: <ImManWoman style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Accesories',
    path: '/products',
    icon: <BsSunglasses style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Gear',
    path: '/products',
    icon: <BsTools style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Brands',
    path: '/products',
    icon: <FaAngellist style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Sales',
    path: '/',
    icon: <TbDiscount2 style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  }
]


const swiperImages = [
  {
    slideBrand: images.adidasBanner,
    slideName: 'adidas-banner',
    slideLogo: images.adidasLogo,
    logoSize: 20,
    slideTitle: 'HIKE IN STYLE',
    slideParagraph: <span>Adventure awaits. Hit the trail with gusto in adidas <br/> hiking shoes and boots for adults and kids. Count on <br/>all-weather performance and comfort on any terrain.</span>
  },
  {
    slideBrand: images.columbiaBanner,
    slideName: 'columbia-banner',
    slideLogo: images.columbiaLogo,
    logoSize: 20,
    slideTitle: <span>“Nature isn't the only <br/> mother of invention.”</span>,
    slideParagraph: <span>Gert Boyle - Founder of Columbia Sportswear</span>
  },
  {
    slideBrand: images.diamondBanner,
    slideName: 'diamond-banner',
    slideLogo: images.diamondLogo,
    logoSize: 15,
    slideTitle: 'HIKING & TREKKING',
    slideParagraph: <span>From quick jaunts on your favorite local trail to multi-day <br/> adventures in remote mountains, this is the gear to take you there.</span>
  },
  {
    slideBrand: images.haglofsBanner,
    slideName: 'haglofs-banner',
    slideLogo: images.haglofsLogo,
    logoSize: 20,
    slideTitle: <span>Keep the heat, <br/> lose the moisture</span>,
    slideParagraph: <span>We try to make the most sustainable products <br/> we can at Haglöfs because we love the outdoors.</span>
  },
  {
    slideBrand: images.mammutBanner,
    slideName: 'mammut-banner',
    slideLogo: images.mammutLogo,
    logoSize: 20,
    slideTitle: 'EXPLORE THE PEAKS',
    slideParagraph: <span>Get the best possible outdoor experience with <br/> best-selling gear backed by 160 years <br/> of passion and know-how.</span>
  },
  {
    slideBrand: images.merrellBanner,
    slideName: 'merrell-banner',
    slideLogo: images.merrellLogo,
    logoSize: 20,
    slideTitle: 'HIKE IT BABY!',
    slideParagraph: <span>Once your little one has learned to walk, gear up for <br/> all the adventures in store with a great pair <br/> of kids’ shoes from Merrell.</span>
  },
  {
    slideBrand: images.northBanner,
    slideName: 'north-banner',
    slideLogo: images.northLogo,
    logoSize: 14,
    slideTitle: 'STEP INTO YOUR STORY',
    slideParagraph: <span>To break records, or break down barrers. Everyone goes there <br/> for a different reason. Only you can discover your trail.</span>
  },
  {
    slideBrand: images.ospreyBanner,
    slideName: 'osprey-banner',
    slideLogo: images.ospreyLogo,
    logoSize: 14,
    slideTitle: 'BEST BACKPACK OF 2022',
    slideParagraph: <span>The Osprey Anti-Gravity Suspension System <br/> makes even heavy loads seem lightweight.</span>
  },
  {
    slideBrand: images.patagoniaBanner,
    slideName: 'patagonia-banner',
    slideLogo: images.patagoniaLogo,
    logoSize: 15,
    slideTitle: 'QUALITY GUARANTEE',
    slideParagraph: <span>Because we know prioritizing durability results <br/> in consuming less energy, wasting less <br/> water and creating less trash.</span>
  },
  {
    slideBrand: images.petzlBanner,
    slideName: 'petzl-banner',
    slideLogo: images.petzlLogo,
    logoSize: 14,
    slideTitle: 'Access the inaccessible',
    slideParagraph: <span>Petzl headlamps have been in constant <br/> evolution for over 40 years. <br/> Grab one for your gear.</span>
  },
  {
    slideBrand: images.salewaBanner,
    slideName: 'salewa-banner',
    slideLogo: images.salewaLogo,
    logoSize: 14,
    slideTitle: 'Hike & camp',
    slideParagraph: <span>Mountains are our mentors, never judging yet <br/> offering endless possibilities. Mountains connect <br/> us to one another. They are the bond that <br/> unites our community.</span>
  },
  {
    slideBrand: images.salomonBanner,
    slideName: 'salomon-banner',
    slideLogo: images.salomonLogo,
    logoSize: 20,
    slideTitle: <span>New season, <br/> new adventures</span>,
    slideParagraph: <span>Time to play in the wild. Come with us and explore <br/> new lands without fear. Join us.</span>
  },
  {
    slideBrand: images.sportivaBanner,
    slideName: 'sportiva-banner',
    slideLogo: images.sportivaLogo,
    logoSize: 15,
    slideTitle: 'Mountain running boots',
    slideParagraph: <span>Gore-Tex membranes and La Sportiva technologies guarantee, <br/> snug fit, lightweight and waterproofing combined with <br/> technical performance and durability.</span>
  },
  {
    slideBrand: images.summitBanner,
    slideName: 'summit-banner',
    slideLogo: images.summitLogo,
    logoSize: 20,
    slideTitle: <span>Live the luxury <br/> in the wild</span>,
    slideParagraph: <span>The Telos two-person freestanding tent will radically change your <br/> perception of what an ultralight backpacking tent can be.</span>
  },
]



const activitiesCards = [
  {
    cardActivity: images.runningCard,
    cardName: 'running-card',
    cardHeight: 400,
    cardTitle: 'Running',
    cardClass: 'card1'
  },
  {
    cardActivity: images.campingCard,
    cardName: 'camping-card',
    cardHeight: 450,
    cardTitle: 'Camping',
    cardClass: 'card2'
  },
  {
    cardActivity: images.hikingCard,
    cardName: 'hiking-card',
    cardHeight: 500,
    cardTitle: 'Hiking',
    cardClass: 'card3'
  },
  {
    cardActivity: images.climbingCard,
    cardName: 'climbing-card',
    cardHeight: 450,
    cardTitle: 'Climbing',
    cardClass: 'card4'
  },
  {
    cardActivity: images.expeditionsCard,
    cardName: 'expeditions-card',
    cardHeight: 400,
    cardTitle: 'Expeditions',
    cardClass: 'card5'
  },
]



const products = [
  //* -------------------------------------------------------- FOOTWEAR MEN ---------------------------------------------------------- *//
  {
    name: 'Adidas Terrex Swift R2 Hiking Shoes',
    type: 'Footwear',
    brand: 'adidas',
    images: [
      images.swiftR2First,
      images.swiftR2Second,
      images.swiftR2Third
    ],
    size: [
      '41',
      '42',
      '43',
      '44',
      '45',
      '46',
    ],
    description: <span>
      Moving quickly and smoothly all over the mountain has always been the goal of adidas’s beloved Terrex series. If you have been asking yourself why hiking practitioners around the world love these sneakers, look no further than the adidas Terrex Swift R2 trail running shoes. <br /> Terrex is widely recognized for the durability and adaptability of its products and the Swift R2 is no exception, with a ripstop mesh upper specially designed to keep your foot safe thanks to the delightful interaction between TPU reinforcements and a molded TPU toecap. Putting on these shoes is faster and easier than ever thanks to the Lace Bungee, which automatically fastens cables just by touching a button and pulling the safety device around them. <br /> In the sole unit, the legendary Traxion outsole, made of Continental™ compound rubber, provides phenomenal grip on steep terrain no matter how wet or difficult to get through. Thanks to a lightweight, soft EVA midsole, cushioning is of paramount importance in the Swift R2, providing greater comfort when speeding through complex terrain and climbing angled hills. Move swiftly through the mountains in these mens hiking shoes. The lightweight, breathable build features a speed lacing system. A rugged Traxion outsole with grippy Continental Rubber supports travel over any terrain, wet or dry.<br />Features: <br />
    - Ripstop mesh upper for breathability and light weight; <br />
    - TPU overlays for durability and added support; <br />
    - Speed lacing construction for fast lacing and snug fit; Lace Bungee stows laces to help avoid tangling; <br />
    - Moulded TPU toe cap for protection; <br />
    - Lightweight EVA midsole for long-term cushioning
    </span>,
    price: 368,
    gender: 'Men',
    color: 'Black',
    weight: 'Over 300g',
    features: '',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Columbia Firecamp Fleece III Hiking Shoes',
    type: 'Footwear',
    brand: 'columbia',
    images: [
      images.firecampFleece3First,
      images.firecampFleece3Second,
      images.firecampFleece3Third
    ],
    size: [
      '44',
      '45',
      '46',
    ],
    description: <span>
      Crafted Protective: <br />
      - This multi-sport shoe´s durable textile upper and toasty fleece lining keep your feet dry and comfortable. <br /><br />
      Warmth, Too: <br />
      - Lightweight insulation keeps heat in, so you don´t get cold feet. <br /><br />
      Features: <br />
      - Textile upper; <br />
      - 100g critical insulation and fleece lining; <br /> 
      - Techlite™ lightweight midsole for long lasting comfort, superior cushioning, and high energy return; <br />
      - Omni-Grip™ non-marking traction rubber. <br /><br />
    </span>,
    price: 261.00,
    gender: 'Men',
    color: 'Blue',
    weight: '300 g',
    features: 'Thermal',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Mission XP Leather Hiking Shoes',
    type: 'Footwear',
    brand: 'diamond',
    images: [
      images.missionXPFirst,
      images.missionXPSecond,
      images.missionXPThird
    ],
    size: [
      '41',
      '42',
      '43',
    ],
    description: <span>
      This time BLACK DIAMOND brings you the new MISSION XP LEATHER HIKING hiking shoes, they are designed for difficult terrain and uneven climbs. Its upper part is made of suede and synthetic leather with an inner lining that is highly breathable and quick drying. It has a braided fastening system and a reinforced tongue that provides protection and stability with each step. <br /><br />
      Features: <br />
      - Premium and durable suede leather upper that’s lined for fit and comfort; <br />
      - BlackLabel-Mountain rubber is high performance sticky rubber; <br />
      - Rubber toe protection; <br />
      - Welded TPU overlays placed for added durability and protection; <br />
      - Gusseted tongue keeps debris out and foot locked down; <br />
      - Dual density tuned EVA midsole with stiff forefoot shank plate for edging performance and underfoot protection; <br />
      - Multiple webbing loops for various tagging options.
    </span>,
    price: 549.00,
    gender: 'Men',
    color: 'Green',
    weight: '300 g',
    features: 'Waterproof',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Shadow LV Climbing Shoes',
    type: 'Footwear',
    brand: 'diamond',
    images: [
      images.shadowLVFirst,
      images.shadowLVSecond,
      images.shadowLVThird
    ],
    size: [
      '42',
      '43',
      '44',
      '45',
      '46'
    ],
    description: <span>
      Push boundaries and climb the highest peak with Black Diamond Shadow LV that offers the perfect balance while you are out there exploring! A mountaineer’s best friend, it is constructed especially for hiking approaches and is lightweight and comfortable to wear. This versatile shoe is constructed to offer technical functionality and durability in the unpredictable mountain environment. <br /><br />
      Features: <br />
      - LV last—for low volume feet;<br />
      - Aggressive, downturned last for steep routes and bouldering; <br />
      - 4.3mm BD BlackLabel-Fuse Rubber outsole is molded for superior grip, optimal consistency, and performance; <br />
      - Engineered Knit Technology tongue provides exceptional breathability and comfort; <br />
      - Minimalist midsole for extra sensitivity on steep terrain; <br />
      - A combination of printed and molded high friction rubber on top of the foot maximizes durability, dexterity and grip for toe-hooking; <br />
      - Velcro strap for fit adjustability
    </span>,
    price: 578.00,
    gender: 'Men',
    color: 'Black',
    weight: '',
    features: '',
    activity: 'Climbing',
    sustainable: false,
  },

  //* ----------------------------------------------------------- FOOTWEAR WOMEN --------------------------------------------------------- *//
  {
    name: 'Adidas Terrex Free Hiker Hiking Shoes',
    type: 'Footwear',
    brand: 'adidas',
    images: [
      images.freeHikerFirst,
      images.freeHikerSecond,
      images.freeHikerThird
    ],
    size: [
      '36',
      '37',
      '38',
      '39',
      '40',
    ],
    description: <span>
      The coldest months of the year demand new tools for the job, and there is no place where this is more true than on the cold mountain trails. With an upper so revamped that it could pass for a completely new product, the adidas Free Hiker C.RDY hiking boots update the Free Hiker series’ excellent performance for those days when humidity and cold hit hardest. <br />The 3-stripes brand blends a GORE-TEX® layer with an advanced high-cut design that seals the foot completely at the ankles, resulting in total insulation from cold and moisture that will keep your feet dry and safe at all times. A sealed zipper runs across the center of the instep to the high neck to ensure that wearing these boots is comfortable enough without reducing support, while abundant TPU reinforcements along the toe and midfoot increase durability and protection. <br /> The Free Hiker series fans will be pleased to know that the legendary Continental™ rubber outsole continues to provide phenomenal traction on rugged terrain. The boost™ midsole, on the other hand still has the smooth, competent cushioning that gave worldwide renown to it. Terrex Free Hiker COLD.RDY Hiking Boots. Hiking in cold or winter scenarios has never been so nice. This adidas Terrex Free Hiker shoe was specifically designed for ultimate comfort on long hikes. Its socklike Primeknit upper, paired with COLD.RDY technology and water-repellent insulation fit snugly around the foot for a comfortable, warm fit. In addition, thanks to the waterproof GORE-TEX membrane, even difficult wet conditions are no problem.<br /> Features: <br />
    - Continental™ Rubber outsole; <br />
    - External sleeve with zip; <br />
    - adidas Primeknit upper with GORE-TEX Duratherm; <br />
    - Insulating, moisture-managing COLD.RDY; <br />
    - Rugged cold-weather hiker; <br />
    - Responsive Boost midsole with EVA support frame.
    </span>,
    price: 903,
    gender: 'Women',
    color: 'Black',
    weight: '',
    features: 'Waterproof',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Columbia 60 Low Outdry™ Hiking Shoes',
    type: 'Footwear',
    brand: 'columbia',
    images: [
      images.facet60First,
      images.facet60Second,
      images.facet60Third
    ],
    size: [
      '36',
      '37',
      '38',
    ],
    description: <span>
      Trail Performance: <br />
      - Fuel your inner fire with this low-cut technical hiker designed for a wide range of activities. <br /><br />
      Underfoot Comfort: <br />
      - Featuring extra-light, responsive TechLite+™ cushioning, Navic Fit™ secure lacing system, and a gripping outsole to tackle multiple terrains. <br /><br />
      Rain-ready: <br />
      - Waterproof-breathable protection takes you from trail to town in any weather. <br /><br />
      Features: <br />
      - Seamless mesh construction with custom metal hardware provides exceptional fit and support; <br />
      - OutDry™ breathable waterproof protection; <br /> 
      - Navic Fit System™ delivers a natural midfoot lock down; <br /> 
      - Fluidframe multidensity underfoot support; <br /> 
      - Techlite+™ delivers responsive cushioning and stability, without sacrificing comfort; <br /> 
      - Omni-Grip™ non-marking traction rubber.
    </span>,
    price: 416.00,
    gender: 'Women',
    color: 'Blue',
    weight: '',
    features: 'Waterproof',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Mission Leather Mid WP Hiking Shoes',
    type: 'Footwear',
    brand: 'diamond',
    images: [
      images.missionFirst,
      images.missionSecond,
      images.missionThird
    ],
    size: [
      '38',
      '39',
      '40',
    ],
    description: <span>
      Built for the long-haul, the Mission Leather Mid WP is an approach shoe that provides ankle protection and support when heading into the hills with heavy packs and big objectives on the horizon. Featuring a waterproof/ breathable BD.dry lining combined with a high-grade Nubuck leather upper, the Mission Leather Mid WP keeps you dry while moving through stream crossings and snow fields. <br /><br />
      Features: <br />
      - Padded ankle provides protection from scree intrusion; <br />
      – Lace up ankle support for security in rugged terrain; <br />
      – Waterproof + breathable BD.dry lining; <br />
      – Highest grade Nubuck leather upper; <br />
      – BlackLabel-Mountain rubber is high performance sticky rubber; <br />
      – Rubber heel rand and toe cap provide foot protection and abrasion resistance; <br />
      – Climbing forefoot and toecap construction for precision on rock; <br />
      – High traction lugs for mud, still include the climbing capability with added soft terrain security; <br />
      – Heel brake and midfoot shank makes aid walls and via ferrata comfortable; <br />
      – Fully gusseted tongue is padded for maximum comfort and keeping dirt and debris out; <br />
      – Minimal and intentional stitch placement for minimum of exposure to wear.
    </span>,
    price: 632.00,
    gender: 'Women',
    color: 'Grey',
    weight: '300 g',
    features: 'Waterproof',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Method Climbing Shoes',
    type: 'Footwear',
    brand: 'diamond',
    images: [
      images.methodFirst,
      images.methodSecond,
      images.methodThird
    ],
    size: [
      '36',
      '37',
      '38',
      '39',
      '40',
    ],
    description: <span>
      Built for sending sport pitches, from the blocky limestone of Rifle to the enduro sandstone of the Red. With a women’s specific last that’s lower volume and a minimal break-in period, the Method is easy on the feet out of the box, while maintaining stiff edge control for increased power for newer outdoor climbers. With a downturned last that’s not ultra-aggressive, these shoes perform well on a variety of angles, from steep to vertical, making them a one-quiver sport shoe for those who value simplicity. <br /><br />
      Features: <br />
      - Women’s specific last provides customized fit; <br />
      - Moderate, downturned last for vertical to gently overhanging sport routes; <br />
      - 3.25mm Label Fuse rubber is molded for superior grip, optimal consistency, and performance; <br />
      - Cush, padded, microsuede lined woven tongue, which is exceptionally breathable and increases mobility; <br />
      - 3D molded heel provides fit and protection for comfortable, powerful heel hooking; <br />
      - Heel tension and arch rubber provide power and support; <br />
      - Velcro straps for fit adjustability.
    </span>,
    price: 577.00,
    gender: 'Women',
    color: 'Green',
    weight: '',
    features: '',
    activity: 'Climbing',
    sustainable: false,
  },

  //* ---------------------------------------------------------- FOOTWEAR KIDS -------------------------------------------------------- *//
  {
    name: 'Adidas Terrex HyperHiker Hiking Shoes',
    type: 'Footwear',
    brand: 'adidas',
    images: [
      images.hyperHikerFirst,
      images.hyperHikerSecond,
      images.hyperHikerThird
    ],
    size: [
      '31',
      '32',
      '33',
      '34',
      '35',
    ],
    description: <span>
      Get them hiking early. Hitting the trail feels great when kids have these adidas hiking shoes on their feet. They have the lightweight feel of a trail running shoe with the extra support and durability of a mid-height hiking boot to hook kids on exploring the outdoors. Reflective hits shine in low light. Their lugged rubber outsole grips all surfaces with confidence. Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste. <br /> Features: <br />
      - Upper contains a minimum of 50% recycled content; <br /> 
      - Lace closure; <br /> 
      - Abrasion-resistant Textile upper with mud guard; <br /> 
      - Lightweight feel; <br /> 
      - Reflective details; <br />
      - Composition: Synthetics, Textile.
    </span>,
    price: 204,
    gender: 'Kids',
    color: 'Green',
    weight: '210g',
    features: 'Reflective accents',
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Columbia Redmond Youth Hiking Shoes',
    type: 'Footwear',
    brand: 'columbia',
    images: [
      images.redmondYouthFirst,
      images.redmondYouthSecond,
      images.redmondYouthThird
    ],
    size: [
      '31',
      '32',
      '33',
    ],
    description: <span>
      Outdoor Play: <br />
      - Designed with adventures in mind, these waterproof shoes with a cushy midsole and grippy outsole make playtime more epic. <br /><br />
      Features: <br />
      - Upper features a combination of suede leather, mesh and webbing; <br />
      - Waterproof seam-sealed membrane bootie construction; <br />
      - Techlite™ lightweight midsole for long lasting comfort, superior cushioning, and high energy return; <br />
      - Omni-Grip™ non-marking traction rubber; <br />
      - Uses: Trail.
    </span>,
    price: 211.00,
    gender: 'Kids',
    color: 'Grey',
    weight: '',
    features: 'Waterproof',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Momentum Climbing Shoes',
    type: 'Footwear',
    brand: 'diamond',
    images: [
      images.momentumFirst,
      images.momentumSecond,
      images.momentumThird
    ],
    size: [
      '34',
      '35',
      '36',
    ],
    description: <span>
      Designed to provide unparalleled comfort, the kids´ momentum is a single velcro shoe built for young crushers and combines innovative technology with a classic, flat-last design to create an entry-level shoe that excels in performance. with an upper fabric that consists entirely of our engineered knit technology, the momentum provides stretch where you need it, support where it matters and all around exceptional breathability. <br /><br />
      Features: <br />
      - Neutral, flat last for vertical climbing or all-day comfort; <br />
      - Specific last provides customized fit for kids; <br />
      - 4.3mm rubber is built for durability and molded for optimal comfort, consistency and weight; <br />
      - Engineered Knit Technology upper provides exceptional breathability and comfort; <br />
      - Microfabric midsole for added sensitivity and comfort; <br />
      - Velcro strap for fit adjustability.
    </span>,
    price: 212.00,
    gender: 'Kids',
    color: 'Green',
    weight: '',
    features: '',
    activity: 'Climbing',
    sustainable: false,
  },

  //* --------------------------------------------------------- CLOTHING MEN ---------------------------------------------------------- *//
  {
    name: 'Adidas Terrex MyShelter Hiking Jacket',
    type: 'Clothing',
    brand: 'adidas',
    images: [
      images.myShelterFirst,
      images.myShelterSecond,
      images.myShelterThird
    ],
    size: [
      'M',
      'L',
      'XL',
      'XXL',
    ],
    description: <span>
      Designed for those who favor an increasingly active mountain lifestyle, the adidas Terrex MyShelter Windweave hiking jacket is ideal for quickly adapting to any weather without losing your bearings. Inspired by windbreaker jackets, this top brings outstanding durability and a groundbreaking design to the scene. <br /> Made from 100% polyester ripstop, the Terrex MyShelter Windweave easily repels water with ease thanks to a DWR-coated outer lining. Primaloft® Next, meanwhile, keeps you cool and dry thanks to its superior insulation and breathability. But perhaps this jacket’s most revolutionary offering is its patronage, designed thanks to AI body mapping to improve its aerodynamic profile and reduce wind resistance while running. <br /> With stretch cuffs and an drawcord-adjustable hem, this jacket allows on-the-go protection adjustments. The two-way full front zip with high collar stops any water or wind seepage on its tracks, while its stretch hood covers your head when the rain tries to ruin your ride. Side zippered pockets allow you to warm your hands or carry your essentials. Terrex MYSHELTER Windweave Hooded Hiking JacketVersatility keeps you on the move. <br /> Inspired by variable conditions and active days outdoors, this adidas Terrex hiking jacket lets you do it all. Its body-mapped design maintains breathability where you need it most without compromising on durability or warmth. PrimaLoft® Next insulates and breathes to match your activity level. A durable water repellent finish sheds light rain, so there´s no need to slow down. <br /> Features: <br />
      - Windweave body-mapping construction; <br />
      - Adjustable hem; <br />
      - Elastic cuffs; <br />
      - Two-way full zip with high collar; <br />
      - 100% polyester ripstop with durable water-repellent (DWR) coating; <br />
      - PrimaLoft® insulation; <br />
      - Pack-it zip pockets and inner chest pocket; <br />
      - Elastic hood.
    </span>,
    price: 619.00,
    gender: 'Men',
    color: 'Yellow',
    weight: '',
    features: [
      'Thermal',
      'Compressible',
      'Windproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Adidas Terrex LiteFlex Hiking Pants',
    type: 'Clothing',
    brand: 'adidas',
    images: [
      images.liteFlexFirst,
      images.liteFlexSecond,
      images.liteFlexThird
    ],
    size: [
      'M',
      'L',
      'XL',
      'XXL',
    ],
    description: <span>
      Adidas Terrex Liteflex Hiking are prepared to face the hardest explorations in the mountains since they are very resistant to wear, elastic, and light and provide wide freedom of movement so you can feel protected and safe while hiking. These tracksuit pants have a combination of fabrics, such as nylon, polyester, and elastane, which give maximum flexibility, durability, lightness, breathability, and fast drying. Its design includes a waist with elastic drawcord and silicone grip that adjusts to your sizes, zippered pockets for hands, a hem with adjustable buttons, and a relaxed cut that will give you comfort to move. <br /> Terrex Liteflex Hiking Pants. Freedom to move is the name of the game. These adidas Terrex Liteflex Hiking Pants have a wide elastic waistband with silicone grip, which is ideal if you´re layering on a backpack or hip bag. Extra stretch lets you hike and manoeuvre unhindered through uneven terrain. The water-repellent fabric gives you the peace of mind to keep moving in foul weather. Hit the trail for the long haul. <br /> Features: <br />
      - Snap-button cuffs; <br />
      - Drawcord on elastic waist; <br />
      - 69% nylon, 19% polyester, 12% elastane plain weave; <br />
      - Water-repellent fabric; <br />
      - Side zip pockets.
    </span>,
    price: 277.00,
    gender: 'Men',
    color: 'Black',
    weight: '',
    features: [
      'Reflective accents',
      'Windproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Adidas Terrex Tech Hiking Fleece',
    type: 'Clothing',
    brand: 'adidas',
    images: [
      images.techFirst,
      images.techSecond,
      images.techThird
    ],
    size: [
      'M',
      'L',
      'XL',
      'XXL',
    ],
    description: <span>
      Terrex Tech Fleece Hiking JacketLife outside isn´t always sunshine and roses. Sometimes it´s the stormy days that draw you to the mountains. For those cooler, greyer trails, this adidas Terrex jacket drapes your body in strategic comfort. Its fleece construction blends moisture-managing waffle knit with abrasion-resistant panels. The non-brushed design is inspired by adidas´ ambition to address microfibre shedding. This product is made with Primegreen, a series of high-performance recycled materials. <br /> Features: <br />
      - Elastic cuffs; <br />
      - Primegreen; <br />
      - Full zip with stand-up collar; <br />
      - Side zip pockets; <br />
      - One chest pocket with zip.
    </span>,
    price: 228.00,
    gender: 'Men',
    color: 'Black',
    weight: '',
    features: '',
    activity: 'Hiking',
    sustainable: true,
  },

  //* ------------------------------------------------------------ CLOTHING WOMEN -------------------------------------------------------- *//
  {
    name: 'Adidas Terrex Xploric Hiking Jacket',
    type: 'Clothing',
    brand: 'adidas',
    images: [
      images.xploricFirst,
      images.xploricSecond,
      images.xploricThird
    ],
    size: [
      'XXS',
      'XS',
      'S',
      'M',
    ],
    description: <span>
      Keep all of your essentials at the ready with the Xploric jacket. An iconic and disruptive chest pocket provides on-the-fly access to all of your accessories, and additional pockets offer plenty of space to keep your electronics clear of the elements. adidas RAIN.RDY uses advanced waterproofing to channel rain away from your body, allowing you to keep moving through any downpour. A mix of fabrics puts ripstop panels where abrasion resistance is needed the most. <br /> Features: <br />
      - Regular fit; <br />
      - Full zip with fitted hood; <br /> 
      - 100% recycled polyester ripstop <br />
      - Reinforced visor; <br />
      - Front zip pockets; <br />
      - RECYCLED MATERIALS PRIME - PRIMEGREEN.
    </span>,
    price: 1352.00,
    gender: 'Women',
    color: 'Black',
    weight: '',
    features: 'Windproof',
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Adidas Terrex Liteflex Hiking Shorts Pants',
    type: 'Clothing',
    brand: 'adidas',
    images: [
      images.liteflexShortsFirst,
      images.liteflexShortsSecond,
      images.liteflexShortsThird
    ],
    size: [
      'XXS',
      'XS',
      'S',
      'M',
    ],
    description: <span>
      Terrex Liteflex Hiking ShortsSome folks prefer slow, meandering trails. Others time themselves all the way to the top. However you prefer to hike, stay light on your feet as you move through the forest in these adidas Terrex shorts. With an adjustable, grippy waist, they can keep up with you no matter your pace. This product is made with recycled content as part of our ambition to end plastic waste. Features: <br />
      - Exposed elastic waist with drawcord and inner silicone print; <br />
      - 90% recycled polyester, 10% elastane dobby; <br />
      - Side zip pockets; <br />
      - Webbing details.
    </span>,
    price: 159.00,
    gender: 'Women',
    color: 'Black',
    weight: '',
    features: 'Stretch',
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Columbia Adventure Hiking Pants',
    type: 'Clothing',
    brand: 'columbia',
    images: [
      images.adventureFirst,
      images.adventureSecond,
      images.adventureThird
    ],
    size: [
      'XXS',
      'XS',
      'S',
    ],
    description: <span>
      Adventure Hiking are hiking pants for ladies. This sports accessory offers an active fit to facilitate freedom of movement. The model offers a 4-way comfort stretch that allows freedom of movement. The structure includes a membrane with advanced water repellency and that prevents liquids from staining the garment. In addition, it includes Omni-Shade technology that prevents your skin from suffering from the effects of UVA and UVB sunrays. Its design has a detachable integrated belt. On the sides, it has pockets to maintain the body temperature of the hands. Also, it has a zippered security pocket to protect personal items. It is built in 100% polyester, material that offers greater durability. <br /><br />
      Features: <br />
      - Omni-Shield Tm Advanced Repellency; <br />
      - Omni-Shade Tm Upf 50 Sun; <br />
      - Protection; <br />
      - 4-Way Comfort Stretch; <br />
      - Integrated Removable Belt; <br />
      - Zippered Hand Pockets; <br />
      - Zip-Closed Security Pockets; <br />
      - Drawcord Adjustable Hem; <br />
      - Mid Rise.
    </span>,
    price: 230.00,
    gender: 'Women',
    color: 'Black',
    weight: '',
    features: [
      'UV Protection',
      'WaterProof',
      'Windproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },

  //* ----------------------------------------------------------- CLOTHING KIDS -------------------------------------------------- *//

  {
    name: 'Columbia Ridge IV Convertible Hiking Pants',
    type: 'Clothing',
    brand: 'columbia',
    images: [
      images.silverRidge4First,
      images.silverRidge4Second,
      images.silverRidge4Third
    ],
    size: [
      'XS',
      'S',
      'M',
      'L',
      'XL'
    ],
    description: <span>
      Young adventurers can comfortably spend weekends at camp and enjoy long summer hikes with these quick-dry trousers that can be converted into shorts thanks to the zip-off legs.The high-perfomance wicking efficiently pulls moisture away from the body to accelerate evaporation. <br /><br />
      Features: <br />
      - Omni-Wick™; <br />
      - Quick dry; <br />
      - Partial elastic at waist; <br />
      - Hand pockets; <br />
      - Cargo pocket; <br />
      - Zip-off legs convert pant to 5.
    </span>,
    price: 132.00,
    gender: 'Kids',
    color: 'Beige',
    weight: '',
    features: [
      'UV Protection',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Columbia Windbreaker Hiking Jacket',
    type: 'Clothing',
    brand: 'columbia',
    images: [
      images.bloomingportFirst,
      images.bloomingportSecond,
      images.bloomingportThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    description: <span>
      An essential item for all your children´s outdoor adventures, this water-resistant windbreaker gives children the extra protection they need from the elements. <br /><br /> 
      Packable: <br />
      - It can be packed into the pocket and is thus easy to have in backpacks at all times. <br /><br />
      Features: <br />
      - Water resistant fabric; <br />
      - Packable; <br />
      - Hand pockets; <br />
      - Elastic cuffs; <br />
      - Elastic hem; <br />
      - Reflective detail; <br />
      - Uses: Hiking life.
    </span>,
    price: 154.00,
    gender: 'Kids',
    color: 'Beige',
    weight: '',
    features: [
      'Compressible',
      'Stretch',
      'Windproof',
      'Reflective accents'
    ],
    activity: 'Hiking',
    sustainable: false,
  },

  //* ------------------------------------------------------------ ACCESORIES ----------------------------------------------------- *//

  {
    name: 'Adidas Terrex Agravic Hiking Backpack 10L',
    type: 'Accesories',
    brand: 'adidas',
    images: [
      images.agravicFirst,
      images.agravicSecond,
      images.agravicThird
    ],
    size: 'one-size',
    description: <span>
      Pack the essentials and hit the trail with this adidas lightweight trail running backpack. Multiple storage pockets ensure everything is organised and easy to find. Quick-access flask pockets keep hydration within reach on shoulder straps. Reflective details shine in low light for 360-degree reflectivity. Bungee chest straps. <br /> Features: <br />
      - Emergency whistle; <br />
      - Dimensions: 24cm x 42cm x 12cm; <br />
      - Volume: 10L; <br />
      - 100% nylon ripstop; <br />
      - Lightweight and breathable fabric; <br />
      - Front webbing pocket with side buckle closure; <br />
      - Multiple storage pockets.
    </span>,
    price: 482.00,
    gender: 'Unisex',
    color: 'Black',
    weight: 'max 10L',
    features: 'Frameless',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Columbia Maxtrail™ Hiking Backpack 20L',
    type: 'Accesories',
    brand: 'columbia',
    images: [
      images.maxtrailFirst,
      images.maxtrailSecond,
      images.maxtrailThird
    ],
    size: 'one-size',
    description: <span>
      Features: <br />
      - Versatile And Customizable Twin; <br />
      - Slot™ Webbing; <br />
      - Includes Hydrapak® 2.5l Elite™ Lt; <br />
      - Sl Reservoir; <br />
      - Removable Hip Belt; <br />
      - External Zippered Pocket; <br />
      - Zippered Reservoir Access With Left And Right Exit; <br />
      - Breathable 3d Eva Backpanel.
    </span>,
    price: 423.00,
    gender: 'Unisex',
    color: 'Red',
    weight: 'max 20L',
    features: 'Frameless',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Columbia FCT03 BB Hiking Poles',
    type: 'Accesories',
    brand: 'columbia',
    images: [
      images.fct03First,
      images.fct03Second,
      images.fct03Third
    ],
    size: '',
    description: <span>
      Features: <br />
      - Ultralight foldable poles set, with height adjust, designed for hiking; <br />
      - The four sections of this pole are made in carbon fiber, being the locking section reinforced with 7075 duraluminum; <br />
      - The telescopic section has an easy quick blocking system; <br />
      - Ergonomic and extra-long EVA grip with adjustable strap; <br />
      - Tungsten tip and rubber paw for an optimal grip;
    </span>,
    price: 371.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '',
    features: '',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Capitan Climbing Helmet',
    type: 'Accesories',
    brand: 'diamond',
    images: [
      images.captainFirst,
      images.captainSecond,
      images.captainThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    description: <span>
      For a safe climbing BLACK DIAMOND has designed the new CAPITAN HELMET helmet, which presents a combination of materials that optimize durability and resistance to a blow . Its design provides additional coverage on the sides and back of the head. It has a low profile suspension system. It has a ventilation system that provides breathability when temperatures rise, keeping the inside of the helmet dry and cool. <br /><br />
      Features: <br />
      - EPP + EPS + 2-piece ABS shell combo creates ultra-durability; <br />
      - Increased side and back protection; <br />
      - Low-profile suspension system; <br />
      - Integrated headlamp clips; <br />
      - Removable / reverse Velcro pads; <br />
      - 285 g S/M; <br />
      - 295 g M/L; <br />
      - Material: ABS, EPP/EPS; <br />
      - Certifications: CE/EN, UIAA.
    </span>,
    price: 268.00,
    gender: 'Unisex',
    color: 'Red',
    weight: '285/295 g',
    features: '',
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'Black Diamond Speed 50L Hiking Backpack',
    type: 'Accesories',
    brand: 'diamond',
    images: [
      images.speedFirst,
      images.speedSecond,
      images.speedThird
    ],
    size: 'one-size',
    description: <span>
      We present the new SPEED 50L BACKPACK backpack for climbing and mountaineering, it is made of resistant water-repellent canvas. It has a capacity of 33 liters available to protect your camping implements. It has padded and adjustable shoulder straps for unmatched comfort. It has chest and waist straps that will help you carry and distribute the weight of the backpack. <br /><br />
      Features: <br />
      – New BD “X-rip” 210d Nylon body fabric with UTS™ coating; <br />
      – Welded front abrasion patch for improved protection against rock, ice and crampon spikes; <br />
      – New custom metal dogbone ice tool attachment with micro ice-tool PickPockets™ and removable 20 mm crampon straps; <br />
      – Top-loading, with removable lid, drawcord skirt closure and tuck-away rope strap; <br />
      – Strippable design: removable frame sheet / bivy pad and removable hipbelt with fixed webbing belt; <br />
      – Redesigned Shoulder Strap harness for improved comfort and durability; <br />
      – Moisture-wicking redesigned back-panel; <br />
      – Raincover available separately.
    </span>,
    price: 798.00,
    gender: 'Unisex',
    color: 'Yellow',
    weight: 'max 50 L',
    features: '',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Venom Ice Hiking Axe',
    type: 'Accesories',
    brand: 'diamond',
    images: [
      images.venomIceFirst,
      images.venomIceSecond,
      images.venomIceThird
    ],
    size: [
      50 + 'cm',
      51 + 'cm',
      52 + 'cm',
      53 + 'cm',
    ],
    description: <span>
      This is the new ice pick for climbing VENOM ICE AX, it is a tool of high precision and functionality for lovers of alpine sports. Its head is made of stainless steel. Its integrated handle and uneven shaft provide safety and easy handling on the ice. It features fully adjustable FlickLock technology ideal for steep snow. <br /><br />
      Features: <br />
      - Climbs steep couloirs, plunges and self arrests; <br />
      - Venom Hammer is equipped with a Tech Pick and the Venom Adze comes with the Classic Pick; <br />
      - Comfortable, dual-density molded grip; <br />
      - Lockdown Leash included; <br />
      - CEN-B certified.
    </span>,
    price: 506.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '',
    features: '',
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Distance FLZ Hiking Poles',
    type: 'Accesories',
    brand: 'diamond',
    images: [
      images.distanceFirst,
      images.distanceSecond,
      images.distanceThird
    ],
    size: [
      105-125 + 'cm',
      125-145 + 'cm',
    ],
    description: <span>
      This time we bring you the new DISTANCE FLZ POLES trekking poles, which have a super light and manageable design, made of resistant aluminum. Features an approximate length of 13 inches collapsed to 39 usable inches. Thanks to its SlideLock technology, it provides more resistance to the pole in the contraction joints.. <br /><br />
      Features: <br />
      - Improved joint support and stiffness; <br />
      – Lightweight EVA foam grip and grip extension with breathable, moisture wicking strap made from recycled materials; <br />
      – Three-section foldable shaft with speed cone deployment and FlickLock® adjustability; <br />
      – Aluminum construction; <br />
      – Interchangeable, non-scarring rubber Tech Tips and carbide Tech Tips; <br />
      – Removable low-profile baskets for versatility; <br />
      – Z-Pole Snow Basket compatible. <br />
    </span>,
    price: 588.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '',
    features: '',
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Black Diamond Wiz Hiking Headlight',
    type: 'Accesories',
    brand: 'diamond',
    images: [
      images.wizFirst,
    ],
    size: [
      30 + 'Lumens Pwr',
    ],
    description: <span>
      Our totally redesigned kid´s headlamp that now features lighting in a full-color spectrum, the Wiz gives kids the lighting they need to explore the outdoors in a variety of fun colors. Our totally redesigned kid´s headlamp that now features lighting in a full-color spectrum, the Wiz gives kids the lighting they need to explore the outdoors in a variety of fun colors. One LED provides 3 lumens of proximity lighting and strobe mode.<br /><br /> An RGB LED allows kid´s to cycle through a full rainbow spectrum of colors. Head tilts in both directions so it works even when put on upside down. Compact design uses two AAA batteries. CPSIA certified with child-safe battery compartment closure and breakaway elastic safety strap. Powers off after two hours to avoid accidental battery drain. <br /><br />Storm Proof [IPX4]: <br />
      - Protected against rain or sleet from any angle.
    </span>,
    price: 81.00,
    gender: 'Unisex',
    color: 'Red',
    weight: '',
    features: '',
    activity: 'Hiking',
    sustainable: true,
  },

  //* ------------------------------------------------------------ EQUIPMENT ----------------------------------------------------- *//

  {
    name: 'Columbia Ultra 2P Lightweight Hiking Tent',
    type: 'Equipment',
    brand: 'columbia',
    images: [
      images.columbiaUltraFirst,
      images.columbiaUltraSecond,
      images.columbiaUltraThird
    ],
    size: '2P',
    description: <span>
      Lightweight camping tent for backpacking or cyclotourism, easy to pitch up. Ultra lightweight camping tent for 2 persons with rainfly for those who need light and compact tent once packed. Thanks to design this tent is very stable with optimum inner space. Nylon ripstop outer fabric is very resistant to tears, in addition to being extremely light. The water column is 3000 mm for the roof and the floor. <br /> This tent has an easy and quick set up because you only have to assembly one preformed pole with another small one The inner tent can be used as a mosquito net independently. Inside it has pockets to store small belongings. The fastening system of the rainfly to the inner tent is made by Velcro loops,plastic hooks and aluminum buckles, which offers faster assembly and disassembly as well as less weight. For better visibility , zipper pullers are reflective as well as the guy ropes. The tent dimensions are (50+127+50) x225x92 cm and its weight is 1,65 kg. <br /><br />
      Flysheet: <br />
      - 20D Nylon Ripstop Single silicon; <br />
      - PU 3000 mm. <br /><br />
      Inner tent: <br />
      - 40D Nylon Breathable + D33 mesh; <br />
      - 40D Nylon Ripstop 3000 mm floor. <br /><br />
      Features: <br />
      - Thermo-sealed seams; <br />
      - Inner mesh multipockets (one on side and others on top); <br />
      - 1 hook for light; <br />
      - 1 big side ventilation; <br />
      - SBS zippers; <br />
      - 2 inner doors with D33 Mesh; <br />
      - Aluminium adjusters, hooks, buckles; <br />
      - Dimensions:(50+127+50)x225x92(h) cm; <br />
      - Inner tent dimensions:215x125x89(h) cm; <br />
      - Folded size :37x17x17 cm; <br />
      - Weight:1.65 Kg; <br />
      - Total weight and folded dimensions of the poles:0,420 kg and 36xØ6 cm; <br />
      - Total weight and dimensions of the pegs:0,080kg and 16xØ3 cm.
    </span>,
    price: 832.00,
    gender: '',
    color: 'Green',
    weight: '1.65 kg',
    features: '',
    activity: 'Hiking',
    sustainable: false,
  },

  //* ------------------------------------------------------------- RUNNING -------------------------------------------------------- *//

  {
    name: 'Adidas Terrex Free Hiker Goretex Trail Running',
    type: 'Footwear',
    brand: 'adidas',
    images: [
      images.goretexFirst,
      images.goretexSecond,
      images.goretexThird
    ],
    size: [
      '38',
      '39',
      '40',
      '41',
      '42',
    ],
    description: <span>
      Intending to lead the hiking marketplace is no small feat, but the adidas Terrex Free Hiker GTX trail running shoes will surely achieve this as the Terrex series’ natural evolution. Combining the best features of their high-performance running shoes with the advantages of their more outdoor-oriented designs, these sneakers do not look like anything you have seen so far in the scene. <br /> adidas´ sportiest products inspired the Terrex Free Hiker GTX’s upper, with a Primeknit design that has received anti-wear reinforcements to protect you from difficult terrain. But Primeknit’s outstanding features are not lost by that, with a sock-like design that fits your feet perfectly and maintains the lightweight breathability that it is so well known for. To achieve greater weather protection, adidas has also added a thin GORE-TEX® layer to create an all-around, tight waterproofing. <br /> The already characteristic Continental™ rubber outsole in the Terrex series blends with a boost™ midsole, thus completing a package with great cushioning and responsiveness as well as outstanding traction that will not be deterred by any obstacle. Various TPU reinforcements on the heel and toecap serve as additional protection against injuries and accidents. Move and explore. <br /> These lightweight hiking shoes deliver next-generation comfort and freedom of movement for hikes both long and short. The adidas Primeknit upper hugs your foot for flexible, all-terrain stability, while the Boost midsole delivers endless energy to keep you moving up or down the trail. A GORE-TEX membrane sheds water while letting your feet breathe for all-conditions wear. <br /><br /> Features: <br />
      - Regular fit; <br />
      - Lace closure; <br />
      - adidas Primeknit textile upper; <br />
      - Continental™ Rubber outsole for extraordinary grip even in wet conditions.
    </span>,
    price: 689.00,
    gender: 'Unisex',
    color: 'Brown',
    weight: '',
    features: 'Waterproof',
    activity: 'Trail running',
    sustainable: false,
  },
  {
    name: 'Columbia Summit Trail Running Gloves',
    type: 'Accessories',
    brand: 'columbia',
    images: [
      images.trailSummitRunningFirst,
      images.trailSummitRunningSecond,
      images.trailSummitRunningThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    description: <span>
      Cold Trail: <br />
      - With the lightweight warmth of our thermal reflective lining, these gloves won´t stop you from your run. <br /><br />
      Phone Friendly: <br />
      - A silicone palm grip keeps that precious phone secure in your hand, while the touchscreen-compatible digits let you use it without having to expose your hands. <br /><br />
      Features: <br />
      - Omni-Heat™ thermal reflective; <br />
      - Silicone palm grip; <br />
      - Touch screen compatible finger tip; <br />
      - Reflective detail.
    </span>,
    price: 102.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '',
    features: [
      'Windproof',
      'Reflective accents'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
]




const brands = {
  adidas: {
    name: 'Adidas',
    logo: images.adidasLogo,
    logoSize: 40
  },
  columbia: {
    name: 'Columbia',
    logo: images.columbiaLogo,
    logoSize: 25
  },
  diamond: {
    name: 'Black Diamond',
    logo: images.diamondLogo,
    logoSize: 15
  },
  haglofs: {
    name: 'Haglofs',
    logo: images.haglofsLogo,
    logoSize: 40
  },
  mammut: {
    name: 'Mammut',
    logo: images.mammutLogo,
    logoSize: 40
  },
  merrell: {
    name: 'Merrell',
    logo: images.merrellLogo,
    logoSize: 40
  },
  north: {
    name: 'The North Face',
    logo: images.northLogo,
    logoSize: 34
  },
  osprey: {
    name: 'Osprey',
    logo: images.ospreyLogo,
    logoSize: 34
  },
  patagonia: {
    name: 'Patagonia',
    logo: images.patagoniaLogo,
    logoSize: 35
  },
  petzl: {
    name: 'Petzl',
    logo: images.petzlLogo,
    logoSize: 34
  },
  salewa: {
    name: 'Salewa',
    logo: images.salewaLogo,
    logoSize: 34
  },
  salomon: {
    name: 'Salomon',
    logo: images.salomonLogo,
    logoSize: 40
  },
  sportiva: {
    name: 'La Sportiva',
    logo: images.sportivaLogo,
    logoSize: 35
  },
  summit: {
    name: 'Sea To Summit',
    logo: images.summitLogo,
    logoSize: 40
  }
}

/* const adidasProducts = products.filter((product) => product.productBrand === "Adidas"); */



const creatorImages = [
  images.creator1,
  images.creator2,
  images.creator3,
  images.creator4,
  images.creator5,
  images.creator6,
  images.creator7,
  images.creator8,
  images.creator9,
  images.creator10,
  images.creator11,
  images.creator12,
  images.creator13,
  images.creator14,
  images.creator15,
  images.creator16,
  images.creator17,
  images.creator18,
  images.creator19,
  images.creator20,
]



const blogs = [
  {
    blogLink: 'https://www.cotswoldoutdoor.com/the-knowledge/waterproof-buying-guide.html?from=home',
    blogImage: images.rain,
    blogName: '',
    blogHeadtext: 'Waterproof buying guide',
    blogText: 'Find out everything you need to know about this outdoor essential.'
  },
  {
    blogLink: 'https://www.cotswoldoutdoor.com/the-knowledge/walking/boot-fitting-guide.html?from=home',
    blogImage: images.boot,
    blogName: 'Boot',
    blogHeadtext: 'Fit your footwear!',
    blogText: 'Let our experts help you make the right boot choice. Take some notes.'
  },
  {
    blogLink: 'https://alexandruraportaru.github.io/Alex-s-Weather-App/',
    blogImage: images.weather,
    blogName: 'Weather',
    blogHeadtext: 'Best Weather App',
    blogText: 'Check the weather forecast before making your hiking plans.'
  },
  {
    blogLink: 'https://alexandruraportaru.github.io/Alex-s-Todo-List/',
    blogImage: images.todo,
    blogName: 'Todo',
    blogHeadtext: 'Try the Todo App',
    blogText: 'Make a list of things you need on the mountain. It´s better to be prepared.'
  },
  {
    blogLink: 'https://www.thebmc.co.uk/hill-skills-how-to-go-hill-walking-at-night',
    blogImage: images.night,
    blogName: 'Night',
    blogHeadtext: 'Tips for Night Walk',
    blogText: 'The mountains at night can be hazardous, but also wonderful. Take some notes.'
  },
  {
    blogLink: 'https://muntii-nostri.ro/',
    blogImage: images.trail,
    blogName: 'Trail',
    blogHeadtext: 'Use the Trail App',
    blogText: 'Even the most experienced ones use it and it´s free. Check the maps before you leave!'
  },
  {
    blogLink: 'https://www.big4.com.au/tips-and-inspiration/tips-advice/camping/buying-a-tent-10-handy-tips-to-help-you-make-the-b',
    blogImage: images.tent,
    blogName: 'Tent',
    blogHeadtext: 'Grab some tent tips',
    blogText: 'Buying a tent? 10 handy tips to help you make the best purchase. Enjoy!'
  },
  {
    blogLink: 'https://bearfoottheory.com/benefits-of-hiking/',
    blogImage: images.benefits,
    blogName: 'Benefits',
    blogHeadtext: 'Benefits of hiking',
    blogText: 'Hiking is a good way to grow strength, build fitness, and get mental health.'
  }
]


const genderCategory = [
  'Men',
  'Women',
  'Unisex',
  'Kids'
]


const activityCategory = [
  'Hiking',
  'Climbing',
  'Trail running',
  'Camping',
  'Expeditions'
]


const typeCategory = [
  'Clothing',
  'Footwear',
  'Accessories',
  'Equipment'
]


const colorCategory = [
  'Black',
  'White',
  'Brown',
  'Grey',
  'Beige',
  'Blue',
  'Green',
  'Yellow',
  'Red'
]

const sizeCategory = [
  'XXS',
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  31 + ' EU',
  32 + ' EU',
  33 + ' EU',
  34 + ' EU',
  35 + ' EU',
  36 + ' EU',
  37 + ' EU',
  38 + ' EU',
  39 + ' EU',
  40 + ' EU',
  41 + ' EU',
  42 + ' EU',
  43 + ' EU',
  44 + ' EU',
  45 + ' EU',
  46 + ' EU'
]


const featuresCategory = [
  'Waterproof',
  'Reflective accents',
  'Thermal',
  'Compressible',
  'Windproof',
  'Stretch',
  'Frameless',
  'UV Protection'
]


const brandsCategory = [
  'Adidas',
  'Black Diamond',
  'Columbia',
  'Haglofs',
  'La Sportiva',
  'Mammut',
  'Merrell',
  'Osprey',
  'Patagonia',
  'Petzl',
  'Salewa',
  'Salomon',
  'Sea To Summit',
  'The North Face'
]


export default { 
  productsExamples, 
  menus, 
  swiperImages, 
  activitiesCards,
  products,
  brands,
  creatorImages,
  blogs,
  genderCategory,
  activityCategory,
  typeCategory,
  colorCategory,
  sizeCategory,
  featuresCategory,
  brandsCategory
};
