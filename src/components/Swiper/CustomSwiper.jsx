import { Swiper, SwiperSlide } from "swiper/react";
import ProdCard from "./../Cards/ProdCard/ProdCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CustomSwiper.scss";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Title from "../Title/Title";

const CustomSwiper = ({text}) => {
  return (
    <div className="custom-swiper">
      <Title>{text}</Title>
      <Link to={"/"}>See All</Link>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProdCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProdCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
