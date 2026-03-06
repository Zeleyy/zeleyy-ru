import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/shared/lib/context";

interface ThemeProviderProps {
    children: ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props;
    const [theme, setThemeState] = useState(() => {
        if (typeof window === 'undefined') return 'dark';

        const saved = localStorage.getItem('theme');
        return saved ? saved : 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }

        localStorage.setItem('theme', theme);
    }, [theme])

    const setTheme = useCallback((newTheme: string) => {
        setThemeState(newTheme);
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
    }, []);

    const contextValue = useMemo(() => ({
        theme,
        isDark: theme === 'dark',
        setTheme,
        toggleTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
