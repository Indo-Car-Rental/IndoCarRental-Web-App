import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cars from './pages/Cars';
import DetailCar from './pages/DetailCar';
import Register from './pages/Register';
import EditCar from './pages/Admin/EditCar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin';
import { useState, useEffect } from 'react';
import ProtectedRoute from './HOC/ProtectedRoute';

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
        <Route path="/register" element={<Register />} />
        <Route path="/admin/edit-car" element={<EditCar />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route
          path="admin/login" 
          element={<AdminLogin setCmsIsLogin={cmsIsLogin} />}
        />
        <Route 
          path="admin/dashboard"
          element={
            <ProtectedRoute cmsIsLogin={cmsIsLogin} >
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;