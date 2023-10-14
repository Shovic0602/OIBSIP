
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Homepage from './Pages/Homepage';
import SecurePage from './Pages/SecurePage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/secure" component={SecurePage} exact />
    </div>
  );
}

export default App;
