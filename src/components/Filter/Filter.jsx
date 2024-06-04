import React, { useState, useEffect } from 'react';
import s from './Filter.module.scss';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const API_TOKEN_CATEGORY = 'https://api.morgans-store.uz/categories/';
const API_TOKEN_BRANDS = 'https://api.morgans-store.uz/brands/';

const fetcherC = (url) => fetch(url).then((res) => res.json());
const fetcherB = (url) => fetch(url).then((res) => res.json());

const Filter = () => {
  const router = useRouter();
  const { data: categories } = useSWR(API_TOKEN_CATEGORY, fetcherC);
  const { data: brands } = useSWR(API_TOKEN_BRANDS, fetcherB);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');

  useEffect(() => {
    const { price_min, price_max, categoryId, brandId } = router.query;
    if (price_min) setMinPrice(price_min);
    if (price_max) setMaxPrice(price_max);
    if (categoryId) setCategory(categoryId);
    if (brandId) setBrand(brandId);
  }, [router.query]);

  const handleFilter = () => {
    const queryParams = {
      ...router.query,
      price_min: minPrice,
      price_max: maxPrice,
      categoryId: category,
      brandId: brand,
    };
    router.push({
      pathname: '/shop',
      query: queryParams,
    });
  };

  const handleCategoryChange = (id) => {
    setCategory(id);
    const queryParams = {
      ...router.query,
      categoryId: id,
    };
    router.push({
      pathname: '/shop',
      query: queryParams,
    });
  };

  const handleBrandChange = (id) => {
    setBrand(id);
    const queryParams = {
      ...router.query,
      brandId: id,
    };
    router.push({
      pathname: '/shop',
      query: queryParams,
    });
  };

  const handleZero = () => {
    setMinPrice('');
    setMaxPrice('');
    setCategory('');
    setBrand('');
    router.push('/shop');
  };

  return (
    <div className={s.filter}>
      <div className={s.wrap}>
        <div className={s.card}>
          <h3>Категории</h3>
          <div className={s.menu}>
            {categories?.results?.map((el) => (
              <div key={el.id} onClick={() => handleCategoryChange(el.id)}>
                <p>
                  {el.name} <span>({el.products?.length})</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={s.card}>
          <h3>Бренды</h3>
          <div className={s.menu}>
            {brands?.results?.map((el) => (
              <div key={el.id} onClick={() => handleBrandChange(el.id)}>
                <p>
                  {el.name} <span>({el.products?.length})</span>
                </p>
              </div>
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
            <button onClick={handleZero}>Сбросить все фильтры</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
