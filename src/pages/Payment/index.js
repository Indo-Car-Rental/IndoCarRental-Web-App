import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from '../../const/staticData';
import DetailPaymentBar from '../../components/DetailPaymentBar';
import DetailPaymentContent from '../../components/DetailPaymentContent';
import BreadcrumbPayment from '../../components/BreadcrumbPayment';
import './style.scss';

const Payment = () => {
    const bannerContent = false;
    const page = 'payment';

    const props = {
        navList,
        bannerContent,
        page
    }

    return (
        <div className='page-payment'>
            <Navbar {...props} />
            <Banner />
            <BreadcrumbPayment {...props} />
            <DetailPaymentBar />
            <DetailPaymentContent />
            <Footer />
        </div>
    );
}
 
export default Payment;