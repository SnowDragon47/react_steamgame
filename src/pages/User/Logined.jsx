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
        <div className="main_container z-10 relative" >
            <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse justify-center -my-[15%]">
                <div className="lg:w-[70.45%] md:w-[70.45%] sm:w-[100%]">
                  <img src={ContentHeader} className="featured_header"/>
                  <div  className="flex flex-col" style={{backgroundColor:"rgba(255, 255, 255, 0.1)", backdropFilter:"blur(10px)"}}>
                    <div className="lg:m-[40px] md:m-[40px] sm:m-[20px]">
                      <Carousel items = {feturedItems}/>
                    </div>
                    <img src={Divider} className=""/>
                    <div className="lg:m-[40px] md:m-[40px] sm:m-[20px]">
                      <CardCarousel items = {CardCarsouelItems} walletAddress= {address}/>
                    </div>
                  </div>
                  <img src={ContentFooter}/>
                
                </div>
                <div className="lg:w-[27.27%] md:w-[27.27%] sm:w-[100%] lg:ml-[30px] md:ml-[30px] sm:ml-0">
                  <img src={ContentHeader} alt="" className="featured_header"/>
                  <div className="flex flex-col" style={{backgroundColor:"rgba(255, 255, 255, 0.1)", backdropFilter:"blur(10px)"}}>
                    <div className="flex flex-row p-4 mx-[20px] mt-[40px] mb-[20px]" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                      <div className="w-[25%]">
                        <img className="w-[60px] h-[60px]" src={GeneralAvatar}/>
                      </div>
                      <div className="w-[75%]">
                          <div className="flex flex-col py-2 space-y-2 px-2">
                            <span className="text-[22px] uppercase">steamname</span>
                            <span className="text-[16px] uppercase">{address? localStorage.getItem('steam_id') : "N/A"}</span>
                          </div>
                      </div>
                    </div>
                    <div className="flex grid-cols gap-[20px] mx-[20px]" >
                      <div className= "w-[100%]" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                        <div className="flex flex-col py-2 space-y-2 px-4">
                          <span className="text-[16px] text-[#858584]">Points</span>
                          <span className="text-[22px]">1203</span>
                        </div>
                      </div>
                      <div className= "w-[100%]" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                        <div className="flex flex-col py-2 space-y-2 px-4">
                          <span className="text-[16px] text-[#858584]">Rank</span>
                          <span className="text-[22px]">6</span>
                        </div>
                      </div>
                    </div>
                    {
                      address ?
                      <button className="flex justify-center items-center text-[18px] border border-solid border-[#CC402A] uppercase  py-2 m-[20px] gap-2" onClick={onhandleMetaMask}>
                          <img src={Logout}/>
                          <span>disconnect wallet</span>
                      </button> :
                      <button className="flex justify-center items-center text-[18px] bg-[#CC402A] uppercase py-2 m-[20px] gap-2" onClick={onhandleMetaMask}>
                          <img src={Logout}/>
                          <span>connect wallet</span>
                      </button>
                    }
                    <img src={Divider}/>
                    <span className="flex justify-center items-center text-[26px] m-[20px]">My current season Pass</span>
                    <div className="flex justify-center items-center text-[22px] uppercase p-2 mx-[20px]" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>{address? "tier1" : "n/a" }</div>
                    <div className="flex justify-center items-center my-[4px]">
                      <img src={address? SteamCardOpen : SteamCard}/>
                    </div>
                    <div className="flex justify-center items-center text-[22px] p-4 mx-[20px] uppercase" style={ address? {backgroundColor:"#CC402A"}
                 :{backgroundColor:"#858585"}}>
                        <span>upgrade</span>
                    </div>
                    {
                      address?
                      <div className="flex justify-center items-center m-[20px]">
                        <img src={SettingIcon} className="w-[20px]"/> 
                        <span className="uppercase text-[22px] ml-2 ">120</span>
                      </div>:
                      <div>
                      </div>
                    }
                    <img src={Divider}/>
                    <span className="flex justify-center items-center text-[26px] uppercase m-[20px]">scarp available</span>
                    <div className="flex justify-center items-center text-[22px] uppercase p-2 mx-[20px]" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>{address? "45200" : "n/a" }</div>
                    <div className="flex justify-center items-center text-[22px] p-4 mx-[20px] mb-[40px] mt-[20px] uppercase" style={ address? {backgroundColor:"#CC402A"}
                 :{backgroundColor:"#858585"}}>
                        <span>claim</span>
                    </div>
                  </div>
                  <img src={ContentFooter} className=""/>
                </div>
            </div>
        </div>
      </div>
    );
}
export default NotLogined