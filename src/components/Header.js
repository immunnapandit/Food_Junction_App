import { useState } from "react";
import { lOGO_URL } from "../utils/constants";

const Header = () =>{
    const [btnNameReact,setBtnNameReact] = useState("Login")

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"src={lOGO_URL} alt="logos"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="btn" onClick={()=>{
                        setBtnNameReact("Logout")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;