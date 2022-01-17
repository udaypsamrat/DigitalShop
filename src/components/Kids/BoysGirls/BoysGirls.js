import React from "react";
import "./BoysGirls.css";

function BoysGirls() {
  return (
    <div className="boysgirls">
      {" "}
      <h5>boys and girls</h5>
      <div className="bg-items">
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
        <img src={require("../../../assets/girls-kids.jpg").default} alt="" />
      </div>
    </div>
  );
}

export default BoysGirls;
