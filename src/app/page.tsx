import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import { AnimationWrapper } from '@/components/ui/animation-wrapper'

const Home = () => {
  return (
    <AnimationWrapper>
      <Intro />
      <Skills />
      <Projects />
    </AnimationWrapper>
  )
}

export default Home
