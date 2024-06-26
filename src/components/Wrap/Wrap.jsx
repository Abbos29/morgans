import React from 'react';
import Card from '../Card/Card';

import s from './Wrap.module.scss';
import Link from 'next/link';

const Wrap = () => {
  return (
    <section className={`${s.wrap_1} ${s.wrap}`}>
      <div className='container'>
        <div className={s.wrapper}>
          {/* <Card id={7} /> */}

          <div className={s.blank} style={{maxWidth: '350px'}}>
            <Link target='_blank' href={'https://www.instagram.com/trmn.store/'}>
              <img src="./blank-insta2.JPG" alt="instagram" />
            </Link>
          </div>

          <div className={s.box}>
            <b>Онлайн-магазин</b>
            <h3>Товары от Morgan's</h3>
            {/* <h4>Легендарные помады для укладки</h4> */}
            {/* <a className="btn" href="">Смотреть продукцию</a> */}
            <Link className='btn' href={'/shop?brandId=1'}>
              Смотреть продукцию
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrap;
