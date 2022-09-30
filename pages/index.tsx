import type { NextPage } from 'next'

import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Generator from "../components/Generator"

const Home: NextPage = () => {
  return (
    <div>
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
