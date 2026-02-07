import type { NextPage } from 'next'
import Head from 'next/head'

import Header from "../components/Header"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Features from "../components/Features"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="bg-surface text-text min-h-screen">
      <Head>
        <title>Free Popup Generator</title>
      </Head>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
