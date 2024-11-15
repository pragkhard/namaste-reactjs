import { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

// Named Export 
export const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    // console.log("Header Render")

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render (just once)

//    call the custom hook 
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        // console.log("useEffect Called")
    }, [btnNameReact]);

    return (
        <div className="header flex justify-between  bg-pink-100 shadow-lg m-2  sm:bg-yellow-50 lg:bg-green-50">
            <div className='logo-container'>
                <img className="logo w-40" src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className='px-4'>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className='px-4'>
                        <Link to="/about">
                            About us
                        </Link>

                    </li>
                    <li className='px-4'>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to="/grocery">Grocery</Link>
                    </li>                   
                    <li className='px-4'>Card</li>
                    <button className='Login' onClick={() => {
                        btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>

            </div>
        </div>

    )
}

export default Header;