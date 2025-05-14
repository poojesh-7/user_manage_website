import { Link } from "react-router-dom";
import Modal from "../ui/Modal";
import Popup from "../ui/Popup";
import "./Pricing.css";
import { useState } from "react";
const Pricing = () => {
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
    <>
      <h1 className="pricing">Pricing</h1>
      <div className="pricing_section">
        <div className="price_card">
          <div>
            <h2>Free</h2>
            <hr width="50"></hr>
            <ol>
              <li>One Admin</li>
              <li>Upto 20 employees</li>
              <li>User management</li>
              <li>Real-time activity feed </li>
              <li>Limited uploads of documents and images </li>
              <li>Basic reporting </li>
            </ol>
          </div>
          <button onClick={showPopup} className="price_btn start_free">
            Start free
          </button>
        </div>
        <div className="price_card">
          <div>
            <h2>Pro</h2>
            <hr width="50"></hr>
            <ol>
              <li>10 Admins</li>
              <li>Upto 1000 employees</li>
              <li>Calendar & deadline views</li>
              <li>Team chat and comments</li>
              <li>File attachments</li>
              <li>Advanced reports & analytics</li>
            </ol>
          </div>
          <button disabled className="price_btn gray">
            Try Pro
          </button>
        </div>
        <div className="price_card">
          <div>
            <h2>Enterprise</h2>
            <hr width="50"></hr>
            <ol>
              <li>Unlimited admins and employees</li>
              <li>Single Sign-On (SSO)</li>
              <li>Custom user roles & permissions</li>
              <li>API access & custom integrations</li>
              <li>Google & Slack integration</li>
              <li>Advanced security & compliance</li>
            </ol>
          </div>
          <button disabled className="price_btn gray">
            Contact us
          </button>
        </div>
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
      </div>
    </>
  );
};

export default Pricing;
