import { Link } from "react-router-dom";
import { Icons } from "../../../utils/icons";
import Rating from "../../Rating/Rating";
import { useInfoContext } from "../../../context/infoContext";
import "./ProdCard.scss";

const ProdCard = ({ data }) => {
  const {
    addToCart,
    cartItems,
    products,
    decrement,
    increment,
    removeFromCart,
  } = useInfoContext();
  // const isTop = true;

  const currentProd =
    cartItems.find((el) => el.ID == data.ID) ||
    products.find((el) => el.ID == data.ID);

  return (
    <Link to={`/prod/${currentProd.ID}`} className="prod-card">
      <div className="prod-card__head">
        <ul className="stickers">
          {/* {isTop ? <li className="top">Top Rated</li> : ""} */}
          {currentProd.discountAmount ? (
            <li className="discount">-{currentProd.discountAmount}%</li>
          ) : (
            ""
          )}
        </ul>
        <img src="images/img.png" alt="img" />
        <Icons.likeDefault />
      </div>

      <div className="prod-card__body">
        <h2 className="prod-card__body__title">{currentProd.name}</h2>
        <Rating rating={(currentProd.qty / 2).toFixed(0)} />
        <p className="prod-card__body__description">
          Skin Reinforcement Gel Type Cream
        </p>
        <p className="prod-card__body__price">{currentProd.priceUSD}$</p>
      </div>
      <div className="prod-card__foot">
        {currentProd?.quantity ? (
          <>
            {currentProd?.quantity == 1 ? (
              <button
                className="quantity-btn"
                onClick={(e) => removeFromCart(e, currentProd?.ID)}
              >
                -
              </button>
            ) : (
              <button
                className="quantity-btn"
                onClick={(e) => decrement(e, currentProd?.ID)}
              >
                -
              </button>
            )}

            <span>{currentProd?.quantity}</span>
            <button
              className="quantity-btn"
              onClick={(e) => increment(e, currentProd?.ID)}
            >
              +
            </button>
          </>
        ) : (
          <button
            className="add-btn"
            onClick={(e) => addToCart(e, currentProd)}
          >
            Add To Bag
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProdCard;
