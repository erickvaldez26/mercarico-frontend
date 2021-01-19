import { BrowserRouter as Router } from 'react-router-dom';
import Route from './services/Router';

import LoginProvider from './context/LoginContext';

import './App.css';

function App() {
  return (
    <LoginProvider>
      <Router>
        <Route/>
      </Router>
    </LoginProvider>
  )
}
export default App;