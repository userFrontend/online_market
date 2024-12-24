import { useState } from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { useInfoContext } from '../../context/infoContext'
import { SlHandbag } from 'react-icons/sl'
import { LuSearch } from 'react-icons/lu'
import { Collapse, Drawer } from "antd";
import AuthModal from '../Auth/Auth'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { Icons } from '../../utils/icons'

const Header = () => {
    const { cartItems, removeFromCart, totalPrice, increment, decrement, setModalOpen, userId, exit} = useInfoContext()
    const [showBurger, setShowBurger] = useState(false);
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
                <Link to={"/"} className="logo_site">
                  <Icons.logo key={"logo"}/>
                </Link>
                <ul className='header_list'>
                    <li className='header_item'>
                        <NavLink to='/catalog'>Макияж</NavLink>

                        <div className="sub_link">
                          <div className="container">
                            <div className="sub_box">
                            <ul>
                              <h3>Тон</h3>
                              <li>Праймеры</li>
                              <li>Тональный крем</li>
                              <li>Пудра</li>
                              <li>Румяна, бронзаторы</li>
                              <li>Хайлайтеры</li>
                              <li>Консиллеры</li>
                              <li>Палетки для лица</li>
                            </ul>
                            <ul>
                              <h3>Губы</h3>
                              <li>Праймеры</li>
                              <li>Тональный крем</li>
                              <li>Пудра</li>
                              <li>Румяна, бронзаторы</li>
                              <li>Хайлайтеры</li>
                              <li>Консиллеры</li>
                              <li>Палетки для лица</li>
                            </ul>
                            <ul>
                              <h3>Глаза</h3>
                              <li>Праймеры</li>
                              <li>Тональный крем</li>
                              <li>Пудра</li>
                              <li>Румяна, бронзаторы</li>
                              <li>Хайлайтеры</li>
                              <li>Консиллеры</li>
                              <li>Палетки для лица</li>
                            </ul>
                            </div>
                          </div>
                        </div>
                    </li>
                    <li className='header_item'>
                        <NavLink to='/bestsellers'>Для лица</NavLink>
                        <div className="sub_link">
                          <div className="container">
                            <div className="sub_box">
                            <ul>
                              <li>Увлажнение</li>
                              <li>Тонизирование</li>
                              <li>Маски</li>
                            </ul>
                            <ul>
                              <li>Очищение</li>
                              <li>Кожа вокруг глаз</li>
                              <li>Сыворотки / серумы / масла</li>
                            </ul>
                            <ul>
                              <li>Отшелушивание / пилинги</li>
                              <li>Автозагары для лица</li>
                              <li>Защита от солнца</li>
                            </ul>
                            </div>
                          </div>
                        </div>
                    </li>
                    <li className='header_item'>
                        <NavLink to='/colliction'>Для тела</NavLink>
                        <div className="sub_link">
                          <div className="container">
                            <div className="sub_box">
                            <ul>
                              <li>Увлажнение</li>
                              <li>Очищение</li>
                              <li>Скрабы / Пилинги</li>
                              <li>Антицеллюлитные средства</li>
                            </ul>
                            <ul>
                              <li>Солнечная линия</li>
                              <li>Дезодоранты</li>
                              <li>Аксессуары по уходу за телом</li>
                              <li>Разное</li>
                            </ul>
                            </div>
                          </div>
                        </div>
                    </li>
                    <li className='header_item'>
                        <NavLink to='/colliction'>Для волос</NavLink>
                        <div className="sub_link">
                          <div className="container">
                            <div className="sub_box">
                            <ul>
                              <li>Шампуни</li>
                              <li>Кондиционеры и бальзамы</li>
                            </ul>
                            <ul>
                              <li>Маски / Скрабы</li>
                              <li>Масла / Спреи</li>
                            </ul>
                            <ul>
                              <li>Аксессуары</li>
                              <li>Термозащиты</li>
                            </ul>
                            <ul>
                              <li>Сухие Шампуни</li>
                            </ul>
                            </div>
                          </div>
                        </div>
                    </li>
                    <li className='header_item'>
                        <NavLink to='/about'>Аксессуары</NavLink>
                        <div className="sub_link">
                          <div className="container">
                            <div className="sub_box">
                            <ul>
                              <li>Кисти для макияжа</li>
                              <li>Косметички и кейсы</li>
                              <li>Разное</li>
                              <li>Свечи</li>
                            </ul>
                            </div>
                          </div>
                        </div>
                    </li>
                    <li className='header_item'>
                        <NavLink to='/blog'>Бренды</NavLink>
                        <div className="sub_link">
                          <div className="container">
                            <div className="sub_box">
                            <ul>
                              <h3>A</h3>
                              <li>Anua</li>
                              <li>Amuse</li>
                            </ul>
                            <ul>
                              <h3>B</h3>
                              <li>Babor</li>
                              <li>Biore</li>
                            </ul>
                            <ul>
                              <h3>C</h3>
                              <li>CHANEL</li>
                              <li>Clinique</li>
                              <li>Clarins</li>
                              <li>Charlotte tilbery</li>
                            </ul>
                            <ul>
                              <h3>D</h3>
                              <li>DR.jart</li>
                              <li>D’alba</li>
                            </ul>
                            <ul>
                              <h3>E</h3>
                              <li>Elemis</li>
                              <li>Estee lauder</li>
                            </ul>
                            <ul>
                              <h3>F</h3>
                              <li>Fenty beauty</li>
                            </ul>
                            <ul>
                              <h3>G</h3>
                              <li>Guerlain</li>
                              <li>Gucci</li>
                              <li>Giorgio Armani</li>
                              <li>Gisou</li>
                            </ul>
                            <ul>
                              <h3>H</h3>
                              <li>Hourglass</li>
                              <li>Hempz</li>
                            </ul>
                            <ul>
                              <h3>J</h3>
                              <li>JELAI</li>
                            </ul>
                            <ul>
                              <h3>K</h3>
                              <li>Keune</li>
                            </ul>
                            <ul>
                              <h3>L</h3>
                              <li>LAMER</li>
                              <li>La sultane de Saba</li>
                            </ul>
                            <ul>
                              <h3>M</h3>
                              <li>Manyo</li>
                            </ul>
                            <ul>
                              <h3>N</h3>
                              <li>Nars</li>
                            </ul>
                            <ul>
                              <h3>P</h3>
                              <li>Paula Choice</li>
                              <li>Patrick Ta </li>
                            </ul>
                            <ul>
                              <h3>R</h3>
                              <li>Rhode</li>
                              <li>Rare beauty</li>
                            </ul>
                            <ul>
                              <h3>S</h3>
                              <li>Skin&lab</li>
                              <li>Sol de janeiro</li>
                            </ul>
                            <ul>
                              <h3>T</h3>
                              <li>Tree Hut</li>
                              <li>Tarte</li>
                              <li>Tom ford</li>
                            </ul>
                            <ul>
                              <h3>Z</h3>
                              <li>Zo skin health</li>
                              <li>Tarte</li>
                              <li>Tom ford</li>
                            </ul>
                            </div>
                          </div>
                        </div>
                    </li>
                </ul>
                <div className="options">
                  <div className='option_items'><LuSearch className='icon'/> ПОИСК</div>
                  <AuthModal/>
                  <div className='option_items cart_link' onClick={showDrawer}><SlHandbag className='icon'/> <span>{cartItems.length}</span> КОРЗИНА </div>
                </div>
                <div className='media_item cart_link' onClick={showDrawer}><SlHandbag className='icon'/> <span>{cartItems.length}</span> КОРЗИНА </div>
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
                <img src="/images/17.jpg" alt="cart" />
                <h3>Вы еще не выбрали товар</h3>
                <Link onClick={showDrawer} className='link_cart' to='/'>Выбор продукта</Link>
              </div>
            ) : (
              <div className="cart_box">
                <div className='cart_items'>
                {cartItems.map((item, i) => (
                   <div key={i} className="cart_item">
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
             </div>
              <div className="cart_footer">
                <h3><span>ИТОГО:</span> ${totalPrice}</h3>
                <Link to={userId && '/checkout'} onClick={() => {!userId ? setModalOpen(true) : showDrawer()}}><button>ОФОРМИТЬ</button></Link>
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
                    label: 'МАКИЯЖ',
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
                <Link to='/bestsellers'>ДЛЯ ЛИЦА</Link>
            </li>
            <li>
                <Link to='/colliction'>ДЛЯ ТЕЛА</Link>
            </li>
            <li>
                <Collapse className='collapse_menu' accordion ghost expandIconPosition='end' items={[{
                    key: '1',
                    label: 'ДЛЯ ВОЛОС',
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
                <Link to='/blog'>АКСЕССУАРЫ</Link>
            </li>
            <li>
                <Link to='/blog'>БРЕНДЫ</Link>
            </li>
          </ul>
        </Drawer>
    </header>
  )
}

export default Header