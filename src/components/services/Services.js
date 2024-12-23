import servicesData from "./servicesData";
import "./Services.css"; 

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
