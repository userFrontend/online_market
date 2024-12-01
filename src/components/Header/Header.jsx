import React, { useState } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import { useInfoContext } from '../../context/infoContext'
import { FaRegUser } from 'react-icons/fa'
import { SlHandbag } from 'react-icons/sl'
import { LuSearch } from 'react-icons/lu'
import { Drawer } from "antd";
import AuthModal from '../Auth/Auth'

const Header = () => {
    const {userId, exit} = useInfoContext()
    const [openlang, setOpenlang] = useState(false);
    const [showBurger, setShowBurger] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [auth, setAuth] = useState(false);
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(!open);
    const toggleBurger = () => setShowBurger(!showBurger)
    const toggle = () => setOpenlang(!openlang);
    const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <header>
        <div className="container">
          <div className="home_header">

          </div>
            <nav className='header_nav'>
                <div className="logo-site">
                  <img src="/images/logo.png" alt="logo" />
                </div>
                <ul>
                    <li>
                        <NavLink to='/'>SHOP ALL</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>BESTSELLERS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>COLLICTION</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>ABOUT AS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>BLOG</NavLink>
                    </li>
                </ul>
                <div className="options">
                  <div className='option_items'><LuSearch className='icon'/> SEARCH</div>
                  <AuthModal/>
                  <div className='option_items' onClick={showDrawer}><SlHandbag className='icon'/> CART</div>
                </div>
            </nav>
        </div>
        <Drawer title="CART " onClose={showDrawer} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </header>
  )
}

export default Header