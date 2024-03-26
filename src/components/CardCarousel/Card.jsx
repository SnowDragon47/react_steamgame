import React from "react";
import SettingIcon from '../../assets/img/setting_icon.svg';

const Card = (item) => {
    return(
        <div className="col-span-1 grid grid-rows-12 gap-2 lg:w-[270px] md:w-[270px] sm:w-[175px]" >
            <img
                className="row-span-5"
                src={item.imgUrl}
                // alt={`Slide ${activeIndex}`}
            />
            <div className="row-span-1 lg:text-xl sm:text-xl ssm:text-sm absolute text-center mr-24 lg:mt-36 sm:mt-36 ssm:mt-20 lg:px-4 sm:px-4 ssm:px-2" style={{backgroundColor:"#CC402A"}}>TOURNAMENT</div>
            <div className="row-span-1 lg:text-2xl sm:text-2xl ssm:text-xl lg:mt-0 sm:mt-0 ssm:-mt-56"><span className="float-left">TOURNAMENT NAME</span></div>
            <div className="row-span-1 text-xl lg:mt-0 sm:mt-0 ssm:-mt-64"><img src = {SettingIcon} className= "float-left"/><sapn className= "float-left ml-2 -mt-1">35</sapn></div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-4 ssm:grid-rows-2 lg:text-lg sm:text-lg ssm:text-sm h-[30px] lg:gap-4 sm:gap-4 ssm:gap-12 lg:mt-0 sm:mt-0 ssm:-mt-72">
                <div className="lg:col-span-3 sm:col-span-3 ssm:row-span-1 text-center h-[30px] p-2" style = {{backgroundColor:"rgba(255,255,255,0.05)"}}>Wed 04/10 at 12-30 PM</div>
                <div className="lg:col-span-1 sm:col-span-1 ssm:row-span-1 text-center h-[30px] p-2" style = {{backgroundColor:"rgba(255,255,255,0.05)"}}>0/300</div>
            </div>
            <div className="row-span-3 lg:text-2xl sm:text-2xl ssm:text-xl lg:mt-4 sm:mt-4 ssm:-mt-64">
                {/* <button className="w-[100%] p-3" style={{backgroundColor: !walletAddress ? "#858585": "#CC402A"}} >JOIN</button> */}
            </div>
        </div>

    );

}
export default Card