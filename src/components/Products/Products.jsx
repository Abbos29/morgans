import React from 'react';
import Product from '../Product/Product';
import s from './Products.module.scss';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Products = () => {
  // const productCount = Array.from({ length: productCount }, (_, index) => index + 1);
  const { data } = useSWR('http://localhost:7777/products', fetcher);

  return (
    <section className={s.products}>
      <div className='container'>
        <div className={s.top}>
          <div>
            <h2>Вся продукция Morgan's</h2>
            <h3>Покупайте товары с доставкой на дом</h3>
          </div>

          <a className='btn' href=''>
            Выбрать продукцию
          </a>
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
