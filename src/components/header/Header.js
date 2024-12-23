import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Samaki Agro</h1>
      </div>
      <nav className="navbar">
      <Link className="btn">Get in Touch</Link>
        {/* <Link to="/signin" className="btn">Sign In</Link>
        <Link to="/signup" className="btn">Sign Up</Link> */}
      </nav>
    </header>
  );
};

export default Header;
