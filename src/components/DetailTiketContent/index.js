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
import { useSelector } from "react-redux";
import tiketPDF from './../../assets/e-ticket.pdf';

const DetailTiketContent = (props) => {
  const {id_order} = props;
  const { payment } = useSelector((state) => state);

  const handleDownloadTiket = () =>{
    fetch(tiketPDF).then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = tiketPDF;
            alink.click();
        })
    })
  }

  return (
    <section id="detailpaymentupload">
      <Container>
        <Row>
          <div className="wrapper d-flex flex-column flex-lg-row">
            <div className="desc col-12 col-lg-6 offset-lg-3 text-center title-tiket">
                <i className="fa-solid fa-circle-check"></i>
                <h1>Pembayaran Berhasil!</h1>
                <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
            </div>
          </div>
          <div className="wrapper d-flex flex-column flex-lg-row">
            <div className="desc col-12 col-lg-6 offset-lg-3">
              <div className="wrapper invoice-wrapper">
                <div className="title-invoice">
                    <div>
                        <strong>
                            <p>Invoice</p>
                        </strong>
                        <p>*No Invoice : {id_order}</p>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-primary btn-download" onClick={handleDownloadTiket}>
                            <i className="fa-solid fa-download"></i> Unduh
                        </button>
                    </div>
                </div>
                <div>
                  <iframe src={`${tiketPDF}#toolbar=0`} className="pdf-review"></iframe>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default DetailTiketContent;
