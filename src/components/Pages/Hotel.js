import React from "react";
import { Hotels } from "../../Assests/Image";
import { FaLocationDot } from "react-icons/fa6";
function Hotel() {
  const styleImg = {
    height: "500px",
    width: "80%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };
  return (
    <div className="Hotel-Container">
      <div id="section">
        <div class="section">
          <img src={Hotels} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Dream Resort</h3>
              <p>Add.:- Indore-Bhopal Highway Jatakheda Jod,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/pr8Pn62oVN8qvD6X6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Hotel Pratiksha Palace</h3>
              <p>Add.:- Near ode Chaupati Chouraha Indore Bypass,Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/dkjXNrqm7ap8z2uE9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Hotel Sapna</h3>
              <p>Add.:- Infront of Reliance Petrol Pump Bhopal Bypass,Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/DiSgAwTU5XZtK7EU9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Hotel Nikunj</h3>
              <p>Add.:- Near Manas Bhawan,Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/TjnDuH7K9gvbMEuD9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Hotel Surana</h3>
              <p>Add.:- Near New Sabzi Mandi Ashta, Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/eXFVQLfxpbzrvBCN6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-6">
              <h3>Hotel Kalpshil</h3>
              <p>Add.:- Near old Dahshera Maidan Ashta,Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/B6JFi5iVoSXS2H9EA">
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

export default Hotel;
