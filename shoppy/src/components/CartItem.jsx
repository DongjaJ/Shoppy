import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import useCarts from '../hooks/useCarts';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105';
export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const { addorUpdateItem, removeItem } = useCarts();

  const handleMinus = () => {
    if (quantity < 2) return;
    addorUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addorUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className="flex justify-center my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="ml-4 flex-1 flex justify-between">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-lg font-bold">{option}</p>
          <p>${price}</p>
        </div>
        <div className="text-2xl flex items-center gap-2">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <BsTrash className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
