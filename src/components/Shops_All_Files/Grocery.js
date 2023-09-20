import React from "react";
import "../Common/Common.scss";
import { FaLocationDot } from "react-icons/fa6";

function Grocery() {
  return (
    <div className="Grocery-Container">
      <div id="header">
        <div className="header">
          <h1>Grocery Shops</h1>
        </div>
      </div>

      <div id="section">
        <div className="section">
          <section>
            <div className="box" id="box-1">
              <h3>Shakti Kirana Store</h3>
              <p>Add. :- Indore-Bhopal Highway Pathar Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-2">
              <h3>Vanshika Kirana Store</h3>
              <p>
                Add. :- Indore-Bhopal Highway Near Society Pathar Kothri,Kothri
              </p>
              <span>Location:- </span>
              <a href="https://maps.app.goo.gl/TGWfYHUBYwCRvZD68">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-8269687075</span>
            </div>
            <div className="box" id="box-3">
              <h3>Laxmi Kirana Store</h3>
              <p>
                Add. :- Indore-Bhopal Highway Near Society Pathar Kothri,Kothri
              </p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/6rw62nv9b7AHpvJu9">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-</span>
            </div>
            <div className="box" id="box-4">
              <h3>Raj Kirana Store</h3>
              <p>Add. :- Indore-Bhopal Highway Bus-Stand Kothri,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/VRA9US48ecByUbMC7">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-</span>
            </div>
            <div className="box" id="box-5">
              <h3>Aman Kirana Store</h3>
              <p>Add. :- Indore-Bhopal Highway ,Kothri</p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/cMh9Dh3qygpBXkDd6">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-</span>
            </div>
            <div className="box" id="box-6">
              <h3>Hanshika Kirana Store</h3>
              <p>
                Add. :- Indore-Bhopal Highway Near Society Pathar Kothri,Kothri
              </p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/g6ubHzfCiTYDxbq59">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-</span>
            </div>
            <div className="box" id="box-7">
              <h3>Jagdish Kirana Store</h3>
              <p>
                Add. :- Indore-Bhopal Highway Near Society Pathar Kothri,Kothri
              </p>
              <span>Location:- </span>
              <a href="https://goo.gl/maps/cSZQXkFDxBVZBBQM7">
                <FaLocationDot />
              </a>
              <span className="Contact">Contact No. :-</span>
            </div>
            <div className="box" id="box-8"></div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Grocery;
