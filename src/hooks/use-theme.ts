import { useContext } from "react";
import { ThemeContext } from "context/theme";


export const useTheme = () => {
	const themeData = useContext(ThemeContext);

	if (!themeData) {
		throw new Error('This hook should be called inside the theme provider');
	}

	return themeData;
}