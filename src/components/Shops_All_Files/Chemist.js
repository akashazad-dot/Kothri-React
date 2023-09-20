import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";
function Chemist() {
  return (
    <div className="Chemist-Container">
      <div id="header">
        <div class="header">
          <h1>Chemist Stores</h1>
        </div>
      </div>

      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>Bharat Medical Store</h3>
              <p>
                Add.:- Indore-Bhopal Highway in-front of Panchayat Kothri,Kothri
              </p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/DWXf2JkUYiJ9paix6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Shree Sanwariya Medical Store</h3>
              <p>Add.:- Indore-Bhopal Highway Bust Stand Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/aGJeewQW3yBqRRkK8">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Prabhu Kripa Medical Store</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/TAoJoWb5WDxHjjzE7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Laxmi Medical Store</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/2PzqvE4ndviz4g4VA">
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

export default Chemist;
