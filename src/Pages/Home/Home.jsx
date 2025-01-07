import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AboutSection from '../../Components/Home_Components/Hero/AboutSection'
import HeroBanner from '../../Components/Home_Components/Hero/HeroBanner'
import ProjectsSection from '../../Components/Home_Components/Hero/ProjectsSection'
import JourneySection from '../../Components/Home_Components/Hero/JourneySection'
import ContactSection from '../../Components/Home_Components/Hero/ContactSection'
import Footer from '../../Components/Home_Components/Hero/Footer'


const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <JourneySection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default Home
