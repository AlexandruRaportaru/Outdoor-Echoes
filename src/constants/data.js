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

export default { products, menus };
