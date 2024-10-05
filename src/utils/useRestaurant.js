import { useState, useEffect } from "react";
import { SWIGGY_URL } from "./constants";


const useRestaurant = () => {

    const [listOfResturants, setListOfResturants] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);

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

    return [listOfResturants, filterResturants];
}


export default useRestaurant;