import Link from 'next/link';
import s from './Header.module.scss';
import { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';
import axios from 'axios';
import useSWR from 'swr';
import Search from '../Search/Search';
import { useRouter } from 'next/router';

const API_TOKEN = 'https://api.trueman.uz/products/?disable_pagination=true';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Header = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [isMenu, setIsMenu] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { items, isEmpty, updateItemQuantity, removeItem, emptyCart } =
    useCart();
  let total = 0;
  const isClient = useIsClient();

  const { data } = useSWR(`${API_TOKEN}`, fetcher);

  const menuHandle = () => {
    setIsMenu(!isMenu);
  };

  const cartHandle = () => {
    setIsCart(!isCart);
  };

  const cartClosed = () => {
    setIsCart(false);
  };

  const closedOverlay = (e) => {
    if (!e.target.closest('.cart-open')) {
      setIsCart(false);
    }
  };

  let randomNum = Math.random();
  let sliced = randomNum.toString().slice(2, -1);

  useEffect(() => {
    setIsMenu(false);
    setIsCart(false);
  }, [router]);

  const postTest = (e) => {
    e.preventDefault();

    axios
      .post('https://api.trueman.uz/orders/', {
        order_num: sliced,
        name,
        phone_number: tel,
        products: items,
        total: total,
      })
      .then(() => {
        emptyCart();
        setShowThankYou(true);
        setName(''); // Clear the name input
        setTel(''); // Clear the phone input
        cartHandle();
        setTimeout(() => setShowThankYou(false), 5000);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          document.querySelector('header').classList.add('xscroll');
        } else {
          document.querySelector('header').classList.remove('xscroll');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isSmallScreen]);

  const handleProductClick = () => {
    cartHandle();
  };

  return (
    <header
      className={`${s.header} ${isScrolled ? 'xscroll' : ''}`}
      id='header'
    >
      
      <div className='container'>
        <nav className={s.nav}>
          <Link className={`${s.logo}`} href='/'>
            <img src='/Logo/SVG/Trueman_logo-03.svg' alt='logo' />
          </Link>

          <div className={`${s.menu} ${isMenu ? 'menu-open' : ''}`}>
            <Link
              onClick={isSmallScreen ? menuHandle : undefined}
              className='link'
              href={'/'}
            >
              Главная
            </Link>
            <Link
              onClick={isSmallScreen ? menuHandle : undefined}
              className='link'
              href={'/shop'}
            >
              Продукция
            </Link>
            <Link
              onClick={isSmallScreen ? menuHandle : undefined}
              className='link'
              href='#footer'
            >
              Контакты
            </Link>
            <Link
              onClick={isSmallScreen ? menuHandle : undefined}
              className='link'
              href={'/tips'}
            >
              Советы по укладке
            </Link>
          </div>

          <div className={s.box}>
            <Search />

            <div className={s.cart}>
              <div className={s.lengts}>
                <svg
                  onClick={cartHandle}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 128 128'
                >
                  <path
                    d='M95.2 65l-54.6 8c-1.6.2-2.8 1.8-2.5 3.4.2 1.5 1.5 2.6 3 2.6.1 0 .3 0 .4 0l54.6-8c9.4-1.4 16.8-8.2 19-17.4l6.9-28.8c.2-.9 0-1.8-.6-2.6-.6-.7-1.4-1.1-2.4-1.1H21.5C18.8 8.7 11.3 2 11 1.7 9.7.7 7.8.8 6.8 2 5.7 3.3 5.8 5.2 7 6.2c.1.1 7.2 6.5 9 18.2l8.7 57.5c1 6.4 6.4 11.1 12.9 11.1H97c1.7 0 3-1.3 3-3s-1.3-3-3-3H37.6c-3.5 0-6.4-2.5-6.9-6l-8.2-54h92.7l-6 25.1C107.6 58.9 102.1 64 95.2 65zM31 114c0 7.2 5.8 13 13 13s13-5.8 13-13-5.8-13-13-13S31 106.8 31 114zM51 114c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7S51 110.1 51 114zM87 101c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13S94.2 101 87 101zM87 121c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7S90.9 121 87 121z'
                    fill='#000'
                  />
                </svg>

                <span>{isClient && items.length}</span>
              </div>

              <div
                onClick={closedOverlay}
                className={`${s.overlay} ${isCart ? 'overlay-open' : ''}`}
              >
                <div className={`${s.cart_main} ${isCart ? 'cart-open' : ''}`}>
                  <div className={s.cart_top}>
                    <h3>Корзина</h3>
                    <svg
                      onClick={cartClosed}
                      aria-hidden='true'
                      focusable='false'
                      fill='none'
                      width='14'
                      viewBox='0 0 16 16'
                    >
                      <path
                        d='m1 1 14 14M1 15 15 1'
                        stroke='currentColor'
                        strokeWidth='1.5'
                      ></path>
                    </svg>
                  </div>

                  {isClient && isEmpty ? (
                    <div className={s.empty_cart}>
                      <h1>Корзина пусто</h1>
                    </div>
                  ) : (
                    <div className={s.cart_list}>
                      <p className={s.clear_cart} onClick={() => emptyCart()}>
                        Очистить
                      </p>
                      {isClient &&
                        items.map((el, id) => {
                          const priceCount = el?.quantity * el?.price;
                          total += priceCount;
                          
                          // console.log(data);

                          const productData = data?.find(
                            (product) => product.id == el.id
                          );

                          const maxQuantity = productData?.quantity || 1;
                          const disableIncrease = el.quantity >= maxQuantity;

                          // console.log(productData);

                          if (el?.quantity >= 1) {
                            return (
                              <div className={s.cart_item} key={el.id}>
                                <div onClick={handleProductClick}>
                                  <Link href={`/single-product/${el.id}`}>
                                    <img src={el.image} alt='img' />
                                  </Link>
                                </div>

                                <div className={s.cart_box}>
                                  <div onClick={handleProductClick}>
                                    <Link href={`/single-product/${el.id}`}>
                                      <h3>{el.name}</h3>
                                    </Link>
                                  </div>
                                  <p>{el.weight}</p>
                                  <b>
                                    {priceCount?.toLocaleString()}
                                    <span> $</span>
                                  </b>

                                  <div className={s.flex}>
                                    <div className={s.row}>
                                      <button
                                        onClick={() =>
                                          updateItemQuantity(
                                            el.id,
                                            el.quantity - 1
                                          )
                                        }
                                      >
                                        -
                                      </button>
                                      <p>{el?.quantity}</p>
                                      <button
                                        onClick={() =>
                                          updateItemQuantity(
                                            el.id,
                                            el.quantity + 1
                                          )
                                        }
                                        disabled={disableIncrease}
                                      >
                                        +
                                      </button>
                                    </div>

                                    <button
                                      onClick={() => removeItem(el?.id)}
                                      className={s.remove}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          } else {
                            removeItem(el?.id);
                          }
                        })}
                    </div>
                  )}

                  {isClient && (
                    <div className={s.cart_form}>
                      <b>Обшая сумма:</b>
                      <h3>{total.toLocaleString()} $</h3>
                      <br />
                      {!isEmpty ? (
                        <form onSubmit={postTest}>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Имя'
                            type='text'
                            required
                          />
                          <input
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            placeholder='Телефон'
                            type='text'
                            required
                          />
                          <button type='submit'>Оформить заказ</button>
                        </form>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`${s.burger} ${isMenu ? 'burger-open' : ''}`}
              onClick={(e) => menuHandle(e)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>

      <a className={`${s.btn_up} ${isScrolled ? 'visible' : ''}`} href='#'>
        <img src='/up_arrow.svg' alt='img' />
      </a>

      {showThankYou && (
        <div className={s.thankYouPopup}>
          <div className={s.thankYouContent}>
            <h2>Спасибо за вашу заявку!</h2>
            <p>Скоро с вами свяжутся.</p>
            <button className='btn' onClick={() => setShowThankYou(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
