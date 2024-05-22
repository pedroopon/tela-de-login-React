import React, { useState } from "react";
import "./LoginSingUp.css"
import  email_icon from "../img/email.png"
import  password_icon from "../img/password.png"
import  person_icon from "../img/person.png"


const LoginSingUp = () => {

    const [action,setAction] = useState("Sing Up")
    return(
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div> <div className="input">
                    <img src={person_icon} alt="" />
                    <input type="text" name="" id="" placeholder="Nome"/>
                </div></div>}
               
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" name="" id="" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" name="" id="" placeholder="Senha"/>
                </div>
                {action==="Sing Up"?<div></div>:<div> <div className="esqueci-senha">Esqueceu a Senha? <span>Clique aqui!</span></div></div>}
               
                <div className="submit-container">
                    <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sing Up")}}>Sing Up</div>
                    <div className={action === "Sing Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
              
            </div>
        </div>
        

            

      
    )
}

export default LoginSingUp