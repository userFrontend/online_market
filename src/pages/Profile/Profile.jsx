import React from "react";
import "./Profile.scss";
import { useInfoContext } from "../../context/infoContext";

const Profile = () => {
  return (
    <div className="container">
      <div className="profile">
        <div className="left_page">
          <h3>Аккаунт</h3>
        </div>
        <form className="right_page">
          <h3>Контактная информация</h3>
          <input type="email" />
          <h3>Адрес доставки</h3>
          <div className="name">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <button className="set-card__info__buttons">Сохранить</button>
        </form>
      </div>
    </div>
  );
};
export default Profile;
