import React, { useContext, useState } from "react";
import { ProductContext } from "../ContextProvider/ContexProvider";
import ProductData from "../db.json";
import { ProductCard } from "../Componanets/ProductCard";

export const ProductPage = () => {
  const [product, setProduct] = useState(ProductData.Product || []);

  return (
    <div className="grid grid-cols-5 gap-2">
      {product.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};
