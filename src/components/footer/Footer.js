import { BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-middle">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#blog">Blog</a>
            <a href="#guides">User guides</a>
            <a href="#webinars">Webinars</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About us</a>
            <a href="#contact">Contact us</a>
          </div>
          <div>
            <h4>Plans & Pricing</h4>
            <a href="#personal">Personal</a>
            <a href="#startup">Start up</a>
            <a href="#organization">Organization</a>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://instagram.com"><BsInstagram /></a>
              <a href="https://x.com"><BsTwitterX /></a>
              <a href="https://www.linkedin.com"><BsLinkedin /></a>
              <a href="https://www.youtube.com"><BsYoutube /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Samaki Agro • Privacy • Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
