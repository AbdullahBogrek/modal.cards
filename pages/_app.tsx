import { ModalContextProvider } from "../contexts/ModalContext";
import { ModalCustomizationContextProvider } from "../contexts/ModalCustomizationContext";
import { ModalLanguageContextProvider } from "../contexts/LanguageContext";
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://pub-64bc1fc0a86d4715bc552f7b0ae5d6f8.r2.dev/static/getpopup.png"
        />
        <title>getpopup</title>
      </Head>
      <ModalContextProvider>
        <ModalLanguageContextProvider>
          <ModalCustomizationContextProvider>
            <Component {...pageProps} />
          </ModalCustomizationContextProvider>
        </ModalLanguageContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default MyApp
