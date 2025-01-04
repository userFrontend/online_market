import { Swiper, SwiperSlide } from "swiper/react";

import Title from "../Title/Title";
import BlogCard from "../Cards/BlogCard/BlogCard";
import ProdCard from "./../Cards/ProdCard/ProdCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CustomSwiper.scss";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const CustomSwiper = ({ text, blog, data }) => {
  return (
    <div className="custom-swiper">
      <Title>{text}</Title>
      {blog ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            750: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
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
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            840: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
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
          {data?.map((el) => {
            return (
              <SwiperSlide key={el.ID}>
                <ProdCard data={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default CustomSwiper;
