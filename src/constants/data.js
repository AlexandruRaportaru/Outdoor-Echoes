import images from './images';
import { IoIosMan, IoIosWoman } from 'react-icons/io';
import { ImManWoman, ImHome3 } from 'react-icons/im';
import { BsSunglasses, BsTools } from 'react-icons/bs';

const products = [
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
    icon: <ImHome3 />,
    className: 'menu-category'
  },
  {
    title: 'Men',
    path: '/Men',
    icon: <IoIosMan />,
    className: 'menu-category'
  },
  {
    title: 'Women',
    path: '/Women',
    icon: <IoIosWoman />,
    className: 'menu-category'
  },
  {
    title: 'Kids',
    path: '/Kids',
    icon: <ImManWoman />,
    className: 'menu-category'
  },
  {
    title: 'Accesories',
    path: '/Accesories',
    icon: <BsSunglasses />,
    className: 'menu-category'
  },
  {
    title: 'Gear',
    path: '/Gear',
    icon: <BsTools />,
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

export default { products, menus, swiperImages };
