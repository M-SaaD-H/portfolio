import React from 'react'

import CTA from '@/components/CTA'
import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

const Home = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <CTA />
    </div>
  )
}

export default Home
