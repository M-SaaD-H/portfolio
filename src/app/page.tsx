import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import GithubGraph from '@/components/GithubGraph'
import SpotifyCard from '@/components/SpotifyCard'
import { AnimationWrapper } from '@/components/ui/animation-wrapper'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <AnimationWrapper>
      <Intro />
      <SpotifyCard />
      <Skills />
      <GithubGraph />
      <Projects />
      <Footer />
    </AnimationWrapper>
  )
}

export default Home
