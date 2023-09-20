import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";
function Phone_repair() {
  return (
    <div className="Phone-Cotainer">
      <div id="header">
        <div class="header">
          <h1>Phone repairs/Accessories Shops</h1>
        </div>
      </div>
      <div id="section">
        <div class="section">
          <section>
            <div class="box" id="box-1">
              <h3>Maheshwari Mobile Shop</h3>
              <p>Add.:- Bada Bazaar Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/hMbhurPkHaK5RvyY7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Raghav Mobile shop</h3>
              <p>Add.:- Indore-Bhopal Near society Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/pgo9zRRCkuCmAGFk7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Khushi Mobile shop</h3>
              <p>Add.:- Indore-Bhopal Near society Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/4ejJHJGqJABT2hzW7">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Devendra Mobile shop</h3>
              <p>Add.:- Bada Bazaar Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/swrJJNj5qhHGcCN37">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              {/* <!-- <h3>Devendra Mobile shop</h3>
                    <p>Add.:- Bada Bazaar Kothri,Kothri</p>
                    <span>Location:-</span><a href="https://goo.gl/maps/swrJJNj5qhHGcCN37"><i class="fa-solid fa-location-dot"></i></a>
                    <span class="Contact">Contact No. :-8269687075</span> --> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Phone_repair;
