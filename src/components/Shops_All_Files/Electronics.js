import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";
function Electronics() {
  return (
    <div className="Ele-Container">
      <div id="header">
        <div className="header">
          <h1>Electronic Shops</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>Shree Sanwariya Electronics</h3>
              <p>Add.:- Indore-Bhopal Highway Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/2w3KF3kyBCr7qo3Y6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Mantri Electronics</h3>
              <p>Add.:- Indore-Bhopal Highway Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/PnTWDzgCMDr1osZ3A">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Laxmi Electronics</h3>
              <p>Add.:- Indore-Bhopal Highway Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/cDDX3PHNhX8jMxBm9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Apurva Electronics</h3>
              <p>Add.:- Indore-bhopal Highway Bus stand Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/7RxjJT95Cke878Yg7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Electronics;
