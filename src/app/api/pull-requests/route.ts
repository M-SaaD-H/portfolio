import { NextResponse } from 'next/server'
import { getContributions } from '@/lib/github-prs'

export const revalidate = 86400 // Revalidate once per day

export async function GET() {
  try {
    const contributions = await getContributions();
    return NextResponse.json(contributions, { status: 200 });
  } catch (err) {
    console.error('[api/pull-requests] Failed to fetch contributions:', err);
    return NextResponse.json([], { status: 200 });
  }
}
