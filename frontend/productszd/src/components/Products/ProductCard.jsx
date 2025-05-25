// src/components/Products/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, deleteProduct, updateProduct }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => updateProduct(product)}>Editar</button>
      <button onClick={() => deleteProduct(product._id)}>Eliminar</button>
    </div>
  );
};

export default ProductCard;
