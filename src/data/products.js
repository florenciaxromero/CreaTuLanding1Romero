
const products = [
  {
    id: 1,
    name: "Remera Clásica",
    price: 1500,
    stock: 10,
    category: "remeras",
    image: "https://i.pinimg.com/474x/d5/01/4b/d5014b3fb5f3b4026ce2d4036d2bb779.jpg",
  },
  {
    id: 2,
    name: "Gorra Negra",
    price: 800,
    stock: 5,
    category: "gorras",
    image: "https://vitaglio.com/cdn/shop/files/Vitaglio-Gorras_005.jpg?v=1707874712&width=1946",
  },
  {
    id: 3,
    name: "Campera Azul",
    price: 12000,
    stock: 3,
    category: "camperas",
    image: "https://admin.drifters.com.ar/uploads/product_image/29106/DriftersPDP_W05002500-XL_Shot1.jpg",
  }
];

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const getProducts = () => {
  return delay(500).then(() => products);
};

export const getProductsByCategory = (category) => {
  return delay(500).then(() =>
    products.filter(p => p.category === category)
  );
};

export const getProductById = (id) => {
  const numericId = typeof id === "string" ? Number(id) : id;
  return delay(500).then(() =>
    products.find(p => p.id === numericId)
  );
};
