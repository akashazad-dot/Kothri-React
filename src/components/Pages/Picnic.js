import React from "react";
import { Picnics } from "../../Assests/Image";
import { FaLocationDot } from "react-icons/fa6";

function Picnic() {
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
    <div className="Picnic-Container">
      <div id="section">
        <div
          class="text"
          style={{ textAlign: "center", paddingBottom: "20px" }}
        >
          <h1>Picnic Spots</h1>
        </div>
        <div class="section">
          <img src={Picnics} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Cresent Water Park</h3>
              <p>Add.:- Indore-Bhopal Highway Sehore,Sehore</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/MxcgLzCqEmwHfGd39">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Rampura Dam</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Kusmaniya Ghat</h3>
              <p>Add.:- In Between Kannod and Ashta,Kusmaniya</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/PWjVvPMj3PSRHK7z9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Dream Resosrt</h3>
              <p>Add.:- Indore-Bhopal Highway Jatakheda Jod,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/Nhxdbah7o6P5NHmk8">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Shalimaar Resort</h3>
              <p>Add.:- Indore-Bhopal Highway Near Ode Chopati,Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/Lc4hYR3r1TF93wbX9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-6">
              <h3>Hanumantiya Tapu</h3>
              <p>Add.:- Khandwa,MadhyaPradesh</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/fhNPmssu4YaGKh116">
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

export default Picnic;
