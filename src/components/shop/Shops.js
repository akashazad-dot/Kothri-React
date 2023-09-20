import React from "react";
import { Link } from "react-router-dom";
import "./Shop.scss";
import {
  Grocery,
  Cake,
  General,
  Electronic,
  Pharmacy,
  phone_repair,
  Stationery,
  Xerox,
  Bicycle,
  Bike,
  Garments,
  Sarees,
  Fruits,
  Saloons,
  Vegetables,
} from "../../Assests/Image";
function Shops() {
  return (
    <div className="Container">
      <h1>Shops</h1>
      <div className="Section">
        <div className="Navbox" id="Navbox-1">
          Grocery Shops
          <Link to="/Grocery">
            <img src={Grocery} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-2">
          Cake/Bakery Shops
          <Link to="/Cake">
            <img src={Cake} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-3">
          General Stores
          <Link to="/General">
            <img src={General} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-4">
          Electronic Shops
          <Link to="/Electronic">
            <img src={Electronic} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-5">
          Medical/Chemsist Stores
          <Link to="/Chemist">
            <img src={Pharmacy} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-6">
          Mobile Repair Shops/Accessories
          <Link to="/Mobile">
            <img src={phone_repair} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-7">
          Stationery Shops
          <Link to="/Statainory">
            <img src={Stationery} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-8">
          Xerox Shops
          <Link to="/Xerox">
            <img src={Xerox} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-9">
          Bicycle Repair Shops
          <Link to="/Cycle">
            <img src={Bicycle} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-10">
          Bike Repair Shops
          <Link to="/Bike">
            <img src={Bike} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-11">
          Garments Shops
          <Link to="/Garments">
            <img src={Garments} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-12">
          Saarees Shops
          <Link to="/Sarees">
            <img src={Sarees} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-13">
          Fruits Shops
          <Link to="/Fruits">
            <img src={Fruits} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-14">
          Vegetables Shops
          <Link to="/Vegetable">
            <img src={Vegetables} />
          </Link>
        </div>
        <div className="Navbox" id="Navbox-15">
          Hair Saloons
          <Link to="/Saloon">
            <img src={Saloons} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shops;
