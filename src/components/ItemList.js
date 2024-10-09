import {ITEM_IMAGE_URL} from "../utils/constants"

const ItemList = ({ items }) => {

    // const {name, price, description} = items.card.info;

    // return (
    //     <div>
    //         {items.map((item) => (
    //             <div className="flex justify-between">
    //                 <div key={item?.card?.info?.id} className="m-4 p-4 border-b-2 text-left">
    //                     <div className="font-bold py-2">
    //                         <span>{item?.card?.info?.name}</span>
    //                         <h2>₹ {item?.card?.info?.price / 100}</h2>
    //                         <div>
    //                             <span className="text-green-900">★ {item?.card?.info?.ratings.aggregatedRating.rating}</span>
    //                             <span className="text-sm text-gray-500">({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
    //                         </div>
    //                     </div>
    //                     <p className="text-xs">{item?.card?.info?.description}</p>
    //                 </div>
    //                 <div>
    //                     <label className="absolute font-bold bg-white text-green-600 m-2 p-2 rounded-lg bottom hover:scale-110 transition-transform duration-300 hover:bg-gray-300">ADD</label>
    //                     <img className="w-36 object-cover rounded-lg" src={`${ITEM_IMAGE_URL}/${item?.card?.info?.imageId}`}/>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // )

    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="m-4 p-4 border-b-2 text-left border-gray-200 flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <div>
                                ₹ {item?.card?.info?.price / 100}
                            </div>
                            <div>
                                <span className="text-green-900">★ {item?.card?.info?.ratings.aggregatedRating.rating}</span>
                                <span className="text-sm text-gray-500">({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                            </div>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="px-8 py-2 mx-5 my-28 bg-white shadow-lg m-auto font-bold text-green-600 rounded-lg bottom hover:scale-110 transition-transform duration-300 hover:bg-gray-300">
                                    ADD  
                            </button>
                        </div>
                        <img className="w-36 object-cover rounded-lg" src={`${ITEM_IMAGE_URL}/${item?.card?.info?.imageId}`}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;
