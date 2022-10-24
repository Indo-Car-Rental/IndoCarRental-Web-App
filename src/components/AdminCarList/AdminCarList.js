import React, { useState } from "react";
import { useEffect } from "react";
import EditLogo from "../../assets/images/fi_edit.svg";
import DeleteLogo from "../../assets/images/fi_trash-2.svg";
import AddLogo from "../../assets/images/fi_plus.svg";
import UserLogo from "../../assets/images/fi_users.png";
import ClockLogo from "../../assets/images/fi_clock.png";
import "./style.scss";
import Modal from "../AdminDeleteModal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { testFetchCar } from "../../redux/actions/dataCarList";
import TYPES from "../../redux/types";
import moment from "moment";

const AdminCarList = () => {
  const [carData, setCarData] = useState([]);
  const [id, setId] = useState();
  const [isActive, setActive] = useState(1);

  // Redux Testing
  const dispatch = useDispatch();
  const { carList } = useSelector((state) => state);

  const handleChangeCategory = (category, activeButton) => {
    setActive(activeButton);
    dispatch({
      type: TYPES.CHANGE_CATEGORY_CAR,
      payload: category,
    });
    dispatch({
      type: TYPES.SEARCH_NAME_CAR,
      payload: "",
    });
    dispatch(testFetchCar());
  };

  useEffect(() => {
    dispatch(testFetchCar());
    setActive(1);
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

  const formatDatesUpdate = (value) => {
    return moment(value).format("lll");
  };

  const updateDate = (params) => {
    return formatDatesUpdate(params);
  };

  return (
    <div className="car-list">
      <div className="title">
        <h1>List Car</h1>
        <button className="button-new-car">
          <img src={AddLogo} /> Add New Car
        </button>
      </div>
      <div className="category">
        <button
          className={isActive === 1 ? "active" : ""}
          onClick={() => handleChangeCategory("", 1)}
        >
          All
        </button>
        <button
          className={isActive === 2 ? "active" : ""}
          onClick={() => handleChangeCategory("small", 2)}
        >
          Small
        </button>
        <button
          className={isActive === 3 ? "active" : ""}
          onClick={() => handleChangeCategory("medium", 3)}
        >
          Medium
        </button>
        <button
          className={isActive === 4 ? "active" : ""}
          onClick={() => handleChangeCategory("large", 4)}
        >
          Large
        </button>
      </div>
      <div className="car-list-container">
        {carList?.cars.length > 0 &&
          carList?.cars.map((item, key) => (
            <div className="car-card-container" key={key}>
              <div className="card-content">
                <div className="card-image">
                  <img
                    src={
                      item.image
                        ? item.image
                        : `https://img.freepik.com/premium-vector/modern-car-silhouette-illustration-vector-design_500890-234.jpg?w=600`
                    }
                    alt=""
                  />
                </div>
                <div className="content-desc">
                  <p>{item.name}</p>
                  <p>
                    <b>Rp. {item.price} / hari</b>
                  </p>
                  <p className="card-content-category">
                    <img src={UserLogo} />
                    {item.category}
                  </p>
                  <p>
                    {item.start_rent_at} - {item.finish_rent_at}
                  </p>
                  <p className="card-content-update">
                    <img src={ClockLogo} />
                    Updated at {updateDate(item.updateAt)}
                  </p>
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
                  <a>
                    <b>Delete</b>
                  </a>
                </div>
                <div className="edit-button">
                  <img src={EditLogo} />
                  <a>
                    <b>Edit</b>
                  </a>
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
