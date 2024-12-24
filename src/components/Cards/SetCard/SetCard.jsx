import { Icons } from "../../../utils/icons";
import "./SetCard.scss";

const SetCard = ({ type }) => {
  return (
    <div className="set-card">
      <div className={type ? "right set-card__info" : "left set-card__info"}>
        <h1>Набор Blossom Glow</h1>
        <p>
          Раскройте естественное сияние вашей кожи с нашим набором Lotus Glow. 
          Увлажняющие кремы для тела и лица с экстрактом лотоса обеспечивают глубокое увлажнение 
          и восстановление. Подходит для всех типов кожи. Веганский, не тестируется на животных, экологичный.
        </p>
        <ul className="set-card__info__tags">
          <li className="tag"># Прекрасный Подарок</li>
          <li className="tag"># Прекрасный Подарок</li>
          <li className="tag"># Прекрасный Подарок</li>
          <li className="tag"># Прекрасный Подарок</li>
          <li className="tag"># Прекрасный Подарок</li>
        </ul>
        <div className="set-card__info__buttons">
          <button>Купить сейчас</button>
          <button>Узнать больше <Icons.arrowRight /></button>
        </div>
      </div>
      <div className={type ? "set-card__img left" : "set-card__img right"}>
        <img src="images/set.png" alt="набор" />
      </div>
    </div>
  );
};

export default SetCard;
