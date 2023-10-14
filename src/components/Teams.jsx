import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { WebDevelopment } from '../data/WebDevelopment';
import {GameDevelopment} from '../data/GameDevelopment';
import { AppDevelopment } from '../data/AppDevelopment';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Teams.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MachineLearning } from '../data/MachineLearning';
import { Blockchain } from '../data/Blockchain';

function Card({ image_url, name, description, id}) {
    return (
      
     <div className="container"> 
      <div className='card'>
        <div className='content'>
          <div className='imgBx'>
          <img src={image_url} />
          </div>
          <div className='contentBx'>
            <h3 style={{color:'red'}}>{name}<br /><span style={{color:'blue'}}>{description}</span></h3>
          </div>
        </div>
      </div>
      </div>
      
    )
  }

export default function Teams() {
  
  return (
    <section style={{backgroundColor:'#fff'}}>
      <div className='row'>
        <h1>Our Team</h1>
        </div>
        <div className='row'>
        <h1>Web Development</h1>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {WebDevelopment.map((item,index) => (
        <SwiperSlide><Card image={item.image_url} name={item.name} description={item.description} /></SwiperSlide>
        ))}
        
      </Swiper>
      <div className='row'>
        <h1>Game Development</h1>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {GameDevelopment.map((item,index) => (
        <SwiperSlide><Card image={item.image_url} name={item.name} description={item.description} /></SwiperSlide>
        ))}
        
      </Swiper>
      <div className='row backgroundRocket'>
        <h1 >App Development</h1>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {AppDevelopment.map((item,index) => (
        <SwiperSlide><Card image={item.image_url} name={item.name} description={item.description} /></SwiperSlide>
        ))}
        
      </Swiper>
      <div className='row back'>
        <h1>Machine Learning</h1>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {MachineLearning.map((item,index) => (
        <SwiperSlide><Card image={item.image_url} name={item.name} description={item.description} /></SwiperSlide>
        ))}
        
      </Swiper>
      <div className='row backblock'>
        <h1>Blockchain</h1>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Blockchain.map((item,index) => (
        <SwiperSlide><Card image={item.image_url} name={item.name} description={item.description} /></SwiperSlide>
        ))}
        
      </Swiper>
    </section>
  );
}
                                  