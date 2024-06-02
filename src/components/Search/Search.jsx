import React, { useEffect, useRef, useState } from 'react';
import s from './Search.module.scss';
import useSWR from 'swr';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDebounceValue } from 'usehooks-ts';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const [debouncedValue, setValue] = useDebounceValue('', 500);
  const [isSearch, isOpenSearch] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef(null);
  const API_TOKEN = `https://api.morgans-store.uz/products/?search=${debouncedValue}`;
  const { data } = useSWR(`${API_TOKEN}`, fetcher);

  const toggleOpenSearch = () => {
    isOpenSearch((prev) => !prev);
  };

  // const searchData = data?.results?.filter((el) => {
  //   return el?.name?.toLowerCase().includes(search.toLowerCase());
  // });

  useEffect(() => {
    setValue('');
  }, [router]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setValue('');
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
                value={debouncedValue}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Название товара...'
                type='text'
              />
            </div>
            <div
              ref={wrapperRef}
              className={s.search_wrapper}
              style={{ display: debouncedValue.length ? 'block' : 'none' }}
            >
              {data?.results?.length ? (
                data?.results?.map((el) => {
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
