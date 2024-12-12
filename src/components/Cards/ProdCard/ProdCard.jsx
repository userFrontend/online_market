import { Link } from "react-router-dom";
import { Icons } from "../../../utils/icons";
import Rating from "../../Rating/Rating";
import { useInfoContext } from "../../../context/infoContext";
import "./ProdCard.scss";

const ProdCard = ({_id}) => {
  const { addToCart, cartItems } = useInfoContext();
  const isTop = true;
  const discount = 20;

  const currentProd = cartItems.find(
    (el) => el.id == _id
  ) || { id: _id, name: "Soft Finish", price: 19.6 };

  console.log(currentProd);
  

  return (
    <Link to={`/prod/1234-1234`} className="prod-card">
      <div className="prod-card__head">
        <ul className="stickers">
          {isTop ? <li className="top">Top Rated</li> : ""}
          {discount ? <li className="discount">-{discount}%</li> : ""}
        </ul>
        <img src="images/img.png" alt="img" />
        <Icons.likeDefault />
      </div>

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
        {currentProd.quantity ? (
          <button onClick={(e) => addToCart(e, currentProd)}>
            +++
          </button>
        ) : (
          <button onClick={(e) => addToCart(e, currentProd)}>
            Add To Bag
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProdCard;
