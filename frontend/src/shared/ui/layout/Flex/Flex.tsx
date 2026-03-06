import styles from "./Flex.module.scss";
import clsx from "clsx";
import type { JSX, ReactNode } from "react";

type FlexDirection = 'row' | 'column';
type FlexJustify = 'start' | 'center' | 'space-between' | 'flex-end';
type FlexAlign = 'stretch' | 'center' | 'flex-start';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type FlexGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type FlexSize = 'card-sm' | 'card-md' | 'card-lg' | 'form-sm' | 'form-md' | 'form-lg' | 'page-sm' | 'page-md' | 'page-lg' | 'full';

interface FlexProps {
    children: ReactNode;
    direction?: FlexDirection;
    align?: FlexAlign;
    justify?: FlexJustify;
    wrap?: FlexWrap;
    gap?: FlexGap;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    size?: FlexSize;
    container?: boolean;
    mt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    mb?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Flex = (props: FlexProps) => {
    const {
        children,
        direction,
        align,
        justify,
        wrap,
        gap,
        className,
        as: Component = 'div',
        size,
        container,
        mt,
        mb,
    } = props;

    const classNames = clsx(
        styles.flex,

        {
            [styles[`flex--direction-${direction}`]]: direction,
            [styles[`flex--justify-${justify}`]]: justify,
            [styles[`flex--align-${align}`]]: align,
            [styles[`flex--wrap-${wrap}`]]: wrap,
            [styles[`flex--gap-${gap}`]]: gap,
            [styles[`flex--${size}`]]: size,
            [styles['flex--container']]: container,
            [styles[`flex--mt-${mt}`]]: mt,
            [styles[`flex--mb-${mb}`]]: mb,
        },

        className,
    );

    return (
        <Component
            className={classNames}
        >
            {children}
        </Component>
    );
};