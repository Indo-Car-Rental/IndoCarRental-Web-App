import { Container, Row } from 'reactstrap';
import './style.scss';
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkHome } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonLogin from '../ButtonLogin';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

const Navbar = ({navList}) => {
    const [showSideBar, setShowSideBar] = useState(false);
    const { status } = useSelector((state) => state);
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handleSideBar = () =>{
        setShowSideBar(!showSideBar);
    }

    const displayButton = () => {
        if(!!status.tokenLogin) {
            return true
        }
    }

    return (
        <header id='navbar' sidebar={ !showSideBar ? 'false' : 'true' }>
            
            <Container>
                <Row>
                    <div className='wrapper d-flex justify-content-between align-items-center'>
                        <LinkHome to='/'>
                            <div className='logo'></div>
                        </LinkHome>
                        <nav className='d-lg-flex justify-content-between align-items-center'>
                            <div className='close'>
                                <strong>BCR</strong>
                                <i className='fa-solid fa-x' onClick={handleSideBar}></i>
                            </div>
                            {
                                navList.map((item) => (
                                    // <LinkScroll to={item.url} offset={-70} onClick={handleSideBar}>{item.title}</LinkScroll>
                                    <a href={item.url} offset={-70} onClick={handleSideBar} key={item.url}>{item.title}</a>
                                ))
                            }
                            {displayButton() ?  (
                                <>
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle className="dropdown-btn">
                                        <div className="avatar">C</div>
                                        <p>Customer</p>
                                        <i className="fa-solid fa-chevron-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem header>Log in as Customer</DropdownItem>
                                        <DropdownItem className='btn-logout-cust'>Log out</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </>
                            ) : <ButtonLogin/>}
                            
                        </nav>
                        
                        <div className='hamburger-menu d-flex d-lg-none flex-column justify-content-between' onClick={handleSideBar}>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
     );
}
 
export default Navbar;