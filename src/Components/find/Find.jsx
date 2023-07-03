import React from 'react'
import styles from './Find.module.css'
import Card from './Card';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/navigation'

const Find = () => {
  return (
    <div className={styles.find}>
        <div className={styles.heading}>
          <h1>Find your drive</h1>
            <div className={styles.text_bg}>
              <p>
                <span>Explore the world's largest car sharing market</span>
              </p>
            </div>          
       </div>
       <div className={styles.slider_container}>
       <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      breakpoints={{
        //when window width is >=340px
        340: {
            width:200,
            slidesPerView:1,
        },
        //when window width is >=768px
        768: {
            width:768,
            slidesPerView:4,
        },
        //when window width is >=1040px
        1040: {
            width:1040,
            slidesPerView:5,
        }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?i
            xlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' 
            make='Audi'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1648024958059-783d3ceeab1e?ixlib=rb-4.0.3&ixid=M3wxMj
            A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
            make='Mercedes'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1575568249829-843fb6a55525?ixlib=rb-4.0.3&ixid=M3w
            xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' 
            make='Golf 6'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&ixid=M3wx
            MjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1531&q=80' 
            make='Toyota'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1570274419210-bcbb11aa8f73?ixlib=rb-4.0.3&ixid=M3wxMjA3
            fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' 
            make='Bmw'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=M3wxMjA
            3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' 
            make='Nissan'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1595951280326-8ffa79bdfbc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b
            y1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' 
            make='Ferrari'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://car-images.bauersecure.com/wp-images/151233/grandcherokee_30.jpg' 
            make='Jeep'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1638686302275-0e87df720aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90
            by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' 
            make='Range Rover'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image ='https://images.unsplash.com/photo-1620861943958-fc98832e1713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd
            lfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
            make='Chevrolet'/>
        </SwiperSlide>
    </Swiper>
       </div>
    </div>
  )
}

export default Find