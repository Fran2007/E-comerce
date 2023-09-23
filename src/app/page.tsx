"use client";

import Navtop from "@/components/Navtop";
import Productlist from "@/components/Productlist";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <Navtop />
      <Productlist products={products} />
    </main>
  );
}
