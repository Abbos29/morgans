import React from 'react';
import s from './Product.module.scss';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';

const Product = ({ el, id, name, image, category, price }) => {
  const { getItem, addItem, removeItem } = useCart();
  const isClient = useIsClient();

  return (
    <div className={s.product}>
      <div className={s.box}>
        <h3>{category}</h3>
        <Link href={`/single-product/${id}`}>
          <h2>{name}</h2>
        </Link>
        <b>{price} sum</b>
        {isClient && !getItem(id) ? (
          <button className='btn' onClick={() => addItem(el)}>
            В корзину
          </button>
        ) : (
          <button className='btn' onClick={() => removeItem(id)}>
            Отменить
          </button>
        )}
      </div>
      <img className={s.img} src={image} alt={name} />
    </div>
  );
};

export default Product;
