import {LOGO_URL} from "../utils/constants"
import { useState } from "react";


const Header = () => {
    let [btnName, setBtnName] = useState("Login");


    const changeButton = () => {
        return (btnName === "Login") ? (setBtnName("Logout")) : setBtnName("Login")
    }


    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-button" onClick={changeButton}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
