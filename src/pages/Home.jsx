import React from 'react'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'
import Contact from './Contact'
import Footer from '../components/Footer'
import FeatureProduct from '../components/FeatureProduct'

const Home = () => {
  const data = {
    name:"Bhavesh Store"
  }
  return <>
  <HeroSection myData={data} />
  <FeatureProduct />
  <Services />
  <Trusted />
  <Contact />
  <Footer />
  </> 
  
}


export default Home
