import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/hero.png";
import products from "../data/Products.js";
import { useCart } from "../context/useCart";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import { getFilteredProducts, getProductCategories } from "../utils/productUtils";

const categories = getProductCategories(products);

export default function ProductsDisplay() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const { handleCart } = useCart();

  const filteredProducts = getFilteredProducts(products, search, category, sortBy);
  const openProductDetails = (productId) => navigate(`/product/${productId}`);

  return (
    <>
      <div className="hero-section">
        <div>
          <p className="eyebrow">Simple everyday shopping</p>
          <h1>Fresh essentials, ready for your cart.</h1>
          <p className="hero-copy">Browse useful daily products and add what you need without any clutter.</p>
        </div>
        <img src={HeroImg} alt="Featured products" />
      </div>

      <section className="products-section">
        <ProductFilters
          categories={categories}
          selectedCategory={category}
          search={search}
          sortBy={sortBy}
          onCategoryChange={setCategory}
          onSearchChange={setSearch}
          onSortChange={setSortBy}
        />

        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <p className="empty-state">No products found</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleCart}
                onViewDetails={openProductDetails}
              />
            ))
          )}
        </div>
      </section>
    </>
  );
}
