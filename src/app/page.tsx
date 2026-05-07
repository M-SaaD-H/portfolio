import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import GithubGraph from '@/components/GithubGraph'
import Footer from '@/components/Footer'
import Quote from '@/components/ui/quote'

import { getRandomQuote } from '@/data/quotes'

const Home = () => {
  const quote = getRandomQuote()

  return (
    <>
      <Intro />
      <GithubGraph />
      <Projects />
      <Quote quote={quote} />
      <Footer />
    </>
  )
}

export default Home
