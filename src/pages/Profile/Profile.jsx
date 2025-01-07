import React from "react";
import "./Profile.scss";
import { useInfoContext } from "../../context/infoContext";

const Profile = () => {
  const { currentUser } = useInfoContext();

  return (
    <div className="container">
      <div className="profile">
        <div className="left_page">
          <h3>Аккаунт</h3>
          <ul>
            <li>Контактная информация</li>
            <li>Изменить пароль</li>
            <li>Адреса</li>
            <li>Заказы</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="right_pages">
          {/* Contact Information Form */}
          <form className="right_page">
            <h3>Контактная информация</h3>
            <label>
              Email:
              <input type="email" defaultValue={currentUser?.email || ""} />
            </label>
            <label>
              Полное имя:
              <input type="text" defaultValue={currentUser?.fullname || ""} />
            </label>
            <button type="submit" className="set-card__info__buttons">Сохранить</button>
          </form>

          {/* Change Password Form */}
          <form className="right_page">
            <h3>Изменить пароль</h3>
            <label>
              Старый пароль:
              <input type="password" placeholder="Старый пароль" />
            </label>
            <label>
              Новый пароль:
              <input type="password" placeholder="Новый пароль" />
            </label>
            <label>
              Подтвердите новый пароль:
              <input type="password" placeholder="Подтвердите новый пароль" />
            </label>
            <button type="submit" className="set-card__info__buttons">Сохранить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
