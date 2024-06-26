import { useContext, useState } from "react";
// import { lOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import AppLogo from "../assets/applogos.png"
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = () =>{
    // const [btnNameReact, setBtnNameReact] = useState("Login")
    //Munna

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    //subscribing to a store using selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
     <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
         <div className="logo-container">
            <img className="w-40" src= {AppLogo} alt="logo"></img>
        </div>
            <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    Online Status: {onlineStatus ? "🟢" : "🔴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4">
                    <Link to="/cart">Cart({cartItems.length} items)</Link>
                </li>
                    {/* <button className="btn" 
                    onClick={()=>{
                     btnNameReact ==="Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                    }}>
                    {btnNameReact}
                </button> */}
                <li>
                    <Link to="/signup">
                        <button className="bg-black text-white py-2 px-5 rounded-lg">
                            Login
                        </button>
                    </Link>
                </li>
             </ul>
        </div>
    </div>
    )
}

export default Header;