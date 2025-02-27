import {useEffect,useState} from "react";

let useOnlineStatus = () =>{
   const[onlinestatus,setonlinestatus] = useState(true);
   useEffect(()=>{
      window.addEventListener("online",()=>{
         setonlinestatus(true);
      })
      window.addEventListener("offline",()=>{
         setonlinestatus(false);
      })

   })
   return onlinestatus;
}

export default useOnlineStatus;