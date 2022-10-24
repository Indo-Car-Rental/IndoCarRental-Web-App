import { memo } from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from "../../const/staticData";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";
import CarList from "../../components/CarList";
import NotFound from "../../components/NotFound";
import BackgroundOverlay from "../../components/BackgroundOverlay";
import AdminCarList from "../../components/AdminCarList/AdminCarList";

const Cars = () => {
  const bannerContent = false;
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("small");
  const [status, setStatus] = useState(false);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [button, setButton] = useState(false);
  const [fdata, setFdata] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [bgOverlay, setBgOverlay] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car',
      params: {
        name : name,
        category : category,
        isRented : status,
        minPrice : minPrice,
        maxPrice : maxPrice
      }
    })
    .then(function (res) {
      setData(res.data.cars);
    })
    .catch(function (error) {
      console.log(error)
    });
  }, [name, category, status, minPrice, maxPrice]);

  const handleChangeName = (e) => {
    setName(e.target.value);

    if (!e.target.value.length) {
      setFdata([]);
      setNotFound(true);
    }
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  }

  const handleChangePrice = (e) => {
    if(e.target.value === '1'){
      setMaxPrice(400000);
    }else if(e.target.value === '2'){
      setMinPrice(400000);
      setMaxPrice(600000);
    }else if(e.target.value === '3'){
      setMinPrice(600000);
    }else{
      setMinPrice(null);
      setMaxPrice(null);
    }
  }

  const handleSearch = () => {
    if (data.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setButton(true);
    if (!!bgOverlay) {
      setBgOverlay(!bgOverlay);
    }
  };

  const handleEditSearch = () => {
    setButton(false);
    if (!!bgOverlay) {
      setBgOverlay(!bgOverlay);
    }
  };

  const formatRupiah = (angka) => {
    let original = angka.toString().split("").reverse().join(""),
      result = original.match(/\d{1,3}/g);
    result = result.join(".").split("").reverse().join("");

    return result;
  };

  const handleFocusInput = () => {
    if (!bgOverlay) {
      setBgOverlay(!bgOverlay);
    }
  };

  const handleFocusBgOverlay = () => {
    setBgOverlay(!bgOverlay);
  };

  const props = {
    navList,
    bannerContent,
    data,
    fdata,
    button,
    handleChangeName,
    handleChangeCategory,
    handleSearch,
    handleEditSearch,
    formatRupiah,
    handleFocusInput,
    handleFocusBgOverlay,
    handleChangeStatus,
    handleChangePrice,
    bgOverlay,
    status,
    name,
    category
  };

  return (
    <>
      {!!bgOverlay ? <BackgroundOverlay {...props} /> : ""}
      <Navbar {...props} />
      <Banner />
      <SearchBar {...props} />
      {!!notFound ? <NotFound /> : <CarList {...props} />}
      <Footer />
    </>
  );
};

export default memo(Cars);
