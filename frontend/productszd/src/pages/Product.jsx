// src/pages/Product.jsx
import React from "react";
import useDataProducts from "../components/Products/hooks/useDataProducts";
import RegisterProduct from "../components/Products/RegisterProduct";
import ListProducts from "../components/Products/ListProducts";

const Product = () => {
  const data = useDataProducts();

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => data.setActiveTab("form")}>Nuevo Producto</button>
        <button onClick={() => data.setActiveTab("list")}>Ver Lista</button>
      </div>

      {data.activeTab === "form" ? (
        <RegisterProduct
          formData={data.formData}
          handleChange={data.handleChange}
          handleSubmit={data.handleSubmit}
        />
      ) : (
        <ListProducts
          products={data.products}
          deleteProduct={data.deleteProduct}
          updateProduct={data.updateProduct}
          loading={data.loading}
        />
      )}
    </div>
  );
};

export default Product;
