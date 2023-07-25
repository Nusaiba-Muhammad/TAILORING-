import React from "react";

function Section(props) {
  return (
    <div className="section">
      <div className="section-outer">
        <div className="section-text-outer">
          <div className="section-text">
            <div className="header">
              <h1>{props.title}</h1>
            </div>
            <div className="section-body">
              <p>{props.body}</p>
            </div>
          </div>
        </div>
        <div className="section-inner">
          <img src={props.img} height={700} />
        </div>
      </div>
    </div>
  );
}

export default Section;
