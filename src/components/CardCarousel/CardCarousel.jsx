import React, {useEffect, useState} from "react";
import './CardCarousel.css';
import { Badge } from "react-bootstrap";
import SettingIcon from '../../assets/img/setting_icon.svg';
import { useNavigate } from "react-router-dom";
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
const CardCarousel = ({images, tournamentTitle, joinFlag, walletAddress, interval =3000}) => {
    const navigate = useNavigate();
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
    const onDetailTournamentCard = (cardId) =>
    {
        // navigate('/user/detailTournament', {state: {cardId: cardId}},{replace: true});
    }
    return (
        <div className="carousel">
            <div className="gird">
                <span className="grid justify-items-start font-bebas text-4xl lg:w-[100%] sm:w-[100%] ssm:w-[50%]">TOURNAMENT AND EVENTS</span>
                <div className="grid justify-items-end lg:-mt-6 sm:-mt-6 ssm:-mt-10">
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
            <div className="grid grid-cols-3 lg:gap-8 sm:gap-8 ssm:gap-48 lg:w-[880px] sm:w-[880px] ssm:w-[320px]">
                <div className="col-span-1 grid grid-rows-12 gap-2 lg:w-[270px] sm:w-[270px] ssm:w-[175px]" >
                    <img
                        className="row-span-5"
                        src={images[activeIndex]}
                        alt={`Slide ${activeIndex}`}
                    />
                    <div className="row-span-1 lg:text-xl sm:text-xl ssm:text-sm absolute text-center mr-24 lg:mt-36 sm:mt-36 ssm:mt-20 lg:px-4 sm:px-4 ssm:px-2" style={{backgroundColor:"#CC402A"}}>TOURNAMENT</div>
                    <div className="row-span-1 lg:text-2xl sm:text-2xl ssm:text-xl lg:mt-0 sm:mt-0 ssm:-mt-56"><span className="float-left">TOURNAMENT NAME</span></div>
                    <div className="row-span-1 text-xl lg:mt-0 sm:mt-0 ssm:-mt-64"><img src = {SettingIcon} className= "float-left"/><sapn className= "float-left ml-2 -mt-1">35</sapn></div>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-4 ssm:grid-rows-2 lg:text-lg sm:text-lg ssm:text-sm h-[30px] lg:gap-4 sm:gap-4 ssm:gap-12 lg:mt-0 sm:mt-0 ssm:-mt-72">
                        <div className="lg:col-span-3 sm:col-span-3 ssm:row-span-1 text-center h-[30px] p-2" style = {{backgroundColor:"rgba(255,255,255,0.05)"}}>Wed 04/10 at 12-30 PM</div>
                        <div className="lg:col-span-1 sm:col-span-1 ssm:row-span-1 text-center h-[30px] p-2" style = {{backgroundColor:"rgba(255,255,255,0.05)"}}>0/300</div>
                    </div>
                    <div className="row-span-3 lg:text-2xl sm:text-2xl ssm:text-xl lg:mt-4 sm:mt-4 ssm:-mt-64">
                        <button className="w-[100%] p-3" style={{backgroundColor: !walletAddress ? "#858585": "#CC402A"}} onClick={onDetailTournamentCard("asds")}>JOIN</button>
                    </div>
                </div>
                <div className="col-sapn-1 grid grid-rows-12 gap-2 lg:w-[270px] sm:w-[270px] ssm:w-[175px]">
                    <img
                        className="row-span-5"
                        src={images[activeIndex]}
                        alt={`Slide ${activeIndex}`}
                    />
                    <div className="row-span-1 lg:text-xl sm:text-xl ssm:text-sm absolute text-center mr-24 lg:mt-36 sm:mt-36 ssm:mt-20 lg:px-4 sm:px-4 ssm:px-2" style={{backgroundColor:"#CC402A"}}>TOURNAMENT</div>
                    <div className="row-span-1 lg:text-2xl sm:text-2xl ssm:text-xl lg:mt-0 sm:mt-0 ssm:-mt-56"><span className="float-left">TOURNAMENT NAME</span></div>
                    <div className="row-span-1 text-xl lg:mt-0 sm:mt-0 ssm:-mt-64"><img src = {SettingIcon} className= "float-left"/><sapn className= "float-left ml-2 -mt-1">35</sapn></div>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-4 ssm:grid-rows-2 lg:text-lg sm:text-lg ssm:text-sm h-[30px] lg:gap-4 sm:gap-4 ssm:gap-12 lg:mt-0 sm:mt-0 ssm:-mt-72">
                        <div className="lg:col-span-3 sm:col-span-3 ssm:row-span-1 text-center h-[30px] p-2" style = {{backgroundColor:"rgba(255,255,255,0.05)"}}>Wed 04/10 at 12-30 PM</div>
                        <div className="lg:col-span-1 sm:col-span-1 ssm:row-span-1 text-center h-[30px] p-2" style = {{backgroundColor:"rgba(255,255,255,0.05)"}}>0/300</div>
                    </div>
                    <div className="row-span-3 lg:text-2xl sm:text-2xl ssm:text-xl lg:mt-4 sm:mt-4 ssm:-mt-64">
                        <button className="w-[100%] p-3" style={{backgroundColor:!walletAddress ? "#858585": "#CC402A"}}>JOIN</button>
                    </div>
                </div>
                <div className="col-span-1 grid grid-rows-12 gap-2 lg:w-[270px] sm:w-[270px] ssm:w-[175px]">
                    <img
                        className="row-span-5"
                        src={images[activeIndex]}
                        alt={`Slide ${activeIndex}`}
                    />
                    <div className="row-span-1 lg:text-xl sm:text-xl ssm:text-sm absolute text-center mr-24 lg:mt-36 sm:mt-36 ssm:mt-20 lg:px-4 sm:px-4 ssm:px-2" style={{backgroundColor:"#CC402A"}}>TOURNAMENT</div>
                    
                    <div className="row-span-1 text-2xl"><span className="float-left">TOURNAMENT NAME</span></div>
                    <div className="row-span-1 text-xl"><img src = {SettingIcon} className= "float-left"/><sapn className= "float-left ml-2 -mt-1">35</sapn></div>
                    <div className="grid grid-cols-4 text-lg h-[30px] gap-4">
                        <div className="col-span-3 text-center h-[30px] p-2" style = {{backgroundColor:"rgba(255,255,255,0.05)"}}>Wed 04/10 at 12-30 PM</div>
                        <div className="col-span-1 text-center h-[30px] p-2" style = {{backgroundColor:"rgba(255,255,255,0.05)"}}>0/300</div>
                    </div>
                    <div className="row-span-3 text-2xl mt-4">
                        <button className="w-[100%] p-3" style={{backgroundColor:!walletAddress ? "#858585": "#CC402A"}}>JOIN</button>
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

export default CardCarousel