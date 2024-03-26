import React, {useEffect, useState} from "react";

import './Carousel.css';

const Carousel = ({items, interval =5000}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    useEffect(() => {
        const autoPlayInterval = setInterval(() => {
            nextSlide(); // Directly go to the next slide
        }, interval);

        return () => {
            clearInterval(autoPlayInterval);
        };
        // Removed the activeIndex dependency to prevent resetting the timer unnecessarily
    }, [interval]);

    const nextSlide = () => {
        setSlideIn(false); // Begin to slide out
        setTimeout(() => {
            setActiveIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
            setSlideIn(true); // After state is set, start sliding in
        }, 250); // Match this timeout with your CSS transition duration
    };

    const prevSlide = () => {
        setSlideIn(false); // Begin to slide out
        setTimeout(() => {
            setActiveIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
            setSlideIn(true); // After state is set, start sliding in
        }, 250); // Match this timeout with your CSS transition duration
    };
  
    return (
        <div className="carousel">
            <div className="flex justify-between">
                <span className="font-bebas text-[46px]">FEATURED</span>
                <div class="flex items-center mt-4">
                    <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                        &lt;
                    </button>
                    <button onClick={nextSlide} className="ml-2 carousel__btn carousel__btn--next">
                        &gt;
                    </button>
                </div>
            </div>
            
            <div className={`carousel__slide ${slideIn ? 'carousel__slide-enter' : 'carousel__slide-exit'} grid lg:grid-cols-6 md:grid-cols-6 sm:grid-rows-4 gap-2`}>
                <div className="lg:col-span-2 md:col-span-2 sm:row-span-2 items-center">
                    <img
                    className="lg:w-[270px] sm:w-[320px]"
                        src={items[activeIndex]['imgUrl']}
                        alt={`Slide ${activeIndex}`}
                    />
                </div>
                <div className="lg:col-span-4 md:col-span-4 sm:row-span-2 py-2 lg:mt-0 mmd:mt-0 md:mt-0 sm:-mt-8">
                    <div className="grid grid-rows-6">
                        <span className="row-span-2 float-left text-[32px] uppercase break-all">
                            {items[activeIndex]['title']}
                        </span>
                        <span className="row-span-2 float-left text-[16px] break-all mt-2">
                            {items[activeIndex]['content']}
                        </span>
                        <div className="row-span-2">
                            <span className=" float-left text-[18px] bg-white bg-opacity-5 p-2 my-2">
                                {items[activeIndex]['time']}
                            </span>
                        </div>
                    </div>
                    
                </div>   
            </div>
        </div>
    );
}

export default Carousel