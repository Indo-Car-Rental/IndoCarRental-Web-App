import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import "./style.scss";
import "rsuite/styles/index.less";
import CalendarRange from "../CalendarRange/CalendarRange";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { datePayment } from "../../redux/actions/paymentAction";

const CarDetail = (props) => {
  const { car, formatRupiah, checkCustomerLogin } = props;
  const [tanggal, getTanggal] = useState(false);
  const [totHarga, getTotHarga] = useState(1);
  const [dateRange, setDateRange] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e == null) {
      getTanggal(false);
      getTotHarga(1);
    } else {
      getTanggal(true);
      const diffDays = parseInt((e[1] - e[0]) / (1000 * 60 * 60 * 24), 10) + 1;
      getTotHarga(diffDays);
      setDateRange(e);
    }
    // console.log(e[0]);
    // console.log(e[1]);

    // console.log(diffDays);
  };

  // const [time, setTime] = useState(value);

  const navigate = useNavigate();

  const handlePembayaran = () => {
    const payload = {
      dateRange,
      car,
      totHarga
    }
    dispatch(datePayment(payload));
    navigate('/pembayaran');
  }

  return (
    <section id="cardetail">
      <Container>
        <Row>
          <div className="wrapper d-flex flex-column-reverse flex-lg-row">
            <div className="desc col-12 col-lg-7">
              <div className="wrapper">
                <strong>
                  <p>Tentang Paket</p>
                </strong>

                <strong>
                  <p>Include</p>
                </strong>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>

                <strong>
                  <p>Exclude</p>
                </strong>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>

                <UncontrolledAccordion defaultOpen="1">
                  <AccordionItem>
                    <AccordionHeader targetId="1">
                      <strong>
                        <p>Refund, Reschedule, Overtime</p>
                      </strong>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>
                          Jika overtime lebih dari 12 jam akan ada tambahan
                          biaya Rp 20.000/jam
                        </li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </AccordionBody>
                  </AccordionItem>
                </UncontrolledAccordion>
              </div>
            </div>
            <div className="desc-img col-12 col-lg-5">
              <div className="wrapper">
                {!!Object.keys(car).length && (
                  <>
                    <div className="car-img">
                      <img
                        src={
                          !!car.image
                            ? car.image
                            : "https://img.freepik.com/premium-vector/modern-car-silhouette-illustration-vector-design_500890-234.jpg?w=600"
                        }
                      />
                    </div>
                    <p className="car-name">
                      {!!car.name || car.name === "" ? car.name : "Mobil"}
                    </p>
                    <p className="car-category">
                      <i className="fa-solid fa-user-group"></i>{" "}
                      {!!car.category ? car.category : "Kategori"}
                    </p>
                    {!!checkCustomerLogin &&(
                      <div className="calendar">
                        <p>Tentukan lama sewa mobil (max. 7 hari)</p>
                        <CalendarRange handleClick={handleClick} />
                      </div>
                    )}
                    <div className="car-price">
                      <p>Total</p>
                      <p>
                        Rp{" "}
                        {formatRupiah(!!car.price ? car.price * totHarga : 0)}
                      </p>
                    </div>
                    {!!checkCustomerLogin ? (
                    <div className="lanjut-button">
                      <button disabled={!tanggal ? 'disabled' : ''} onClick={handlePembayaran}>Lanjutkan Pembayaran</button>
                    </div>
                    ) : (
                      <div className="lanjut-button">
                        <Link to={'/login'}>
                          <button>Login untuk sewa mobil</button>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="btn-back d-flex justify-content-center mt-4">
            <Link to="/carimobil">
              <button className="btn btn-primary">
                <i className="fa-solid fa-arrow-left-long"></i> Back to Car List
              </button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CarDetail;
