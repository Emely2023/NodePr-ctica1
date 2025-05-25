import React from "react";

const CardProviders = ({ provider, deleteProvider, updateProvider }) => {
  return (
    <div className="card">
      <img src={provider.imagen} alt={provider.name} className="card-img" />
      <h3>{provider.name}</h3>
      <p>Teléfono: {provider.telephone}</p>
      <button onClick={() => updateProvider(provider)}>Editar</button>
      <button onClick={() => deleteProvider(provider._id)}>Eliminar</button>
    </div>
  );
};

export default CardProviders;
