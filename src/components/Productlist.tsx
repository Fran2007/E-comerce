import React from "react";

interface Product {
  name: string;
  price: number;
}

interface ProductlistProps {
  products: Product[];
}

const Productlist: React.FC<ProductlistProps> = ({ products }) => {
  return (
    <div className="mx-auto max-w-screen-md">
      <h2 className="text-3xl">Productos</h2>
      <ul className="list flex flex-wrap list-none">
        {products.map((product, index) => (
          <li
            key={index}
            className="w-1/3 mx-4 text-center rounded-lg border border-gray-400"
          >
            <h3>{product.name}</h3>
            <p>Precio: $ {product.price}.00</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productlist;
