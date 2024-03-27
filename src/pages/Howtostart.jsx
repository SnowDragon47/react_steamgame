import React from "react";
import Howstart from '../assets/img/how-start.jpg';
import Faq from '../components/Faq/Faq.jsx';
const Howtostart = () =>{
    return(
        <div>
            <main className="content">  
                <div class="main main2">
                    <div class="main_container">
                        <div class="main__content">
                            <h1 class="text120">
                                How to start
                            </h1>
                        </div>
                    </div>
                    <div class="main__video">
                        <img src={Howstart} alt=""/>
                    </div>
                </div>
            </main>
            <Faq/>
        </div>
    );
}
export default Howtostart