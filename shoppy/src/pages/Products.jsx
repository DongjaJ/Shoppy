import React from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';

export default function Products({ type }) {
  const images = Array.from({ length: 7 }, (_, i) => `/image/${i + 1}.webp`);
  const isHome = type === 'home';
  const navigate = useNavigate();

  return (
    <>
      {isHome && <Banner />}
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-32">
        {images.map((image) => (
          <li key={image} onClick={() => navigate(`/products/imageId`)}>
            <img src={image} alt="thumbnail" className="rounded-t-lg" />
            <div className="bg-neutral-100 p-2 rounded-b-lg">
              <div className="flex justify-between font-medium">
                <h3>그레이색 후드</h3>
                <h3>$150000</h3>
              </div>
              <p>카테고리</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
