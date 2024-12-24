import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.scss";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
    const slides = [
      {
        title: "Discover your inner beauty with Blossom Glow Kit",
        description: "Great gift for yourself and loved ones",
        buttonText: "Shop now",
        image: "images/bg2.jpg",
      },
      {
        title: "Experience the magic of our skincare collection",
        description: "Tailored just for you",
        buttonText: "Explore more",
        image: "images/bg1.jpg",
      },
      {
        title: "Glow naturally with our organic products",
        description: "Feel beautiful every day",
        buttonText: "Start shopping",
        image: "images/bg.jpg",
      },
    ];
  
    return (
      <section className="hero">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
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
