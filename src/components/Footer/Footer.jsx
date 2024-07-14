import React from 'react';
import s from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={s.footer} id='footer'>
      <div className='container'>
        <div className={s.footer__top}>
          <img src='/logo-white.png' alt='Logo' />
          <h1>
            Онлайн-магазин Trueman Store является официальным <br /> дистрибьютором премиальной мужской косметики в Узбекистане
          </h1>
        </div>
        <div className={s.footer__wrapper}>
          <div className={s.item}>
            <h3>Страницы</h3>
            <Link href={'/'}>Главная</Link>
            <Link href={'/shop'}>Продукция</Link>
            {/* <p>Оплата и доставка</p> */}
            <Link href={'/tips'}>Советы по укладке</Link>
          </div>
          <div className={s.item}>
            <h3>Оплата</h3>
            <p>
              Все платежи на сайте trueman.uz проводятся через защищенный шлюз
            </p>
            <img src='/payments.png' alt='Payments' />
          </div>
          <div className={s.item}>
            <h3>Связь с нами</h3>
            <a style={{ fontFamily: 'sans-serif' }} href='tel:+998976868088'>
              +998 97 686 80 88
            </a>
            <a href='mailto:Trmn.store.uz@gmail.com'>Trmn.store.uz@gmail.com</a>
            <p className={s.footer__address}>
              Ташкент, пр.
              Олой Бозори, 59/7
              <br />
              Республика Узбекистан
            </p>
            <p>Для оптовой покупке <br /> обращайтесь в <a target='_blank' href="https://t.me/TruemanStore" style={{ display: "inline-block" }}>@TruemanStore</a></p>
          </div>
        </div>
        <div className={s.footer__end}>
          <a target='_blank' href='https://www.instagram.com/trmn.store/'>
            Наш Instagram
          </a>
          <Link href={'https://t.me/abbos_uz1'}>Developed by Abbos Valiev</Link>
          <p>© 2024 Trueman Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
