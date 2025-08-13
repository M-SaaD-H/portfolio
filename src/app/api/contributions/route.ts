import { NextResponse } from "next/server";

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type Week = {
  contributionDays: ContributionDay[];
};

export async function GET() {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  const query = `
    {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();

    const weeks: Week[] = json.data.user.contributionsCollection.contributionCalendar.weeks;
    const days: ContributionDay[] = weeks.flatMap((week: Week) => week.contributionDays);

    const formatted = days.map((day: ContributionDay) => ({
      date: day.date,
      count: day.contributionCount,
    }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (err) {
    console.error('GitHub API error:', err);
    return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 500 });
  }
}
