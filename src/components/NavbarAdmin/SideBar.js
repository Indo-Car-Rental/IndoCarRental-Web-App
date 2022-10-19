import "./style.scss";
import { useSelector } from "react-redux";

const SideBar = (props) => {
  const { sideBar } = useSelector((state) => state);
  return (
    <>
      <aside className="sidebar">
        <div className="logo-wrapper">
          <div className="logo"></div>
        </div>
        <nav>
          <a
            href="/admin/dashboard"
            className={props.page === "dashboard" ? "active" : ""}
          >
            <i class="fa-solid fa-house"></i>
            <p>Dashboard</p>
          </a>
          <a
            href="/admin/car-list"
            className={props.page === "car-list" ? "active" : ""}
          >
            <i class="fa-solid fa-truck"></i>
            <p>Cars</p>
          </a>
        </nav>
      </aside>
      <aside
        className={
          !!sideBar.hideSideBar === true
            ? "hide sub-sidebar"
            : "show sub-sidebar"
        }
      >
        <p className="title">{props.page}</p>
        <nav>
          <a>{props.page}</a>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
