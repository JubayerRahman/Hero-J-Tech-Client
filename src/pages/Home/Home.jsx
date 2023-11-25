import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Reviews from './Reviews'
import AboutUs from './AboutUs'
import OurPartners from './OurPartners'

const Home = () => {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <OurPartners/>
      <Services/>
      <Reviews/>
    </div>
  )
}

export default Home
