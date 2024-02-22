import Header from '@/components/Header/Header';
import '@/styles/reset.scss';
import '@/styles/globals.scss';
import Footer from '@/components/Footer/Footer';
import { SWRConfig } from 'swr';
import NextNProgress from 'nextjs-progressbar';
import { CartProvider } from 'react-use-cart';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig>
        <CartProvider>
          <Header />
          <NextNProgress color='black' />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </SWRConfig>
    </>
  );
}
