// src/components/Employees/hooks/useDataEmployees.js
import { useEffect, useState } from "react";

const API_URL = "https://nodepr-ctica1.onrender.com/employees";

const useDataEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    birthday: "",
    email: "",
    address: "",
    hiredate: "",
    password: "",
    telephone: "",
    dui: "",
    isssNumber: "",
    isVerified: false,
    _id: null,
  });
  const [activeTab, setActiveTab] = useState("list");

  // GET
  const getEmployees = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error al obtener empleados");
      const data = await res.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  // Cambio en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // POST o PUT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = formData._id ? "PUT" : "POST";
      const url = formData._id ? `${API_URL}/${formData._id}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al guardar empleado");

      await getEmployees();
      resetForm();
      setActiveTab("list");
    } catch (error) {
      console.error("Error al guardar empleado:", error);
    }
  };

  // DELETE
  const deleteEmployee = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar empleado");
      await getEmployees();
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  // Cargar datos en el formulario para editar
  const updateEmployee = (employee) => {
    setFormData({ ...employee });
    setActiveTab("form");
  };

  // Reset del formulario
  const resetForm = () => {
    setFormData({
      name: "",
      lastname: "",
      birthday: "",
      email: "",
      address: "",
      hiredate: "",
      password: "",
      telephone: "",
      dui: "",
      isssNumber: "",
      isVerified: false,
      _id: null,
    });
  };

  return {
    employees,
    formData,
    loading,
    activeTab,
    setActiveTab,
    handleChange,
    handleSubmit,
    deleteEmployee,
    updateEmployee,
  };
};

export default useDataEmployees;
