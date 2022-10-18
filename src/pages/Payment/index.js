import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from '../../const/staticData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import DetailPaymentBar from '../../components/DetailPaymentBar';
import DetailPaymentContent from '../../components/DetailPaymentContent';
import BreadcrumbPayment from '../../components/BreadcrumbPayment';

const Payment = () => {
    const bannerContent = false;
    const disableForm = true;
    const [car, setCar] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.log(err));
    }, []);

    const formatRupiah = (angka) =>{
        let	original = angka.toString().split('').reverse().join(''),
        result 	= original.match(/\d{1,3}/g);
        result	= result.join('.').split('').reverse().join('');

        return result;
    }

    const props = {
        navList,
        bannerContent,
        disableForm,
        car,
        formatRupiah,
    }

    return (
        <>
            <Navbar {...props} />
            <Banner />
            <BreadcrumbPayment />
            <DetailPaymentBar />
            <DetailPaymentContent />
            <Footer />
        </>
    );
}
 
export default Payment;