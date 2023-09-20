import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";

function Vegetable() {
  return (
    <div className="Vegetable-Container">
      <div id="header">
        <div class="header">
          <h1>Vegetables Shops</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>Malakar Vegetables</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/FXTbyMg1VUZUvUpq7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Malakar Vegetables</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Mahakal Vegetables</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
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
export default Vegetable;
