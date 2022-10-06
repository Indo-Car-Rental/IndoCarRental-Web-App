import logoSVG from "../../assets/images/logo-dashboard.svg";
import homeSVG from "../../assets/images/home-img.svg";
import truckSVG from "../../assets/images/fi_truck.svg";
import logoHeader from "../../assets/images/logo-header.svg";
import userImg from "../../assets/images/user-img.png";

import "./style.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { Button, Input } from "reactstrap";

const Admin = () => {
  return (
    <div className="admin-panel">
      <div className="left-column">
        <img src={logoSVG} alt="logo-sidebar" id="logo-sidebar" />
        <div className="dashboard-section">
          <img src={homeSVG} alt="home-img" id="home-image" />
          <p>Dashboard</p>
        </div>
        <div className="car-section">
          <img src={truckSVG} alt="truck-svg" id="truck-image" />
          <p>Cars</p>
        </div>
      </div>
      <div className="right-column">
        <div className="admin-header">
          <div className="left-admin-header">
            <img src={logoHeader} alt="header logo" id="logo-header" />
            <span className="hamburger">
              <GiHamburgerMenu />
            </span>
          </div>
          <div className="right-admin-header">
            <div className="search-bar">
              <div className="input-form">
                <Input placeholder="Search" style={{ width: "200px" }} />
              </div>
              <Button>Search</Button>
            </div>
            <div className="user-profile">
              <img src={userImg} alt="user-profile" />
              <p className="username">Unis Badri</p>
              <span className="dropdown">
                <AiFillCaretDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
