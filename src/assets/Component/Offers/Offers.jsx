import React from "react";
import "./Offers.scss";
import exclusive_image from "../../Gallery/exclusive_image.png";
function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCT</p>
        <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} />
      </div>
    </div>
  );
}

export default Offers
