
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import { useSelector } from "react-redux";

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export default function BabyCarosoul() {
  
    const IMAGES = useSelector((state)=>(state.babysDayOut.allBabysDay[0]))
    console.log("fetch",IMAGES);
  
  return (
    <>
        <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} centeredSlides={true} autoplay={{"delay": 2500, "disableOnInteraction": false}} 
            pagination={{"clickable": true }} 
            navigation={true} className="mySwiper">
                {
                    IMAGES.map(item =><SwiperSlide><img src={item.src} width="300px" height="300" alt="" /></SwiperSlide>)
                }
    </Swiper>
    </>
  )
}