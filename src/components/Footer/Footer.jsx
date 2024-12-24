import { Link } from "react-router-dom";
import { Icons } from "../../utils/icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__container__top">
          <Link target="_blank" to={"/"}>
            <Icons.facebook />
          </Link>
          <Link
            to={
              "https://www.instagram.com/beautybrand.cosmetics?igsh=MWR0MnR3cWhqOGhodQ=="
            }
          >
            <Icons.instagram />
          </Link>
          <Link target="_blank" to={"https://t.me/beauty_branduz"}>
            <Icons.telegram />
          </Link>
        </div>
        <div className="footer__container__middle">
          <div className="footer__container__middle__first">
            <h2>Beauty Brand</h2>
            <p>Откройте красоту природы с нашими натуральными средствами ухода.</p>
            <Link target="_blank" to={"tel:+998908155558"}>
              <Icons.phone />+ 998 90 815 55 58
            </Link>
            <Link target="_blank" to={"/"}>
              <Icons.mail />
              bloombt@kmail.com
            </Link>
            <Link target="_blank" to={"/"}>
              <Icons.location />
              Ташкент, Узбекистан
            </Link>
          </div>
          <div className="footer__container__middle__other">
            <h2>Помощь</h2>
            <Link to={"/"}>Свяжитесь с нами</Link>
            <Link to={"/"}>Часто задаваемые вопросы</Link>
            <Link to={"/"}>Доставка и возврат</Link>
          </div>
          <div className="footer__container__middle__other">
            <h2>МОЙ АККАУНТ</h2>
            <Link to={"/"}>Адреса</Link>
            <Link to={"/"}>Статус заказа</Link>
            <Link to={"/"}>Список желаний</Link>
          </div>
          <div className="footer__container__middle__other">
            <h2>ОБСЛУЖИВАНИЕ КЛИЕНТОВ</h2>
            <Link to={"/about"}>О нас</Link>
            <Link to={"/blog"}>Блог</Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom__container">
          <p>© 2023 Bloom Beauty </p>
          <p>
            <Link target="_blank" to={"/"}>
              Политика конфиденциальности
            </Link>
            <Link target="_blank" to={"/"}>
              Условия использования
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
