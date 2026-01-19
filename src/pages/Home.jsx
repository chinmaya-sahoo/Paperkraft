import React from 'react'
import { HeroSection } from '../components/HeroSection'
import CategoryCardsGrid from '../components/CategoryCardsGrid'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoryCardsGrid />
      <FeaturedProducts />
      {/* <Footer /> */}
    </div>
  )
}

export default Home