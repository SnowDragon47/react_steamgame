import React, { useEffect, useState, useRef} from "react";
import SettingIcon from "../../assets/img/setting_icon.svg";
import './CardCarousel.css';

const CardCarousel = ({ items, walletAddress }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [animationClass, setAnimationClass] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);
    const [startPos, setStartPos] = useState(0);
    const [currentPos, setCurrentPos] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);

    const carouselRef = useRef(null);

    const nextSlide = () => {
        setAnimationClass("slide-out-animation");
        
        setTimeout(() => {
            let increment = 3;
            if (activeIndex + 3 >= items.length) { 
                increment = items.length % 3; // Cycle through the remaining items
                increment = increment === 0 ? 3 : increment; // Ensure we cycle at least one item if we're at the end
            }
            
            setActiveIndex((prevIndex) =>
                prevIndex + increment >= items.length ? 0 : prevIndex + increment
            );
            setAnimationClass("slide-in-animation");
        }, 500);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, [items.length, activeIndex]);

    const prevSlide = () => {
        setAnimationClass("slide-out-animation");
    
        setTimeout(() => {
            setActiveIndex((prevIndex) => {
                let newIndex = prevIndex - 3;
                if (newIndex < 0) {
                    newIndex = items.length - ((items.length - newIndex) % items.length);
                }
                return newIndex;
            });
            setAnimationClass("slide-in-animation");
        }, 500);
    };
    const dragStart = (e) => {
        setIsDragging(true);
        setStartX(e.clientX); // Use clientX for relative to viewport position
        setStartScrollLeft(carouselRef.current.scrollLeft);
        };

    const dragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.clientX; // Get current mouse X position
        const walk = x - startX; // Distance mouse has moved during drag
        carouselRef.current.scrollLeft = startScrollLeft - walk;
    };

    const dragStop = () => {
        setIsDragging(false);
    };

    const handleCardHover = (cardId) => {
        setHoveredCard(cardId);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
    };
    
    const onDetailTournamentCard = (cardId) =>
    {
        // navigate('/user/detailTournament', {state: {cardId: cardId}},{replace: true});
    }
    

    return (
        <div className="carousel w-full">
            <div className="flex justify-between">
                <span className="font-bebas text-[46px]">Tournament and Events</span>
                <div className="flex items-center mt-4">
                    <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
                        &lt;
                    </button>
                    <button onClick={nextSlide} className="ml-2 carousel__btn carousel__btn--next">
                        &gt;
            
                    </button>
                </div>
            </div>

            <div className={`flex justify-between overflow-x-auto overflow-y-hidden card-carousel-container ${isDragging ? 'dragging' : ''} gap-[24px]`}
                ref={carouselRef}
                onMouseDown={dragStart}
                onMouseMove={dragging}
                onMouseUp={dragStop}
                onMouseLeave={dragStop}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={` card-container ${index < activeIndex || index >= activeIndex + 3 ? 'hidden' : ''}`}
                        // onMouseEnter={() => handleCardHover(product.id)}
                        onMouseLeave={handleCardLeave}
                    >
                            <div className="relative row-span-5">
                                <img
                                    className="full-width-image w-[100%]"
                                    src={item.imgUrl}
                                    alt={`Slide ${index}`}
                                />
                                <div className="absolute bottom-4 left-0 bg-[#CC402A] text-white p-2 text-[18px]">
                                    TOURNAMENT
                                </div>
                            </div>
                            <div className="row-span-1 lg:text-[24px] sm:text-[18px] mt-2">
                                <span>TOURNAMENT NAME</span>
                            </div>
                            <div className="row-span-1 flex items-center space-x-2 mt-2">
                                <img src={SettingIcon} alt="Settings" />
                                <span className="text-xl">35</span>
                            </div>
                            <div className="grid lg:grid-cols-4 md:grid-rows-2 text-center text-xl md:text-lg lg:gap-4 md:gap-4 mt-2">
                                <div className="lg:col-span-3 md:row-span-1 bg-[rgba(255,255,255,0.05)] p-2">
                                    Wed 04/10 at 12-30 PM
                                </div>
                                <div className="lg:col-span-1 md:row-span-1 bg-[rgba(255,255,255,0.05)] p-2 text-center lg:mt-0 sm:mt-2">
                                    0/300
                                </div>
                            </div>
                            <button
                                className={`row-span-2 w-full py-3 text-[22px] mt-2`}
                                style={{backgroundColor:!walletAddress ? "#858585": "#CC402A"}}
                                onClick={() => onDetailTournamentCard(item.id)}
                            >
                                JOIN
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CardCarousel;
