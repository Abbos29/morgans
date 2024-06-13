import React, { useState } from 'react';
import s from './page.module.scss';

import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';
import Head from 'next/head';
import axios from 'axios';

const SingleProduct = ({ data }) => {
  const { getItem, addItem, removeItem } = useCart();
  const isClient = useIsClient();

  const [quantity, setQuantity] = useState(1);

  const maxQuantity = data?.quantity || 0;
  const disableIncrease = quantity >= maxQuantity;

  return (
    <>
      <Head>
        <title>
          {data?.name} - Trueman &#8212; Официальный сайт мужской косметики
          Trueman в Узбекистане
        </title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <link rel='icon' href='/Logo/PNG/Trueman_logo-09.png' sizes='32x32' />
        <link rel='icon' href='/Logo/PNG/Trueman_logo-09.png' sizes='192x192' />
        <link rel='apple-touch-icon' href='/Logo/PNG/Trueman_logo-09.png' />
        <meta
          name='msapplication-TileImage'
          href='/Logo/PNG/Trueman_logo-09.png'
        />

        <meta property='og:locale' content='ru_RU' />
        <meta property='og:site_name' content='Trueman' />
        <meta property='og:title' content={data?.name} />
        <meta property='og:url' content='https://trueman.uz' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={data?.desc} />
        <meta property='og:image' content={data?.image} />
        <meta property='og:image:url' content={data?.image} />
        <meta property='og:image:secure_url' content={data?.image} />
        {/* <meta property="article:publisher" content="https://www.facebook.com/morganskazakhstan" /> */}
        <meta name='twitter:title' content={data?.name} />
        <meta name='twitter:url' content='https://trueman.uz' />
        <meta name='twitter:description' content={data?.name} />
        <meta name='twitter:image' content={data?.image} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <div>
        <section className={s.page}>
          <div className='container'>
            <div className={s.wrapper}>
              <img
                className={s.img}
                src={data?.image}
                alt={data?.description}
              />

              <div className={s.box}>
                <img width={'70px'} src={data?.brand?.image} alt='' />
                <h6>В наличии: {data?.quantity}</h6>
                <h1>{data?.name}</h1>
                <h2>{data?.description}</h2>
                <p>
                  {data?.price} <span>$</span>
                </p>
                <b>{data?.wvq}</b>

                {data?.quantity >= 1 ? (
                  isClient && !getItem(data?.id) ? (
                    <>
                      <div className={s.quantity}>
                        <button
                          onClick={() => setQuantity(quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          disabled={disableIncrease}
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className='btn'
                        onClick={() => addItem(data, quantity)}
                      >
                        В корзину
                      </button>
                    </>
                  ) : (
                    <button
                      className='btn'
                      onClick={() => removeItem(data?.id)}
                    >
                      Отменить
                    </button>
                  )
                ) : (
                  <span className={s.single_nope}>Нет в наличии</span>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const singleId = context.params.id;
  const { data } = await axios.get(
    `https://api.trueman.uz/products/${singleId}`
  );
  return { props: { data } };
}

export default SingleProduct;
