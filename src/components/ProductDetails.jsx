import { Link, useParams } from "react-router-dom";
import products from "../data/Products.js";
import HeroImg from "../assets/hero.png";
import { useCart } from "../context/useCart";

export default function ProductDetails() {
  const { id } = useParams();
  const { handleCart } = useCart();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="details-panel">
        <p className="eyebrow">Product details</p>
        <h2>Product not found</h2>
        <p className="product-description">The product you opened is not available.</p>
        <Link to="/" className="text-link">
          Back to products
        </Link>
      </section>
    );
  }

  return (
    <section className="details-panel">
      <div className="details-image-wrap">
        <img src={product.image || HeroImg} alt={product.name} />
      </div>

      <div className="details-content">
        <p className="eyebrow">Product details</p>
        <h2>{product.name}</h2>
        <div className="details-meta">
          <span>{product.category}</span>
          <span>Rating {product.rating}</span>
          <span>{product.stock} in stock</span>
        </div>
        <p className="details-description">{product.description}</p>
        <div className="details-price">
          <strong>Rs {product.price}</strong>
          <span>Rs {product.oldPrice}</span>
        </div>

        <div className="feature-list">
          {product.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <div className="details-actions">
          <button className="button" onClick={() => handleCart(product)}>
            Add to cart
          </button>
          <Link to="/" className="secondary-button">
            Back to products
          </Link>
        </div>
      </div>
    </section>
  );
}
