import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockdata';
import { useState, useEffect } from 'react';


const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json)
        
        // Optional Chaining
        setListOfRestraunt(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants)


    };

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = resList.filter((res) => res.info.avgRating > 4.5)
                    console.log(filterList)
                    setListOfRestraunt(filterList)
                }}>
                    Top rated Resturantsssssssssssss
                </button>

            </div>
            <div className="res-container" >
                {
                    listOfRestaurants.map((restaurant) => (<RestaurantCard resData={restaurant} />))
                }
                {/* No need to write <RestaurantCard /> again and again  */}

                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} /> */}

                {/* resData - this is the props and resList is the real data */}

                {/* <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian , Asian" >
                <RestaurantCard resName="KFC" cuisine="Burger, fast Food" /> */}


            </div>
        </div>
    )
}

export default Body;