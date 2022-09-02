import { Link } from "react-router-dom";
import { Container, Row, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import './style.scss';

const CarDetail = (props) => {
    const {car, formatRupiah} = props;
    return (
        <section id='cardetail'>
            <Container>
                <Row>
                    <div className="wrapper d-flex flex-column-reverse flex-lg-row">
                        <div className="desc col-12 col-lg-7">
                            <div className='wrapper'>
                                <strong><p>Tentang Paket</p></strong>
                                
                                <strong><p>Include</p></strong>
                                <ul>
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>

                                <strong><p>Exclude</p></strong>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                
                                <UncontrolledAccordion defaultOpen="1">
                                    <AccordionItem>
                                        <AccordionHeader targetId="1">
                                            <strong><p>Refund, Reschedule, Overtime</p></strong>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <ul>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </AccordionBody>
                                    </AccordionItem>
                                </UncontrolledAccordion>
                            </div>
                        </div>
                        <div className="desc-img col-12 col-lg-5">
                            <div className='wrapper'>
                                {
                                    !!Object.keys(car).length && (
                                        <>
                                            <div className="car-img">
                                                <img src={!!car.image ? car.image : 'https://img.freepik.com/premium-vector/modern-car-silhouette-illustration-vector-design_500890-234.jpg?w=600'} />
                                            </div>
                                            <p className='car-name'>{!!car.name || car.name === '' ? car.name : 'Mobil'}</p>
                                            <p className='car-category'><i className='fa-solid fa-user-group'></i> {!!car.category ? car.category : 'Kategori'}</p>
                                            <div className="car-price">
                                                <p>Total</p>
                                                <p>Rp {formatRupiah(!!car.price ? car.price : 0)}</p>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='btn-back d-flex justify-content-center mt-4'>
                        <Link to='/carimobil'>
                            <button className='btn btn-primary'>
                                <i className="fa-solid fa-arrow-left-long"></i> Back to Car List
                            </button>
                        </Link>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
 
export default CarDetail;