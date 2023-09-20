import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";

function Saloon() {
  return (
    <div className="Saloon-Container">
      <div id="header">
        <div class="header">
          <h1>Hair Saloons</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>New #Hair Style Saloon</h3>
              <p>Add.:- VIT Chouraha Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/Y6X7jhRpypLyMrfA7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>#Hair Style Saloon</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/ypTcEU7Q7cnKw7ZTA">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Smart Saloon</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/wKiobLXzZ4CvUSWx7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>

            <div class="box" id="box-4">
              <h3>RP Life Style Saloon</h3>
              <p>Add.:- Indore-Bhopal Highway Bus Stand,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/SDhmmummJuWAwo799">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Mateshwari Saloon</h3>
              <p>Add.:- Indore-Bhopal Highway Bus Stand,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/SDhmmummJuWAwo799">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-6">
              <h3>Mateshwari Saloon</h3>
              <p>Add.:- Indore-Bhopal Highway Bus Stand,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/SDhmmummJuWAwo799">
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

export default Saloon;
