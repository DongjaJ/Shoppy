import React from 'react';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className="flex items-center justify-around py-2">
      <div className="flex items-center text-orange-600 text-3xl cursor-pointer">
        <FiShoppingBag className="mr-2" />
        <p>Shoppy</p>
      </div>
      <div className="flex items-center">
        <p className="text-lg mr-2 cursor-pointer">Products</p>
        <FiShoppingCart className="text-xl mr-4 cursor-pointer" />
        <button className="text-xl outline-none bg-red-400 text-zinc-100 p-2 font-bold">
          Login
        </button>
      </div>
    </div>
  );
}
