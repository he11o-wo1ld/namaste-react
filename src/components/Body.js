import { Link } from "react-router-dom";
import Resturant, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import { SWIGGY_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const Body = () => {
    // const restaurant = useRestaurant();

    const [listOfResturants, setListOfResturants] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(Resturant);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(SWIGGY_URL);
        
        const jsonData = await data.json();
        
        // Optional Chaining
        const resturants = jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

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
        const { loggedInUser, setUserName } = useContext(userContext);

        return listOfResturants?.length <= 0 ? (
            <Shimmer/> 
        ) : (
            <div className="body m-4 p-4">
                <div className="filter flex">
                    <div className="search">                        
                        <input 
                            type="text" 
                            className="border p-4 m-4 border-solid border-black rounded-lg hover:scale-110 transition-transform duration-300" 
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value)
                            }}
                        />
                    </div>
                    <button 
                        className="px-4 py-1 bg-green-100 m-4 rounded-lg hover:scale-110 transition-transform duration-300 hover:text-green-700 hover:shadow-lg shadow-green-500"
                        onClick={() => {
                        const filterRestrants = listOfResturants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilterResturants(filterRestrants);
                    }} >search</button>

                    <button 
                        className="px-4 py-2 bg-yellow-400 m-4 rounded-xl hover:scale-110 transition-transform duration-300 hover:text-yellow-700 hover:shadow-lg shadow-yellow-600"
                        onClick={() =>{
                            const filterList = listOfResturants.filter(
                                (item) => item.info.avgRating > 4.2
                            );
                            setFilterResturants(filterList);
                        }}
                    >
                        Top Rated Resturants
                    </button>
                    
                    <div>
                        <label>UserName : </label>
                        <input 
                            className="border p-4 m-4 border-solid border-black rounded-lg hover:scale-110 transition-transform duration-300"
                            value={loggedInUser}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                </div>
                
                <div className="flex flex-wrap">
                    
                    {filterResturants?.map((restaurant) => (
                        
                        <Link to={`/restaurants/${restaurant?.info?.id}`}>

                            {JSON.stringify(restaurant.info.badges) != '{}' ? (
                                <RestaurantCardPromoted 
                                    resData = {restaurant}
                                    key={restaurant?.info?.id}
                                    {...restaurant?.info}
                                />) : (<Resturant 
                                    resData = {restaurant}
                                    key={restaurant?.info?.id}
                                    {...restaurant?.info}
                                />
                            )}

                        </Link>
                    ))}

                </div>
            </div>
        )
    }
}


export default Body;
