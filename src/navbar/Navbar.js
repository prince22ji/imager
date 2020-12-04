import React from 'react'
import './navbar.css'
function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
            <h1>
                IMAGER
            </h1>

            </div>
            <ul>
                <li>Home</li>
                <li>Gallery</li>
                <li>Top Picks</li>
                <li>Top Rated</li>
                <li>About Us</li>
            </ul>
        </div>
    )
}
export default Navbar