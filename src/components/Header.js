import {LOGO_URL} from "../utils/constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log("Header Render");
    }, []);

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
                    <li>Online Status : { onlineStatus ? "🟢" : "🔴" }</li>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li><Link to = "/contact">Contact Us</Link></li>
                    <li><Link to = "/grocery">Grocery</Link></li>
                    <button className="login-button" onClick={changeButton}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
