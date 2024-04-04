import { RES_URL } from "../utils/constants";
// import Star from "../assets/images/green star.png";
import Star from "../assets/green star.png"
import { useContext } from "react";
import UserContext from "../utils/UserContext";



const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext)

   const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
   }=resData; 
   
    return(
        <div className="m-4 p-6 flex-col w-[250px] overflow-x-auto overflow-y-hidden rounded-lg bg-green-100 hover:bg-gray-200">
            <img
            className="rounded-lg" 
            alt="res-logo" 
            src={RES_URL + cloudinaryImageId}>
          </img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <div className="flex gap-1 items-start">
            <img src={Star} alt="starrating" className="w-4" />
            <h4 className="text-sm">{avgRating} </h4>
            </div>
            
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>
            <h4>User:{loggedInUser}</h4>
        </div>
    );
};

//Higher Order Component 

//Input - RestaurantCard ==> RestaurantCardPromotec

// export const withPromotedLabel = (RestaurantCard) =>{
//     return (props) => {
//         return (
//             <div>
//                 <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
//                      Promoted</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }

export default RestaurantCard;