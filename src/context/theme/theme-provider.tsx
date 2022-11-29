import { useState, PropsWithChildren } from "react";
import { DEFAULT_THEME, ThemeContextType, ThemeContext } from "./theme-context";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeContextType["theme"]>(DEFAULT_THEME);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
};
