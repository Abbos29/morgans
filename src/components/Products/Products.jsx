import React from 'react';
import Product from '../Product/Product';
import s from './Products.module.scss';
import useSWR from 'swr';
import Link from 'next/link';
import Filter from '../Filter/Filter';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Products = () => {
  const { data } = useSWR('https://api.morgans-store.uz/products/', fetcher);

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

        <div className={s.wrap}>
          <Filter />

          <div className={s.grid}>
          {data?.results?.map((el, index) => (
            <Product key={index} el={el} />
          ))}
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default Products;
