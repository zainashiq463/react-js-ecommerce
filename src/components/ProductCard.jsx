import HeroImg from "../assets/hero.png";

export default function ProductCard({ product, onAddToCart, onViewDetails }) {
  const stockClassName = product.stock <= 3 ? "stock-text low-stock" : "stock-text";
  const stockLabel = product.stock <= 3 ? `Only ${product.stock} left` : `${product.stock} in stock`;

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <span className="product-badge">{product.badge}</span>
        <img src={product.image || HeroImg} alt={product.name} />
      </div>

      <div className="product-content">
        <div className="product-meta-row">
          <span>{product.category}</span>
          <span>Rating {product.rating}</span>
        </div>
        <p className="product-name">{product.name}</p>
        <p className="product-description">{product.description}</p>

        <div className="price-row">
          <strong>Rs {product.price}</strong>
          <span>Rs {product.oldPrice}</span>
        </div>

        <p className={stockClassName}>{stockLabel}</p>

        <button className="button" onClick={() => onAddToCart(product)}>
          Add to cart
        </button>
        <button className="secondary-button" onClick={() => onViewDetails(product.id)}>
          Product Details
        </button>
      </div>
    </div>
  );
}
