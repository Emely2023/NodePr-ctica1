import React from "react";

const CardEmployee = ({ employee, deleteEmployee, updateEmployee }) => {
  return (
    <div className="card">
      <h3>{employee.name} {employee.lastname}</h3>
      <p>Email: {employee.email}</p>
      <p>Dirección: {employee.address}</p>
      <p>Teléfono: {employee.telephone}</p>
      <p>DUI: {employee.dui}</p>
      <p>ISSS: {employee.isssNumber}</p>
      <p>Verificado: {employee.isVerified ? "Sí" : "No"}</p>
      <p>Fecha de nacimiento: {new Date(employee.birthday).toLocaleDateString()}</p>
      <p>Fecha de contratación: {new Date(employee.hiredate).toLocaleDateString()}</p>
      <button onClick={() => updateEmployee(employee)}>Editar</button>
      <button onClick={() => deleteEmployee(employee._id)}>Eliminar</button>
    </div>
  );
};

export default CardEmployee;
