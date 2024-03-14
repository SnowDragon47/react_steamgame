import React, { useEffect, useState } from "react";

import LoginImg from '../../assets/img/login.jpg';
import Loginbar1 from '../../assets/img/loginbar1.svg';
import Loginbar3 from '../../assets/img/Group 3.svg';

import LoginInfoCard from "../../assets/img/Info Card.png";
import ArtistAvatar from "../../assets/img/Artist Avatar.png";
import ArtistAvatar1 from "../../assets/img/Artist Avatar1.png";
import ArtistAvatar2 from "../../assets/img/Artist Avatar2.png";
import LoginBetweenImg from '../../assets/img/loginbar_between.svg';
import {useLocation} from 'react-router-dom';
// import LoginBetweenImg from '../../assets/img/loginbar_between.svg';

import RankingNumberImg from '../../assets/img/Ranking Number.svg';
const Logined = (address) => 
{
    const location = useLocation();
    console.log('------address in logined----', location.state.address)
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
                                                0x{location.state.address.slice(2, 6)}....{location.state.address.slice(-4)}
                                            </div>   
                                        </tr>
                                        
                                    </td>
                                </tr>
                                <tr className="back_content_claim">
                                    <td>
                                        <tr>
                                            <text className="font_Roboto_Bold">
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
                <div className="logined_user_list">
                    <img src={LoginBetweenImg} className="login_between_bar"/>
                        <tbody>
                            <tr className="table_header">
                                <td className="ml-2" style={{textAlign:'center', width:'30px'}}>
                                    <text >#</text>
                                </td>                  
                                <td className="ml-2">    
                                    <text>Player</text>
                                </td>
                                <td className="ml-24 tier" style = {{color: '#7B7B7A'}}>
                                    <text>Tier</text>
                                </td>
                                <td className="ml-14 server">
                                <text>
                                        Server
                                    </text>
                                </td>
                                <td className="ml-14 point">
                                    <text >Points earned
                                    </text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="ml-2">
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">1</text>
                                </td>
                                <td className="ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar} width={40} className="user_avatar"/>
                                    <text className="font_Roboto_Bold user_name">Jaydon Ekstrom Bothman</text>
                                    </div>
                                </td>
                                <td className="ml-24 tier">
                                    <text>1</text>
                                </td>
                                <td className="ml-14 server">
                                    <text>Scrapfrontier 1</text>
                                </td>
                                <td className="ml-14 point">
                                    <text>18000</text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="ml-2">
                                    <img src={RankingNumberImg}/>
                                    <text className="ranking_number">2</text>
                                </td>
                                <td className="ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar1} width={40} className="user_avatar"/>
                                    <text className="font_Roboto_Bold user_name">Ruben Carder</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="tier">1</text>
                                </td>
                                <td className="ml-14">
                                    <text className="server">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-14">
                                    <text className="point">15265</text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="ml-2">
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">3</text>
                                </td>
                                <td className="ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar2} width={40} className="user_avatar"/>
                                    <text className="font_Roboto_Bold user_name">Alfredo Septimus</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="tier">1</text>
                                </td>
                                <td className="ml-14">
                                    <text className="server">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-14">
                                    <text className="point">15120</text>
                                </td>
                            </tr>
                        </tbody>
                </div>
                <img src={Loginbar3} alt="" className="login_bar3"/>

            </div>
        </div> 
 
    );
}
export default Logined  