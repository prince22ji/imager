import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
function Navbar() {
  const [translated, setTranslate] = useState("");
  const translation = () => {
    if (window.scrollY > 50) {
      setTranslate(true);
      console.log("this was executed");
    } else {
      setTranslate("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", translation);
    return () => {
      window.removeEventListener("scroll", translation);
    };
  });
  return (
    <div className="navbar">
      {/* <div className="logo">
        <h1>Imager</h1>
      </div> */}
      <ul className={` navList ${translated && "navbarScrolled"}`}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/top_picks">
          <li>Top Picks</li>
        </Link>
        <Link to="/top_rated">
          <li>Top Rated</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
