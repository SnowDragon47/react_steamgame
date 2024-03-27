import React, { useEffect, useState, useRef} from "react";
import SettingIcon from "../../assets/img/setting_icon.svg";
import { Scrollbar, Mousewheel, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './CardCarousel.css';

const CardCarousel = ({ items, walletAddress }) => {

    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    return(
        <section className="w-full">
            <div className="flex justify-between">
                <span className="font-bebas lg:text-[46px] md:text-[46px] sm:text-[32px]">Tournament and Events</span>
                <div className="flex items-center justify-center">
                    <button  className="carousel__btn carousel__btn--prev" ref={navigationPrevRef}>
                        &lt;
                    </button>
                    <button  className="ml-2 carousel__btn carousel__btn--next" ref={navigationNextRef}>
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
                    breakpoints={{
                        320: {
                        spaceBetween: 20,
                        slidesPerView: 1.2,
                        },
                        468: {
                        spaceBetween: 20,
                        slidesPerView: 1.8,
                        },
                        768: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                        },
                        1024: {
                        spaceBetween: 20,
                        slidesPerView: 2.5,
                        },
                        1280: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                        },
                    }}
                    className="breakpoint"
                    >
                    {items.map((item, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col">
                                <div className="flex grid-rows">
                                    <img  className="min-w-[175px] w-[270px]" src={item.imgUrl} alt="" />
                                    <span className="absolute bg-[#CC402A] text-white p-2 text-[18px] uppercase top-32">tournament</span>
                                </div>
                                
                                <span className="lg:text-[26px] md:text-[26px] sm:text-[26px] uppercase mt-[22px]">tournament name</span>
                                <div className="flex grid-cols gap-[20px] mt-[20px]">
                                    <img src = {SettingIcon}/>
                                    <span className="text-[24px]">35</span>
                                </div>
                                <div className="flex lg:grid-cols md:grid-cols sm:grid-rows gap-[20px] mt-[20px]">
                                    <span className=" p-2 bg-[rgba(255,255,255,0.05)] text-[18px]">Wed 04/10 at 12-30 PM</span>
                                    <span className=" p-2 bg-[rgba(255,255,255,0.05)] text-[18px]">0/300</span>
                                </div>
                                <button className="text-[22px] py-3 my-[20px] uppercase" style={{backgroundColor:!walletAddress ? "#858585": "#CC402A"}} >join</button>
                            </div>
                        </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

        </section>    
    );

};

export default CardCarousel;
