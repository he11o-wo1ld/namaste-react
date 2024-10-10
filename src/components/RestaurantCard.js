import {CDN_URL} from "../utils/constants"
import { useContext } from "react"
import userContext from "../utils/userContext";


const Resturant = (props) => {
    const {resData} = props;

    const {name, cuisines, cloudinaryImageId, avgRating} = props;

    const {loggedInUser} = useContext(userContext);

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-orange-300">
            <img 
                className="res-logo rounded-2xl border-opacity-25 shadow-xl"
                alt="res-logo" 
                src={CDN_URL + cloudinaryImageId}
                />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
                <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                <span className="text-green-900">★</span>
                <span> {avgRating}</span>
                <span>  •  {props.sla.slaString} </span>
                <h4 className="my-2">{cuisines.join(", ")}</h4>
                <h4> User : {loggedInUser}</h4>
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
