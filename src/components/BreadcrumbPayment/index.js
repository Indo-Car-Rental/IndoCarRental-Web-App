import { Container } from 'reactstrap';
import './style.scss';

const BreadcrumbPayment = (props) => {
    return (
        <section id='breadcrumb-payment'>
            <Container>
                <div className='breadcrumb-wrapper'>
                    <div  className='breadcrumb-left'>
                        <a href='/'><i class="fa-solid fa-arrow-left"></i></a> Pembayaran
                    </div>
                    <div className='breadcrumb-right'>
                        <nav>
                            <a className='active'><span>1</span> Pilih Metode</a>
                            <a><span>2</span> Bayar</a>
                            <a><span>3</span> Tiket</a>
                        </nav>
                    </div>
                </div>
            </Container>
        </section>
    );
}
 
export default BreadcrumbPayment;