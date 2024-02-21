import React from 'react';
import s from './Product.module.scss';
import Link from 'next/link';

const Product = ({ id, name, image, category, price }) => {
  return (
    <div className={s.product}>
      <div className={s.box}>
        <h3>{category}</h3>
        <Link href={`/single-product/${id}`}>
          <h2>{name}</h2>
        </Link>
        <b>{price} sum</b>
        <button className='btn'>В корзину</button>
      </div>
      <img className={s.img} src={image} alt={name} />
    </div>
  );
};

export default Product;
