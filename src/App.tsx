import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Moodboard from './pages/Moodboard';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/moodboard' element={<Moodboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
