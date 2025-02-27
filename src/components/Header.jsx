import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Context from "../utils/Context.jsx";
import { useSelector} from "react-redux";

let Header = () => {
    const[status,setstatus]=useState("LOGIN");
    const onlinestatus = useOnlineStatus();
    let cartItems = useSelector((store)=>store.cart.items)
    let username = useContext(Context)
    return (
      <div>
        <div className="flex justify-evenly p-10">
          <img
            className="w-24 relative bottom-9"
            id="img_logo"
            src="https://static.vecteezy.com/system/resources/previews/007/500/121/non_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
            alt="logo"
          ></img>
          <p>Online Status: {(onlinestatus)?"🟢":"🔴"}</p>
          <p><Link to="/">HOME</Link></p>
          <p><Link to="/about">ABOUT US</Link></p>
          <p><Link to="/contact">CONTACT US</Link></p>
          <p><Link to="/cart">CART({cartItems.length})</Link></p>
          <button className="relative bottom-9" onClick={()=>{status=="LOGIN"?setstatus("LOGOUT"):setstatus("LOGIN")}} style={{cursor:"pointer"}}>{status}</button>
          <p>{username.name}</p>
        </div>
      </div>
    );
  };

export default Header;
  