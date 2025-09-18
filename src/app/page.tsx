import React from 'react'
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ShopByCategory from '../../components/ShopByCategory';
import Footer from '../../components/Footer';


const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShopByCategory/>
    <Footer/>
    </>
  )
}

export default page;