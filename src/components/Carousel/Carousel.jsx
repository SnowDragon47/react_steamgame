import React, {useEffect, useState, useRef} from "react";
import { Scrollbar, Mousewheel, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';
const Carousel = ({items, interval =5000}) => {

    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    return (
        <div className="w-full">
            <div className="flex justify-between">
                <span className="font-bebas lg:text-[46px] md:text-[46px] sm:text-[32px]">featured</span>
                <div className="flex items-center">
                    <button  className="carousel__btn carousel__btn--prev">
                        &lt;
                    </button>
                    <button  className="ml-2 carousel__btn carousel__btn--next">
                        &gt;
                    </button>
                </div>
            </div>
            <div className="flex mt-[20px]">
                <Swiper
                    modules={[Scrollbar, Mousewheel, Autoplay, Navigation]}
                    loop={true}
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    grabCursor={true}
                    scrollbar={{ draggable: true }}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    mousewheel={{
                        invert: false,
                    }}
                    autoplay={{
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.navigation.nextEl = navigationNextRef.current;
                        swiper.navigation.prevEl = navigationPrevRef.current;
                    }}
                    >
                        {items.map((item, index) => {
                            return (
                            <SwiperSlide key={index}>
                                <div className="flex lg:flex-row md:flex-row sm:flex-col">
                                    <div className="flex justify-center text-center">
                                        <img src = {item.imgUrl} alt={`Slide ${index}`} className="max-w-[320px] w-[270px] "/>

                                    </div>
                                    <div className=" my-[5px] lg:ml-[20px] md:ml-[20px] sm:ml-0">
                                        <span className="float-left text-[32px] text-justify break-all">{item.title}</span>
                                        <span className="float-left text-[16px] text-justify break-all mt-[10px]">{item.content}</span>
                                        <span className="float-left text-[18px] text-justify break-all bg-white bg-opacity-5 p-2 mt-[10px]">
                                            {item.time}
                                        </span>    
                                    </div>
                                </div>
                            </SwiperSlide>
                                
                            );
                        })}
                </Swiper>
            </div>
            
         </div>
            
    );
}

export default Carousel