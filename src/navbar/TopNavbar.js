import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

function TopNavbar() {
  const [transparentNav, setTransparentNav] = useState("");
  const toggletransparency = () => {
    if (window.scrollY > 50) {
      setTransparentNav(true);
      console.log("this was executed");
    } else {
      setTransparentNav("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggletransparency);
    return () => {
      window.removeEventListener("scroll", toggletransparency);
      console.log("ex");
    };
  }, []);
  return (
    <div className={`topNavbar ${transparentNav && "transparentNav"}`}>
      <div className="topNavLogo">
        <h1 className={`topNavbar ${transparentNav && "logoTranslated"}`}>
          Imager
        </h1>
      </div>
    </div>
  );
}

export default TopNavbar;
