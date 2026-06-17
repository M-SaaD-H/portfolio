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

export default async function GithubGraph() {
  const data = await getGithubContributions()
  return <GithubGraphClient data={data} />
}