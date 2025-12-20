import React from 'react'
import LayOut from '../../Components/Layouts/LayOut'
import Projects from '../../Components/Projects/Projects'
import CallToAction from '../../Components/CallToAction/CallToAction'
import { Features } from '../../Components/test/Features/Features'
const Work = () => {
  return (
    <LayOut>
    
     <Projects mode="sticky" />
     <Features/>
    <CallToAction />
    
        
    </LayOut>
  )
}

export default Work