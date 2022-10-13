import axios from "axios";
import React from "react";
import ModalPic from "../../assets/images/img-BeepBeep.svg";
import "./style.css";

const Modal = ({ modalStatus }) => {
  if (!modalStatus) return null;

  const handleDelete = (id) => {
    axios
      .delete(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
      .then((res) => {
        if (res.status === 200) {
          modalStatus(false);
          console.log(res);
          document.body.style.overflow = "unset";
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
          <button className="delete-button" onClick={handleDelete}>
            Ya
          </button>
          <button className="cancel-button" onClick={() => modalStatus(false)}>
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
