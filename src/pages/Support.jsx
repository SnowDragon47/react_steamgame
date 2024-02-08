import React from "react";
import SupportImg from "../assets/img/Support.jpg";
import SupportContent from "../components/Support/SupportContent";
const Support = () =>{
    return(
            <main className="content">
                <div class="main main2">
                    <div class="container">
                        <div class="main__content">
                            <h1 class="text120">
                                Support
                            </h1>
                        </div>
                    </div>
                    <div class="main__video">
                        <img src={SupportImg} alt=""/>
                    </div>
                </div>
                <div className="support">
                    <SupportContent/>
                </div>
            </main>
 
    );
}
export default Support