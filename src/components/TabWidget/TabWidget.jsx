import React, {useState} from "react";
import GeneralAvatar from "../../assets/img/gamer_avatar.svg";
import CountryFlag from '../../assets/img/country_flag.svg';

const TabWidget = () => {

    const tabs = ['tier0', 'tier1', 'tier2', 'tier3'];
    const [activeTab, setActiveTab] = useState(tabs[0]);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
    return(
        <div>
            <div className="tab__header">
                <div className="grid grid-cols-12 lg:p-10 md:p-5 sm:p-2 lg:gap-5 md:gap-2">
                    {tabs.map((tab, index) => (
                        <div className="col-span-3 text-2xl text-center p-2" 
                            style={
                                activeTab == tab 
                                ? { color: "#CC402A", borderBottom: "2px solid #CC402A", cursor:"pointer"}
                                : { color: "#ffff", borderBottom: "2px solid rgba(255,255,255,0.05)", cursor:"pointer" }
                            }
                            onClick={() => handleTabClick(tab)}
                        >
                            <span className="uppercase">
                                {tab}
                            </span>
                        </div>   
                    ))}
                </div>  
            </div>
            <div className="tab__content lg:p-10 md:p-5 sm:p-2 lg:-mt-12 md:mt-2 sm:mt-2">
                <table className="w-[100%]">
                    <thead className="w-[100%]"  style={{border: "2px solid rgba(255,255,255,0.05)"}}>
                        <tr className="grid grid-cols-12 lg:px-5 md:px-2 sm:px-2 py-2">
                            <th className="col-span-2 uppercase text-sm lg:text-left md:text-left sm:text-center" style = {{color:"#858584"}}>
                                rank
                            </th>
                            <th className="col-span-4 uppercase text-sm lg:text-left md:text-left sm:text-center" style = {{color:"#858584"}}>
                                player name
                            </th>
                            <th className="col-span-4 uppercase text-sm lg:text-left md:text-left sm:text-center" style = {{color:"#858584"}}>
                                server
                            </th>
                            <th className="col-span-2 uppercase text-sm lg:text-left md:text-left sm:text-center" style = {{color:"#858584"}}>
                                points
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-[100%] h-[30vh]" style={{position:"relative", top:"30px"}}>
                        <tr className="grid grid-cols-12 p-4" style={{backgroundColor:"rgba(255,255,255,0.02)"}}>
                            <td className="col-span-2 lg:py-2 md:py-3 sm:py-4">
                                <span className="rounded-full lg:h-10 md:h-8 sm: h-5 lg:w-10 md:w-8 sm:w-5 flex items-center justify-center" style={{backgroundColor:"rgba(255,255,255,0.05)"}}>1</span>
                            </td>
                            <td className="col-span-4">
                                <img src={GeneralAvatar} className="lg:float-left md:float-left lg:pl-0 md:pl-4 sm:pl-10 lg:h-16 md:h-16 sm:h-8"/>
                                <span className="float-left uppercase lg:text-2xl md:text-xl sm:text-sm lg:ml-2 md:ml-3 sm:ml-5 mt-3">ivangamer</span>
                            </td>
                            <td className="col-span-4 lg:py-2 md:py-2 sm:py-0">
                                <img src={CountryFlag} className="lg:float-left md:float-left lg:pl-0 md:pl-4 sm:pl-12 lg:h-12 md:h-12 sm:h-8"/>
                                <span className="float-left uppercase lg:text-2xl md:text-xl sm:text-sm lg:ml-2 md:ml-2 sm:ml-4 lg:mt-1 md:mt-2 sm:mt-3">scrapfrontier1</span>
                            </td>
                            <td className="col-span-2 lg:py-3 md:py-4 sm:py-5">
                                <span className="lg:float-left md:float-left sm:float-right lg:text-2xl md:text-xl sm:text-sm items-center justify-center" >20.300</span>
                            </td>
                        </tr>
                        <tr className="grid grid-cols-12 p-4 mt-4" style={{backgroundColor:"rgba(255,255,255,0.02)"}}>
                            <td className="col-span-2 lg:py-2 md:py-3 sm:py-4">
                                <span className="rounded-full lg:h-10 md:h-8 sm: h-5 lg:w-10 md:w-8 sm:w-5 flex items-center justify-center" style={{backgroundColor:"rgba(255,255,255,0.05)"}}>2</span>
                            </td>
                            <td className="col-span-4">
                                <img src={GeneralAvatar} className="lg:float-left md:float-left lg:pl-0 md:pl-4 sm:pl-10 lg:h-16 md:h-16 sm:h-8"/>
                                <span className="float-left uppercase lg:text-2xl md:text-xl sm:text-sm lg:ml-2 md:ml-3 sm:ml-5 mt-3">ivangamer</span>
                            </td>
                            <td className="col-span-4 lg:py-2 md:py-2 sm:py-0">
                                <img src={CountryFlag} className="lg:float-left md:float-left lg:pl-0 md:pl-4 sm:pl-12 lg:h-12 md:h-12 sm:h-8"/>
                                <span className="float-left uppercase lg:text-2xl md:text-xl sm:text-sm lg:ml-2 md:ml-2 sm:ml-4 lg:mt-1 md:mt-2 sm:mt-3">scrapfrontier1</span>
                            </td>
                            <td className="col-span-2 lg:py-3 md:py-4 sm:py-5">
                                <span className="lg:float-left md:float-left sm:float-right lg:text-2xl md:text-xl sm:text-sm items-center justify-center" >20.300</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TabWidget;