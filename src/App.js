import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cars from './pages/Cars';
import DetailCar from './pages/DetailCar';
import Register from './pages/Register';
import EditCar from './pages/Admin/EditCar';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<Cars />} />
        <Route path="/detailmobil/:id" element={<DetailCar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/edit-car" element={<EditCar />} />
      </Routes>
    </>
  );
}

export default App;