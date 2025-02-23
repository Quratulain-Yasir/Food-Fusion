import React from 'react'
 
import CelebratingSuccess from '../../ComponentsHub/AboutComponents/CelebratingSuccess'
import Footer from '../../ComponentsHub/Footer'
import OurStory from '../../ComponentsHub/AboutComponents/OurStory'
import CoreValues from '../../ComponentsHub/AboutComponents/CoreValues'
import ChooseFoodFusion from '../../ComponentsHub/AboutComponents/ChooseFoodFusion'
import AboutBanner from '../../ComponentsHub/AboutComponents/AboutBanner'
import Navbar from '../../ComponentsHub/Navbar/Navbar'
 

const AboutUs = () => {
  return (
<>
<Navbar /> 
<AboutBanner />
<OurStory />
<CoreValues />
 <CelebratingSuccess />
 <ChooseFoodFusion />
 <Footer />
</>
  )
}

export default AboutUs
