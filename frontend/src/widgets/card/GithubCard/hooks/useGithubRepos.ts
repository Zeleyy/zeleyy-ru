import { useQuery } from "@tanstack/react-query";
import type { GithubRepoModel } from "../model/types";


export const useGithubRepos = () => {
    return useQuery<GithubRepoModel[]>({
        queryKey: ["github", "repos"],
        queryFn: async () => {
            let response = await fetch("/api/v1/profiles/github/repos");
            return await response.json().catch(() => ({}));
        },
    });
};
