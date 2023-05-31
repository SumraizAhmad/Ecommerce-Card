import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CardPage.css";
import {
  deleteProduct,
  incrementProduct,
  decrementProduct,
} from "../../store/CardPageSlice";

const CardPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cardProduct.cartItem);
  console.log(selector);

  //   const [count, setCount] = useState(1);

  const increment = (id) => {
    dispatch(incrementProduct(id));
  };
  const decrement = (id) => {
    dispatch(decrementProduct(id));
  };

  const deleteItem = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const RenderProduct = () => {
    return selector.map((product, i) => {
      return (
        <div key={i}>
          <div className="cardItem">
            <div>
              <img src={product.file} className="cardImage" />
            </div>
            <div className="cardName">{product?.productName}</div>
            <div className="cardPrice">${product?.productPrice}</div>
            <div>
              <button onClick={() => increment(i)}>+</button>
            </div>
            {product.count}
            <div>
              <button onClick={() => decrement(i)}>-</button>
            </div>
            <div className="cardPrice">
              ${product.productPrice * product.count}
            </div>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteItem(product.id)}
            />
            <br></br>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <RenderProduct />
      <h1>
        Total
        </h1>
      {selector.reduce((acc, curr) => {
        console.log({ acc, curr });
        acc += curr.productPrice * curr.count;
        return acc;
      }, 0)}
    </div>
  );
};

export default CardPage;
