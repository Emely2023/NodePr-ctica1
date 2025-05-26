// src/components/Providers/CardProviders.jsx
import React from "react";

const CardProviders = ({ provider, deleteProvider, updateProvider }) => {
  // Ruta completa a la imagen (ajusta si tu servidor la sirve en /public/)
  const imageUrl = `http://localhost:4000/public/${provider.image}`;

  return (
    <div className="card">
      <h3>{provider.name}</h3>
      <p>Teléfono: {provider.telephone}</p>

      {provider.image && (
        <img
          src={imageUrl}
          alt={provider.name}
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      )}

      <button onClick={() => updateProvider(provider)}>Editar</button>
      <button onClick={() => deleteProvider(provider._id)}>Eliminar</button>
    </div>
  );
};

export default CardProviders;
