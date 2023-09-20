import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import "./Navbar.scss";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="NavBar">
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="Navbar-list">
          <li>
            <Link
              to="/"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/Shops"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Shops
            </Link>
          </li>
          <li>
            <Link
              to="/Restaurant"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Restaurant
            </Link>
          </li>

          <li>
            <Link
              to="/Hotel"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Hotels
            </Link>
          </li>

          <li>
            <Link
              to="/PGs"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              PGs
            </Link>
          </li>

          <li>
            <Link
              to="/Mess"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Mess/Canteens
            </Link>
          </li>
          <li>
            <Link
              to="/Picnic"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Picnic Spot
            </Link>
          </li>
          <li>
            <Link
              to="/Bus"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Bus Stops
            </Link>
          </li>
          <li>
            <Link
              to="/Taxi"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Taxi
            </Link>
          </li>
          <li>
            <Link
              to="/Auto"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Auto
            </Link>
          </li>

          <li>
            <Link
              to="/Temples"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Temples
            </Link>
          </li>
          <li>
            <Link
              to="/Clinics"
              className="Navbar-link"
              onClick={() => setOpenMenu(false)}
            >
              Clinics/Hospitals
            </Link>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
