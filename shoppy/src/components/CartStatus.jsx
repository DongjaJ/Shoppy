import { FiShoppingCart } from 'react-icons/fi';
import React from 'react';
import useCarts from '../hooks/useCarts';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCarts();
  return (
    <div className="relative">
      <FiShoppingCart className="text-4xl cursor-pointer hover:text-orange-600" />
      {products && (
        <p className="w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
