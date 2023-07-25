import React from 'react';

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className="text-xl outline-none bg-red-400 text-white py-2 px-4 font-bold rounded-md hover:brightness-110"
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
}
