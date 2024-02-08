import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import Stat from "../components/Stat/Stat.jsx";
import LetPlay from "../components/LetPlay/LetPlay.jsx";

const Home = () => {
    return (
        <div>
            <main className="content">
                <Banner/>  
                <Stat/> 
                <LetPlay/>
            </main>
            
        </div>
    );
} 
export default Home