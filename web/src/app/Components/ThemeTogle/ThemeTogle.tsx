"use client";

import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "mural-theme";

export default function ThemeTogle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
        const shouldUseDarkTheme = savedTheme
            ? savedTheme === "dark"
            : window.matchMedia("(prefers-color-scheme: dark)").matches;

        document.documentElement.classList.toggle("dark", shouldUseDarkTheme);
        setIsDark(shouldUseDarkTheme);
    }, []);

    function toggleTheme() {
        const nextIsDark = !isDark;
        document.documentElement.classList.toggle("dark", nextIsDark);
        window.localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
        setIsDark(nextIsDark);
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
            title={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:text-yellow-300 dark:hover:text-yellow-200"
        >
            {isDark ? (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ) : (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </button>
    );
}
