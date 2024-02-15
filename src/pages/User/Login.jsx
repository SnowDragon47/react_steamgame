import React, {useState} from "react";
// import { Table, Row, Col     } from "react-bootstrap";
import NotLogined from "./NotLogined";
import Logined from "./Logined";
import LoginImg from '../../assets/img/login.jpg';
import Loginbar2 from '../../assets/img/loginbar2.svg';
import Loginbar1 from '../../assets/img/loginbar1.svg';
import Loginbar3 from '../../assets/img/Group 3.svg';

const Login  = () => {
    const [isLogined, setLogined] = useState(false);

    return(
        <div >
            <main className="content">  
                <div class="main main2">
                    <div class="main__video">
                        <img src={LoginImg} alt=""/>
                    </div>
                </div>
            </main>  
            <div className="login">                
                <img src={Loginbar1} alt="" className="login_bar1"/>
                {/* {isLogined? null: <img src={Loginbar2} alt="" className="login_bar2"/>} */}
                {/* {isLogined? <Logined/> : <NotLogined/>} */}
                {/* <Logined/> */}
                <NotLogined/>
                <img src={Loginbar3} alt="" className="login_bar3"/>
            </div>
        </div>
    );
}
export default Login