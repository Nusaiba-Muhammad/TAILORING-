import React from "react";

function Card2({ image3 }) {
  return (
    <div>
      <div className="card1">
        <div className="card1-outer">
          <div className="card1-inner">
            <img src={image3} height={600} className="image-three" />
          </div>
          <div className="card1-text-outer">
            <div className="card1-text">
              <div className="header1">
                <h1>Your No.1 plug</h1>
              </div>
              <div className="card1-body">
                <p>
                  Easy Tailor App is a cloud based solution provided to you as
                  an service. You get access to your business from any device,
                  from any location without worrying about infrastructure
                  management"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
