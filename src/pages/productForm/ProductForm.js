import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/ProductFormSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const ProductForm = () => {
  const dispatch = useDispatch();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState();
  // setSubtotal(productPrice);
  const [file, setFile] = useState();

  const AddProdcut = {
    id: uuidv4(),
    productName,
    quantity,
    subtotal,
    file,
    productPrice,
  };

  const onHandleSubmit = () => {
    dispatch(addUser(AddProdcut));
    setProductName("");
    setProductPrice("");
    setFile("");
    toast("Product Added to Store");
  };

  // console.log(AddProdcut);
  return (
    <div>
      ProductForm
      <input
        type="text"
        value={productName}
        placeholder="Product Name"
        onChange={(e) => {
          setProductName(e.target.value);
        }}
      />
      <input
        type="number"
        value={productPrice}
        placeholder="Product price"
        onChange={(e) => {
          setProductPrice(e.target.value);
        }}
      />
      <input
        type="file"
        onChange={(e) => {
          setFile(URL.createObjectURL(e.target.files[0]));
        }}
      />
      <button type="submit" onClick={onHandleSubmit}>
        Submit
      </button>
      {/* <img src={URL.createObjectURL(file)} /> */}
      <ToastContainer />
    </div>
  );
};

export default ProductForm;
