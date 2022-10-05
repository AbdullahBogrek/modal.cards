import { ModalContextProvider } from "../contexts/ModalContext";
import { Modal1ContextProvider } from "../contexts/Modal1Context";
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
          title="modal.cards"
        ></meta>
      </Head>
      <ModalContextProvider>
        <ModalLanguageContextProvider>
          <Modal1ContextProvider>
            <Component {...pageProps} />
          </Modal1ContextProvider>
        </ModalLanguageContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default MyApp
