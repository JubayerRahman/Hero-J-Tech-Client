import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Reviews from './Reviews'
import AboutUs from './AboutUs'
import OurPartners from './OurPartners'
import LatestNews from './LatestNews'
import Subscribeus from './Subscribeus'

const Home = () => {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <OurPartners/>
      <Services/>
      <Subscribeus/>
      <LatestNews/>
      <Reviews/>
    </div>
  )
}

export default Home
