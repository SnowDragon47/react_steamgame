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
                <div className="grid grid-cols-12 lg:p-10 sm:p-5 ssm:p-2 lg:gap-5 sm:gap-2">
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
            <div className="tab__content lg:p-10 sm:p-5 ssm:p-2 lg:-mt-12 sm:mt-2 ssm:mt-2">
                <table className="w-[100%]">
                    <thead className="w-[100%]"  style={{border: "2px solid rgba(255,255,255,0.05)"}}>
                        <tr className="grid grid-cols-12 lg:px-5 sm:px-2 ssm:px-2 py-2">
                            <th className="col-span-2 uppercase text-sm lg:text-left sm:text-left ssm:text-center" style = {{color:"#858584"}}>
                                rank
                            </th>
                            <th className="col-span-4 uppercase text-sm lg:text-left sm:text-left ssm:text-center" style = {{color:"#858584"}}>
                                player name
                            </th>
                            <th className="col-span-4 uppercase text-sm lg:text-left sm:text-left ssm:text-center" style = {{color:"#858584"}}>
                                server
                            </th>
                            <th className="col-span-2 uppercase text-sm lg:text-left sm:text-left ssm:text-center" style = {{color:"#858584"}}>
                                points
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-[100%] h-[30vh]" style={{position:"relative", top:"30px"}}>
                        <tr className="grid grid-cols-12 p-4" style={{backgroundColor:"rgba(255,255,255,0.02)"}}>
                            <td className="col-span-2 lg:py-2 sm:py-3 ssm:py-4">
                                <span className="rounded-full lg:h-10 sm:h-8 ssm: h-5 lg:w-10 sm:w-8 ssm:w-5 flex items-center justify-center" style={{backgroundColor:"rgba(255,255,255,0.05)"}}>1</span>
                            </td>
                            <td className="col-span-4">
                                <img src={GeneralAvatar} className="lg:float-left sm:float-left lg:pl-0 sm:pl-4 ssm:pl-10 lg:h-16 sm:h-16 ssm:h-8"/>
                                <span className="float-left uppercase lg:text-2xl sm:text-xl ssm:text-sm lg:ml-2 sm:ml-3 ssm:ml-5 mt-3">ivangamer</span>
                            </td>
                            <td className="col-span-4 lg:py-2 sm:py-2 ssm:py-0">
                                <img src={CountryFlag} className="lg:float-left sm:float-left lg:pl-0 sm:pl-4 ssm:pl-12 lg:h-12 sm:h-12 ssm:h-8"/>
                                <span className="float-left uppercase lg:text-2xl sm:text-xl ssm:text-sm lg:ml-2 sm:ml-2 ssm:ml-4 lg:mt-1 sm:mt-2 ssm:mt-3">scrapfrontier1</span>
                            </td>
                            <td className="col-span-2 lg:py-3 sm:py-4 ssm:py-5">
                                <span className="lg:float-left sm:float-left ssm:float-right lg:text-2xl sm:text-xl ssm:text-sm items-center justify-center" >20.300</span>
                            </td>
                        </tr>
                        <tr className="grid grid-cols-12 p-4 mt-4" style={{backgroundColor:"rgba(255,255,255,0.02)"}}>
                            <td className="col-span-2 lg:py-2 sm:py-3 ssm:py-4">
                                <span className="rounded-full lg:h-10 sm:h-8 ssm: h-5 lg:w-10 sm:w-8 ssm:w-5 flex items-center justify-center" style={{backgroundColor:"rgba(255,255,255,0.05)"}}>2</span>
                            </td>
                            <td className="col-span-4">
                                <img src={GeneralAvatar} className="lg:float-left sm:float-left lg:pl-0 sm:pl-4 ssm:pl-10 lg:h-16 sm:h-16 ssm:h-8"/>
                                <span className="float-left uppercase lg:text-2xl sm:text-xl ssm:text-sm lg:ml-2 sm:ml-3 ssm:ml-5 mt-3">ivangamer</span>
                            </td>
                            <td className="col-span-4 lg:py-2 sm:py-2 ssm:py-0">
                                <img src={CountryFlag} className="lg:float-left sm:float-left lg:pl-0 sm:pl-4 ssm:pl-12 lg:h-12 sm:h-12 ssm:h-8"/>
                                <span className="float-left uppercase lg:text-2xl sm:text-xl ssm:text-sm lg:ml-2 sm:ml-2 ssm:ml-4 lg:mt-1 sm:mt-2 ssm:mt-3">scrapfrontier1</span>
                            </td>
                            <td className="col-span-2 lg:py-3 sm:py-4 ssm:py-5">
                                <span className="lg:float-left sm:float-left ssm:float-right lg:text-2xl sm:text-xl ssm:text-sm items-center justify-center" >20.300</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TabWidget;