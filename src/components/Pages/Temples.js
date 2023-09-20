import React from "react";
import { Temple } from "../../Assests/Image";
import { FaLocationDot } from "react-icons/fa6";

function Temples() {
  const styleImg = {
    height: "500px",
    width: "60%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };
  return (
    <div className="Temple-Container">
      <div id="section">
        <div
          class="text"
          style={{
            textAlign: "center",
            paddingBottom: "20px",
          }}
        >
          <h1>Temples</h1>
        </div>
        <div class="section">
          <img src={Temple} style={styleImg} />
          <section>
            <div class="box" id="box-1">
              <h3>Shree Khedapati Sarkar Mandir</h3>
              <p>Add.:- Nipaniya Road Manakhedi,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/41fWfyzdws9ru25R7">
                <FaLocationDot />
              </a>
            </div>
            <div class="box" id="box-2">
              <h3>Mata Mandir</h3>
              <p>Add.:- Indore-Bhopal Highway Near Soceity Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/kvt9rLZvVzY34isk9">
                <FaLocationDot />
              </a>
            </div>
            <div class="box" id="box-3">
              <h3>Hanuman Mandir</h3>
              <p>Add.:- Indore-Bhopal Highway Near Soceity Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/nSGXyWe4pC8uy8TB6">
                <FaLocationDot />
              </a>
            </div>
            <div class="box" id="box-4">
              <h3>Shree Panch Mukhi Hanuman Ji Mandir</h3>
              <p>Add.:- Indore-Bhopal Highway MPSEB Pathar,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/XS1uf8PUZhrC5GDx6">
                <FaLocationDot />
              </a>
            </div>
            <div class="box" id="box-5">
              <h3>Jai Ambey Mandir</h3>
              <p>Add.:- Bus Stand Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/GwKczVRJViP6hVoN6">
                <FaLocationDot />
              </a>
            </div>
            <div class="box" id="box-6">
              <h3>Shree Ram Mandir</h3>
              <p>Add.:- Patel Pura Kothri,Kothri</p>
              <span>Location:-</span>
              <a href="https://goo.gl/maps/g6A5JEUpXrzGyfDB9">
                <FaLocationDot />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Temples;
