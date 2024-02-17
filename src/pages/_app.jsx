import Header from "@/components/Header/Header";
import "@/styles/reset.scss";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />

    </>
  )
}
