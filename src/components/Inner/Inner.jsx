import React from 'react';
import Product from '../Product/Product';
import s from '../Products/Products.module.scss';
import Link from 'next/link';

const Inner = ({ data, titleH }) => {
  return (
    <>
      {data?.length ? (
        <section className='inner'>
          <div className='container'>
            <div className={s.top}>
              <div>
                <h2>{titleH}</h2>
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
      ) : null}
    </>
  );
};

export default Inner;
