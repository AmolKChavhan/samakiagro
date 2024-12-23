import aboutImg from "../../assets/Images/samakiagroLogo.jpg"
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="text">
          <h2>About Us</h2>
          <p>
            Samaki Agro is a forward-thinking company specializing in innovative farming techniques and efficient poultry management. We are committed to advancing agricultural productivity while ensuring sustainable practices. Our goal is to help farmers increase yield, improve animal health, and maintain a balanced ecosystem for a better tomorrow.
          </p>
        </div>
        <div className="image">
          <img src={aboutImg} alt="Farming and Poultry" />
        </div>
      </div>
    </section>
  );
};

export default About;
