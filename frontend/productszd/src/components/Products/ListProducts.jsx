// src/components/Products/ListProducts.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ListProducts = ({ products, deleteProduct, updateProduct, loading }) => {
  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
