import Header from '@/components/Header/Header';
import '@/styles/reset.scss';
import '@/styles/globals.scss';
import Footer from '@/components/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
