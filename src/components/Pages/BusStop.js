import React from "react";
import { Bus } from "../../Assests/Image";
import { FaLocationDot } from "react-icons/fa6";

function BusStop() {
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
    <div className="BusStop-Container">
      <div id="section">
        <div class="section">
          <img src={Bus} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Bus Stand</h3>
              <p>Add.:- Indore-Bhopal Highway Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/ripLg4pQKWPuS8nc8">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-2">
              <h3>Mata Mandir Pathar</h3>
              <p>Add.:- Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/M4VTNFnxcF7uMVNR8">
                <FaLocationDot />
              </a>
              <span class="Contact">Contact No. :-8269687075</span>
            </div>
            <div class="box" id="box-3">
              <h3>VIT Chouraha</h3>
              <p>Add.:- VIT Chouraha Gawakheda Jod Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/1EyBLKZkrziPTxgg6">
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

export default BusStop;
