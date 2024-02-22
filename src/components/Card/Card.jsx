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
        ПОМАДЫ ДЛЯ УКЛАДКИ
      </Link>
      <Link href={`/single-product/${id}`} className={s.card_name}>
        Помада для укладки · Средняя фиксация
      </Link>
      <div className={s.card_box}>
        <b className={s.card_price}>12 000 sum</b>
        <button className={s.card_add}>В корзину</button>
      </div>
    </div>
  );
};

export default Card;
