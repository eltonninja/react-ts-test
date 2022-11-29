import { createContext } from 'react';

export const DEFAULT_THEME = 'light';
export type ThemeContextType = {
	theme: 'light' | 'dark';
	setTheme: (theme: ThemeContextType['theme']) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
