import Beard from '@/components/Beard/Beard';
import axios from 'axios';
import React from 'react';
import s from '@/components/Products/Products.module.scss';
import Product from '@/components/Product/Product';
import Filter from '@/components/Filter/Filter';
import Head from 'next/head';

const SingleBrand = ({ data }) => {
  return (
    <>
      <Head>
        <title>
          {data?.name} - Morgan&#039;s &#8212; Официальный сайт мужской
          косметики Morgan&#039;s в Узбекистане
        </title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        <link
          rel='icon'
          href='https://morgans.kz/wp-content/uploads/2022/06/cropped-morgans-ico-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          href='https://morgans.kz/wp-content/uploads/2022/06/cropped-morgans-ico-192x192.png'
          sizes='192x192'
        />
        <link
          rel='apple-touch-icon'
          href='https://morgans.kz/wp-content/uploads/2022/06/cropped-morgans-ico-180x180.png'
        />
        <meta
          name='msapplication-TileImage'
          content='https://morgans.kz/wp-content/uploads/2022/06/cropped-morgans-ico-270x270.png'
        />

        <meta property='og:locale' content='ru_RU' />
        <meta property='og:site_name' content='Morgan&#039;s' />
        <meta property='og:title' content={data?.name} />
        <meta property='og:url' content='https://morgans.uz' />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={data?.name} />
        <meta property='og:image' content={data?.image} />
        <meta property='og:image:url' content={data?.image} />
        <meta property='og:image:secure_url' content={data?.image} />
        {/* <meta property="article:publisher" content="https://www.facebook.com/morganskazakhstan" /> */}
        <meta name='twitter:title' content={data?.name} />
        <meta name='twitter:url' content='https://morgans.uz' />
        <meta name='twitter:description' content={data?.name} />
        <meta name='twitter:image' content={data?.image} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Beard title={data?.name} />
      <section className={s.products}>
        <div className='container'>
          <div className={s.wrap}>
            <Filter />

            <div className={s.grid}>
              {data?.products?.length ? (
                data?.products?.map((el, index) => (
                  <Product key={index} el={el} />
                ))
              ) : (
                <>
                  <h1>Ничего не найдено...</h1>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const singleBrandId = context.params.id;
  const { data } = await axios.get(
    `https://api.morgans-store.uz/brands/${singleBrandId}`
  );
  return { props: { data } };
}
export default SingleBrand;