import React from "react";
import Mid from "./Mid";
import Bottom from "./Bottom";
import topData from "./topData";

const topElement = topData.map((item) => (
  <div className="cards">
    <div className="cards__thumb">
      <a href="javascript:;">
        <img className="animate" src={item.photo} height={550} />
      </a>
    </div>
    <div className="cards__content shadow
    ">
      <h2 className="cards__title animate">
        <a href="javascript:;">{item.head}</a>
      </h2>
      <p className="cards__text">{item.main}</p>
      <button className="cards__btn">
        <i className="fa-solid fa-arrow-right fa-fw"></i>
      </button>
    </div>
  </div>
));

function Top() {
  return (
    <div>
      <div className="main-style">
        <div style={{ margin: "80px 0px", letterSpacing: "0.5px" }}>
          <h1 className="h1">Our Fashion Plug</h1>
          <div className="card_row">{topElement}</div>
        </div>
      </div>
      <hr></hr>
      <div className="main-style">
        <h1 className="h1">Incredible Features</h1>
        <div className="containa">
          <Mid />
        </div>
      </div>
      <hr></hr>

      <div className="main-style">
        <Bottom />
      </div>
    </div>
  );
}

export default Top;
