import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockdata';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");


    //whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
    // console.log("Body Rendered")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        // console.log(json)

        // Optional Chaining
        setListOfRestraunt(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants)

    };
    // use the custom hook here 
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection;
            </h1>
        );

    // Conditional rendering 
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    // OR

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <input type="text" className='search-box' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button onClick={() => {
                    //Filter the resturant carads and updated the UI
                    //searchText
                    console.log(searchText)

                    const filterResturant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                    // setListOfRestraunt(filterResturant)
                    setFilteredRestaurant(filterResturant)

                }}>Search</button>
                <button className="filter-btn" onClick={() => {
                    const filterList = resList.filter((res) => res.info.avgRating > 4.5)
                    console.log(filterList)
                    setListOfRestraunt(filterList)
                }}>
                    Top rated
                </button>

            </div>
            <div className="res-container" >
                {

                    // listOfRestaurants.map((restaurant) => (<RestaurantCard resData={restaurant} key={restaurant?.info.id} />))

                    filteredRestaurant.map((restaurant) => (<Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}><RestaurantCard resData={restaurant} /></Link>))
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