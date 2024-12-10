import { Link } from "react-router-dom";
import { Icons } from "../../../utils/icons";
import "./ProdCard.scss";
import Rating from "../../Rating/Rating";
import { useInfoContext } from "../../../context/infoContext";

const ProdCard = () => {
  const {addToCart } = useInfoContext()
  const isTop = true;
  const discount = 20;

  
  const toBag = (e) => {
    e.preventDefault();
  };

  return (
    <div className="prod-card">
      <Link to="/singleProduct">
        <div className="prod-card__head">
          <ul className="stickers">
            {isTop ? <li className="top">Top Rated</li> : ""}
            {discount ? <li className="discount">-{discount}%</li> : ""}
          </ul>
          <img src="images/img.png" alt="img" />
          <Icons.likeDefault />
        </div>
      </Link>
      <div className="prod-card__body">
        <h2 className="prod-card__body__title">
          All-Around Safe Block Essence Sun SPF45+
        </h2>
        <Rating rating={4} />
        <p className="prod-card__body__description">
          Skin Reinforcement Gel Type Cream
        </p>
        <p className="prod-card__body__price">32$</p>
      </div>
      <div className="prod-card__foot">
        <button onClick={() => addToCart({prodId: Math.random(10), name: 'Test', price: 100})}>Add To Bag</button>
      </div>
    </div>
  );
};

export default ProdCard;
