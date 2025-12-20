import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import WhoImI from '../../Components/WhoImI/WhoImI'
import StickyScroll from '../../Components/StickyScroll/StickyScroll'
import Experience from '../../Components/Experience/Experience'

const About = () => {
  return (

    <Layout>

      <WhoImI />
      <StickyScroll />
      <Experience />
    </Layout>
  )
}

export default About