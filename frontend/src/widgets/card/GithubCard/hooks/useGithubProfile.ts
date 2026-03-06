import { useQuery } from "@tanstack/react-query";
import type { GithubProfileModel } from "../model/types";


export const useGithubProfile = () => {
    return useQuery<GithubProfileModel>({
        queryKey: ["github", "profile"],
        queryFn: async () => {
            let response = await fetch("/api/v1/profiles/github");
            return await response.json().catch(() => ({}));
        },
    });
};
