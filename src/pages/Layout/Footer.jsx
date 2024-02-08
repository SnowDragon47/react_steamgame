import React from "react";
import X from "../../assets/img/x.svg";
import Discord from "../../assets/img/discord.svg";
import Twitch from "../../assets/img/Twitch.svg";
import Medium from "../../assets/img/Medium.svg";
import Youtube from "../../assets/img/Youtube.svg";
const Footer = () => {

    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="socials">
                        <a href="/" class="socials__item">
                            <span class="socials__icon">
                                <img src={X} alt=""/>
                            </span>
                            <span class="socials__title text22">
                                X.com
                            </span>
                        </a>
                        <a href="" class="socials__item">
                            <span class="socials__icon">
                                <img src={Discord} alt=""/>
                            </span>
                            <span class="socials__title text22">
                                discord
                            </span>
                        </a>
                        <a href="" class="socials__item">
                            <span class="socials__icon">
                                <img src={Twitch} alt=""/>
                            </span>
                            <span class="socials__title text22">
                                Twitch
                            </span>
                        </a>
                        <a href="" class="socials__item">
                            <span class="socials__icon">
                                <img src={Youtube} alt=""/>
                            </span>
                            <span class="socials__title text22">
                                Youtube
                            </span>
                        </a>
                        <a href="" class="socials__item">
                            <span class="socials__icon">
                                <img src={Medium} alt=""/>
                            </span>
                            <span class="socials__title text22">
                                Medium
                            </span>
                        </a>
                    </div>


                    <nav class="footer-nav">
                        <a href="" class="footer-nav__link"><span>Media Kit</span></a>
                        <a href="" class="footer-nav__link"><span>Documentation</span></a>
                        <a href="" class="footer-nav__link"><span>Terms of Use</span></a>
                        <a href="" class="footer-nav__link"><span>Privacy Policy</span></a>
                        <a href="" class="footer-nav__link"><span>Cookie Policy</span></a>
                    </nav>

                    <div class="footer__c">
                        <div class="text16 text14-mob">
                            © 2024 Scrap Frontier Studios. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer