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
  const [category, setCategory] = useState("2 - 4 orang");
  const [button, setButton] = useState(false);
  const [fdata, setFdata] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [bgOverlay, setBgOverlay] = useState(false);

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
      .then((res) => setData(res.data.cars))
      .catch((err) => console.log(err));
  }, []);

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

  const handleSearch = () => {
    let newArr = [];

    if (name.toLowerCase().length === 0) {
      newArr = data.filter((e) => e.category === category);
    } else {
      newArr = data.filter(
        (e) =>
          e.name.toLowerCase() === name.toLowerCase() && e.category === category
      );
    }

    if (!newArr.length) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setFdata(newArr);
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
    bgOverlay,
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

export default Cars;
