import RestaurantCard, { withPromtedLabel } from './RestaurantCard';
import resList from '../utils/mockdata';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

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
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className='search-box border border-solid border-black' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                </div>
                <div className="search m-4 p-4">

                    <button className='px-4 py-2 bg-green-100 rounded-lg' onClick={() => {
                        //Filter the resturant carads and updated the UI
                        //searchText
                        console.log(searchText)

                        const filterResturant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        // setListOfRestraunt(filterResturant)
                        setFilteredRestaurant(filterResturant)

                    }}>Search</button>
                    <button className="filter-btn px-4 py-2 bg-gray-500" onClick={() => {
                        const filterList = resList.filter((res) => res.info.avgRating > 4.5)
                        console.log(filterList)
                        setListOfRestraunt(filterList)
                    }}>
                        Top rated
                    </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap items-center justify-center" >
                {

                    // listOfRestaurants.map((restaurant) => (<RestaurantCard resData={restaurant} key={restaurant?.info.id} />))

                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>
                            {
                                //If the resturant is promoted then add a promoted label to it
                                restaurant?.info.promoted ? (<RestaurantCardPromoted resData={restaurant?.info} />) : (<RestaurantCard resData={restaurant?.info} />
                                )

                                // <RestaurantCard resData={restaurant?.info} />
                            }
                        </Link>
                    ))
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