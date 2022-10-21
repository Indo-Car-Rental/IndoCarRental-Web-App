import { Container, Row } from 'reactstrap';
import './style.scss';
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkHome } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonLogin from '../ButtonLogin';

const Navbar = ({navList}) => {
    const [showSideBar, setShowSideBar] = useState(false);
    const { status } = useSelector((state) => state);

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
                        <nav className='d-lg-flex justify-content-between'>
                            <div className='close'>
                                <strong>BCR</strong>
                                <i className='fa-solid fa-x' onClick={handleSideBar}></i>
                            </div>
                            {
                                navList.map((item) => (
                                    // <LinkScroll to={item.url} offset={-70} onClick={handleSideBar}>{item.title}</LinkScroll>
                                    <a href={item.url} offset={-70} onClick={handleSideBar}>{item.title}</a>
                                ))
                            }
                            {displayButton() ?  null : <ButtonLogin/>}
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