import React, { useEffect, useState } from "react";

import LoginImg from '../../assets/img/login.jpg';
import Loginbar1 from '../../assets/img/loginbar1.svg';
import Loginbar3 from '../../assets/img/Group 3.svg';

import LoginInfoCard from "../../assets/img/Info Card.png";
import ArtistAvatar from "../../assets/img/Artist Avatar.png";
import ArtistAvatar1 from "../../assets/img/Artist Avatar1.png";
import ArtistAvatar2 from "../../assets/img/Artist Avatar2.png";
import LoginBetweenImg from '../../assets/img/loginbar_between.svg';
// import LoginBetweenImg from '../../assets/img/loginbar_between.svg';

import RankingNumberImg from '../../assets/img/Ranking Number.svg';
const Logined = () => 
{
    const [steamId, setSteamId] = useState('');
    useEffect(() => {
        const steam_id = localStorage.getItem('steam_id')
        setSteamId(steam_id)
    }, [])
    return (
        <div>
            <main className="content">  
                <div class="main main2">
                    <div class="main__video">
                        <img src={LoginImg} alt=""/>
                    </div>
                </div>
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
                                                <button className="wallet_number">
                                                    0X....4888
                                                </button>   
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
                        <thead className="table_header">
                            <tr style={{width:"100%"}}>
                            <td>
                                <text className="rank">#</text>
                            </td>                  
                            <td>    
                            <text className="ml-4 user_avatar">Player</text>
                            </td>
                            <td>
                            <text className="ml-20 tier">
                                    Tier
                                </text>
                            </td>
                            <td>
                            <text className="ml-8 server">
                                    Server
                                </text>
                            </td>
                            <td>
                            <text className="ml-8 point">
                                    Points earned
                                </text>
                            </td>
                            </tr>             
                        </thead>
                        <tbody className="table_body">
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
                    <img src={Loginbar3} alt="" className="login_bar3"/>
                </div>

            </div>
        </div> 
 
    );
}
export default Logined  