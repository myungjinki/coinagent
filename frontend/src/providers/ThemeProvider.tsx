"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		try {
			setMounted(true);

			const savedTheme = localStorage.getItem("theme") as Theme;

			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

			const initialTheme = savedTheme || systemTheme;
			setTheme(initialTheme);

			document.documentElement.classList.remove("light", "dark");
			document.documentElement.classList.add(initialTheme);
		} catch (error) {
			console.error("Theme initialization error:", error);
		}
	}, []);

	const toggleTheme = () => {
		try {
			const newTheme = theme === "light" ? "dark" : "light";
			setTheme(newTheme);

			document.documentElement.classList.remove("light", "dark");
			document.documentElement.classList.add(newTheme);

			localStorage.setItem("theme", newTheme);
		} catch (error) {
			console.error("Theme toggle error:", error);
		}
	};

	const value = {
		theme,
		toggleTheme,
	};

	return <ThemeContext.Provider value={value}>{mounted ? children : null}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	return context;
}
