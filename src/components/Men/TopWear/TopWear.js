import React from "react";
import "./TopWear.css";
function TopWear() {
  return (
    <div className="top">
      <h5>TopWear</h5>
      <div className="top-items">
        <img
          src={require("../../../assets/baby-newborn.jpg").default}
          alt="/"
        />
        <img src={require("../../../assets/home.jpg").default} alt="/" />
        <img src={require("../../../assets/home.jpg").default} alt="/" />
        <img src={require("../../../assets/home.jpg").default} alt="/" />
        <img src={require("../../../assets/home.jpg").default} alt="/" />
        <img src={require("../../../assets/home.jpg").default} alt="/" />
      </div>
    </div>
  );
}

export default TopWear;
