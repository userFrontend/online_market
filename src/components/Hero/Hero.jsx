import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "./Hero.scss";

const Hero = () => {
    const slides = [
        {
          title: "Откройте свою внутреннюю красоту с набором Blossom Glow",
          description: "Прекрасный подарок для вас и ваших близких",
          buttonText: "Купить сейчас",
          image: "images/bg2.jpg",
        },
        {
          title: "Испытайте магию нашей коллекции средств по уходу за кожей",
          description: "Создано специально для вас",
          buttonText: "Узнать больше",
          image: "images/bg1.jpg",
        },
        {
          title: "Сияйте естественно с нашими органическими продуктами",
          description: "Чувствуйте себя красивой каждый день",
          buttonText: "Начать покупки",
          image: "images/bg.jpg",
        },
      ];
      
    return (
      <section className="hero">
        <Swiper
          modules={[Mousewheel, Pagination, Autoplay]}
          mousewheel={{ invert: true }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="hero__swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="hero__slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="hero__image" />
            <div className="container hero__container">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button>{slide.buttonText}</button>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

export default Hero;
