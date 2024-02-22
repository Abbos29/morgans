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
  const { data } = useSWR('http://localhost:7777/products', fetcher);

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
          {data?.map((el, i) => (
            <Product
              key={i}
              id={el?.id}
              name={el?.name}
              image={el?.image}
              price={el?.price}
              category={el?.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
