import './style.scss';
import { Container, Label, Button } from 'reactstrap';

const DetailPaymentBar = (props) => {
    const {car, dateFrom, dateTo} = props;

    return (
        <section id='detailpaymentbar'>
            <Container>
                <div className='search-wrapper'>
                    <div className='search-title'>
                        <h2>Detail Pesananmu</h2>
                    </div>
                    <div className='search-input-wrapper'>
                        <div className='search-input'>
                            <div>
                                <Label>
                                    Nama/Tipe Mobil 
                                </Label>
                                <p>{car.name}</p>
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label>
                                    Kategori
                                </Label>
                                <p>{car.category}</p>
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label>
                                    Tanggal Mulai Sewa
                                </Label>
                                <p>{dateFrom}</p>
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label>
                                    Tanggal Akhir Sewa
                                </Label>
                                <p>{dateTo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
 
export default DetailPaymentBar;