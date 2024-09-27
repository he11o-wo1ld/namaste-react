import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_URL} from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchmenu();
    }, []);


    const fetchmenu = async() => {
        const data = await fetch(
            `${MENU_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`
        )
        
        const json = await data.json();
        const jsonData = json?.data;
        setResInfo(jsonData);
    }
    
    if (resInfo === null){
        return <Shimmer />;
    }else{
        const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
        const menu = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;


        return (
            <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{costForTwoMessage}</h3>

            <h2>Menu</h2>
            
            {/* <div>
                {menu.cards.slice(2, menu.cards.length-2).map((item, i) => (
                    <div>
                        <h3 key={item.card.card.title}>{item.card.card.title}</h3>
                        <ul>
                            {item.card.card.itemCards.map((res) => (
                                <li key={res.card.info.id}>{res.card.info.name} : {res.card.info.price}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div> */}
            <ul>
                {menu.cards[2].card.card.itemCards.map((res) => (
                    <li key={res.card.info.id}>{res.card.info.name} : RS - {res.card.info.price / 100 || res.card.info.defaultPrice / 100}.00</li>
                ))}
            </ul>

            </div>
        );
    }
};


export default RestaurantMenu;