import React from 'react';
import s from './Filter.module.scss';
import useSWR from 'swr';
import Link from 'next/link';

const API_TOKEN_CATEGORY = 'https://api.morgans-store.uz/categories/';
const API_TOKEN_BRANDS = 'https://api.morgans-store.uz/brands/';

const fetcherC = (url) => fetch(url).then((res) => res.json());
const fetcherB = (url) => fetch(url).then((res) => res.json());

const Filter = () => {
  const { data: categories } = useSWR(`${API_TOKEN_CATEGORY}`, fetcherC);
  const { data: brands } = useSWR(`${API_TOKEN_BRANDS}`, fetcherB);

  return (
    <>
      <div className={s.filter}>
        <div className={s.wrap}>
          <div className={s.card}>
            <h3>По цене</h3>
            <div className={s.price}>
              <label htmlFor=''>От</label>
              <input type='text' />

              <label htmlFor=''>До</label>
              <input type='text' />

              <button>Найти</button>
            </div>
          </div>

          <div className={s.card}>
            <h3>Категории</h3>
            <div className={s.menu}>
              {categories?.results?.map((el) => {
                return (
                  <Link key={el.id} href={`/category/${el?.id}`}>
                    {el?.name} <span>({el?.products?.length})</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={s.card}>
            <h3>Бренды</h3>
            <div className={s.menu}>
              {brands?.results?.map((el) => {
                return (
                  <Link key={el.id} href={`/brand/${el?.id}`}>
                    {el?.name} <span>({el?.products?.length})</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
