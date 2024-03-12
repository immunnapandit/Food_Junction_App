import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants,setListOfRestaurant]= useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1471479974105&lng=79.91420812904835&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // console.log(json);

        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        }

        function filterRestaurant(){
            setListOfRestaurant(listOfRestaurants.filter((e)=>(e.info.avgRating>4)))
    }

    if(listOfRestaurants.length===0){
        return <Shimmer/>;
    }

    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={()=> filterRestaurant()}>Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>(
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant.info}/>
                ))}
        </div>
     </div>
    )
}
export default Body;