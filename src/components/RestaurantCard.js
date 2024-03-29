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
        <div className="res-card">
            <img
            className="res-logo" 
            alt="res-logo" 
            src={RES_URL + cloudinaryImageId}>
          </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
};
export default RestaurantCard;