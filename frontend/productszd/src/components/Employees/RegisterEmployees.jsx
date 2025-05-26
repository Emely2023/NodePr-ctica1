// src/components/Employees/RegisterEmployee.jsx
import React from "react";

const RegisterEmployee = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{formData._id ? "Editar Empleado" : "Registrar Empleado"}</h2>

      <input name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
      <input name="lastname" placeholder="Apellido" value={formData.lastname} onChange={handleChange} required />
      <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Correo" value={formData.email} onChange={handleChange} required />
      <input name="address" placeholder="Dirección" value={formData.address} onChange={handleChange} required />
      <input type="date" name="hiredate" value={formData.hiredate} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
      <input name="telephone" type="text" placeholder="Teléfono" value={formData.telephone} onChange={handleChange} required />
      <input name="dui" placeholder="DUI" value={formData.dui} onChange={handleChange} required />
      <input name="isssNumber" type="text" placeholder="N° ISSS" value={formData.isssNumber} onChange={handleChange} required />
      
      <label>
        <input type="checkbox" name="isVerified" checked={formData.isVerified} onChange={handleChange} />
        Verificado
      </label>

      <button type="submit">{formData._id ? "Actualizar" : "Guardar"}</button>
    </form>
  );
};

export default RegisterEmployee;
