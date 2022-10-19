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
      console.log(res);
    } catch (err) {
      console.log(err);
    }
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
        <button className="all-category">All</button>
        <button className="category2">2-4 People</button>
        <button className="category3">4-6 People</button>
        <button className="category4">6-8 People</button>
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