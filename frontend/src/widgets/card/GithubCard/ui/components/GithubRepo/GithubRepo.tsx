import styles from "./GithubRepo.module.scss";
import { Flex } from "@/shared/ui";
import { getLanguageColor } from "../../../lib/utils";
import { GithubLink } from "../GithubLink";
import type { GithubRepoModel } from "../../../model/types";


export const GithubRepo = (props: GithubRepoModel) => {
    const {
        name,
        html_url,
        description,
        language,
    } = props;

    return (
        <Flex direction="column" gap="xs" className={styles.githubRepo}>
            <GithubLink href={html_url}>{name}</GithubLink>
            <span className={styles.githubRepo__desc}>{description || ''}</span>
            <div className={styles.githubRepo__stats}>
                <span className={styles.githubRepo__lang}>
                    {language
                        ? <>
                            <span className={styles.githubRepo__color} style={{backgroundColor: getLanguageColor(language)}}></span>
                            {language}
                        </>
                        : null
                    }
                </span>
            </div>
        </Flex>
    );
};