import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from '../../const/staticData';
import DetailPaymentBar from '../../components/DetailPaymentBar';
import DetailPaymentContent from '../../components/DetailPaymentContent';
import BreadcrumbPayment from '../../components/BreadcrumbPayment';
import './style.scss';
import { useSelector } from 'react-redux';

const Payment = () => {
    const bannerContent = false;
    const page = 'payment';
    
    const { payment } = useSelector((state) => state);
    const {car, dateRange, totHarga} = payment.paymentData;

    const formatRupiah = (angka) =>{
        let	original = angka.toString().split('').reverse().join(''),
        result 	= original.match(/\d{1,3}/g);
        result	= result.join('.').split('').reverse().join('');

        return result;
    }

    const { status } = useSelector((state) => state);

    const checkCustomerLogin = status.tokenLogin ? true : false;

    const bulanConvert = (param) =>{
        let bulan = param;
        switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
        return bulan;
    }
    
    const dateFrom = `${dateRange[0].getDate()} ${bulanConvert(dateRange[0].getMonth())} ${dateRange[0].getFullYear()}`;
    const dateTo = `${dateRange[1].getDate()} ${bulanConvert(dateRange[1].getMonth())} ${dateRange[1].getFullYear()}`;
    const api_dateFrom = `${dateRange[0].getFullYear()}-${dateRange[0].getMonth()}-${dateRange[0].getDate()}`;
    const api_dateTo = `${dateRange[1].getFullYear()}-${dateRange[1].getMonth()}-${dateRange[1].getDate()}`;

    const props = {
        navList,
        bannerContent,
        page,
        car, 
        dateRange,
        formatRupiah,
        totHarga,
        dateFrom,
        dateTo,
        checkCustomerLogin,
        api_dateFrom,
        api_dateTo
    }

    return (
        <div className='page-payment'>
            <Navbar {...props} />
            <Banner />
            <BreadcrumbPayment {...props} />
            <DetailPaymentBar {...props} />
            <DetailPaymentContent {...props} />
            <Footer />
        </div>
    );
}
 
export default Payment;