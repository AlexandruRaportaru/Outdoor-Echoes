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
  {
    name: 'Adidas Terrex Swift R2 Hiking Shoes',
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
    recomended: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Adidas Terrex Free Hiker Hiking Shoes',
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
    recomended: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Adidas Terrex HyperHiker Hiking Shoes',
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
    recomended: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Adidas Terrex MyShelter Hiking Jacket',
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
    recomended: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Adidas Terrex LiteFlex Hiking Pants',
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
    recomended: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Adidas Terrex Tech Hiking Fleece',
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
    recomended: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Adidas Terrex Xploric Hiking Jacket',
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
    recomended: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Adidas Terrex Liteflex Hiking Shorts Pants',
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
    recomended: 'Hiking',
    sustainable: true,
  },
  {
    name: 'Adidas Terrex Agravic Hiking Backpack 10L',
    brand: 'adidas',
    images: [
      images.agravicFirst,
      images.agravicSecond,
      images.agravicThird
    ],
    size: '',
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
    weight: '',
    features: 'Frameless',
    recomended: 'Hiking',
    sustainable: false,
  },
  {
    name: 'Adidas Terrex Free Hiker Goretex Trail Running',
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
      Intending to lead the hiking marketplace is no small feat, but the adidas Terrex Free Hiker GTX trail running shoes will surely achieve this as the Terrex series’ natural evolution. Combining the best features of their high-performance running shoes with the advantages of their more outdoor-oriented designs, these sneakers do not look like anything you have seen so far in the scene. <br /> adidas´ sportiest products inspired the Terrex Free Hiker GTX’s upper, with a Primeknit design that has received anti-wear reinforcements to protect you from difficult terrain. But Primeknit’s outstanding features are not lost by that, with a sock-like design that fits your feet perfectly and maintains the lightweight breathability that it is so well known for. To achieve greater weather protection, adidas has also added a thin GORE-TEX® layer to create an all-around, tight waterproofing. <br /> The already characteristic Continental™ rubber outsole in the Terrex series blends with a boost™ midsole, thus completing a package with great cushioning and responsiveness as well as outstanding traction that will not be deterred by any obstacle. Various TPU reinforcements on the heel and toecap serve as additional protection against injuries and accidents. Move and explore. <br /> These lightweight hiking shoes deliver next-generation comfort and freedom of movement for hikes both long and short. The adidas Primeknit upper hugs your foot for flexible, all-terrain stability, while the Boost midsole delivers endless energy to keep you moving up or down the trail. A GORE-TEX membrane sheds water while letting your feet breathe for all-conditions wear. <br /> Features: <br />
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
    recomended: 'Trail running',
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
    logoSize: 40
  },
  diamond: {
    name: 'Black Diamond',
    logo: images.diamondLogo,
    logoSize: 35
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

export default { 
  productsExamples, 
  menus, 
  swiperImages, 
  activitiesCards,
  products,
  brands
};
