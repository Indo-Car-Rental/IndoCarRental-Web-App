import { Container, Row } from 'reactstrap';
import './style.scss';
import { Link as LinkHome } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <div className='wrapper d-flex flex-column flex-lg-row'>
                        <div className='address col-12 col-lg-3 d-flex flex-column'>
                            <p>Jalan Suroyo No. 161 Mayangan Kota <br/> Probolonggo 672000</p>
                            <p>binarcarrental@gmail.com</p>
                            <p>081-233-334-808</p>
                        </div>
                        <div className='sitemap col-12 col-lg-3 d-flex justify-content-lg-center'>
                            <div className='d-flex flex-column justify-content-between'>
                                <a href='/#ourservices'>Our services</a>
                                <a href='/#whyus'>Why Us</a>
                                <a href='/#testimonial'>Testimonial</a>
                                <a href='/#faq'>FAQ</a>
                            </div>
                        </div>
                        <div className='social-media col-12 col-lg-3 d-flex flex-column'>
                            <div className='title'>
                                <h3>Connect with us</h3>
                            </div>
                            <div className='wrapper-social-media d-flex flex-row'>
                                <div>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div>
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div>
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div>
                                    <i className="fa-brands fa-twitch"></i>
                                </div>
                            </div>
                        </div>
                        <div className='copyright col-12 col-lg-3 d-flex flex-column'>
                            <div className='title'>
                                <h3>Copyright Binar 2022</h3>
                            </div>
                            <LinkHome to='/'>
                                <div className='logo-footer'></div>
                            </LinkHome>
                        </div>
                    </div>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;