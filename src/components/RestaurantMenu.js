import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantsMenu"
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    console.log("Name from RestaurantMenu")

    const [showIndex, setShowIndex] = useState(0);
    
    if (resInfo === null){
        return <Shimmer />;
    }else{
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

        const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        return (
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(',')} - {costForTwoMessage}</p>

                {categories.map((category, index) => (
                    // Controlled Component
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItems={index === showIndex && true}
                        // Lifting State Up React
                        setShowIndex={() => setShowIndex(index)}
                        itemIndex={showIndex}
                    />
                ))}
            </div>
        );
    }
};


export default RestaurantMenu;
