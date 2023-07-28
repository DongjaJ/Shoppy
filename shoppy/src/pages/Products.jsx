import React from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

export default function Products({ type }) {
  const isHome = type === 'home';
  const navigate = useNavigate();

  const {
    productsQuery: { data: products, isLoading, error },
  } = useProducts();

  return (
    <>
      {isHome && <Banner />}
      {isLoading && <p>Loading 중..</p>}
      {error && 'something is wrong'}
      <ul className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products &&
          products.map((product) => (
            <li
              key={product.id}
              onClick={() =>
                navigate(`/products/${product.id}`, { state: product })
              }
              className="rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105">
              <img src={product.image} alt={product.title} className="w-full" />
              <div className="mt-2 px-2 text-lg flex justify-between items-center gap-2">
                <h3 className="truncate">{product.title}</h3>
                <p>${product.price}</p>
              </div>
              <p className="mb-2 px-2 text-gray-600">{product.category}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
