import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const {loggedInUser, setUserName} = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1471479974105&lng=79.91420812904835&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json)

        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>You're offline !! Please check your internet connection</h1>;
    }

    const filterTopRatedRestaurants = () => {
        const topRatedRestaurants = listOfRestaurants.filter(res => res.info.avgRating > 4.5 );
        setFilteredRestaurant(topRatedRestaurants);
    };


    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 bg-green-300 m-4 rounded-lg"
                        onClick={() => {
                            const filteredResult = filteredRestaurant.filter(res =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredResult);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={filterTopRatedRestaurants}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName</label>
                    <input className="border border-black P-2" 
                    value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}></input>
                </div> 
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                    <RestaurantCard resData={restaurant.info} />
                </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;
