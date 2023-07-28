import React from 'react';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaEquals } from 'react-icons/fa';
import Button from '../components/ui/Button';
import useCarts from '../hooks/useCarts';

const SHIPPING = 3000;
export default function Carts() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCarts();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products?.length > 0;
  const totalPrice = products?.reduce(
    (prev, current) => prev + parseInt(current.price) * current.quantity,
    0
  );

  return (
    <section className="p-8 flex flex-col">
      <h2 className="font-bold text-2xl pb-4 text-center border-b border-gray-300">
        내 장바구니
      </h2>
      {!hasProducts && <p>장바구니에 상품이 없습니다</p>}
      {hasProducts && (
        <>
          <ul className="border-b py-4 border-gray-300">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
        </>
      )}
      <div className="flex justify-between items-center p-2 md:p-8">
        <PriceCard text="상품 총액" price={totalPrice} />
        <AiFillPlusCircle className="shrink-0" />
        <PriceCard text="배송액" price={SHIPPING} />
        <FaEquals className="shrink-0" />
        <PriceCard text="총가격" price={totalPrice + SHIPPING} />
      </div>
      <Button text="주문하기" />
    </section>
  );
}
