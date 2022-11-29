import './App.css';
import { MainLayout } from 'components/layout';
import { EventLogger } from 'features/event-logger';

function App() {
  return (
    <MainLayout>
      <EventLogger />
    </MainLayout>
  );
}

export default App;
