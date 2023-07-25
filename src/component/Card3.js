import React from "react";

function Card3(props) {
  return (
    <div className="card3">
      <div className="card3-outer">
        <div className="card3-inner">
          <img src={props.image} height={310} />
        </div>
        <div className="card3-text">
          <p>{props.description}</p>
          <div className="card3-button">
            <button> {props.button}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
