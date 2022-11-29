import { MainLayout } from 'components/layout';
import { EventLogger } from 'features/event-logger';
import { ThemeProvider } from 'contexts/theme';
import './App.css';

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
