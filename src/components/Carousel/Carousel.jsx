import React, {useEffect, useState} from "react";
import './Carousel.css';

const CarouselIndicators = ({ images, activeIndex, onClick }) => {
    return (
      <div className="carousel__indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel__indicator ${
              index === activeIndex ? 'active' : ''
            }`}
            onClick={() => onClick(index)}  
          />
        ))}
      </div>
    );
  };
const Carousel = ({images, tournamentTitle, interval =3000}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect (()=>{
        const autoPlayInterval = setInterval(nextSlide, interval);
        return () => {
        clearInterval(autoPlayInterval);
        };
    }, [interval]);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const goToSlide = (index) => {
        setActiveIndex(index);
      };
    return (
        <div className="carousel">
            <div className="grid">
                <span className="grid justify-items-start font-bebas text-4xl">FEATURED</span>
                <div className="grid justify-items-end -mt-6">
                    <div class="flex items-center">
                        <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                            &lt;
                        </button>
                    
                        <button onClick={nextSlide} className="ml-2 carousel__btn carousel__btn--next">
                            &gt;
                        </button>
                    </div>
                    
                </div>
            </div>
            
            <div className="grid lg:grid-cols-6 sm:grid-cols-6 ssm:grid-rows-4 gap-5">
                <div className="lg:col-span-2 sm:col-span-2 ssm:row-span-2">
                    <img
                    className="lg:w-[270px] sm:w-[270px] ssm:w-[320px] lg:h-[186px] sm:h-[186px] ssm:h-[220px]"
                        src={images[activeIndex]}
                        alt={`Slide ${activeIndex}`}
                    />
                </div>
                <div className="lg:col-span-4 sm:col-span-4 ssm:row-span-2 lg:mt-0 sm:mt-0 ssm:-mt-10">
                    <div className="grid grid-rows-3 gap-1">
                        <div className="text-2xl row-span-1">
                            <span className="float-left uppercase">{tournamentTitle[activeIndex]}</span>
                        </div>
                        <div className="text-sm row-span-1 lg:mt-0 sm:mt-0 ssm:-mt-2">
                            <span className="float-left text-left">
                                Игра на выживание Rust от разработчиков Facepunch Studios получила контентное и техническое обновление. Наибольший интерес в нем представляет продолжение развития идей, связанных с железными дорогами.
                            </span>
                        </div>
                        <div className="text-xl row-span-1">
                            <span className="float-left featured_time">
                                04.03.2024
                            </span>
                        </div>
                    </div>
                </div>   
            </div>
            <CarouselIndicators
                images={images}
                activeIndex={activeIndex}
                onClick={goToSlide}
            />
        </div>
    );
}

export default Carousel