import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-outer">
        <div className="card-inner">
          <img src={props.image1} height={400} className="image-one" />
          {/* <img src={props.image2} height={400} className="image-two" /> */}
        </div>
        <div className="card-text-outer">
          <div className="card-text">
            <div className="header">
              <h1>{props.heading}</h1>
            </div>
            <div className="card-body">
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </div>

      {/* */}
    </div>
  );
}

export default Card;
