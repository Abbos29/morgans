import React, { useEffect, useRef, useState } from 'react';
import s from './Search.module.scss';
import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const [search, setSearch] = useState('');
  const [isSearch, isOpenSearch] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef(null);
  const API_TOKEN = `https://api.morgans-store.uz/products/?search=${search}`;
  const { data } = useSWR(`${API_TOKEN}`, fetcher);

  const toggleOpenSearch = () => {
    isOpenSearch((prev) => !prev);
  };

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
        <img
          onClick={toggleOpenSearch}
          className={s.search_icon}
          src='https://cdn-icons-png.freepik.com/256/711/711319.png?semt=ais_hybrid'
          alt='icon'
        />

        <div
          className={
            isSearch ? `${s.search_wrap} open-search` : `${s.search_wrap}`
          }
        >
          <img
            onClick={toggleOpenSearch}
            className={s.close_icon}
            src='https://cdn-icons-png.freepik.com/256/32/32178.png?semt=ais_hybrid'
            alt='close-icon'
          />

          <div className={s.search_iner}>
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
              {data?.length ? (
                data?.map((el) => {
                  return (
                    <Link
                      className={s.search_card}
                      href={`/single-product/${el?.id}`}
                      key={el?.id}
                    >
                      <img src={el?.image} alt={el?.name} />
                      <span>
                        <p>{el?.name}</p>
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
        </div>
      </div>
    </>
  );
};

export default Search;
