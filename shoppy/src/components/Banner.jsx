import React from 'react';

export default function Banner() {
  return (
    <section className="flex flex-col justify-center items-center bg-banner bg-cover bg-center h-96 p-2 opacity-80">
      <h2 className="text-6xl text-gray-50 drop-shadow-2xl font-bold mb-2">
        Shop With Us
      </h2>
      <p className="text-2xl text-gray-50 drop-shadow-2xl  font-semibold">
        Best Products, High Quality
      </p>
    </section>
  );
}
