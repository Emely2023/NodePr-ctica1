import React from "react";
import CardProviders from "./CardProviders";

const ListProviders = ({ providers, deleteProvider, updateProvider }) => {
  if (!Array.isArray(providers)|| providers.length === 0) {
    return <p>No hay proveedores registrados.</p>;
  }

  return (
    <div>
      <h2>Lista de Proveedores</h2>
      {providers.map((provider) => (
        <div key={provider._id}>
          <p><strong>Nombre:</strong> {provider.name}</p>
          <p><strong>Teléfono:</strong> {provider.telephone}</p>
          <p><strong>Imagen:</strong> {provider.imagen}</p>
          <button onClick={() => updateProvider(provider)}>Editar</button>
          <button onClick={() => deleteProvider(provider._id)}>Eliminar</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ListProviders;
