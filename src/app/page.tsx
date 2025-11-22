import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import GithubGraph from '@/components/GithubGraph'
import SpotifyCard from '@/components/SpotifyCard'
import { AnimationWrapper } from '@/components/ui/animation-wrapper'

const Home = () => {
  return (
    <AnimationWrapper>
      <Intro />
      <SpotifyCard />
      <Skills />
      <GithubGraph />
      <Projects />
    </AnimationWrapper>
  )
}

export default Home
