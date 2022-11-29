import { createContext } from "react";
import { LogType } from "types/log";

export type LoggerContextType = {
    records: LogType[];
    appendLog: (content: string) => void;
}

export const LoggerContext = createContext<LoggerContextType | null>(null);
