// src/components/Products/RegisterProduct.jsx
import React from "react";

const RegisterProduct = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{formData._id ? "Editar Producto" : "Registrar Producto"}</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Descripción" required />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Precio" required />
      <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
      <button type="submit">{formData._id ? "Actualizar" : "Guardar"}</button>
    </form>
  );
};

export default RegisterProduct;
