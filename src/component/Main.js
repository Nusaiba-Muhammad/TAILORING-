import React from "react";
import videos from "../assess/video/home-page.mp4";

function Main() {
  return (
    <div>
      <div className="wrapper">
        <video muted autoPlay loop className="sect">
          <source src={videos} type="video/mp4" />
        </video>
      </div>
      <div className="home-page">
        <h1>Tailoring made digital</h1>
      </div>
    </div>
  );
}

export default Main;
