import { useState } from "react";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

export default function GetProductList() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await fetch("/api/products/list");
      const data = await res.json();
      if (Array.isArray(data)) {
        setProducts(data);
        return;
      }
    } catch (error) {
      return error.message;
    }
  };
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="flex gap-2 flex-wrap ml-5 ">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          id={product._id}
        />
      ))}
    </div>
  );
}
