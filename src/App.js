import { Route, Routes } from 'react-router-dom';
import './App.css';

import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
    
  <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="login" element={<Auth/>} />
    <Route  path="/register" element={<Auth register />} />
    <Route  path="/projects" element={<Projects/>} />
    <Route  path="/dashboard" element={<Dashboard/>} />
  </Routes>
  <Footer/>


    </div>
  );
}

export default App;
