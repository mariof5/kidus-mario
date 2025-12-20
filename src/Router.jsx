import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import SmoothScroll from './Components/SmoothScroll/SmoothScroll'
import About from './Pages/About/About'
import Work from './Pages/Work/Work'
import Preview from './Components/Projects/Preview/Preview'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Contact from './Pages/Contact/Contact'
function Routing() {
    return (
        <SmoothScroll> 
             <ScrollToTop />
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/work" element={<Work/>}/>
                <Route path="/work/preview/:id" element={<Preview/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </SmoothScroll>
    )
}

export default Routing