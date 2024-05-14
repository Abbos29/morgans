import Banner from '@/components/Banner/Banner';
import Benefits from '@/components/Benefits/Benefits';
import Hero from '@/components/Hero/Hero';
import Inner from '@/components/Inner/Inner';
import Wrap from '@/components/Wrap/Wrap';
import WrapSec from '@/components/WrapSec/WrapSec';
import axios from 'axios';
import Head from 'next/head';

export async function getServerSideProps() {
  const { data } = await axios.get(`https://api.morgans-store.uz/products/`);
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>
          Morgan&#039;s &#8212; Официальный сайт мужской косметики Morgan&#039;s
          в Узбекистане
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
        <meta property='og:title' content='Главная' />
        <meta property='og:url' content='https://morgans.uz' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='Официальный магазин
			
			Мы являемся эксклюзивными дистрибьюторами в Казахстане.
			
					Безопасный шопинг
			
			Оплачивайте заказы онлайн — это быстро и безопасно.
			
					Доставка до двери
			
			Мы доставляем во все города Казахстана. Также возможен самовывоз.'
        />
        <meta
          property='og:image'
          content='https://morgans.kz/wp-content/uploads/2024/01/default_og_image.jpg'
        />
        <meta
          property='og:image:url'
          content='https://morgans.kz/wp-content/uploads/2024/01/default_og_image.jpg'
        />
        <meta
          property='og:image:secure_url'
          content='https://morgans.kz/wp-content/uploads/2024/01/default_og_image.jpg'
        />
        {/* <meta property="article:publisher" content="https://www.facebook.com/morganskazakhstan" /> */}
        <meta name='twitter:title' content='Главная' />
        <meta name='twitter:url' content='https://morgans.uz' />
        <meta
          name='twitter:description'
          content='Официальный магазин
			
			Мы являемся эксклюзивными дистрибьюторами в Узбекистане.
			
					Безопасный шопинг
			
			Оплачивайте заказы онлайн — это быстро и безопасно.
			
					Доставка до двери
			
			Мы доставляем во все города Узбекистана. Также возможен самовывоз.'
        />
        <meta
          name='twitter:image'
          content='https://morgans.kz/wp-content/uploads/2024/01/default_og_image.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <Hero />
      <Benefits />
      <Wrap />
      <WrapSec />
      <Banner />
      {/* {data?.peculiarity !== null ? (
        <Inner titleH={"Хит товары от Morgan's"} data={data} />
      ) : null} */}
         {!data?.peculiarity && (
        <Inner titleH={"Хит товары от Morgan's"} data={data} />
      )}
    </>
  );
}
