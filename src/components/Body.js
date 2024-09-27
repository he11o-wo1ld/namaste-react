import { Link } from "react-router-dom";
import Resturant from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.88555254585871&lng=77.70360689610243&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const jsonData = await data.json()
        
        // Optional Chaining
        const resturants = jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfResturants(resturants);
        setFilterResturants(resturants);
    }


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
                    
                    <Link to={`/restaurants/${restaurant?.info.id}`}>
                    <Resturant 
                        resData = {restaurant}
                        key={restaurant?.info.id}
                        {...restaurant.info}
                    />
                    </Link>
                ))}

            </div>
        </div>
    )
}


export default Body;