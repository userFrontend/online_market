// import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../../utils/icons";
import "./OneProd.scss";
import Rating from "../../components/Rating/Rating";

const Prod = ({ 
  title, 
  price, 
  description, 
  rating, 
  imgSrc, 
  isTop, 
  discount, 
  onAddToBag 
}) => {
  return (
    
    <Link to="/prod" className="prod">  
      <div className="prod__head">
        <ul className="stickers">
          {isTop && <li className="top">Top Rated</li>}
          {discount && <li className="discount">-{discount}%</li>}
        </ul>
        {/* <img src={imgSrc} alt="Product" /> */}
        <img src="/images/img.png" alt="img" />

        <Icons.likeDefault />
      </div>

      <div className="prod__body">
        {/* <h2 className="prod__title">{title}</h2> */}
        <h2 className="prod__title">All-Around Safe Block Essence Sun SPF45+</h2>
        <Rating rating={rating} />
        {/* <p className="prod__description">{description}</p> */}
        <p className="prod__description">Skin Reinforcement Gel Type Cream</p>
        {/* <p className="prod__price">{price}$</p> */}
        <p className="prod__price">32$</p>
      </div>

      <div className="prod__foot">
        <button onClick={onAddToBag}>Add To Bag</button>
      </div>
    </Link>
  );
};

export default Prod;
