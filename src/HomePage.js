import React from "react";
import Card from "./component/Card1";
import Card2 from "./component/Card2";
import Card3 from "./component/Card3";
import cardData from "./component/cardData";
import button from "./assess/img/butin1.png";
import cut from "./assess/img/cut.png";
import fashion from "./assess/img/ankara1.png";
import arrow from "./assess/img/arrow.png";
import Section from "./component/Section";
import Main from "./component/Main";
import Top from "./component/Top";
import sign from "./assess/img/arrow.png";

export default function HomePage() {
  const dataElement = cardData.map((value) => (
    <Card3
      image={value.image}
      description={value.description}
      button={value.button}
    />
  ));

  return (
    <div>
      <Main />

      <Card
        image1={button}
        heading="Your No.1 plug"
        content="Easy Tailor App is a cloud based solution provided to you as an
      service. You get access to your business from any device, from
      any location without worrying about infrastructure management"
      />
      <Section
        img={fashion}
        title="Fashion at it's peak"
        body="Easy Tailor App is a cloud based solution provided to you as an
       service. You get access to your business from any device, from
       any location without worrying about infrastructure management"
      />

      <Card2 image3={cut} />
      <div className="div">
        <center>
          <div className="contain">{dataElement} 
          </div>
        </center>
      </div>
    </div>
  );
}
