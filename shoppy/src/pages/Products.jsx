import React from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../apis/Firebase';
import { useQuery } from '@tanstack/react-query';

export default function Products({ type }) {
  const isHome = type === 'home';
  const navigate = useNavigate();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery(['products'], getProducts);

  return (
    <>
      {isHome && <Banner />}
      {isLoading && <p>Loading 중..</p>}
      {error && 'something is wrong'}
      <ul className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products &&
          products.map(({ id, image, title, price, category }) => (
            <li
              key={id}
              onClick={() => navigate(`/products/${id}`)}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer">
              <img src={image} alt={title} className="w-full" />
              <div className="mt-2 px-2 text-lg flex justify-between items-center gap-2">
                <h3 className="truncate">{title}</h3>
                <p>${price}</p>
              </div>
              <p className="mb-2 px-2 text-gray-600">{category}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
