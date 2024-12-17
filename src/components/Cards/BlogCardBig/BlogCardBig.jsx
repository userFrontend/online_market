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
        <h1>Blossom Glow Kit</h1>
        <p>
          Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing
          body and face creams with lotus extract provide deep hydration and
          rejuvenation. Suitable for all skin types. Vegan, cruelty-free,
          eco-friendly.
        </p>
        <ul className="blog-card-big__info__tags">
          <li className="tag"># Tips</li>
          <li className="tag"># GreatGift</li>
          <li className="tag"># GreatGift</li>
          <li className="tag"># EcoFriendly</li>
          <li className="tag"># GreatGift</li>
        </ul>
        <div className="blog-card-big__info__buttons">
          <Link to="/blog/1">Read More</Link>
        </div>
      </div>
      <div
        className={
          type ? "blog-card-big__img left" : "blog-card-big__img right"
        }
      >
        <img src="images/set.png" alt="" />
      </div>
    </div>
  );
};

export default BlogCardBig;
