import React from 'react';
// import img from './card-1.jpeg'
import s from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ id }) => {
  return (
    <div className={s.card}>
      <Link href={`/single-product/${id}`} className={s.card_img}>
        <Image src='/card-1.jpeg' fill layout='fill' alt='img' />
      </Link>
      <Link className={s.card_catalog} href='/shop'>
        Помады для волос
      </Link>
      <Link href={`/single-product/${id}`} className={s.card_name}>
        Помада для укладки Morgans Pomade Средняя фиксация / Средний блеск 100 г
      </Link>
      <Link href={`/single-product/${id}`} className={s.card_box}>
        <b className={s.card_price}>27 UZS</b>
        <button className={s.card_add}>В корзину</button>
      </Link>
    </div>
  );
};

export default Card;
