import React from "react";
import AdminCarList from "../../components/AdminCarList/AdminCarList";
import { useSelector } from "react-redux";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import SectionTitle from "../../components/SectionTitle";
import NavbarAdmin from "../../components/NavbarAdmin";
import "./style.scss";
import Modal from "../../components/AdminDeleteModal/Modal";
import { useState, memo } from "react";

const AdminCarDashboard = () => {
  const page = "cars";
  const { sideBar } = useSelector((state) => state);
  const props = {
    page,
  };
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState();
  return (
    <div>
      <NavbarAdmin {...props} />
      <main className={!!sideBar.hideSideBar === true ? "fullwidth" : ""}>
        <div className="breadcrumb-wrapper">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="">Cars</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Cars</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="content">
          <AdminCarList {...props} />
        </div>
      </main>
      {openModal && <Modal modalStatus={setOpenModal} idStatus={id} />}
    </div>
  );
};

export default memo(AdminCarDashboard);
