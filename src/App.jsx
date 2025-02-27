import {useState,useEffect,useContext} from "react";
import Res_card,{Hoc_res_card} from "./components/Res_card.jsx";
import Shimmer from "./components/Shimmer.jsx";
import {Link} from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.jsx";
import contextData from "./utils/Context.jsx";

  let Body = () => {
    const [restaurant_list, setrestaurant_list] = useState([]);
    const [inp_text,setinput_text] = useState(""); //input variable
    const [filtered_search,setfiltered_search] = useState([]); //searched_data
    let data = useContext(contextData)
    // const Hoc_res_card = Hoc_res_card(Res_card); //calling hoc
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/swiggy/");
        const data = await response.json();
        console.log("restaurant list",data);
        const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        setrestaurant_list(restaurants);
        setfiltered_search(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    const onlinestatus = useOnlineStatus();
    if(onlinestatus == false) return <h1>It looks like you are offline!!<br></br>please check your internet connection</h1> 
    return restaurant_list.length == 0 ? <Shimmer/> : 
    (
      <div className="">
        <div className="relative bottom-16 left-5">
          <input className="border border-gray-700 h-9 w-96" placeholder="Search for restaurant and food" type="text" value={inp_text} onChange={(e) => {setinput_text(e.target.value)}}/><button className="relative right-8"
           onClick={() => {
            const matched_restaurants = restaurant_list.filter((res) => {
            return res?.info?.name.toLowerCase().includes(inp_text.toLowerCase());
          });
      setfiltered_search(matched_restaurants);
    }}
    >🔍</button>
          <button className="bg-white text-black border border-gray-500 rounded-2xl w-48 h-9  hover:bg-black hover:text-white"
            onClick={() => {
              let filtered_list = restaurant_list.filter((res) => res.avgrating >= 4);
              setrestaurant_list(filtered_list);
            }}
          >
            Top-Rated Restaurant
          </button>
          <input className="border border-gray-700 h-9 w-60 ml-5" placeholder="Enter Username" value={data.user} onChange={(e)=>data.setname(e.target.value)}type="text"></input>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
        {filtered_search.map((restaurant) => (
           <Link to={"restaurant/" + restaurant.info.id}>
             <Res_card key={restaurant.info.id} res_data={restaurant} />
           </Link>
     ))}
        </div>    
      </div>
    );
  };

  export default Body;