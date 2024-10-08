import {CDN_URL} from "../utils/constants"


const Resturant = (props) => {
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, avgRating} = props;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-orange-300">
            <img 
                className="res-logo rounded-2xl border-opacity-25 shadow-xl"
                alt="res-logo" 
                src={CDN_URL + cloudinaryImageId}
                />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                <h4>Rating : {avgRating}</h4>
                <h4>Delivery Time : {props.sla.deliveryTime}</h4>
        </div>
    )
}


export const withPromotedLabel = (Resturant) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Badge</label>
                <Resturant {...props}/>
            </div>
        )
    }
}


export default Resturant;
