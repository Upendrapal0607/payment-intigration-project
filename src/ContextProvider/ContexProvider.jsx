import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ContexProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [email, setEmail] = useState(0);

  return (
    <ProductContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        totalPrice,
        setTotalPrice,
        setEmail,
        email,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
