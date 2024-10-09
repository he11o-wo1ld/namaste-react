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
        <div className="flex justify-between bg-orange-400 shadow-xl ">
            <div>
            <Link to = "/"><img className="w-36 object-cover" src={LOGO_URL}/></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="px-4 text-2xl text-orange-700 hover:scale-110 transition-transform duration-300 hover:text-white">Online Status : { onlineStatus ? "🟢" : "🔴" }</li>
                    <li className="px-4 text-2xl text-orange-700 hover:scale-110 transition-transform duration-300 hover:text-white"><Link to = "/">Home</Link></li>
                    <li className="px-4 text-2xl text-orange-700 hover:scale-110 transition-transform duration-300 hover:text-white"><Link to = "/about">About Us</Link></li>
                    <li className="px-4 text-2xl text-orange-700 hover:scale-110 transition-transform duration-300 hover:text-white"><Link to = "/contact">Contact Us</Link></li>
                    <li className="px-4 text-2xl text-orange-700 hover:scale-110 transition-transform duration-300 hover:text-white"><Link to = "/grocery">Grocery</Link></li>
                    <button className="border-solid text-2xl text-orange-700 hover:scale-110 transition-transform duration-300 hover:text-white" onClick={changeButton}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
