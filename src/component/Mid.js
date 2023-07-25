import React from "react";
import midData from "./midData";

const midElement = midData.map((obj) => (
  <div className="container-2">
    <div className="container-3">
      <p className="number">{obj.number}</p>
      <h2>{obj.name}</h2>
      <p className="text">{obj.text}</p>
    </div>
  </div>
));

function Mid() {
  return <>{midElement}</>;
}

export default Mid;
