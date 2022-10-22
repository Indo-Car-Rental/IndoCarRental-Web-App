import axios from "axios";
import React, { useEffect } from "react";
import ModalPic from "../../assets/images/img-BeepBeep.svg";
import "./style.css";

const Modal = ({ modalStatus, idStatus }) => {
  if (!modalStatus) return null;

  const refreshPage = () => {
    window.location.reload();
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("admin-token");
    console.log(token);

    axios
      .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, {
        headers: { access_token: `${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          modalStatus(false);
          console.log(res);
          refreshPage();
        }
      });
  };
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-pic">
          <img src={ModalPic} />
        </div>
        <div className="modal-title">
          <h1>Menghapus Data Mobil</h1>
        </div>
        <div className="modal-desc">
          <p>
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </p>
        </div>
        <div className="modal-button">
          <button
            className="delete-button"
            onClick={() => handleDelete(idStatus)}
          >
            Ya
          </button>
          <button
            className="cancel-button"
            onClick={() => {
              modalStatus(false);
              document.body.style.overflow = "unset";
            }}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
