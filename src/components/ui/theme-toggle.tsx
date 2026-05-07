"use client"

import { IconMoonFilled, IconSunHighFilled } from "@tabler/icons-react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
	const { theme, setTheme } = useTheme();

	const toggleDark = () => setTheme(theme === 'light' ? 'dark' : 'light');

	return (
		<span onClick={toggleDark} className="cursor-pointer">
			<IconMoonFilled size={18} className="text-muted-foreground dark:opacity-0 opacity-100 absolute" />
			<IconSunHighFilled size={18} className="text-muted-foreground opacity-0 dark:opacity-100" />
		</span>
	)
}

DarkModeToggle.displayName = "DarkModeToggle"

export { DarkModeToggle }
