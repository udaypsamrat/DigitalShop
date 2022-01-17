import React from "react";
import "./BottomWear.css";

function BottomWear() {
  return (
    <div className="bottom">
      <h5>bottomWear</h5>
      <div className="bottom-items">
        <img src={require("../../../assets/home.jpg").default} alt="" />
        <img src={require("../../../assets/home.jpg").default} alt="" />
        <img src={require("../../../assets/home.jpg").default} alt="" />
        <img src={require("../../../assets/home.jpg").default} alt="" />
        <img src={require("../../../assets/home.jpg").default} alt="" />
        <img src={require("../../../assets/home.jpg").default} alt="" />
        <img src={require("../../../assets/home.jpg").default} alt="" />
        <img src={require("../../../assets/home.jpg").default} alt="" />
        <img src={require("../../../assets/home.jpg").default} alt="" />
      </div>
    </div>
  );
}

export default BottomWear;
