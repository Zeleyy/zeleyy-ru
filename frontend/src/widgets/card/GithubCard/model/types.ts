export interface GithubProfileModel {
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
}

export interface GithubRepoModel {
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
}