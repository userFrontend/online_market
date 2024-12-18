import { Icons } from "../../utils/icons";
import "./OneBlog.scss";
import CustomSwiper from './../../components/Swiper/CustomSwiper';

const OneBlog = () => {
  const descriptions = [
    {
      title: `How is coconut oil manufactured?`,
      info: `Coconut oil is extracted from the meat of the cocos nucifera, a specialized type of palm tree. Like all plant-derived products, there are quicker (and cheaper) and longer (with higher quality) ways of doing this. Unlike olive oil, the terms “virgin” and “extra virgin” aren’t regulated with coconut oil, so they tend to be used interchangeably.
The oil itself is extracted either by pressing fresh coconut meat or refining a dried version called copra. Expeller-pressed “virgin/extra virgin” coconut oil uses heat or steam to release the oil, while cold-pressed coconut oil (like the kind in Solved’s Cleansing Balm) keeps the temperature below 120F, preserving more nutrients.
Refined coconut oil machine-presses the copra to release the oil, then “bleaches” it through clay filters to remove any bacteria or impurities.`,
      img: `/images/set.png`,
    },
    {
      title: `Does coconut oil help with acne?`,
      info: `Coconut oil is extracted from the meat of the cocos nucifera, a specialized type of palm tree. Like all plant-derived products, there are quicker (and cheaper) and longer (with higher quality) ways of doing this. Unlike olive oil, the terms “virgin” and “extra virgin” aren’t regulated with coconut oil, so they tend to be used interchangeably.
The oil itself is extracted either by pressing fresh coconut meat or refining a dried version called copra. Expeller-pressed “virgin/extra virgin” coconut oil uses heat or steam to release the oil, while cold-pressed coconut oil (like the kind in Solved’s Cleansing Balm) keeps the temperature below 120F, preserving more nutrients.
Refined coconut oil machine-presses the copra to release the oil, then “bleaches” it through clay filters to remove any bacteria or impurities.`,
      img: `/images/set.png`,
    },
    {
      title: `Does coconut oil help with acne?`,
      info: `Coconut oil is extracted from the meat of the cocos nucifera, a specialized type of palm tree. Like all plant-derived products, there are quicker (and cheaper) and longer (with higher quality) ways of doing this. Unlike olive oil, the terms “virgin” and “extra virgin” aren’t regulated with coconut oil, so they tend to be used interchangeably.
The oil itself is extracted either by pressing fresh coconut meat or refining a dried version called copra. Expeller-pressed “virgin/extra virgin” coconut oil uses heat or steam to release the oil, while cold-pressed coconut oil (like the kind in Solved’s Cleansing Balm) keeps the temperature below 120F, preserving more nutrients.
Refined coconut oil machine-presses the copra to release the oil, then “bleaches” it through clay filters to remove any bacteria or impurities.`,
    },
    {
      title: `Does coconut oil help with acne?`,
      info: `Coconut oil is extracted from the meat of the cocos nucifera, a specialized type of palm tree. Like all plant-derived products, there are quicker (and cheaper) and longer (with higher quality) ways of doing this. Unlike olive oil, the terms “virgin” and “extra virgin” aren’t regulated with coconut oil, so they tend to be used interchangeably.
The oil itself is extracted either by pressing fresh coconut meat or refining a dried version called copra. Expeller-pressed “virgin/extra virgin” coconut oil uses heat or steam to release the oil, while cold-pressed coconut oil (like the kind in Solved’s Cleansing Balm) keeps the temperature below 120F, preserving more nutrients.
Refined coconut oil machine-presses the copra to release the oil, then “bleaches” it through clay filters to remove any bacteria or impurities.`,
    },
  ];
  return (
    <main>
      <section className="one-blog-main">
        <div className="container one-blog-main__container">
          <div className="one-blog-main__container__img">
            <img src="/images/blog.png" alt="blog" />
          </div>
          <div className="one-blog-main__container__info">
            <div className="info-in">
              <p className="info-in__date">January 20, 2023</p>
              <h1 className="info-in__title">Cracking the Coconut Code</h1>
              <p>
                Few ingredients have been debated as much in recent years as
                coconut oil. Is it or is it not the “miracle product” so many
                claim it to be? We answer: Like anything, it depends. One of our
                newest brands, Solved Skincare, puts coconut oil front and
                center, so we wanted to give you the facts to decide how your
                specific skin type can reap its rewards. Keep reading below as
                we take a deep dive into the ‘nut.
              </p>
            </div>
            <ul className="info__tags">
              <h3>TAGS</h3>
              <li className="tag"># Tips</li>
              <li className="tag"># GreatGift</li>
              <li className="tag"># GreatGift</li>
              <li className="tag"># EcoFriendly</li>
              <li className="tag"># GreatGift</li>
            </ul>
            <ul className="info__share">
              <h3>SHARE</h3>
              <li className="share">
                <Icons.facebook />
              </li>
              <li className="share">
                <Icons.pinterest />
              </li>
              <li className="share">
                <Icons.twitter />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="one-blog-descriptions">
        <div className="one-blog-descriptions__container container">
          {descriptions.map((el, i) => (
            <div key={i} className="description">
              <h1 className="description__title">{el.title}</h1>
              <p>{el.info}</p>
              {el.img ? <img src={el.img} /> : ""}
            </div>
          ))}
        </div>
      </section>
      <section className="swiper__container container">
        <CustomSwiper text="On the Blog" blog={true}/>
      </section>
    </main>
  );
};

export default OneBlog;
