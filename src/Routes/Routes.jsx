import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../Pages/ProductPage";
import { CartList } from "../Componanets/CartList";
import { Checkout } from "../Componanets/Checkout";
import { Payment } from "../Componanets/Payment";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};
