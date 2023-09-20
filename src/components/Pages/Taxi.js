import React from "react";
import { Taxis } from "../../Assests/Image";
function Taxi() {
  const styleImg = {
    height: "500px",
    width: "60%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };
  return (
    <div className="Taxi-Container">
      <div id="section">
        {/* <!-- <div class="text"><h1>Mess/Tiffin Cente</h1></div> --> */}
        <div class="section">
          <img src={Taxis} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Bala Ji</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              {/* <!-- <span>Location:-</span><a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6"><i class="fa-solid fa-location-dot"></i></a> --> */}
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Princy Travels</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              {/* <!-- <span>Location:-</span><a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6"><i class="fa-solid fa-location-dot"></i></a> --> */}
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Pooja Travels</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>
              {/* <!-- <span>Location:-</span><a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6"><i class="fa-solid fa-location-dot"></i></a> --> */}
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Shakti Travels</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>
              {/* <!-- <span>Location:-</span><a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6"><i class="fa-solid fa-location-dot"></i></a> --> */}
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Durgesh Travels</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>
              {/* <!-- <span>Location:-</span><a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6"><i class="fa-solid fa-location-dot"></i></a> --> */}
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-6">
              <h3>Hajari</h3>
              <p>Add.:- Near VIT Bhopal Gawakheda Road Pathar,Kothri</p>
              {/* <!-- <span>Location:-</span><a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6"><i class="fa-solid fa-location-dot"></i></a> --> */}
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Taxi;
