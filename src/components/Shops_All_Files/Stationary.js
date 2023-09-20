import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";
function Stationary() {
  return (
    <div className="Stationary-Container">
      <div id="header">
        <div class="header">
          <h1>Stationary Shops</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>Hariom Stationary</h3>
              <p>Add.:- VIT Chouraha Gavakheda Jod,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/VRA9US48ecByUbMC7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Raj Stationary</h3>
              <p>Add.:- Indore-Bhopal Bus stand Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Muskan Stationary</h3>
              <p>Add.:- Bada Bazaar Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/Xuy6D7t1vPmtpU9i6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            {/* <!-- <div class="box" id="box-4">
                    <h3></h3>
                    <p>Add.:- Bada Bazaar Kothri,Kothri</p>
                    <span>Location:-</span><a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6"><i class="fa-solid fa-location-dot"></i></a>
                </div> --> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Stationary;
