import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = (props) => {
    const {title, itemCards} = props.data;

    const [showItems, setShowItems] = useState(true);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-xl font-semibold">{title} ({itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={itemCards}/>}
        </div>
    );
}

export default RestaurantCategory;