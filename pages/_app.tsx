import { Modal1ContextProvider } from "../contexts/Modal1Context";
import '../styles/globals.css'
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
      <Modal1ContextProvider>
        <Component {...pageProps} />
      </Modal1ContextProvider>
    </>
  );
}

export default MyApp
