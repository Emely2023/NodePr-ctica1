import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/providers";

const useDataProviders = () => {
  const [providers, setProviders] = useState([]);
  const [formData, setFormData] = useState({ name: "", telephone: "", imagen: "" });
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState("form");

  // ⬇️ Mueve esta función arriba
  const fetchProviders = async () => {
    try {
      const res = await axios.get(API_URL);
      setProviders(res.data);
      setLoading(false); // Marca como cargado
    } catch (err) {
      console.error("Error fetching providers:", err);
      setLoading(false); // Evita quedarse en estado de carga infinita
    }
  };

  useEffect(() => {
    fetchProviders(); // ahora sí se reconoce
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      setFormData({ name: "", telephone: "", imagen: "" });
      setEditingId(null);
      fetchProviders();
    } catch (err) {
      console.error("Error submitting provider:", err);
    }
  };

  const deleteProvider = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProviders();
    } catch (err) {
      console.error("Error deleting provider:", err);
    }
  };

  const updateProvider = (provider) => {
    setFormData({
      name: provider.name,
      telephone: provider.telephone,
      imagen: provider.imagen,
    });
    setEditingId(provider._id);
    setActiveTab("form");
  };

  return {
    providers,
    formData,
    handleChange,
    handleSubmit,
    deleteProvider,
    updateProvider,
    loading,
    activeTab,
    setActiveTab,
  };
};

export default useDataProviders;
