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
import BlogCard from "../Cards/BlogCard/BlogCard";

const CustomSwiper = ({ text, blog }) => {
  return (
    <div className="custom-swiper">
      <Title>{text}</Title>
      <Link className="see-all" to={"/"}>
        See All
      </Link>
      <Swiper
        slidesPerView={blog ? 3 : 4}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
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
        {blog ? (
          <>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
          </>
        ) : (
          <>
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
          </>
        )}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
