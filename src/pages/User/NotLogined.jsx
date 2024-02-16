import React  from "react";
import LoginImg from '../../assets/img/login.jpg';
import Loginbar1 from '../../assets/img/loginbar1.svg';
import Loginbar3 from '../../assets/img/Group 3.svg';
import LoginBanner from '../../assets/img/login_banner.jpg';
import MetaMaskImg from '../../assets/img/metamask.svg';
import WalletConnectImg from '../../assets/img/WalletConnect.svg';
import CoinBaseImg from '../../assets/img/Coinbase.svg'; 
import RankingNumberImg from '../../assets/img/Ranking Number.svg';
import ArtistAvatar from "../../assets/img/Artist Avatar.png";
import LoginBetweenImg from '../../assets/img/loginbar_between.svg';
import ArtistAvatar1 from "../../assets/img/Artist Avatar1.png";
import ArtistAvatar2 from "../../assets/img/Artist Avatar2.png";
// import { useState } from 'react';

const NotLogined = () =>
{

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

                <div className="login_form">
                    <img src={LoginBanner} className="login_banner"/>
                    <table className="login_content">
                        <td>
                            <tr className="connect_wallet_text">
                                <text className="text46">Connect Wallet</text>
                            </tr>
                            <tr className="connect_wallet_textfield">
                                <text className="font_white font_work_sans connect_wallet_textfield">Choose a wallet you want to connect. <br/>There are several wallet providers.</text>
                            </tr>
                            <tr>
                                <button className="wallet_btn"><img src={MetaMaskImg} width={30}/><p className="btn_between font_work_sans">Metamask</p></button>
                            
                            </tr>
                            <tr>
                                <button className="wallet_btn"><img src={WalletConnectImg} width={30}/><p className="btn_between font_work_sans">Wallet Connect</p></button>
                            </tr>
                            <tr>
                                <button className="wallet_btn"><img src={CoinBaseImg} width={30}/><p className="btn_between font_work_sans">Coinbase</p></button>
                            </tr>
                        </td>
                    </table>
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

            </div>

        </div>
    );
}
export default NotLogined