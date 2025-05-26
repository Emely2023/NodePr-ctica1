import React from "react";
import useDataEmployees from "../components/Employees/hooks/useDataEmployees";
import RegisterEmployee from "../components/Employees/RegisterEmployees";
import ListEmployees from "../components/Employees/ListEmployee";

const Employee = () => {
  const data = useDataEmployees();

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => data.setActiveTab("form")}>Nuevo Empleado</button>
        <button onClick={() => data.setActiveTab("list")}>Ver Lista</button>
      </div>

      {data.activeTab === "form" ? (
        <RegisterEmployee
          formData={data.formData}
          handleChange={data.handleChange}
          handleSubmit={data.handleSubmit}
        />
      ) : (
        <ListEmployees
          employees={data.employees}
          deleteEmployee={data.deleteEmployee}
          updateEmployee={data.updateEmployee}
          loading={data.loading}
        />
      )}
    </div>
  );
};

export default Employee;
