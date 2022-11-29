import { useState, PropsWithChildren, useCallback } from "react";
import { LogType } from "types/log";
import { LoggerContext } from "./logger-context";

export const LoggerProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [records, setRecords] = useState<LogType[]>([]);

	const appendLog = useCallback((log: string) => {
		const date = new Date();
		setRecords(records => [...records, { date, content: log }]);
	}, []);

	return (
		<LoggerContext.Provider value={{ records, appendLog }}>
			{children}
		</LoggerContext.Provider>
	)
};
