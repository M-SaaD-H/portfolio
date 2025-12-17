import { Suspense } from 'react'
import { IconLoader2 } from '@tabler/icons-react'
import { GithubGraphClient } from './GithubGraphClient'

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const getLevel = (count: number): number => {
  if (count === 0) return 0;
  if (count < 5) return 1;
  if (count < 10) return 2;
  if (count < 20) return 3;
  return 4;
};

async function getGithubContributions() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contributions`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!res.ok) return null

    const json: { date: string; count: number }[] = await res.json()

    const formatted: ContributionDay[] = json.map((day) => ({
      date: day.date,
      count: day.count,
      level: getLevel(day.count),
    }))

    return formatted
  } catch (err) {
    console.error('Failed to load contributions:', err)
    return null
  }
}

async function GithubGraphContent() {
  const data = await getGithubContributions()

  return <GithubGraphClient data={data} />
}

// Not using fallback, because it is staggering the animation
// will to solve it later

// function GithubGraphSkeleton() {
//   return (
//     <div className='flex flex-col font-sans'>
//       <div className='w-full min-h-20 flex justify-center items-center'>
//         <IconLoader2 className='animate-spin' />
//       </div>
//     </div>
//   )
// }

export default function GithubGraph() {
  return (
    <Suspense fallback={<div />}>
      <GithubGraphContent />
    </Suspense>
  )
}