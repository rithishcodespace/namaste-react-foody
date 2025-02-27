import axios from "axios";
import { useEffect,useState } from "react";

let useRestaurant_menu = (id) =>{
   const[res_info,setres_info]=useState(null)

   useEffect(()=>{
    // fetch_menu()
    fetch_menu_id()
   },[]);
   
   let fetch_menu_id = async ()=>{
    const res = await axios.get("http://localhost:5000/test_id", {
      params:{
        replace_id:id
      }
    })
    console.log(res,"res")
     
    setres_info(res.data);
    
   }
   return res_info;
}

export default useRestaurant_menu;