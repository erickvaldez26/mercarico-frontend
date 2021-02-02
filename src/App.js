import { BrowserRouter as Router } from 'react-router-dom';
import Route from './services/Router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginProvider from './context/LoginContext';
import MarketProvider from './context/Market';

import './App.css';

function App() {
  return (
    <MarketProvider>
      <LoginProvider>
        <Router>
          <Route/>
          <ToastContainer />
        </Router>
      </LoginProvider>
    </MarketProvider>
  )
}
export default App;