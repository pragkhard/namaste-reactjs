import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    //fetchData
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6161&lng=73.7286&restaurantId=14780&catalog_qa=undefined&submitAction=ENTER").

        // Here i am adding the resId 

        const data = await fetch(MENU_API + resId)

        const json = await data.json()

        // console.log(json);
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestaurantMenu;