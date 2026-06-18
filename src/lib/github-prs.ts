export type GitHubPR = {
  number: number,
  title: string,
  url: string,
  state: 'OPEN' | 'MERGED',
  isDraft: boolean,
  createdAt: string,
  repository: {
    nameWithOwner: string,
    name: string,
    url: string,
  }
}

export type Contribution = GitHubPR & {
  status: 'MERGED' | 'OPEN' | 'DRAFT'
}

// GitHub GraphQL query
const PR_SEARCH_QUERY = `
  query($cursor: String) {
    search(
      query: "author:M-SaaD-H is:pr -user:M-SaaD-H"
      type: ISSUE
      first: 100
      after: $cursor
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on PullRequest {
          number
          title
          url
          state
          isDraft
          createdAt
          mergedAt
          closedAt
          repository {
            nameWithOwner
            name
            url
          }
        }
      }
    }
  }
`;

// Fetcher
async function fetchAllPRs(): Promise<GitHubPR[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('[github-prs] GITHUB_TOKEN is not set — returning empty list');
    return [];
  }

  const allPRs: GitHubPR[] = [];
  let cursor: string | null = null;

  // Paginate through all results (GitHub returns max 100 per page)
  do {
    const response: Response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: PR_SEARCH_QUERY,
        variables: { cursor },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error('[github-prs] GitHub API returned', response.status);
      break;
    }

    const json = await response.json();

    if (json.errors) {
      console.error('[github-prs] GraphQL errors:', json.errors)
      break
    }

    const search = json?.data?.search;
    if (!search) break;

    const prs = (search.nodes ?? []).filter(
      (node: any) => 
        node && 
        typeof node === 'object' && 
        'number' in node && 
        node.state !== 'CLOSED' &&
        node.repository?.nameWithOwner !== 'Aryan-81/anhad' // remove clg repo
    ) as GitHubPR[];

    allPRs.push(...prs);

    cursor = search.pageInfo.hasNextPage ? search.pageInfo.endCursor : null;
  } while (cursor);

  return allPRs;
}

function deriveStatus(pr: GitHubPR): Contribution['status'] {
  if (pr.isDraft) return 'DRAFT';
  if (pr.state === 'MERGED') return 'MERGED';
  return 'OPEN';
}

function processPR(pr: GitHubPR): Contribution {
  return {
    ...pr,
    status: deriveStatus(pr),
  };
}

function sortContributions(a: Contribution, b: Contribution): number {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
}

// Public API
export async function getContributions(): Promise<Contribution[]> {
  try {
    const prs = await fetchAllPRs();
    const processed = prs.map(processPR);
    return processed.sort(sortContributions);
  } catch (err) {
    console.error('[github-prs] Failed to fetch contributions:', err);
    return [];
  }
}
