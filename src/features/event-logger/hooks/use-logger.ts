import { useContext } from 'react';
import { LoggerContext } from '../contexts/logger';


export const useLogger = () => {
	const loggerData = useContext(LoggerContext);

	if (!loggerData) {
		throw new Error('This hook should be called inside the logger provider');
	}

	return loggerData;
}
