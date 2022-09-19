import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cars from './pages/Cars';
import DetailCar from './pages/DetailCar';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<Cars />} />
        <Route path="/detailmobil/:id" element={<DetailCar />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;