import React from "react";
import useDataProviders from "../components/Providers/hooks/useDataProvider";
import RegisterProvider from "../components/Providers/RegisterProvider";
import ListProviders from "../components/Providers/ListProviders";

const Provider = () => {
  const {
    activeTab,
    setActiveTab,
    formData,
    handleImageChange,
    handleChange,
    handleSubmit,
    providers,
    deleteProvider,
    updateProvider,
    loading,
  } = useDataProviders();

  return (
    <div className="provider-page">
      <div className="tab-buttons">
        <button onClick={() => setActiveTab("form")}>Nuevo Proveedor</button>
        <button onClick={() => setActiveTab("list")}>Ver Lista</button>
      </div>

      {activeTab === "form" ? (
        <RegisterProvider
          formData={formData}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ListProviders
          providers={providers}
          deleteProvider={deleteProvider}
          updateProvider={updateProvider}
          loading={loading}
        />
      )}
    </div>
  );
};

export default Provider;
