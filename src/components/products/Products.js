import productsData from "./productsData";
import "./Products.css";

const Products = () => {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {productsData.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
