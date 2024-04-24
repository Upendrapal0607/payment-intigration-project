import React, { useContext, useState } from "react";
import { ProductContext } from "../ContextProvider/ContexProvider";
import { Link, useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { totalPrice, cartProduct, setEmail } = useContext(ProductContext);
  const [text, setText] = useState("");
  const naviggate = useNavigate();
  const handleSubmit = () => {
    if (text) {
      setEmail(text);
      naviggate("/payment");
    } else {
      alert("Please Enter Your Email");
    }
  };

  return (
    <div>
      <h1>You have to pay: {totalPrice}</h1>
      <h1>You are to perchaging {cartProduct.length} items </h1>
      <div>
        {cartProduct.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </div>
      <h1>Thank you</h1>
      <label htmlFor="">
        Email:
        <input
          type="email"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="Email"
          className="py-2 px-2"
          style={{ border: "1px solid black" }}
        />
      </label>
      <button
        onClick={handleSubmit}
        className="w-[200px] inline px-6 rounded-sm py-2 bg-slate-900 text-white cursor-pointer"
      >
        Continue Shopping
      </button>
    </div>
  );
};
