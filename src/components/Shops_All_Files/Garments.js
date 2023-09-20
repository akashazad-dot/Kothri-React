import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";

function Garments() {
  return (
    <div className="Garments-Container">
      <div id="header">
        <div class="header">
          <h1>Garments Shops</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>Hariom Jeans Corner</h3>
              <p>Add.:- Pawan chauk kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/5tFrXA7rC5HHabnQ6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Pooja Garments</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/KcqrUuD2enBySYx89">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Dev Garments</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/ze2gBxTPTydejTrQ8">
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

export default Garments;
