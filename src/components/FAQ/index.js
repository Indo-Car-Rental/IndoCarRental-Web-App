import { Container, Row, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import './style.scss';

const FAQ = (props) => {
    const {faq} = props;
    return (
        <section id='faq'>
            <Container>
                <Row>
                    <div className='wrapper d-flex flex-column flex-lg-row'>
                        <div className='title col-12 col-lg-5 d-flex justify-content-start flex-column'>
                            <h2>Frequently Asked Question</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className='accordion-wrapper col-12 col-lg-7 d-flex justify-content-center align-items-center'>
                        
                            <UncontrolledAccordion defaultOpen="0">
                            {
                                faq.map((item, index) => (
                                    <AccordionItem>
                                        <AccordionHeader targetId={index}>
                                            {item.question}
                                        </AccordionHeader>
                                        <AccordionBody accordionId={index}>
                                            {item.answer}
                                        </AccordionBody>
                                    </AccordionItem>
                                ))
                            }
                            </UncontrolledAccordion>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
     );
}
 
export default FAQ;