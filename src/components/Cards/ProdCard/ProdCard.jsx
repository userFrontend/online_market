import { Link } from "react-router-dom";
import { Icons } from "../../../utils/icons";
import Rating from "../../Rating/Rating";
import { useInfoContext } from "../../../context/infoContext";
import "./ProdCard.scss";

const ProdCard = ({ data }) => {
  const { addToCart, cartItems, products } = useInfoContext();
  // const isTop = true;

  const currentProd = cartItems.find((el) => el.ID == data.ID) || products.find(el => el.ID ==data.ID);

  return (
    <Link to={`/prod/${data.ID}`} className="prod-card">
      <div className="prod-card__head">
        <ul className="stickers">
          {/* {isTop ? <li className="top">Top Rated</li> : ""} */}
          {data.discountAmount ? (
            <li className="discount">-{data.discountAmount}%</li>
          ) : (
            ""
          )}
        </ul>
        <img src="images/img.png" alt="img" />
        <Icons.likeDefault />
      </div>

      <div className="prod-card__body">
        <h2 className="prod-card__body__title">{data.name}</h2>
        <Rating rating={(data.qty / 2).toFixed(0)} />
        <p className="prod-card__body__description">
          Skin Reinforcement Gel Type Cream
        </p>
        <p className="prod-card__body__price">{data.priceUSD}$</p>
      </div>
      <div className="prod-card__foot">
        {currentProd.quantity ? (
          <button onClick={(e) => addToCart(e, currentProd)}>+++</button>
        ) : (
          <button onClick={(e) => addToCart(e, currentProd)}>Add To Bag</button>
        )}
      </div>
    </Link>
  );
};

export default ProdCard;
