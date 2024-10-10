import ItemList from "./ItemList";


const RestaurantCategory = ({ data, showItems, setShowIndex, itemIndex }) => {

    const {title, itemCards} = data;
    
    const handleClick = (itemIndex) => {
        console.log("itemIndex : ", itemIndex)
        
        if(setShowIndex() === itemIndex){
            setShowIndex(!itemIndex);
        }
        setShowIndex();
    }

    return (
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="text-xl font-semibold">{title} ({itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={itemCards} dummy={itemIndex}/>}
        </div>
    );
}

export default RestaurantCategory;
