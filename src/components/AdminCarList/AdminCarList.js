import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { cardWhyUs } from "../../const/staticData";
import logo from "../../assets/images/car-banner.png";
import EditLogo from "../../assets/images/fi_edit.svg";
import DeleteLogo from "../../assets/images/fi_trash-2.svg";
import AddLogo from "../../assets/images/fi_plus.svg";
import "./style.scss";
import Modal from "../AdminDeleteModal/Modal";

const AdminCarList = () => {
  const [carData, setCarData] = useState([]);
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [carFilterSearch, setCarFilterSearch] = useState([]);
  const [categoryClicked, setCategoryClicked] = useState(false);

  const handleSearch = (e) => {
    setName(e.target.value);
    if (e.target.value.length === 0) {
      setCarFilterSearch([]);
    }
  };
  const fetchCar = async () => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car`,
        {
          headers: { access_token: `${token}` },
        }
      );
      setCarData(res.data.cars);
    } catch (err) {
      console.log(err);
    }
  };

  // const btnFilterSmall = () => {

  // };
  // console.log(btnFilterSmall);
  const fetchCarSmall = async () => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=small`,
        {
          headers: { access_token: `${token}` },
        }
      );
      setCarData(res.data.cars);
      setCategoryClicked((categoryClicked) => !categoryClicked);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCarMedium = async () => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=medium`,
        {
          headers: { access_token: `${token}` },
        }
      );
      setCarData(res.data.cars);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCarLarge = async () => {
    try {
      const token = localStorage.getItem("admin-token");
      const res = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=large`,
        {
          headers: { access_token: `${token}` },
        }
      );
      setCarData(res.data.cars);
    } catch (err) {
      console.log(err);
    }
  };

  const props = {
    handleSearch,
  };

  useEffect(() => {
    fetchCar();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="car-list">
      <div className="title">
        <h1>List Car</h1>
        <button>
          <img src={AddLogo} /> Add New Car
        </button>
      </div>
      <div className="category">
        <button className="all-category" onClick={() => fetchCar()}>
          All
        </button>
        <button className="category2" onClick={() => fetchCarSmall()}>
          2-4 People
        </button>
        <button className="category3" onClick={() => fetchCarMedium()}>
          4-6 People
        </button>
        <button className="category4" onClick={() => fetchCarLarge()}>
          6-8 People
        </button>
      </div>
      <div className="car-list-container">
        {carData.length > 0 &&
          carData.map((item, key) => (
            <div className="car-card-container" key={key}>
              <div className="card-content">
                <div className="card-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="content-desc">
                  <p>{item.name}</p>
                  <p>Rp {item.price} / hari</p>
                  <p>{item.category}</p>
                  <p>
                    {item.start_rent_at} - {item.finish_rent_at}
                  </p>
                  <p>{item.updatedAt}</p>
                </div>
              </div>
              <div className="action-button">
                <div
                  className="delete-button"
                  onClick={() => {
                    setOpenModal(true);
                    setId(item.id);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  <img src={DeleteLogo} />
                  <a>Delete</a>
                </div>
                <div className="edit-button">
                  <img src={EditLogo} />
                  <a>Edit</a>
                </div>
              </div>
            </div>
          ))}
        {openModal && <Modal modalStatus={setOpenModal} idStatus={id} />}
      </div>
    </div>
  );
};

export default AdminCarList;
