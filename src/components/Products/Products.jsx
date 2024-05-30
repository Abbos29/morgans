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

  // Get current page from query params on initial load
  useEffect(() => {
    const page = parseInt(router.query.page, 10) || 1;
    setCurrentPage(page);
  }, [router.query.page]);

  const url = `https://api.morgans-store.uz/products/?page=${currentPage}`;
  const { data } = useSWR(url, fetcher);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    router.push({ pathname: router.pathname, query: { ...router.query, page } });
  };

  return (
    <>
      <section className={s.products}>
        <div className='container'>
          <div className={s.wrap}>
            <Filter data={data} />

            <div className={s.grid}>
              {data?.results?.map((el, index) => (
                <Product key={index} el={el} />
              ))}
            </div>
          </div>
          {/* Pagination */}
          <div className={s.pagination}>
            <Stack spacing={2}>
              <Pagination
                count={data?.total_pages || 1}
                page={currentPage}
                onChange={handlePageChange}
              />
            </Stack>
          </div>
          {/* Pagination */}
        </div>
      </section>
    </>
  );
};

export default Products;
