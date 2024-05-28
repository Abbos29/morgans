import React, { useEffect, useRef, useState } from 'react';
import s from './Search.module.scss';
import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';

const API_TOKEN = 'https://api.morgans-store.uz/products/';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const { data } = useSWR(`${API_TOKEN}`, fetcher);
  const [search, setSearch] = useState('');
  const router = useRouter();
  const wrapperRef = useRef(null);

  const searchData = data?.results?.filter((el) => {
    return el?.name?.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    setSearch('');
  }, [router]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSearch('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={s.search_box}>
        <div className={s.search}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Название товара...'
            type='text'
          />
        </div>
        <div
        ref={wrapperRef}
          className={s.search_wrapper}
          style={{ display: search.length ? 'block' : 'none' }}
        >
          {searchData?.length ? (
            searchData?.map((el) => {
              return (
                <Link
                  className={s.search_card}
                  href={`/single-product/${el?.id}`}
                  key={el?.id}
                >
                  <img src={el?.image} alt={el?.name} />
                  <span>
                    <p>
                      {el?.name}
                    </p>
                    <b>{el?.price.toLocaleString()} $</b>
                  </span>
                </Link>
              );
            })
          ) : (
            <>
              <b>Не найдено</b>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;