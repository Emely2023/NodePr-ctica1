// src/components/Products/hooks/useDataProducts.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/products";

const useDataProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", price: "", stock: "" });
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState("form");

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
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
      setFormData({ name: "", description: "", price: "", stock: "" });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error("Error submitting product:", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const updateProduct = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
    });
    setEditingId(product._id);
    setActiveTab("form");
  };

  return {
    products,
    formData,
    handleChange,
    handleSubmit,
    deleteProduct,
    updateProduct,
    loading,
    activeTab,
    setActiveTab,
  };
};

export default useDataProducts;
