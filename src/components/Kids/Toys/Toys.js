import React from "react";
import "./Toys.css";

function Toys() {
  return (
    <div className="toys">
      <h5>Toys</h5>
      <div className="toys-items">
        <img
          src={require("../../../assets/child-winter.jpg").default}
          alt="/"
        />
        <img
          src={require("../../../assets/child-winter.jpg").default}
          alt="/"
        />
        <img
          src={require("../../../assets/child-winter.jpg").default}
          alt="/"
        />
        <img
          src={require("../../../assets/child-winter.jpg").default}
          alt="/"
        />
        <img
          src={require("../../../assets/child-winter.jpg").default}
          alt="/"
        />
        <img
          src={require("../../../assets/child-winter.jpg").default}
          alt="/"
        />
        <img
          src={require("../../../assets/child-winter.jpg").default}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Toys;
