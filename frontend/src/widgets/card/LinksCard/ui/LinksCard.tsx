import styles from "./LinksCard.module.scss";
import { Flex } from "@/shared/ui";

export const LinksCard = () => {
    return (
        <Flex direction="column" gap="md" size="card-sm" className={styles.linksCard}>
            <h3 className={styles.linksCard__title}>Ссылки</h3>
            <Flex direction="column" align="center" gap="sm">
                <a className={styles.linksCard__item} href="https://tracker.gg/valorant/profile/riot/zeleyy%23PISKA/overview?platform=pc&amp;playlist=competitive" target="_blank" rel="noopener noreferrer">Valorant</a>
                <a className={styles.linksCard__item} href="https://osu.ppy.sh/users/23427296" target="_blank" rel="noopener noreferrer">osu!</a>
            </Flex>
        </Flex>
    );
};