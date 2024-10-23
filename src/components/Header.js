import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

// Named Export 
export const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    console.log("Header Render")
    return (
        <div className="header">
            <div className='logo-container'>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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