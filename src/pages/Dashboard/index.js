import "./style.scss";
import { useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem
  } from 'reactstrap';
import CarsChart from "../../components/CarsChart";
import SectionTitle from "../../components/SectionTitle";
import NavbarAdmin from "../../components/NavbarAdmin";

const Dashboard = () => {
    const [hideSideBar, setHideSideBar] = useState(false);

    const handleHideSideBar = () =>{
        setHideSideBar(!hideSideBar);
    }

    const page = "dashboard";

    const props = {
        handleHideSideBar,
        hideSideBar,
        page
    }

    return (
        <div>
            <NavbarAdmin {...props} />
            <main className={!!hideSideBar === true ? 'fullwidth' : ''}>
                <div className="breadcrumb-wrapper">
                    <Breadcrumb>
                        <BreadcrumbItem>
                        <a href="">
                            Dashboard
                        </a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Dashboard
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="content">
                    <SectionTitle title={"Rental Car Data Visualization"} />
                    <CarsChart />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
