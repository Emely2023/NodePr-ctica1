// src/components/Employees/hooks/useDataEmployees.js
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/employees";


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

  const getEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/employees");
      setEmployees(res.data);
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData._id) {
        await axios.put(`http://localhost:4000/api/employees/${formData._id}`, formData);
      } else {
        await axios.post("http://localhost:4000/api/employees", formData);
      }

      getEmployees();
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
      setActiveTab("list");
    } catch (error) {
      console.error("Error al guardar empleado:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/employees/${id}`);
      getEmployees();
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  const updateEmployee = (employee) => {
    setFormData({ ...employee });
    setActiveTab("form");
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
