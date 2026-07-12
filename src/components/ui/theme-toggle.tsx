"use client"

import { IconMoonFilled, IconSunHighFilled } from "@tabler/icons-react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
	const { theme, setTheme } = useTheme();

	const toggleDark = () => setTheme(theme === 'light' ? 'dark' : 'light');

	return (
		<button 
			type="button"
			onClick={toggleDark} 
			className="cursor-pointer"
			aria-label="Toggle theme"
		>
			<IconMoonFilled size={18} className="text-muted-foreground dark:opacity-0 opacity-100 absolute" />
			<IconSunHighFilled size={18} className="text-muted-foreground opacity-0 dark:opacity-100" />
		</button>
	)
}

DarkModeToggle.displayName = "DarkModeToggle"

export { DarkModeToggle }
