import { formatDate } from "helpers/date-format";
import { LogType } from "types";
import "./log-item.css";

export const LogItem: React.FC<LogType> = ({ date, content }) => (
  <p className="log-item">
    <span className="log-item__date">
      {formatDate(date)}
    </span>
    <span className="log-item__content">
      {content}
    </span>
  </p>
)