import { useContext } from "react";
import { LoggerContext } from "context/logger";


export const useTheme = () => {
	const loggerData = useContext(LoggerContext);

	if (!loggerData) {
		throw new Error('This hook should be called inside the logger provider');
	}

	return loggerData;
}
