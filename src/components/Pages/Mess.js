import React from "react";
import { Canteen } from "../../Assests/Image";
import { FaLocationDot } from "react-icons/fa6";
function Mess() {
  const styleImg = {
    height: "500px",
    width: "80%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    borderRadius: "50px",
  };
  return (
    <div className="Mess-Container">
      <div id="section">
        <div
          class="text"
          style={{ textAlign: "center", paddingBottom: "20px" }}
        >
          <h1>Mess/Tiffin Center</h1>
        </div>
        <div class="section">
          <img src={Canteen} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Pooja Tiffin Center</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/W2GZMTmNd6epBgAM7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Dev Tiffin Center</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/6RfMqKTVQ2bHuH9u9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Pratik Tiffin Center</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Prince Tiffin Center</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Panchayati Restaurant</h3>
              <p>Add.:- VIT Chouraha Near HP Petrol Pump Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/D397ZQctUNUrJphY7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-6">
              <h3>Zaiqa Restaurant</h3>
              <p>Add.:- Near VIT Bhopal Gawakheda Road Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/wnHZBWCJwkP1S9Sn8">
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

export default Mess;
