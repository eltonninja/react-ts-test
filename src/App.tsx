import "./App.css";
import { MainLayout } from "components/layout";
import { EventLogger } from "features/event-logger";
import { ThemeProvider } from "contexts/theme";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <EventLogger />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
