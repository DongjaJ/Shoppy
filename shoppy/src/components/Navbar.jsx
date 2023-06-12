import React from 'react';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleClickCard = () => navigate('/carts');

  return (
    <div className="flex items-center justify-around py-2">
      <Link to="/">
        <div className="flex items-center text-orange-600 text-3xl cursor-pointer">
          <FiShoppingBag className="mr-2" />
          <p>Shoppy</p>
        </div>
      </Link>
      <div className="flex items-center">
        <Link to="/products">
          <p className="text-lg mr-2 cursor-pointer hover:text-orange-600">
            Products
          </p>
        </Link>
        <FiShoppingCart
          className="text-xl mr-4 cursor-pointer hover:text-orange-600"
          onClick={handleClickCard}
        />
        <button className="text-xl outline-none bg-red-400 text-zinc-100 p-2 font-bold">
          Login
        </button>
      </div>
    </div>
  );
}
