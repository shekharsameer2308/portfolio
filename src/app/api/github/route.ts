import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  pushed_at: string;
  archived: boolean;
  fork: boolean;
}

export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/shekharsameer2308/repos?per_page=100&sort=pushed",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "SameerShekhar-Portfolio-App",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }

    const repos: GitHubRepo[] = await res.json();
    
    // Filter out forks if desired, or sort by latest pushed
    const activeRepos = repos
      .filter((r) => !r.fork && r.name !== "shekharsameer2308")
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        homepage: r.homepage,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language,
        topics: r.topics || [],
        updated_at: r.updated_at,
        pushed_at: r.pushed_at,
      }));

    return NextResponse.json({
      success: true,
      username: "shekharsameer2308",
      total: activeRepos.length,
      repos: activeRepos,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch GitHub repositories",
      },
      { status: 500 }
    );
  }
}
