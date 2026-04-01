import React from 'react'

import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import GithubGraph from '@/components/GithubGraph'
import SpotifyCard from '@/components/SpotifyCard'
import { AnimationWrapper } from '@/components/ui/animation-wrapper'
import Footer from '@/components/Footer'
import Quote from '@/components/ui/quote'

import { getRandomQuote } from '@/data/quotes'

const Home = () => {
  const quote = getRandomQuote()

  return (
    <AnimationWrapper>
      <Intro />
      <SpotifyCard />
      <Skills />
      <GithubGraph />
      <Projects />
      <Quote quote={quote} />
      <Footer />
    </AnimationWrapper>
  )
}

export default Home
