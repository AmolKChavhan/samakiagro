import testimonialsData from "./testimonialsData.json";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonialsData.testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{testimonial.quote}"</p>
            <p>
              - {testimonial.author}, {testimonial.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
