import React, { useState } from 'react';

export default function ProductDetail() {
  const selectedList = ['xs', 's', 'm', 'l', 'lg'];
  const [selected, setSelected] = useState(0);

  function handleChangeSelect({ target }) {
    setSelected(target.value);
  }

  return (
    <div className="mx-32">
      <p className="m-4 pl-4">남성</p>
      <div className="flex w-full mx-4">
        <img src="/image/1.webp" alt="" className="w-2/3" />
        <div className="ml-4 w-1/3">
          <h1 className="text-3xl font-bold my-2">후드티</h1>
          <h3 className="text-2xl font-bold border-b border-gray-400">
            $150000
          </h3>
          <p className="my-4">회색-후드티</p>
          <div className="my-4">
            옵션
            <select
              className="w150"
              onChange={handleChangeSelect}
              value={selected}>
              {selectedList.map((item, index) => (
                <option value={index} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col justify-center">
            <button className="bg-red-400 text-zinc-100 mx-2">
              장바구니에 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
