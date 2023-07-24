import React from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../apis/Products';

export default function Products({ type }) {
  const isHome = type === 'home';
  const navigate = useNavigate();

  const { data: products, isLoading, error } = useProducts();

  return (
    <>
      {isHome && <Banner />}
      {isLoading && '<p>Loading 중..</p>'}
      {error && 'something is wrong'}
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products &&
          products.map(({ id, thumbnail, name, price, category }) => (
            <li key={id} onClick={() => navigate(`/products/${id}`)}>
              <img src={thumbnail} alt="thumbnail" className="rounded-t-lg" />
              <div className="bg-neutral-100 p-2 rounded-b-lg">
                <div className="flex justify-between font-medium">
                  <h3>{name}</h3>
                  <h3>${price}</h3>
                </div>
                <p>{category}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
