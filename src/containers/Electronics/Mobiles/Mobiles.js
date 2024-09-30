import React from "react";
import "./Mobiles.css";

function Mobiles() {
  return (
    <div className="mobiles">
      Meesho has over 50 lakh products in different categories like clothes,
      cosmetics, and household items. There are over 650+ categories of products
      to choose from. You can read reviews and user feedback before placing an
      order. Some of the popular product categories are women's ethnic wear,
      men's top wear, western wear, accessories, and home essentials. Meesho
      also conducts regular quality checks to ensure that you get products of
      the best quality.
      <h1> mobiles</h1>
      <div className="m-card">
        <div className="card" style={{ width: "18rem", margin: "0 25px" }}>
          <img
            src={require("../../../assets/mobile.jpg").default}
            className="card-img-top"
            alt="/"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Add Card
            </a>
          </div>
          </div> 
          <div
            className="card"
            style={{
              width: "18rem",
              margin: "0 25px",
              
            }}
          >
            <img
              src={require("../../../assets/mobile.jpg").default}
              className="card-img-top"
              alt="/"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Add Card
              </a>
            </div>
          
        </div>
        <div
            className="card"
            style={{
              width: "18rem",
              margin: "0 25px",
              
            }}
          >
            <img
              src={require("../../../assets/mobile.jpg").default}
              className="card-img-top"
              alt="/"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Add Card
              </a>
            </div>
          
        </div>
        <div
            className="card"
            style={{
              width: "18rem",
              margin: "0 25px",
              
            }}
          >
            <img
              src={require("../../../assets/mobile.jpg").default}
              className="card-img-top"
              alt="/"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Add Card
              </a>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Mobiles;
