import React from "react";
import CardProduct from "../Products/ProductCard";

const ListProducts = ({ deleteProduct, updateProduct, loading, products }) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}
        {products?.map((product) => (
          <CardProduct
            key={product._id}
            product={product}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        ))}
      </div>
    </>
  );
};

export default ListProducts;
