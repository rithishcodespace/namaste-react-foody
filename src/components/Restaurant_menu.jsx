import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import {useParams} from "react-router-dom";
import useRestaurant_menu  from "../utils/useRestaurant_menu";
import Restaurantcategory from "./restaurantcategory"

const RestaurantMenu = () => {
  
  const{id}=useParams(); //destructuring
  
  const res_info = useRestaurant_menu(id);
  let link = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
  if (res_info==null) return <Shimmer/>;
  
  const { name, cuisines, costForTwoMessage,areaName}  = res_info?.data?.cards[2]?.card?.card?.info;
  const {itemCards} = res_info.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  return(
    <div>
      <center>
        <h1 className="relative right-52 pb-5 text-[18px] font-serif font-bold">{name}</h1>
         <div className="border-gray-300 border-y-[0.2px] border-x-[0.2px] h-44 w-[700px] rounded-md font-mono shadow-xl">
          <h1 className="p-2 font-bold font-mono">⭐4.2"(32 ratings) {costForTwoMessage} </h1>
          <h3 className="p-1 text-red-600 font-bold font-mono">{cuisines}</h3>
          <h3 className="p-1 font-bold font-mono">Outlet {areaName}</h3>
          <h3 className="p-1 font-bold font-mono">40-45mins</h3>
          <h4 className="p-1 text-red-600 font-bold font-mono">Free delivery on orders above ₹199</h4>
         </div>
         <h1 className="relative top-8 right-72 font-bold font-serif mb-16">Recommended</h1>
         {/* <hr className="w-[700px]"></hr> */}
       </center>
  
      <div className="text-center">   
      {itemCards.map((info)=>
        <div key={info?.card?.info.name}>
          <Restaurantcategory data={info} link={link}/>
        </div>)}
      </div>
    </div> 
  );
};
export default RestaurantMenu;

