import { ModalContextProvider } from "../contexts/ModalContext";
import { ModalCustomizationContextProvider } from "../contexts/ModalCustomizationContext";
import { ModalLanguageContextProvider } from "../contexts/LanguageContext";
import { TranslationProvider } from "../contexts/TranslationContext";
import { ThemeProvider } from "../contexts/ThemeContext";
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
          href="https://cdn.getpopup.site/static/getpopup.png"
        />
        <title>getpopup</title>
      </Head>
      <ThemeProvider>
        <TranslationProvider>
          <ModalContextProvider>
            <ModalLanguageContextProvider>
              <ModalCustomizationContextProvider>
                <Component {...pageProps} />
              </ModalCustomizationContextProvider>
            </ModalLanguageContextProvider>
          </ModalContextProvider>
        </TranslationProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp
