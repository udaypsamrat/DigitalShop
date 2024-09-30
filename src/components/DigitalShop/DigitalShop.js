import React from "react";
import "./DigitalShop.css";
import { Link } from "react-router-dom";


function DigitalShop() {
  return (
    <div className="dig">
      <div className="d-offer">
        <div className="dig-lowest">
          <h3>
            Lowest Prices <br />
            Best Quality Shopping
          </h3>
          <h5>5 lakh+ Styles | 650+ categories</h5>
        </div>
        <div className="d-special">
          <img src={require("../../assets/70offer.jpg").default} alt="/" />
        </div>
      </div>{" "}
      <div className="d-other">
        <Link to="/men/topwear">
          <img src={require("../../assets/home.jpg").default} alt="" />
        </Link>
        <Link to="/kids/babycare">
          <img src={require("../../assets/home.jpg").default} alt="" />
        </Link>
        <Link to="/kids/toys">
          <img src={require("../../assets/home.jpg").default} alt="" />
        </Link>
        <Link to="/electronics/Tevelisions">
          <img src={require("../../assets/home.jpg").default} alt="" />
        </Link>
      </div>
      <h2 className="digh">Top Categories to choose from</h2>
      
    </div>
  );
}

export default DigitalShop;
