import React, {useState} from "react";

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

    const [islogin, setLogin] = useState(false);

    const toogleLogin = () => {
            setLogin(!islogin)
    }
    return (
        <div>
            <div className="login_form">
                <img src={LoginBanner} className="login_banner"/>
                <table className="login_content">
                    <td>
                        <tr>
                            <text className="text46">Connect Wallet</text>
                        </tr>
                        <tr>
                            <text className="font_white font_work_sans">Choose a wallet you want to connect. <br/>There are several wallet providers.</text>
                        </tr>
                        <tr>
                            <button className="wallet_btn" onClick={toogleLogin}><img src={MetaMaskImg} width={30}/><p className="btn_between font_work_sans">Metamask</p></button>
                        
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
            <div className="login_user_list">
                <img src={LoginBetweenImg} className="login_between_bar"/>
                <table className="user_table">
                    <thead className="table_header">
                        <td>
                            <text className="text18 ml-4">#</text>
                        </td>                  
                        <td>    
                        <text className="text18  ml-4">Player</text>
                        </td>
                        <td>
                        <text className="text18  ml-20">
                                Tier
                            </text>
                        </td>
                        <td>
                        <text className="text18  ml-8">
                                Server
                            </text>
                        </td>
                        <td>
                        <text className="text18  ml-8">
                                Points earned
                            </text>
                        </td>                            
                    </thead>
                    <tbody className="table_body">
                            <tr className="user_member_btn">
                                <td className="text18 ml-4">
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">1</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar} width={40}/>
                                    <text className="userInfo font_work_sans user_name">Jaydon Ekstrom Bothman</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo">8000</text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="text18 ml-4">
                                    
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">2</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar1} width={40}/>
                                    <text className="userInfo font_work_sans user_name">Ruben Carder</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo">8000</text>
                                </td>
                            </tr>
                            <tr className="user_member_btn">
                                <td className="text18 ml-4">
                                    
                                        <img src={RankingNumberImg}/>
                                        <text className="ranking_number">3</text>
                                </td>
                                <td className="text22 ml-2">
                                    <div className="user_no_rectangul">
                                    <img src={ArtistAvatar2} width={40}/>
                                    <text className="userInfo font_work_sans user_name">Alfredo Septimus</text>
                                    </div>
                                </td>
                                <td className="ml-24">
                                    <text className="userInfo tier">1</text>
                                </td>
                                <td className="ml-12">
                                    <text className="userInfo">Scrapfrontier 1</text>
                                </td>
                                <td className="ml-8">
                                    <text className="userInfo">8000</text>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default NotLogined