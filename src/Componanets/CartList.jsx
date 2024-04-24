import React, { useContext, useState } from "react";
import { CartDataCard } from "./CartDataCard";
import { ProductContext } from "../ContextProvider/ContexProvider";
import { Link, useNavigate } from "react-router-dom";

export const CartList = () => {
  const { cartProduct, setTotalPrice } = useContext(ProductContext);

  const HandleCheckOut = () => {
    const TotalSum = cartProduct.reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(TotalSum);
  };

  return cartProduct.length == 0 ? (
    <div>
      <h1>Your Cart is Empty</h1>
      <Link to="/">
        <button className="w-[200px] inline px-6 rounded-sm py-2 bg-slate-900 text-white cursor-pointer">
          Go Back
        </button>
      </Link>
    </div>
  ) : (
    <div className="flex-col flex gap-4">
      <div className="grid grid-cols-5 gap-2">
        {cartProduct?.map((item) => (
          <CartDataCard key={item.id} item={item} />
        ))}
      </div>
      <Link
        onClick={HandleCheckOut}
        to={"/checkout"}
        className="w-[200px] inline px-6 rounded-sm py-2 bg-slate-900 text-white cursor-pointer"
      >
        Proceed to checkout
      </Link>
    </div>
  );
};
