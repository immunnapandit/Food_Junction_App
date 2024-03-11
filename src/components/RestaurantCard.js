const RestaurantCard = (props) => {
    console.log(props);
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5c8fa0250094725311629f6d1cd88571"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.5 Rating</h4>
            <h4>20 Minutes</h4>
        </div>
    )
}
export default RestaurantCard;