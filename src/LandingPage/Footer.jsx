import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="teams">
          <h3>Teams</h3>
          <a href="#">Management</a>
          <a href="#">Design</a>
          <a href="#">Development</a>
          <a href="#">Marketing</a>
        </div>
        <div className="company">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
        <div className="features">
          <h3>Features</h3>
          <a href="#">Screen Sharing</a>
          <a href="#">File Sharing</a>
          <a href="#">User Management</a>
          <a href="#">Cross-Platform Support</a>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <a href="#">Email: info@app.com</a>
          <a href="#">Phone: 123-456-7890</a>
          <a href="#">Address: 1234 Main St</a>
        </div>
        <div className="subscribe">
          <h3>Stay Up to Date</h3>
          <p>Subscribe to our newsletter</p>
          <form className="subscribe_form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer copyright">
        <p>&copy; 2025 TEAM Inc. All rights reserved.</p>
      </div>
    </>
  );
};
export default Footer;
