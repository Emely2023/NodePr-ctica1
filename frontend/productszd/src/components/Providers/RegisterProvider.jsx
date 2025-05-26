// src/components/Providers/RegisterProvider.jsx
import React from "react";

const RegisterProvider = ({
  formData,
  handleChange,
  handleSubmit,
  handleImageChange
}) => {
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>{formData._id ? "Editar Proveedor" : "Registrar Proveedor"}</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
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
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        
      />
     {typeof formData.image === "string" && (
  <img src={formData.image} alt="Proveedor actual" width={100} />
)}


      <button type="submit">
        {formData._id ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
};

export default RegisterProvider;
