import React from 'react'
import Layout from '../../Components/Layouts/Layout.jsx'
import ScrollAni from '../../Components/ScrollAni/ScrollAni.jsx'
import Hero from '../../Components/Home/Hero/Hero.jsx'
import Plans from '../../Components/Plans/Plans.jsx'
import Projects from '../../Components/Projects/Projects.jsx'
import { Testimonials } from '../../Components/Testimonials/Testimonials.jsx'
import { sampleTestimonials } from '../../Components/Testimonials/data/TestData.js';
import WorkflowSection from '../../Components/Workflow/Workflow.jsx'
import Fqas from '../../Components/FQAs/FQAs.jsx'
import CallToAction from '../../Components/CallToAction/CallToAction.jsx'






function Landing() {
  const additionalTestimonials = [
    // ... real testimonials from your API
  ];

  const allTestimonials = [...sampleTestimonials, ...additionalTestimonials];
  return (
    <Layout>
      <Hero />
      <ScrollAni />
      <Projects mode="grid" />
      <WorkflowSection />
      <Plans />
      <Fqas />
      <CallToAction />
      {/* <Testimonials testimonials={allTestimonials} /> */}




    </Layout>
  )
}

export default Landing