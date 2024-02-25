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
            Онлайн-магазин Morgan's является официальным <br /> дистрибьютором
            Morgan’s Pomade Company Ltd в Узбекистане
          </h1>
        </div>
        <div className={s.footer__wrapper}>
          <div className={s.item}>
            <h3>Страницы</h3>
            <Link href={'/'}>Главная</Link>
            <Link href={'/shop'}>Продукция</Link>
            <p>Оплата и доставка</p>
            <Link href={'/tips'}>Советы по укладке</Link>
          </div>
          <div className={s.item}>
            <h3>Оплата</h3>
            <p>
              Все платежи на сайте morgans.uz проводятся через защищенный шлюз
            </p>
            <img src='/payments.png' alt='Payments' />
          </div>
          <div className={s.item}>
            <h3>Связь с нами</h3>
            <a style={{ fontFamily: 'sans-serif' }} href='tel:+998332223390'>
              +998 33 222 33 90
            </a>
            <a href='mailto:admin@morgans.uz'>admin@morgans.uz</a>
            <p className={s.footer__address}>
              Ташкент, пр.
              Олой Бозори, 59/7
              <br />
              Республика Узбекистан
            </p>
          </div>
        </div>
        <div className={s.footer__end}>
          <a target='_blank' href='https://www.instagram.com/morgans_uz/'>
            Наш Instagram
          </a>
          <Link href={'/'}>Конфиденциальность</Link>
          <p>© 2024 Morgan’s | Clanz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
