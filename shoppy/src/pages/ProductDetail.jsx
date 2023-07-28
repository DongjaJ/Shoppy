import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCarts from '../hooks/useCarts';

export default function ProductDetail() {
  const { addorUpdateItem } = useCarts();
  const {
    state: { id, title, image, description, category, price, options },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const [success, setSuccess] = useState();

  function handleChangeSelect({ target }) {
    setSelected(target.value);
  }
  function handleClick() {
    const product = { id, title, image, price, option: selected, quantity: 1 };
    addorUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다!');
        setTimeout(() => {
          setSuccess(null);
        }, 2000);
      },
    });
  }

  return (
    <>
      <p className="m-4 pl-4">{category}</p>
      <div className="flex flex-col md:flex-row p-4">
        <img src={image} alt="" className="w-full px-4 basis-7/12" />
        <div className="w-full flex flex-col p-4 basis-5/12">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">
            {price}
          </p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label htmlFor="select" className="font-bold">
              옵션:
            </label>
            <select
              id="select"
              className="m-2 p-2 flex-1 border-2 border-dashed border-brand outline-none"
              onChange={handleChangeSelect}
              value={selected}>
              {options?.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          {success && <p className="my-2">{success}</p>}
          <Button text="장바구니에 추가" onClick={handleClick}></Button>
        </div>
      </div>
    </>
  );
}
