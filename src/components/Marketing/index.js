import { Container } from 'reactstrap';
import ButtonCTA from '../Button';
import './style.scss';

const Marketing = () => {
    return (
        <section id='marketing'>
            <Container>
                <div className='wrapper d-flex flex-column justify-content-center'>
                    <h2>Sewa Mobil di Tangerang Sekarang</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ButtonCTA />
                </div>
            </Container>
        </section>
     );
}
 
export default Marketing;