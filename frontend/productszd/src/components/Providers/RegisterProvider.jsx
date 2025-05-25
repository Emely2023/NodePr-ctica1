// src/components/Providers/RegisterProvider.jsx
import React from "react";

const RegisterProvider = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{formData._id ? "Editar Proveedor" : "Registrar Proveedor"}</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre del proveedor"
        required
      />

      <input
        type="text"
        name="telephone"
        value={formData.telephone}
        onChange={handleChange}
        placeholder="Teléfono"
        required
      />

      <input
        type="text"
        name="imagen"
        value={formData.imagen}
        onChange={handleChange}
        placeholder="URL de la imagen"
      />

      <button type="submit">
        {formData._id ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
};

export default RegisterProvider;
