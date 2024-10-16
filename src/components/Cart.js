import { ITEM_IMAGE_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch()

    const handelClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center">
            <div>
                <h1 className="font-bold m-6 p-6 text-2xl">Cart</h1>
            </div>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handelClearCart}>
                    Clear Cart
                </button>

                {cartItems.length === 0 && (<h1>Please Add Item in Cart.</h1>)}
                
                {cartItems.map((item) => (
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
                            
                            <img className="w-36 object-cover rounded-lg" src={`${ITEM_IMAGE_URL}/${item?.card?.info?.imageId}`}/>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}


export default Cart;