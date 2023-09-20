import React from "react";

import "./Main.scss";
import { MadhyaPradesh, VitLogo, VitImage } from "../../Assests/Image";

function Main() {
  const style1 = {
    textAlign: "center",
  };

  const image = {
    height: "500px",
  };
  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <div className="header-left-logo">
            <img src={MadhyaPradesh} alt="" />
          </div>
        </div>
        <div className="header-left-text">
          <h1>KOTHRI</h1>
        </div>
        <div className="header-right">
          <div className="header-right-logo">
            <img src={VitLogo} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="NavBar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/Shops">Shops</Link>
            </li>
            <li>
              <Link to="/">Restaurant</Link>
            </li>

            <li>
              <Link to="/">Hotels</Link>
            </li>

            <li>
              <Link to="/">PGs</Link>
            </li>

            <li>
              <Link to="/">Mess/Canteens</Link>
            </li>
            <li>
              <Link to="/">Picnic Spot</Link>
            </li>
            <li>
              <Link to="/">Bus Stops</Link>
            </li>
            <li>
              <Link to="/">Taxi</Link>
            </li>
            <li>
              <Link to="/">Auto</Link>
            </li>
            <li>
              <Link to="/">Clinics</Link>
            </li>
            <li>
              <Link to="/">Temples</Link>
            </li>
            <li>
              <Link to="/">Clinics/Hospitals</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <div className="Section">
        <section>
          <h2>Welcome to Kothri</h2>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img src={VitImage} style={image} />
            </div>

            <div className="mySlides fade"></div>
          </div>
          <br />

          <div style={style1}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
