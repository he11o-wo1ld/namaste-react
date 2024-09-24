import {CDN_URL} from "../utils/constants"


const Resturant = (props) => {
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId, avgRating} = props;

    return (
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src={CDN_URL + cloudinaryImageId}
                />
            <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                <h4>Rating : {avgRating}</h4>
                <h4>Delivery Time : {props.sla.deliveryTime}</h4>
        </div>
    )
}


export default Resturant;
