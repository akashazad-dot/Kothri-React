import React from "react";
import "./Footer.scss";
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { CgTwitter } from "react-icons/cg";
function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="social">
          <h2>Follow Us</h2>
          <a href="https://www.facebook.com/profile.php?id=100010506966089">
            <BsFacebook className="icons" />
          </a>
          <a href="https://twitter.com/AkashVe02089001">
            <CgTwitter className="icons" />
          </a>
          <a href="https://www.instagram.com/its_akash_akku_azad_/">
            <BsInstagram className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/akash-verma-4a534b201/">
            <BsLinkedin className="icons" />
          </a>
          <a href="https://github.com/akashazad-dot">
            <BsGithub className="icons" />
          </a>
        </div>
        <div className="row">
          <div className="emergency-contact-left">
            <h2>Emergency Contacts</h2>
            <p>Police:- 07560</p>
            <p>Ambulance:- 07560</p>
            <p>Fire Brigade:- 07560</p>
          </div>
          <div className="office-right">
            <h2>Kothri Government Office</h2>
            <p>Nagar Parishad Office</p>
            <p>Contact:-</p>
            <p>Address:-</p>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright @ Akash. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
