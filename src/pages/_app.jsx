import Header from '@/components/Header/Header';
import '@/styles/reset.scss';
import '@/styles/globals.scss';
import Footer from '@/components/Footer/Footer';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
    </>
  );
}
