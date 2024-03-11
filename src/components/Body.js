import RestaurantCard from "./RestaurantCard";

const Body = (props) => {
    console.log(props);
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Prince Dhaba" cuisine="Egg Roll, North Indian"/>
                <RestaurantCard resName="KFC" cuisine="Burger , North Indian"/>
                <RestaurantCard resName="MCD" cuisine="Biryani, South Indian"/>
        </div>
     </div>
    )
}
export default Body;