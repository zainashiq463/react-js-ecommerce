export const getProductCategories = (products) => [
  "All",
  ...new Set(products.map((product) => product.category))
];

export const getFilteredProducts = (products, search, category, sortBy) => {
  return products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;

      return b.stock - a.stock;
    });
};
