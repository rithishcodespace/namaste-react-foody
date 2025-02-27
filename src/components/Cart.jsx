import { useSelector,useDispatch } from "react-redux";
import Restaurantcategory from "./restaurantcategory";
import { removeItems } from "../utils/Cartslice";
let Cart = () => {
    let items = useSelector((store)=>store.cart.items);
    let dispatch = useDispatch();
    console.log("items",items);
    let link = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
    return(
       <div>
         <center><h1>Cart Items</h1></center>
         {items.length>0 && <button className="bg-black text-white h-6 w-16 rounded-md relative left-[1200px]" onClick={
           ()=>dispatch(removeItems())
         }>remove</button>}
        {
            (items.length>0)?(items.map((info,index)=><Restaurantcategory data={info} link={link} key={index}/>)):<p>Your cart is empty</p>
        }
        
       </div>
    )
}
export default Cart;