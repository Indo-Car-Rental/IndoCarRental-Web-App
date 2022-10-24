import { memo } from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import OurServices from '../../components/OurServices';
import WhyUs from '../../components/WhyUs';
import Testimonial from '../../components/Testimonial';
import Marketing from '../../components/Marketing';
import FAQ from '../../components/FAQ';
import { navList, serviceList, cardWhyUs, testimonial, faq } from '../../const/staticData';
import HelmetHead from "../../components/SEO/HelmetHead";

const Home = () => {
    const bannerContent = true;
    const showCTA = true;
    const props = {
        navList,
        bannerContent,
        serviceList,
        cardWhyUs,
        testimonial,
        faq,
        showCTA
    }

    return (
        <>
            <HelmetHead title="Home Page" description="ini adalah halaman home page" />
            <Navbar {...props} />
            <Banner {...props} />
            <OurServices {...props} />
            <WhyUs {...props} />
            <Testimonial {...props} />
            <Marketing />
            <FAQ {...props} />
            <Footer />
        </>
    );
}
 
export default  memo(Home);