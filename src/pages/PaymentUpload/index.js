import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from '../../const/staticData';
import DetailPaymentUploadContent from '../../components/DetailPaymentUploadContent';
import BreadcrumbPayment from '../../components/BreadcrumbPayment';
import './style.scss';

const PaymentUpload = () => {
    const bannerContent = false;
    const page = 'paymentupload';

    // sementara
    const bank = true;
    // sementara

    const props = {
        navList,
        bannerContent,
        page,
        bank
    }

    return (
        <div className="page-paymentupload">
            <Navbar {...props} />
            <Banner />
            <BreadcrumbPayment {...props} />
            <DetailPaymentUploadContent />
            <Footer />
        </div>
    );
}
 
export default PaymentUpload;