import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Teams.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { WebDevelopment } from "../data/WebDevelopment";
import { GameDevelopment } from "../data/GameDevelopment";
import { AppDevelopment } from "../data/AppDevelopment";
import { MachineLearning } from "../data/MachineLearning";
import { Blockchain } from "../data/Blockchain";

function Card({ image_url, name, description, id }) {
  return (
    <div className="container sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div className="card bg-gray-500 p-4 m-2 rounded-lg shadow-lg">
        <div className="content">
          <div className="imgBx">
            <img src={image_url} alt={name} className="w-full h-auto" />
          </div>
          <div className="contentBx mt-2">
            <h3 className="text-red-500 text-lg font-semibold">
              {name}
              <br />
              <span className="text-blue-500 text-sm">{description}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Team() {
  return (
    <section className="bg-gradient-to-r from-violet-300 to-violet-400">
      <div className="row">
        <h1 className="text-center text-4xl md:text-5xl lg:text-5xl font-bold">
          Our Team
        </h1>
      </div>
      <div className="row">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Web Development
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {WebDevelopment.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card
              image_url={item.image_url}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pb-2">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Game Development
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {GameDevelopment.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card
              image_url={item.image_url}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="row backgroundRocket">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          App Development
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {AppDevelopment.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card
              image_url={item.image_url}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="row back">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Machine Learning
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {MachineLearning.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card
              image_url={item.image_url}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="row backblock">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Blockchain
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Blockchain.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Card
              image_url={item.image_url}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
