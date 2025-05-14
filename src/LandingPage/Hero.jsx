import { Link } from "react-router-dom";
import "./Hero.css";
import { useState } from "react";
import Popup from "../ui/Popup";
import Modal from "../ui/Modal";
const Hero = () => {
  const [show, setShow] = useState(false);
  const [hov, setHov] = useState(false);
  const showPopup = () => {
    setShow((prev) => !prev);
  };
  const closePopup = () => {
    setShow((prev) => !prev);
  };
  const hovered = () => {
    setHov(true);
  };
  const moved = () => {
    setHov(false);
  };
  return (
    <div className="hero_section">
      <div className="hero_content">
        <div>
          <h1>Empower Your Team. Simplify Work.</h1>
          <hr width="200" align="left" />
          <p>
            A smarter way to manage users, assign tasks, and track performance —
            all in one place.
          </p>
        </div>
        {/* {show && ( */}
        <Modal closePopup={closePopup} show={show}>
          <Popup>
            <div className="log_sign_holder">
              <Link to="login" state={{ type: "Admin" }}>
                <button
                  onMouseOver={hovered}
                  onMouseLeave={moved}
                  className={`log_nav_btn admin ${hov && "hov"}`}
                  onClick={closePopup}
                >
                  Admin Login
                </button>
              </Link>
              <Link to="login" state={{ type: "Employee" }}>
                <button
                  onMouseOver={hovered}
                  onMouseLeave={moved}
                  className={`log_nav_btn emp ${hov && "hov"}`}
                  onClick={closePopup}
                >
                  Employee Login
                </button>
              </Link>
            </div>
          </Popup>
        </Modal>
        <div className="hero_btn">
          <div className="bg1"></div>
          <button className="get_start_btn" onClick={showPopup}>
            Get started for free
          </button>
          <div className="bg2"></div>
        </div>
      </div>

      <button
        onClick={showPopup}
        className="signup_btn"
        style={{ display: `${location.state?.token ? "none" : "block"}` }}
      >
        Signup
      </button>
      <div className="hero_image">
        <img
          src="https://i.ibb.co/Y9HgV37/image-upscaled.png"
          alt="Group-19"
          border="0"
        />
      </div>
    </div>
  );
};

export default Hero;
