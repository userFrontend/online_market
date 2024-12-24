import { Link } from "react-router-dom";
import { Icons } from "../../../utils/icons";
import Rating from "../../Rating/Rating";
import { useInfoContext } from "../../../context/infoContext";
import "./ProdCard.scss";

const ProdCard = ({ data }) => {
  const {
    addToCart,
    cartItems,
    decrement,
    increment,
    removeFromCart,
  } = useInfoContext();
  // const isTop = true;

  const onProd = ['8809255787078', '8807779080316', '5060542727532', '5060150185274', '5010724526798', '4870237010051', '4660222450111', '3700971335978', '3666057159367', '3401395376706', '3360372026129', '3348901720328', '3348901674331', '3348901665810', '3348901491150', '846733030316', '840122904929', '736150000316']



  const currentProd =
    cartItems.find((el) => el.ID == data.ID) || data;

  return (
    <div className="prod-card">
      <div className="prod-card__head">
        <ul className="stickers">
          {/* {isTop ? <li className="top">Top Rated</li> : ""} */}
          {currentProd?.discountAmount ? (
            <li className="discount">-{currentProd?.discountAmount}%</li>
          ) : (
            ""
          )}
        </ul>
        <img src={onProd.includes(currentProd.barCode) ? `prods/${currentProd.barCode}.jpg` : "images/img.png"} alt="img" />
        <Icons.likeDefault />
      </div>

      <div className="prod-card__body">
        <h2 className="prod-card__body__title">{currentProd?.name}</h2>
        <Rating rating={(currentProd?.qty / 2).toFixed(0)} />
        <Link className="card__link" to={`/prod/${currentProd?.ID}`}>
          <p className="prod-card__body__description">
            Skin Reinforcement Gel Type Cream
          </p>
        </Link>
        <p className="prod-card__body__price">{currentProd?.priceUSD}$</p>
      </div>
      <div className="prod-card__foot">
        {currentProd?.quantity ? (
          <>
            {currentProd?.quantity == 1 ? (
              <button
                className="quantity-btn"
                onClick={() => removeFromCart(currentProd?.ID)}
              >
                -
              </button>
            ) : (
              <button
                className="quantity-btn"
                onClick={() => decrement(currentProd?.ID)}
              >
                -
              </button>
            )}

            <span>{currentProd?.quantity}</span>
            <button
              className="quantity-btn"
              onClick={() => increment(currentProd?.ID)}
            >
              +
            </button>
          </>
        ) : (
          <button type="button"
            className="add-btn"
            onClick={() => addToCart(currentProd)}
          >
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default ProdCard;
