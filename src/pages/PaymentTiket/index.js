import { memo } from "react";
import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from '../../const/staticData';
import DetailPaymentUploadContent from '../../components/DetailPaymentUploadContent';
import BreadcrumbPayment from '../../components/BreadcrumbPayment';
import './style.scss';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DetailTiketContent from '../../components/DetailTiketContent';
import HelmetHead from "../../components/SEO/HelmetHead";

const PaymentTiket = () => {
    const bannerContent = false;
    const page = 'tiket';

    const { id } = useParams();
    const id_order = id;

    const [dataOrder, setDataOrder] = useState("");

    const { payment } = useSelector((state) => state);

    useEffect(() => {
        axios({
            method: 'get',
            url: `https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`,
            headers: {
                access_token : localStorage.getItem("access_token")
            }
        })
        .then((res) => setDataOrder(res.data))
        .catch((err) => console.log(err));
    }, []);

    const bank = payment.paymentOrder.bank?payment.paymentOrder.bank:'bca';

    const formatRupiah = (angka) =>{
        let	original = angka.toString().split('').reverse().join(''),
        result 	= original.match(/\d{1,3}/g);
        result	= result.join('.').split('').reverse().join('');

        return result;
    }

    const props = {
        navList,
        bannerContent,
        page,
        bank,
        id_order,
        dataOrder
    }

    return (
        <div className="page-paymentupload">
            <HelmetHead title="E-tiket Invoice" description="ini adalah halaman E-tiket Invoice" />
            <Navbar {...props} />
            <Banner />
            <BreadcrumbPayment {...props} />
            <DetailTiketContent {...props} />
            <Footer />
        </div>
    );
}
 
export default memo(PaymentTiket);