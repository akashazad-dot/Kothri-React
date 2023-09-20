import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";
function Cycle() {
  return (
    <div className="Cycle-Container">
      <div id="header">
        <div class="header">
          <h1>Bicycle repairs Shops</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>D.R. Panchal Cycle shop</h3>
              <p>
                Add.:- Indore-Bhopal Highway In-front of society kothri,Kothri
              </p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/Fzvp4ijBHxJqzPmp9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Ravi Cycle shop</h3>
              <p>
                Add.:- Indore-Bhopal Highway In-front of society Kothri,Kothri
              </p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/Fzvp4ijBHxJqzPmp9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            {/* <!-- <div class="box" id="box-3">
                    <h3>Hanshika Online</h3>
                    <p>Add.:- Indore-Bhopal Highway In-front of High Secondary School,Kothri</p>
                    <span>Location:-</span><a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6"><i class="fa-solid fa-location-dot"></i></a>
                    <span class="Contact">Contact No. :-8269687075</span>
                </div> -->
                <!-- <div class="box" id="box-4">
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

export default Cycle;
