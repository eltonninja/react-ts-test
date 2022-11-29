import { Container } from "components/base";
import { LoggerProvider } from "./contexts/logger";
import { ActionPanel, LogsView } from "./components";
import "./event-logger.css";

export const EventLogger = () => (
	<LoggerProvider>
		<Container>
			<div className="event-logger">
				<div className="left-panel">
					<ActionPanel />
				</div>
				<div className="right-panel">
					<LogsView />
				</div>
			</div>
		</Container>
	</LoggerProvider>
);
