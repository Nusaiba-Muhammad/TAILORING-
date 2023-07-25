import React, { useState } from "react";
import bottomData from "./bottomData";

function Bottom() {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => setChecked(!checked);
  const bottomElement = bottomData.map((object) => (
    <div className="package-container">
      <div className="packages">
        {/* <div className="sale-box">
          <span className="on_sale title_shop">
            Customer saving
            <br />
            $260.00
          </span>
        </div> */}
        <h1>{object.header1}</h1>
        {!checked ? (
          <h2 className="text1">{object.header2}</h2>
        ) : (
          <h2 className="text2">{object.header3}</h2>
        )}
        <ul className="list">
          <li className="first">{object.test1}</li>
          <li>{object.test2}</li>
          <li>{object.test3}</li>
          <li>{object.test4}</li>
        </ul>
        <a href="#" className="button button1">
          {object.link}
        </a>
      </div>
    </div>
  ));
  return (
    <div>
      {/* {JSON.stringify(checked)} */}
      <div className="container--mail">
        <div className="top">
          <h1 className="h1">Plans & Pricing</h1>
          <div className="toggle-btn">
            <span style={{ margin: "0.8em" }} className="span-text">
              Monthly
            </span>
            <label className="switch">
              <input
                type="checkbox"
                id="checbox"
                checked={checked}
                onClick={handleChecked}
              />
              <span className="slider round"></span>
            </label>
            <span style={{ margin: "0.8em" }} className="span-text">
              Annually
            </span>
          </div>
        </div>

        <div className="containa">{bottomElement}</div>
      </div>
    </div>
  );
}

export default Bottom;
