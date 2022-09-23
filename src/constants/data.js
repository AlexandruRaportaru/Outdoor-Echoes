import images from './images';
import { IoIosMan, IoIosWoman } from 'react-icons/io';
import { ImManWoman, ImHome3 } from 'react-icons/im';
import { BsSunglasses, BsTools } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

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
    title: 'Products',
    path: '/products',
    icon: <GrProjects style={{margin: '0 15px 4px 0'}}/>,
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
    icon: <BsSunglasses style={{margin: '0 15px 4px 0'}}/>,
    className: 'menu-category'
  },
  {
    title: 'Equipment',
    path: '/products/type_Equipment',
    icon: <BsTools style={{margin: '0 15px 4px 0'}}/>,
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
    slideBrand: images.patagoniaBanner,
    slideName: 'patagonia-banner',
    slideLogo: images.patagoniaLogo,
    logoSize: 15,
    slideTitle: 'QUALITY GUARANTEE',
    path: 'Patagonia',
    slideParagraph: <span>Because we know prioritizing durability results <br/> in consuming less energy, wasting less <br/> water and creating less trash.</span>
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
      45 + 'EU',
      46 + 'EU',
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
    features: [],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Columbia Firecamp Fleece III Hiking Shoes',
    type: 'Footwear',
    brand: 'Columbia',
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
    features: [
      'Thermal'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Mission XP Leather Hiking Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
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
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Shadow LV Climbing Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
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
      - Velcro strap for fit adjustability.
    </span>,
    price: 578.00,
    gender: 'Men',
    color: 'Black',
    weight: '',
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'Haglöfs Duality AT1 Goretex Hiking Boots',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.dualityat1First,
      images.dualityat1Second,
      images.dualityat1Third
    ],
    size: [
      '41',
      '43',
      '46',
    ],
    description: <span>
      These are the new boots for climbing and mountaineering DUALITY AT1 GORETEX, its innovative and resistant design guarantees you a comfortable and pleasant day, thanks to the incorporation of GORETEX technology it gives you great elasticity and coupling to your foot. They are made with recycled and water repellent fabrics to keep you cool at all times. <br /><br />
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
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Haglöfs Skuta Mid Proof Eco Hiking Boots',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.skutaecoFirst,
      images.skutaecoSecond,
      images.skutaecoThird
    ],
    size: [
      '42',
      '44',
      '45',
    ],
    description: <span>
      The Skuta Mid Proof hiking boots with waterproof fabric and PROOF ECO membrane without fluorocarbon will become your ideal choice for mountain adventure. These boots are built with a rear cushioning of the highest quality GEL foot. They offer excellent shock absorption for the ideal step. <br /><br /> The molded EVA midsole provides good cushioning and comfort. In addition, these mountaineering boots are made of high quality organic leather from a tannery audited by Leather Working Group. Welcome to modern hiking. This is a supportive and tough trekking shoe with a wide forefoot fit for extra comfort. Upper protection and AHAR+ rubber on outsole adds to the durability. It´s completely fluorocarbon free, down to the waterproof the PROOF™ ECO. A mid-cut silhouette adds stability and protection. <br /><br /> Waterproof with fluorocarbon free PROOF™ ECO membrane. GEL™ rearfoot cushioning offers excellent shock absorption for the ideal stride. Moulded EVA midsole gives good cushioning and comfort. Premium eco-friendly leather from a tannery audited by the Leather Working Group. Fluorocarbon free DWR-treated surfaces help repel water & dirt. Engineered patterned outsole provides high traction and stability. <br /><br /> AHAR™ Plus (ASICS® High Abrasion Resistance Rubber) on the outsole heel adds durability. Suede reinforced toe and heel give increased protection and durability. Tongue gusset prevents water and sand from entering the shoe. Fabrics: Upper: Fluorocarbon free water repellent 1.4 -1.6 mm suede from LWG audited tannery (Gold/Silver rated) with lower environmental footprint. Lining: PROOF™ ECO, fluorocarbon free and bluesign® approved membrane, with recycled lining. Midsole: Moulded EVA + Gel. Footbed: Moulded EVA. Outsole: AHAR™ Plus.
    </span>,
    price: 515.00,
    gender: 'Men',
    color: 'Brown',
    weight: '400 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Haglöfs L.I.M FH Goretex Low Hiking Boots',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.limfhFirst,
      images.limfhSecond,
      images.limfhThird
    ],
    size: [
      '41',
      '42',
      '45',
    ],
    description: <span>
      Haglöfs L.I.M FH Goretex Low Hiking Boots present us with a low-cut model of this durable, waterproof, breathable design with maximum grip on any terrain, so you can enjoy hiking with all protection against unexpectable weather changes. <br /><br /> These trekking boots are made with a resistant outsole that provides excellent traction in various types of surfaces and a FlyteFoam midsole that gives superior cushioning. Besides, they include a supported heel and ankle strap with padded Cordura fabric that offers greater softness in each step. <br /><br />
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
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'La Sportiva Blizzard Goretex Trail Running Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.blizzardFirst,
      images.blizzardSecond,
      images.blizzardThird
    ],
    size: [
      '42',
      '45',
      '46',
    ],
    description: <span>
      When winter running sessions are long and difficult La Sportiva Blizzard Gore-tex is an ideal running shoe for all round mountaineering activities. This versatile shoe offers technical functionality and comfort in the unpredictable mountain environment. <br /><br /> The sure-grip Frixion AT 2.0 outsole which enables the boots to penetrate into the ground and creates a good traction against the wet rocks while you are trail running. The Gore-tex Extended Comfort lining provides optimized breathability and waterproofing even in wet and slippery surfaces. It works exceptionally well in all sorts of trails. Thanks to the integrated 4-way stretch gaiter keep out trail debris, such as grit and leaves. <br /><br /> It is an ultimate mountaineering shoes designed especially for all adventure-sport junkies. La Sportiva Blizzard Gore-tex is the answer if you are looking for perfect trail running shoe that provides protection, traction and comfort. Winter Running Shoe with Gore-Tex® membrane and waterproofable leg-repellent leggings It includes nails integrated in the sole for a maximum grip. <br /><br /> Designed for extreme uses in frozen and sliding terrain.
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
    name: 'La Sportiva Mythos Climbing Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.mythosFirst,
      images.mythosSecond,
      images.mythosThird
    ],
    size: [
      '41',
      '43',
      '46',
    ],
    description: <span>
      A climber’s best friend La Sportiva Mythos is typically a slipper with a twist that is lightweight and comfortable to wear. This versatile shoe is constructed to offer technical functionality and durability in the unpredictable mountain environment as well as in your gym. <br /><br /> Features: <br /> 
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
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'La Sportiva Nepal Cube Goretex Hiking Boots',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.nepalcubeFirst,
      images.nepalcubeSecond,
      images.nepalcubeThird
    ],
    size: [
      '41',
      '42',
      '45',
      '46',
    ],
    description: <span>
      The ultralight Gore-tex boots in the market La Sportiva Nepal Cube Gore-tex is ideal for high intensity via ferrata or mountain hiking. This versatile boot always offers technical functionality and comfort in the wild mountain environment. <br /><br /> Thanks to the innovative carbon tech honeycomb that is lightweight and stiff offers maximum comfort and support in the wild rugged terrains. Also, the insulated Comfort Gore-tex membrane provides waterproof breathability with insulation. The addition of 3D flex system to the ankle provides support and control on the rugged terrains. Also, the removable and adjustable tongue liner offers a secure and precise fit to your fit that makes it ideal for mixed climbing, winter mountaineering and other mountain activities. <br /><br /> Without a doubt, it is an ultimate mountaineering boots designed especially for all adventure-sport junkies. La Sportiva Nepal CubeGore-tex is the answer if you are looking for perfect boots that provides protection, traction and comfort. Nepal Cube, as the name suggests, is a new starting point for defining technical mountaineering boots thanks to the exceptional lightweight and thermal properties (a mere 825g per half pair). <br /><br /> Features: <br /> 
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
    name: 'Mammut Nordwand 6000 Hiking Boots',
    type: 'Footwear',
    brand: 'Mammut',
    images: [
      images.nordwandFirst,
      images.nordwandSecond,
      images.nordwandThird
    ],
    size: [
      '42',
      '44',
      '46',
    ],
    description: <span>
      A Gaiter Boot With Removable Liner For Demanding High-Altitude Mountaineering, Ice And Mixed Climbing. The Rigid Vibram Litebase Sole Scores With Low Weight And Excellent Cushioning. Thanks To The Boa® Fit System, Fast And Precise Adjustment Is Possible, Even With Gloves. This High Alpine Boot Is Made With Abrasion-Proof Materials, Aluminia Insulation And Has A Double-Insulated Midsole For Extreme Durability And Insulation. On Your Next Adventure, The Nordwand 6000 Will Redefine The True Meaning Of Stability And Lightness. <br /><br /> Features: <br />
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
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    name: 'Mammut Mercury IV Low Goretex Hiking Shoes',
    type: 'Footwear',
    brand: 'Mammut',
    images: [
      images.mercuryFirst,
      images.mercurySecond,
      images.mercuryThird
    ],
    size: [
      '41',
      '45',
      '46',
    ],
    description: <span>
      The new and improved version of our bestseller combines all the features hikers are looking for on their tours. The Mercury IV Low GTX has a flexible and grippy Vibram sole for optimum sure-footedness on day hikes. Damping 3D Memo Foam in the lining and insole as well as a breathable, waterproof GORE-TEX membrane ensure superlative comfort. High-quality terracare® nubuck leather gives the shoe stability and durability. The terracare® leather, sustainably produced in Germany, and GORE-TEX footwear 3L are bluesign®-certified to protect our environment. <br /><br /> Features: <br />
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
    name: 'Merrell Moab Flight Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.moabflightFirst,
      images.moabflightSecond,
      images.moabflightThird
    ],
    size: [
      '41',
      '42',
      '46',
    ],
    description: <span>
      MOAB FLIGHT TRAIL RUNNING are the new MERRELL running shoes, featuring an upper made of fully breathable recycled mesh. It has a very practical and comfortable braided fastening system with a padded tongue. It has a midsole made with Float Pro Foam technology that provides a light footprint and optimal cushioning. <br /><br /> Features: <br />
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
    name: 'Merrell Nova II Mid Goretex Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.nova2midFirst,
      images.nova2midSecond,
      images.nova2midThird
    ],
    size: [
      '42',
      '44',
      '46',
    ],
    description: <span>
      Merrell Nova II Mid Goretex Trail Running Shoes are the perfect companion to explore the most complex terrains of the mountains since they offer maximum grip, stability, cushioning, breathability, and waterproof protection so you can be prepared in the event of rain or to cross puddles. <br /><br /> Features: <br />
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
    name: 'Merrell Intercept Hiking Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.interceptFirst,
      images.interceptSecond,
      images.interceptThird
    ],
    size: [
      '41',
      '43',
      '45',
    ],
    description: <span>
      Merrell Intercept Hiking Shoes are all-terrain footwear that provides excellent protection, maximum grip, cushioning, stability, breathability, and comfort during your outdoor activities, such as hiking, with a robust design that speaks for itself. <br /><br /> Features: <br />
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
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },

  //* ----------------------------------------------------------- FOOTWEAR WOMEN --------------------------------------------------------- *//
  {
    name: 'Adidas Terrex Free Hiker Hiking Shoes',
    type: 'Footwear',
    brand: 'Adidas',
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
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Columbia 60 Low Outdry™ Hiking Shoes',
    type: 'Footwear',
    brand: 'Columbia',
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
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Mission Leather Mid WP Hiking Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
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
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Method Climbing Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
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
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'Haglöfs Kummel Proof ECO Hiking Boots',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.kummelecoFirst,
      images.kummelecoSecond,
      images.kummelecoThird
    ],
    size: [
      '36',
      '37',
      '38',
    ],
    description: <span>
      The Krummel Low Proof hiking boots with waterproof fabric and PROOF ECO membrane without fluorocarbon will become your ideal choice for mountain adventure. These boots are built with a rear cushioning of the highest quality GEL foot. They offer excellent shock absorption for the ideal step. <br /><br />
      Features: <br />
      - Waterproof with fluorocarbon free PROOF™ ECO membrane GEL™ rearfoot cushioning offers excellent shock absorption for the ideal stride SpevaFoam™ midsole improves cushioning and a comfortable bounce-back feeling Premium eco-friendly leather from a tannery audited by the Leather Working Group Fluorocarbon free DWR-treated surfaces help repel water & dirt Engineered patterned outsole provides high traction and stability AHAR™ Plus (ASICS® High Abrasion Resistance Rubber) on the outsole heel adds durability Tongue gusset prevents water and sand from entering the shoe; <br />
      - Waterproof flex test: 100 000 steps.
    </span>,
    price: 518.00,
    gender: 'Women',
    color: 'Brown',
    weight: '420 g',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Haglöfs LIM Low Hiking Shoes',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.limlowFirst,
      images.limlowSecond,
      images.limlowThird
    ],
    size: [
      '38',
      '39',
      '40',
    ],
    description: <span>
      This is the first shoe we´ve made with a monosock construction, giving it a foot-hugging fit that makes it an extra-light choice for great performance on shorter hikes. As a result, it´s right at home in our L.I.M range - where every extra ounce is discarded, but all of the functionality and durability remains. <br /><br />
      Features: <br />
      - It´s built from tough, breathable mesh, making it a good choice on the trail; <br />
      - Reinforcements are provided by a tough rubber counter and synthetic leather to stabilize.
    </span>,
    price: 416.00,
    gender: 'Women',
    color: 'Blue',
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Haglöfs Ridge Mid GT Hiking Boots',
    type: 'Footwear',
    brand: 'Haglofs',
    images: [
      images.ridgemidFirst,
      images.ridgemidSecond,
      images.ridgemidThird
    ],
    size: [
      '36',
      '38',
      '40',
    ],
    description: <span>
      The Rigged GT shoes is another great company boot for longer trips, and one that uses the excellent Asics FluidRide technology for a natural and balanced movement. GEL technology provides cushioning. Waterproofed with GORE TEX. <br /><br />
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
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'La Sportiva Ultra Raptor II Trail Running Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.ultraraptorFirst,
      images.ultraraptorSecond,
      images.ultraraptorThird
    ],
    size: [
      '37',
      '38',
      '39',
    ],
    description: <span>
      The Ultra Raptor Ii Women´s Is An All-Terrain Mountain Running® Shoe Perfect For Long Distance Runs And Ventures Off The Beaten Path. A Full-Length Rock Guard And An Ultra Sticky Rubber Outsole Offers Maximum Protection And Stability, While The Wicking Airmesh Mesh Upper Keeps You Cool, Dry, And Comfortable So You Can Continue To Focus On The Trail Ahead Of You. <br /><br />
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
    name: 'La Sportiva Katana Laces Climbing Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.katanaFirst,
      images.katanaSecond,
      images.katanaThird
    ],
    size: [
      '36',
      '37',
      '39',
    ],
    description: <span>
      The Katana Lace, Despite Its Downturned Shape, Is A Comfortable All-Day Climbing Workhorse That Performs Well On Slabs And Can Easily Twist Into Thin Cracks But Excels Outside On Steep Single Or Multi-Pitch Routes. The Slightly Downturned Toe And Subtle Asymmetry Ensures You Can Hook Into Pockets Or Exploit The Tiniest Edges While Providing Unrivaled Comfort For The Level That It Performs At. The Katana Lace Is A Veritable Edging Machine Now Available In Men’S And Women’S Styles. <br /><br />
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
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'La Sportiva Trango Ice Cube Goretex Hiking Boots',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.trangoicecubeFirst,
      images.trangoicecubeSecond,
      images.trangoicecubeThird
    ],
    size: [
      '36',
      '37',
      '39',
      '40'
    ],
    description: <span>
      A shoe with an integrated gaiter, the ideal choice for technical use in the mountains, on ice climbs and mixed terrain. Extremely lightweight and comfortable thanks to the seamless construction methods of the uppers made using the Thermo Tech Injection™ technology. The protective, integrated snow gaiter with the water repellent zip makes the product even more waterproof while maintaining unaltered the breathability properties thanks to the use of the Gore-Tex Performance Comfort lining. <br /><br /> The HoneyComb Tech carbon footbed guarantees a firm grip and contained weigh. The all-around PU TechLite™ rand contributes to keeping volumes compact without compromising protection. Trango Ice Cube is fully crampon compatible and resolable: ideal for more technical mountaineering and both summer and winter climbs. Similar to other products in the Trango range the 3D Flex System helps to increase ankle movement thereby enhancing control and precision even on steep terrain. <br /><br />
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
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    name: 'Mammut Nordwand High Goretex Hiking Boots',
    type: 'Footwear',
    brand: 'Mammut',
    images: [
      images.nordwandhighFirst,
      images.nordwandhighSecond,
      images.nordwandhighThird
    ],
    size: [
      '36',
      '39',
      '40'
    ],
    description: <span>
      The Nordwand Knit High GTX takes all kinds of alpine terrain in its stride. This first fully crampon-compatible shoe with a knitted shaft is the result of three years of development work, expressed in material, performance and technology. The Nordwand Knit High GTX conquers demanding technical terrain thanks to an elasticated 3D knitted upper with a seamless design that avoids pressure points. <br /><br /> Its benefits also include a lighter weight. Contact Control ensures an optimum sure-footed step and makes the Nordwand Knit High GTX a companion that is ready for any challenge in the mountains.
    </span>,
    price: 2355.00,
    gender: 'Women',
    color: 'Black',
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Expeditions',
    sustainable: false,
  },
  {
    name: 'Mammut Sapuen High Goretex Hiking Boots',
    type: 'Footwear',
    brand: 'Mammut',
    images: [
      images.sapuenFirst,
      images.sapuenSecond,
      images.sapuenThird
    ],
    size: [
      '37',
      '38',
      '40'
    ],
    description: <span>
      The SAPUEN HIGH GORE-TEX® is the correct choice on all types of land. Mammut® Flextron Technology ™ supports natural foot movement and, therefore, a more efficient use of energy in hiking and mountaineering, while Mammut Georganic 3D Technology technology guarantees maximum comfort. <br /><br /> All components in contact with the foot have a high precision anatomical form, while the classic construction of the tongue offers an easy entrance. Optimized for hiking: A vibram® rubber mix for a secure grip on outer surfaces and a sole design that allows self-cleaning. Gore-Tex® waterproof membrane guarantees a dry foot.
    </span>,
    price: 845.00,
    gender: 'Women',
    color: 'Brown',
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Merrell Bravada WP Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.bravadaFirst,
      images.bravadaSecond,
      images.bravadaThird
    ],
    size: [
      '36',
      '39',
      '40'
    ],
    description: <span>
      This female-focused hiker features the fit and feel of a sneaker with the traction and performance of a hiker. And with a comfort achilles collar, it reduces common hot spot zones. <br /><br /> Features: <br />
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
    name: 'Merrell Rubato Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.rubatoFirst,
      images.rubatoSecond,
      images.rubatoThird
    ],
    size: [
      '37',
      '38',
      '39'
    ],
    description: <span>
      Merrell Rubato Trail Running Shoes have been designed for hiking, running or trail running thanks to its resistant, light, and comfortable materials that will make you fly through the road or the mountains. These running shoes are made with a Vibram Megagrip outsole that offers excellent traction in wet or dry terrains. The FloatPro midsole is light and durable, while the FlexConnect slots improve the sensation of the ground. <br /><br /> Features: <br />
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
    name: 'Merrell Siren Traveller Hiking Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.sirentravellerFirst,
      images.sirentravellerSecond,
      images.sirentravellerThird
    ],
    size: [
      '37',
      '38',
      '39',
      '40'
    ],
    description: <span>
      This waterproof leather trail shoe is designed around the unique shape of a woman´s foot and features an extremely sticky Vibram® sole for traction even when it´s wet. <br /><br /> Features: <br />
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
  

  //* ---------------------------------------------------------- FOOTWEAR UNISEX ------------------------------------------------------ *//


  {
    name: 'Adidas Terrex Free Hiker Goretex Trail Running',
    type: 'Footwear',
    brand: 'Adidas',
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
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
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


  //* ---------------------------------------------------------- FOOTWEAR KIDS -------------------------------------------------------- *//
  {
    name: 'Adidas Terrex HyperHiker Hiking Shoes',
    type: 'Footwear',
    brand: 'Adidas',
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
    features: [
      'Reflective accents'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Columbia Redmond Youth Hiking Shoes',
    type: 'Footwear',
    brand: 'Columbia',
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
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Momentum Climbing Shoes',
    type: 'Footwear',
    brand: 'Black Diamond',
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
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'La Sportiva Jynx Hiking Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.jynxFirst,
      images.jynxSecond,
      images.jynxThird
    ],
    size: [
      '32',
      '34',
      '36',
    ],
    description: <span>
      When winter running sessions are long and difficult La Sportiva JYNK is an ideal running shoe for all round mountaineering activities. This versatile shoe offers technical functionality and comfort in the unpredictable mountain environment. <br /><br /> Thanks to the 3-layer construction that adds to the high quality and excellent performance of this running shoe. The seamless construction has a waterproof upper mesh that provides flexibility with utmost comfort. The sure-grip Trail Rocker sole which enables the boots to penetrate into the ground and creates a good traction against the wet rocks while you are trail running. Thanks to the Frixion rubber and Trail Bite that works exceptionally well in all sorts of trails and provides maximum grip on every sort of trail. <br /><br /> It is an ultimate mountaineering shoes designed especially for all adventure-sport junkies. La Sportiva JYNK is the answer if you are looking for a perfect trail running shoe that provides protection, traction and comfort. <br /><br /> Mountain Running® shoe for kids, Jynx is ideal for everyday use and for the first off-road running sessions. Derived from the Akasha, the Jynx takes its cushioning and comfort. The protective abrasion resistant side panels make the product long lasting and secure.
    </span>,
    price: 456.00,
    gender: 'Kids',
    color: 'Blue',
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'La Sportiva Gripit Climbing Shoes',
    type: 'Footwear',
    brand: 'La Sportiva',
    images: [
      images.gripitFirst,
      images.gripitSecond,
      images.gripitThird
    ],
    size: [
      '31',
      '34',
      '35',
    ],
    description: <span>
      Be it high intensity via ferrata or hiking excursions in the wild mountain environment La Sportiva Gripit is a perfect lightweight, comfortable shoe. This versatile climbing shoe offers technical functionality and comfort during all your mountaineering activities. <br /><br /> Features: <br />
      - The Zero-Press Construction last is designed to eliminate pressure points in the growth plate area of the foot: avoiding pressure on the metatarsal, essential for growth; <br />
      - Applied to a kid´s shoe the No-Edge Technology promotes sensory development and proprioceptive thanks to the sensitivity on the support points; <br />
      - The Fast Lacing System allows for customization of the fit: by acting on the closure, the heel narrows or widens depending on the need; <br />
      - Eco leather uppers made produced with metal-free tanning methods.
    </span>,
    price: 338.00,
    gender: 'Kids',
    color: 'Yellow',
    weight: '200 g',
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'Merrell Moab Speed Low WP Hiking Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.moabspeedFirst,
      images.moabspeedSecond,
      images.moabspeedThird
    ],
    size: [
      '32',
      '33',
      '35',
    ],
    description: <span>
      A lightweight textile upper makes this waterproof hybrid sneaker breathable, and a traditional lace closure delivers a secure and comfortable fit. Reinforcement at the toe cap ensures it will stick around for miles to come, and its non-marking rubber outsole provides extra grip when it´s needed most. You and your mini-me will be ready for your next adventure. <br /><br /> Features: <br />
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
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Merrell Glove 5 A/C Trail Running Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.trailgloveFirst,
      images.trailgloveSecond,
      images.trailgloveThird
    ],
    size: [
      '31',
      '32',
      '34',
    ],
    description: <span>
      This mini-me take on an adult trainer follows the natural movement of the foot when it needs it the most. An alternative closure gets it on with ease, and a non-marking outsole with extra grip boosts traction without risking skids. <br /><br /> Features: <br />
      - Synthetic and mesh upper for breathability and a lightweight feel; <br />
      - Alternative closure for easy on/off; <br />
      - Anti-bacterial properties in lining helps prevent bacteria and control odor; <br />
      - Non-marking outsole with extra grip for superior traction.
    </span>,
    price: 217.00,
    gender: 'Kids',
    color: 'Grey',
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Trail running',
    sustainable: false,
  },
  {
    name: 'Merrell Altalight Low A/C Hiking Shoes',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.altalightFirst,
      images.altalightSecond,
      images.altalightThird
    ],
    size: [
      '31',
      '32',
      '33',
      '35'
    ],
    description: <span>
      Trail-approved features and all-day comfort come together in one lightweight waterproof package. Its toggle closure provides an easy but secure fit, and its lightweight upper and waterproof construction make them light on their feet. <br /><br /> Features: <br />
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
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Merrell Oakcreek Mid Lace WP Hiking Boots',
    type: 'Footwear',
    brand: 'Merrell',
    images: [
      images.oakcreekFirst,
      images.oakcreekSecond,
      images.oakcreekThird
    ],
    size: [
      '32',
      '33',
      '34',
      '35'
    ],
    description: <span>
      From the trail to the playground, it is easy to step into this waterproof style. The traditional lace closure ensures a secure, adjustable fit. Its durable upper is built from soft suede and breathable mesh, and a treaded rubber outsole ensures the highest possible level of traction. <br /><br /> Features: <br />
      - Waterproof construction to keep feet dry; <br />
      - Suede and mesh upper for durability; <br />
      - Traditional lace closure for a secure fit; <br />
      - Recycled PET linings; <br />
      - Rubber rugged outsole with lug pattern and extra grip for superior traction.
    </span>,
    price: 197.00,
    gender: 'Kids',
    color: 'Grey',
    weight: '',
    features: [
      'Waterproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },

  //* --------------------------------------------------------- CLOTHING MEN ---------------------------------------------------------- *//
  {
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
    features: [],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Mammut RG Hiking Pants',
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
    description: <span>
      You can look forward to a relaxed hike in the Hiking Pants Men, with their lightweight, stretch material for optimum comfort. The PFC-free DWR treatment on the outer material reliably repels water to protect you from sudden rain showers. The pants also impress with their quick-drying properties - ideal for changeable weather in the mountains. <br /><br /> Features: <br />
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

  //* ------------------------------------------------------------ CLOTHING WOMEN -------------------------------------------------------- *//
  {
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
    features: [
      'Windproof'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
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
    features: [
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
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
      'Waterproof',
      'Windproof',
      'Stretch'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
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
    description: <span>
      Equipped for your next hike: the Hiking Shorts Women are made from a lightweight, stretch material that feels very comfortable to wear. A DWR treatment makes the outer material water-repellent. The shorts’ quick-drying properties make them a practical must-have garment for long hikes. <br /><br />
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

  //* ----------------------------------------------------------- CLOTHING KIDS -------------------------------------------------- *//

  {
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
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: false,
  },
  {
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
    weight: '',
    features: [],
    activity: 'Hiking',
    sustainable: false,
  },
  {
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
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
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
    features: [],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Venom Ice Hiking Axe',
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
    features: [],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Black Diamond Distance FLZ Hiking Poles',
    type: 'Accessories',
    brand: 'Black Diamond',
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
    features: [],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Black Diamond Wiz Hiking Headlight',
    type: 'Accessories',
    brand: 'Black Diamond',
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
    features: [],
    activity: 'Hiking',
    sustainable: true,
  },
  {
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
    description: <span>
      The Haglofs Vina 40L Backpack has been created to be an excellent ally for your mountain equipment for one or two days and you can carry everything you need to spend one night, such as hydration, food, and clothes to protect you against any weather change, so it is prepared and can keep your items dry. <br /><br />
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
    name: 'Haglöfs L.I.M 35L Hiking Backpack',
    type: 'Accessories',
    brand: 'Haglofs',
    images: [
      images.lim35lFirst,
      images.lim35lSecond,
      images.lim35lThird
    ],
    size: [
      'one-size',
    ],
    description: <span>
      The Haglöfs L.I.M 35L Backpack has been designed for mountain excursions for one or two days when you need to carry the essentials, such as hydration, food, and clothes, in an organized, light, and safe way. <br /><br />
      Features: <br />
      - Airback suspension system:provides ventilation and airflow through the back contact zone; <br />
      - Elastic side pockets; <br />
      - Zippered elastic hip belt pockets; <br />
      - Hydration system compatible; <br />
      - Elastic cord for compression and gear attachment; <br />
      - Fixed top lid with pocket; <br />
      - Adjustable sternum strap Padded hip belt; <br />
      - Load lifters; <br />
      - Dimensions (height × depth × width):59x31x25 cm.
    </span>,
    price: 630.00,
    gender: 'Unisex',
    color: 'White',
    weight: 'max 35L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Haglöfs Ängd 60L Hiking Backpack',
    type: 'Accessories',
    brand: 'Haglofs',
    images: [
      images.angd60lFirst,
      images.angd60lSecond,
    ],
    size: [
      'one-size',
    ],
    description: <span>
      Haglofs has developed the trekking backpack ideal for long trips. It offers a large capacity of space, in fact, it is one of the best equipped backpacks from Haglofs, designed especially for women. <br /><br />
      Features: <br />
      - With features galore, and space for everything you need, Ängd W is our best-equipped backpack specifically designed for women; <br />
      - Smart storage and roomy compartments give plenty of room for all your gear, while a large front opening lets you access it with ease; <br />
      - It contains a multitude of pockets to keep your gear organized, it´s loaded with features, and it´s equipped with our updated Instant W+ Adjustable suspension system.
    </span>,
    price: 630.00,
    gender: 'Women',
    color: 'Red',
    weight: 'max 60L',
    features: [],
    activity: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Haglöfs Vide 20L Hiking Backpack',
    type: 'Accessories',
    brand: 'Haglofs',
    images: [
      images.vide20lFirst,
      images.vide20lSecond,
      images.vide20lThird
    ],
    size: [
      'one-size',
    ],
    description: <span>
      VIDE 20L the new backpack for camping and hiking from HAGLOFS , is made of polyamide with Oxford technology providing great resistance and durability, combined with an elegant finish. It has a capacity of approximately 20 liters, perfect for your outdoor activities. <br /><br />
      Features: <br />
      - 100% recycled main fabric, weather-resistant and highly durable; <br />
      - Semi-ventilated back panel; <br />
      - Internal hydration bladder sleeve that doubles as computer sleeve for laptops up to 15´´; <br />
      - Two elastic side pockets for water bottles or extra gear; <br />
      - External cord for ease of access to items such as clothing; <br />
      - Easily-accessible zippered front pocket; <br />
      - One zippered top pocket; <br />
      - Compression side straps to secure internal contents; <br />
      - Adjustable waist belt, removable; <br />
      - Adjustable chest strap for enhanced comfort when walking; <br />
      - Easy-grab top handle; <br />
      - Key holder; <br />
      - Fluorocarbon free DWR-treated surfaces:helps repel water & dirt; <br />
      - Fabrics:100% Recycled Polyamide 200D Rip Stop, bluesign® approved; <br />
      - Origin Country:Vietnam.
    </span>,
    price: 340.00,
    gender: 'Unisex',
    color: 'Green',
    weight: 'max 20L',
    features: [
      'Frameless'
    ],
    activity: 'Hiking',
    sustainable: true,
  },
  {
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
    description: <span>
      An essential sport gear for all backpack enthusiasts, La Sportiva X-Cursion 28L is a ideal, sleek, lightweight backpack designed for your hiking, trekking and everyday use. It can very well adapt from trail to urban use, as it is compatible with hydration systems and is durable and comfortable to carry. <br /><br /> The two front pockets have zippers on the side and the top pocket on the backpack has a key clip which ensures protection and the small compartment provides storage capacity for small items like pens. The two side pockets provides the adequate space for holding water bottles or containers. The internal pockets inside a large volume main compartment has enough space for clothes and equipment, while the outside small pockets have space for eatables like enerybars. <br /><br /> The padded back panel with contoured shoulder straps and adjustable sternum strap makes it easy and accessible to grab and go. The ventral belt can be adjusted or can be removed as per your wish, also thanks to the back opening with zipper that you now have space for an extra pair of shoes. Also, the elastic holder outside is easy to use and can carry extra jacket or any clothing item safely. <br /><br /> With lots of space and pockets, La Sportiva X-Cursion 28L is a very high quality and durable backpack for all globetrotters. Backpacks are the only true companion on your trekking or hiking trips. So, choose wisely! Ultra-lightweight mesh-reinforced nylon backpack, drop pocket, adjustable elastic outer organizer, non-padded shoulder straps and minimal hip belt. Predisposition for hydration systems. <br /><br /> Hose construction, ample top opening with zipper and upper outer pocket, large secondary opening on the back with zip allowing access to the interior of the backpack throughout its length.
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
    name: 'La Sportiva Trango Hiking Poles',
    type: 'Accessories',
    brand: 'La Sportiva',
    images: [
      images.trangopolesFirst,
      images.trangopolesSecond,
      images.trangopolesThird
    ],
    size: [
      64-140 + 'cm',
    ],
    description: <span>
      Strong and heavy duty poles. Aluminium structure and design guarantees that they will hold the entire weight of the user even during the most challenging downhill hikes. <br /><br /> Specifications: <br />
      - Materials: Aluminium alloy 6013, Eva Grip with Neoprene strap, E-basket with Carbide tip. Tip rubber protection, 50 mm basket; <br />
      - Structure: 3 Sections telescopic, Flexy Locking System; <br />
      - Weight: 230gr.
    </span>,
    price: 267.00,
    gender: 'Unisex',
    color: 'Black',
    weight: '230 g',
    features: [],
    activity: 'Hiking',
    sustainable: false,
  },
  {
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
    description: <span>
      Comfort Fast Adjust Harness Men. A comfortable and breathable climbing harness. Laser-cut material for greater breathability and robustness. Optimum weight distribution. The anatomically optimized shape in combination with the soft edge of the hip belt give the Comfort Fast Adjust Harness Men unparalleled comfort for long climbs. <br /><br /> Features: <br />
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
    weight: '',
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'Mammut Climbing Sender Wire Quickdraw',
    type: 'Accessories',
    brand: 'Mammut',
    images: [
      images.senderwireFirst,
      images.senderwireSecond,
      images.senderwireThird
    ],
    size: [
      17 + 'cm',
      60 + 'cm'
    ],
    description: <span>
      Sender keylock quickdraws are designed for alpine climbing and high-performance sport. The combination of extremely light, compact carabiners with wire gates and Dyneema® slings delivers an ideal balance of weight and performance. The weight-saving wire gates, designed for year-round use, are fully functional even in snow and ice and have less gate flutter and shutter. <br /><br /> The thin sling provides a firm grip; a robust sling protector keeps the lower carabiner in place and reduces wear. The bright indicator shows that the sling and protector are attached correctly to the carabiner. For climbers looking for the lightest keylock quickdraws for long routes and hard sends. <br /><br /> Features: <br />
      - Excellent weight-to-breaking load ratio thanks to the simple carabiner design; <br />
      - Protector with indicator for correct attachment; <br />
      - Lightweight and resilient Dyneema sling; <br />
      - Protector keeps the lower carabiner in position and reduces wear on the sling; <br />
      - Weight-saving wire gate for year-round use; <br />
      - The lower inertia of wire gates means less flutter and shutter; <br />
      - Height: 90 mm; <br />
      - Width: 54 mm; <br />
      - Size: 17 cm; <br />
      - Vertical breaking load: 21 kN; <br />
      - Open breaking load: 8 kN; <br />
      - Horizontal breaking load: 7 kN; <br />
      - Weight: 68 g.
    </span>,
    price: 105.00,
    gender: 'Unisex',
    color: 'White',
    weight: '68 g',
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
    name: 'Mammut Crag Sender Climbing Helmet',
    type: 'Accessories',
    brand: 'Mammut',
    images: [
      images.cragsenderFirst,
      images.cragsenderSecond,
      images.cragsenderThird
    ],
    size: [
      52-57 + 'cm',
      56-61 + 'cm'
    ],
    description: <span>
      For any outdoor activity, keeping your head protected is essential. And if you´re an experienced mountaineer or climber, you know that you need the greatest protection available while keeping the weight as low as possible. If you can relate to this, the Mammut Crag Sender helmet is for you. Lightweight, well-ventilated, and built with the highest quality materials in the marketplace, this helmet from the Swiss brand will provide you with unwavering security on any cliff or slope. <br /><br /> Features: <br />
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
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
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
    description: <span>
      If you´re looking for a luxury mountain climbing experience, the Mammut Trion Spine 75 backpack will be your best companion. Featuring several improvements designed to give you the best possible comfort, this bag is ideal for long hikes and demanding trips into the wilderness. <br /><br /> Features: <br />
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
    weight: '',
    features: [],
    activity: 'Climbing',
    sustainable: true,
  },
  {
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
    description: <span>
      Osprey is a hot-forged carabiner of classic oval shape suitable for technical and bigwall climbing. It´s invaluable on working with pulleys. The utility value of this carabiner is increased by Ocún’s typical rope friendly shape of the upper profile, which makes the Osprey usable for HMS belaying in case of an emergency. If climbers owned just one carabiner, it should be the Osprey. <br /><br />
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
    features: [],
    activity: 'Climbing',
    sustainable: false,
  },
  {
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
    weight: '',
    features: [],
    activity: 'Climbing',
    sustainable: true,
  },

  //* ------------------------------------------------------------ EQUIPMENT ----------------------------------------------------- *//

  {
    name: 'Columbia Ultra 2P Lightweight Hiking Tent',
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
    features: [
      'Waterproof',
      'Windproof',
      'Thermal'
    ],
    activity: 'Camping',
    sustainable: false,
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
    logoSize: 40
  },
  'The North Face': {
    name: 'The North Face',
    logo: images.northLogo,
    logoSize: 34
  },
  Osprey: {
    name: 'Osprey',
    logo: images.ospreyLogo,
    logoSize: 13
  },
  Patagonia: {
    name: 'Patagonia',
    logo: images.patagoniaLogo,
    logoSize: 35
  },
  Petzl: {
    name: 'Petzl',
    logo: images.petzlLogo,
    logoSize: 34
  },
  Salewa: {
    name: 'Salewa',
    logo: images.salewaLogo,
    logoSize: 34
  },
  Salomon: {
    name: 'Salomon',
    logo: images.salomonLogo,
    logoSize: 40
  },
  'La Sportiva': {
    name: 'La Sportiva',
    logo: images.sportivaLogo,
    logoSize: 15
  },
  'Sea To Summit': {
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
  'Red',
  'Purple'
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
