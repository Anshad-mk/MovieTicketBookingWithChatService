import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SingleMovie from './pages/MoviePage/SingleMovie' 

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}>
            </Route>
            <Route path="/movie" element={<SingleMovie/>}>
            </Route>
                     
        </Routes>
    </Router>

     
    </div>
  );
}

export default App;
