import { useEffect, useState } from "react";

const API_URL = "http://localhost:4000/api/providers";

const useDataProviders = () => {
  const [providers, setProviders] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    image: null,// Puede ser archivo o URL
    _id: null,
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("list");

  const fetchProviders = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Error fetching providers");
      const data = await res.json();
      setProviders(data);
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("name", formData.name);
    dataToSend.append("telephone", formData.telephone);
    if (formData.image && typeof formData.image !== "string") {
      dataToSend.append("image", formData.image);
    }

    try {
      let url = API_URL;
      let method = "POST";

      if (formData._id) {
        url = `${API_URL}/${formData._id}`;
        method = "PUT";
      }

      const res = await fetch(url, {
        method,
        body: dataToSend,
        // No hay que poner Content-Type con fetch y FormData, el navegador lo pone automáticamente
      });

      if (!res.ok) {
        throw new Error(`Error submitting provider (${method}): ${res.statusText}`);
      }

      resetForm();
      fetchProviders();
      setActiveTab("list");
    } catch (err) {
      console.error("Error submitting provider:", err);
    }
  };

  const deleteProvider = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error deleting provider");

      fetchProviders();
    } catch (err) {
      console.error("Error deleting provider:", err);
    }
  };

  const updateProvider = (provider) => {
  setFormData({
    name: provider.name,
    telephone: provider.telephone,
    image: null, 
    _id: provider._id,
  });
  setActiveTab("form");
};

  const resetForm = () => {
    setFormData({
      name: "",
      telephone: "",
      image: null,
      _id: null,
    });
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
    setActiveTab,
  };
};

export default useDataProviders;
