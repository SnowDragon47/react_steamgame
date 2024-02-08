import React from "react";
import { Link } from "react-router-dom";
import Bg from "../../assets/img/bg.svg";
import Bg2 from "../../assets/img/bg2.svg";
import Play from "../../assets/img/let-play.svg";
const LetPlay = () => {
    return(
        
        <div class="let-play">
            <img class="let-play__bg _view1" src={Bg} alt=""/>
            <img class="let-play__bg _view2" src={Bg2} alt=""/>
            <div class="let-play__wrap">
                <div class="container">
                    <div class="let-play__inner">
                        <div class="let-play__img">
                            <img src={Play} alt=""/>
                        </div>
                        <div class="let-play__content">
                            <div class="let-play__top">
                                <div class="h2">
                                    Play Rust and
                                    Earn SCRP
                                </div>
                            </div>
                            <div class="let-play__desc">
                                <div class="text20 text18-tablet">Play Rust on Scrapfrontier.com, where gameplay rewards you with SCRP. Use your earnings to enhance your pass, unlocking even greater SCRP gains. Dive into a cycle of play, earn, and upgrade for maximum rewards.</div>
                            </div>
                            <div class="let-play__desc">
                                <div class="text20 text18-tablet">Find out how to get started in <Link to='/howtostart'>How to start</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LetPlay