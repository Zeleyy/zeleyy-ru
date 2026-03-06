import { type ReactNode } from "react";
import { MainHeader } from "@/widgets/header";

interface MainLayoutProps {
    children?: ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
    const { children } = props;

    return (
        <>
            <MainHeader/>
            <main>{children}</main>
        </>
    );
};