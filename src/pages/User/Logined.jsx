import React from "react";
import LoginImg from '../../assets/img/login.jpg';
import Loginbar1 from '../../assets/img/loginbar1.svg';
import Carousel from "../../components/Carousel/Carousel";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
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
    const CarouselImg1 = [
      TournamentImg1,
      TournamentImg1
    ];
    const TournamentTitle = [
      "Симулятор выживания Rust получил обновление",
      "123456789"
    ];
    return (
      <div>
        <main className="content">
            <div class="main main2">
                <div class="main__video">
                    <img src={LoginImg} alt="" />
                </div>
<<<<<<< HEAD
=======
            </main> 
            <div className="login">  

                <img src={Loginbar1} alt="" className="login_bar1"/>
                <div className="login_container">

                    <div className="artist_card">
                        <tbody>
                            <tr>
                                <td>
                                    <img src={LoginInfoCard} className="login_info_card"/>
                                </td>
                                <td>
                                    <tr className="back_content_number">
                                        <td>
                                            <img src={ArtistAvatar} width={40}/>
                                        </td>
                                        <td>
                                            <tr>
                                                <text className="font_work_sans ml-2">
                                                    Wallet
                                                </text>
                                            </tr>
                                            <tr>
                                                <div className="wallet_number">
                                                    0X....4888
                                                </div>   
                                            </tr>
                                            
                                        </td>
                                    </tr>
                                    <tr className="back_content_claim">
                                        <td>
                                            <tr>
                                                <text className="font_work_sans">
                                                    Available To Claim
                                                </text>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <text className="text10" style={{marginLeft:"-80%"}}>
                                                        Total:
                                                    </text>
                                                </td>
                                                <td>
                                                    <text className="text14" style={{marginLeft:"-90%"}}>
                                                        1203 SCRP
                                                    </text>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    <tr className="wallet_btn_red_claim">
                                        <td>
                                            <text className="font_work_sans ml-2">
                                                CLAIM
                                            </text>
                                        </td>
                                    </tr>
                                    
                                </td>
                                <td>
                                    <tr className="back_content_address">
                                        <td>
                                            <img src={ArtistAvatar1} width={40}/>
                                        </td>
                                        <td>
                                            <tr>
                                                <text className="font_work_sans ml-2">
                                                    Wallet Address
                                                </text>
                                            </tr>
                                            <tr>
                                                <button className="wallet_address">
                                                75651198042333132
                                                </button>
                                            </tr>
                                            
                                        </td>
                                    </tr>
                                    <tr className="back_content_tier">
                                        <td>
                                            <tr>
                                                <text className="font_work_sans">
                                                    Current Tier
                                                </text>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <text className="text10" style={{marginLeft:"-50%"}}>
                                                        Pool access:
                                                    </text>
                                                </td>
                                                <td>
                                                    <text className="text14">
                                                        Tier 1
                                                    </text>
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                    
                                    <tr className="wallet_btn_red_upgrade">
                                        <td>
                                            <text className="font_work_sans ml-2">
                                                UPGRADE
                                            </text>
                                        </td>
                                    </tr>
                                </td>
                            </tr>
                        </tbody>
                    </div>
                </div>
                <div className="logined_user_list">
                    <img src={LoginBetweenImg} className="login_between_bar"/>
                    <table className="user_table">
                        <tbody className="table_body">
                            <tr className="table_header">
                                <td className="ml-4 rank text18">
                                    <text>#</text>
                                </td>                  
                                <td className="ml-2">    
                                    <text>Player</text>
                                </td>
                                <td className="ml-24 tier">
                                    <text>Tier</text>
                                </td>
                                <td className="ml-12 server">
                                <text>
                                        Server
                                    </text>
                                </td>
                                <td className="ml-8 point">
                                    <text >Points earned
                                    </text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="ml-4 rank text18">
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">1</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar} width={40} className="user_avatar"/>
                                    <text className="userInfo font_work_sans user_name">Jaydon Ekstrom Bothman</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo server">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo point">18000</text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="text18 ml-4 rank">
                                    
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">2</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar1} width={40} className="user_avatar"/>
                                    <text className="userInfo font_work_sans user_name">Ruben Carder</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo server">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo point">15265</text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="text18 ml-4 rank">
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">3</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar2} width={40} className="user_avatar"/>
                                    <text className="userInfo font_work_sans user_name">Alfredo Septimus</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo server">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo point">15120</text>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <img src={Loginbar3} alt="" className="login_bar3"/>

>>>>>>> c413d69c3885a23c6aa6eb4b6dcd1a527fc284ec
            </div>
        </main>
        <div className="container" style={{zIndex:2, position:"relative"}}>
          <div className="grid lg:grid-cols-12 sm:grid-rows-12 ssm:grid-rows-12 -my-[15%] lg:h-[1200px] sm:h-[2400px] ssm:h-[2400px]">
            <div className="lg:col-span-9 sm:row-span-4 ssm:row-span-4 lg:w-[930px] sm:w-[930px] ssm:w-[360px] -ml-6 lg:mt-0 sm:mt-[1080px] ssm:mt-[1080px] lg:mx-0 sm:mx-12 ssm:mx-2">
              <img src={ContentHeader} alt="" className="featured_header" />
              <div className="grid grid-rows-12 lg:h-[876px] sm:h-[876px] ssm:h-[1114px]" style={{backgroundColor:"rgba(255, 255, 255, 0.1)", backdropFilter:"blur(10px)"}}>
                <div className="lg:row-span-4 sm:row-span-4 ssm:row-span-6 lg:p-8 sm:p-8 ssm:p-5">
                    <Carousel images = {CarouselImg1} tournamentTitle = {TournamentTitle}/>
                </div>
                <div className="row-span-1 lg:mt-10 sm:mt-10 ssm:mt-5"> 
                  <img src={Divider}/>
                </div>
                <div className="lg:row-span-7 sm:row-span-7 ssm:row-span-5 lg:p-8 sm:p-8 ssm:p-5 lg:-mt-5 sm:-mt-5 ssm:-mt-12">
                    <CardCarousel images = {CarouselImg1} tournamentTitle = {TournamentTitle} walletAddress={address}/>
                </div>
              </div>
              <img src={ContentFooter} alt="" className="featured_footer" />
            </div>
            <div className="lg:col-span-3 sm:row-span-5 ssm:row-span-5 lg:w-[360px] sm:w-[360px] ssm:w-[360px] lg:mt-0 sm:-mt-[800px] ssm:-mt-[800px] lg:-mx-[30px] sm:mx-[35%] ssm:mx-[2%]">
              <img src={ContentHeader} alt="" className="featured_header"/>
              <div className="grid gird-rows-15 pb-10 h-[1050px]" style={{backgroundColor:"rgba(255, 255, 255, 0.1)", backdropFilter:"blur(10px)"}}>
                <div className="row-span-3 m-5 h-[100px]">
                  <div className="grid grid-cols-12 p-4 " style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}> 
                    <div className="col-span-4">
                      <img className="" src={GeneralAvatar}/>
                    </div>
                    <div className="col-span-8 -ml-4">
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
                    </div>
                  </div>
                </div>
                <div className="row-span-2 -mt-2 m-5">
                  <div className="grid grid-cols-12 gap-4" >
                    <div className="col-span-6" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                        <div className="grid grid-rows-12 p-4 gap-1 h-[80px]">
                          <div className="row-span-6 text-xl" style ={{color:"#858584"}}>
                             Points
                          </div>
                          <div className="row-span-6 text-xl">
                             1203
                          </div>
                        </div>
                    </div>
                    <div className="col-span-6" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                        <div className="grid grid-rows-12 p-4 gap-1 h-[80px]">
                          <div className="row-span-6 text-xl"  style={{color:"#858584"}}>
                             Rank
                          </div>
                          <div className="row-span-6 text-xl">
                             6
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                {address? 
                  <div className="row-span-1 p-2 ml-5 mr-5 text-sm text-center pl-20" style={{border:"1px solid #CC402A"}}>
                      <button className="uppercase flex justify-between gap-5" onClick={onhandleMetaMask}>
                          <img src={Logout} className=""/>
                          <span>disconnect wallet</span>
                      </button>
                    
                  </div>
                  :
                  <div className="row-span-1 p-2 ml-5 mr-5 text-sm text-center pl-20" style={{backgroundColor:"#CC402A"}}>
                    <button className="uppercase flex justify-between gap-5" onClick={onhandleMetaMask}>
                      <img src={Logout}/>
                      <span>CONNECT WALLET</span>
                      </button>
                  </div>
                }
                
                <div className="row-span-1 py-5">
                  <img src={Divider}/>
                </div>
                <div className="row-span-1 text-center text-2xl ">
                  <span>
                    My current season Pass
                  </span>
                </div>
                <div className="row-span-1 text-center text-xl p-2 m-5 uppercase" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                {
                  address?
                  <span className="">tier1</span>
                  :
                  <span className="">N/A</span>
                }
                </div>
                
                <div className="row-span-1 px-20 -mt-3">
                  {address?
                    <img className = "" src={SteamCardOpen}/> :<img className = "" src={SteamCard}/>
                  }
                </div>
                <div className="row-span-1 mx-5 mt-2 text-center text-2xl p-3" style={ address? {backgroundColor:"#CC402A"}
                 :{backgroundColor:"#858585"}}>
                  <button>UPGRADE</button>
                </div>
                {
                  address?
                  <div className="row-span-1 mx-36 text-xl mt-5">
                    <img src = {SettingIcon} className= "float-left"/>
                    <sapn className= "float-left ml-2 -mt-1">120</sapn>
                  </div>
                  :
                  <div></div>
                }
                <div className="row-span-2 mt-2 py-2">
                  <img src={Divider}/>
                </div>
                <div className="row-span-1 text-center text-2xl">
                  SCRAP AVAILABLE
                </div>
                <div className="row-span-1 text-center text-xl p-2 m-5" style={{backgroundColor:"rgba(255, 255, 255, 0.05)"}}>
                  {
                    address?
                    <span className="">45200</span>
                    :
                    <span className="">N/A</span>
                  }
                </div>
                <div className="row-span-1 mx-5 text-center text-2xl p-3" style={address? {backgroundColor:"#CC402A"}:{backgroundColor:"#858585"}}>
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