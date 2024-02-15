import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import close from "../../assets/img/close.svg";
import burger from "../../assets/img/burger.svg";
import steam from "../../assets/img/steam.svg";
import X from "../../assets/img/x.svg";
import Discord from "../../assets/img/discord.svg";
import Twitch from "../../assets/img/Twitch.svg";
import Medium from "../../assets/img/Medium.svg";
import Youtube from "../../assets/img/Youtube.svg";
import axios from "axios";
import userAvatar from "../../assets/img/user_avatar.png";
import LogOut1 from "../../assets/img/logout1.svg";


const Header =() => {
    const[isBuger, setIsBuger] = useState(false);
    const[isLogin, setLogin] = useState(false);
    const bugerClick = () =>{

        setIsBuger(!isBuger);
    }

    const handleLoginSteam = () => {
        console.log('dddddddddd', process.env.REACT_APP_SERVER_URL)
        axios.post(`${process.env.REACT_APP_SERVER_URL}auth/loginbysteam`, {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <header className={isBuger ? "header _open" : "header"}>
            {/* <header className="header"> */}
            <div className="container">
                <div className="header__inner">
                    <a href="/" className="header__logo">
                        <img src={logo} alt='' />
                    </a>
                    <div className="menu">
                        <nav className="nav">
                            <a className="nav__link" onClick={() => { setIsBuger(!isBuger) }}><Link to='../howtostart'><span>How to start</span></Link></a>
                            <a className="nav__link" onClick={() => { setIsBuger(!isBuger) }}><Link to='../support'><span>Support</span></Link></a>
                            <a className="nav__link" onClick={() => { setIsBuger(!isBuger) }}><Link to='../rules'><span>Rules</span></Link></a>
                        </nav>
                        <button className="menu__close" onClick={() => { setIsBuger(!isBuger) }}>
                            <img src={close} />
                        </button>
                        <div class="socials">
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={X} alt="" />
                                </span>
                                <span class="socials__title text22">
                                    X.com
                                </span>
                            </a>
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={Discord} alt="" />
                                </span>
                                <span class="socials__title text22">
                                    discord
                                </span>
                            </a>
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={Twitch} alt="" />
                                </span>
                                <span class="socials__title text22">
                                    Twitch
                                </span>
                            </a>
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={Youtube} alt="" />
                                </span>
                                <span class="socials__title text22">
                                    Youtube
                                </span>
                            </a>
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={Medium} alt="" />
                                </span>
                                <span class="socials__title text22">
                                    Medium
                                </span>
                            </a>
                        </div>
                    </div>
                    {!isLogin? (
                        <Link to='../user/login'>
                           
                            <button class="header__btn m-btn m-btn-red" >
                                <img src={steam} alt=""/>
                                <span>Login <br/> with steam</span>
                            </button>
                        </Link>
                    ): (
                        <Link to='../user/logout'>
                           
                            <button class="header__btn m-btn m-btn-red" >
                                <img src={userAvatar} className="avatar_img" />
                                <span>IVANGAMMER</span>
                                <img src={LogOut1}  style={{marginLeft:"10px", width:"20px"}}/>
                            </button>
                        </Link>
                    )}
                    <button class="burger m-btn m-btn-red" onClick={bugerClick}>
                        <img src={burger} alt="" />
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header