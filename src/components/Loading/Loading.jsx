import "./swiper-bundle.min.css";
import "./Loading.scss";
import { useEffect } from "react";
import { FreeMode, Mousewheel } from "swiper/modules";
import Swiper from "swiper";

const Loading = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider, index) => {
      new Swiper(slider, {
        freeMode: true,
        centeredSlides: true,
        direction: "vertical",
        slidesPerView: 1.75,
        slidesOffsetBefore: -125,
        mousewheel: false,
        autoplay: {
          delay: 2000 + index * 500, // Har bir slider uchun kechikish
          disableOnInteraction: false,
        },
        loop: true, // Cheksiz aylanish
        modules: [FreeMode, Mousewheel],
      });
    });
  }, []);

  return (
    <div className="main-wrapper">
      <div className="swiper slider slider1">
        <div className="swiper-wrapper slider__wrapper">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="swiper-slide slider__item" key={i}>
              <img
                className="slider__img"
                src={`/images/${i + 1}.jpg` }
              />
            </div>
          ))}
        </div>
      </div>

      <div className="swiper slider slider2">
        <div className="swiper-wrapper slider__wrapper">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="swiper-slide slider__item" key={i}>
              <img
                className="slider__img"
                src={`/images/${i + 7}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="swiper slider slider3">
        <div className="swiper-wrapper slider__wrapper">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="swiper-slide slider__item" key={i}>
              <img
                className="slider__img"
                src={`/images/${i + 13}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="swiper slider slider4">
        <div className="swiper-wrapper slider__wrapper">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="swiper-slide slider__item" key={i}>
              <img
                className="slider__img"
                src={`/images/${21 - i}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
