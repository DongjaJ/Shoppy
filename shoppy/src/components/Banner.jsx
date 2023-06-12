import React from 'react';

export default function Banner() {
  return (
    <div className="flex flex-col justify-center items-center bg-banner bg-cover bg-center h-1/5 p-2 mx-8">
      <h1 className="text-4xl text-zinc-200 font-bold mb-2">Shop With Us</h1>
      <p className="text-2xl text-zinc-200 font-semibold">
        Best Products, High Quality
      </p>
    </div>
  );
}
