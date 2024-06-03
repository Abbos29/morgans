import React, { useState, useEffect } from 'react';
import s from './Filter.module.scss';
import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';

const API_TOKEN_CATEGORY = 'https://api.morgans-store.uz/categories/';
const API_TOKEN_BRANDS = 'https://api.morgans-store.uz/brands/';
const API_TOKEN_PRODUCTS = 'https://api.morgans-store.uz/products/';

// category
const fetcherC = (url) => fetch(url).then((res) => res.json());

// brands
const fetcherB = (url) => fetch(url).then((res) => res.json());

// products (filter price)
const fetcherP = (url) => fetch(url).then((res) => res.json());

const Filter = () => {
  const router = useRouter();
  const { data: categories } = useSWR(API_TOKEN_CATEGORY, fetcherC);
  const { data: brands } = useSWR(API_TOKEN_BRANDS, fetcherB);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    const { price_min, price_max } = router.query;
    if (price_min) {
      setMinPrice(price_min);
    }
    if (price_max) {
      setMaxPrice(price_max);
    }
  }, [router.query]);

  const handleFilter = () => {
    router.push({
      pathname: '/shop',
      query: { price_min: minPrice, price_max: maxPrice },
    });
  };

  const { data } = useSWR(() => {
    if (minPrice && maxPrice) {
      return `${API_TOKEN_PRODUCTS}?price_min=${minPrice}&price_max=${maxPrice}`;
    }
    return API_TOKEN_PRODUCTS;
  }, fetcherP);

  const hanldeZero = () => {
    setMinPrice('');
    setMaxPrice('');
    router.push('/shop');
  };

  return (
    <>
      <div className={s.filter}>
        <div className={s.wrap}>
          <div className={s.card}>
            <h3>Категории</h3>
            <div className={s.menu}>
              {categories?.results?.map((el) => (
                <Link key={el.id} href={`/category/${el.id}`}>
                  {el.name} <span>({el.products?.length})</span>
                </Link>
              ))}
            </div>
          </div>

          <div className={s.card}>
            <h3>Бренды</h3>
            <div className={s.menu}>
              {brands?.results?.map((el) => (
                <Link key={el.id} href={`/brand/${el.id}`}>
                  {el.name} <span>({el.products?.length})</span>
                </Link>
              ))}
            </div>
          </div>
          <div className={s.card}>
            <h3>По цене</h3>
            <div className={s.price}>
              <label htmlFor=''>От</label>
              <input
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                type='number'
              />

              <label htmlFor=''>До</label>
              <input
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                type='number'
              />

              <button onClick={handleFilter}>Найти</button>
              <button onClick={hanldeZero}>Сбросить фильтр</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
