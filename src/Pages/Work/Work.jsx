import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import Projects from '../../Components/Projects/Projects'
import CallToAction from '../../Components/CallToAction/CallToAction'
import { Features } from '../../Components/test/Features/Features'
const Work = () => {
  return (
    <Layout>
    
     <Projects mode="sticky" />
     <Features/>
    <CallToAction />
    
        
    </Layout>
  )
}

export default Work