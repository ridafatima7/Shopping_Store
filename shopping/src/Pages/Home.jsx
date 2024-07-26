import React from 'react'
import Layout from '../Components/Layout'
import HeroSection from '../Components/HeroSection'
import Filters from '../Components/Filters'
import ProductCard from '../Components/ProductCard'
import Track from '../Components/Track'
import Testimonial from '../Components/Testimonials'

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filters />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home