import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Product from '../Product/Product';
import s from './Products.module.scss';
import useSWR from 'swr';
import Filter from '../Filter/Filter';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Products = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const { price_min, price_max, categoryId, brandId } = router.query;
  const minPrice = price_min || '';
  const maxPrice = price_max || '';
  const currentCategoryId = categoryId || '';
  const currentBrandId = brandId || '';

  useEffect(() => {
    const page = parseInt(router.query.page, 10) || 1;
    setCurrentPage(page);
  }, [router.query.page]);

  const url = `https://api.morgans-store.uz/products/?page=${currentPage}&price_min=${minPrice}&price_max=${maxPrice}&category=${currentCategoryId}&brand=${currentBrandId}`;
  const { data, isLoading } = useSWR(url, fetcher);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  const handleFilterChange = (filters) => {
    const queryParams = {
      ...router.query,
      ...filters,
      page: 1, // Reset to the first page when filters are applied
    };
    router.push({
      pathname: router.pathname,
      query: queryParams,
    });
  };

  return (
    <>
      <section className={s.products}>
        {isLoading ? (
          <h1 className={s.loader}>Загрузка данных...</h1>
        ) : (
          <div className='container'>
            <div className={s.wrap}>
              <Filter />

              {data?.results?.length ? (
                <div className={s.grid}>
                  {data?.results?.map((el, index) => (
                    <Product key={index} el={el} />
                  ))}
                </div>
              ) : (
                <div className='not_found'>
                  <h1>Ничего не найдено</h1>
                </div>
              )}
            </div>
            <div className={s.pagination}>
              <Stack spacing={2}>
                <Pagination
                  count={data?.total_pages || 1}
                  page={currentPage}
                  onChange={handlePageChange}
                />
              </Stack>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Products;
