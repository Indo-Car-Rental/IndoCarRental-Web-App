import { Container } from 'reactstrap';
import './style.scss';

const BreadcrumbPayment = (props) => {
    return (
        <section id='breadcrumb-payment'>
            <Container>
                <div className='breadcrumb-wrapper'>
                    <div  className='breadcrumb-left'>
                        <a href='/'><i class="fa-solid fa-arrow-left"></i></a> 
                        <div>
                            <p>{props.bank ? 'BCA Transfer' : 'Pembayaran'}</p>
                            {props.bank ? (<p>Order ID: 86754231</p>) : ''}
                        </div>
                    </div>
                    <div className='breadcrumb-right'>
                        <nav>
                            <a className={props.page === 'payment' || props.page === 'paymentupload' || props.page === 'tiket' ? 'active' : ''}><span>1</span> Pilih Metode</a>
                            <a className={props.page === 'paymentupload' || props.page === 'tiket' ? 'active' : ''}><span>2</span> Bayar</a>
                            <a className={props.page === 'tiket' ? 'active' : ''}><span>3</span> Tiket</a>
                        </nav>
                    </div>
                </div>
            </Container>
        </section>
    );
}
 
export default BreadcrumbPayment;