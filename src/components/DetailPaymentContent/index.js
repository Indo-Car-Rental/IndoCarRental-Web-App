import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import "./style.scss";
import { UploadPayment } from "../../redux/actions/paymentAction";
import { useNavigate } from "react-router-dom";

const DetailPaymentContent = (props) => {
  const {car, dateRange, api_dateFrom, api_dateTo, formatRupiah, totHarga} = props;
  const [bank, setBank] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id_car = car.id;

  const { payment } = useSelector((state) => state);

  const handlePayment = () => {
    const payload = {
      api_dateFrom,
      api_dateTo,
      id_car,
      bank
    }
    dispatch(UploadPayment(payload));
  }

  if(!!payment.paymentUpload.id){
    navigate(`/konfirmasi-pembayaran/${payment.paymentUpload.id}`);
  }

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
                    <input type="radio" name="bank" onClick={() => setBank('bca')} />
                    <label>
                      <div>BCA</div>
                      BCA Transfer
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="bank" onClick={() => setBank('bni')} />
                    <label>
                      <div>BNI</div>
                      BNI Transfer
                    </label>
                  </li>
                  <li>
                    <input type="radio" name="bank" onClick={() => setBank('mandiri')} />
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
                  {car.name}
                </p>
                <p className="car-category">
                  <i className="fa-solid fa-user-group"></i> {car.category}
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
                            <p>Rp. {formatRupiah(car.price*totHarga)}</p>
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
                              <p>Sewa Mobil Rp. {formatRupiah(car.price)} x {totHarga} Hari</p>
                              <p>Rp. {formatRupiah(car.price*totHarga)}</p>
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
                    Rp. {formatRupiah(car.price*totHarga)}
                  </p>
                </div>
                <div className="lanjut-button">
                  <button onClick={handlePayment}>Lanjutkan Pembayaran</button>
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
