import { Link } from "react-router-dom";
import { Container } from 'reactstrap';
import './style.scss';
import { useSelector } from "react-redux";

const BreadcrumbPayment = (props) => {
    const { payment } = useSelector((state) => state);
    const id_car = payment.paymentData.car.id;
    let url_back;

    if(props.page === 'payment'){
        url_back = `/detailmobil/${id_car}`;
    }else if(props.page === 'paymentupload'){
        url_back = `/pembayaran`;
    }else if(props.page === 'tiket'){
        url_back = `/konfirmasi-pembayaran/${payment.paymentUpload.id}`;
    }
    console.log("data", payment.paymentUpload.id)

    return (
        <section id='breadcrumb-payment'>
            <Container>
                <div className='breadcrumb-wrapper'>
                    <div  className='breadcrumb-left'>
                        <Link to={url_back}><i className="fa-solid fa-arrow-left"></i></Link> 
                        
                        <div>
                            {
                                props.page === 'tiket' ? (
                                    <>
                                        <p>Tiket</p>
                                    </>
                                ) : (
                                    <>
                                        <p>{props.bank ? (<><span className='text-capitalize'>{props.bank}</span> Transfer</>) : 'Pembayaran'}</p>
                                    </>
                                )
                            }
                            {props.bank ? (<p>Order ID: {props.id_order}</p>) : ''}
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