import React from "react";
import Data from "../BabyCare/data/babycare.json";
import "./BabyCare.css";

function BabyCare() {
  return (
    <div className="babycare">
      babycare
      {Data.data.map((item, i) => (
        <tr key={i}>
          <div className="baby-info">
            <div className="details">
              <img className="babycare-img" src={item.image} alt="img" />
              <h3>{item.name}</h3>
              <h5>{item.category}</h5>
            </div>
          </div>
        </tr>
      ))}
    </div>
  );
}

export default BabyCare;
