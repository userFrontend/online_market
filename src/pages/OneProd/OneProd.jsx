import "./OneProd.scss";
import Rating from "../../components/Rating/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useInfoContext } from "../../context/infoContext";
import { useParams } from "react-router-dom";
import { Icons } from "../../utils/icons";

const Prod = () => {
  const { products } = useInfoContext();
  const prodID = useParams().prodId;

  console.log(prodID);

  const prodOne = products.filter((i) => i.ID == prodID)[0];
  console.log(prodOne.barCode);

  const toggleAccordion = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.parentElement.classList.contains("links"));

    e.target.children[0]?.classList.toggle("open");
    let linkParent = e.currentTarget.parentElement;
    let accardion = e.currentTarget.nextElementSibling;
    let accardionParent = e.currentTarget.parentElement;

    if (linkParent.classList.contains("links")) {
      if (linkParent.style.maxHeight) {
        linkParent.style.maxHeight = null;
      } else {
        linkParent.style.maxHeight = linkParent.scrollHeight + "px";
      }
    }

    if (accardion.style.maxHeight && !linkParent.classList.contains("links")) {
      if (e.target.classList.contains("filter-title")) {
        accardion.style.maxHeight = null;
      } else {
        accardionParent.style.maxHeight = accardionParent.scrollHeight + "px";
        accardion.style.maxHeight = null;
        accardion.style.padding = "0 0 0 0px";
      }
    } else if (!linkParent.classList.contains("links")) {
      if (e.target.classList.contains("filter-title")) {
        accardion.style.maxHeight = accardion.scrollHeight + "px";
      } else {
        accardionParent.style.maxHeight = "max-content";
        accardion.style.padding = "10px 0 10px 0px";
        accardion.style.maxHeight = accardion.scrollHeight + "px";
      }
    }
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="container">
      <div className="prod">
        <div className="left_page">
          <div className="prod__head">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={`../../../public/prods/${prodOne.barCode}.jpg`}
                  alt="img"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="prod__foot">
          <button onClick={onAddToBag}>Add To Bag</button>
        </div> */}
        </div>
        <div className="right_page">
          <h2>{prodOne?.name}</h2>
          <Rating rating={prodOne?.qty} />
          <h2>${prodOne?.priceUSD}</h2>
          <p>{prodOne?.properties?.DESCRIPTION}</p>
          <p>Размер:{prodOne?.properties?.SIZE}</p>
          <h3>РЕКОМЕНДУЕТСЯ ДЛЯ</h3>
          <button className="add-btn">добавить в корзину</button>
          <form className="filter">
            <button type="button" onClick={(e) => toggleAccordion(e)}>
              ЧТО ДЕЛАЕТ ЭТО ХОРОШИМ{" "}
              <Icons.accordionIcon className="button__icon" />
            </button>
            <div className="accordion">
              <p>
                A clear, water-jelly cream with Cherry Blossom and Niacinamide
                that delivers a burst of hydration and glow for visibly
                brighter, dewy skin. Key Ingredients Cherry Blossom Flavonoids:
                visibly soothing Niacinamide: visibly brightening Sugar Beet
                Betaine: hydrating
              </p>
            </div>
            <button type="button" onClick={(e) => toggleAccordion(e)}>
              Ингредиенты
              <Icons.accordionIcon className="button__icon" />
            </button>
            <div className="accordion"></div>
            <button type="button" onClick={(e) => toggleAccordion(e)}>
              How to use <Icons.accordionIcon className="button__icon" />
            </button>
            <div className="accordion"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Prod;
