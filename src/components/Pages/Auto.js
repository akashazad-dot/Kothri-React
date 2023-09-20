import React from "react";
import { Autos } from "../../Assests/Image";
function Auto() {
  const styleImg = {
    height: "500px",
    width: "60%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };
  return (
    <div className="Auto-Container">
      <div id="section">
        <div class="section">
          <img src={Autos} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Dev auto</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>

              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Bakoriya Brothers Auto</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>

              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>Pratik Tiffin Center</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>

              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-4">
              <h3>Prince Tiffin Center</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>

              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-5">
              <h3>Panchayati Restaurant</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>

              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-6">
              <h3>Zaiqa Restaurant</h3>
              <p>Add.:- Near VIT Bhopal Gawakheda Road Pathar,Kothri</p>

              <span class="Contact">Contact No. :-8269687075</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Auto;
