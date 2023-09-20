import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";

function Bike() {
  return (
    <div className="Bike-Container">
      <div id="header">
        <div class="header">
          <h1>Bike repairs Shops</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>Panchal Auto Garage</h3>
              <p>
                Add.:- Indore-Bhopal Highway In-front of society Pathar,Kothri
              </p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/Fzvp4ijBHxJqzPmp9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Princy Auto Garage</h3>
              <p>Add.:- Indore-Bhopal Highway near Mata mandir Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/sFK17mDX141Ycfv9A">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Shree Sanwariya Auto Garage </h3>
              <p>
                Add.:- Indore-Bhopal Highway In-front of High Secondary
                School,Kothri
              </p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/YN6oPshi1Gux67QSA">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Patel Auto Garage </h3>
              <p>Add.:- Indore-Bhopal Highway Bus Stand kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/iamWkwrVj5EYK9sE8">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Sonu Auto Garage </h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/hHU19De6KU7PN9Ab8">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-6"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Bike;
