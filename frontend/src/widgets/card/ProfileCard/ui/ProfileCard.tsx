import styles from "./ProfileCard.module.scss";
import { type ReactNode } from "react";
import { Flex } from "@/shared/ui";

interface ProfileCardProps {
    children?: ReactNode;
};

export const ProfileCard = (props: ProfileCardProps) => {
    const { children } = props;

    return (
        <Flex size="form-sm" className={styles.profileCard} direction="column" fullWidth>
            {children}
        </Flex>
    );
};