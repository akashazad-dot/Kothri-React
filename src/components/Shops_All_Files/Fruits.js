import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";

function Fruits() {
  return (
    <div className="Fruits-container">
      <div id="header">
        <div class="header">
          <h1>Fruits Shops</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>Malakar Fruits</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/er74UhoV8F7mPj4C8">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Rathore Fruits</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/v89JYYzdQKmk9vzu8">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Mahakal Fruits</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/Q3WVXf9buDFNtQ5s6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Fruits;
