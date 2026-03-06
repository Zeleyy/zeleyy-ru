import styles from "./GithubLink.module.scss";
import type { ReactNode } from "react";

interface GithubLinkProps {
    children?: ReactNode;
    href?: string;
}

export const GithubLink = (props: GithubLinkProps) => {
    const {
        children,
        href,
    } = props;

    return (
        <a href={href} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};