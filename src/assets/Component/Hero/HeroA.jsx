import React from "react";
import "./HeroB.scss";
import hero_image from '../../Gallery/hero_image.png'

function HeroA() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src="https://cdn-icons-png.flaticon.com/512/5619/5619967.png"
              width={100}
            />
           
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-button">
          <div>Latest collections</div>
          
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt=""width={420}  />
      
      </div>
    </div>
  );
}

export default HeroA;
