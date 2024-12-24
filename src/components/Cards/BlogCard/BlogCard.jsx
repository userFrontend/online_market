import { Link } from 'react-router-dom';
import './BlogCard.scss'

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-card__img">
        <img src="/images/blog.png" alt="блог" />
      </div>
      <div className="blog-card__info">
        <h2 className="blog-card__info__title">Раскрываем секрет кокоса</h2>
        <p className="blog-card__info__description">
          Раскройте естественное сияние вашей кожи с нашим набором Lotus Glow. 
          Увлажняющие кремы для тела и лица.
        </p>
        <Link to="/blog/2" className="blog-card__info__btn">Читать далее</Link>
      </div>
    </div>
  );
};

export default BlogCard;
