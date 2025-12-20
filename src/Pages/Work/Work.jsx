import React from 'react'
import Layout from '../../Components/Layouts/Layout.jsx'
import Projects from '../../Components/Projects/Projects.jsx'
import CallToAction from '../../Components/CallToAction/CallToAction.jsx'
import { Features } from '../../Components/test/Features/Features.jsx'
const Work = () => {
  return (
    <Layout>

      <Projects mode="sticky" />
      <Features />
      <CallToAction />


    </Layout>
  )
}

export default Work