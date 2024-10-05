import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {MENU_URL} from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);


    const fetchMenu = async() => {
        const data = await fetch(
            `${MENU_URL}${resId}&catalog_qa=undefined&submitAction=ENTER`
        );

        const json = await data.json();
        const jsonData = json?.data;
        setResInfo(jsonData);
    }

    return resInfo;
}

export default useRestaurantMenu;