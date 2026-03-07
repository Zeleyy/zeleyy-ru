import styles from "./MainHeader.module.scss";
import { Flex } from "@/shared/ui";
import { useTheme } from "@/shared/lib/hooks";

export const MainHeader = () => {
    const { toggleTheme, isDark } = useTheme();

    return (
        <header className={styles.header}>
            <Flex size="page-md" className={styles.header__content} container fullWidth>
                <h2 className={styles.header__title}>Zeleyy</h2>
                <button
                    id="theme-toggle"
                    onClick={toggleTheme}
                    className={styles.header__toggle}
                >
                    {isDark
                        ? <i className="fas fa-sun fa-fw"></i>
                        : <i className="fas fa-moon fa-fw"></i>
                    }
                </button>
            </Flex>
        </header>
    );
};