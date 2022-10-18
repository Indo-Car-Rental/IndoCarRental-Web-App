import { Link } from "react-router-dom";
import {
  Container,
  Row,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import "./style.scss";

const DetailPaymentContent = () => {
  return (
    <section id="cardetail">
      <Container>
        <Row>
          <div className="wrapper d-flex flex-column flex-lg-row">
            <div className="desc col-12 col-lg-7">
              <div className="wrapper">
                <strong>
                  <p>Pilih Bank Transfer</p>
                </strong>

                <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>

                <ul className="bank_wrapper">
                  <li>
                    <input type="radio" name="bank" />
                    <label>
                      <div>BCA</div>
                      BCA Transfer
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="bank" />
                    <label>
                      <div>BNI</div>
                      BNI Transfer
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="bank" />
                    <label>
                      <div>Mandiri</div>
                      Mandiri Transfer
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="desc-img col-12 col-lg-5">
              <div className="wrapper">
                <p className="car-name">
                  Innova
                </p>
                <p className="car-category">
                  <i className="fa-solid fa-user-group"></i> 6-8 orang
                </p>
                <div className="price-detail">
                  <UncontrolledAccordion defaultOpen="1">
                    <AccordionItem>
                      <AccordionHeader targetId="1">
                        <div className="d-flex justify-content-between w-100 accordion-header-wrapper">
                          <strong>
                            <p>Total</p>
                          </strong>
                          <strong>
                            <p>Rp. 3.500.000</p>
                          </strong>
                        </div>
                      </AccordionHeader>
                      <AccordionBody accordionId="1">
                        <strong>
                          <p>Harga</p>
                        </strong>
                        <ul>
                          <li>
                            <div>
                              <p>Sewa Mobil Rp.500.000 x 7 Hari</p>
                              <p>Rp 3.500.000</p>
                            </div>
                          </li>
                        </ul>
                        
                        <strong>
                          <p>Biaya Lainnya</p>
                        </strong>
                        <ul className="biaya-lainnya">
                          <li>
                            <div>
                              <p>Pajak</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>Biaya makan sopir</p>
                            </div>
                          </li>
                        </ul>

                        <strong>
                          <p>Belum Termasuk</p>
                        </strong>
                        <ul>
                          <li>
                            <div>
                              <p>Bensin</p>
                              <p>Tol dan parkir</p>
                            </div>
                          </li>
                        </ul>
                      </AccordionBody>
                    </AccordionItem>
                  </UncontrolledAccordion>
                </div>
                <hr />
                <div className="car-price">
                  <p>Total</p>
                  <p>
                    Rp 200000
                  </p>
                </div>
                <div className="lanjut-button">
                  <button>Lanjutkan Pembayaran</button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default DetailPaymentContent;
