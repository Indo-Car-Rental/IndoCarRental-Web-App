import Navbar from '../../components/Navbar';
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { navList } from '../../const/staticData';
import SearchBar from '../../components/SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import CarDetail from '../../components/CarDetail';
import './style.scss';
import { useSelector } from 'react-redux';

const DetailCar = () => {
    const bannerContent = false;
    const disableForm = true;
    const [car, setCar] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then((res) => setCar(res.data))
        .catch((err) => console.log(err));
    }, []);

    const formatRupiah = (angka) =>{
        let	original = angka.toString().split('').reverse().join(''),
        result 	= original.match(/\d{1,3}/g);
        result	= result.join('.').split('').reverse().join('');

        return result;
    }

    const { status } = useSelector((state) => state)

    const checkCustomerLogin = status.tokenLogin ? true : false;

    const props = {
        navList,
        bannerContent,
        disableForm,
        car,
        formatRupiah,
        checkCustomerLogin
    }

    return (
        <div className='page-detailcar'>
            <Navbar {...props} />
            <Banner />
            <SearchBar {...props} />
            <CarDetail {...props} />
            <Footer />
        </div>
    );
}
 
export default DetailCar;