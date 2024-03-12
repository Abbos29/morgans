import React from 'react';
import useSWR from 'swr';
import Product from '../Product/Product';
import s from '../Products/Products.module.scss';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Inner = () => {
  const { data } = useSWR(
    'https://riot1806.pythonanywhere.com/products/',
    fetcher
  );

  return (
    <section className='inner'>
      <div className='container'>
        <div className={s.top}>
          <div>
            <h2>Вся продукция Morgan's</h2>
            <h3>Покупайте товары с доставкой на дом</h3>
          </div>

          <Link className='btn' href={`/shop`}>
            Выбрать продукцию
          </Link>
        </div>
        <div className='grid'>
          {data?.slice(0, 4).map((el, i) => (
            <Product key={i} el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inner;
