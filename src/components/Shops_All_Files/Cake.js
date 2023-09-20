import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";
function Cake() {
  return (
    <div className="Cake-Container">
      <div id="header">
        <div className="header">
          <h1>Bakery/Cake Shop</h1>
        </div>
      </div>

      <div id="section">
        <div className="section">
          <section>
            <div className="box" id="box-1">
              <h3>New Mantri Bakery/Cake Store </h3>
              <p>Add.:- Indore-Bhopal Highway Bus Stand Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/9RLze4b5Zua89PBQ9">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-2">
              <h3>Mantri Bakery/Cake Store</h3>
              <p>Add.:- Indore-Bhopal Highway Nipaniya Jod Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/QGnTLBLdZeRiua4XA">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-3">
              <h3>Rathore Bakery/Cake Store</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/Nn6Ny8q1YVpd5URt8">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-4">
              <h3>Mehta Bakery/Cake Store</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/Wcigas5qJPohgJwD6">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-5"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cake;
