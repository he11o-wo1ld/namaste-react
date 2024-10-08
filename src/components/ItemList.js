import {ITEM_IMAGE_URL} from "../utils/constants"

const ItemList = ({items}) => {
    console.log("items : ", items);

    // const {name, price, description} = items.card.info;

    return (
        <div>
            {items.map((item) => (
                <div className="flex justify-between">
                    <div key={item?.card?.info?.id} className="m-4 p-4 border-b-2 text-left">
                        <div className="font-bold py-2">
                            <span>{item?.card?.info?.name}</span>
                            <h2>₹ {item?.card?.info?.price / 100}</h2>
                            <div>
                                <span className="text-green-900">★ {item?.card?.info?.ratings.aggregatedRating.rating}</span>
                                <span className="text-sm text-gray-500">({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                            </div>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    
                    <img className="w-36 object-cover" src={`${ITEM_IMAGE_URL}/${item?.card?.info?.imageId}`}/>
                </div>
            ))}
        </div>
    )
}

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/6314503693e4764ffa1a6ecfeea15d48

export default ItemList;