import React from "react";
import Button from "../Button";

const CardProduct = ({ product, deleteProduct, updateProduct }) => {
  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Descripción:</span> {product.description}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Precio:</span> ${product.price}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Stock:</span> {product.stock}
        </p>
        <p>ID: {product._id}</p>

        <Button
          label={"Eliminar"}
          actionButton={() => deleteProduct(product._id)}
          colorClass={"danger"}
        />
        <Button
          label={"Editar"}
          actionButton={() => updateProduct(product)}
          colorClass={"warning"}
        />
      </div>
    </div>
  );
};

export default CardProduct;
