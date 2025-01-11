import { useState } from 'react'
import './Orders.scss'
import PhoneInput from '../../components/Input/Input'
import { useInfoContext } from '../../context/infoContext'
import { MdClose } from 'react-icons/md'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { addReq } from '../../api/addRequest'

const Orders = () => {
  const {cartItems, removeFromCart, totalPrice, increment, decrement, setCartItems} = useInfoContext()
  const [shipping, setShipping] = useState('shipping')
  const [phoneNumber, setPhoneNumber] = useState('+998 (__) ___-__-__')
  const [sended, setSended] = useState(false)
  const orderId = Math.floor(100000 + Math.random() * 900000);

  const handleAdd = async (e) => {
    e.preventDefault();
    const orderId = Math.floor(100000 + Math.random() * 900000);
  
    try {
      const data = new FormData(e.target);
      data.append('products', JSON.stringify(cartItems));
      data.append('totalPrice', totalPrice);
      data.append('id', orderId);
      data.append('phone', phoneNumber);
  
      const res = await addReq(data, 'prod');
      console.log(res);
  
      setSended(true);
      localStorage.removeItem('cart');
      setCartItems([]);
    } catch (error) {
      setSended(false);
      console.error("Error:", error);
    }
  };
  
  return (
    <div className="container">
      {sended ? <div className='sended'>
        <h2>Buyurtmangiz qabul qilindi</h2>
        <p>Buyurtma raqami: №{orderId}</p>
        <Link to='/'><button onClick={() => setSended(false)}>Главный</button></Link>
      </div> : <div className='orders'>
        <form onSubmit={handleAdd} className="left_page">
          <Breadcrumb
            items={[
              {
                title: <Link href="">Главный</Link>,
              },
              {
                title: "Оформить",
              },
            ]}
          />
          <h3>Контактная информация</h3>
          <input type="text" />
          <div className="method_pay">
            <label htmlFor="metShip">
              <input type="radio" id='metShip' checked={shipping === 'shipping'} onChange={() => setShipping('shipping')}/>
              доставка
            </label>
            <label htmlFor="metPic">
              <input type="radio" id='metPic' checked={shipping === 'pickup'} onChange={() => setShipping('pickup')}/>
              подобрать
            </label>
          </div>
            <h3>Адрес доставки</h3>
            <input type="text" name='fullname' placeholder='Имя / Фамилия' required/>
            <input type="text" name='country' placeholder='Country' required/>
            <input type="text" name='city' placeholder='City' required/>
            <input type="text" name='address' placeholder='Post code' required/>
            <PhoneInput phone={phoneNumber} setPhone={setPhoneNumber}/>
            <button>Заказать</button>
        </form>
        <div className="right_page">
          <h3>Ваши заказы</h3>
          <div className="cart_box">
            {cartItems.map((item) => (
              <div key={item.ID} className="cart_item">
                <img src="/images/img.png" alt="cart_img" />
                <div className="cart_body">
                  <h3>{item.name}</h3>
                  <span className="price">
                    ${(item.priceUSD * item.quantity).toFixed(2)}
                  </span>
                  <div className="cart_btn">
                    <div className="cart_controls">
                      <button onClick={() => decrement(item.ID)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increment(item.ID)}>+</button>
                    </div>
                    <button
                      className="remove_btn"
                      onClick={() => removeFromCart(item.ID)}
                    >
                      <MdClose />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart_footer">
              <h3>
                <span>ИТОГО:</span> ${totalPrice}
              </h3>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Orders;
