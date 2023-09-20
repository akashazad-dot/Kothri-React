import React from "react";
import { RestaurantImg } from "../../Assests/Image";
import { FaLocationDot } from "react-icons/fa6";
function Restaurant() {
  const styleImg = {
    height: "500px",
    width: "80%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };
  return (
    <div className="Reataurant-Container">
      <div id="section">
        <div class="section">
          <img src={RestaurantImg} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Mantri Restaurant</h3>
              <p>Add.:- Indore-Bhopal Highway Bus stand Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/9RLze4b5Zua89PBQ9">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>New Mantri Restaurant</h3>
              <p>
                Add.:- Indore-Bhopal Highway Nipaniya jod Pathar Kothri,Kothri
              </p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/cUFY7iXTxbLcwV1Z6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Mehta Restaurant</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/BgvTRXhG79C88kuR6">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Tammanna Restaurant</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/LjfMeUuACsLF1CpS7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Panchayati Restaurant</h3>
              <p>Add.:- VIT Chouraha Near HP Petrol Pump Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/XZdvoK5aZLHKLYk5A">
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
            <div class="box" id="box-7">
              <h3>Hariom Restaurant</h3>
              <p>Add.:- Indore-Bhopal Highway Chopati Ashta,Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/bVnUtD6dMtKs1ez86">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-8">
              <h3>Sheetal Sweets </h3>
              <p>Add.:- Kannod road Ashta,Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/EYYaQkkQQDDS2QnC7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-9">
              <h3>Sagar-Gaire </h3>
              <p>Add.:- Indore-Bhopal Highway Ashta,Ashta</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/6xWKdsAd3qXbB8Fk6">
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

export default Restaurant;
