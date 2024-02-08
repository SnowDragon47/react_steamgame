import React from "react";
import RulesImg from "../assets/img/rules.jpg";
import RulesContent from "../components/Rules/RulesContent";
const Rules = () =>{
    return(
            <main className="content">
                <div class="main main2">
                    <div class="container">
                        <div class="main__content">
                            <h1 class="text120">
                                Rules
                            </h1>
                        </div>
                    </div>
                    <div class="main__video">
                        <img src={RulesImg} alt=""/>
                    </div>
                </div>    
                <div className="rules">
                    <RulesContent/>
                </div>    
            </main>
        
    );
}
export default Rules