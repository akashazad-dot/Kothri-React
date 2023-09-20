import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";
function General() {
  return (
    <div className="General-Container">
      <div id="header">
        <div className="header">
          <h1>General Stores</h1>
        </div>
      </div>

      <div id="section">
        <div className="section">
          <section>
            <div className="box" id="box-1">
              <h3>Raj General Store</h3>
              <p>Add.:- Indore-Bhopal Highway Bus Stand Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/VRA9US48ecByUbMC7">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-2">
              <h3>Yash General Store</h3>
              <p>Add.:- Pawan Chauk Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/4JDoQyFCx7sdGcdV6">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-3">
              <h3>Pari General Store</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-4">
              <h3>Muskan General Store</h3>
              <p>Add.:- Bada Bazaar Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/Xuy6D7t1vPmtpU9i6">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-5">
              <h3>Chinki General Store</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/rhNYPUn4wDYKWJvMA">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-6">
              <h3>Mukesh Nath General Store</h3>
              <p>Add.:- Bada Bazaar kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default General;
