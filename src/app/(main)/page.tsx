import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import OpenSourceContributions from '@/components/OpenSourceContributions'
import GithubGraph from '@/components/GithubGraph'
import HomePageBlogs from '@/components/blog/home-page-blogs'
import Footer from '@/components/Footer'
import Quote from '@/components/ui/quote'

import { getRandomQuote } from '@/data/quotes'

const Home = () => {
  const quote = getRandomQuote()

  return (
    <>
      <Intro />
      <Projects />
      <GithubGraph />
      <OpenSourceContributions />
      <HomePageBlogs />
      <Quote quote={quote} />
      <Footer />
    </>
  )
}

export default Home
