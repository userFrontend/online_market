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
          <Link target="_blank" to={"/"}>
            <Icons.pinterest />
          </Link>
          <Link target="_blank" to={"/"}>
            <Icons.twitter />
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
            <p>Discover nature's beauty with our natural care products.</p>
            <Link target="_blank" to={"tel:+998908155558"}>
              <Icons.phone />+ 998 90 815 55 58
            </Link>
            <Link target="_blank" to={"/"}>
              <Icons.mail />
              bloombt@kmail.com
            </Link>
            <Link target="_blank" to={"/"}>
              <Icons.location />
              Tashkent, Uzbekistan
            </Link>
          </div>
          <div className="footer__container__middle__other">
            <h2>Help</h2>
            <Link to={"/"}>Contact us</Link>
            <Link to={"/"}>FAQ</Link>
            <Link to={"/"}>Shipping & Returns</Link>
          </div>
          <div className="footer__container__middle__other">
            <h2>MY ACCOUNT</h2>
            <Link to={"/"}>Addresses</Link>
            <Link to={"/"}>Order Status</Link>
            <Link to={"/"}>Wishlist</Link>
          </div>
          <div className="footer__container__middle__other">
            <h2>CUSTOMER CARE</h2>
            <Link to={"/about"}>About us</Link>
            <Link to={"/blog"}>Blog</Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom__container">
          <p>© 2023 Bloom Beauty </p>
          <p>
            <Link target="_blank" to={"/"}>
              Privacy Policy
            </Link>
            <Link target="_blank" to={"/"}>
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
