import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockdata';
import { useState } from 'react';


const Body = () => {
    const [listOfResturant, setlistOfResturant] = useState(resList)


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfResturant.filter((res) => res.info.avgRating > 4)
                    console.log(filterList)
                    setlistOfResturant(filterList)
                }}>
                    Top rated Resturant
                </button>

            </div>
            <div className="res-container" >
                {
                    listOfResturant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))
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