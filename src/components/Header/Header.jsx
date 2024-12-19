import { useState } from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { useInfoContext } from '../../context/infoContext'
import { FaRegUser } from 'react-icons/fa'
import { SlHandbag } from 'react-icons/sl'
import { LuSearch } from 'react-icons/lu'
import { Collapse, Drawer } from "antd";
import AuthModal from '../Auth/Auth'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { Icons } from '../../utils/icons'

const Header = () => {
    const { cartItems, removeFromCart, totalPrice, increment, decrement, userId, exit} = useInfoContext()
    const [openlang, setOpenlang] = useState(false);
    const [showBurger, setShowBurger] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [auth, setAuth] = useState(false);
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(!open);
    const toggleBurger = () => setShowBurger(!showBurger)

    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;
  return (
    <header>
        <div className="container">
          <div className="home_header">
          </div>
            <nav className='header_nav'>
                <div className="burger_menu">
                  <div className='burger_menu_item' onClick={toggleBurger}><FiMenu className='icon'/> Menu</div>
                </div>
                <div className="logo_site">
                  <img src="/images/the.png" alt="logo" />
                  <img src="/images/text.png" alt="logo" />
                  <img src="/images/heart.png" alt="logo" />
                </div>
                <ul className='header_list'>
                    <li>
                        <NavLink to='/catalog'>SHOP ALL</NavLink>
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
                  <div className='option_items'><LuSearch className='icon'/> ПОИСК</div>
                  <AuthModal/>
                  <div className='option_items' onClick={showDrawer}><SlHandbag className='icon'/> КОРЗИНА </div>
                </div>
                <div className='media_item' onClick={showDrawer}><SlHandbag className='icon'/>КОРЗИНА </div>
            </nav>
        </div>
        <Drawer className='menu_box' title={false} closeIcon={false} onClose={showDrawer} open={open}>
          <div className="header_menu_cart">
            <h3>КОРЗИНА </h3>
            <button onClick={showDrawer}><MdClose /></button>
            <div className="bottom">
              <Icons.roseLeft/>
            </div>
          </div>
          <div className="cart">
            {cartItems?.length === 0 ? (
              <div className="no_cart">
                No Cart
              </div>
            ) : (
              <div className='cart_box'>
                {cartItems.map(item => (
                   <div key={item.ID} className="cart_item">
                    <img src="/images/img.png" alt="cart_img" />
                    <div className="cart_body">
                      <h3>{item.name}</h3>
                      <span className='price'>${(item.priceUSD * item.quantity).toFixed(2)}</span>
                      <div className="cart_btn">
                        <div className="cart_controls">
                          <button onClick={() => decrement(item.ID)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => increment(item.ID)}>+</button>
                        </div>
                        <button className='remove_btn' onClick={() => removeFromCart(item.ID)}><MdClose/></button>
                      </div>
                    </div>
                 </div>
               ))}
              <div className="cart_footer">
                <h3><span>ИТОГО:</span> ${totalPrice}</h3>
                <Link to='/checkout' onClick={showDrawer}><button>ОФОРМИТЬ</button></Link>
              </div>
             </div>
            )}
          </div>
        </Drawer>
        <Drawer className='menu_box' closeIcon={false} title={false} onClose={toggleBurger} open={showBurger}>
          <div className="header_menu">
            <h3>МЕНЮ</h3>
            <button onClick={toggleBurger}><MdClose /></button>
          </div>
          <Link className='option_menu'><LuSearch className='icon'/> ПОИСК</Link>
          <div className='option_menu'><AuthModal/></div>
          <ul>
            <li>
                <Collapse className='collapse_menu' accordion ghost expandIconPosition='end' items={[{
                    key: '1',
                    label: 'SHOP ALL',
                    children: <div>
                    <Collapse className='collapse_menu_item' accordion ghost expandIconPosition='end' items={[
                      {
                        key: '1.1',
                        label: 'Double-Cleanse',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.2',
                        label: 'Exfoliators',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.3',
                        label: 'Toners',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.4',
                        label: 'Masks',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.5',
                        label: 'Eye Care',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.6',
                        label: 'Moisturizers',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.7',
                        label: 'Sun Protection',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                    ]}/>
                    <Link>Cleansing Balms</Link>
                    <Link>Makeup & Tools</Link>
                    </div>
                  }]} />
            </li>
            <li>
                <Link to='/bestsellers'>BESTSELLERS</Link>
            </li>
            <li>
                <Link to='/colliction'>COLLICTION</Link>
            </li>
            <li>
                <Collapse className='collapse_menu' accordion ghost expandIconPosition='end' items={[{
                    key: '1',
                    label: 'ABOUT US',
                    children: <div>
                    <Collapse className='collapse_menu_item' accordion ghost expandIconPosition='end' items={[
                      {
                        key: '1.1',
                        label: 'Double-Cleanse',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.2',
                        label: 'Exfoliators',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.3',
                        label: 'Toners',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.4',
                        label: 'Masks',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.5',
                        label: 'Eye Care',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.6',
                        label: 'Moisturizers',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                      {
                        key: '1.7',
                        label: 'Sun Protection',
                        children: <ul>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Cleansing Balms</Link></li>
                          <li><Link>Water Cleansers</Link></li>
                        </ul>,
                      },
                    ]}/>
                    <Link>Cleansing Balms</Link>
                    <Link>Makeup & Tools</Link>
                    </div>
                  }]} />
            </li>
            <li>
                <Link to='/blog'>BLOG</Link>
            </li>
          </ul>
        </Drawer>
    </header>
  )
}

export default Header