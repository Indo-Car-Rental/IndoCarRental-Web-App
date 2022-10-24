import { memo } from "react";
import { useSelector } from "react-redux"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import SectionTitle from "../../../components/SectionTitle"
import NavbarAdmin from "../../../components/NavbarAdmin"
import AdminFormCarEdit from "../../../components/AdminFormCarEdit/AdminFormCarEdit"
import "./style.scss"


const EditCar = () => {
    const page = "cars"
    const { sideBar } = useSelector((state) => state)
    const props = {
        page,
    }


    return (
        <div>
            <NavbarAdmin {...props} />
            <main className={!!sideBar.hideSideBar === true ? "fullwidth" : ""}>
                <div className="breadcrumb-wrapper">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <a href="/admin/dashboard">Dashboard</a>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <a href="/admin/cars">Cars</a>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Edit Car</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="content">
                    <SectionTitle title={"Edit Car"} />
                    <AdminFormCarEdit />
                </div>
            </main>
        </div>
    );
}
 
export default memo(EditCar);