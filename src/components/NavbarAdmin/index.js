import "./style.scss";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
import SideBar from "./SideBar";
import { dataSideBar } from "../../redux/actions/dataSideBar";

const NavbarAdmin = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handleLogout = () =>{
        localStorage.removeItem('admin-token');
        navigate("/admin/login", { replace: true });
    }

    const { sideBar } = useSelector((state) => state);

    const handleHideSideBar = () =>{
        dispatch(dataSideBar(!sideBar.hideSideBar));
    }

    return (
        <>
            <header id='navbar'>
                <div className="col">
                    <div className={!!sideBar.hideSideBar === true ? 'hide logo-big-wrapper' : 'show logo-big-wrapper'}>
                        <div className="logo-big">
                        </div>
                    </div>
                    <i className="fa-solid fa-bars hamburger" onClick={handleHideSideBar}></i>
                </div>
                <div className="col">
                    <form>
                        <div className="input-group d-flex">
                            <div class="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></div>
                            <input type="text" className="form-control" placeholder="Search" name="" />
                            <button className="btn btn-outline-secondary" type="button">Search</button>
                        </div>
                    </form>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className="dropdown-btn">
                            <div className="avatar">A</div>
                            <p>Admin</p>
                            <i className="fa-solid fa-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Log in as Admin</DropdownItem>
                            <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </header>
            <SideBar {...props} />
        </>
    );
}
 
export default NavbarAdmin;