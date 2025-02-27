import { useDispatch } from "react-redux";
import {addItems} from "../utils/Cartslice";
let Restaurantcategory = (props) =>{
    let dispatch = useDispatch()
    return(
        <div className="h-60">
            <center><hr className="w-[700px] bg-gray-800 shadow-md"></hr></center>
           <h1 className="relative top-24 font-mono font-bold right-72">{props?.data?.card?.info?.name}</h1>
           <h2 className="relative top-24  right-72">₹{props?.data?.card?.info?.price/100}</h2>
           <h2 className="relative top-24  right-72">{props?.data?.card?.info?.category}</h2>
           <img src={`${props.link}${props?.data?.card?.info?.imageId||"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"}`}
          alt="Menu Item" className="h-40 w-50 rounded-lg relative left-[900px] bottom-7"/>
          <button className="text-white bg-black h-6 w-12 rounded-lg relative bottom-48 left-40 z-10" onClick={
            () => {
                dispatch(addItems(props));
            }
          }
          >add</button>
        </div>
        
    );
}
export default Restaurantcategory;