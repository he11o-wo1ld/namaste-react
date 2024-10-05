import { Link } from "react-router-dom";
import Resturant from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
    // const restaurant = useRestaurant();

    const [listOfResturants, setListOfResturants] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(SWIGGY_URL);
        
        const jsonData = await data.json();
        
        // Optional Chaining
        const resturants = jsonData?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("jsonData : ", jsonData.data.cards);

        setListOfResturants(resturants);
        setFilterResturants(resturants);
    }
    

    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false){
        
        return ( 
            <h1>Looks like you are Offline! Please Check Your Internet or WiFi Connection.</h1> 
        );
    } else {

        // Conditional Rendering
        return listOfResturants?.length <= 0 ? (
            <Shimmer/> 
        ) : (
            <div className="body">
                <div className="filter">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button onClick={() => {
                        const filterRestrants = listOfResturants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilterResturants(filterRestrants);
                    }}>search</button>

                    <button 
                        className="filter-btn"
                        onClick={() =>{
                            const filterList = listOfResturants.filter(
                                (item) => item.info.avgRating > 4.2
                            );
                            setFilterResturants(filterList);
                        }}
                    >
                        Top Rated Resturants
                    </button>
                </div>
                
                <div className="res-container">
                    
                    {filterResturants?.map((restaurant) => (
                        
                        <Link to={`/restaurants/${restaurant?.info?.id}`}>
                        <Resturant 
                            resData = {restaurant}
                            key={restaurant?.info?.id}
                            {...restaurant?.info}
                        />
                        </Link>
                    ))}

                </div>
            </div>
        )
    }
}


export default Body;
