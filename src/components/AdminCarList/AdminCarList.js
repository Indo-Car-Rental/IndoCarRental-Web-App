import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { cardWhyUs } from "../../const/staticData";
import logo from "../../assets/images/car-banner.png";
import EditLogo from "../../assets/images/fi_edit.svg";
import DeleteLogo from "../../assets/images/fi_trash-2.svg";
import "./style.scss";
import Modal from "../AdminDeleteModal/Modal";

const AdminCarList = () => {
  const [carData, setCarData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
      .then((res) => setCarData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const handleDelete = (id) => {
  //   axios.delete(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`).then(res => {if (res.status == 200){

  //   }})
  // }

  return (
    <div className="car-list">
      <div className="car-list-container">
        {carData.length > 0 &&
          carData.map((item, key) => (
            <div className="car-card-container" key={key}>
              <div className="card-content">
                <div className="card-image">
                  <img src={logo} alt="" />
                </div>
                <div className="content-desc">
                  <p>Nama/Tipe Mobil</p>
                  <p>Rp {item.price} / hari</p>
                  <p>{item.category}</p>
                  <p>Start Rent - Finish Rent</p>
                  <p>Updated at</p>
                </div>
              </div>
              <div className="action-button">
                <div
                  className="delete-button"
                  onClick={() => {
                    setOpenModal(true);
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
        {openModal && <Modal modalStatus={setOpenModal} />}
      </div>
    </div>
  );
};

export default AdminCarList;
