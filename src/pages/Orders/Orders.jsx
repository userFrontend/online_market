import { useState } from "react";
import "./Orders.scss";
import PhoneInput from "../../components/Input/Input";
import { useInfoContext } from "../../context/infoContext";
import { MdClose } from "react-icons/md";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Orders = () => {
  const { cartItems, removeFromCart, totalPrice, increment, decrement } =
    useInfoContext();
  const [phoneNumber, setPhoneNumber] = useState("+998 (__) ___-__-__");
  return (
    <div className="container">
      <div className="orders">
        <form className="left_page">
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
            <label htmlFor="">
              <input type="radio" />
              доставка
            </label>
            <label htmlFor="">
              <input type="radio" />
              подобрать
            </label>
          </div>
          <h3>Адрес доставки</h3>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Post code" />
          <PhoneInput phone={phoneNumber} setPhone={setPhoneNumber} />
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
      </div>
    </div>
  );
};

export default Orders;
