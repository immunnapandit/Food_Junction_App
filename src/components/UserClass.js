import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurant]= useState([]);

    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1471479974105&lng=79.91420812904835&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

         console.log(json);
        //Optional Chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
        // function filterRestaurant(){
        //     setListOfRestaurant(listOfRestaurants.filter((e)=>(e.info.avgRating>4.5)))
    

    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>;
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus ===false)
        return(
            <h1>
                you're offline !! Please check your internet connection
            </h1>
    )


    return listOfRestaurants.length===0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                    type="text"
                    className="border border-solid border-black"
                    value={searchText} 
                    onChange={(e)=>{
                    setSearchText(e.target.value);
                    }}>
                    </input>

                    <button className="px-4 py-2 bg-green-300 m-4"
                    onClick={()=>{
                        console.log(searchText);

                        const filteredRestaurant  = listOfRestaurants.filter((res)=>
                         res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setfilteredRestaurant(filteredRestaurant);

                    }}>
                    search
                </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={()=>{
                const filteredList = filteredRestaurant.filter(
                (res) => res.info.avgRating>4.5
                );
                setListOfRestaurant(filteredList);
                 }}>Top Rated Restaurants
                </button>
            </div>  
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant)=>(
                    <Link
                    key={restaurant.info.id}
                    to={"/restaurants/"+restaurant.info.id}
                 >
                <RestaurantCard resData = {restaurant.info}/>
             </Link>
            ))}
        </div>
     </div>
    );
};
export default Body;