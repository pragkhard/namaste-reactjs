import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// useParam hook  to get the dymanic ids
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    // const params = useParams()
    // console.log(params)

    // destructuring
    const { resId } = useParams()
    console.log(resId)

    // create custom hook

    const resInfo = useRestaurantMenu(resId)

    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6161&lng=73.7286&restaurantId=14780&catalog_qa=undefined&submitAction=ENTER").

    //     // Here i am adding the resId 

    //     const data = await fetch(MENU_API + resId)

    //     const json = await data.json()

    //     console.log(json);
    //     setResInfo(json.data)
    // }

    if (resInfo == null) return <Shimmer />

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    // console.log("Its me" + itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")}- {costForTwo}</p>
            {/* <p>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards[0]?.card?.info.name}</p> */}
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}- {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}

                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>Burgers</li>
                <li>Diet Cake</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;