// src/components/Employees/hooks/useDataEmployees.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/employees";

const useDataEmployees = () => {
  const [employees, setEmployees] = useState([]);
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
    isVerified: false
  });
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState("form");

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/employees");

      setEmployees(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
      } else {
        await axios.post('http://localhost:4000/api/employees');

      }
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
        isVerified: false
      });
      setEditingId(null);
      fetchEmployees();
    } catch (err) {
      console.error("Error submitting employee:", err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchEmployees();
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  const updateEmployee = (employee) => {
    setFormData({
      name: employee.name,
      lastname: employee.lastname,
      birthday: employee.birthday?.slice(0, 10),
      email: employee.email,
      address: employee.address,
      hiredate: employee.hiredate?.slice(0, 10),
      password: employee.password,
      telephone: employee.telephone,
      dui: employee.dui,
      isssNumber: employee.isssNumber,
      isVerified: employee.isVerified
    });
    setEditingId(employee._id);
    setActiveTab("form");
  };

  return {
    employees,
    formData,
    handleChange,
    handleSubmit,
    deleteEmployee,
    updateEmployee,
    loading,
    activeTab,
    setActiveTab
  };
};

export default useDataEmployees;
