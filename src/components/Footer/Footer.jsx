import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.footer__title}>
          <img src='/' alt='Logo' />
          <h1>
            Онлайн-магазин Morgan's является официальным дистрибьютором Morgan’s
            Pomade Company Ltd в Узбекистане
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
