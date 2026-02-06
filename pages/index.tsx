import type { NextPage } from 'next'
import Head from 'next/head'

import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Generator from "../components/Generator"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Free Popup Generator</title>
      </Head>
      <Header />
      <Hero />
      <Generator />
      <Features />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
