import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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

    return listOfRestaurants.length===0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                    type="text"
                    className="search-box"
                    value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                    }}></input>

                    <button onClick={()=>{
                        console.log(searchText);
                        const filteredRestaurant  = listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setfilteredRestaurant(filteredRestaurant);
                    }}>
                    search
                </button>
            </div>
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating>4
                        );
                        setListOfRestaurant(filteredList);
                    }}>Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant)=>(
                <RestaurantCard key = {restaurant.info.id} resData = {restaurant.info}/>))}
        </div>
     </div>
    );
};
export default Body;