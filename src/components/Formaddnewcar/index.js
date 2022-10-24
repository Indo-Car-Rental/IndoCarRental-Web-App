import React, { useState } from "react";
import {
  Button,
  Label,
  Input,
  FormGroup,
  Form,
  FormText,
  Col,
  Placeholder,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Formaddnewcar/style.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import NavbarAdmin from "../../components/NavbarAdmin";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const Formaddnewcar = () => {
  const { sideBar } = useSelector((state) => state);
  const page = "cars";
  const [namaMobil, setNamaMobil] = useState("");
  const [hargaMobil, setHargaMobil] = useState("");
  const [fotoMobil, setFotoMobil] = useState("");
  const [kategoriMobil, setKategoriMobil] = useState("");
  const [save, setSave] = useState("");
  const [error, setError] = useState("");

  const props = {
    page,
  };

  const handleNamaMobil = (e) => {
    setNamaMobil(e.target.value);
  };

  const handleHargaMobil = (e) => {
    setHargaMobil(e.target.value);
  };

  const handleFotoMobil = (e) => {
    setFotoMobil(e.target.files[0]);
  };

  const handleKategoriMobil = (e) => {
    if (e.target.value === "2-4 people") {
      setKategoriMobil("small");
    } else if (e.target.value === "4-6 people") {
      setKategoriMobil("medium");
    } else {
      setKategoriMobil("large");
    }
  };

  const handleAddNewCar = (e) => {
    e.preventDefault(namaMobil, hargaMobil, fotoMobil, kategoriMobil);

    let formData = new FormData();
    formData.append("image", fotoMobil);
    formData.append("name", fotoMobil.name);

    const payload = {
      namaMobil,
      hargaMobil,
      formData,
      kategoriMobil,
    };
    axios({
      method: "POST",
      url: "https://bootcamp-rent-cars.herokuapp.com/admin/car",
      data: {
        name: payload.namaMobil,
        category: payload.kategoriMobil,
        price: payload.hargaMobil,
        status: false,
        image: payload.formData,
      },
      headers: {
        access_token: localStorage.getItem("admin-token"),
      },
    })
      .then(function (res) {
        setSave(res.status);
        setError(null)
      })
      .catch(function (error) {
        setError(error);
      });
  };

  return (
    <div>
      <NavbarAdmin {...props} />
      <main className={!!sideBar.hideSideBar === true ? "fullwidth" : ""}>
        <div className="breadcrumb-wrapper">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/admin/cars">Cars</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/admin/cars">List Car</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Add New Car</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="content">
          <SectionTitle title={"Add New Car"} />
          <div>
            <Form>
              <FormGroup row>
                <Label for="Nama/Tipe Mobil" sm={2}>
                  Nama/Tipe Mobil
                </Label>
                <Col sm={10}>
                  <Input
                    id="Input Mobil"
                    name="Input"
                    placeholder="Input Nama/Tipe Mobil"
                    type="Text"
                    onChange={(e) => handleNamaMobil(e)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Harga" sm={2}>
                  Harga
                </Label>
                <Col sm={10}>
                  <Input
                    name="Harga"
                    placeholder="Input Harga Sewa Mobil"
                    onChange={(e) => handleHargaMobil(e)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Input Foto" sm={2}>
                  Foto
                </Label>
                <Col sm={10}>
                  <Input
                    id="Input Foto"
                    name="Foto"
                    placeholder="Upload Foto Mobil"
                    type="File"
                    onChange={(e) => handleFotoMobil(e)}
                  />
                  <FormText>File size max. 2MB</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Select" sm={2}>
                  Kategori
                </Label>
                <Col sm={10}>
                  <Input
                    id="Kategori"
                    name="select"
                    placeholder="Pilih Kategori Mobil"
                    type="select"
                    onChange={(e) => handleKategoriMobil(e)}
                  >
                    <option>2-4 people</option>
                    <option>4-6 people</option>
                    <option>6-8 people</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>
                  Created at
                </Label>
                <Col sm={10}>
                  <p>-</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={2}>
                  Updated at
                </Label>
                <Col sm={10}>
                  <p>-</p>
                </Col>
                {!!save && <div className="alert alert-success">Berhasil Ditambah</div>}
                {!!error && <div className="alert alert-danger">Error</div>}
              </FormGroup>
              <Button className="cancel" onclick="history.back()">
                Cancel
              </Button>
              <Button className="save" onClick={handleAddNewCar}>
                Save
              </Button>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Formaddnewcar;
