import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import close from "../../assets/img/close.svg";
import burger from "../../assets/img/burger.svg";
import steam from "../../assets/img/steam_avatar.svg";
import userAvatar from "../../assets/img/user_avatar.svg";
import X from "../../assets/img/x.svg";
import Discord from "../../assets/img/discord.svg";
import Twitch from "../../assets/img/Twitch.svg";
import Medium from "../../assets/img/Medium.svg";
import Youtube from "../../assets/img/Youtube.svg";
import DropdownArrow from "../../assets/img/dropdown_arrow.svg";
import DashBoard from "../../assets/img/dashbord_icon.svg";
import LeaderBoard from "../../assets/img/leaderbord_icon.svg";

import axios from "axios";
// import userAvatar from "../../assets/img/user_avatar.png";
import LogOut1 from "../../assets/img/logout1.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isBuger, setIsBuger] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [steamApiFlag, setSteamApiFlag] = useState(false);
    const [isLeaderBoard, setLeaderBoard] = useState(false);
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const steam_id = localStorage.getItem('steam_id');
        const steam_username = localStorage.getItem('steam_username');
        const steam_avatar = localStorage.getItem('steam_avatar');
        if (steam_id)
            setLogin(true)
        setUsername(steam_username)
        setAvatar(steam_avatar)
        
    }, [])

    const bugerClick = () => {

        setIsBuger(!isBuger);
    }
    const handleLoginSteam = () => {
        setOpen(!open);
        // if (isLogin) {
        //     localStorage.removeItem('steam_id')
        //     localStorage.removeItem('steam_username')
        //     localStorage.removeItem('steam_avatar')
        //     setLogin(false)
        //     setSteamApiFlag(true);
        //     // navigate('/')
        //     return;
        // }
        if(!localStorage.getItem('steam_id') && !isLogin)
        {
            window.location.href = `${process.env.REACT_APP_SERVER_URL}auth/steam`
        }
    }
    const onLogoutClick = () => {
        if(isLogin){
            setOpen(!open);
            setLogin(!isLogin);
            setSteamApiFlag(false);
            localStorage.removeItem('steam_id')
            localStorage.removeItem('steam_username')
            localStorage.removeItem('steam_avatar')
            navigate('/', {replace: true});
        }
    }
    const handleDashboard = () =>{
        setOpen(!open);
        navigate('user/login', { replace: true });
    }
    const handleLeaderBoard = () => {
        setOpen(!open);
        navigate('user/leaderboard', { replace: true });
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
                    {!isLogin && !steamApiFlag? (
                        <button class="header__btn m-btn m-btn-red" onClick={handleLoginSteam}>
                            <img src={steam} alt="" />
                            <span className="uppercase">login with steam</span>
                        </button>
                    ) : (
                        <div className="dropdown lg:w-[190px] sm:w-[190px] ssm:w-[150px]">
                            <button class="header__btn m-btn m-btn-red lg:w-[190px] sm:w-[190px] ssm:w-[150px]" onClick={handleLoginSteam}>
                                <img src={userAvatar} className="avatar_img" />
                                <span>PROFILE</span>
                                <img src={DropdownArrow} style={{ marginLeft: "10px", width: "20px" }} />
                            </button>
                            {open ? (
                                <ul className="menuBtn">
                                    <li className="menuBtn-item pl-5 p-2">
                                        <button className="uppercase flex justify-left lg:gap-3 sm:gap-4 ssm:gap-2"><img src={avatar} style={{ width: "20px" }} /><span className="lg:text-xl sm:text-xl ssm:text-sm">0xF9...9668</span></button>
                                    </li>
                                    <li className="menuBtn-item pl-5 p-2">
                                        <button className="uppercase flex justify-left lg:gap-3 sm:gap-4 ssm:gap-2" onClick={handleDashboard}><img src={DashBoard} style={{ width: "20px" }} /><span className="lg:text-xl sm:text-xl ssm:text-sm">DASHBOARD</span></button>
                                    </li>
                                    <li className="menuBtn-item pl-5 p-2">
                                        <button className="uppercase flex justify-left lg:gap-3 sm:gap-4 ssm:gap-2" onClick={handleLeaderBoard}><img src={LeaderBoard} style={{ width: "20px" }} /><span className="lg:text-xl sm:text-xl ssm:text-sm">LEADERBOARD</span></button>
                                    </li>
                                    <li className="menuBtn-item pl-5 p-2">
                                        <button className="uppercase flex justify-left lg:gap-3 sm:gap-4 ssm:gap-2" onClick={onLogoutClick}><img src={LogOut1} style={{ width: "20px" }} /><span className="lg:text-xl sm:text-xl ssm:text-sm" >LOG OUT</span></button>
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                        // <button class="header__btn m-btn m-btn-red" onClick={handleLoginSteam}>
                        //     <img src={avatar} className="avatar_img" />
                        //     <span>{username}</span>
                        //     <img src={LogOut1} style={{ marginLeft: "10px", width: "20px" }} />
                        // </button>
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