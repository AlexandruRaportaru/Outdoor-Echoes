import React, { useState } from 'react';
import { data } from '../../constants';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import './Menu.css';

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Link to='#' className='app__navbar-menu' onClick={() => setToggleMenu(true)}>
        <div>
          <FiMenu color='var(--color-yellow)' fontSize={30}/>
          <p className='p__text'>MENU</p>
        </div>
      </Link>

      <div className={toggleMenu ? 'app__navbar-smallMenu active' : 'app__navbar-smallMenu'}>
        <ul className='app__navbar-smallMenu_items'>
          <li className='app__navbar-toggle'>
            <Link to='#' className='app__navbar-menu__close' onClick={() => setToggleMenu(false)}>
              <AiOutlineClose color='var(--color-yellow)' fontSize={30}/>
              <p className='p__text'>CLOSE</p>
            </Link>
          </li>
          {data.menus.map((menu, index) => (
            <li key={index} className={menu.className}>
              <Link to={menu.path}>
                {menu.icon}
                <span className='p__text'>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </> 
  )
}

export default Menu