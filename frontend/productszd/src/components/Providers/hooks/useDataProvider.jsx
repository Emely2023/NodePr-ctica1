// src/components/Providers/hooks/useDataProviders.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/providers";

const useDataProviders = () => {
  const [providers, setProviders] = useState([]);
  const [formData, setFormData] = useState({ name: "", telephone: "" });
  const [image, setImage] = useState(null); // NUEVO: imagen como archivo
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState("form");

  const fetchProviders = async () => {
    try {
      const res = await axios.get(API_URL);
      setProviders(res.data);
    } catch (err) {
      console.error("Error fetching providers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProviders();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        // PUT sin imagen (esto depende de si tu backend permite PUT con multipart/form-data)
        await axios.put(`${API_URL}/${editingId}`, formData);
      } else {
        // POST con imagen (FormData)
        const dataToSend = new FormData();
        dataToSend.append("name", formData.name);
        dataToSend.append("telephone", formData.telephone);
        if (image) {
          dataToSend.append("image", image);
        }

        await axios.post(API_URL, dataToSend, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      }

      setFormData({ name: "", telephone: "" });
      setImage(null);
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
      telephone: provider.telephone
    });
    setEditingId(provider._id);
    setActiveTab("form");
  };

  return {
    providers,
    formData,
    handleChange,
    handleImageChange,
    handleSubmit,
    deleteProvider,
    updateProvider,
    loading,
    activeTab,
    setActiveTab
  };
};

export default useDataProviders;
