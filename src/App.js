import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import DetailCar from "./pages/DetailCar";
import Register from "./pages/Register";
import EditCar from "./pages/Admin/EditCar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import { useState, useEffect } from "react";
import ProtectedRoute from "./HOC/ProtectedRoute";
import Formnewcar from "./pages/Formnewcar";
import Payment from "./pages/Payment";
import PaymentUpload from "./pages/PaymentUpload";
import PaymentTiket from "./pages/PaymentTiket";
import AdminCarDashboard from "./pages/AdminCarDashboard/AdminCarDashboard";
import { HelmetProvider } from 'react-helmet-async';

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
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carimobil" element={<Cars />} />
          <Route path="/detailmobil/:id" element={<DetailCar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/edit-car/:id" element={<EditCar />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="admin/login"
            element={<AdminLogin setCmsIsLogin={setCmsIsLogin} />}
          />
          <Route
            path="admin/dashboard"
            element={
              <ProtectedRoute cmsIsLogin={cmsIsLogin}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/cars"
            element={
              <ProtectedRoute cmsIsLogin={cmsIsLogin}>
                <AdminCarDashboard />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="admin/edit-car"
            element={
              <ProtectedRoute cmsIsLogin={cmsIsLogin}>
                <EditCar />
              </ProtectedRoute>
            }
          >
          </Route> */}
          <Route path="/admin/form-add-new-car" element={<Formnewcar />} />
          <Route path="/pembayaran" element={<Payment />} />
          <Route path="/konfirmasi-pembayaran/:id" element={<PaymentUpload />} />
          <Route path="/tiket/:id" element={<PaymentTiket />} />
        </Routes>
      </HelmetProvider>
    </>
  );
};

export default App;
