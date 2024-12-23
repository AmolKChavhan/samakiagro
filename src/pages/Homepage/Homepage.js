import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Products from "../../components/products/Products";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import "./Homepage.css";
import firstImg from "../../assets/Images/firstimg.jpg";
import secondImg from "../../assets/Images/2ndimg.png";
import thirdImg from "../../assets/Images/thirdimg.jpg";
import fourthImg from "../../assets/Images/fourthImg.jpg";

const Homepage = () => {
  const carouselImages = [firstImg, secondImg, thirdImg, fourthImg];

  return (
    <>
      <Header />

      <section className="welcome">
        <Carousel images={carouselImages} autoplaySpeed={3000} />
      </section>

      <About />
      <Products />
      <Services />
      <Footer />
    </>
  );
};

export default Homepage;
