import React from 'react'
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';


export default function Homepage() {
  return (
    <>
    <div>
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Footer />
    </div>
    </>
  )
}
