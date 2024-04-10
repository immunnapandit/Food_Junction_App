import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import { Player } from "@lottiefiles/react-lottie-player";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    // const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1471479974105&lng=79.91420812904835&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        const restaurants =
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div className="flex flex-col gap-4 justify-center items-center p-3">
                <Player
                    autoplay
                    loop
                    className="lg:w-[500px] lg:h-[500px]"
                    src="https://assets8.lottiefiles.com/packages/lf20_lillfalp.json"
                />
                <h1>You're offline !! Please check your internet connection</h1>
            </div>
        );
    }

    if (!listOfRestaurants) {
        return (
            <div className="flex flex-col gap-4 justify-center items-center p-3">
                <Player
                    autoplay
                    loop
                    className="lg:w-[500px] lg:h-[500px]"
                    src="https://assets8.lottiefiles.com/packages/lf20_lillfalp.json"
                />
                <h1 className="text-xl font-semibold text-black">
                    Hey there, Doors are closed
                </h1>
                <h4 className="text-base font-normal text-[#808080] lg:w-[500px] text-center">
                    No restaurants available now!
                </h4>
            </div>
        );
    }

    const filterTopRatedRestaurants = () => {
        const topRatedRestaurants = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.5
        );
        setFilteredRestaurant(topRatedRestaurants);
    };

    if (filteredRestaurant.length === 0 && searchText.trim() !== "") {
        return (
            <div className="flex flex-col gap-4 justify-center items-center p-3">
                <Player
                    autoplay
                    loop
                    className="lg:w-[500px] lg:h-[500px]"
                    src="https://assets8.lottiefiles.com/packages/lf20_lillfalp.json"
                />
                <h1 className="text-xl font-semibold text-black">
                    No Restaurants Matches for {searchText}
                </h1>
            </div>
        );
    }

    return (
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
                            const filteredResult = listOfRestaurants.filter((res) =>
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
                {/* <div className="search m-4 p-4 flex items-center">
                    <label>UserName</label>
                    <input
                        className="border border-black P-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div> */}
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
