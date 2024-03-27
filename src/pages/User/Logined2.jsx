import React from "react";
import LoginImg from '../../assets/img/login.jpg';
import Loginbar1 from '../../assets/img/loginbar1.svg';

import ContentHeader from '../../assets/img/content_header.svg';
import ContentFooter from '../../assets/img/content_footer.svg';
import { createButtonGroup } from "@syncfusion/ej2-react-splitbuttons";
import TournamentImg1 from "../../assets/img/tournamentImg1.png";
import GeneralAvatar from "../../assets/img/generaAavatar.svg";
import SteamCard from "../../assets/img/steam_card.svg";
import SteamCardOpen from "../../assets/img/steam_card_open.svg";
import SettingIcon from "../../assets/img/setting_icon.svg";


import Divider from "../../assets/img/divider.svg";
import Logout from "../../assets/img/logout.svg";

import { useCallback, useEffect } from 'react'
import { useSignMessage, useAccount } from 'wagmi'
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


// import MySwiper from "../../components/Swiper/MySwiper";
const NotLogined = () => {
    
    const navigate = useNavigate();
    const { address } = useAccount()
    const { open, close} = useWeb3Modal();
    const onhandleMetaMask = async() => {
      if(address){
        // close();
      }
      open();
    }

    useEffect(() => {
        console.log("------------ address -------------", address)
        if (address) {
            navigate('/user/login', {state: {address: address}})
        }
    }, [address])

    const feturedItems=[
      {
        id: 0,
        imgUrl : TournamentImg1,
        title : "First slide Симулятор выживания Rust получил обновление",
        content : "Игра на выживание Rust от разработчиков Facepunch Studios получила контентное и техническое обновление. Наибольший интерес в нем представляет продолжение развития идей, связанных с железными дорогами.",
        time : "04.03.2024"
      },
      {
        id: 1,
        imgUrl : TournamentImg1,
        title : "2th Slide Симулятор выживания Rust получил обновление",
        content : "Игра на выживание Rust от разработчиков Facepunch Studios получила контентное и техническое обновление. Наибольший интерес в нем представляет продолжение развития идей, связанных с железными дорогами.",
        time : "04.03.2024"
      },
      {
        id: 2,
        imgUrl : TournamentImg1,
        title : "3rd slide Симулятор выживания Rust получил обновление",
        content : "Игра на выживание Rust от разработчиков Facepunch Studios получила контентное и техническое обновление. Наибольший интерес в нем представляет продолжение развития идей, связанных с железными дорогами.",
        time : "04.03.2024"
      },
    ];

    const CardCarsouelItems = [
      {
        id: '0',
        imgUrl : TournamentImg1,
        title : "tournament name",
        amount : 35,
        time : "WED 04/10 AT 12-30 PM",
        remainAmount : "0/300", 
      },
      {
        id: '1',
        imgUrl : TournamentImg1,
        title : "tournament name",
        amount : 35,
        time : "WED 04/10 AT 12-30 PM",
        remainAmount : "0/300", 
      },
      {
        id: '2',
        imgUrl : TournamentImg1,
        title : "tournament name",
        amount : 35,
        time : "WED 04/10 AT 12-30 PM",
        remainAmount : "0/300", 
      },
      {
        id: '3',
        imgUrl : TournamentImg1,
        title : "tournament name",
        amount : 35,
        time : "WED 04/10 AT 12-30 PM",
        remainAmount : "0/300", 
      }
    ];
    return (
      <div>
        <main className="content">
            <div class="main main2">
                <div class="main__video">
                    <img src={LoginImg} alt="" />
                </div>
            </div>
        </main>
        <div className="main_container" style={{zIndex:2, position:"relative"}}>
          <div className="grid lg:grid-cols-11 md:grid-cols-11 sm:grid-rows-12 -my-[15%] lg:h-[1200px] md:h-[1200px] sm:h-[2400px]">
            <div className="lg:col-span-8 md:col-span-8 sm:row-span-4 lg:mt-0 md:mt-0 sm:mt-[1100px]">
              <img src={ContentHeader} alt="" className="featured_header object-fill" />
              <div className="grid grid-rows-12 lg:h-[876px] md:h-[876px] sm:h-[1114px]" style={{backgroundColor:"rgba(255, 255, 255, 0.1)", backdropFilter:"blur(10px)"}}>
                <div className="lg:row-span-4 md:row-span-4 sm:row-span-6 lg:p-[40px] md:p-[20px] sm:p-[20px]">
                    {/* <Carousel items = {feturedItems} /> */}
                    {/* <MySwiper  images={CarouselImg1}/> */}
                </div>
                <div className="row-span-1 lg:mt-10 md:mt-10 sm:mt-0"> 
                  <img src={Divider}/>
                </div>
                <div className="lg:row-span-7 md:row-span-7 sm:row-span-5 lg:p-[40px] md:p-[20px] sm:p-[20px] lg:-mt-5 md:-mt-5 sm:-mt-12">
             
                    <CardCarousel items = {CardCarsouelItems} walletAddress= {address}/>
                </div>
              </div>
              <img src={ContentFooter} alt="" className="featured_footer object-fill" />
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:row-span-5 lg:mt-0 md:mt-0 sm:-mt-[800px]">

              <img src={ContentHeader} alt="" className="featured_header"/>
              <div className="grid gird-rows-12 pb-10 h-[1050px]" style={{backgroundColor:"rgba(255, 255, 255, 0.1)", backdropFilter:"blur(10px)"}}>
                <div className="row-span-1 mx-5 mt-10 h-[100px]">
                  {/* <div className="float-left flex justify-between gap-[10px] p-4" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                    <img className="" src={GeneralAvatar}/>
                    <div className="grid grid-rows-2">
                      <div className="row-span-1 text-2xl">
                        STRAMNAME
                      </div>
                      <div className="row-span-1  text-xl uppercase">
                        {
                          address? localStorage.getItem('steam_id') : "N/A"
                        }
                      </div>
                    </div>
                  </div> */}
                  <div className="grid grid-cols-4 p-4 gap-4" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}> 
                    <div className="col-span-1">
                      <img className="w-[60px] h-[60px]" src={GeneralAvatar}/>
                    </div>
                    <div className="col-span-3 py-2 space-y-2">
                        <div className="text-[22px]">
                          STRAMNAME
                        </div>
                        <div className="text-[16px] uppercase">
                          {
                            address? localStorage.getItem('steam_id') : "N/A"
                          }
                        </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-2 mx-5">
                  <div className="grid grid-cols-12 gap-4" >
                    <div className="col-span-6" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                        <div className="p-4 space-y-2 h-[74px]">
                          <div className="text-[16px]" style ={{color:"#858584"}}>
                             Points
                          </div>
                          <div className="text-[22px]">
                             1203
                          </div>
                        </div>
                    </div>
                    <div className="col-span-6" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                        <div className="p-4 space-y-2 h-[74px]">
                          <div className="text-[16px]" style ={{color:"#858584"}}>
                             Rank
                          </div>
                          <div className="text-[22px]">
                             6
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                {address? 
                  <div className="row-span-1 flex justify-center items-center text-[18px] p-2 mx-5 h-[32px]" style={{border:"1px solid #CC402A"}}>
                      <button className="uppercase flex gap-5" onClick={onhandleMetaMask}>
                        <img src={Logout}/>
                        <span>disconnect wallet</span>
                      </button>
                    
                  </div>
                  :
                  <div className="row-span-1 flex justify-center items-center text-[18px] p-2 mx-5 h-[32px]" style={{backgroundColor:"#CC402A"}}>
                      <button className="uppercase flex gap-5" onClick={onhandleMetaMask}>
                        <img src={Logout}/>
                        <span>CONNECT WALLET</span>
                      </button>
                  </div>
                }
                
                <div className="row-span-2 py-5">
                  <img src={Divider}/>
                </div>
                <div className="row-span-2 text-center text-[26px] ">
                  <span>
                    My current season Pass
                  </span>
                </div>
                <div className="row-span-1 text-center text-[22px] p-3 mx-5 uppercase h-[42px]" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                {
                  address?
                  <span className="">tier1</span>
                  :
                  <span className="">N/A</span>
                }
                </div>
                
                <div className="row-span-1 flex justify-center items-center px-20">
                  {address?
                    <img className = "" src={SteamCardOpen}/> :<img className = "" src={SteamCard}/>
                  }
                </div>
                <div className="row-span-1 mx-5 mt-2 text-center text-[22px] p-4 h-[56px]" style={ address? {backgroundColor:"#CC402A"}
                 :{backgroundColor:"#858585"}}>
                  <button>UPGRADE</button>
                </div>
                {
                  address?
                  <div className="row-span-1 flex justify-center mx-36">
                    <img src = {SettingIcon} className= "w-[20px] h-[20px]"/>
                    <sapn className= "ml-2 text-[22px]">120</sapn>
                  </div>
                  :
                  <div></div>
                }
                <div className="row-span-2 py-5">
                  <img src={Divider}/>
                </div>
                <div className="row-span-1 text-center text-[26px]">
                  SCRAP AVAILABLE
                </div>
                <div className="row-span-1 text-center text-[22px] p-2 mx-5 h-[42px]" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                  {
                    address?
                    <span className="">45200</span>
                    :
                    <span className="">N/A</span>
                  }
                </div>
                <div className="row-span-1 mx-5 text-center text-[22px] p-4 h-[56px]" style={address? {backgroundColor:"#CC402A"}:{backgroundColor:"#858585"}}>
                  <button>CLAIM</button>
                </div>
              </div>
              <img src={ContentFooter} alt="" className="featured_footer"/>
            </div>
          </div>
        </div>
      </div>
    );
}
export default NotLogined