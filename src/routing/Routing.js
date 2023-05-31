import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductForm from "../pages/productForm/ProductForm";
import ShowProduct from "../pages/showProduct/ShowProduct";
import CardPage from "../pages/cardPage/CardPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/addproduct" element={<ProductForm />} />
      <Route path="/showproduct" element={<ShowProduct />} />
      <Route path="/cardpage" element={<CardPage />}></Route>
    </Routes>
  );
};

export default Routing;
