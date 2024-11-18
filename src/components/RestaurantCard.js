// import the name import 
import { CDN_URL } from '../utils/constants';


const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        // deliveryTime,
        sla
    } = resData?.info;
    // console.log(props)
    return (
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
        // style={styleCard}
        >
            <img className="res-logo rounded-lg" src={
                CDN_URL + cloudinaryImageId
            } />
            <h3 className='font-bold py-4 text-xl'>{name}</h3>
            <h4 >{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            {/* <h4>₹{costForTwo / 100} For Two</h4> */}
            <h4>{costForTwo}</h4>
            {/* <h4>{deliveryTime} minutes</h4> */}
            <h4>{sla?.slaString} minutes</h4>

        </div>
    )
}

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };
  
export default RestaurantCard;