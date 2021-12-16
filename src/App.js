import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Shared/Navigation/Navigation';
import HomeCombinder from './Pages/HomeCombinder/HomeCombinder';
import AuthProvider from './context/AuthProvider';
import Registration from './Components/AdminAuthority/Registration/Registration';
import Login from './Components/AdminAuthority/Registration/Login/Login';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<HomeCombinder></HomeCombinder>}></Route>
            <Route path="/registration" element={<Registration></Registration>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
