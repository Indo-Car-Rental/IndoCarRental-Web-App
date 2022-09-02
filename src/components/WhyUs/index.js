import { Container, Row, Card } from 'reactstrap';
import './style.scss';

const WhyUs = (props) => {
    const {cardWhyUs} = props;

    return (
        <section id='whyus'>
            <Container>
                <Row>
                    <div className='wrapper d-flex flex-column justify-content-start'>
                        <div className='title'>
                            <h2>Why Us?</h2>
                            <p>Mengapa harus pilih Binar Car Rental?</p>
                        </div>
                        <div className='wrapper-card d-flex flex-column flex-lg-row'>
                            {
                                cardWhyUs.map((item) => (
                                    <Card>
                                        <img src={item.logo} alt={item.title} />
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </Card>
                                ))
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
     );
}
 
export default WhyUs;