import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Shared/Navigation/Navigation';
import HomeCombinder from './Pages/HomeCombinder/HomeCombinder';
import AuthProvider from './context/AuthProvider';
import Registration from './Components/AdminAuthority/Registration/Registration';
import BabySitters from './Pages/BabySitters/BabySitters';
import AdminBoard from './Pages/Dashboard/AdminBoard';
import AllParents from './Components/DashboardComponents/AllParents/AllParents';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AllSitters from './Components/DashboardComponents/AllSitters/AllSitters';
import Login from './Components/AdminAuthority/Login/Login';
import RegistrationSitter from './Components/AdminAuthority/RegistrationSitter/RegistrationSitter';
import AllServicesDboard from './Components/DashboardComponents/AllServicesDboard/AllServicesDboard';
import AddService from './Components/DashboardComponents/AddService/AddService';
import BookingSitter from './Pages/BookingSitter/BookingSitter';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route path="/dashboard" element={<PrivateRoute><AdminBoard></AdminBoard></PrivateRoute>}>
              <Route path="all-parents" element={<PrivateRoute><AllParents></AllParents></PrivateRoute>}></Route>
              <Route path="all-sitters" element={<PrivateRoute><AllSitters></AllSitters></PrivateRoute>}></Route>
              <Route path="all-services" element={<PrivateRoute><AllServicesDboard></AllServicesDboard></PrivateRoute>}></Route>
              <Route path="add-service" element={<PrivateRoute><AddService></AddService></PrivateRoute>}></Route>
            </Route>
            <Route path="/booking" element={<BookingSitter></BookingSitter>}></Route>
            <Route path="/baby-sitters" element={<BabySitters></BabySitters>}></Route>
            <Route path="/parent-registration" element={<Registration></Registration>}></Route>
            <Route path="/sitter-registration" element={<RegistrationSitter></RegistrationSitter>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/" element={<HomeCombinder></HomeCombinder>}></Route>
            <Route path="/home" element={<HomeCombinder></HomeCombinder>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
