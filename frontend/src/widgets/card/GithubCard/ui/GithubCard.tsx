import styles from "./GithubCard.module.scss";
import { ProfileCard } from "../../ProfileCard";
import { Skeleton } from "@/shared/ui";
import { useQuery } from "@tanstack/react-query";
import { GithubLink, GithubRepo, type GithubRepoProps } from "./components";

interface GithubProfileResponse {
    login: string;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
}

export const GithubCard = () => {
    const { data: profile, isLoading } = useQuery<GithubProfileResponse>({
        queryKey: ["github", "profile"],
        queryFn: async () => {
            let response = await fetch("/api/v1/profiles/github");
            return await response.json().catch(() => ({}));
        },
    });

    const { data: repos, isLoading: isLoadingRepos } = useQuery<GithubRepoProps[]>({
        queryKey: ["github", "repos"],
        queryFn: async () => {
            let response = await fetch("/api/v1/profiles/github/repos");
            return await response.json().catch(() => ({}));
        },
    });

    return (
        <ProfileCard>
            <div className={styles.github} id="github-card">
                <div className={styles.github__header}>
                    {isLoading
                        ? <Skeleton className={styles.github__avatar}/>
                        : <img
                            src={profile?.avatar_url}
                            alt="GitHub Avatar"
                            className={styles.github__avatar}
                            loading="lazy"
                        />
                    }
                    <div className={styles.github__user}>
                        <h3 className={styles.github__login}>
                            {isLoading
                                ? <Skeleton maxWidth={120} height={32} radius="sm"/>
                                : profile?.login
                            }
                        </h3>
                        <GithubLink href={isLoading ? "#" : profile?.html_url}>
                            {isLoading
                                ? <Skeleton maxWidth={150} height={20} radius="sm"/>
                                : profile?.html_url.split("://")[1]
                            }
                        </GithubLink>
                    </div>
                </div>

                <div className={styles.github__stats}>
                    <div className={styles.github__stat}>
                        <span className={styles.github__statCount}>
                            {isLoading
                                ? <Skeleton width={22} height={24} radius="sm"/>
                                : profile?.public_repos
                            }
                        </span>
                        <span className={styles.github__statLabel}>репозиториев</span>
                    </div>
                    <div className={styles.github__stat}>
                        <span className={styles.github__statCount}>
                            {isLoading
                                ? <Skeleton width={22} height={24} radius="sm"/>
                                : profile?.followers
                            }
                        </span>
                        <span className={styles.github__statLabel}>подписчиков</span>
                    </div>
                    <div className={styles.github__stat}>
                        <span className={styles.github__statCount}>
                            {isLoading
                                ? <Skeleton width={22} height={24} radius="sm"/>
                                : profile?.following
                            }
                        </span>
                        <span className={styles.github__statLabel}>подписок</span>
                    </div>
                </div>

                <div className={styles.github__repos}>
                    <h4 className={styles.github__reposTitle}>Репозитории</h4>
                    <div id="github-repos-container" className={styles.github__reposList}>
                        {isLoadingRepos
                            ? <>
                                <Skeleton height={77} radius="sm"/>
                                <Skeleton height={77} radius="sm"/>
                            </>
                            : repos?.map(e => (
                                <GithubRepo
                                    name={e.name}
                                    html_url={e.html_url}
                                    description={e.description}
                                    language={e.language}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </ProfileCard>
    );
};