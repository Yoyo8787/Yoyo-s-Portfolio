import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
interface ThemeContextValue {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [preference, setPreference] = useState<boolean | null>(() => {
        const storedTheme = localStorage.getItem("darkMode");
        return storedTheme === "true" ? true : storedTheme === "false" ? false : null;
    });
    const [systemDark, setSystemDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
    const isDarkMode = preference ?? systemDark;

    useEffect(() => {
        if (preference !== null) return;
        const query = window.matchMedia("(prefers-color-scheme: dark)");
        const update = () => setSystemDark(query.matches);
        update();
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, [preference]);

    // 讓手機瀏覽器網址列顏色跟著主題（白練／墨）。
    useEffect(() => {
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDarkMode ? "#1c1c1c" : "#fcfaf2");
    }, [isDarkMode]);

    const toggleTheme = () => {
        const nextTheme = !isDarkMode;
        localStorage.setItem("darkMode", String(nextTheme));
        setPreference(nextTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext)!;
};
