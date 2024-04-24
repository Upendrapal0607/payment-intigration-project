import React from "react";

export const CartDataCard = ({ item }) => {
  return (
    <div
      className="flex flex-col py-4 px-4 rounded-md cursor-pointer mt-[50%]"
      style={{ border: "1px solid black" }}
    >
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
};
