import React from "react";
import StatIcon from "../../assets/img/stat-icon.svg";
import StatIcon2 from "../../assets/img/stat-icon2.svg";
const Stat = () => {

    return(
        <div class="stat">
            <div class="container">
                <div class="stat__items">
                    <div class="stat-item">
                        <img src={StatIcon} alt="" class="stat-item__icon"/>
                        <div class="stat-item__title">
                            active <br/>
                            servers
                        </div>
                        <div class="stat-item__num">
                            8
                        </div>
                    </div>
                    <div class="stat-item">
                        <img src={StatIcon2} alt="" class="stat-item__icon"/>
                        <div class="stat-item__title">
                            registered <br/>
                            players
                        </div>
                        <div class="stat-item__num">
                            6850
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Stat 