import React from "react";
import { Clinic } from "../../Assests/Image";
function Clinics() {
  const styleImg = {
    height: "500px",
    width: "80%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };
  return (
    <div className="Clinics-Container">
      <div id="section">
        <div class="section">
          <img src={Clinic} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Government Hospital</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/tUM1ZgaRqoeG4AN68">
                <i class="fa-solid fa-location-dot"></i>
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Bharat Clinic</h3>
              <p>
                Add.:- Indore-Bhopal Highway In-front of Nagar Parishad
                Pathar,Kothri
              </p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/LVRGaHnyVqvsBfSR6">
                <i class="fa-solid fa-location-dot"></i>
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Gupta Clinic</h3>
              <p>Add.:- Indore-Bhopal Highway Bus-Stand Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/h19v7WzUxmYetfUZ9">
                <i class="fa-solid fa-location-dot"></i>
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Prabhu Kripa Clinic</h3>
              <p>
                Add.:- Indore-Bhopal Highway In-front of Govt. Hospital
                Pathar,Kothri
              </p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/ZqG8uhC5HgH7bAUEA">
                <i class="fa-solid fa-location-dot"></i>
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Jamliya Clinic</h3>
              <p>Add.:- Bada Bazaar Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <i class="fa-solid fa-location-dot"></i>
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

export default Clinics;
