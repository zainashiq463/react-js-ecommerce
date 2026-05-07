export default function ProductFilters({
  categories,
  selectedCategory,
  search,
  sortBy,
  onCategoryChange,
  onSearchChange,
  onSortChange
}) {
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Products</p>
          <h2>Shop essentials</h2>
        </div>

        <div className="catalog-controls">
          <input
            className="search-box"
            placeholder="Search products"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <select className="filter-select" value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            <option value="rating">Top rated</option>
          </select>
        </div>
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            className={selectedCategory === category ? "category-tab active" : "category-tab"}
            key={category}
            onClick={() => onCategoryChange(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}
