

import { BrowserRouter } from 'react-router-dom';
import MainApp from './pages';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
