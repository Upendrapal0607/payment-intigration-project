import React, { useContext } from "react";
import { ProductContext } from "../ContextProvider/ContexProvider";

export const ProductCard = ({ item }) => {
  const { setCartProduct, cartProduct } = useContext(ProductContext);
  const handleAddToCart = () => {
    if (cartProduct.find((cartProduct) => cartProduct.id == item.id)) {
      alert("Already added to cart");
    } else {
      setCartProduct((prev) => [...prev, item]);
      alert("Added to cart");
    }
    console.log({ cartProduct });
  };
  return (
    <div
      className="flex flex-col py-4 px-4 rounded-md cursor-pointer mt-[50%]"
      style={{ border: "1px solid black" }}
    >
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button
        onClick={handleAddToCart}
        className="px-1 py-2 bg-slate-900 text-white cursor-pointer"
      >
        ADD TO CART
      </button>
    </div>
  );
};
