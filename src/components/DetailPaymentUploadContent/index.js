import { useState } from "react";
import {
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Col
} from "reactstrap";
import "./style.scss";
import Countdown from 'react-countdown';
import { uploadBuktiPembayaran } from "../../redux/actions/paymentAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DetailPaymentUploadContent = (props) => {
  const {formatRupiah, id_order, dataOrder} = props;
  const [copyNoRek, setCopyNoRek] = useState(false);
  const [copyTotalPrice, setCopyTotalPrice] = useState(false);
  const [activeTab, setActiveTab] = useState('1');
  const [uploadComponent, setUploadComponent] = useState(false);
  const [fileUpload, setFileUpload] = useState();
  const [files, setFiles] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { payment } = useSelector((state) => state);

  const handleCopyNoRek = (param) => {
    navigator.clipboard.writeText(param);

    setCopyNoRek(!copyNoRek);
    setTimeout(() => {
      setCopyNoRek(false);
    }, 1000);
  }

  const handleCopyTotalPrice = (param) => {
    navigator.clipboard.writeText(param);

    setCopyTotalPrice(!copyTotalPrice);
    setTimeout(() => {
      setCopyTotalPrice(false);
    }, 1000);
  }

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <div className="react-countdown">
        <span>{hours}</span>
        <span>{minutes}</span>
        <span>{seconds}</span>
      </div>
    )
  }
  const rendererUpload = ({ minutes, seconds }) => {
    return (
      <div className="react-countdown-upload">
        <span>{minutes}</span>
        <span>{seconds}</span>
      </div>
    )
  }

  const handleUploadComponent = () => {
    setUploadComponent(true);
  }

  const handleImageUpload = (e) => {
    e.preventDefault();
    setFileUpload(URL.createObjectURL(e.target.files[0]));
    setFiles(e.target.files[0]);
  }

  const total_harga = props.dataOrder.total_price;
  const format_total_harga = formatRupiah(!!total_harga ? total_harga : 0);

  const handleUploadBukti = () =>{
    let formData = new FormData();
		formData.append('slip', files);

    const payload = {
      formData
    }

    dispatch(uploadBuktiPembayaran(payload, id_order));
    navigate(`/tiket/${id_order}`);
  }

  console.log(dataOrder);

  return (
    <section id="detailpaymentupload">
      <Container>
        <Row>
          <div className="wrapper d-flex flex-column flex-lg-row">
            <div className="desc col-12 col-lg-7">
              <div className="wrapper countdown-wrapper">
                <div>
                  <strong>
                    <p>Selesaikan Pembayaran Sebelum</p>
                  </strong>

                  <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                </div>
                <Countdown 
                  date={Date.now() + 86400000} 
                  renderer={renderer}
                />
              </div>
              <div className="wrapper bank-wrapper">
                <strong>
                  <p>Lakukan Transfer Ke</p>
                </strong>

                <div className="bank-title">
                    <div className='text-capitalize'>{props.bank}</div>
                    <div>
                        <p>{(<><span className='text-capitalize'>{props.bank}</span> Transfer</>)}</p>
                        <p>a.n Binar Car Rental</p>
                    </div>
                </div>
                <div className="input-copy">
                    <div className="input-copy-wrapper">
                        <p>Nomor Rekening</p>
                        <div className="copy">
                          <input type="text" value="54104257877" disabled />
                          <i className="fa-regular fa-copy" onClick={() => handleCopyNoRek(54104257877)}>
                            {!!copyNoRek &&(<p className="copy-text">tersalin</p>)}
                          </i>
                        </div>
                    </div>
                    <div className="input-copy-wrapper">
                        <p>Total Bayar</p>
                        <div className="copy">
                          <input type="text" value={'Rp. '+format_total_harga} disabled />
                          <i className="fa-regular fa-copy" onClick={() => handleCopyTotalPrice(total_harga)}>
                            {!!copyTotalPrice &&(<p className="copy-text">tersalin</p>)}
                          </i>
                        </div>
                    </div>
                </div>
              </div>
              <div className="wrapper instruction-wrapper">
                <strong>
                  <p>Intruksi Pembayaran</p>
                </strong>

                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        ATM BCA
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        M-BCA
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        BCA Klik
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                        Internet Banking
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <ul>
                        <li>Masukkan kartu ATM, lalu PIN</li>
                        <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                        <li>
                            Masukkan nomor BCA Virtual Account: 70020+Order ID<br />
                            Contoh:<br />
                            No. Peserta: 12345678, maka ditulis 7002012345678
                        </li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    </TabPane>
                    <TabPane tabId="2">
                      <ul>
                        <li>Buka M-BCA</li>
                        <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                        <li>
                            Masukkan nomor BCA Virtual Account: 70020+Order ID<br />
                            Contoh:<br />
                            No. Peserta: 12345678, maka ditulis 7002012345678
                        </li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    </TabPane>
                    <TabPane tabId="3">
                      <ul>
                        <li>Buka BCA Klik</li>
                        <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                        <li>
                            Masukkan nomor BCA Virtual Account: 70020+Order ID<br />
                            Contoh:<br />
                            No. Peserta: 12345678, maka ditulis 7002012345678
                        </li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    </TabPane>
                    <TabPane tabId="4">
                      <ul>
                        <li>Buka Internet Banking</li>
                        <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                        <li>
                            Masukkan nomor BCA Virtual Account: 70020+Order ID<br />
                            Contoh:<br />
                            No. Peserta: 12345678, maka ditulis 7002012345678
                        </li>
                        <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
            <div className="desc-img col-12 col-lg-5">
              <div className="wrapper wrapper-upload">
                {!uploadComponent ? (
                  <>
                    <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                  <div className="lanjut-button">
                    <button onClick={handleUploadComponent}>Konfirmasi Pembayaran</button>
                  </div>
                  </>
                ) : (
                  <>
                    <Countdown
                      date={Date.now() + 600000} 
                      renderer={rendererUpload}
                    />
                    <strong>
                      <p>Konfirmasi Pembayaran</p>
                    </strong>

                    <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                    
                    <p className="title-upload">Upload Bukti Pembayaran</p>
                    <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                    <div className="input-upload-wrapper">
                      <div className="form-input-upload">
                        {!!fileUpload ? (
                          <>
                            <img src={fileUpload} />
                          </>
                        ) : (
                          <>
                            <i className="fa-regular fa-image"></i>
                            <input type="file" onChange={handleImageUpload} />
                          </>
                        )
                        }
                      </div>
                    </div>
                    {!!fileUpload && (
                        <div className="lanjut-button">
                          <button onClick={handleUploadBukti}>Upload</button>
                        </div>
                    )}
                  </>
                )}
                
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default DetailPaymentUploadContent;
