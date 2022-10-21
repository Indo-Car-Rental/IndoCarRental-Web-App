import "./style.scss";
import { useSelector } from "react-redux";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import CarsChart from "../../components/CarsChart";
import SectionTitle from "../../components/SectionTitle";
import NavbarAdmin from "../../components/NavbarAdmin";
import Table from "../../components/Table"

const Dashboard = () => {
  const page = "dashboard";
  const { sideBar } = useSelector((state) => state);

  const props = {
    page,
  };

  return (
    <div>
      <NavbarAdmin {...props} />
      <main className={!!sideBar.hideSideBar === true ? "fullwidth" : ""}>
        <div className="breadcrumb-wrapper">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="">Dashboard</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Dashboard</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="content">
          <SectionTitle title={"Rental Car Data Visualization"} />
          <CarsChart />
          <div className="data-table">
            <h5>Dashboard</h5>
            <SectionTitle title={"List Order"} />
            <Table />
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
