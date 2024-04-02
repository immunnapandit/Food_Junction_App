// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { MENU_API  } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>{
    // const [resInfo,setResInfo]=useState(null);
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    // useEffect(()=>{
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () =>{
    //     const data = await fetch(MENU_API );
    //     const json = await data.json();

    //     console.log(json);
    //     setResInfo(json.data);
    // };

    if(resInfo === null) return <Shimmer/>;

    const{name,cuisines,costForTwoMessage} = 
        resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} =
    //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            c.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories)

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")}- {costForTwoMessage}
            </p>
            {categories.map((category)=>(
                <RestaurantCategory data = {category?.card?.card}/>   
            ))}
            {/* <ul>
                {itemCards.map((item) =>(
                    <li key={item.card.info.id}>
                        {item.card.info.name}-{" Rs."}
                        {item.card.info.price / 100 || item.card.info.defaultPrice /100}
                    </li>
                ))}     
            </ul>   */}
        </div>
    )
}
export default RestaurantMenu;