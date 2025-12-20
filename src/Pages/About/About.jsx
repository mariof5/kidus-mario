import React from 'react'
import Layout from '../../Components/Layouts/Layout.jsx'
import WhoImI from '../../Components/WhoImI/WhoImI.jsx'
import StickyScroll from '../../Components/StickyScroll/StickyScroll.jsx'
import Experience from '../../Components/Experience/Experience.jsx'

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