import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ShowProduct.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "../../store/CardPageSlice";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.product);

  const selectProduct = (p) => {
    dispatch(addProduct(p));
    toast("Product Added to Cart");
  };

  const RenderProduct = () => {
    return selector.map((product, i) => {
      return (
        <div key={i} onClick={() => selectProduct(product)}>
          <div className="proContainer">
            <div>
              <img src={product.file} className="proImage" />
            </div>
            <div className="proName">{product?.productName}</div>
            <div className="proPrice">${product?.productPrice}</div>
            <br></br>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      showProduct
      {/* <span className="shopList">{itemNumber}</span> */}
      <ToastContainer />
      <RenderProduct />
    </div>
  );
};

export default ShowProduct;
