import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Shared/Navigation/Navigation';
import HomeCombinder from './Components/Home/HomeCombinder/HomeCombinder';

function App() {
  return (
    <div>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<HomeCombinder></HomeCombinder>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
