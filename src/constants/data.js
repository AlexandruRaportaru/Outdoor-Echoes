import images from './images';
import { IoIosMan, IoIosWoman } from 'react-icons/io';
import { ImManWoman, ImHome3 } from 'react-icons/im';
import { FaLayerGroup } from 'react-icons/fa';
import { GiLightBackpack, GiCampingTent } from 'react-icons/gi';

const productsExamples = [
  'A T-SHIRT',
  'LEGGINGS',
  'A JACKET',
  'SUNGLASSES',
  'A FLEECE',
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
    title: 'Products',
    path: '/products',
    icon: <FaLayerGroup style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Men',
    path: '/products/gender_Men',
    icon: <IoIosMan style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Women',
    path: '/products/gender_Women',
    icon: <IoIosWoman style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Kids',
    path: '/products/gender_Kids',
    icon: <ImManWoman style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Accessories',
    path: '/products/type_Accessories',
    icon: <GiLightBackpack style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Equipment',
    path: '/products/type_Equipment',
    icon: <GiCampingTent style={{margin: '0 15px 4px 0'}}/>,
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
    path: 'Adidas',
    slideParagraph: <span>Adventure awaits. Hit the trail with gusto in adidas <br/> hiking shoes and boots for adults and kids. Count on <br/>all-weather performance and comfort on any terrain.</span>
  },
  {
    slideBrand: images.columbiaBanner,
    slideName: 'columbia-banner',
    slideLogo: images.columbiaLogo,
    logoSize: 20,
    slideTitle: <span>“Nature isn't the only <br/> mother of invention.”</span>,
    path: 'Columbia',
    slideParagraph: <span>Gert Boyle - Founder of Columbia Sportswear</span>
  },
  {
    slideBrand: images.diamondBanner,
    slideName: 'diamond-banner',
    slideLogo: images.diamondLogo,
    logoSize: 15,
    slideTitle: 'HIKING & TREKKING',
    path: 'Black Diamond',
    slideParagraph: <span>From quick jaunts on your favorite local trail to multi-day <br/> adventures in remote mountains, this is the gear to take you there.</span>
  },
  {
    slideBrand: images.haglofsBanner,
    slideName: 'haglofs-banner',
    slideLogo: images.haglofsLogo,
    logoSize: 20,
    slideTitle: <span>Keep the heat, <br/> lose the moisture</span>,
    path: 'Haglofs',
    slideParagraph: <span>We try to make the most sustainable products <br/> we can at Haglöfs because we love the outdoors.</span>
  },
  {
    slideBrand: images.mammutBanner,
    slideName: 'mammut-banner',
    slideLogo: images.mammutLogo,
    logoSize: 20,
    slideTitle: 'EXPLORE THE PEAKS',
    path: 'Mammut',
    slideParagraph: <span>Get the best possible outdoor experience with <br/> best-selling gear backed by 160 years <br/> of passion and know-how.</span>
  },
  {
    slideBrand: images.merrellBanner,
    slideName: 'merrell-banner',
    slideLogo: images.merrellLogo,
    logoSize: 20,
    slideTitle: 'HIKE IT BABY!',
    path: 'Merrell',
    slideParagraph: <span>Once your little one has learned to walk, gear up for <br/> all the adventures in store with a great pair <br/> of kids’ shoes from Merrell.</span>
  },
  {
    slideBrand: images.northBanner,
    slideName: 'north-banner',
    slideLogo: images.northLogo,
    logoSize: 14,
    slideTitle: 'STEP INTO YOUR STORY',
    path: 'The North Face',
    slideParagraph: <span>To break records, or break down barrers. Everyone goes there <br/> for a different reason. Only you can discover your trail.</span>
  },
  {
    slideBrand: images.ospreyBanner,
    slideName: 'osprey-banner',
    slideLogo: images.ospreyLogo,
    logoSize: 14,
    slideTitle: 'BEST BACKPACK OF 2022',
    path: 'Osprey',
    slideParagraph: <span>The Osprey Anti-Gravity Suspension System <br/> makes even heavy loads seem lightweight.</span>
  },
  {
    slideBrand: images.petzlBanner,
    slideName: 'petzl-banner',
    slideLogo: images.petzlLogo,
    logoSize: 14,
    slideTitle: 'Access the inaccessible',
    path: 'Petzl',
    slideParagraph: <span>Petzl headlamps have been in constant <br/> evolution for over 40 years. <br/> Grab one for your gear.</span>
  },
  {
    slideBrand: images.salewaBanner,
    slideName: 'salewa-banner',
    slideLogo: images.salewaLogo,
    logoSize: 14,
    slideTitle: 'Hike & camp',
    path: 'Salewa',
    slideParagraph: <span>Mountains are our mentors, never judging yet <br/> offering endless possibilities. Mountains connect <br/> us to one another. They are the bond that <br/> unites our community.</span>
  },
  {
    slideBrand: images.salomonBanner,
    slideName: 'salomon-banner',
    slideLogo: images.salomonLogo,
    logoSize: 20,
    slideTitle: <span>New season, <br/> new adventures</span>,
    path: 'Salomon',
    slideParagraph: <span>Time to play in the wild. Come with us and explore <br/> new lands without fear. Join us.</span>
  },
  {
    slideBrand: images.sportivaBanner,
    slideName: 'sportiva-banner',
    slideLogo: images.sportivaLogo,
    logoSize: 15,
    slideTitle: 'Mountain running boots',
    path: 'La Sportiva',
    slideParagraph: <span>Gore-Tex membranes and La Sportiva technologies guarantee, <br/> snug fit, lightweight and waterproofing combined with <br/> technical performance and durability.</span>
  },
  {
    slideBrand: images.summitBanner,
    slideName: 'summit-banner',
    slideLogo: images.summitLogo,
    logoSize: 20,
    slideTitle: <span>Live the luxury <br/> in the wild</span>,
    path: 'Sea To Summit',
    slideParagraph: <span>The Telos two-person freestanding tent will radically change your <br/> perception of what an ultralight backpacking tent can be.</span>
  },
  {
    slideBrand: images.vaudeBanner,
    slideName: 'vaude-banner',
    slideLogo: images.vaudeLogo,
    logoSize: 20,
    slideTitle: 'QUALITY GUARANTEE',
    path: 'Vaude',
    slideParagraph: <span>Because we know prioritizing durability results <br/> in consuming less energy, wasting less <br/> water and creating less trash.</span>
  },
]



const activitiesCards = [
  {
    cardActivity: images.runningCard,
    cardName: 'running-card',
    cardHeight: 400,
    cardTitle: 'Running',
    cardClass: 'card1',
    path: 'Trail running',
  },
  {
    cardActivity: images.campingCard,
    cardName: 'camping-card',
    cardHeight: 450,
    cardTitle: 'Camping',
    cardClass: 'card2',
    path: 'Camping',
  },
  {
    cardActivity: images.hikingCard,
    cardName: 'hiking-card',
    cardHeight: 500,
    cardTitle: 'Hiking',
    cardClass: 'card3',
    path: 'Hiking',
  },
  {
    cardActivity: images.climbingCard,
    cardName: 'climbing-card',
    cardHeight: 450,
    cardTitle: 'Climbing',
    cardClass: 'card4',
    path: 'Climbing',
  },
  {
    cardActivity: images.expeditionsCard,
    cardName: 'expeditions-card',
    cardHeight: 400,
    cardTitle: 'Expeditions',
    cardClass: 'card5',
    path: 'Expeditions',
  },
]



const products = [
  //* -------------------------------------------------------- FOOTWEAR MEN ---------------------------------------------------------- *//
  {
    id: '001',
    name: 'Adidas Terrex Swift R2 Hiking Shoes',
    type: 'Footwear',
    brand: 'Adidas',
    images: [
      images.swiftR2First,
      images.swiftR2Second,
      images.swiftR2Third
    ],
    size: [
      41 + 'EU',
      42 + 'EU',
      44 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>Moving quickly and smoothly all over the mountain has always been the goal of adidas’s beloved Terrex series. If you have been asking yourself why hiking practitioners around the world love these sneakers, look no further than the adidas Terrex Swift R2 trail running shoes.</span>,
    description: <span>
       Terrex is widely recognized for the durability and adaptability of its products and the Swift R2 is no exception, with a ripstop mesh upper specially designed to keep your foot safe thanks to the delightful interaction between TPU reinforcements and a molded TPU toecap. Putting on these shoes is faster and easier than ever thanks to the Lace Bungee, which automatically fastens cables just by touching a button and pulling the safety device around them. <br /><br /> In the sole unit, the legendary Traxion outsole, made of Continental™ compound rubber, provides phenomenal grip on steep terrain no matter how wet or difficult to get through. Thanks to a lightweight, soft EVA midsole, cushioning is of paramount importance in the Swift R2, providing greater comfort when speeding through complex terrain and climbing angled hills. Move swiftly through the mountains in these mens hiking shoes. The lightweight, breathable build features a speed lacing system. A rugged Traxion outsole with grippy Continental Rubber supports travel over any terrain, wet or dry.<br /><br />
       Features: <br />
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
    features: ['-'],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '011',
    name: 'Columbia Firecamp Fleece III Hiking Shoes',
    type: 'Footwear',
    brand: 'Columbia',
    images: [
      images.firecampFleece3First,
      images.firecampFleece3Second,
      images.firecampFleece3Third
    ],
    size: [
      44 + 'EU',
      45 + 'EU',
      46 + 'EU',
    ],
    description: <span>
      Features: <br />
      - Textile upper; <br />
      - 100g critical insulation and fleece lining; <br /> 
      - Techlite™ lightweight midsole for long lasting comfort, superior cushioning, and high energy return; <br />
      - Omni-Grip™ non-marking traction rubber.
    </span>,
    price: 261.00,
    gender: 'Men',
    color: 'Blue',
    weight: '300 g',
    features: [
      'Thermal'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '022',
    name: 'Black Diamond Shadow LV Climbing Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
    images: [
      images.shadowLVFirst,
      images.shadowLVSecond,
      images.shadowLVThird
    ],
    size: [
      41 + 'EU',
      43 + 'EU',
      44 + 'EU',
      45 + 'EU',
    ],
    shortDescription: <span>Push boundaries and climb the highest peak with Black Diamond Shadow LV that offers the perfect balance while you are out there exploring! A mountaineer’s best friend, it is constructed especially for hiking approaches and is lightweight and comfortable to wear. This versatile shoe is constructed to offer technical functionality and durability in the unpredictable mountain environment. </span>,
    description: <span>
      Features: <br />
      - LV last—for low volume feet;<br />
      - Aggressive, downturned last for steep routes and bouldering; <br />
      - 4.3mm BD BlackLabel-Fuse Rubber outsole is molded for superior grip, optimal consistency, and performance; <br />
      - Engineered Knit Technology tongue provides exceptional breathability and comfort; <br />
      - Minimalist midsole for extra sensitivity on steep terrain; <br />
      - A combination of printed and molded high friction rubber on top of the foot maximizes durability, dexterity and grip for toe-hooking; <br />
      - Velcro strap for fit adjustability.
    </span>,
    price: 578.00,
    gender: 'Men',
    color: 'Black',
    weight: '-',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '031',
    name: 'Haglöfs Duality AT1 Goretex Hiking Boots',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.dualityat1First,
      images.dualityat1Second,
      images.dualityat1Third
    ],
    size: [
      42 + 'EU',
      44 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>These are the new boots for climbing and mountaineering DUALITY AT1 GORETEX, its innovative and resistant design guarantees you a comfortable and pleasant day, thanks to the incorporation of GORETEX technology it gives you great elasticity and coupling to your foot. They are made with recycled and water repellent fabrics to keep you cool at all times. </span>, 
    description: <span>
      Features: <br />
      - GORE-TEX® Extended Comfort with stretch offers ideal breathable waterproofing; <br />
      - Extensive heel support and toe protection for stability and durability; <br />
      - Premium leather from a tannery audited by the Leather Working Group; <br />
      - Fluorocarbon free DWR-treated surfaces help repel water & dirt; <br />
      - Engineered patterned outsole provides high traction and stability; <br />
      - AHAR™ Plus (ASICS® High Abrasion Resistance Rubber) on the outsole heel adds durability; <br />
      - Algae-based BLOOM FOAM™ in midsoles for excellent comfort, saving fresh water and CO2; <br />
      - Knitted upper with sock comfort, made from 100% recycled polyester; <br />
      - Finger loop webbing on heel and tongue for easy use; <br />
      - Webbing and laces made from 100% recycled polyester; <br />
      - Waterproof flex test:200,000 steps; <br />
      - Upper:Fluorocarbon free water repellent 1.4 -1.6 mm nubuck from LWG audited tannery (Gold/Silver rated) with lower environmental footprint; <br />
      - Recycled polyester (knitting and laces); <br />
      - Lining:GORE-TEX® Extended Comfort; <br />
      - Midsole:Bloom Foam; <br />
      - Heel encounter:Bio TPU; <br />
      - Outsole:WET GRIP Rubber™ / AHAR™ Plus on heel area.
    </span>,
    price: 913.00,
    gender: 'Men',
    color: 'Green',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '033',
    name: 'Haglöfs L.I.M FH Goretex Low Hiking Boots',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.limfhFirst,
      images.limfhSecond,
      images.limfhThird
    ],
    size: [
      43 + 'EU',
      45 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>These trekking boots are made with a resistant outsole that provides excellent traction in various types of surfaces and a FlyteFoam midsole that gives superior cushioning. Besides, they include a supported heel and ankle strap with padded Cordura fabric that offers greater softness in each step.</span>,
    description: <span>
      Haglöfs L.I.M FH Goretex Low Hiking Boots present us with a low-cut model of this durable, waterproof, breathable design with maximum grip on any terrain, so you can enjoy hiking with all protection against unexpectable weather changes. <br /><br />
      Features: <br />
      - Super lightweight low cut design; <br />
      - Made with GORE-TEX for durable weather protection; <br />
      - High performance-to-weight ratio; <br />
      - FlyteFoam high impact cushioning for big distances; <br />
      - Wet grip traction sole; <br />
      - TPU performance protection; <br />
      - Ripstop vamp for lightweight durability; <br />
      - Securely encased instep for security and comfort; <br />
      - Folding external tongue; <br />
      - Supportive heel cup; <br />
      - Easy fix lacing system; <br />
      - Sublimation print echoes Zenith line; <br />
      - TPU protection on lateral and medial sides.
    </span>,
    price: 518.00,
    gender: 'Men',
    color: 'Blue',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '041',
    name: 'La Sportiva Blizzard Goretex Trail Running Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.blizzardFirst,
      images.blizzardSecond,
      images.blizzardThird
    ],
    size: [
      41 + 'EU',
      45 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>When winter running sessions are long and difficult La Sportiva Blizzard Gore-tex is an ideal running shoe for all round mountaineering activities. This versatile shoe offers technical functionality and comfort in the unpredictable mountain environment.</span>,
    description: <span>
       The sure-grip Frixion AT 2.0 outsole which enables the boots to penetrate into the ground and creates a good traction against the wet rocks while you are trail running. The Gore-tex Extended Comfort lining provides optimized breathability and waterproofing even in wet and slippery surfaces. It works exceptionally well in all sorts of trails. Thanks to the integrated 4-way stretch gaiter keep out trail debris, such as grit and leaves. <br /><br /> It is an ultimate mountaineering shoes designed especially for all adventure-sport junkies. La Sportiva Blizzard Gore-tex is the answer if you are looking for perfect trail running shoe that provides protection, traction and comfort. Winter Running Shoe with Gore-Tex® membrane and waterproofable leg-repellent leggings It includes nails integrated in the sole for a maximum grip. <br /><br /> Designed for extreme uses in frozen and sliding terrain.
    </span>,
    price: 1007.00,
    gender: 'Men',
    color: 'Black',
    weight: '300 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    id: '042',
    name: 'La Sportiva Mythos Climbing Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.mythosFirst,
      images.mythosSecond,
      images.mythosThird
    ],
    size: [
      41 + 'EU',
      44 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>A climber’s best friend La Sportiva Mythos is typically a slipper with a twist that is lightweight and comfortable to wear. This versatile shoe is constructed to offer technical functionality and durability in the unpredictable mountain environment as well as in your gym.</span>,
    description: <span>
      Features: <br /> 
      - Perfect synthesis of technology, comfort and performance. It is the most versatile model of the entire range, because it is suitable for all kinds of rock. The tested lacing system and the perfect stiffness of the midsole offer the best compromise between sensitivity and friction; <br />
      - Upper:Suede leather, slip lasted; <br />
      - Lining:None; <br />
      - Fit:Medium; <br />
      - Sole:Vibram XS Edge de 4mm; <br />
      - Patent:Lacing system; <br />
      - Weight:Gr. 450 per pair.
    </span>,
    price: 516.00,
    gender: 'Men',
    color: 'Brown',
    weight: '450 g',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '043',
    name: 'La Sportiva Nepal Cube Goretex Expeditions Boots',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.nepalcubeFirst,
      images.nepalcubeSecond,
      images.nepalcubeThird
    ],
    size: [
      41 + 'EU',
      42 + 'EU',
      44 + 'EU',
      45 + 'EU',
    ],
    shortDescription: <span>The ultralight Gore-tex boots in the market La Sportiva Nepal Cube Gore-tex is ideal for high intensity via ferrata or mountain hiking. This versatile boot always offers technical functionality and comfort in the wild mountain environment. Thanks to the innovative carbon tech honeycomb that is lightweight and stiff offers maximum comfort and support in the wild rugged terrains.</span>,
    description: <span>
      The addition of 3D flex system to the ankle provides support and control on the rugged terrains. Also, the removable and adjustable tongue liner offers a secure and precise fit to your fit that makes it ideal for mixed climbing, winter mountaineering and other mountain activities. <br /><br /> Without a doubt, it is an ultimate mountaineering boots designed especially for all adventure-sport junkies. La Sportiva Nepal CubeGore-tex is the answer if you are looking for perfect boots that provides protection, traction and comfort. Nepal Cube, as the name suggests, is a new starting point for defining technical mountaineering boots thanks to the exceptional lightweight and thermal properties (a mere 825g per half pair). <br /><br /> Features: <br /> 
      - Uppers: 3+ mm Hydro Perwanger Leather waterproof; <br />
      - Lining: Insulated Comfort Gore-Tex; <br />
      - Insole: Carbon Tech honeycomb isolation; <br />
      - Midsole: 2mm Polyurethane graded for crampon attachment; <br />
      - Sole: Re soleable Vibram with Impact Brake System, fully crampon compatible; <br />- Patents: Registered design; <br />
      - Sizes: 36 – 48 (including half sizes); <br />
      - Weight: 1780 g (pair, size 42); <br />
      - Reduced weight mini steel parts reduce the overall weight of the boot; <br />
      - 3D Flex System promotes ease of walk and supports the ankle on steep ground; <br />- All-round rubber rand protects against knocks and abrasion; <br />
      - EZ Out removeable tongue allows a more precise regulation of the fit and helps to eliminate sweat via a mess fabric which draws humidity to the outside of the boot.
    </span>,
    price: 2354.00,
    gender: 'Men',
    color: 'Yellow',
    weight: '1780 g',
    features: [
      'Windproof',
      'Thermal'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '051',
    name: 'Mammut Nordwand 6000 Expeditions Boots',
    type: 'Footwear',
    brand: 'Mammut',
    images: [
      images.nordwand6000First,
      images.nordwand6000Second,
      images.nordwand6000Third
    ],
    size: [
      42 + 'EU',
      44 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>A Gaiter Boot With Removable Liner For Demanding High-Altitude Mountaineering, Ice And Mixed Climbing. The Rigid Vibram Litebase Sole Scores With Low Weight And Excellent Cushioning. Thanks To The Boa® Fit System, Fast And Precise Adjustment Is Possible, Even With Gloves.</span>,
    description: <span>
       This High Alpine Boot Is Made With Abrasion-Proof Materials, Aluminia Insulation And Has A Double-Insulated Midsole For Extreme Durability And Insulation. On Your Next Adventure, The Nordwand 6000 Will Redefine The True Meaning Of Stability And Lightness. <br /><br /> Features: <br />
      - Raised Rubber Rand; <br />
      - Suitable For C3 Automatic Crampons With A Heel Lever And Metal Toe Bail; <br />
      - Easy Resoling; <br />
      - Waterproof Zipper; <br />
      - Boa® Fit System: Delivers Dialed In Performance And A Micro-Adjustable, Precision Fit. Can Be Operated While Wearing Gloves; <br />
      - Board Lasting; <br />
      - Insulated Carbon Insole: Patented, Double-Insulated Carbon Insole Allows Maximum Weight Reduction While Providing Rigidity And Excellent Insulation; <br />
      - Separate Shoe Liner; <br />
      - Elastic Knitted Sock Construction; <br />
      - Vibram Litebase; <br />
      - Flex Index: B3; <br />
      - Lace System: Boa® Fit System; <br />
      - Soles: Insulated Carbon Insole; <br />
      - Material: Pu Protection' <br />
      - Lining: Aluminia Insulation.
    </span>,
    price: 3589.00,
    gender: 'Men',
    color: 'Black',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '052',
    name: 'Mammut Mercury IV Low Goretex Hiking Shoes',
    type: 'Footwear',
    brand: 'Mammut',
    images: [
      images.mercuryFirst,
      images.mercurySecond,
      images.mercuryThird
    ],
    size: [
      41 + 'EU',
      45 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>The new and improved version of our bestseller combines all the features hikers are looking for on their tours. The Mercury IV Low GTX has a flexible and grippy Vibram sole for optimum sure-footedness on day hikes. Damping 3D Memo Foam in the lining and insole as well as a breathable, waterproof GORE-TEX membrane ensure superlative comfort.</span>,
    description: <span>
       High-quality terracare® nubuck leather gives the shoe stability and durability. The terracare® leather, sustainably produced in Germany, and GORE-TEX footwear 3L are bluesign®-certified to protect our environment. <br /><br /> Features: <br />
      - Flex index: A6; <br />
      - Lace system: Standard lacing; <br />
      - Soles: High rebound EVA wedge; <br />
      - Material: Nubuk leather; <br />
      - Lining: GORE-TEX Footwear; <br />
      - Board lasting; <br />
      - 3D Memo Foam: cushioning adapts to your foot shape for exceptional comfort, support, and blister prevention; <br />
      - Vibram sole; <br />
      - Weight (UK 8.5): 490 g.
    </span>,
    price: 718.00,
    gender: 'Men',
    color: 'Brown',
    weight: '490 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '061',
    name: 'Merrell Moab Flight Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.moabflightFirst,
      images.moabflightSecond,
      images.moabflightThird
    ],
    size: [
      41 + 'EU',
      42 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>MOAB FLIGHT TRAIL RUNNING are the new MERRELL running shoes, featuring an upper made of fully breathable recycled mesh. It has a very practical and comfortable braided fastening system with a padded tongue. It has a midsole made with Float Pro Foam technology that provides a light footprint and optimal cushioning.</span>,
    description: <span>
      Features: <br />
      - 70% recycled mesh upper; <br />
      - 100% recycled laces; <br />
      - Breathable mesh lining; <br />
      - EVA foam insole with 50% recycled top sheet; <br />
      - Removable PU foam insole; <br />
      - FloatPro Foam™ midsole for a lightweight ride that lasts; <br />
      - Vibram® EcoDura is 30% recycled rubber; <br />
      - Weight:540g; <br />
      - Lug:3mm.
    </span>,
    price: 430.00,
    gender: 'Men',
    color: 'Blue',
    weight: '540 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: true,
  },
  {
    id: '062',
    name: 'Merrell Nova II Mid Goretex Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.nova2midFirst,
      images.nova2midSecond,
      images.nova2midThird
    ],
    size: [
      42 + 'EU',
      44 + 'EU',
      46 + 'EU',
    ],
    shortDescription: <span>Merrell Nova II Mid Goretex Trail Running Shoes are the perfect companion to explore the most complex terrains of the mountains since they offer maximum grip, stability, cushioning, breathability, and waterproof protection so you can be prepared in the event of rain or to cross puddles.</span>,
    description: <span>
      Features: <br />
      - Mesh and TPU upper; <br />
      - Traditional lace closure; <br />
      - Padded collar; <br />
      - External rear sling locks in the heel; <br />
      - Breathable mesh lining; <br />
      - Removable EVA insole; <br />
      - Rock plate for protection; <br />
      - Merrell Air Cushion in the heel absorbs shock and adds stability; <br />
      - Forefoot and heel cushioning pods; <br />
      - Lightweight EVA foam midsole for stability and comfort; <br />
      - Vibram® TC5+ rubber sole; <br />
      - Weight:680g; <br />
      - Lug depth:5mm; <br />
      - GORE-TEX® InvisibleFit; <br />
      - Merrell Air Cushion; <br />
      - Vibram® TC5+; <br />
      - Vegan friendly; <br />
      - Recycled.
    </span>,
    price: 430.00,
    gender: 'Men',
    color: 'Black',
    weight: '680 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: true,
  },
  {
    id: '063',
    name: 'Merrell Intercept Hiking Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.interceptFirst,
      images.interceptSecond,
      images.interceptThird
    ],
    size: [
      41 + 'EU',
      43 + 'EU',
      45 + 'EU',
    ],
    shortDescription: <span>Merrell Intercept Hiking Shoes are all-terrain footwear that provides excellent protection, maximum grip, cushioning, stability, breathability, and comfort during your outdoor activities, such as hiking, with a robust design that speaks for itself.</span>,
    description: <span>
      Features: <br />
      - Full grain leather upper; <br />
      - Breathable mesh lining wicks to keep feet dry; <br />
      - Bellows tongue keeps debris out; <br />
      - Abrasion resistant toe cap; <br />
      - Molded nylon arch shank; <br />
      - Merrell In-Board ™ compression molded EVA footframe provides cushioning; <br />
      - Merrell Air Cushion ™ in the heel absorbs shock and adds stability; <br />
      - Vibram® TC5+ outsole for traction in all weather and temperature conditions.
    </span>,
    price: 426.00,
    gender: 'Men',
    color: 'Green',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '101',
    name: 'Salomon Supercross 4 Goretex Trail Running Shoes',
    type: 'Footwear',
    brand: 'Salomon',
    images: [
      images.supercross4First,
      images.supercross4Second,
      images.supercross4Third
    ],
    size: [
      41 + 'EU',
      43 + 'EU',
      45 + 'EU',
    ],
    shortDescription: <span>Defi antly powerful, grippy and serious about trail adventuring. A super-charged trail shoe that channels grip from the ground up.SUPERCROSS 4 GTX® is a no-compromise trail renegade with even bigger lugs and extra grooves for maximum mud shedding and powered grip.</span>,
    description: <span>
      Its tire-like outsole acts in fusion with the toughened, waterproof upper and Sensifi t construction for superior hold, fit and undeniable comfort.
    </span>,
    price: 623.00,
    gender: 'Men',
    color: 'Yellow',
    weight: '300 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    id: '106',
    name: 'Salomon Quest 4 Goretex Hiking Boots',
    type: 'Footwear',
    brand: 'Salomon',
    images: [
      images.quest4First,
      images.quest4Second,
      images.quest4Third
    ],
    size: [
      41 + 'EU',
      42 + 'EU',
      45 + 'EU',
    ],
    shortDescription: <span>The Salomon Quest 4 Goretex Hiking Boots are prepared to take you to explore the riskiest trails of the mountains with total safety, grip, stability, and additional support that this new version presents so you can feel more protected than ever during your hiking or mountaineering activities.</span>,
    description: <span>
      These trekking boots with high cut were designed with the Goretex membrane that has high water resistance, so you can keep walking even in the rain or in the middle of puddles and rivers. The foot will maintain completely dry since this technology also favors breathability and inner ventilation.<br /><br /> The Contagrip TC outsole provides maximum grip and durability thanks to the pattern of deep studs that has the best traction on soft, wet, or rocky surfaces. These hiking boots include an ADV C 4D Chassis, which improves stability and support and protects ankle joints, very necessary for long excursions or several days.<br /><br /> The upper features an aggressive design with printed laces that are held by the metal eyelets and it is made with leather and fabric materials that provide softness, breathability, and great abrasion resistance. The Stable & Supportive Backpacking Shoe That Delivers A Smooth Ride.<br /><br />
      Specifications:<br />
      - Drop: 12mm;<br />
      - Weight: 655gr.<br /><br />
      Technology:<br />
      - Gore-Tex.
    </span>,
    price: 988.00,
    gender: 'Men',
    color: 'Brown',
    weight: '655 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '121',
    name: 'The North Face Ultra Endurance XF Trail Running Shoes',
    type: 'Footwear',
    brand: 'The North Face',
    images: [
      images.ultraEnduranceFirst,
      images.ultraEnduranceSecond,
      images.ultraEnduranceThird
    ],
    size: [
      41 + 'EU',
      42 + 'EU',
      44 + 'EU',
    ],
    shortDescription: <span>The North Face Ultra Endurance XF Hiking Shoes have been designed with maximum support and cushioning, ideal for more complex and sharp terrains where you need greater protection, and also provide breathability, durability, great traction, and fast-drying, characteristics necessary in trail running activities.</span>,
    description: <span>
      The EXTS outsole with 3mm studs gives maximum grip and traction in several terrains and surfaces and the XtraFoam midsole is responsible for offering excellent stability, firm support, and greater cushioning than regular foams. These trail running shoes come with an Ortholite Eco LT Hybrid insole that increases smooth step, odor control, and breathability. The upper is made with mesh so the foot stays fresh and the TPU toe cap without seams for greater protection and durability.<br /><br /> The Ultra Endurance Trail Shoe was purpose built for the most technical trails with superior cushioning and lightweight protection. A dynamic air mesh upper supports your foot and lets it breathe, while no-sew TPU toe and midfoot overlays ensure a natural fit. You’ll also be well looked after underfoot. A plant-based OrthoLite® Eco LT footbed eliminates sweat and odours. <br /><br /> A dual-density XtraFoam™ midsole provides incredible comfort and always regains its original shape. Our EXTS™ traction system together with 3 mm outsole lugs make these shoes super durable and grippy for all your trail adventures.
    </span>,
    price: 389.00,
    gender: 'Men',
    color: 'Grey',
    weight: '300 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },

  //* ----------------------------------------------------------- FOOTWEAR WOMEN --------------------------------------------------------- *//
  {
    id: '002',
    name: 'Adidas Terrex Free Hiker Hiking Shoes',
    type: 'Footwear',
    brand: 'Adidas',
    images: [
      images.freeHikerFirst,
      images.freeHikerSecond,
      images.freeHikerThird
    ],
    size: [
      36 + 'EU',
      37 + 'EU',
      38 + 'EU',
      39 + 'EU',
    ],
    shortDescription: <span>The coldest months of the year demand new tools for the job, and there is no place where this is more true than on the cold mountain trails. With an upper so revamped that it could pass for a completely new product, the adidas Free Hiker C.RDY hiking boots update the Free Hiker series’ excellent performance for those days when humidity and cold hit hardest.</span>,
    description: <span>
       The 3-stripes brand blends a GORE-TEX® layer with an advanced high-cut design that seals the foot completely at the ankles, resulting in total insulation from cold and moisture that will keep your feet dry and safe at all times. A sealed zipper runs across the center of the instep to the high neck to ensure that wearing these boots is comfortable enough without reducing support, while abundant TPU reinforcements along the toe and midfoot increase durability and protection. <br /><br /> The Free Hiker series fans will be pleased to know that the legendary Continental™ rubber outsole continues to provide phenomenal traction on rugged terrain. The boost™ midsole, on the other hand still has the smooth, competent cushioning that gave worldwide renown to it. Terrex Free Hiker COLD.RDY Hiking Boots. Hiking in cold or winter scenarios has never been so nice. This adidas Terrex Free Hiker shoe was specifically designed for ultimate comfort on long hikes. Its socklike Primeknit upper, paired with COLD.RDY technology and water-repellent insulation fit snugly around the foot for a comfortable, warm fit. In addition, thanks to the waterproof GORE-TEX membrane, even difficult wet conditions are no problem.<br /><br />
      Features: <br />
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
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '012',
    name: 'Columbia 60 Low Outdry™ Hiking Shoes',
    type: 'Footwear',
    brand: 'Columbia',
    images: [
      images.facet60First,
      images.facet60Second,
      images.facet60Third
    ],
    size: [
      37 + 'EU',
      38 + 'EU',
      39 + 'EU',
    ],
    description: <span>
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
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '023',
    name: 'Black Diamond Mission Mid WP Hiking Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
    images: [
      images.missionFirst,
      images.missionSecond,
      images.missionThird
    ],
    size: [
      36 + 'EU',
      38 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>Built for the long-haul, the Mission Leather Mid WP is an approach shoe that provides ankle protection and support when heading into the hills with heavy packs and big objectives on the horizon. Featuring a waterproof/ breathable BD.dry lining combined with a high-grade Nubuck leather upper, the Mission Leather Mid WP keeps you dry while moving through stream crossings and snow fields.</span>,
    description: <span>
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
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '024',
    name: 'Black Diamond Method Climbing Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
    images: [
      images.methodFirst,
      images.methodSecond,
      images.methodThird
    ],
    size: [
      37 + 'EU',
      38 + 'EU',
      39 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>Built for sending sport pitches, from the blocky limestone of Rifle to the enduro sandstone of the Red. With a women’s specific last that’s lower volume and a minimal break-in period, the Method is easy on the feet out of the box, while maintaining stiff edge control for increased power for newer outdoor climbers.</span>,
    description: <span>
       With a downturned last that’s not ultra-aggressive, these shoes perform well on a variety of angles, from steep to vertical, making them a one-quiver sport shoe for those who value simplicity. <br /><br />
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
    weight: '-',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '035',
    name: 'Haglöfs LIM Low Hiking Shoes',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.limlowFirst,
      images.limlowSecond,
      images.limlowThird
    ],
    size: [
      36 + 'EU',
      39 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>This is the first shoe we´ve made with a monosock construction, giving it a foot-hugging fit that makes it an extra-light choice for great performance on shorter hikes. As a result, it´s right at home in our L.I.M range - where every extra ounce is discarded, but all of the functionality and durability remains.</span>,
    description: <span>
      Features: <br />
      - It´s built from tough, breathable mesh, making it a good choice on the trail; <br />
      - Reinforcements are provided by a tough rubber counter and synthetic leather to stabilize.
    </span>,
    price: 416.00,
    gender: 'Women',
    color: 'Blue',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '036',
    name: 'Haglöfs Ridge Mid GT Hiking Boots',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.ridgemidFirst,
      images.ridgemidSecond,
      images.ridgemidThird
    ],
    size: [
      36 + 'EU',
      38 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>The Rigged GT shoes is another great company boot for longer trips, and one that uses the excellent Asics FluidRide technology for a natural and balanced movement. GEL technology provides cushioning. Waterproofed with GORE TEX.</span>,
    description: <span>
      Features: <br />
      - GEL™ rear foot cushioning for excellent shock absorption; <br />
      - WET GRIP Rubber™ compound provides extraordinary traction, even in wet conditions; <br />
      - SpEVA™ midsole that improves cushioning and bounce back; <br />
      - I.G.S Impact Guidance System allows the foot to perform in a more natural motion; <br />
      - AHAR™ Plus ( ASICS® High Abrasion Resistance Rubber) on outsole heel for excellent durability; <br />
      - GORE-TEX®® Extended Comfort offers ideal breathable waterproofing; <br />
      - Trusstic chassis to provide stability, torsion control; <br />
      - Moulded rubber reinforced toe and Rubber heel for increased protection; <br />
      - Ecsaine® heel collar lining for comfort and best durability; <br />
      - Tongue gusset to prevent water and sand from entering the footwear; <br />
      - Mid cut profile for extra ankle support, stability and protection.
    </span>,
    price: 677.00,
    gender: 'Women',
    color: 'Black',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '044',
    name: 'La Sportiva Ultra Raptor II Trail Running Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.ultraraptorFirst,
      images.ultraraptorSecond,
      images.ultraraptorThird
    ],
    size: [
      37 + 'EU',
      38 + 'EU',
      39 + 'EU',
    ],
    shortDescription: <span>The Ultra Raptor Ii Women´s Is An All-Terrain Mountain Running® Shoe Perfect For Long Distance Runs And Ventures Off The Beaten Path. A Full-Length Rock Guard And An Ultra Sticky Rubber Outsole Offers Maximum Protection And Stability, While The Wicking Airmesh Mesh Upper Keeps You Cool, Dry, And Comfortable So You Can Continue To Focus On The Trail Ahead Of You.</span>,
    description: <span>
      Features: <br />
      - Aggressive Lugs Combined With Frixion® Rubber And Trail Bite™ Heel Provide All-Terrain Traction And Maximum Grip; <br />
      - Tpu Lacing Harness Provides A Secure, Snug And Supportive Fit; <br />
      - Compression-Molded Eva Midsoles Absorbs Shock And Offers Ample Cushioning While The Endurance Platform Eva Inserts Keep Your Feet Protected; <br />
      - Transkinetic Heel Stabilizer Is Designed To Keep Your Heel Snug For An Enhanced Fit And Increased Stability; <br />
      - Endurance Platform Eva Rock Guard Balances Load And Shock Forces And Protects Your Feet From Sharp Rocks.
    </span>,
    price: 756.00,
    gender: 'Women',
    color: 'Green',
    weight: '295 g',
    features: [
      'Reflective accents'
    ],
    activity: 'Trail running',
    sustainable: true,
  },
  {
    id: '045',
    name: 'La Sportiva Katana Laces Climbing Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.katanaFirst,
      images.katanaSecond,
      images.katanaThird
    ],
    size: [
      36 + 'EU',
      37 + 'EU',
      39 + 'EU',
    ],
    shortDescription: <span>The Katana Lace, Despite Its Downturned Shape, Is A Comfortable All-Day Climbing Workhorse That Performs Well On Slabs And Can Easily Twist Into Thin Cracks But Excels Outside On Steep Single Or Multi-Pitch Routes. The Slightly Downturned Toe And Subtle Asymmetry Ensures You Can Hook Into Pockets Or Exploit The Tiniest Edges While Providing Unrivaled Comfort For The Level That It Performs At. The Katana Lace Is A Veritable Edging Machine Now Available In Men’S And Women’S Styles.</span>,
    description: <span>
      Features: <br />
      - Revolutionary Tubular Construction With P3® Technology Provides Ultimate Comfort And Performance; <br />
      - Highly Breathable Tongue Works In Conjunction With The Shoe Lining For Moisture Management; <br />
      - Outsole Design Varies Between The Katana Lace Men´s (Full-Length) And The Katana Lace Women´s (Half-Length) To Support Climbers Of All Weights And Sizes; <br />
      - Updated Heel Pattern With Increased Rubber Coverage Improves Grip While Heel Hooking; <br />
      - Narrower Heel Sole Design Improves Heel Hooking Precision While Maintaining The Same Known Fit And Feel.
    </span>,
    price: 711.00,
    gender: 'Women',
    color: 'White',
    weight: '250 g',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '046',
    name: 'La Sportiva Trango Ice Cube Goretex Expeditions Boots',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.trangoicecubeFirst,
      images.trangoicecubeSecond,
      images.trangoicecubeThird
    ],
    size: [
      36 + 'EU',
      37 + 'EU',
      39 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>A shoe with an integrated gaiter, the ideal choice for technical use in the mountains, on ice climbs and mixed terrain. Extremely lightweight and comfortable thanks to the seamless construction methods of the uppers made using the Thermo Tech Injection™ technology. The protective, integrated snow gaiter with the water repellent zip makes the product even more waterproof while maintaining unaltered the breathability properties thanks to the use of the Gore-Tex Performance Comfort lining.</span>,
    description: <span>
       The HoneyComb Tech carbon footbed guarantees a firm grip and contained weigh. The all-around PU TechLite™ rand contributes to keeping volumes compact without compromising protection. Trango Ice Cube is fully crampon compatible and resolable: ideal for more technical mountaineering and both summer and winter climbs. Similar to other products in the Trango range the 3D Flex System helps to increase ankle movement thereby enhancing control and precision even on steep terrain. <br /><br />
      Features: <br />
      - Gaiter: water-resistant, stretch Schoeller fabric heat-sealed, water repellent zip; <br />
      - Uppers: Abrasion resistant fabric Thermo Tech Injection™; <br />
      - a thermo plastic injection coating protective expanded polyurethane rand; <br />
      - Lining : Gore-Tex Insulated Comfort; <br />
      - Underfoot: insulated carbon Honeycomb Tech 3mm; <br />
      - Midsole: shock absorbing polyurethane toe and heel - EVA in the central zone and heel insert crampon compatible TPU inserts (back and front areas); <br />
      - Sole: La Sportiva Cube by Vibram with Impact Brake System lugs on the heel and climbing zone at the toe; <br />
      - Reduced weight and contained volume thanks to the thermo plastic coating on of the uppers; <br />
      - Protective integrated snow shield gaiter with water repellent zip; <br />
      - HoneyComb Tech Foot bed in carbon fibre: lightweight, rigid and un-deformable; <br />
      - Fully crampon compatible shoe, can be resoled; <br />
      - 3D Flex System facilitates ankle movement by increasing the control and the precision on steep terrain.
    </span>,
    price: 2177.00,
    gender: 'Women',
    color: 'Black',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '053',
    name: 'Mammut Nordwand High Goretex Expeditions Boots',
    type: 'Footwear',
    brand: 'Mammut',
    images: [
      images.nordwandhighFirst,
      images.nordwandhighSecond,
      images.nordwandhighThird
    ],
    size: [
      36 + 'EU',
      38 + 'EU',
      39 + 'EU',
    ],
    shortDescription: <span>The Nordwand Knit High GTX takes all kinds of alpine terrain in its stride. This first fully crampon-compatible shoe with a knitted shaft is the result of three years of development work, expressed in material, performance and technology. The Nordwand Knit High GTX conquers demanding technical terrain thanks to an elasticated 3D knitted upper with a seamless design that avoids pressure points.</span>,
    description: <span>
       Its benefits also include a lighter weight. Contact Control ensures an optimum sure-footed step and makes the Nordwand Knit High GTX a companion that is ready for any challenge in the mountains.
    </span>,
    price: 2355.00,
    gender: 'Women',
    color: 'Black',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '054',
    name: 'Mammut Sapuen High Goretex Hiking Boots',
    type: 'Footwear',
    brand: 'Mammut',
    images: [
      images.sapuenFirst,
      images.sapuenSecond,
      images.sapuenThird
    ],
    size: [
      37 + 'EU',
      38 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>The SAPUEN HIGH GORE-TEX® is the correct choice on all types of land. Mammut® Flextron Technology ™ supports natural foot movement and, therefore, a more efficient use of energy in hiking and mountaineering, while Mammut Georganic 3D Technology technology guarantees maximum comfort.</span>,
    description: <span>
       All components in contact with the foot have a high precision anatomical form, while the classic construction of the tongue offers an easy entrance. Optimized for hiking: A vibram® rubber mix for a secure grip on outer surfaces and a sole design that allows self-cleaning. Gore-Tex® waterproof membrane guarantees a dry foot.
    </span>,
    price: 845.00,
    gender: 'Women',
    color: 'Brown',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '064',
    name: 'Merrell Bravada WP Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.bravadaFirst,
      images.bravadaSecond,
      images.bravadaThird
    ],
    size: [
      36 + 'EU',
      39 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>This female-focused hiker features the fit and feel of a sneaker with the traction and performance of a hiker. And with a comfort achilles collar, it reduces common hot spot zones.</span>,
    description: <span>
      Features: <br />
      - M Select™ dry barrier impermeable membrane seals out water and lets moisture escape; <br />
      - Waterproof mesh upper; <br />
      - Attached tongue keeps debris out; <br />
      - Comfort collar reduces hot spots; <br />
      - Kinetic Fit™ BASE removable contoured insole for flexible support; <br />
      - Merrell Air Cushion in the heel absorbs shock and adds stability; <br />
      - EVA foam midsole for stability and comfort; <br />
      - Merrell mountain-grade Quantum Grip™ rubber outsole; <br />
      - Vegan-friendly; <br />
      - 5mm Lug Depth; <br />
      - Weight: 1lbs 6oz / 620g.
    </span>,
    price: 411.00,
    gender: 'Women',
    color: 'Purple',
    weight: '620 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: true,
  },
  {
    id: '065',
    name: 'Merrell Rubato Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.rubatoFirst,
      images.rubatoSecond,
      images.rubatoThird
    ],
    size: [
      37 + 'EU',
      38 + 'EU',
      39 + 'EU',
    ],
    shortDescription: <span>Merrell Rubato Trail Running Shoes have been designed for hiking, running or trail running thanks to its resistant, light, and comfortable materials that will make you fly through the road or the mountains. These running shoes are made with a Vibram Megagrip outsole that offers excellent traction in wet or dry terrains.</span>,
    description: <span>
       The FloatPro midsole is light and durable, while the FlexConnect slots improve the sensation of the ground. <br /><br /> Features: <br />
      - Jacquard and TPU upper; <br />
      - Traditional lace closure; <br />
      - Internal bootie for locked-in fit; <br />
      - External rear sling locks in the heel; <br />
      - Breathable mesh lining; <br />
      - EVA foam insole with 100% recycled top sheet; <br />
      - Removable EVA insole; <br />
      - FLEXconnect® dual-directional flex-grooves in the midsole for enhanced ground connection; <br />
      - FloatPro Foam™ midsole for a lightweight ride that lasts; <br />
      - Vibram® MegaGrip® for the best combination of traction and durability on wet or dry surfaces; <br />
      - Weight:450g; <br />
      - Lug depth:4mm; <br />
      - FLEXconnect®; <br />
      - FloatPro®; <br />
      - Vibram® MegaGrip®; <br />
      - Vegan friendly.
    </span>,
    price: 420.00,
    gender: 'Women',
    color: 'Grey',
    weight: '450 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: true,
  },
  {
    id: '066',
    name: 'Merrell Siren Traveller Hiking Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.sirentravellerFirst,
      images.sirentravellerSecond,
      images.sirentravellerThird
    ],
    size: [
      37 + 'EU',
      38 + 'EU',
      39 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>This waterproof leather trail shoe is designed around the unique shape of a woman´s foot and features an extremely sticky Vibram® sole for traction even when it´s wet.</span>,
    description: <span>
      Features: <br />
      - Waterproof membrane seals out water and lets moisture escape; <br />
      - Full grain leather upper; <br />
      - Metal hook traditional lace closure; <br />
      - Bellows tongue keeps out debris; <br />
      - Breathable mesh lining; <br />
      - Kinetic Fit™ BASE removable contoured insole for flexible support; <br />
      - Merrell Air Cushion in the heel absorbs shock and adds stability; <br />
      - Lightweight EVA foam midsole with zones of softer foam may reduce pronation; <br />
      - Vibram® TC5+ rubber sole; <br />
      - Weight: 724g; <br />
      - Kinetic Fit™ BASE; <br />
      - Merrell Air Cushion; <br />
      - Q FORM™ 2; <br />
      - Vibram® TC5+.
    </span>,
    price: 435.00,
    gender: 'Women',
    color: 'Brown',
    weight: '724 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '102',
    name: 'Salomon Hypulse Goretex Trail Running Shoes',
    type: 'Footwear',
    brand: 'Salomon',
    images: [
      images.hypulseFirst,
      images.hypulseSecond,
      images.hypulseThird
    ],
    size: [
      37 + 'EU',
      38 + 'EU',
      39 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>Salomon Hypulse Goretex Trail Running Shoes are the waterproof version of this model created for fans of the mountain since they can feel safer and more protected against any weather change and keep running throughout each trail.</span>,
    description: <span>
      The Goretex membrane is responsible for forming an impenetrable barrier against water while favors the moisture to escape with the intention that your feet maintain dry at all times. These waterproof shoes are made with a Contagrip outsole that gives great adherence to dry, hard, soft, or slippery surfaces. The midsole has a Fuze Surge foam, curved geometry, and Energy Blade TPU plate that provide dynamism, return of energy, stability, and softness.<br /><br /> The upper has a 3D mesh that allows breathability and circulation of air inside. These sneakers running come with the Sensifit system that wraps the foot to give you greater support, a protective toe cap, and Quicklace laces that allow you an easy and safe lacing. You´re officially addicted. Your runs have become so much fun you want to go faster and explore even further. Designed for both road and trail, HYPULSE GORE-TEX takes your running to the next level with a construction that provides comfortable, dynamic spring. A waterproof, breathable membrane keeps your feet happy regardless of the weather.<br /><br /> 
      Faster and more comfortable:<br />
      - Our lightweight Energy Blade underfoot along with Reverse Camber technology act like a springboard to absorb energy then return it to propel you forward.<br /><br />
      Waterproof and breathable:<br />
      - A Gore-Tex membrane features micropores that are small enough to keep rain and snow out yet large enough for perspiration vapor to escape. Ideal for wet weather running.<br /><br />
      Trail ready features:<br />
      - Make fast and easy adjustments with our Quicklace system. Sensifit provides a secure, snug fit. Contagrip sole provides all-weather grip on hard and soft surfaces.<br /><br />
      Specifications:<br />
      - Lining: Textile;<br />
      - Outsole: Rubber;<br />
      - Upper: Textile / Synthetic;<br />
      - Weight: 249.0 g.<br /><br />
      Energy Blade Trail running:<br />
      - Energy Blade is a lightweight TPU plate built into the springy midsoles. Thanks to a unique synergy with the midsole foam and geometry, it activates forward propulsion and ensures smooth, stable transitions in all trail conditions.<br /><br />
      GORE-TEX:<br />
      - GORE-TEX keeps your feet dry -from the outside as well as from the inside.<br /><br />
      Fuze Surge:<br />
      - Comprised of one of our softest EVA compounds and natural materials, Fuze Surge foam is pillowy for instant comfort and responsive enough to keep rebound levels high. Engineered using less artificial polymers, this midsole compound delivers a more earth-conscious, smooth yet dynamic stride.<br /><br />
    </span>,
    price: 593.00,
    gender: 'Women',
    color: 'Purple',
    weight: '249 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    id: '105',
    name: 'Salomon Cross Hike Mid Goretex 2 Hiking Boots',
    type: 'Footwear',
    brand: 'Salomon',
    images: [
      images.crosshikeFirst,
      images.crosshikeSecond,
      images.crosshikeThird
    ],
    size: [
      37 + 'EU',
      38 + 'EU',
      40 + 'EU',
    ],
    shortDescription: <span>The Cross Hike 2 Mid Gore-Tex Is A Light And Nimble Hiker That Does The Seemingly Impossible: Keeps You Firmly Grounded, Featherlight And Fully Protected. Multi-Directional Deep Lugs Aggressively Bite The Ground, While A Higher Cut Ups The Ankle Support And Protection. Ready For Your Maddest Adventures - No Terrain Or Weather Is Too Tough.</span>,
    description: <span>
      Specifications:<br />
      - Weight: 361gr;<br />
      - Drop: 10mm.<br /><br />
      Technology:<br />
      - Gore-Tex.
    </span>,
    price: 889.00,
    gender: 'Women',
    color: 'Beige',
    weight: '361 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  

  //* ---------------------------------------------------------- UNISEX ------------------------------------------------------ *//


  {
    id: '003',
    name: 'Adidas Terrex Free Hiker Goretex Trail Running',
    type: 'Footwear',
    brand: 'Adidas',
    images: [
      images.goretexFirst,
      images.goretexSecond,
      images.goretexThird
    ],
    size: [
      38 + 'EU',
      39 + 'EU',
      42 + 'EU',
      43 + 'EU',
    ],
    shortDescription: <span>Intending to lead the hiking marketplace is no small feat, but the adidas Terrex Free Hiker GTX trail running shoes will surely achieve this as the Terrex series’ natural evolution. Combining the best features of their high-performance running shoes with the advantages of their more outdoor-oriented designs, these sneakers do not look like anything you have seen so far in the scene.</span>,
    description: <span>
       adidas´ sportiest products inspired the Terrex Free Hiker GTX’s upper, with a Primeknit design that has received anti-wear reinforcements to protect you from difficult terrain. But Primeknit’s outstanding features are not lost by that, with a sock-like design that fits your feet perfectly and maintains the lightweight breathability that it is so well known for. To achieve greater weather protection, adidas has also added a thin GORE-TEX® layer to create an all-around, tight waterproofing. <br /><br /> The already characteristic Continental™ rubber outsole in the Terrex series blends with a boost™ midsole, thus completing a package with great cushioning and responsiveness as well as outstanding traction that will not be deterred by any obstacle. Various TPU reinforcements on the heel and toecap serve as additional protection against injuries and accidents. Move and explore. <br /><br /> These lightweight hiking shoes deliver next-generation comfort and freedom of movement for hikes both long and short. The adidas Primeknit upper hugs your foot for flexible, all-terrain stability, while the Boost midsole delivers endless energy to keep you moving up or down the trail. A GORE-TEX membrane sheds water while letting your feet breathe for all-conditions wear. <br /><br /> Features: <br />
      - Regular fit; <br />
      - Lace closure; <br />
      - adidas Primeknit textile upper; <br />
      - Continental™ Rubber outsole for extraordinary grip even in wet conditions.
    </span>,
    price: 689.00,
    gender: 'Unisex',
    color: 'Brown',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    id: '013',
    name: 'Columbia Summit Trail Running Gloves',
    type: 'Accessories',
    brand: 'Columbia',
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
      Features: <br />
      - Omni-Heat™ thermal reflective; <br />
      - Silicone palm grip; <br />
      - Touch screen compatible finger tip; <br />
      - Reflective detail.
    </span>,
    price: 102.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '-',
    features: [
      'Windproof',
      'Reflective accents'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    id: '032',
    name: 'Haglöfs Nordic Expeditions Down Jacket',
    type: 'Clothing',
    brand: 'Haglofs',
    images: [
      images.nordicExpFirst,
      images.nordicExpSecond,
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>The Haglofs Nordic Expedition Down Jacket is prepared to accompany you in your mountaineering activities in the strongest conditions since it offers superior thermal insulation, breathability, impermeability, and windproof.</span>, 
    description: <span>
       This puffer jacket has the PROOF fabric that repels water, favors breathability, and guarantees durability, thanks to polyamide. In the interior, the Haglofs H Down Platinum insulation with 800 cuin (90% down and 10% feathers) is highly resistant to cold and keeps the body heat at its normal levels.<br /><br /> It also includes a novelty adjusted system in the chest and waist that serves such as support in long walks, fixed hood, adjustable hem, elastic cuffs, ventilation zippers in the armpits, lateral pockets, and an internal pocket to carry the smallest objects safely. You´re looking at the world´s first breathable down jacket.<br /><br />
       Features:<br />
       - Shell made from 3-layer PROOF™— a lightweight and breathable fabric that´s wind and waterproof, and fluorocarbon-free;<br />
       - Insulated with a unique combination of hydrophobic, H DOWN Platinum 800 CUIN fillpower down and graphene-infused Mimic PLATINUM;<br />
       - Adjustable hood, bottom hem, chest, and waist;<br />
       - Zippered underarm ventilation;<br />
       - Elastic cuffs;<br />
       - One zippered and one open internal pocket;<br />
       - FLUOROCARBON-FREE, RDS, DWR, PROOF, Dun, MimicPlatinum, DownPlatinum;<br />
       - PROOF™ 3-layer 100% polyamide 40D mini ripstop laminated to an ultra thin microporous membrane, 108g/m2, bluesign® approved;<br />
       - Hydrostatic head:15,000 mm;<br />
       - Moisture permeability (upright cup):10,000 g/m²/24h;<br />
       - Insulation:Haglöfs H DOWN Platinum 800 CUIN fillpower superior quality goose down (90% down/10% feathers);<br />
       - Traceable;<br />
       - Down weight:166 g (size L);<br />
       - Mimic PLATINUM Insulation:Graphene mixed with polyester, a light and lofty synthetic padding;<br />
       - Contains non-textile parts of animal origin.
    </span>,
    price: 3229.00,
    gender: 'Unisex',
    color: 'Red',
    weight: '-',
    features: [
      'Thermal',
      'Waterproof',
      'Windproof',
      'Stretch'
    ],
    activity: 'Expeditions',
    sustainable: true,
  },
  {
    id: '034',
    name: 'Haglöfs Vassi Goretex Pro Expeditions Pants',
    type: 'Clothing',
    brand: 'Haglofs',
    images: [
      images.vassiProFirst,
      images.vassiProSecond,
      images.vassiProThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Haglofs Vassi Goretex Pro Pants present us with a model with integrated suspenders for a more comfortable fit and also it is easy to adjust, as well as ultra-resistant materials against the wind and water, elastic and very durable.</span>,
    description: <span>
      These pants for skiing, snowboarding, climbing and mountaineering have been made with a Goretex membrane that offers maximum impermeability and control of moisture inside. The polyamide provides elasticity and the reinforced instep with aramid gives greater resistance to wear.<br /><br /> They include RECCO reflective details, joined knees for greater mobility, lateral ventilation with bidirectional zippers, an adjustable hem with Velcro, high waist with adjustable suspenders, zipper with flap, rubber gaiters, two zippered pockets on the leg, and elastic back panel that gives excellent comfort and support. <br /><br />Made for the dedicated off-piste skier. Latest generation GORE-TEX Pro is used to build a highly protective, reliable and breathable suit of armour - a really durable ski pant that´ll lead to exhilarating adventures in deep powder. Featuring a high, comfortable waist with suspenders, full side ventilation, a RECCO® reflector, tough reinforcement to help your kit last longer, and handy pockets.<br /><br /> 
      Features: <br />
      - Made from 40D GORE-TEX Pro - highly breathable, for superior wind- and waterproofing;<br />
      - Articulated knees and full side ventilation with 2-way water-repellent zippers;<br />
      - Velcro adjustment straps at lower leg;<br />
      - Two zippered thigh pockets with bellow and webbing loop for transceiver;<br />
      - RECCO® reflector;<br />
      - Reinforced instep and internal gaiter with rubber grip and adjustment;<br />
      - Higher waist to keep the snow out, with integrated and adjustable suspenders for a perfect fit;<br />
      - Zip fly under protective placket;<br />
      - Stretch panel in back for extra comfort and moisture management;<br />
      - The model is 188 cm tall and is wearing size L;<br />
      - Bluesign, DWR, GoreTex, Recco;<br />
      - GORE-TEX Pro most breathable, 3-layer 100% Polyamide, 40D semi dull, double rip stop face laminated to a ePTFE membrane and a solution-dyed grid backer, 113 g/m², bluesign® approved; <br />
      - Hydrostatic head: 28,000 mm, RET:6;<br />
      - Reinforcement weave:76% Polyamide, 24% Aramid, heavy duty Polyamide with a liquid crystal polymer featuring extreme strength and modulus as well as good abrasion resistance, 245 g/m².
    </span>,
    price: 1787.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '420 g',
    features: [
      'Waterproof',
      'Windproof',
      'Thermal',
      'Stretch',
      'Reflective accents'
    ],
    activity: 'Expeditions',
    sustainable: true,
  },

  //* ---------------------------------------------------------- FOOTWEAR KIDS -------------------------------------------------------- *//
  {
    id: '004',
    name: 'Adidas Terrex HyperHiker Hiking Shoes',
    type: 'Footwear',
    brand: 'Adidas',
    images: [
      images.hyperHikerFirst,
      images.hyperHikerSecond,
      images.hyperHikerThird
    ],
    size: [
      31 + 'EU',
      32 + 'EU',
      33 + 'EU',
      34 + 'EU',
    ],
    shortDescription: <span>Get them hiking early. Hitting the trail feels great when kids have these adidas hiking shoes on their feet. They have the lightweight feel of a trail running shoe with the extra support and durability of a mid-height hiking boot to hook kids on exploring the outdoors. Reflective hits shine in low light. Their lugged rubber outsole grips all surfaces with confidence.</span>,
    description: <span>
       Made with a series of recycled materials, this upper features at least 50% recycled content. This product represents just one of our solutions to help end plastic waste. <br /><br /> 
       Features: <br />
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
    features: [
      'Reflective accents'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '014',
    name: 'Columbia Redmond Youth Hiking Shoes',
    type: 'Footwear',
    brand: 'Columbia',
    images: [
      images.redmondYouthFirst,
      images.redmondYouthSecond,
      images.redmondYouthThird
    ],
    size: [
      32 + 'EU',
      33 + 'EU',
      35 + 'EU',
    ],
    description: <span>
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
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '025',
    name: 'Black Diamond Momentum Climbing Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
    images: [
      images.momentumFirst,
      images.momentumSecond,
      images.momentumThird
    ],
    size: [
      31 + 'EU',
      33 + 'EU',
      35 + 'EU',
    ],
    shortDescription: <span>Designed to provide unparalleled comfort, the kids´ momentum is a single velcro shoe built for young crushers and combines innovative technology with a classic, flat-last design to create an entry-level shoe that excels in performance. with an upper fabric that consists entirely of our engineered knit technology, the momentum provides stretch where you need it, support where it matters and all around exceptional breathability.</span>,
    description: <span>
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
    weight: '-',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '047',
    name: 'La Sportiva Jynx Hiking Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.jynxFirst,
      images.jynxSecond,
      images.jynxThird
    ],
    size: [
      32 + 'EU',
      33 + 'EU',
      35 + 'EU',
    ],
    shortDescription: <span>Designed to provide unparalleled comfort, the kids´ momentum is a single velcro shoe built for young crushers and combines innovative technology with a classic, flat-last design to create an entry-level shoe that excels in performance. with an upper fabric that consists entirely of our engineered knit technology, the momentum provides stretch where you need it, support where it matters and all around exceptional breathability.</span>,
    description: <span>
      When winter running sessions are long and difficult La Sportiva JYNK is an ideal running shoe for all round mountaineering activities. This versatile shoe offers technical functionality and comfort in the unpredictable mountain environment. <br /><br /> Thanks to the 3-layer construction that adds to the high quality and excellent performance of this running shoe. The seamless construction has a waterproof upper mesh that provides flexibility with utmost comfort. The sure-grip Trail Rocker sole which enables the boots to penetrate into the ground and creates a good traction against the wet rocks while you are trail running. Thanks to the Frixion rubber and Trail Bite that works exceptionally well in all sorts of trails and provides maximum grip on every sort of trail. <br /><br /> It is an ultimate mountaineering shoes designed especially for all adventure-sport junkies. La Sportiva JYNK is the answer if you are looking for a perfect trail running shoe that provides protection, traction and comfort. <br /><br /> Mountain Running® shoe for kids, Jynx is ideal for everyday use and for the first off-road running sessions. Derived from the Akasha, the Jynx takes its cushioning and comfort. The protective abrasion resistant side panels make the product long lasting and secure.
    </span>,
    price: 456.00,
    gender: 'Kids',
    color: 'Blue',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '048',
    name: 'La Sportiva Gripit Climbing Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.gripitFirst,
      images.gripitSecond,
      images.gripitThird
    ],
    size: [
      31 + 'EU',
      34 + 'EU',
      35 + 'EU',
    ],
    shortDescription: <span>Be it high intensity via ferrata or hiking excursions in the wild mountain environment La Sportiva Gripit is a perfect lightweight, comfortable shoe. This versatile climbing shoe offers technical functionality and comfort during all your mountaineering activities.</span>,
    description: <span>
      Features: <br />
      - The Zero-Press Construction last is designed to eliminate pressure points in the growth plate area of the foot: avoiding pressure on the metatarsal, essential for growth; <br />
      - Applied to a kid´s shoe the No-Edge Technology promotes sensory development and proprioceptive thanks to the sensitivity on the support points; <br />
      - The Fast Lacing System allows for customization of the fit: by acting on the closure, the heel narrows or widens depending on the need; <br />
      - Eco leather uppers made produced with metal-free tanning methods.
    </span>,
    price: 338.00,
    gender: 'Kids',
    color: 'Yellow',
    weight: '200 g',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '067',
    name: 'Merrell Moab Speed Low WP Hiking Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.moabspeedFirst,
      images.moabspeedSecond,
      images.moabspeedThird
    ],
    size: [
      31 + 'EU',
      32 + 'EU',
      35 + 'EU',
    ],
    shortDescription: <span>A lightweight textile upper makes this waterproof hybrid sneaker breathable, and a traditional lace closure delivers a secure and comfortable fit. Reinforcement at the toe cap ensures it will stick around for miles to come, and its non-marking rubber outsole provides extra grip when it´s needed most. You and your mini-me will be ready for your next adventure.</span>,
    description: <span>
      Features: <br />
      - Waterproof construction to keep feet dry; <br />
      - Synthetic upper; <br />
      - Alternative closure for easy on/off; <br />
      - Recycled PET linings; <br />
      - Float Foam footbed for enhanced cushioning and energy return; <br />
      - Non-marking outsole with extra grip for superior traction.
    </span>,
    price: 311.00,
    gender: 'Kids',
    color: 'Brown',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '068',
    name: 'Merrell Glove 5 A/C Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.trailgloveFirst,
      images.trailgloveSecond,
      images.trailgloveThird
    ],
    size: [
      31 + 'EU',
      32 + 'EU',
      34 + 'EU',
    ],
    shortDescription: <span>This mini-me take on an adult trainer follows the natural movement of the foot when it needs it the most. An alternative closure gets it on with ease, and a non-marking outsole with extra grip boosts traction without risking skids.</span>,
    description: <span>
      Features: <br />
      - Synthetic and mesh upper for breathability and a lightweight feel; <br />
      - Alternative closure for easy on/off; <br />
      - Anti-bacterial properties in lining helps prevent bacteria and control odor; <br />
      - Non-marking outsole with extra grip for superior traction.
    </span>,
    price: 217.00,
    gender: 'Kids',
    color: 'Grey',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    id: '069',
    name: 'Merrell Altalight Low A/C Hiking Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.altalightFirst,
      images.altalightSecond,
      images.altalightThird
    ],
    size: [
      31 + 'EU',
      32 + 'EU',
      33 + 'EU',
      35 + 'EU',
    ],
    shortDescription: <span>Trail-approved features and all-day comfort come together in one lightweight waterproof package. Its toggle closure provides an easy but secure fit, and its lightweight upper and waterproof construction make them light on their feet.</span>,
    description: <span>
      Features: <br />
      - Waterproof construction to keep feet dry; <br />
      - Lightweight and durable ripstop upper; <br />
      - Toggle closure for a secure fit; <br />
      - Recycled PET linings; <br />
      - Anti-stink lining helps reduce odors; <br />
      - Removable EVA footbed for all day comfort; <br />
      - Molded EVA midsole for lightweight cushioning; <br />
      - Extremely lightweight non-marking outsole with Quantum Grip® for superior traction; <br />
      - Quantum Grip™.
    </span>,
    price: 242.00,
    gender: 'Kids',
    color: 'Purple',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '070',
    name: 'Merrell Oakcreek Mid Lace WP Hiking Boots',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.oakcreekFirst,
      images.oakcreekSecond,
      images.oakcreekThird
    ],
    size: [
      32 + 'EU',
      33 + 'EU',
      34 + 'EU',
      35 + 'EU',
    ],
    shortDescription: <span>From the trail to the playground, it is easy to step into this waterproof style. The traditional lace closure ensures a secure, adjustable fit. Its durable upper is built from soft suede and breathable mesh, and a treaded rubber outsole ensures the highest possible level of traction.</span>,
    description: <span>
      Features: <br />
      - Waterproof construction to keep feet dry; <br />
      - Suede and mesh upper for durability; <br />
      - Traditional lace closure for a secure fit; <br />
      - Recycled PET linings; <br />
      - Rubber rugged outsole with lug pattern and extra grip for superior traction.
    </span>,
    price: 197.00,
    gender: 'Kids',
    color: 'Grey',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '103',
    name: 'Salomon Alphacross Blast Trail Running Shoes',
    type: 'Footwear',
    brand: 'Salomon',
    images: [
      images.alphacrossBlastFirst,
      images.alphacrossBlastSecond,
      images.alphacrossBlastThird
    ],
    size: [
      32 + 'EU',
      33 + 'EU',
      34 + 'EU',
      35 + 'EU',
    ],
    shortDescription: <span>Salomon Alphacross Blast Trail Running Shoes is a simple model ideal for occasional trail running training or for running in the park since it gives you great comfort, good fit, grip, and softness.</span>,
    description: <span>
      The Contagrip TD sole provides excellent durability and a good grip on wet or slippery terrains. These running shoes come with spike studs so you will have greater traction on soft or muddy surfaces. The EnergyCell midsole with EVA foam provides maximum cushioning in each step.<br /><br /> These trail running shoes have an upper made with ripstop fabric that is highly resistant to abrasions and the upper is welded and seamless, so they feel comfortable and soft. The Ortholite insole guarantees good breathability, reinforces cushioning, and keeps hygiene inside. Designed to be as versatile as possible, the Alphacross Blast gives your kids all the extra grip and protection they need for off-road exploration. We’ve also made sure the shoe is really comfortable for small feet with a soft lining, generous fit and spongy foam. Get ready for more intrepid family adventures.<br /><br />
      Active grip:<br />
      - The grippy Contagrip® sole is really reassuring and keeps your kids from slipping on uneven or muddy ground.<br /><br />
      Lasting comfort:<br />
      - This shoe is extra comfy with a soft lining, generous fit and spongy foam.<br /><br />
      Versatile performance:<br />
      - Effortlessly adapting to any off-road activities, this shoe will quickly become an outdoor wardrobe essential for your kids.<br /><br />
      Specifications:<br />
      - Inlay sole: Textile;<br />
      - Lining: Textile 100%Polyester;<br />
      - Outsole: Rubber;<br />
      - Upper: Textile;<br />
      - Drop: 10 in mm;<br />
      - Heel stack height: 35.5 mm;<br />
      - Forefoot stack height: 25.5 mm;<br />
      - Weight: 215 g;<br />
      - Anatomical fit: Generous fit;<br />
      - Height: Low;<br />
      - Waterproofness: None.
    </span>,
    price: 261.00,
    gender: 'Kids',
    color: 'Blue',
    weight: '215 g',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    id: '104',
    name: 'Salomon X Raise Mid Goretex Junior Hiking Boots',
    type: 'Footwear',
    brand: 'Salomon',
    images: [
      images.xraiseFirst,
      images.xraiseSecond,
      images.xraiseThird
    ],
    size: [
      32 + 'EU',
      33 + 'EU',
      35 + 'EU',
    ],
    shortDescription: <span>Stability, performance and waterproof protection for young feet. With a modern, sporty look, the X RAISE MID GORE-TEX junior combines stability, comfort and performance. Ideal for family hikes with a stable tripod design, supportive mid cut, strategic reinforcements and grippy Contagrip® lugs.</span>,
    description: <span>
      Not to mention waterproof GORE-TEX protection and a little extra bounce from our soft Fuze Surge foam midsole.
    </span>,
    price: 494.00,
    gender: 'Kids',
    color: 'Beige',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '122',
    name: 'The North Face Youth Chilkat Hiking Boots',
    type: 'Footwear',
    brand: 'The North Face',
    images: [
      images.youthChilkFirst,
      images.youthChilkSecond,
      images.youthChilkThird
    ],
    size: [
      31 + 'EU',
      33 + 'EU',
      34 + 'EU',
    ],
    shortDescription: <span>The North Face Youth Chilkat boots have been designed for the snow rest, for the city or for hiking because they offer you thermal insulation, excellent grip, and comfort throughout the outdoor activity.</span>,
    description: <span>
      The TNF Winter Grip outsole provides an unbeatable grip and traction on wet and snowy terrains and with the TPR shell, these mountain boots for children feel lighter and more flexible. The EVA midsole gives stability and good cushioning. These snow boots for children have the Heatseeker insulation and the fleece lining so they feel warm on their feet. <br /><br /> The waterproof suede upper repels water from rain and snow so they feel dry at all times. Easy-to-lace, grippy and seriously weatherproof, these high-cut boots tick all the boxes for young explorers.
    </span>,
    price: 275.00,
    gender: 'Kids',
    color: 'Blue',
    weight: '432 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '131',
    name: 'VAUDE Lapita II Low STX Hiking Shoes',
    type: 'Footwear',
    brand: 'Vaude',
    images: [
      images.lapitaFirst,
      images.lapitaSecond,
      images.lapitaThird
    ],
    size: [
      31 + 'EU',
      32 + 'EU',
      33 + 'EU',
    ],
    shortDescription: <span>Kids´ shoes for outdoor adventures, made of lightweight, robust materials, breathable inner lining, environmentally-friendly manufacturing. The Kids Lapita II Low STX kids shoes take comfort to a new level! They´re made of lightweight but robust textile materials combined with abrasion-resistant ripstop.</span>,
    description: <span>
      The upper material of these children´s shoes is waterproof and perfect for romping around in puddles or playing in rain-soaked grass.  In addition, there is a breathable inner lining and a removable, ergonomic footbed with size measurement. The treaded rubber outsole with flexible EVA midsole also ensures good traction on all court surfaces while maintaining comfort.<br /><br /> This makes the Kids Lapita II Low STX a real all-rounder and ideal for rough terrain, easy mountain hikes, forest kindergartens and everyday school life. The shoes are made from recycled materials - and in the membrane and lining, that means 100 % recycled. These children´s shoes are water resistant thanks to eco-friendly, PFC-free Eco Finish. The VAUDE Green Shape label stands for environmentally-friendly, functional products made from sustainable materials.
    </span>,
    price: 312.00,
    gender: 'Kids',
    color: 'Blue',
    weight: '-',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },

  //* --------------------------------------------------------- CLOTHING MEN ---------------------------------------------------------- *//
  {
    id: '005',
    name: 'Adidas Terrex MyShelter Hiking Jacket',
    type: 'Clothing',
    brand: 'Adidas',
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
    shortDescription: <span>Designed for those who favor an increasingly active mountain lifestyle, the adidas Terrex MyShelter Windweave hiking jacket is ideal for quickly adapting to any weather without losing your bearings. Inspired by windbreaker jackets, this top brings outstanding durability and a groundbreaking design to the scene. Made from 100% polyester ripstop, the Terrex MyShelter Windweave easily repels water with ease thanks to a DWR-coated outer lining.</span>,
    description: <span>
       Primaloft® Next, meanwhile, keeps you cool and dry thanks to its superior insulation and breathability. But perhaps this jacket’s most revolutionary offering is its patronage, designed thanks to AI body mapping to improve its aerodynamic profile and reduce wind resistance while running. <br /><br /> With stretch cuffs and an drawcord-adjustable hem, this jacket allows on-the-go protection adjustments. The two-way full front zip with high collar stops any water or wind seepage on its tracks, while its stretch hood covers your head when the rain tries to ruin your ride. Side zippered pockets allow you to warm your hands or carry your essentials. Terrex MYSHELTER Windweave Hooded Hiking JacketVersatility keeps you on the move. <br /><br /> Inspired by variable conditions and active days outdoors, this adidas Terrex hiking jacket lets you do it all. Its body-mapped design maintains breathability where you need it most without compromising on durability or warmth. PrimaLoft® Next insulates and breathes to match your activity level. A durable water repellent finish sheds light rain, so there´s no need to slow down. <br /><br /> Features: <br />
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
    weight: '-',
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
    id: '006',
    name: 'Adidas Terrex LiteFlex Hiking Pants',
    type: 'Clothing',
    brand: 'Adidas',
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
    shortDescription: <span>Adidas Terrex Liteflex Hiking are prepared to face the hardest explorations in the mountains since they are very resistant to wear, elastic, and light and provide wide freedom of movement so you can feel protected and safe while hiking. These tracksuit pants have a combination of fabrics, such as nylon, polyester, and elastane, which give maximum flexibility, durability, lightness, breathability, and fast drying.</span>,
    description: <span>
       Its design includes a waist with elastic drawcord and silicone grip that adjusts to your sizes, zippered pockets for hands, a hem with adjustable buttons, and a relaxed cut that will give you comfort to move. Terrex Liteflex Hiking Pants. Freedom to move is the name of the game. These adidas Terrex Liteflex Hiking Pants have a wide elastic waistband with silicone grip, which is ideal if you´re layering on a backpack or hip bag. Extra stretch lets you hike and manoeuvre unhindered through uneven terrain. The water-repellent fabric gives you the peace of mind to keep moving in foul weather. Hit the trail for the long haul. <br /><br /> Features: <br />
      - Snap-button cuffs; <br />
      - Drawcord on elastic waist; <br />
      - 69% nylon, 19% polyester, 12% elastane plain weave; <br />
      - Water-repellent fabric; <br />
      - Side zip pockets.
    </span>,
    price: 277.00,
    gender: 'Men',
    color: 'Black',
    weight: '-',
    features: [
      'Reflective accents',
      'Windproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '007',
    name: 'Adidas Terrex Tech Hiking Fleece',
    type: 'Clothing',
    brand: 'Adidas',
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
    shortDescription: <span>Terrex Tech Fleece Hiking JacketLife outside isn´t always sunshine and roses. Sometimes it´s the stormy days that draw you to the mountains. For those cooler, greyer trails, this adidas Terrex jacket drapes your body in strategic comfort. Its fleece construction blends moisture-managing waffle knit with abrasion-resistant panels. The non-brushed design is inspired by adidas´ ambition to address microfibre shedding. This product is made with Primegreen, a series of high-performance recycled materials.</span>,
    description: <span>
      Features: <br />
      - Elastic cuffs; <br />
      - Primegreen; <br />
      - Full zip with stand-up collar; <br />
      - Side zip pockets; <br />
      - One chest pocket with zip.
    </span>,
    price: 228.00,
    gender: 'Men',
    color: 'Black',
    weight: '-',
    features: ['-'],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '040',
    name: 'Haglöfs Astral Full Zip Hiking Fleece',
    type: 'Clothing',
    brand: 'Haglofs',
    images: [
      images.astralFullFirst,
      images.astralFullSecond,
      images.astralFullThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>The Haglofs Astral Full Zip Fleece is the perfect mid-layer for your hiking or trekking activities in winter, as well as mountaineering or skiing since it offers all the warmth, freedom of movement, breathability, and lightness you need for your favorite sports.</span>,
    description: <span>
      This hoodie sweatshirt is made with a Polartec Power Stretch Pro fabric that combines recycled polyester and elastane to give you excellent durability, elasticity, control of moisture, and thermal insulation without adding weight to your mountain equipment. Its design includes two zippered pockets for hands, one zippered pocket on the arm, an adjustable hem, and an elastic hood.<br /><br /> Here’s the hoodie you’ll want to bring along on all your hiking adventures. Supplying outstanding freedom of movement and next-to-skin comfort, this essential mid-layer embodies a winning formula that keeps up with your needs even on the most advanced trails. It’s made from Polartec® Power Stretch® Pro™, a stretchy material with excellent moisture management properties and a great warmth-to-weight ratio. Equipped with three zippered pockets and an elastic hood. It’s the one. Put it in your pack.<br /><br /> 
      Features: <br />
      - Made from Polartec® Power Stretch® Pro™, a smooth and highly durable;<br />
      - 4-way stretch fleece fabric;<br />
      - Two zippered hand pockets and one arm pocket;<br />
      - Adjustable hem;<br />
      - Elastic hood;<br />
      - Contains recycled and bluesign® approved fabric.
    </span>,
    price: 633.00,
    gender: 'Men',
    color: 'Yellow',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '055',
    name: 'Mammut Beast RG Hiking Pants',
    type: 'Clothing',
    brand: 'Mammut',
    images: [
      images.rgFirst,
      images.rgSecond,
      images.rgThird
    ],
    size: [
      'L',
      'XL',
      'XXL',
    ],
    shortDescription: <span>You can look forward to a relaxed hike in the Hiking Pants Men, with their lightweight, stretch material for optimum comfort. The PFC-free DWR treatment on the outer material reliably repels water to protect you from sudden rain showers. The pants also impress with their quick-drying properties - ideal for changeable weather in the mountains.</span>,
    description: <span>
      Features: <br />
      - Seat pocket with zipper; <br />
      - Quick-drying; <br />
      - 2 slit pockets with zipper; <br />
      - Pre-shaped knee section; <br />
      - Water-repellent thanks to DWR treatment on outer material; <br />
      - With PFC-free DWR treatment; <br />
      - Lightweight, stretchable material for optimum comfort; <br />
      - Weight: 240 g; <br />
      - Cut: Regular Fit.
    </span>,
    price: 391.00,
    gender: 'Men',
    color: 'Black',
    weight: '240 g',
    features: [
      'Windproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '092',
    name: 'Salewa Antelao Hiking Pants',
    type: 'Clothing',
    brand: 'Salewa',
    images: [
      images.antelaoFirst,
      images.antelaoSecond,
      images.antelaoThird
    ],
    size: [
      'XS',
      'M',
      'XL',
    ],
    shortDescription: <span>Made with Powertex Extreme fabric that is waterproof, breathable, abrasion-resistant membrane that protects you from the exterior weather conditions and keeps you warm. The extremely thin 2-layer membrane offers extra waterproofness and moisture management as the vapor of humidity escapes elevating maximum comfort.</span>,
    description: <span>
      The 4-way stretch fabric provides maximum comfort and mobility. And the addition of PrimaLoft Black synthetic provides extra comfort and reduces bulk giving it an athletic-look. The Velcro-adjustable waistband provides protection to your abdominal region and gives comfortable fit. Thanks to the Roomy cut with gathers at knee that guarantee extra freedom of joint movements. Also, the thigh pockets with zippers have ample storage capacity for your devices and other essential items.<br /><br />
      Features: <br />
      - Waterproof finish, all seams welded; <br />
      - Ergonomic waist;<br />
      - Side Velcro-adjustable waistband;<br />
      - Belt loops;<br />
      - Flat zipped pocket on the upper thigh;<br />
      - Roomy cut with gathers at knee allows extra freedom of joint movement;<br />
      - Inner gaiter with elastic inserts;<br />
      - Generous edge protection.
    </span>,
    price: 611.00,
    gender: 'Men',
    color: 'Blue',
    weight: '543 g',
    features: [
      'Windproof',
      'Stretch',
      'Waterproof',
      'Thermal'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '107',
    name: 'Salomon Cross Trail Runnning Leggings',
    type: 'Clothing',
    brand: 'Salomon',
    images: [
      images.crossrunFirst,
      images.crossrunSecond,
      images.crossrunThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    shortDescription: <span>Salomon Cross Run Leggings are designed for intense training, whether at the gym, for running in the city or the mountains, and for other sporty activities where you need a custom fit, breathability, and excellent durability.</span>,
    description: <span>
      These leggings with pockets are made with a combination of polyester and elastane, which provide great resistance to wear, elasticity, fast-drying, and breathability. The Advanced Skin Active Dry increases the absorption of moisture so you can always feel dry and comfortable.<br /><br /> This elastic fabric in 4 directions offers the muscle support that you need in long workouts. Its design includes two side mesh pockets for small items, a flat and elastic waistband, a back elastic hook, knit fabric n the tibia, and reflective details. Light muscle support? Stretch? Versatile storage? The men’s CROSS RUN tights have everything you need to run comfortably in cooler temperatures or while warming up for fast interval sessions. Not to mention a woven panel on the tibia to make the tights more resistant, and recycled polyester content.<br /><br />
      Active comfort:<br />
      - Tested in our labs, the main fabric delivers 4-way stretch for light muscle support and is made from recycled polyester fibers.<br /><br />
      Optimized storage:<br />
      - 2 strategic stretch pockets keep your gels, keys or smartphone close and secure on the move.<br /><br />
      Versatile features:<br />
      - Make these tights your own with an adjustable flat waist construction and back hook to stow a light tee (or hang the tights up to dry).<br /><br />
      AdvancedSkin ActiveDry:<br />
      - AdvancedSkin technical fabrics improve body comfort by keeping you dry, warm and protected when you need it and where you need it.<br /><br />
      Waist adjustment:<br />
      - Always a perfect fit with our infinitely adjustable waist adjustment. Can be adjusted individually to your waist size to discover pure freedom of movement.<br /><br />
      2 side pockets:<br />
      - Classic side-pocket construction to store your contents.<br /><br />
      Specifications:<br />
      - Body: 79% Polyester, 21% Elastane; Body insert: 100% Polyester.
    </span>,
    price: 231.00,
    gender: 'Men',
    color: 'Black',
    weight: '-',
    features: [
      'Stretch',
      'Reflective accents',
    ],
    activity: 'Trail running',
    sustainable: true,
  },
  {
    id: '123',
    name: 'The North Face Resolve Full Zip Hiking Fleece',
    type: 'Clothing',
    brand: 'The North Face',
    images: [
      images.resolveFirst,
      images.resolveSecond,
      images.resolveThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    shortDescription: <span>The North Face Resolve Full Zip Fleece provides the warmth, softness, and breathability you need for your hiking or mountaineering activities and you can use it as an intermediate layer or alone, according to the temperature of the area.</span>,
    description: <span>
      This fleece is made with polyester fabric that is highly breathable and fast-drying, as well as very flexible and comfortable to move. It comes with two zippered pockets for hands and elastic cuffs and hem to avoid the cold wind from entering. The perfect layering piece for hiking, our Resolve Fleece Jacket is warm, quick-drying and wicking.
    </span>,
    price: 223.00,
    gender: 'Men',
    color: 'Blue',
    weight: '-',
    features: [
      '-',
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '124',
    name: 'The North Face Grivola Hiking Pants',
    type: 'Clothing',
    brand: 'The North Face',
    images: [
      images.grivolaFirst,
      images.grivolaSecond,
      images.grivolaThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    shortDescription: <span>The North Face Grivola Pants have been designed to be your companion during the expeditions to the mountains, for hiking in summer or spring, since they offer breathability, elasticity, comfort, and impermeability.</span>,
    description: <span>
      These trekking pants are made with SoftShell quality that combines polyester and elastane to offer excellent resistance to wear, freedom of movement, control of moisture, fast-drying, and slight repellence to water to keep you dry while you find refuge. They have a regular cut, belt loops for a custom fit, zippered pockets for hands, and preformed knees for easier movements. Crafted with plenty of stretch, the Grivola Trousers mean you can move freely wherever your legs take you.
    </span>,
    price: 494.00,
    gender: 'Men',
    color: 'Green',
    weight: '-',
    features: [
      'Stretch',
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '125',
    name: 'The North Face ThermoBall Hiking Jacket',
    type: 'Clothing',
    brand: 'The North Face',
    images: [
      images.thermoballFirst,
      images.thermoballSecond,
      images.thermoballThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    shortDescription: <span>Adapt to changing conditions in this versatile 3-in-1 jacket, which pairs a breathable, waterproof outer layer with a removable insulated inner. Wear both together or separately - whatever your next hike requires.</span>,
    description: <span>
      Features:<br /><br />
      Outer jacket:<br />
      - Waterproof, breathable, seam-sealed DryVent™ 25L shell with WindWall™ windproof technology;<br />
      - Zip-in-compatible integration with matching products from The North Face®;<br />
      - Attached, fully adjustable hood;<br />
      - Pit zips for underarm ventilation;<br />
      - Exposed front zip;<br />
      - Concealed zipped chest and hand pockets;<br />
      - Velcro® adjustable cuff tabs and adjustable hem;<br />
      - Media compatible.<br /><br />
      Inner jacket:<br />
      - Secure-zip covered hand pockets;<br />
      - 10 g/ft² PrimaLoft®® Thermoball™ synthetic insulation throughout the body with PrimaLoft®® insulated sleeves and collar.<br /><br />
      Benefits:<br />
      - Lightweight fabrics help regulate body temperature and keep you comfortable;<br />
      - Fabric that reduces air penetration to lock out chilly wind;<br />
      - Waterproof fabric provides an impenetrable moisture barrier for guaranteed dryness;<br />
      - Insulation reduces heat loss and increases warmth, even in the coldest temperatures.
    </span>,
    price: 1034.00,
    gender: 'Men',
    color: 'Red',
    weight: '-',
    features: [
      'Stretch',
      'Windproof',
      'Waterproof',
      'Thermal'
    ],
    activity: 'Hiking',
    sustainable: false,
  },

  //* ------------------------------------------------------------ CLOTHING WOMEN -------------------------------------------------------- *//
  {
    id: '008',
    name: 'Adidas Terrex Xploric Hiking Jacket',
    type: 'Clothing',
    brand: 'Adidas',
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
    shortDescription: <span>Keep all of your essentials at the ready with the Xploric jacket. An iconic and disruptive chest pocket provides on-the-fly access to all of your accessories, and additional pockets offer plenty of space to keep your electronics clear of the elements. adidas RAIN.RDY uses advanced waterproofing to channel rain away from your body, allowing you to keep moving through any downpour. A mix of fabrics puts ripstop panels where abrasion resistance is needed the most.</span>,
    description: <span>
      Features: <br />
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
    weight: '-',
    features: [
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '009',
    name: 'Adidas Terrex Liteflex Hiking Shorts Pants',
    type: 'Clothing',
    brand: 'Adidas',
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
    shortDescription: <span>Terrex Liteflex Hiking ShortsSome folks prefer slow, meandering trails. Others time themselves all the way to the top. However you prefer to hike, stay light on your feet as you move through the forest in these adidas Terrex shorts. With an adjustable, grippy waist, they can keep up with you no matter your pace. This product is made with recycled content as part of our ambition to end plastic waste.</span>,
    description: <span>
      Features: <br />
      - Exposed elastic waist with drawcord and inner silicone print; <br />
      - 90% recycled polyester, 10% elastane dobby; <br />
      - Side zip pockets; <br />
      - Webbing details.
    </span>,
    price: 159.00,
    gender: 'Women',
    color: 'Black',
    weight: '-',
    features: [
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '015',
    name: 'Columbia Adventure Hiking Pants',
    type: 'Clothing',
    brand: 'Columbia',
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
    shortDescription: <span>Adventure Hiking are hiking pants for ladies. This sports accessory offers an active fit to facilitate freedom of movement. The model offers a 4-way comfort stretch that allows freedom of movement. The structure includes a membrane with advanced water repellency and that prevents liquids from staining the garment.</span>,
    description: <span>
       In addition, it includes Omni-Shade technology that prevents your skin from suffering from the effects of UVA and UVB sunrays. Its design has a detachable integrated belt. On the sides, it has pockets to maintain the body temperature of the hands. Also, it has a zippered security pocket to protect personal items. It is built in 100% polyester, material that offers greater durability. <br /><br />
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
    weight: '-',
    features: [
      'UV Protection',
      'Waterproof',
      'Windproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '038',
    name: 'Haglöfs Mid Slim Hiking Pants',
    type: 'Clothing',
    brand: 'Haglofs',
    images: [
      images.midSlimFirst,
      images.midSlimSecond,
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Face it, hiking is tough on pants. This technical pair is designed to handle it and keep you comfortably protected season after season. Made from heavy duty fabric sourced from recycled materials, they’re super durable and weather resistant, and supply extra stretch where you need it. They offer a slim, high rise fit, hugging your body all the way down to the ankles where you can make adjustments as needed.</span>,
    description: <span>
      Features: <br />
      - Made out of recycled material;<br />
      - Heavy duty Climatic™ Rugged fabric supplies extreme durability while still remaining flexible;<br />
      - Fluorocarbon-free DWR treated surfaces help repel water and dirt;<br />
      - Two zippered front pockets;<br />
      - One zippered thigh pocket – with aa spot for your phone;<br />
      - Elastic waist with beltloops;<br />
      - Reinforcements where needed;<br />
      - Slim, close fitting pant legs with ankle adjustments;<br />
      - High waist.
    </span>,
    price: 630.00,
    gender: 'Unisex',
    color: 'Green',
    weight: '500 g',
    features: [
      'Waterproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '056',
    name: 'Mammut Hiking Shorts Pants',
    type: 'Clothing',
    brand: 'Mammut',
    images: [
      images.shortsFirst,
      images.shortsSecond,
      images.shortsThird
    ],
    size: [
      'XS',
      'S',
      'M'
    ],
    shortDescription: <span>Equipped for your next hike: the Hiking Shorts Women are made from a lightweight, stretch material that feels very comfortable to wear. A DWR treatment makes the outer material water-repellent. The shorts’ quick-drying properties make them a practical must-have garment for long hikes.</span>,
    description: <span>
      Features: <br />
      - Seat pocket with zipper; <br />
      - Quick-drying; <br />
      - Water-repellent thanks to DWR treatment on outer material; <br />
      - 2 side pockets with concealed zippers; <br />
      - Lightweight, stretchable material for optimum comfort; <br />
      - Weight: 126 g; <br />
      - Cut: Athletic Fit; <br />
      - Lining: 100% Polyamide; <br />
      - Main material: 94% Polyamide, 6% Spandex;
    </span>,
    price: 274.00,
    gender: 'Women',
    color: 'Beige',
    weight: '126 g',
    features: [
      'UV Protection',
      'Windproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '091',
    name: 'Salewa Brenta Hiking Jacket',
    type: 'Clothing',
    brand: 'Salewa',
    images: [
      images.brentaFirst,
      images.brentaSecond,
      images.brentaThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>A warm, lightweight, women’s down jacket for alpine mountaineering and ski touring.</span>,
    description: <span>
      Features: <br />
      - Tailored hood with elastic binding; <br />
      - High collar integrated into hood for maximum protection;<br />
      - Ergonomic sleeves and shoulders for a good fit;<br />
      - Special sleeve design (gusset) for good freedom of movement;<br />
      - Front zip with internal full-length windproof flap;<br />
      - 2 zipped outer pockets;<br />
      - Lightweight, elastic bindings on cuffs and hem;<br />
      - Ultra light downproof construction;<br />
      - Engineered with bluesign® approved materials;<br />
      - Body-mapping design with TirolWool® Responsive inserts.
    </span>,
    price: 768.00,
    gender: 'Women',
    color: 'Red',
    weight: '330 g',
    features: [
      'Thermal',
      'Windproof',
      'Stretch',
      'Compressible'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '126',
    name: 'The North Face Resolve Full Hiking Fleece',
    type: 'Clothing',
    brand: 'The North Face',
    images: [
      images.resolveFullFirst,
      images.resolveFullSecond,
      images.resolveFullThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Zip up our Resolve Fleece and keep the chill at bay on exposed mountain trails. This trusty fleece is made from 100% recycled fabric, making it an eco-friendly choice for all your adventures. Zipped pockets keep small valuables safe, and a full zip down the front gives you the versatility to let in more air when you need it. Layer it up with a jacket over the top for extra warmth, or wear it on its own on milder days.</span>,
    description: <span>
      Features: <br />
      - Fabric:100% recycled polyester;<br />
      - Full-zip fleece with zipped hand pockets;<br />
      - TNF embroidered logo on the front and back.
    </span>,
    price: 223.00,
    gender: 'Women',
    color: 'Purple',
    weight: '-',
    features: [
      '-',
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '127',
    name: 'The North Face Motion Hiking Shorts Pants',
    type: 'Clothing',
    brand: 'The North Face',
    images: [
      images.motionFirst,
      images.motionSecond,
      images.motionThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>The Women´s Motion Pull-On Short is our durable and endlessly flexible short for next-level adventuring.</span>,
    description: <span>
      Features: <br />
      - Standard fit;<br />
      - Better Cotton Initiative;<br />
      - Cotton twill with stretch;<br />
      - Embroidered logo on left thigh.
    </span>,
    price: 116.00,
    gender: 'Women',
    color: 'Blue',
    weight: '-',
    features: [
      'Stretch',
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '128',
    name: 'The North Face Fornet Hiking Jacket',
    type: 'Clothing',
    brand: 'The North Face',
    images: [
      images.fornetFirst,
      images.fornetSecond,
      images.fornetThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Engineered for maximum comfort on the mountain, our Fornet Jacket is a versatile layer whatever the adventure.</span>,
    description: <span>
      Features: <br />
      - Two front pockets with zipper;<br />
      - Pit zips;<br />
      - Adjustable cuffs with hooking loop;<br />
      - Hem and hood with elasticated cord for adjustment;<br />
      - TNF logo - DryVent™ logo on left arm above cuff.
    </span>,
    price: 741.00,
    gender: 'Women',
    color: 'Black',
    weight: '-',
    features: [
      'Stretch',
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '132',
    name: 'VAUDE Skomer Hiking Jacket',
    type: 'Clothing',
    brand: 'Vaude',
    images: [
      images.skomerFirst,
      images.skomerSecond,
      images.skomerThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Worn solo or as a midlayer, the Skomer Hiking Jacket simply looks great. The moisture-regulating, pleasantly smooth and easy-care stretch fabric offers a high degree of wearing comfort on hiking tours lasting several days. On windy days the hood and the covered zip offer protection from becoming chilled.</span>,
    description: <span>
      Paired with a waterproof functional jacket, the Skomer Hiking Jacket is the perfect midlayer, as it is highly breathable and quickly transports moisture to the outside during sweaty activities. The VAUDE Green Shape label stands for environmentally-friendly, functional products made from sustainable and bluesign® certified materials.<br /><br />
      Features: <br />
      - Multifunctional fleece jacket, perfect as a midlayer;<br />
      - high breathability;<br />
      - structured surface;<br />
      - environmentally-friendly manufacturing;<br />
      - front zip with back flap;<br />
      - 2 front zip pockets;<br />
      - attached hood;<br />
      - contrast coloured lycra bindings;<br />
      - adjustable hem;<br />
      - contrasting flatlock seams.
    </span>,
    price: 445.00,
    gender: 'Women',
    color: 'Green',
    weight: '-',
    features: [
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },


  //* ----------------------------------------------------------- CLOTHING KIDS -------------------------------------------------- *//

  {
    id: '016',
    name: 'Columbia Ridge IV Convertible Hiking Pants',
    type: 'Clothing',
    brand: 'Columbia',
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
    shortDescription: <span>Young adventurers can comfortably spend weekends at camp and enjoy long summer hikes with these quick-dry trousers that can be converted into shorts thanks to the zip-off legs.The high-perfomance wicking efficiently pulls moisture away from the body to accelerate evaporation.</span>,
    description: <span>
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
    weight: '-',
    features: [
      'UV Protection',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '017',
    name: 'Columbia Windbreaker Hiking Jacket',
    type: 'Clothing',
    brand: 'Columbia',
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
    shortDescription: <span>An essential item for all your children´s outdoor adventures, this water-resistant windbreaker gives children the extra protection they need from the elements.</span>,
    description: <span>
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
    weight: '-',
    features: [
      'Compressible',
      'Stretch',
      'Windproof',
      'Reflective accents'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '093',
    name: 'Salewa Sarner 2L Hiking Hoodie',
    type: 'Clothing',
    brand: 'Salewa',
    images: [
      images.sarnerFirst,
      images.sarnerSecond,
      images.sarnerThird
    ],
    size: [
      'XS',
      'M',
      'L',
    ],
    shortDescription: <span>The Sarner 2L Wool Kids Full-Zip Hoody combines South Tirolean mountain heritage with contemporary styling and performance. Made with our lightweight blended Alpine Wool Iconic, it features 100% recycled wool yarns and traditional Sarner purl knit workmanship for active alpine use.</span>,
    description: <span>
      Wool is the ideal insulation material for kids’ clothing: it’s sustainable, breathable, naturally thermo-regulating, works when wet and is naturally odour-resistant. Here, we blend a Sarner knit construction with its dense, warm wool stretch yarn that offers greater resistance to wind and rain with our new proprietary Alpine Wool Iconic fabric made of wool and smart textiles. On the inside, we back it with a bonded, soft and comfortable viscose liner for enhanced protection from cold mountain winds. The entire jacket, including yarns, is made in Italy and has been designed specifically with reduced environmental impact in mind.<br /><br />
      Features: <br />
      - Tailored hood with elastic binding;<br />
      - 2 slash pockets;<br />
      - Lightweight, elastic bindings on cuffs and hem;<br />
      - Sarner Softshell: traditional knit (purl) bonded to soft Jersey.
    </span>,
    price: 593.00,
    gender: 'Kids',
    color: 'Grey',
    weight: '-',
    features: [
      '-',
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '129',
    name: 'The North Face Resolve Reflective Hiking Jacket',
    type: 'Clothing',
    brand: 'The North Face',
    images: [
      images.resolveReflectiveFirst,
      images.resolveReflectiveSecond,
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    shortDescription: <span>Ensure your tranquility and the protection of your children with The North Face Resolve Reflect whose waterproof, breathable, and windproof fabrics will keep them safe from any weather changes so that the fun does never stops.</span>,
    description: <span>
      This hiking jacket for children has been made with DryVent fabric that repels water from rain and wind and expels moisture from the inside to avoid colds, so they will maintain dry at all times.<br /><br />
      Features: <br />
      - Standard fit;<br />
      - Waterproof, breathable, fully seam sealed;<br />
      - Reflective logo on left chest and back-right shoulder for enhanced visibility;<br />
      - Secure-zip hand pockets;<br />
      - Center front zip with Velcro® flap closure;<br />
      - Fully encased-elastic cuffs;<br />
      - Chin zip guard;<br />
      - ID label;<br />
      - Three-piece, fixed hood.
    </span>,
    price: 223.00,
    gender: 'Kids',
    color: 'Beige',
    weight: '109 g',
    features: [
      'Reflective accents',
      'Stretch',
      'Waterproof',
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '130',
    name: 'The North Face Chakal Hiking Pants',
    type: 'Clothing',
    brand: 'The North Face',
    images: [
      images.chakalFirst,
      images.chakalSecond,
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    shortDescription: <span>The North Face Chakal children’s pants have been designed for the practice of hiking, mountaineering, alpine skiing, and snowboarding because they give you the best thermal, waterproof, and breathable protection.</span>,
    description: <span>
      The DryVent fabric provides excellent moisture absorption and repels water and snow very well. With Heatseeker synthetic insulation, you will have enough warmth and lightness for your outdoor activity. These snowboarding pants for children come with zippered pockets with flap for the hands, knee articulation for better movement, ankle gaiter with clip to avoid the entry of terrain elements and reinforcement patches inside the boot for greater durability. <br /><br /> For budding skiers and snowboarders these snowsport trousers feature durable, breathable and waterproof fabric that stretches for greater range of motion. Lightweight synthetic insulation will keep him warm on the way up and down.<br /><br />
      Features: <br />
      - Waterproof, breathable, fully seam-sealed, stretchy DryVent™ 2L fabric;<br />
      - Adjustable waist tabs with Velcro® closure;<br />
      - Zipped handwarmer pockets and cargo pocket;<br />
      - Zip-fly;<br />
      - Darts at knees for enhanced mobility;<br />
      - Ankle gaiters with gripper elastic to fend off debris;<br />
      - Reinforced cuffs at hem and inner leg boot kick patches for added durability;<br />
      - EZ grow leg at hem and inside lining to accommodate growth;<br />
      - Heatseeker™ insulation provides lightweight warmth, even when wet.
    </span>,
    price: 313.00,
    gender: 'Kids',
    color: 'Blue',
    weight: '534 g',
    features: [
      'Compressible',
      'Stretch',
      'Waterproof',
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '133',
    name: 'VAUDE Casarea 3 In 1 II Hiking Jacket',
    type: 'Clothing',
    brand: 'Vaude',
    images: [
      images.casareaFirst,
      images.casareaSecond,
      images.casareaThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    shortDescription: <span>Practical 3in1 children´s jacket for cold temperatures and unpredictable weather, waterproof, windproof and breathable, insulated reversible inner jacket, eco-friendly production.</span>,
    description: <span>
      What´s not to love in a jacket that adapts to whatever the day has in store? The Kids Casarea 3in1 Jacket II does just this! When it´s raining, a Ceplex Active membrane keeps the outer shell waterproof.
    </span>,
    price: 712.00,
    gender: 'Kids',
    color: 'Blue',
    weight: '-',
    features: [
      'Thermal',
      'Waterproof',
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '134',
    name: 'VAUDE Rondane Hiking Pants',
    type: 'Clothing',
    brand: 'Vaude',
    images: [
      images.rondaneFirst,
      images.rondaneSecond,
      images.rondaneThird
    ],
    size: [
      'S',
      'M',
      'L',
    ],
    shortDescription: <span>Windproof children´s softshell pants, with soft inner surface, width adjustable, made from a recycled material. Versatile, windproof and robust softshell pants for hiking, forest adventures, or school outings.</span>,
    description: <span>
      Reinforcements at the knees will help make sure they´ll enjoy these pants until they grow out of them. These comfortable outdoor pants are easy care, the predominantly recycled material is certified in accordance with the highest environmental standard bluesign®. We develop sophisticated outdoor apparel for children that is durable enough to be passed on from child to child. This product is made with water resistant Eco Finish that´s manufactured without the use of fluorocarbons (PFC). The VAUDE Green Shape label stands for environmentally - friendly, functional products made from sustainable materials.<br /><br />
      Features:<br />
      - abrasion;<br />
      - proof reinforced knees;<br />
      - windproof softshell;<br />
      - 1 leg pocket with zip;<br />
      - 2 side pockets;<br />
      - waistband adjustable inside.
    </span>,
    price: 356.00,
    gender: 'Kids',
    color: 'Green',
    weight: '-',
    features: [
      'Stretch',
      'Reflective accents',
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },

  //* ------------------------------------------------------------ ACCESORIES ----------------------------------------------------- *//

  {
    id: '010',
    name: 'Adidas Terrex Agravic Hiking Backpack 10L',
    type: 'Accessories',
    brand: 'Adidas',
    images: [
      images.agravicFirst,
      images.agravicSecond,
      images.agravicThird
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Pack the essentials and hit the trail with this adidas lightweight trail running backpack. Multiple storage pockets ensure everything is organised and easy to find. Quick-access flask pockets keep hydration within reach on shoulder straps. Reflective details shine in low light for 360-degree reflectivity. Bungee chest straps.</span>,
    description: <span>
      Features: <br />
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
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '018',
    name: 'Columbia Maxtrail™ Hiking Backpack 20L',
    type: 'Accessories',
    brand: 'Columbia',
    images: [
      images.maxtrailFirst,
      images.maxtrailSecond,
      images.maxtrailThird
    ],
    size: [
      'one-size',
    ],
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
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '019',
    name: 'Columbia FCT03 BB Hiking Poles',
    type: 'Accessories',
    brand: 'Columbia',
    images: [
      images.fct03First,
      images.fct03Second,
      images.fct03Third
    ],
    size: [
      'one-size',
    ],
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
    weight: '-',
    features: ['-'],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '026',
    name: 'Black Diamond Capitan Climbing Helmet',
    type: 'Accessories',
    brand: 'Black Diamond',
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
    shortDescription: <span>For a safe climbing BLACK DIAMOND has designed the new CAPITAN HELMET helmet, which presents a combination of materials that optimize durability and resistance to a blow . Its design provides additional coverage on the sides and back of the head. It has a low profile suspension system. It has a ventilation system that provides breathability when temperatures rise, keeping the inside of the helmet dry and cool.</span>,
    description: <span>
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
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '027',
    name: 'Black Diamond Speed 50L Hiking Backpack',
    type: 'Accessories',
    brand: 'Black Diamond',
    images: [
      images.speedFirst,
      images.speedSecond,
      images.speedThird
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>We present the new SPEED 50L BACKPACK backpack for climbing and mountaineering, it is made of resistant water-repellent canvas. It has a capacity of 33 liters available to protect your camping implements. It has padded and adjustable shoulder straps for unmatched comfort. It has chest and waist straps that will help you carry and distribute the weight of the backpack.</span>,
    description: <span>
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
    features: ['-'],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '028',
    name: 'Black Diamond Venom Ice Expeditions Axe',
    type: 'Accessories',
    brand: 'Black Diamond',
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
    shortDescription: <span>This is the new ice pick for climbing VENOM ICE AX, it is a tool of high precision and functionality for lovers of alpine sports. Its head is made of stainless steel. Its integrated handle and uneven shaft provide safety and easy handling on the ice. It features fully adjustable FlickLock technology ideal for steep snow.</span>,
    description: <span>
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
    weight: '-',
    features: ['-'],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '029',
    name: 'Black Diamond Distance FLZ Hiking Poles',
    type: 'Accessories',
    brand: 'Black Diamond',
    images: [
      images.distanceFirst,
      images.distanceSecond,
      images.distanceThird
    ],
    size: [
      105 + '-' + 125 + 'cm',
      125 + '-' + 145 + 'cm',
    ],
    shortDescription: <span>This time we bring you the new DISTANCE FLZ POLES trekking poles, which have a super light and manageable design, made of resistant aluminum. Features an approximate length of 13 inches collapsed to 39 usable inches. Thanks to its SlideLock technology, it provides more resistance to the pole in the contraction joints.</span>,
    description: <span>
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
    weight: '-',
    features: ['-'],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '030',
    name: 'Black Diamond Wiz Hiking Headlight',
    type: 'Accessories',
    brand: 'Black Diamond',
    images: [
      images.wizFirst,
    ],
    size: [
      30 + '-Lumens',
      50 + '-Lumens',
    ],
    shortDescription: <span>Our totally redesigned kid´s headlamp that now features lighting in a full-color spectrum, the Wiz gives kids the lighting they need to explore the outdoors in a variety of fun colors. Our totally redesigned kid´s headlamp that now features lighting in a full-color spectrum, the Wiz gives kids the lighting they need to explore the outdoors in a variety of fun colors.</span>,
    description: <span>
       One LED provides 3 lumens of proximity lighting and strobe mode. An RGB LED allows kid´s to cycle through a full rainbow spectrum of colors. Head tilts in both directions so it works even when put on upside down. Compact design uses two AAA batteries. CPSIA certified with child-safe battery compartment closure and breakaway elastic safety strap. Powers off after two hours to avoid accidental battery drain. <br /><br />Storm Proof [IPX4]: <br />
      - Protected against rain or sleet from any angle.
    </span>,
    price: 81.00,
    gender: 'Kids',
    color: 'Red',
    weight: '-',
    features: ['-'],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '037',
    name: 'Haglöfs Vina 40L Hiking Backpack',
    type: 'Accessories',
    brand: 'Haglofs',
    images: [
      images.vina40lFirst,
      images.vina40lSecond,
      images.vina40lThird
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>The Haglofs Vina 40L Backpack has been created to be an excellent ally for your mountain equipment for one or two days and you can carry everything you need to spend one night, such as hydration, food, and clothes to protect you against any weather change, so it is prepared and can keep your items dry.</span>,
    description: <span>
      Features: <br />
      - Airback suspension system, provides ventilation and airflow through the back contact zone; <br />
      - Available in size S/M and M/L suspension system; <br />
      - Ventilated harness and hip belt; <br />
      - Full length zippered side opening for easy access to main compartment; <br />
      - Large stretch pocket on the front; <br />
      - Elastic side pocket with finger guide loop, reachable on the go; <br />
      - Zippered side pocket, reachable on the go; <br />
      - Zippered pockets on the hip belt; <br />
      - Attachment for trekking poles and ice axe; <br />
      - Hydration system compatible with internal sleeve with hose routers on the shoulder straps; <br />
      - Dual side compression; <br />- Fixed lid with one spacious pocket and key holder; <br />
      - Dimensions (height × depth × width):70x23x32 cm.
    </span>,
    price: 711.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: 'max 40L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '039',
    name: 'Haglöfs Tarius -18ºC Sleeping Bag',
    type: 'Accessories',
    brand: 'Haglofs',
    images: [
      images.tariusFirst,
      images.tariusSecond,
      images.tariusThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>A versatile sleeping bag with the comfort, warmth and cosiness you need for a good night´s sleep and a host of features that make carrying and using it that little bit better. It´s perfect for backpacking, trekking or travelling - filled with synthetic insulation that also performs well in damp conditions. Available in a range of temperature grades, ensuring that you can find the one that suits your own individual adventure.</span>,
    description: <span>
      The durable water repellent action of our PFC-free DWR treatments comes from a hydrocarbon based, silicone based and/or wax based technology instead of fluorinated chemical. Irrespective of the ‘active ingredient´, all PFC-free DWR treatments used are totally free from all perfluorinated chemicals (PFC) (of course including both perfluorooctanesulfonic acid (PFOS) and perfluorooctanoic acid (PFOA)), free from other halogenated substances and free from alkylphenolethoxylates, including nonylphenolethoxylates.<br /><br /> The possible drawbacks are that the oil repellency and the durability of the PFC-free DWR treatments may be slightly lower than for a PFCcontaining option and therefore re-treatment for water repellency may be necessary at an earlier point in time. In all, we use very good, environmentally friendly alternatives to PFC-containing DWR treatments. Mummy-shaped fit to maximise warmth and reduce weight.<br /><br /> 
      Features:<br />
      - Draft collar with elastic adjustment, helping to trap warmth inside on cold nights;<br />
      - Ergonomic footbox construction;<br />
      - Ergonomic hood with elastic adjustment for a snug, comfortable fit ¾ side zip with anatomically-shaped curvature for easy reach and access;<br />
      - Left-side zipper placement;<br />
      - Draft tube inside zipper, stopping cold air from getting in;<br />
      - Two way YKK zipper;<br />
      - Anti-snag tape to prevent zipper sliders from snagging the fabric;<br />
      - Internal pillow pocket;<br />
      - Two hang loops;<br />
      - Four-way compression bag included;<br />
      - Packed size in litres (uncompressed):30L (190cm) Packed size in litres (uncompressed):34L (205cm) Comfort temperature -11°C;<br />
      - Limit temperature -18°C;<br />
      - Extreme temperature -39°C;<br />
      - Tested according to EN-13537 standard;<br />
    </span>,
    price: 676.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '~3 kg',
    features: ['-'],
    activity: 'Camping',
    sustainable: true,
  },
  {
    id: '049',
    name: 'La Sportiva X-Cursion 28L Hiking Backpack',
    type: 'Accessories',
    brand: 'La Sportiva',
    images: [
      images.xcursion28lFirst,
      images.xcursion28lSecond,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>An essential sport gear for all backpack enthusiasts, La Sportiva X-Cursion 28L is a ideal, sleek, lightweight backpack designed for your hiking, trekking and everyday use. It can very well adapt from trail to urban use, as it is compatible with hydration systems and is durable and comfortable to carry.</span>,
    description: <span>
       The two front pockets have zippers on the side and the top pocket on the backpack has a key clip which ensures protection and the small compartment provides storage capacity for small items like pens. The two side pockets provides the adequate space for holding water bottles or containers. The internal pockets inside a large volume main compartment has enough space for clothes and equipment, while the outside small pockets have space for eatables like enerybars. <br /><br /> The padded back panel with contoured shoulder straps and adjustable sternum strap makes it easy and accessible to grab and go. The ventral belt can be adjusted or can be removed as per your wish, also thanks to the back opening with zipper that you now have space for an extra pair of shoes. Also, the elastic holder outside is easy to use and can carry extra jacket or any clothing item safely. <br /><br /> With lots of space and pockets, La Sportiva X-Cursion 28L is a very high quality and durable backpack for all globetrotters. Backpacks are the only true companion on your trekking or hiking trips. So, choose wisely! Ultra-lightweight mesh-reinforced nylon backpack, drop pocket, adjustable elastic outer organizer, non-padded shoulder straps and minimal hip belt. Predisposition for hydration systems. <br /><br /> Hose construction, ample top opening with zipper and upper outer pocket, large secondary opening on the back with zip allowing access to the interior of the backpack throughout its length.
    </span>,
    price: 480.00,
    gender: 'Unisex',
    color: 'Black',
    weight: 'max 28L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '050',
    name: 'La Sportiva Trango Hiking Poles',
    type: 'Accessories',
    brand: 'La Sportiva',
    images: [
      images.trangopolesFirst,
      images.trangopolesSecond,
      images.trangopolesThird
    ],
    size: [
      64 + '-' + 140 + 'cm',
    ],
    shortDescription: <span>Strong and heavy duty poles. Aluminium structure and design guarantees that they will hold the entire weight of the user even during the most challenging downhill hikes.</span>,
    description: <span>
      Specifications: <br />
      - Materials: Aluminium alloy 6013, Eva Grip with Neoprene strap, E-basket with Carbide tip. Tip rubber protection, 50 mm basket; <br />
      - Structure: 3 Sections telescopic, Flexy Locking System; <br />
      - Weight: 230gr.
    </span>,
    price: 267.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '230 g',
    features: ['-'],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '057',
    name: 'Mammut Comfort Fast Adjust Harness Climbing',
    type: 'Accessories',
    brand: 'Mammut',
    images: [
      images.comfortfastFirst,
      images.comfortfastSecond,
    ],
    size: [
      'M',
      'L'
    ],
    shortDescription: <span>Comfort Fast Adjust Harness Men. A comfortable and breathable climbing harness. Laser-cut material for greater breathability and robustness. Optimum weight distribution. The anatomically optimized shape in combination with the soft edge of the hip belt give the Comfort Fast Adjust Harness Men unparalleled comfort for long climbs.</span>,
    description: <span>
      Features: <br />
      - MAMMUT CONNECT inside; <br />
      - Laser-cut fabric for breathability and robustness; <br />
      - Splitt Webbing Technology for optimal weight distribution; <br />
      - 4 large pre-formed material loops for easy attachment; <br />
      - Quickly adjustable leg loops thanks to Fast Adjust buckles; <br />
      - Protection of the binding loop by high-quality plastic to avoid abrasive wear and to prolongthe service life; <br />
      - Fastening for magnesium bags; <br />
      - Maximum comfort thanks to the particularly soft upper edge of the hip belt; <br />
      - Storage bag included; <br />
      - Certification: CE EN 12277 Type C, UIAA; <br />
      - Strong Haul loop (2 kN); <br />
      - Indicator in the binding loop indicates when the harness needs to be replaced; <br />
      - 4 fastening loops for ice screws; <br />
      - Easily slidable, hot forged aluminium buckle; <br />
      - Drop Seat Function; <br />
      - Cut: Basic.
    </span>,
    price: 682.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '-',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '058',
    name: 'Mammut Protect Down -21ºC Sleeping Camping Bag',
    type: 'Accessories',
    brand: 'Mammut',
    images: [
      images.protectDownFirst,
      images.protectDownSecond,
      images.protectDownThird
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Extreme temperatures. Extremely good sleep. With the revolutionary Protect Down Bag -21C sleeping bag you can sleep as soundly as in your own bed. As part of the Recovery series, the sleeping bag features an optimized fit for greater comfort, a central zipper for climate regulation and special material to prevent irritating noises. The down filling optimizes both weight and packing volume. Protect Down Bag -21C for extreme performance.</span>,
    description: <span>
       Features:<br />
       - Membrane (B2B): 100% Polyurethane;<br />
       - Main Fabric 2 - Face Material (B2B): 100% Polyester;<br />
       - Main Fabric 2 (B2B): Polyester Warp Knit;<br />
       - Main Fabric 1 - Face Material (B2B): 100% Polyamide;<br />
       - Lining 1 - Face Material (B2B): 100% Polyester;<br />
       - Cut: Basic.
    </span>,
    price: 2534.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '-',
    features: ['-'],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '059',
    name: 'Mammut Crag Sender Climbing Helmet',
    type: 'Accessories',
    brand: 'Mammut',
    images: [
      images.cragsenderFirst,
      images.cragsenderSecond,
      images.cragsenderThird
    ],
    size: [
      52 + '-' + 57 + 'cm',
      56 + '-' + 61 + 'cm',
    ],
    shortDescription: <span>For any outdoor activity, keeping your head protected is essential. And if you´re an experienced mountaineer or climber, you know that you need the greatest protection available while keeping the weight as low as possible. If you can relate to this, the Mammut Crag Sender helmet is for you. Lightweight, well-ventilated, and built with the highest quality materials in the marketplace, this helmet from the Swiss brand will provide you with unwavering security on any cliff or slope.</span>,
    description: <span>
      Features: <br />
      - Certification: CE EN 12492; <br />
      - Extended MAMMUT safety test tests helmet with regard to robustness especially after side impact; <br />
      - In-mold construction with EPS core and Kevlar reinforcements; <br />
      - Additional protection on front and back as well as on the sides; <br />
      - Flat profile; <br />
      - Large ventilation openings and integrated air duct; <br />
      - Additional padding for perfect fit; <br />
      - Easy mounting of a headlamp with front bracket and elastic loops on the backside; <br />
      - Fully adjustable chin strap for optimum fit; <br />
      - Includes bag for convenient transport; <br />
      - Cut: Basic; <br />
      - Weight: 199 gr 52-67 / 219 gr 56-61.
    </span>,
    price: 105.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '199~219 g',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '060',
    name: 'Mammut Trion Spine 75L Hiking Backpack',
    type: 'Accessories',
    brand: 'Mammut',
    images: [
      images.trion75lFirst,
      images.trion75lSecond,
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>If you´re looking for a luxury mountain climbing experience, the Mammut Trion Spine 75 backpack will be your best companion. Featuring several improvements designed to give you the best possible comfort, this bag is ideal for long hikes and demanding trips into the wilderness.</span>,
    description: <span>
      Features: <br />
      - High-density, 2-layer Eva back padding; hip belt and shoulder straps with stretch fabric cover; <br />
      - Internal zipper compartment for valuables; <br />
      - Rope fixing strap under the flap; <br />
      - Height adjustable flap with internal and external pocket; <br />
      - Trekking pole carrier; <br />
      - Daisy chain loop; <br />
      - Lateral compression straps, can also be tensioned at front to carry gear; <br />
      - 2 strong ice axe attachments; <br />
      - Gear loop on hip belt; <br />
      - Hydration system-compatible; <br />
      - Huge front zipper access to main compartment; <br />
      - Zipper pocket on hip belt; <br />
      - Reinforced side ski attachment; <br />
      - Suspension system with patented Active Spine Technology to support a natural gait; <br />
      - Height of the suspension system can be adjusted with a simple movement; <br />
      - Large internal pocket in the front opening; <br />
      - Large pocket on the shoulder strap; <br />
      - Bottle holder on side; <br />
      - Actual volume: 75 L; <br />
      - Length: 33 cm; <br />
      - Height: 74 cm; <br />
      - Width: 34 cm; <br />
      - Weight: 2640 g.
    </span>,
    price: 1726.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '2640 g',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '071',
    name: 'Osprey Zealot Climbing Chalk Bucket 5L',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.zealotchalkFirst,
      images.zealotchalkSecond,
      images.zealotchalkThird
    ],
    size: [
      'one-size'
    ],
    description: <span>
      Features: <br />
      - Magnetic Closure; <br />
      - Two Zip Pockets; <br />
      - Roll Top With Adjustable Web And Buckle For Extra Secure Closure; <br />
      - Unlined Interior; <br />
      - Elastic Loops For Either Vertical Or Horizontal Bouldering Brush Carry; <br />
      - 30l & 45l: Molded-Eva Backpanel With Hdpe Framesheet.
    </span>,
    price: 134.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '-',
    features: ['-'],
    activity: 'Climbing',
    sustainable: true,
  },
  {
    id: '072',
    name: 'Osprey Triple Climbing Snap Hook',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.triplesnapFirst,
      images.triplesnapSecond,
      images.triplesnapThird
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>Osprey is a hot-forged carabiner of classic oval shape suitable for technical and bigwall climbing. It´s invaluable on working with pulleys. The utility value of this carabiner is increased by Ocún’s typical rope friendly shape of the upper profile, which makes the Osprey usable for HMS belaying in case of an emergency. If climbers owned just one carabiner, it should be the Osprey.</span>,
    description: <span>
      Features: <br />
      - Triple twist-lock gate with keylock nose; <br />
      - Rope friendly shape to avoid excessive wear of rope; <br />
      - Ergonomic body; <br />
      - Optimal weight, strength and size balance.
    </span>,
    price: 74.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '73 g',
    features: ['-'],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '073',
    name: 'Osprey Zealot 1L Climbing Chalk Bag',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.zealot1lFirst,
      images.zealot1lSecond,
      images.zealot1lThird
    ],
    size: [
      'one-size'
    ],
    description: <span>
      Features: <br />
      - Secure cinch closure; <br />
      - Soft internal fleece-y liner; <br />
      - Adjustable web belt; <br />
      - Zip pocket; <br />
      - 30l & 45l: Molded-Eva Backpanel With Hdpe Framesheet; <br />
      - Cubic Inch: 61; <br />
      - Litres: 1; <br />
      - Weight: 0.11 Kg; <br />
      - Dimensions: 6h x 4w x 4d in.
    </span>,
    price: 99.00,
    gender: 'Unisex',
    color: 'Green',
    weight: '-',
    features: ['-'],
    activity: 'Climbing',
    sustainable: true,
  },
  {
    id: '074',
    name: 'Osprey Ariel Plus 85L Hiking Backpack',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.arielPlusFirst,
      images.arielPlusSecond,
      images.arielPlusThird
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>The Osprey Ariel Plus 85L backpack has been created with an innovative design that is easily convertible into a small backpack for short excursions, which makes it a versatile and very useful option for hikers who visit the mountains on several occasions and different periods and need stability, comfort, impermeability, and breathability.</span>,
    description: <span>
      This hiking backpack is made with high tenacity nylon, so it guarantees an excellent resistance to wear even on the most technical terrains. It features a waterproof treatment that avoids your items from getting wet against unforeseen rain. The Fit-on-the-Fly system allows adapting the lumbar belt and shoulder straps to suit you, while the AirScape back favors breathability and a comfortable support thanks to an injection molded foam backrest.<br /><br /> Its design incorporates a waterproof cover, sleeping bag compartment, external access to hydration, zippered pocket on the top, pockets on the lumbar belt, large main compartment with a “U” zipper, and side mesh pockets. This 90l backpack for maximum capacity is compatible with a hydration bag and includes a silicone print on the lumbar area for better support and grip. Besides, it comes with side compression straps, removable straps for the sleeping bag, reflective details, Stow-On-The-Go hooks for poles and piolets, a sternum strap with an emergency whistle, and an internal ring for keys.<br /><br />
      Features:<br />
      - Removable top lid converts to DayLid daypack. <br />
      - Included raincover made with PFC-free DWR and bluesign®-approved materials.<br />
      - Stow-on-the-Go trekking pole attachment.<br />
      - Floating top lid with lash points.<br />
      - Integrated FlapJacket cover for lidless use.<br />
      - Dual front panel zippered pockets for easy-access storage.<br />
      - Large front panel zip access to main compartment.<br />
      - Fabric reinforced front shove-it pocket.<br />
      - Large dual-access stretch mesh side water bottle pockets.<br />
      - Dual upper/lower side compression straps.<br />
      - Dual front panel compression straps with StraightJacket compression.<br />
      - Dual zippered hipbelt pockets.<br />
      - Dual ice axe loops with bungee tie-offs.<br />
      - Zippered sleeping bag compartment with removable divider.<br />
      - Removable sleeping pad straps.<br />
      - Internal hydration reservoir sleeve .
    </span>,
    price: 1328.00,
    gender: 'Women',
    color: 'Red',
    weight: 'max 81~90L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '075',
    name: 'Osprey Archeon Chest Rig Hiking Backpack',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.archeonFirst,
      images.archeonSecond,
      images.archeonThird
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>Keep your most important tools and tidbits at the ready with the Archeon Chest Rig. Designed with ample room and organization for essential supplies like first aid, communication devices, digital cameras, ID and more, you´ll enjoy effortless access on the go. Plus, its low-profile harness makes the Chest Rig a comfortable solo-carry or the perfect companion to another pack.</span>,
    description: <span>
      Made with 100% recycled nylon. FLEXIBLE Four-buckle harness attachment for easy ambidextrous use. VERSATILE Low-profile harness can be worn under another pack. ORGANIZATION Multiple internal pockets and pouches help keep the contents where you need them. EASY ACCESS Front panel organization pocket for fast access to essentials.<br /><br />
      Features:<br />
      - Zippered panel access;<br />
      - Internal organisation pocket;<br />
      - Front zippered pocket;<br />
      - Internal key attachment clip;<br />
      - Reflective graphics;<br />
      - Front panel organiser pocket;<br />
      - Contact mesh fabric for next-to-skin comfort;<br />
      - Internal mesh pockets;<br />
      - Clamshell opening for easy and secure access;<br />
      - Hook and loop front panel for patches or ID;<br />
      - Low-profile harness can be worn under another pack;<br />
      - Four-buckle harness attachment for easy ambidextrous use.<br /><br />
      Specifications:<br />
      - Dimensions (CM): 18H 29W 12D;<br />
      - Fabric: 1880D Nylon Canvas Recycled C0.
    </span>,
    price: 252.00,
    gender: 'Unisex',
    color: 'Black',
    weight: 'max 0~10L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '076',
    name: 'Osprey Daylite Sling 6L Hiking Backpack',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.dayliteSlingFirst,
      images.dayliteSlingSecond,
      images.dayliteSlingThird
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>Throw the Daylite® Sling over your shoulder and go—to the store, school or on a quick hike. Wherever you’re headed this svelte carry solution allows you to simply and securely carry a few daily essentials. Featuring breathable and soft spacermesh material on a single anatomically shaped shoulder strap for next-to-skin comfort.</span>,
    description: <span>
      A front zippered mesh pocket stores smaller easy-to-access items, while the main compartment offers organization sleeves and a key-clip. Built with high-quality bluesign® approved recycled fabrics, GRS-certified recycled polyester and a PFC-free DWR coating.<br /><br />
      Features:<br />
      - Dual U-zip access to main compartment;<br />
      - Interior mesh organizer and key clip;<br />
      - Multifunctional interior sleeve;<br />
      - Zippered front panel slash pocket;<br />
      - Harness stretch mesh pocket;<br />
      - Left or right over-the-shoulder ambidextrous fit and carry.
    </span>,
    price: 182.00,
    gender: 'Unisex',
    color: 'Purple',
    weight: 'max 0~10L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '077',
    name: 'Osprey Daylite Tote Pack 20L Hiking Backpack',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.dayliteToteFirst,
      images.dayliteToteSecond,
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>The Daylight® Tote Is Ready And Waiting For Your Next Day Hike, Weekend Trip To The Farmer´s Market And Study Session At Your Favorite Coffee Shop. This Pack Transitions Seamlessly From Backpack To Tote With Multiple Carry Options To Suit Your Needs. The Padded Internal Sleeve Can Hold A Laptop Or Hydration Bladder, Providing You With Multiple Options For Work And Play.</span>,
    description: <span>
      Features:<br />
      - Top-Zip Access To Main Compartment With Tote Or Backpack-Style Carry;<br />
      - Front And Back Panel Shove-It Pocket For Stashing Items On The Go Or To Tuck Away Tote Straps;<br />
      - Elevated Padded Laptop/Reservoir Sleeve;<br />
      - Internal Zippered Mesh Organization Pocket With Key Clip;<br />
      - Dual Water Bottle Side Mesh Pockets;<br />
      - Secure Front Panel Zipper Pocket;<br />
      - Large Backpanel Luggage Pass-Thru.
    </span>,
    price: 272.00,
    gender: 'Unisex',
    color: 'Green',
    weight: 'max 11~20L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '078',
    name: 'Osprey Transporter 40L Hiking Backpack',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.transporter40lFirst,
      images.transporter40lSecond,
      images.transporter40lThird
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>Keep your small gear or articles of clothing organized and protected with the Transporter® Duffel 40. Featuring rugged, weather-resistant fabrics that keep internal contents protected and a stowaway harness that carries comfortably. Perfect for gear storage or as a companion on a short trip—this is more than your average duffel.</span>,
    description: <span>
      Made from bluesign® approved recycled polyester with dual-sided TPU coating inside and out, burly hardware, stiffened main body fabric with protective accent ribs, overlapping zipper and a PFC-free DWR coating that protects your gear from the elements.<br /><br />
      Features:<br />
      - Zippered end pocket for quick access to smaller items;<br />
      - Four burly webbing grab handles;<br />
      - 8 coated webbing lash points for securing duffels;<br />
      - Large lockable U-zip access to main compartment;<br />
      - Weather-protected main compartment zip path with overlapping rain flap;<br />
      - Internal zippered mesh pocket;<br />
      - Internal pockets can accommodate most popular luggage trackers.
    </span>,
    price: 520.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: 'max 31~40L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '079',
    name: 'Osprey Aether Plus 100L Hiking Backpack',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.aetherFirst,
      images.aetherSecond,
      images.aetherThird
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>The Osprey Aether Plus 100L Backpack is the model with the highest capacity of this version because it has 100 liters of maximum capacity, which are ideal for an excursion of more than a week or a few days since it can be converted into a smaller backpack, so it is very useful and versatile for professional hikers who need as much space as possible to carry hydration, food, sleeping bag, clothing, and climbing tools.</span>,
    description: <span>
      Features:<br />
      - Removable top lid converts to DayLid daypack;<br />
      - Included raincover made with PFC-free DWR and bluesign®-approved materials;<br />
      - Stow-on-the-Go trekking pole attachment;<br />
      - Floating top lid with lash points;<br />
      - Integrated FlapJacket cover for lidless use;<br />
      - Dual front panel zippered pockets for easy-access storage;<br />
      - Large front panel zip access to main compartment;<br />
      - Fabric reinforced front shove-it pocket; <br />
      - Large dual-access stretch mesh side water bottle pockets;<br />
      - Dual upper/lower side compression straps;<br />
      - Dual front panel compression straps with StraightJacket compression; <br />
      - Dual zippered hipbelt pockets;<br />
      - Dual ice axe loops with bungee tie-offs;<br />
      - Zippered sleeping bag compartment with removable divider;<br />
      - Removable sleeping pad straps;<br />
      - Extendible Custom Fit-on-the-Fly Hipbelt offers a precise fit for varying waist sizes;<br />
      - Incremental length and angle adjustments allow for a fine-tuned fit;<br />
      - Custom Fit-on-the-Fly Shoulder Straps allow for a precise shoulder wrap and fit;<br />
      - Injection-molded, die-cut foam AirScape framesheet maintains comfortable back contact with ventilated airflow channels and maximum stability for carrying heavy loads;<br />
      - Mesh-covered foam lumbar for supportive, lightweight and comfortable contact surfaces.
    </span>,
    price: 1334.00,
    gender: 'Unisex',
    color: 'Black',
    weight: 'more than 90L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '080',
    name: 'Osprey Raptor 10L Hydration Hiking Vest',
    type: 'Accessories',
    brand: 'Osprey',
    images: [
      images.raptor10lFirst,
      images.raptor10lSecond,
      images.raptor10lThird
    ],
    size: [
      'one-size'
    ],
    shortDescription: <span>Both on the road and in the mountains, the Osprey Raptor 10L hydration backpack is the ultimate option to keep your belongings and more than enough water at hand. Offering you a premium, featureful experience, the Raptor brings the best technologies of the American brand together in an unparalleled design.</span>,
    description: <span>
      The combination of the AirScape™ backpanel with the outstanding BioStretch™ harness translates into an extremely comfortable feel in which neither sweat nor moisture will be a problem for you. Thanks to its improved airflow and winged shoulder straps, using the Raptor while biking is as easy as breathing.<br /><br /> The harness also includes a removable hose that allows easy access to the Hydraulics® LT 2.5 hydration reservoir-compatible pocket. This utilitarian design also shows at the Raptor’s base, where ToolWrap®, an easy-access pocket designed for carrying repair tools, gives you everything you need to keep your bike moving.<br /><br />
      Features:<br />
      - 3L Hydraulics Reservoir included;<br />
      - AirScape backpanel with foam ridges for comfort and fit;<br />
      - BioStretch hipbelt and harness;<br />
      - Integrated roll-out ToolWrap;<br />
      - Internal hydration sleeve;<br />
      - Internal key attachment clip;<br />
      - LED light attachment point;<br />
      - LidLock bike helmet attachment;<br />
      - Magnetic lockable bite valve to prevent leakage;<br />
      - Reflective graphics;<br />
      - Side compression straps;<br />
      - Sternum strap buckle with magnet;<br />
      - Zippered scratch-free sunglasses and electronics pocket.
    </span>,
    price: 548.00,
    gender: 'Unisex',
    color: 'Green',
    weight: 'max 0~10L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '081',
    name: 'Petzl Meteor Climbing Helmet',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.meteorFirst,
      images.meteorSecond,
      images.meteorThird
    ],
    size: [
      'S-M',
      'M-L'
    ],
    shortDescription: <span>Are you passionate about climbing, mountaineering, or ski touring? The METEOR helmet offers efficient protection for these three activities! Lightweight, compact, and with excellent ventilation, it’s comfortable in any season. The shape provides greater coverage for enhanced head protection and was specifically designed to be worn with ski goggles.</span>,
    description: <span>
      Specifications:<br />
      - Only 240 g;<br />
      - Low-profile design achieved using In-Mold construction with an expanded polystyrene (EPS) foam liner injected inside a lightweight polycarbonate shell;<br />
      - Large vents offer excellent air flow;<br />
      - Quality finish and sleek design.<br /><br />
      Enhanced protection:<br />
      - Designed in accordance with Petzl’s TOP AND SIDE PROTECTION label;<br />
      - Designed for optimal protection against side, front, and rear impacts.<br /><br />
      Suited for ski touring:<br />
      - First CE-certified ski touring helmet;<br />
      - Optimal ventilation on both the ascent and descent;<br />
      - The helmet can be worn comfortably from the beginning to the end of an outing;<br />
      - Front of helmet is specifically designed for use with ski goggles;<br />
      - Rear elastic band is compatible with ski goggle headbands;<br />
      - Semi-rigid headband can be easily adjusted, even with gloves on;<br />
      - Two clips in front and a rear elastic band for securing a headlamp to the helmet.
    </span>,
    price: 324.00,
    gender: 'Unisex',
    color: 'White',
    weight: '240g',
    features: [
      '-'
    ],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '082',
    name: 'Petzl Picchu Junior Climbing Helmet',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.picchuFirst,
      images.picchuSecond,
      images.picchuThird
    ],
    size: [
      48 + '-' + 54 + 'cm',
    ],
    shortDescription: <span>Designed for children, the picchu helmet is adapted for climbing and cycling (european and american standards). it features a hard outer shell, to resist impact and scratches. head-covering design provides enhanced protection against lateral, frontal and rear impact. ventilated and made to fit a child’s head, making it comfortable to wear.</span>,
    description: <span>
      Helmet meets multiple climbing and cycling standards:<br />
      - European cycling (CE EN 1078);<br />
      - United States cycling (CPSC safety standard - cycling helmets for children 5 and older);<br />
      - designed in accordance with petzl’s top and side protection label;<br />
      - head-covering design for enhanced protection against lateral, frontal and rear impact.<br /><br />
      Durable construction, made for children:<br />
      - hard ABS outer shell is impact- and scratch-resistant for optimal durability;<br />
      - specifically sized for children between the ages of 3 and 8 (48-54 cm headband);<br />
      - sheet of stickers allows the helmet to be personalized;<br /><br />
      Comfort:<br />
      - side openings for ventilation;<br />
      - headband and chinstrap are adjustable;<br />
      - narrow polyester webbing straps offer improved comfort;<br />
      - headlamp can be attached using the four optimally placed clips;<br />
      - comfort foam is removable and washable.
    </span>,
    price: 191.00,
    gender: 'Kids',
    color: 'Blue',
    weight: '330g',
    features: [
      '-'
    ],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '083',
    name: 'Petzl Canyon Guide Climbing Harness',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.canyonGuideFirst,
      images.canyonGuideSecond,
      images.canyonGuideThird
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Comfortable, ergonomic harness with integrated protective seat, for canyoning. Designed for canyoning, the CANYON GUIDE is a comfortable, ergonomic harness designed for expert users and guides. It features a gated ventral attachment point that allows optimal integration of equipment (lanyard, ascender, cutaway sling).</span>,
    description: <span>
      The gear loops and secondary loops make it easy to carry gear in any situation (progressing, organizing packs, rescue...). The protective seat is durable and interchangeable, and effectively protects the wetsuit and harness webbing from abrasion. The stainless steel DOUBLEBACK buckles, the metal attachment point and the reinforced gear loops optimize durability, for intensive use. The harness’s identification panel is also reinforced, for tracking the harness throughout its lifespan.<br /><br />
      Comfortable, ergonomic canyoning harness designed for expert users and guides:<br />
      - ergonomic ventral attachment point is positioned high, facilitating connection of the descender and optimizing comfort during rappels. The attachment point is gated, for optimal integration of the DUAL CANYON GUIDE lanyard, a cutaway sling or a CROLL S or L chest ascender;<br />
      - wide, semi-rigid waistbelt provides comfort and support;<br />
      - adjustment with DOUBLEBACK buckles for quick, fluid tightening;<br />
      - the color coding is identical to that of the CANYON CLUB, to simplify demonstrations;<br />
      - marking area on outside of waistbelt for easy identification of harness;<br /><br />
      Facilitates the carrying and organization of equipment:;<br />
      - four pre-shaped gear loops, two horizontal and two vertical, for easy transport of equipment;<br />
      - four secondary loops, for attaching light bags and stowing the PIRANA descender;<br />
      - the loop under the ventral attachment point is ideal for attaching a heavier bag or for installing a deviation. It can also be used to transfer a person during rescue;<br /><br />
      Excellent durability, for intensive use:<br />
      - optimal durability of metal attachment point;<br />
      - protective seat is durable and interchangeable, designed to protect the wetsuit and harness webbing from abrasion. Two additional colors are available as accessories;<br />
      - stainless steel DOUBLEBACK buckles are very durable, even in salty environments;<br />
      - webbing designed for intensive use and smooth adjustment;<br />
      - reinforced gear loops with protective sheath;<br />
      - identification panel is integrated in the harness, for tracking the equipment throughout its lifespan;<br />
      - easy to clean.<br /><br />
      Specifications:<br />
      - Material(s): high-strength polyester webbing, closed-cell foam, thermoplastic polyurethane (TPU) seat, stainless steel buckles;<br />
      - Certification(s): CE, EN 12277 type C, UIAA;<br />
      - Waist size: 65-95 cm;<br />
      - Leg loops: 40-65 cm;<br />
      - Weight: 870 g.
    </span>,
    price: 640.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '870g',
    features: [
      '-'
    ],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '084',
    name: 'Petzl Crevasse Climbing Rescue Kit',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.crevasseRescueFirst,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>The CREVASSE RESCUE KIT contains everything needed for setting up a hauling system or a rope ascent in case of a fall into a crevasse. This kit is essential for glacier travel (on skis or on foot).</span>,
    description: <span>
      Features:<br />
      - 1 MICRO TRAXION pulley;<br />
      - 2 OK SCREW-LOCK carabiners;<br />
      - 1 TIBLOC;<br />
      - 1 PARTNER pulley;<br />
      - 1 ST’ANNEAU 120 cm sling.<br /><br />
      SPECIFICATIONS:<br />
      - Weight: 370 g;<br />
      - Rope compatibility: 8 to 11 mm;<br />
      - Certification(s): CE, UIAA.
    </span>,
    price: 603.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '370g',
    features: [
      '-'
    ],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '085',
    name: 'Petzl Sum´Tec Expeditions Adze',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.sumtecFirst,
      images.sumtecSecond,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>The SUMTEC ice axe represents versatility: it adapts easily to any mountaineering activity, from classic to technical. It is completely modular, allowing it to be optimized for the objective. The TRIGREST handrest, adjustable without tools, and the compatibility of the ice axe with most Petzl accessories (PURICE and DRY picks, MASSELOTTES...) ensure the efficiency required for difficult sections.</span>,
    description: <span>
      Technical:<br />
      - ICE pick is tapered at the tip for easy penetration in any ice;<br />
      - the TRIGREST handrest allows the position of the hand or the index finger to be adjusted into climbing mode quickly and without tools;<br />
      - shaft has steel spike for solid support in piolet-canne mode<br /><br />
      Versatile:<br />
      - curved shaft for efficient anchoring, while protecting the hand;<br />
      - shaft is straight enough for efficient planting into snow and walking comfortably.<br /><br />
      Completely modular ice axe:<br />
      - Interchangeable picks adapt to different objectives;<br />
      - Adze and hammer are interchangeable;<br />
      - Adding weights (optional) improves anchoring qualities;<br />
      - Compatible with Petzl accessories for QUARK, NOMIC and ERGO ice axes;<br />
      - Available in two versions: adze or hammer.
    </span>,
    price: 638.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '470g',
    features: [
      '-'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '086',
    name: 'Petzl Nao 2 Expeditions Headlight',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.nao2First,
      images.nao2Second,
      images.nao2Third,
    ],
    size: [
      700 + ' Lumens',
    ],
    shortDescription: <span>With 700 lumens of power, NAO sets the standard for night trails! It is intelligent, and entirely devoted to performance. During activity, with REACTIVE LIGHTING technology, NAO analyzes ambient light and instantly adjusts the brightness to the needs of the athlete. With energy optimized and manipulations reduced to a minimum, the trail runner can concentrate on the race!</span>,
    description: <span>
      Features:<br />
      - the light sensor automatically adjusts brightness and beam pattern, optimizing battery use;<br />
      - depending on the chosen burn time (6h30 or 12 h), brightness automatically self-regulates in two modes: MAX POWER and MAX AUTONOMY;<br />
      - Multi-beam lighting: combines a wide beam for proximity lighting with a focused beam for long-range vision;<br />
      - LOCK function to avoid accidentally turning it on during transit or storage.<br /><br />
      Rechargeable 2600 mAh Lithium-Ion battery:<br />
      - universal charging with micro USB port;<br />
      - battery charge indicator.<br /><br />
      Headlamp is very stable on the head:<br />
      - adjustable headband is very comfortable;<br />
      - additional top strap for technical activities;<br />
      - Accessory belt kit for NAO allows the rechargeable battery to be moved to the belt to reduce the weight worn on the head, or to keep it warm in winter.<br /><br />
      Specifications:<br />
      - Weight: 185 g;<br />
      - Technology: REACTIVE LIGHTING or CONSTANT LIGHTING;<br />
      - Beam pattern: wide, mixed or focused;<br />
      - Energy: 2600 mAh Lithium-Ion rechargeable battery (included);<br />
      - Recharge time: 6 h;<br />
      - Battery compatibility: LR03;<br />
      - Watertightness: IP X4 (water resistant);<br />
      - Certification(s): CE.
    </span>,
    price: 620.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '185g',
    features: [
      '-'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '087',
    name: 'Petzl Sirocco Expeditions Helmet',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.siroccoFirst,
    ],
    size: [
      48 + '-' + 54 + 'cm',
      53 + '-' + 61 + 'cm'
    ],
    shortDescription: <span>Ultra-lightweight climbing and mountaineering helmet with reinforced protection. The SIROCCO is designed to respond to the needs of climbers and mountaineers for reduced weight and for protection. Its head-covering shape, lower in the rear, offers reinforced protection. Optimized volume on the head, along with excellent ventilation, provide maximum comfort.</span>,
    description: <span>
      Features:<br />
      - Ultra-light design: Only 170 g. Hybrid construction with a shell in EPP (expanded polypropylene) foam and rigid crown injected with EPS (expanded polystyrene) foam; <br />
      - Head-covering design for optimal protection against lateral and rear impact;<br />
      - Maximum comfort in action: - Wide holes, for excellent ventilation;<br />
      - Completely adjustable, thanks to the adjustable headband and chinstrap;<br />
      - Magnetic buckle;<br />
      - Facilitates fastening the chinstrap (Petzl patent);<br />
      - Compatible with the VIZION eye shield;<br />
      - Two hooks and rear elastic for attaching a headlamp.
    </span>,
    price: 414.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '170g',
    features: [
      '-'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '088',
    name: 'Petzl Expeditions Dart',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.dartFirst,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Technical and lightweight, DART crampons are designed for ice climbing, mixed climbing and dry tooling. With modular front points (long or short mono-point, dual-point or asymmetrical dual-point), they adapt to difficult climbs,snow couloirs and dry tooling. Stable support on any type of ice (cauliflower, hoarfrost), thanks to the lateral secondary points.</span>,
    description: <span>
      Features:<br />
      - Asymmetrical front sections for technical mountaineering boots;<br />
      - Toothed front points offer excellent penetration;<br />
      - Stable support on any type of ice (cauliflower, hoarfrost), thanks to the lateral secondary points, also on the mono-point;<br />
      - Precise, efficient placements, thanks to the configuration of the points;<br />
      - ANTISNOW system limits snow buildup in any snow conditions.<br /><br />
      Modular:<br />
      - Vome with four modular front points, to adapt to different activities. Mono-point (short or long), for ice climbing and dry tooling, asymmetrical dual-point for pure ice, or dual point for snow couloirs and gullies length of front points can be modified with one screw;<br />
      - LEVERLOCK FIL bindings: system for all technical mountaineering and ice climbing boots with front and rear welts;<br />
      - Compatible with FIL SMALL toe bail, to adapt them to narrow boots with toe welts;<br />
      - Compatible with the KIT CORD-TEC for reduced weight and bulk.<br /><br />
      Lifespan extended with spare parts:<br />
      - front points available as accessories;<br />
      - front sections available as accessories;<br />
      - ANTISNOW DART available as accessory.<br /><br />
      Specifications:<br />
      - Number of points: 12;<br />
      - Certification(s): CE, UIAA;<br />
      - Weight: 820 g;<br />
      - Multi-mount system: LEVERLOCK FIL.
    </span>,
    price: 837.00,
    gender: 'Unisex',
    color: 'Orange',
    weight: '820 g',
    features: [
      '-'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '089',
    name: 'Petzl Ergonomic Ice Expeditions Axe',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.ergonomicIceFirst,
      images.ergonomicIceSecond,
      images.ergonomicIceThird,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>The ERGONOMIC ice axe is designed for steep ice and for dry tooling. The sharp angle of the handle is ideal for prolonged hanging and increases power when pulling. The double handle offers multiple grip modes and stable hand switching. At home on rock or ice, the DRY pick optimizes inverted positions and the weights facilitate slotting of the pick in cracks.</span>,
    description: <span>
      Features:<br />
      - Multiple grip modes and stable hand switching, thanks to the double handle (high and low);<br />
      - Lower handle is sharply angled for more comfort when hanging and more power for extremely difficult sections. The shape allows open-handed grip, limiting fatigue and optimizing rests;<br />
      - Upper handle is over-molded and bi-material, offering excellent grip and insulation from the cold;<br />
      - Hydroformed shaft for optimal grip in the middle of the shaft.<br /><br />
      Efficient placement, hooking and wedging on any terrain:<br />
      - Perfect shape and balance of the ice axe provide an exceptional swing;<br />
      - Facilitated hooking, thanks to the curve under the head;<br />
      - DRY pick is tapered at the tip (3.3 mm) and versatile across all terrain: rock, snow and ice. The 4 mm thickness of the pick makes it stronger when slotted and torqued. The serrated edge stabilizes inverted positions;<br />
      - Inertia and striking quality are improved, thanks to the MASSELOTTE weights;<br />
      - The shape of the weights is optimized for slotting the pick in cracks.<br /><br />
      Modular construction:<br />
      - Entirely modular head allows the technical aspects of the ice axe to be adjusted;<br />
      - Compatible with Petzl accessories: ICE, PURICE, PURDRY, PANNE, MARTEAU;<br />
      - Sold with MINI MARTEAU, to protect the head and allow the user to hammer a piton back in;<br />
      - Without accessories, the ice axe is lighter, for dry tooling (only 550 g);<br />
      - GRIPREST ERGONOMIC handrest is over-molded and adjustable to three positions, to adapt to all hand sizes, even while wearing gloves. The absence of a steel point on the lower part gives better protection if the axe comes out of position.<br /><br />
      Specifications:<br />
      - Pick type: 2;<br />
      - Shaft type: 2;<br />
      - Material(s): aluminum, steel, glass fiber reinforced plastic;<br />
      - Certification(s): CE, UIAA;<br />
      - Sold with DRY pick, MASSELOTTES, MINI MARTEAU and GRIPREST ERGONOMIC handrest;<br />
      - Weight: 635 g.
    </span>,
    price: 1144.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '635g',
    features: [
      '-'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '090',
    name: 'Petzl Cordex Expeditions Plus',
    type: 'Accessories',
    brand: 'Petzl',
    images: [
      images.cordexPlusFirst,
      images.cordexPlusSecond,
      images.cordexPlusThird,
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>These medium weight belay/rappel gloves offer extra protection without sacrificing dexterity. Double-layer leather and padding protect the palm from heat generated during long rappels or lowers. Fingertips and other high-wear areas are reinforced for increased durability.</span>,
    description: <span>
      Features:<br />
      - Ergonomic cut for high dexterity without being too tight;<br />
      - Made of high quality leather for the perfect balance between durability and dexterity;<br />
      - Palm is padded to protect from heat generated during long rappels or lowers;<br />
      - Back is made of durable leather with abrasion-resistant stretch nylon at key flex areas;<br />
      - Durable double layer of leather in high-wear areas: fingertips, palm, between thumb and index finger;<br />
      - Neoprene cuff with Velcro closure;<br />
      - Carabiner hole to attach gloves to harness.
    </span>,
    price: 210.00,
    gender: 'Unisex',
    color: 'Yellow',
    weight: '156 g',
    features: [
      '-'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '096',
    name: 'Salewa North X Ice Expeditions Axe',
    type: 'Accessories',
    brand: 'Salewa',
    images: [
      images.northxFirst,
      images.northxSecond,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>The North-X Axe Is A Versatile, Ergonomic Ice Tool With A Pick And Adze For Technical Mountaineering, Climbing In Steep Mixed Terrain, Ice Climbing And Glacier Crossings.Its Stand-Out Feature Is The Special Sliding, Easy-Adjust Hand Rest.</span>,
    description: <span>
      When Plunging In Steep Firn, The Hand Rest Slides Upwards As You Climb To Promote Energy-Saving Movement And A More Rapid Ascent. If You Are On Steep Rock Or Ice, It Locks When Loaded For Maximum Support. In Addition, The Elasticated Webbing Anchor Leash Integrated In The Moving Hand Rest Enables Fast And Secure Shaft-Placement For Self-Belaying.<br /><br /> The Hot-Forged Steel Pick And 20 Offset 7075 Aluminium Shaft Guarantee A Balanced Swing Action And Secure, Precise Placement On All Types Of Rock And Ice. And The Insulated Synthetic Grip Provides Effective Protection From The Cold A Real Bonus On Longer Routes. For Extra Safety On The Descent, The North-X Has A Replaceable Steel Tip At The Bottom Instead Of A Spike, As It Provides A Better Hold On Rock And Ice.
    </span>,
    price: 737.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '097',
    name: 'Salewa Carbonium Ascent Expeditions Poles',
    type: 'Accessories',
    brand: 'Salewa',
    images: [
      images.carboniumFirst,
      images.carboniumSecond,
      images.carboniumThird,
    ],
    size: [
      68 + '-' + 142 + 'cm'
    ],
    shortDescription: <span>Be it mountaineering or trail running through rugged terrains Salewa Carbonium Ascent 2 Units is a lightweight, compact and robust 3-piece hybrid construction folding carbon pole. This versatile poles always provides optimal functionality and comfort in the mountain environment.</span>,
    description: <span>
      The bottom section is constructed with highly robust aluminium that offers stability and copes well during the rocky rugged terrains. Thanks to the ergonomic grip and extended grip zone that provides maximum hand ergonomic liberty while trekking or mountaineering. While, the carbon reinforced Powerlock system offers reliable locking and easy adjustment making it easier to use.<br /><br /> Without a doubt, Salewa Carbonium Ascent 2 Units is an ideal alpine pole for quick moving trips and troublesome trails. So buy it without thinking! The Carbonium Ascent Is A Versatile, Robust And Reliable 3-Piece Telescopic Carbon Pole For Mountaineering Use In All Types Of Terrain, Including In Extreme Conditions.Its Bottom Section Is Made From High-Strength Aluminium To Cope With Rocks And Scree.
    </span>,
    price: 519.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    id: '098',
    name: 'Salewa Vayu 2.0 Climbing Helmet',
    type: 'Accessories',
    brand: 'Salewa',
    images: [
      images.vayu2First,
      images.vayu2Second,
      images.vayu2Third,
    ],
    size: [
      59 + '-' + 63 + 'cm'
    ],
    shortDescription: <span>A equintessential climbing helmet Salewa Vayu 2.0 is lightweight, highly durable compact and suitable for every head shape. This versatile helmet always offer technical functionality and comfort in the mountain environment.</span>,
    description: <span>
      Thanks to the hybrid construction, the outer shell is made with ceramic-polymeric composite CNT (Carbon Nano Tech) reinforced with 30% carbon fibre mixture that provides optimal effective protection. Also, the interior coating of expanded polypropylene (EPP) and expanded polystyrene (EPS) ensures maximum shock absorption in the case of any mishaps.<br /><br /> The addition of large opening provides air flow that improves ventilation and keeps you comfortable. Finally, the innovation adjustment system with internal knob makes it easier to wear, the replaceable headlamp clips secures your light when it´s dark and lastly the comfortable chin guard offers optimal adjustment to any head shape.<br /><br /> So, without a doubt Salewa Vayu 2.0 is a must have climbing equipment when you are climbing mountains or trekking through rugged terrains. Buy it without thinking! A lightweight, hybrid construction helmet with a strong carbon reinforced outer shell that offers robust protection against rockfall. Its unique inner shell combines EPP and EPS for optimized impact absorption. With best-in-class ventilation and a new fitting system with magnetic buckle and adjustment dial for intuitive, single-handed operation.<br /><br />
      Features:<br />
      - Certifications: CE 12492, UIAA 106;<br />
      - Circumference: L/XL ( 59 - 63 );<br />
      - Materials Description: CNT (Carbon Nano Tech), EPP, EPS.
    </span>,
    price: 581.00,
    gender: 'Unisex',
    color: 'White',
    weight: '280 g',
    features: [
      '-'
    ],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '099',
    name: 'Salewa MTN Spike Hiking Crampons',
    type: 'Accessories',
    brand: 'Salewa',
    images: [
      images.mtnSpikeFirst,
      images.mtnSpikeSecond,
      images.mtnSpikeThird,
    ],
    size: [
      'M',
      'L',
      'XL'
    ],
    shortDescription: <span>Robust stainless steel spikes for safe grip on ice, packed snow and covered trails. For autumn & winter speed hiking on icy, snowy and mixed terrain.</span>,
    description: <span>
      The MTN Spike is designed for speed hiking in autumn & winter on icy, snowy and mixed terrain. Engineered to adapt to all types of footwear, it makes it possible to move rapidly over ice and snow-pack. The robust construction with eighteen stainless steel spikes delivers good traction. Supplied with a protective storage bag. Sizing Guide: EU: S=36-39, M=39-42, L=42-44, XL=44-47 UK: S=3.5-6, M=6-8, L=8-9.5, XL=9.5-12.<br /><br />
      Features:<br />
      - Excellent grip on ice thanks to 18 robust stainless steel spikes;<br />
      - Secure traction and stability also for descents thanks to the large heel plate;<br />
      - Stable fit thanks to rip-and-stick strap over the top of the foot;<br />
      - Durable stainless steel chains withstand repeated torque;<br />
      - Adapts to all types of footwear, quick & easy to slip on & off, secure fit thanks to tough elastomer harness;<br />
      - With protective storage bag.
    </span>,
    price: 222.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '375 g',
    features: [
      '-'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '100',
    name: 'Salewa Rozes Warm Sleeping Camping Bag',
    type: 'Accessories',
    brand: 'Salewa',
    images: [
      images.rozesWarmFirst,
    ],
    size: [
      'XS',
      'M',
      'L'
    ],
    shortDescription: <span>Robust stainless steel spikes for safe grip on ice, packed snow and covered trails. For autumn & winter speed hiking on icy, snowy and mixed terrain.</span>,
    description: <span>
      Features:<br />
      - Inner pocket for values;<br />
      - Open as a blanket;<br />
      - Washable and easy care;<br />
      - Optimized Shape;<br />
      - One-handed draw strings use;<br />
      - Pre-formed thermo collar;<br />
      - Functionally cut hood;<br />
      - Pre-shaped ergonomic foot section;<br />
      - Foot section with zipper;<br />
      - Zipper with anti-snagging slider;<br />
      - Dry Bag Included;<br />
      - PFC-free;<br />
      - Cross-product connectable;<br />
      - Responsive technology: Thermoregulation & Recovery;<br />
      - DWR – Durable Water Repellent treatment;<br />
      - Activities: Alpine Mountaineering, Hiking, Alpine Trekking.<br /><br />
      Specifications:<br />
      - Chamber construction: Layer construction;<br />
      - Zipper length: Full-length two-way YKK-Zipper;<br />
      - Body sizE: 185 cm;<br />
      - Packing size: ø26x38cm;<br />
      - Height: 210 cm;<br />
      - Shoulder width: 75 cm;<br />
      - Knee width: 53 cm;<br />
      - Foot width: 32 cm;<br />
      - Sleeping bag filling type: Synthetic;<br />
      - Outside: Nylon double ripstop shiny ECO DWR 56BS;<br />
      - Inside: Responsive soft touch ECO DWR 72;<br />
      - Filling: Powerloft – high insulation Microfiber;<br />
      - Weight: 1610 g;<br />
      - Comfort Temperature: 2 °C;<br />
      - Temperature Extreme: -21 °C;<br />
      - Temperature Limit: -8 °C.
    </span>,
    price: 970.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '1610 g',
    features: [
      '-'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '108',
    name: 'Salomon Sense Hiking Poles',
    type: 'Accessories',
    brand: 'Salomon',
    images: [
      images.sensePolesFirst,
      images.sensePolesFirst,
      images.sensePolesFirst,
    ],
    size: [
      120 + 'cm',
      125 + 'cm',
      135 + 'cm'
    ],
    shortDescription: <span>The Salomon Sense poles are ultra light, comfortable, solid, and flexible and they have been designed for trail running and mountain skiing. With the non-slip, comfortable, and soft grip, you can walk safely and firm steps.</span>,
    description: <span>
      The shaft of these trekking poles is made with carbon that is extremely light and measures 16mm. The strap is thin and breathable so you will not feel the annoying moisture. The small basket facilitates the use in trail running and in summer. The carbide tip resists on ice and hard snow. Summer pole for fast and light adventures. With a carbon shaft, long grip and small summer basket, the SENSE trekking pole is ultra light and easy to carry.
    </span>,
    price: 312.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '109',
    name: 'Salomon XT 6L Hiking Backpack',
    type: 'Accessories',
    brand: 'Salomon',
    images: [
      images.xt6lFirst,
      images.xt6lSecond,
      images.xt6lThird,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>The Salomon XT 6L Backpack has been designed for a walk in the mountain, the city or to ride your bike because it keeps very stable on your back and feels comfortable, soft, and breathable so you can enjoy your hiking, mountaineering, trail running, or running activities.</span>,
    description: <span>
      This 10 l backpack is made of 100% polyester so it is highly durable, dries easily, and breathes very well. The shoulder straps are padded and the back has a fabric that favors ventilation so you do not have to feel that annoying moisture.<br /><br /> It includes a main compartment with a zipper, a top pocket, two zippered pockets on the shoulder straps to carry two bottles of 500 ml, a front elastic drawstring to hold your sticks or a waterproof jacket, and chest straps for a comfortable and customized fit that will give you better support so you can move through the mountains with total confidence with this backpack hiking.<br /><br />
      Features: <br />
      - Back Body: 100% Polyester; Body: 100% Polyamide; Lining: 100% Polyester; Foam 1: 100% Ethylene Vinyl Acetate; Foam 2: 100% Polyethylene; Pockets: 88% Polyamide, 12% Elastane;<br />
      - Back Length: 41 Cm;<br />
      - Dimensions: 42 X 23 X 3 L X W X D In Cm;<br />
      - Volume: 6 Liters;<br />
      - Weight: 310 G;<br />
      - Back Body: 100% Polyester;<br />
      - Body: 100% Polyamide;<br />
      - Lining: 100% Polyester;<br />
      - Foam 1: 100% Ethylene Vinyl Acetate;<br />
      - Foam 2: 100% Polyethylene;<br />
      - Pockets: 88% Polyamide, 12% Elastane.
    </span>,
    price: 346.00,
    gender: 'Unisex',
    color: 'White',
    weight: 'max 0~10L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '110',
    name: 'Salomon Trail Running Low',
    type: 'Accessories',
    brand: 'Salomon',
    images: [
      images.trailLowFirst,
      images.trailLowSecond,
      images.trailLowThird,
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Gravelly, snowy, thorny, grassy, whatever the loose, aggravating terrain you decide to forge, TRAIL GAITERS LOW will prevent it from reaching your feet. It connects easily to your shoes, and even helps protect your ankles.</span>,
    description: <span>
      Ease of use:<br />
      - When the trail becomes more of a rubble pile, simply slide these gaiters over your shoes and Velcro® them closed.<br /><br />
      Durability:<br />
      - A bomb-proof strap under the foot, durable mesh around the ankle, and lightweight padding on the ankle bone mean more adventures.<br /><br />
      Protection:<br />
      - Scree fields can cause debris in the shoe:these low gaiters act as a barrier between the rough stuff and your feet.
    </span>,
    price: 149.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    id: '111',
    name: 'Sea To Summit Nylon Hiking Tarp',
    type: 'Accessories',
    brand: 'Sea To Summit',
    images: [
      images.nylonTarpFirst,
      images.nylonTarpSecond,
      images.nylonTarpThird,
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Our Nylon Tarp-Poncho features a seam taped hood with 3-panel hood construction and a wide brim. Made of lightweight but durable 70 denier nylon with fully taped seams. Designed to fully cover you and your pack in a downpour. Its also ideal for temperate climates when a waterproof jacket would be too sweaty. It comes packaged with an oval shaped stuff sack for best fit in a pack.</span>,
    description: <span>
      Features:<br />
      - Lightweight waterproof fabric;<br />
      - Accommodates a large backpack;<br />
      - Easily converts from rainwear to a 2-person shelter;<br />
      - Double stitched, tape sealed, 3-panel hood construction;<br />
      - Comes in Royal Blue and Forest Green;<br />
      - Can be used with our bug tents to create an ultralight shelter.<br /><br />
      Specifications:<br />
      - Length: 57 in (6.5 in packed)/140cm;<br />
      - Width: 104 in (3.75 in packed)/260cm;<br />
      - Height/Depth: (4.5 in packed)/;<br />
      - Weight: 13 oz /370g.
    </span>,
    price: 202.00,
    gender: 'Unisex',
    color: 'Green',
    weight: '370 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '112',
    name: 'Sea To Summit Ultra Hiking Sil Nano',
    type: 'Accessories',
    brand: 'Sea To Summit',
    images: [
      images.ultraSilFirst,
      images.ultraSilSecond,
      images.ultraSilThird,
    ],
    size: [
      'S',
      'M',
      'L'
    ],
    shortDescription: <span>Our 15D Poncho offers an even smaller packed size and weight for situations when you don’t need the versatility of our tarp poncho. Made from our tape seamed 15D Nano Ultra-Sil®, the 15D Poncho is ideal for use in hot climates where a regular raincoat just won’t offer enough ventilation. Also works brilliantly as an emergency rain cover at the football!</span>,
    description: <span>
      Features:<br />
      - Made from 15D Ultra-Sil® Nano Fabric;<br />
      - Waterproof seams – double stitched and tape seamed;<br />
      - Press studs offer the alternative of closing sides when in use.<br /><br />
      Specifications:<br />
      - Dimensions Weight;<br />
      - 140 x 118cm 145g.
    </span>,
    price: 316.00,
    gender: 'Unisex',
    color: 'Yellow',
    weight: '145 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '113',
    name: 'Sea To Summit Hiking Grasshopper',
    type: 'Accessories',
    brand: 'Sea To Summit',
    images: [
      images.grasshopperFirst,
      images.grasshopperSecond,
      images.grasshopperThird,
    ],
    size: [
      'S-M',
      'M-L',
    ],
    shortDescription: <span>A budget priced gaiter without losing attention to detail. Made from hard-wearing 600D ripstop Polyester, they are secure with easy access via front opening. The Grasshopper Gaiters are incredible value as they are very robust, easy to put on and easily adjusted.</span>,
    description: <span>
      Features:<br />
      - Awesome value budget gaiter;<br />
      - Secure, easy access front Velcro® opening;<br />
      - 600D ripstop Polyester;<br />
      - 316 stainless steel lace hook.
    </span>,
    price: 134.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '145 g',
    features: [
      '-'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    id: '114',
    name: 'Sea To Summit Spark SPIV Sleeping Camping Bag',
    type: 'Accessories',
    brand: 'Sea To Summit',
    images: [
      images.sparkSpivFirst,
      images.sparkSpivSecond,
      images.sparkSpivThird,
    ],
    size: [
      'S-M',
      'M-L',
    ],
    shortDescription: <span>Ultra-light and technical, our Spark™ Series bags are designed to keep you as warm as possible while minimising packed weight and size.</span>,
    description: <span>
      - The Spark™ Series spans everything from an ultralight liner to an expedition weight mid-winter bag. While the end usage is very different, they reflect a design ethos of matching weather conditions to the lightest bag possible.<br /><br />
      - The secret to the impressive performance is a combination of premium materials and careful design. The RDS 850+ Loft premium goose down, light-gauge #3 YKK zip and high performance 10D Nylon shell and 7D lining fabrics, set the stage for superior performance. These materials are combined with a contoured mummy design for efficient insulation, and that mummy design is then tweaked for each model to best fit the use scenario.<br /><br />
      - Our ULTRA-DRY Down™ water-repellent treatment protects the down from external moisture and condensation from the inside of the bag, virtually eliminating the negative effects moisture has on down. All Sea to Summit Down Sleeping Bags use Responsible Down Standard (RDS) certified down. The ULTRADRY Down™ protection also makes the Spark™ an impressive hard-alpine or adventure racing bag, where every gram is counted and down has never been a viable option.<br /><br />
      Features:<br />
      - Vertical box baffles in the torso area accommodates extra down and boosts warmth around the core, vertical baffles on chest optimises positions -of down to prevent it moving during use;<br />
      - Lower part of the bag uses a sewn through horizontal baffle construction to minimise weight;<br />
      - ½ zip with two sliders aids access and allows ventilation from mid-section of bag;<br />
      - Updated sizing provides extra room for both shoulders and hips while still maintaining insulation efficiency;<br />
      - Draft tube prevents heat loss through the zipper;<br />
      - Includes hood draft collar.<br /><br />
      Specifications:<br />
      - Insulation Type: Down;<br />
      - Down: RDS 90/10 Premium Goose Down;<br />
      - Fabric: 10D Nylon Shell;<br />
      - Fill Power: ULTRA-DRY Down® 850+ Loft;<br />
      - Fill Weight: Regular: 300g, Long: 345g;<br />
      - Shape: Contoured Mummy;<br />
      - Temp Rating: EN 4°c Comfort to -2°c Lower;<br />
      - Weight: Regular: 490g, Long: 560g.
    </span>,
    price: 2244.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: true,
  },
  {
    id: '115',
    name: 'Sea To Summit Ether Light Women Camping Mat',
    type: 'Accessories',
    brand: 'Sea To Summit',
    images: [
      images.etherLightFirst,
      images.etherLightSecond,
      images.etherLightThird,
    ],
    size: [
      168 + 'x' + 55 + 'cm'
    ],
    shortDescription: <span>With an R-value over 6, the 10cm thick EtherLightXT Extreme air mat redefines lightweight sleeping comfort for winter adventures around the globe.</span>,
    description: <span>
      Sea to Summit’s Air Sprung Cells are the reason you will sleep better on this air mat. Each Air Sprung Cell deforms independently and allows the mat to conform to your body shape. This provides support and comfort by more evenly dispersing pressure across the mat’s surface.<br /><br /> For the extra thick (XT) EtherLight design, many TPU loops are used to connect the top and bottom fabric layers to the Air Sprung Cell dot weld pattern. These loops allow the top and bottom layers to be positioned further apart which creates larger pockets of air when inflated—perfect for side sleepers. This design also requires less fabric overall which means great stability and comfort for less weight.<br /><br /> Dual-density layers of THERMOLITE insulation fill the Air Sprung Cells and work together to prevent convective heat transfer and boost warmth while remaining lightweight and packable. When the mercury drops, the EtherLightXT Extreme’s 6.2 (women’s 6.3) ASTM R-value will keep you cushioned and insulated from the cold hard lumps and bumps beneath. Extra thick and exceptionally warm—10cm of backpacking sleeping comfort for extreme conditions.<br /><br />
      Features:<br />
      - ASTM R-value 6.2 is designed for cold-weather use;<br />
      - Dual-density layers of THERMOLITE insulation;<br />
      - Extra thick (XT) Air Sprung Cell construction for 10cm stable comfort;<br />
      - Lightweight, quiet and grippy 30/40D Nylon face fabric;<br />
      - Field repairable with included self-adhesive patches;<br />
      - Ultra-Fresh anti-microbial treatment added to the TPU formula prevents internal mould growth;<br />
      - Pillow Lock attaches an Aeros pillow to mat;<br />
      - Quick and easy inflation, deflation and adjustment with the multi-function, high flow-rate valve and supplied Airstream Pump Sack.
    </span>,
    price: 822.00,
    gender: 'Women',
    color: 'Black',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '116',
    name: 'Sea To Summit Aeros Down Deluxe Camping Pillow',
    type: 'Accessories',
    brand: 'Sea To Summit',
    images: [
      images.aerosDownFirst,
      images.aerosDownSecond,
      images.aerosDownThird,
    ],
    size: [
      42 + 'x' + 28 + 'x' + 12 + 'cm'
    ],
    shortDescription: <span>By using ultralight materials to construct a down cushion-top over a TPU air bladder, our Aeros™ Down Pillow is the lightest fully-featured down pillow on the market.</span>,
    description: <span>
      - Light, warm and comfortable, the premium down cushion-top is made from the same exceptionally light and transparent 10D fabric used in our Spark™ sleeping bags.<br /><br />
      - Differentially cut horizontal baffles reduce down migration and prevent the down compressing, even when the air bladder is fully inflated. The cushion-top wraps over the front of the pillow for neck comfort. The rest of the pillow case is made from lightweight 20D fabric.<br /><br />
      - Our Aeros™ bladders use a unique long-lasting anti-hydrolysis TPU film which prevents material breakdown from moisture exposure. Extremely light, the bladder’s horizontal baffles create a 3D surface that cradles the head for additional support. The multi-function mini-valve provides easy inflation, deflation and fine tuning.<br /><br />
      Features:<br />
      - Premium down cushion-top for comfort and warmth;<br />
      - Ultralight and high-strength TPU bladder;<br />
      - Differentially cut baffles allow maximum down loft;<br />
      - Technical fabrics for lightweight performance;<br />
      - Multi-function mini-valve for easy inflate, deflate and fine tuning;<br />
      - Store and transport in compact 20D stuff sack.
    </span>,
    price: 258.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '117',
    name: 'Sea To Summit DeltaLight Camping 2.2 Set',
    type: 'Accessories',
    brand: 'Sea To Summit',
    images: [
      images.deltalightFirst,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>A lightweight and compact dinnerware set for two that nests inside our Alpha™ and Sigma™ 2.7L pots. The entire set nests and stows inside a lightweight storage pouch. The Camp Set 2.2 includes one of each color of the DeltaLight™ Bowls, Insul Mugs and Delta Cutlery Sets.</span>,
    description: <span>
      Made with BPA-free, glass reinforced polypropylene, our DeltaLight™ bowls, Insul Mugs and Cutlery Sets are durable, lightweight, easy-care and microwave and dishwasher safe.<br /><br />
      Features:<br />
      - Nests inside Alpha and Sigma Pots 2.7L for compact packability;<br />
      - Lightweight, durable and easy-care;<br />
      - BPA-free, food grade material;<br />
      - Comes with a lightweight Nylon storage pouch;<br />
      - Two color configuration allows easy set identification;<br />
      - Delta Cutlery Sets stow inside the DeltaLight™ Bowls and the spoon’s curve allows you to scrape the bowl clean;<br />
      - Generous volumes in our DeltaLight™ Insul Mug and Bowls;<br />
      - Graded measuring scale in our DeltaLight™ Insul Mugs.
    </span>,
    price: 129.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: true,
  },
  {
    id: '135',
    name: 'VAUDE M WP Hiking First Aid Kit',
    type: 'Accessories',
    brand: 'Vaude',
    images: [
      images.mwpFirst,
      images.mwpSecond,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Comprehensive first aid kit, small pack size, small pack size, made of waterproof material. The VAUDE First Aid Kit M Waterproof has a compact pack size and is made of robust, completely waterproof fabric. It will keep its contents dry and is very durable. It comes with everything you need for the initial treatment of minor wounds and injuries. </span>,
    description: <span>
      In terms of size and contents, it´s perfect for 1-2 people. For ease of use, it includes an integrated organization bag with easy-to-understand pictograms. The First Aid Kit M also has room for your own medicine and is just the right size to fit comfortably in a corner of your backpack. The VAUDE Green Shape label stands for environmentally-friendly, functional products made from sustainable materials.
    </span>,
    price: 109.00,
    gender: 'Unisex',
    color: 'Yellow',
    weight: '-',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '136',
    name: 'VAUDE Zerum 48L Backpack',
    type: 'Accessories',
    brand: 'Vaude',
    images: [
      images.zerumFirst,
      images.zerumSecond,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Our very light backpack of medium size for trekkings and globetrotters weighs less than 1200 g. The background and sides of this model are in 70D RIP-Stop Silicone and Light and in Robust 200D. The Tergolight porting system, the weight of which has been optimized, can be adjusted individually on the bearer´s back and provides stable and comfort.</span>,
    description: <span>
      The adjustable and completely removable adjustable pocket and completely space for things that must stay at hand. Below is hidden another flap that allows you to compress the main compartment and close it cleanly when you do not use the pocket. The pocket-radius can also be used as a banana bag. The side compression straps as well as the package bag under the flap, easily handy, allow the volume of the main compartment to be adjusted.<br /><br /> The front compartment with airy mesh inserts is perfect for wet items, such as the rain jacket or the double-roof, because it allows humidity to evaporate. Anything that should be easily accessible can be stored in the large side pocket in a net with its closing elastic. The gourd and the hat remain accessible without it being necessary to remove the backpack. A very resistant and multifunction rope serves as a functional bar to attach the sticks and other pieces of equipment.<br /><br />
      Features:<br />
      - slightly rigid back, individually adjustable;<br />
      - light belt with zipped pocket;<br />
      - Pocket in the flap;<br />
      - Adjustable flap height;<br />
      - Rabat can be removed to gain lightness;<br />
      - Removable flap can be used as a banana bag;<br />
      - Hood closure with removable flap;<br />
      - lateral compression belts;<br />
      - 1 side stretch pocket;<br />
      - 1 side stretch pocket for the bottle;<br />
      - Large stretch front pocket;<br />
      - Fixing possibilities for equipment;<br />
      - Fixing for telescopic sticks;<br />
      - Light silicone material;<br />
      - Increased the ground;<br />
      - Extra light curls all over the backpack;<br />
      - output for the hydration system;<br />
      - chest belt with fixing for the outlet of the hydration system.
    </span>,
    price: 720.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: 'max 50L',
    features: [
      '-'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '137',
    name: 'VAUDE Minnie 5L Hiking Backpack',
    type: 'Accessories',
    brand: 'Vaude',
    images: [
      images.minnieFirst,
      images.minnieSecond,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Compact children´s backpack, comfortable fit, reflective elements, environmentally-friendly manufacturing. The Minnie 5 children´s backpack is entering a new season - and once again is setting new standards in terms of design that´s perfect for small children.</span>,
    description: <span>
      This compact, environmentally-friendly backpack has softly padded, anatomic Easy Fit shoulder straps that are carried crossed and fixed with Velcro - perfect for children´s hands! In addition, there´s an outside pocket, reflective print elements and a front zip pocket for their most important essentials.<br /><br /> Its compact size makes the Minnie 5 the ideal companion for very young adventurers - whether they´re on their way to kindergarten or ready to head out on their first mountain tour. This backpack is made of recycled material and is produced with Eco Finish, an environmentally friendly water-repellent material without the use of fluorocarbons (PFC). The VAUDE Green Shape label stands for environmentally-friendly, functional products made from sustainable and bluesign® certified materials.
    </span>,
    price: 103.00,
    gender: 'Kids',
    color: 'Blue',
    weight: 'max 5L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    id: '138',
    name: 'VAUDE Santis 450 Sleeping Camping Bag',
    type: 'Accessories',
    brand: 'Vaude',
    images: [
      images.santisFirst,
      images.santisSecond,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Pleasantly warm synthetic sleeping bag for mountain climbers and trekkers, comfortable stretch zone at the knees, arm openings for cooking, reading and belaying, eco-friendly manufacturing. Warm mummy sleeping bag with synthetic fill for mountaineers and trekkers who prefer backpacking in summer. The high stretch knee section and somewhat wider shoulder section offer full mobility and comfort.</span>,
    description: <span>
      An added benefit for activities such as reading and cooking in cold temperatures is an additional arm opening in the shoulder section (an opening for the other arm is possible through the main zip closure). This opening can also be used for the rope when bivouacking in the wall. The pleasantly warm insulation (450 g) is easy to take care of and quick to dry.<br /><br /> It also effectively retains heat even when damp. Made from very lightweight materials, the bag weighs little and can be packed down small. The VAUDE Green Shape label stands for environmentally friendly, functional products made from sustainable materials.
    </span>,
    price: 824.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '450 g',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: true,
  },
  {
    id: '139',
    name: 'VAUDE Selun 1300 SYN Sleeping Camping Bag',
    type: 'Accessories',
    brand: 'Vaude',
    images: [
      images.selunFirst,
      images.selunSecond,
      images.selunThird,
    ],
    size: [
      'one-size',
    ],
    description: <span>
      Features:<br />
      - Very warm synthetic fill mummy bag for mountain sports and trekking;<br />
      - nearly seam-free for maximum heat retention;<br />
      - with large security pocket in the footbox;<br />
      - made from recycled materials, with Primaloft® insulation;<br />
      - body contoured mummy cut for optimal heat management;<br />
      - Baffle-free -free construction prevents moisture from entering and improves warmth retention;<br />
      - contoured hood;<br />
      - warmth collar;<br />
      - Safety pocket inside the footbox to store your valuables or temperature sensitive electronics securely;<br />
      - footbox;<br />
      - Easy-exit -exit zipper makes it a breeze to open your sleeping bag;<br />
      - long side zip down to the foot section;<br />
      - exceptionally soft and skin;<br />
      - friendly fabric with bluesign® standard;<br />
      - lightweight fabrics with water repellent treatment;<br />
      - Compression stuff sack included.
    </span>,
    price: 966.00,
    gender: 'Unisex',
    color: 'Green',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: true,
  },

  //* ------------------------------------------------------------ EQUIPMENT ----------------------------------------------------- *//

  {
    id: '020',
    name: 'Columbia Ultra 2P Lightweight Camping Tent',
    type: 'Equipment',
    brand: 'Columbia',
    images: [
      images.columbiaUltraFirst,
      images.columbiaUltraSecond,
      images.columbiaUltraThird
    ],
    size: [
      '2P',
    ],
    shortDescription: <span>Lightweight camping tent for backpacking or cyclotourism, easy to pitch up. Ultra lightweight camping tent for 2 persons with rainfly for those who need light and compact tent once packed. Thanks to design this tent is very stable with optimum inner space. Nylon ripstop outer fabric is very resistant to tears, in addition to being extremely light. The water column is 3000 mm for the roof and the floor.</span>,
    description: <span>
       This tent has an easy and quick set up because you only have to assembly one preformed pole with another small one The inner tent can be used as a mosquito net independently. Inside it has pockets to store small belongings. The fastening system of the rainfly to the inner tent is made by Velcro loops,plastic hooks and aluminum buckles, which offers faster assembly and disassembly as well as less weight. For better visibility , zipper pullers are reflective as well as the guy ropes. The tent dimensions are (50+127+50) x225x92 cm and its weight is 1,65 kg. <br /><br />
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
    gender: 'Unisex',
    color: 'Green',
    weight: '1.65 kg',
    features: [
      'Waterproof',
      'Windproof',
      'Thermal'
    ],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '021',
    name: 'Black Diamond Climbing Cliff Cabana Double',
    type: 'Equipment',
    brand: 'Black Diamond',
    images: [
      images.cliffCabanaFirst,
      images.cliffCabanaSecond,
      images.cliffCabanaThird
    ],
    size: [
      213 + 'x' + 130 + 'cm'
    ],
    shortDescription: <span>The worlds strongest, most reliable single-point suspension sleeping system, the two-person Black Diamond Cliff Cabana Double Portaledge makes for easy living when you and your partner way off the deck. Made from strong yet lightweight anodized aluminum and durable 210d nylon double ripstop, the Cliff Cabana is easy to set up and features 4 pull straps and a 6-point buckle system for quick and easy adjustments.</span>,
    description: <span>
      Features: <br />
      - Precise engineering for strength, durability and ease of set-up and adjustment;<br />
      - Frame is built from double-butted 6061 T-6 45 mm machined and anodized aluminum;<br />
      - 4 pull straps tighten the floor;<br />
      - 6-point buckle system for easy leveling;<br />
      - Double ripstop 210d nylon ballistics.<br /><br />
      Specifications:<br />
      - Weight : 9 kg, 19 lb 13 oz;<br />
      - Materials : Double-butted aluminum alloy frame, double ripstop 420d packcloth, Ballistic reinforcements;<br />
      - Dimensions : 213 x 130 cm, 84 x 51 in.
    </span>,
    price: 2481.00,
    gender: 'Men',
    color: 'Black',
    weight: '9 kg',
    features: [
      '-'
    ],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    id: '094',
    name: 'Salewa Litetrek Pro II Camping Tent',
    type: 'Equipment',
    brand: 'Salewa',
    images: [
      images.litetrekFirst,
      images.litetrekSecond,
      images.litetrekThird
    ],
    size: [
      '2P',
    ],
    shortDescription: <span>A robust, spacious, compact, weather protective 2 people tent Salewa Litetrek Pro II is perfect for all your camping sojourns and alpine trekking. This lightweight tent provides technical functionality and comfort during all seasons in the wild expected environment conditions.</span>,
    description: <span>
      Thanks to the robust semi-geodesic construction provides ventilation and stability, the 100% self-supporting construction means that it can be easily set up in any exterior settings. Also, the tear-resistant polyester sheet, PU coated 70 D ripstop nylon floor makes it waterproof and perfect for unpredictable rain showers or varied weather patterns. The rear panels with zippers improve ventilation and reduces humidity inside the tent. Lastly, the large weatherproof vestibules have ample storage capacity for all your gear and cooking spree.<br /><br />
      Features: <br />
      - Area Inner Tent: 2.52 m²;<br />
      - Area Vestibules Front: 0.56 m²;<br />
      - Entrances: 1;<br />
      - Height Inner Tent: 1 m;<br />
      - Packing Size: 40 x 19cm;<br />
      - Persons: 2 Persons;<br />
      - Ventilations: 1;<br />
      - Ventilation type: Ventilation panel with zippers;<br />
      - Vestibule for gear storage and cooking: Yes;<br />
      - Vestibules: 1;<br />
      - Weight Max: 1980 g;<br />
      - Weight Min: 1700 g.
    </span>,
    price: 1976.00,
    gender: 'Unisex',
    color: 'Grey',
    weight: '1700~1980 g',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '095',
    name: 'Salewa Micra II Camping Tent',
    type: 'Equipment',
    brand: 'Salewa',
    images: [
      images.micra2First,
      images.micra2Second,
    ],
    size: [
      '2P',
    ],
    shortDescription: <span>A robust, spacious, compact, weather protective 2 people tent Salewa Micra II Tent is perfect for all your camping sojourns and alpine trekking. This lightweight tent provides technical functionality and comfort during all seasons in the wild expected environment conditions.</span>,
    description: <span>
      Thanks to the robust dome design construction provides ventilation and stability, the 100% self supporting construction means that it can be easily set up in any exterior settings. Also, the tear-resistant polyester sheet, with 4,000mm water column makes it waterproof and perfect for unpredictable rain showers or varied weather patterns. The rear panels with zippers improves ventilation and reduces humidity inside the tent. Lastly, the large weatherproof vestibules have ample storage capacity for all your gear and cooking spree.<br /><br />
      Features: <br />
      - Area Inner Tent: 2.5 m²;<br />
      - Area Vestibules Front: 0.6 m²;<br />
      - Entrances: 1;<br />
      - Height Inner Tent: 0.9 m;<br />
      - Packing Size: 40 x 20 cm;<br />
      - Persons: 2 Persons;<br />
      - Ventilations: 2;<br />
      - Ventilation type: Side ventilation with zippers;<br />
      - Vestibule for gear storage and cooking: Yes;<br />
      - Vestibules: 1;<br />
      - Weight Max: 2.5 kg.
    </span>,
    price: 1023.00,
    gender: 'Unisex',
    color: 'Yellow',
    weight: 'max 2.5 kg',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '118',
    name: 'Sea To Summit Double Camping',
    type: 'Equipment',
    brand: 'Sea To Summit',
    images: [
      images.doubleFirst,
      images.doubleSecond,
    ],
    size: [
      '2P',
    ],
    shortDescription: <span>A unique design, which maximises coverage while minimising weight and packed size.</span>,
    description: <span>
      Features: <br />
      - Helps prevent contraction and spread diseases such as malaria, Japanese encephalitis and dengue fever;<br />
      - Fine woven 80 hole/cm² mesh;<br />
      - High visibility black mesh gives excellent vision through netting;<br />
      - Off-centre hanging point gives practical headroom;<br />
      - Soft multifilament Polyester for lightweight strength and compactness;<br />
      - Also available in untreated mesh.<br /><br />
      Specifications:<br />
      - Mosquito Net Double Standard: 1.7 x 2.4 x 1.3m, 340g.
    </span>,
    price: 129.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '340 g',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '119',
    name: 'Sea To Summit Jungle Hammock Camping Set',
    type: 'Equipment',
    brand: 'Sea To Summit',
    images: [
      images.jungleFirst,
      images.jungleSecond,
      images.jungleThird,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Our easy-to-use Jungle Hammock is constructed using breathable, lightweight 70 denier ripstop Nylon, high-tenacity monofilament netting, Dyneema® webbing and corrosion-resistant anodised 6061 Aluminium buckles. Perfect for humid environments, the Jungle Hammock Set comes with straps and can be used anywhere from the backpacking trail to the wilderness.</span>,
    description: <span>
      Features: <br />
      - Lightweight and easy-to-use quick-connect buckle system;<br />
      - Durable and high-strength monofilament insect netting;<br />
      - Dry and compact storage, in a highly effective compression sack.<br /><br />
      Specifications:<br />
      - Dimension: Lenght 260 cm, Height/Depth 145 cm, Width 145 cm;<br />
      - Weight: 775 g.
    </span>,
    price: 741.00,
    gender: 'Unisex',
    color: 'Green',
    weight: '775 g',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '120',
    name: 'Sea To Summit Hammock Camping Tarp 15D',
    type: 'Equipment',
    brand: 'Sea To Summit',
    images: [
      images.hammockFirst,
      images.hammockSecond,
      images.hammockThird,
    ],
    size: [
      'one-size',
    ],
    shortDescription: <span>Complement your lightweight, compact hammock set-up with a tarp that provides excellent coverage without adding excess weight or bulk.</span>,
    description: <span>
      Features: <br />
      - Using Ultra-Sil® Nano 15D fabric we get a massive 1110´ x 92´ tarp at only 11.6 oz/330g;<br />
      - Our unique 5-point design has a single tie-out point on one side, providing enough room to cook under while sitting in the hammock;<br />
      - Two tie-out points on the opposite side can be pegged close to the ground for protection against prevailing wind and rain.<br /><br />
      Specifications:<br />
      - Length: 11 ft 10 in/3.6 m;<br />
      - Width: 9 ft 2 in/2.8 m;<br />
      - Weight: 11.7 oz/330g.
    </span>,
    price: 527.00,
    gender: 'Unisex',
    color: 'Blue',
    weight: '330 g',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: false,
  },
  {
    id: '140',
    name: 'VAUDE Taurus Camping Tent',
    type: 'Equipment',
    brand: 'Vaude',
    images: [
      images.taurusFirst,
      images.taurusSecond,
      images.taurusThird,
    ],
    size: [
      '2P',
    ],
    shortDescription: <span>Tripod tent for camping or hiking tours, 3-season (for snow-free months), easy set up, good ventilation. Gets you toured up and ready to go! The perfect 3-season introductory tent to the wonderful world of hiking and camping. Well ventilated and a cinch to pitch.</span>,
    description: <span>
      The durable outer tent is made from weather-proof PU coated polyester that can stand up in a downpour, while keeping you well aired inside with ridge ventilation. The additional pin solution creates more foot room and increases the tent´s wind stability.<br /><br />
    </span>,
    price: 955.00,
    gender: 'Unisex',
    color: 'Red',
    weight: '-',
    features: [
      '-'
    ],
    activity: 'Camping',
    sustainable: true,
  },
]




const brands = {
  Adidas: {
    name: 'Adidas',
    logo: images.adidasLogo,
    logoSize: 40
  },
  Columbia: {
    name: 'Columbia',
    logo: images.columbiaLogo,
    logoSize: 25
  },
  'Black Diamond': {
    name: 'Black Diamond',
    logo: images.diamondLogo,
    logoSize: 15
  },
  Haglofs: {
    name: 'Haglofs',
    logo: images.haglofsLogo,
    logoSize: 25
  },
  Mammut: {
    name: 'Mammut',
    logo: images.mammutLogo,
    logoSize: 22
  },
  Merrell: {
    name: 'Merrell',
    logo: images.merrellLogo,
    logoSize: 42
  },
  'The North Face': {
    name: 'The North Face',
    logo: images.northLogo,
    logoSize: 15
  },
  Osprey: {
    name: 'Osprey',
    logo: images.ospreyLogo,
    logoSize: 13
  },
  Petzl: {
    name: 'Petzl',
    logo: images.petzlLogo,
    logoSize: 13
  },
  Salewa: {
    name: 'Salewa',
    logo: images.salewaLogo,
    logoSize: 17
  },
  Salomon: {
    name: 'Salomon',
    logo: images.salomonLogo,
    logoSize: 27
  },
  'La Sportiva': {
    name: 'La Sportiva',
    logo: images.sportivaLogo,
    logoSize: 15
  },
  'Sea To Summit': {
    name: 'Sea To Summit',
    logo: images.summitLogo,
    logoSize: 38
  },
  Vaude: {
    name: 'Vaude',
    logo: images.vaudeLogo,
    logoSize: 35
  },
};


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
  'Red',
  'Purple',
  'Orange'
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
  'Petzl',
  'Salewa',
  'Salomon',
  'Sea To Summit',
  'The North Face',
  'Vaude',
]


const contactDetails = [
  {
    type: 'text',
    placeholder: 'First Name:'
  },
  {
    type: 'text',
    placeholder: 'Last Name:'
  },
  {
    type: 'text',
    placeholder: 'E-Mail:'
  },
  {
    type: 'number',
    placeholder: 'Phone Number:'
  },
  {
    type: 'text',
    placeholder: 'Address:'
  },
  {
    type: 'text',
    placeholder: 'Post code:'
  },
  {
    type: 'text',
    placeholder: 'City:'
  },
  {
    type: 'text',
    placeholder: 'Country:'
  }
]


const shippingDetails = [
  {
    value: 200,
    label: 'International Delivery: ',
    price: '200.00 RON'
  },
  {
    value: 50,
    label: 'Express Delivery: ',
    price: '50.00 RON'
  },
  {
    value: 25,
    label: 'Local Delivery: ',
    price: '25.00 RON'
  },
  {
    value: 0,
    label: 'Free Delivery: ',
    price: '0.00 RON'
  },
  {
    value: 0,
    label: 'Local Pickup: ',
    price: 'Free'
  }
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
  brandsCategory,
  contactDetails,
  shippingDetails
};
