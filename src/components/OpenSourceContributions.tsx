import { type Contribution } from '@/lib/github-prs'
import { OpenSourceContributionsClient } from './OpenSourceContributionsClient'

async function fetchContributions(): Promise<Contribution[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
      console.warn('[OpenSourceContributions] NEXT_PUBLIC_BASE_URL is not set');
      return [];
    }

    const res = await fetch(`${baseUrl}/api/pull-requests`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    return await res.json();
  } catch (err) {
    console.error('[OpenSourceContributions] Failed to load contributions:', err);
    return [];
  }
}

export default async function OpenSourceContributions() {
  const contributions = await fetchContributions();
  return <OpenSourceContributionsClient contributions={contributions} />
}
