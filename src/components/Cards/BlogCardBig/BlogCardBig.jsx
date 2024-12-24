import { Link } from "react-router-dom";
import "./BlogCardBig.scss";

const BlogCardBig = ({ type }) => {
  return (
    <div className="blog-card-big">
      <div
        className={
          type ? "right blog-card-big__info" : "left blog-card-big__info"
        }
      >
        <h1>Набор для сияния Blossom</h1>
        <p>
          Раскройте естественное сияние вашей кожи с нашим набором Lotus Glow.
          Увлажняющие кремы для тела и лица с экстрактом лотоса обеспечивают
          глубокое увлажнение и восстановление. Подходит для всех типов кожи.
          Веганский, без тестирования на животных, экологичный.
        </p>
        <ul className="blog-card-big__info__tags">
          <li className="tag"># Советы</li>
          <li className="tag"># ОтличныйПодарок</li>
          <li className="tag"># Экологичный</li>
          <li className="tag"># Уход</li>
        </ul>
        <div className="blog-card-big__info__buttons">
          <Link to="/blog/1">Читать далее</Link>
        </div>
      </div>
      <div
        className={
          type ? "blog-card-big__img left" : "blog-card-big__img right"
        }
      >
        <img src="images/set.png" alt="Набор Blossom" />
      </div>
    </div>
  );
};

export default BlogCardBig;
