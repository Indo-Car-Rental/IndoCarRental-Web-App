import './style.scss';
import { Container, Label, Button } from 'reactstrap';

const DetailPaymentBar = () => {
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
                                <p>Innova</p>
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label>
                                    Kategori
                                </Label>
                                <p>6 - 8 orang</p>
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label>
                                    Tanggal Mulai Sewa
                                </Label>
                                <p>2 Jun 2022</p>
                            </div>
                        </div>
                        <div className='search-input'>
                            <div>
                                <Label>
                                    Tanggal Akhir Sewa
                                </Label>
                                <p>8 Jun 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
 
export default DetailPaymentBar;