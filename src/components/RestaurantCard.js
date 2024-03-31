import { RES_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;

    // if (!resData) {
    //     return <Shimmer/>
    // }

   const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
   }=resData; 
   
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-green-100 hover:bg-gray-200">
            <img
            className="rounded-lg" 
            alt="res-logo" 
            src={RES_URL + cloudinaryImageId}>
          </img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};
export default RestaurantCard;