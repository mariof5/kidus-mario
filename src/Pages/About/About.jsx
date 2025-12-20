import React from 'react'
import LayOut from '../../Components/Layouts/LayOut'
import WhoImI from '../../Components/WhoImI/WhoImI'
import StickyScroll from '../../Components/StickyScroll/StickyScroll'
import Experience from '../../Components/Experience/Experience'

const About = () => {
  return (

    <LayOut> 
        
      <WhoImI/>
    <StickyScroll/>
    <Experience/>
    </LayOut>
  )
}

export default About