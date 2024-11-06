import { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

// Named Export 
export const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    console.log("Header Render")

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render (just once)

    useEffect(() => {
        console.log("useEffect Called")
    }, [btnNameReact]);

    return (
        <div className="header">
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About us
                        </Link>

                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Card</li>
                    <button className='Login' onClick={() => {
                        btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>

            </div>
        </div>

    )
}

export default Header;