import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cars from './pages/Cars';
import DetailCar from './pages/DetailCar';
import AdminLogin from './pages/AdminLogin';
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
      </Routes>
    </>
  );
}

export default App;