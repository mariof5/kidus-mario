import React from 'react'
import LayOut from '../../Components/Layouts/LayOut'
import ScrollAni from '../../Components/ScrollAni/ScrollAni'
import Hero from '../../Components/Home/Hero/Hero'
import Plans from '../../Components/Plans/Plans'
import Projects from '../../Components/Projects/Projects'
import { Testimonials } from '../../Components/Testimonials/Testimonials'
import { sampleTestimonials } from '../../Components/Testimonials/data/TestData';
import WorkflowSection from '../../Components/Workflow/Workflow'
import Fqas from '../../Components/FQAs/FQAs'
import CallToAction from '../../Components/CallToAction/CallToAction'






function Landing() {
   const additionalTestimonials = [
    // ... real testimonials from your API
  ];
  
  const allTestimonials = [...sampleTestimonials, ...additionalTestimonials];
  return (
    <LayOut>
      <Hero/>
      <ScrollAni/>
      <Projects mode="grid" />
      <WorkflowSection/>  
      <Plans/>
      <Fqas/>   
      <CallToAction/> 
      {/* <Testimonials testimonials={allTestimonials} /> */}

    


    </LayOut>
  )
}

export default Landing