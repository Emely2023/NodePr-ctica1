import React from "react";
import useDataEmployees from "../components/Employees/hooks/useDataEmployees";
import RegisterEmployee from "../components/Employees/RegisterEmployees";
import ListEmployees from "../components/Employees/ListEmployee";
const Employees = () => {
  const data = useDataEmployees();

  return (
    <div>
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

export default Employees;
