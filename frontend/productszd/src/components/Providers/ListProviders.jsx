// src/components/Providers/ListProviders.jsx
import React from "react";
import ProviderCard from "./CardProviders";

const ListProviders = ({ providers, deleteProvider, updateProvider, loading }) => {
  if (loading) return <p>Cargando proveedores...</p>;

  return (
    <div>
      <h2>Lista de Proveedores</h2>
      <div className="provider-list">
        {providers.map((provider) => (
          <ProviderCard
            key={provider._id}
            provider={provider}
            deleteProvider={deleteProvider}
            updateProvider={updateProvider}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProviders;
