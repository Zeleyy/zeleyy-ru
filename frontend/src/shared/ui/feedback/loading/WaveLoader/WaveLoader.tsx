import styles from "./WaveLoader.module.scss";

interface WaveLoaderProps {
    isLoading?: boolean;
};

export const WaveLoader = (props: WaveLoaderProps) => {
    const { isLoading } = props;

    return (
        isLoading
            ? <div className={styles.waveOverlay}></div>
            : null
    );
};