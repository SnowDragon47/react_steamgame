import React from "react";
import TournamentBack from "../assets/img/tournament_back.jpg";
import ContentHeader from '../assets/img/leader_content_header.svg';
import ContentFooter from '../assets/img/leader_content_footer.svg';
import TabWidget from "../components/TabWidget/TabWidget";

const LeaderBoard = () => {
    return(
        <div>
            <main className="content">
                <div class="main main2">
                    <div class="container">
                        <div class="main__content">
                            <h1 class="text-center text120">
                            leaderboard
                            </h1>
                        </div>
                    </div>
                    <div class="main__video">
                        <img src={TournamentBack} alt=""/>
                    </div>
                </div>
            </main>
            <div className="container">
                <div className="mt-24">
                    <img src={ContentHeader}/>
                    <div style = {{backgroundColor:"rgba(255,255,255,0.05)", backdropFilter:"blur(10px)"}}>
                        <TabWidget/>
                    </div>
                    <img src={ContentFooter}/>
                </div>
            </div>
        </div>
    );
}

export default LeaderBoard;