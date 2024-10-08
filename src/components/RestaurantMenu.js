import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantsMenu"

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    if (resInfo === null){
        return <Shimmer />;
    }else{
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

        console.log("resInfo : ", resInfo);
        
        const menu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

        console.log("menu : ", menu);


        return (
            <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{costForTwoMessage}</h3>

            </div>
        );
    }
};


export default RestaurantMenu;