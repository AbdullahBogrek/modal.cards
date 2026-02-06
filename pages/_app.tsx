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
          title="getpopup"
        ></meta>
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
