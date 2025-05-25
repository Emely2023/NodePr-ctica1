import React from "react";
import useDataProvider  from "../components/Providers/hooks/useDataProvider";
import ListProviders from "../components/Providers/ListProviders";
import RegisterProvider from "../components/Providers/ListProviders";;

const Providers = () => {
  const data = useDataProvider();
return (
   <div>
      <div>
        <button onClick={() => setActiveTab("form")}>Formulario</button>
        <button onClick={() => setActiveTab("list")}>Lista</button>
      </div>
      {activeTab === "form" ? (
        <RegisterProvider
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ListProviders
          providers={providers}
          deleteProvider={deleteProvider}
          updateProvider={updateProvider}
        />
      )}
    </div>
  );
};

export default Providers;
