import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import EditLogo from "../../assets/images/fi_edit.svg";
import DeleteLogo from "../../assets/images/fi_trash-2.svg";
import AddLogo from "../../assets/images/fi_plus.svg";
import "./style.scss";
import Modal from "../AdminDeleteModal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  testFetchCar,
  FetchCarSmall,
  FetchCarMedium,
  FetchCarLarge,
} from "../../redux/actions/dataCarList";

const AdminCarList = () => {
  const [carData, setCarData] = useState([]);
  const [id, setId] = useState();
  const [isActive, setActive] = useState(1);

  // Redux Testing
  const dispatch = useDispatch();
  const { carList } = useSelector((state) => state);

  const fetchCar = () => {
    setCarData(carList.cars);
    setActive(1);
  };

  const fetchCarSmall = () => {
    setCarData(carList.small);
    setActive(2);
  };

  const fetchCarMedium = () => {
    setCarData(carList.medium);
    setActive(3);
  };

  const fetchCarLarge = () => {
    setCarData(carList.large);
    setActive(4);
  };

  useEffect(() => {
    // fetchCar(dispatch(testFetchCar()));
    testFetchCar();
    fetchCarSmall();
    fetchCarMedium();
    fetchCarLarge();
    setActive(1);
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="car-list">
      {console.log("Car-List Redux", carList)}
      <div className="title">
        <h1>List Car</h1>
        <button>
          <img src={AddLogo} /> Add New Car
        </button>
      </div>
      <div className="category">
        <button
          className={isActive === 1 ? "active" : ""}
          onClick={() => fetchCar(testFetchCar())}
        >
          All
        </button>
        <button
          className={isActive === 2 ? "active" : ""}
          onClick={() => fetchCarSmall(dispatch(FetchCarSmall()))}
        >
          2-4 People
        </button>
        <button
          className={isActive === 3 ? "active" : ""}
          onClick={() => fetchCarMedium(dispatch(FetchCarMedium))}
        >
          4-6 People
        </button>
        <button
          className={isActive === 4 ? "active" : ""}
          onClick={() => fetchCarLarge(dispatch(FetchCarLarge))}
        >
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
                    handleModal();
                    setId(item.id);
                    // document.body.style.overflow = "hidden";
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
