// src/components/Employees/ListEmployees.jsx
import React from "react";
import CardEmployee from "./CardEmployee";

const ListEmployees = ({ employees, deleteEmployee, updateEmployee, loading }) => {
  if (loading) return <p>Cargando empleados...</p>;

  return (
    <div>
      <h2>Lista de Empleados</h2>
      <div className="employee-list">
        {employees.map((emp) => (
          <CardEmployee
            key={emp._id}
            employee={emp}
            deleteEmployee={deleteEmployee}
            updateEmployee={updateEmployee}
          />
        ))}
      </div>
    </div>
  );
};

export default ListEmployees;
