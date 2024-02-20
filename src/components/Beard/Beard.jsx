import React from 'react';
import s from './Beard.module.scss';
import Link from 'next/link';

const Beard = ({ title }) => {
  return (
    <section className={s.beard}>
      <div className='container'>
        <div className={s.box}>
          <h1>{title}</h1>
          <h3>
            <Link href={'/'}>Главная </Link>/ {title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Beard;
