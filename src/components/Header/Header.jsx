import React, { useState } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import { useInfoContext } from '../../context/infoContext'
import { FaRegUser } from 'react-icons/fa'
import { SlHandbag } from 'react-icons/sl'
import { LuSearch } from 'react-icons/lu'
import { Drawer } from "antd";
import AuthModal from '../Auth/Auth'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
    const {userId, exit} = useInfoContext()
    const [openlang, setOpenlang] = useState(false);
    const [showBurger, setShowBurger] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [auth, setAuth] = useState(false);
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(!open);
    const toggleBurger = () => setShowBurger(!showBurger)
  return (
    <header>
        <div className="container">
          <div className="home_header">
          </div>
            <nav className='header_nav'>
                <div className="burger_menu">
                  <div className='burger_menu_item' onClick={toggleBurger}><FiMenu className='icon'/> Menu</div>
                </div>
                <div className="logo-site">
                  <img src="/images/logo.png" alt="logo" />
                </div>
                <ul className='header_list'>
                    <li>
                        <NavLink to='/all'>SHOP ALL</NavLink>
                    </li>
                    <li>
                        <NavLink to='/bestsellers'>BESTSELLERS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/colliction'>COLLICTION</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>ABOUT AS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'>BLOG</NavLink>
                    </li>
                </ul>
                <div className="options">
                  <div className='option_items'><LuSearch className='icon'/> SEARCH</div>
                  <AuthModal/>
                  <div className='option_items' onClick={showDrawer}><SlHandbag className='icon'/> CART</div>
                </div>
                <div className='media_item' onClick={showDrawer}><SlHandbag className='icon'/>CART</div>
            </nav>
        </div>
        <Drawer title="CART " onClose={showDrawer} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Drawer title="Menu" onClose={toggleBurger} open={showBurger}>
          <div className="options">
            <div className='option_items'><LuSearch className='icon'/> SEARCH</div>
            <AuthModal/>
            <div className='option_items' onClick={showDrawer}><SlHandbag className='icon'/> CART</div>
          </div>
          <ul>
            <li>
                <NavLink to='/all'>SHOP ALL</NavLink>
            </li>
            <li>
                <NavLink to='/bestsellers'>BESTSELLERS</NavLink>
            </li>
            <li>
                <NavLink to='/colliction'>COLLICTION</NavLink>
            </li>
            <li>
                <NavLink to='/about'>ABOUT AS</NavLink>
            </li>
            <li>
                <NavLink to='/blog'>BLOG</NavLink>
            </li>
          </ul>
        </Drawer>
    </header>
  )
}

export default Header