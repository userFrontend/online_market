import { Icons } from "../../../utils/icons";
import "./SetCard.scss";

const SetCard = ({type}) => {
  return (
    <div className="set-card">
      <div className={type ? "set-card__info right":"set-card__info left"}>
        <h1>Blossom Glow Kit</h1>
        <p>
          Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing
          body and face creams with lotus extract provide deep hydration and
          rejuvenation. Suitable for all skin types. Vegan, cruelty-free,
          eco-friendly.
        </p>
        <ul className="set-card__info__tags">
          <li className="tag"># GreatGift</li>
          <li className="tag"># GreatGift</li>
          <li className="tag"># GreatGift</li>
          <li className="tag"># GreatGift</li>
          <li className="tag"># GreatGift</li>
        </ul>
        <div className="set-card__info__buttons">
            <button>Shop Now</button>
            <button>Explore <Icons.arrowRight/></button>
        </div>
      </div>
      <div className={type ? "set-card__img left":"set-card__img right"}>
      </div>
    </div>
  );
};

export default SetCard;
