import styles from './Skeleton.module.scss';
import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SkeletonProps {
    className?: ReactNode;
    width?: string | number;
    height?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    radius?: string;
};

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        width,
        height,
        maxWidth,
        maxHeight,
        radius,
    } = props;

    const classNames = clsx(
        styles.skeleton,
        {
            [styles[`skeleton--${radius}`]]: radius,
        },
        className,
    );

    const style = {
        width,
        height,
        maxWidth,
        maxHeight,
    };

    return (
        <div
            className={classNames}
            style={style}
        />
    );
};
