import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cars from './pages/Cars';
import DetailCar from './pages/DetailCar';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';

const App = () => {
  const [cmsIsLogin, setCmsIsLogin] = useState(null);
  const checkIfLogin = () => {
    const token = localStorage.getItem("admin-token");
    if (!token) {
      setCmsIsLogin(false);
    } else {
      setCmsIsLogin(true);
    }
  };
  useEffect(() => {
    checkIfLogin();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<Cars />} />
        <Route path="/detailmobil/:id" element={<DetailCar />} />
        <Route
          path="admin/login" 
          element={<AdminLogin setCmsIsLogin={cmsIsLogin} />}
        />
        <Route path="admin/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;