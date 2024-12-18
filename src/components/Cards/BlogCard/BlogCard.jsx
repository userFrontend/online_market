import { Link } from 'react-router-dom';
import './BlogCard.scss'

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-card__img">
        <img src="/images/blog.png" alt="blog" />
      </div>
      <div className="blog-card__info">
        <h2 className="blog-card__info__title">Cracking the Coconut Code</h2>
        <p className="blog-card__info__description">
          Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing
          body and face creams
        </p>
        <Link to="/blog/2" className="blog-card__info__btn">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
