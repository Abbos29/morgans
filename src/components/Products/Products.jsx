import React from 'react';
import Product from '../Product/Product';
import s from './Products.module.scss';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((err) => alert(err));

const Products = () => {
  const { data } = useSWR(
    'https://riot1806.pythonanywhere.com/products/',
    fetcher
  );


  return (
    <section className={s.products}>
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

        <div className={s.grid}>
          {data?.map((el, index) => (
            <Product key={index} el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
