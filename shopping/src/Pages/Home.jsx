import React from 'react'
import Layout from '../Components/Layout'
import HeroSection from '../Components/HeroSection'
import Filters from '../Components/Filters'
import ProductCard from '../Components/ProductCard'
import Track from '../Components/Track'
import Testimonial from '../Components/Testimonials'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../Redux/CartSlice'
function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)
  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <Layout>
       <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div>
      <HeroSection />
      <Filters />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default Home