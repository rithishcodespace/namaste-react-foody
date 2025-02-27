let Res_card = (props) => {
  const { res_data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id } = res_data?.info;
  let link = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  return (
    <div className="border border-gray-500 m-2 hover:scale-105 transition 1.5s bg-slate-100 break-words rounded-xl">
        <img className="w-80 h-auto object-cover rounded-xl" 
        src={`${link}${cloudinaryImageId || "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/bc74af6e-a373-4605-af01-3d5676008ef0_941047.jpg"}`}
        alt="Restaurant"/>
        <h3 className="font-semibold">{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export let Hoc_res_card = (Res_card) => (props) => {
  return(
    <div>
      <label className="">Promoted</label>
      <Res_card/>
    </div>
  )
} 

export default Res_card;
