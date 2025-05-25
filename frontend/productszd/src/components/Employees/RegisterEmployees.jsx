import React from "react";

const RegisterEmployee = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Empleado</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Apellido" required />
      <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Dirección" required />
      <input type="date" name="hiredate" value={formData.hiredate} onChange={handleChange} required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" required />
      <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="Teléfono" required />
      <input type="text" name="dui" value={formData.dui} onChange={handleChange} placeholder="DUI" required />
      <input type="text" name="isssNumber" value={formData.isssNumber} onChange={handleChange} placeholder="ISSS" required />
      <label>
        Verificado:
        <select name="isVerified" value={formData.isVerified} onChange={handleChange}>
          <option value={true}>Sí</option>
          <option value={false}>No</option>
        </select>
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default RegisterEmployee;
