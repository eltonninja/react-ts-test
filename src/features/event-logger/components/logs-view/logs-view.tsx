import { useLogger } from "../../hooks/use-logger";
import { LogItem } from "./log-item";

export const LogsView = () => {
  const { records } = useLogger();

  return (
    <div className="logs-view">
      {records.map((record, idx) => (
        <LogItem {...record} key={idx} />
      ))}
    </div>
  )
}