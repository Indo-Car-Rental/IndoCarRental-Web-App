import React from "react";
import { Button, Label, Input, FormGroup, Form, FormText, Col, Placeholder } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Formaddnewcar/style.css'

const Formaddnewcar = () => {

  return (
    <div>
      <div>
        <nav aria-label="breadcrumbs" class="rank-math-breadcrumb">
          <a href="" class="cars">Cars</a>
          <span class="separator"> > </span>
          <a href="" class="list-car">List Car</a>
          <span class="separator"> > </span>
          <span class="last">Add New Car</span>
        </nav>
      </div>
      <div class="add-new-car">
        <p>Add New Car</p>
      </div>
      <div>
        <Form>
          <FormGroup row>
            <Label
              for="Nama/Tipe Mobil"
              sm={2}
            >
              Nama/Tipe Mobil
            </Label>
              <Col sm={10}>
                <Input
                  id="Input Mobil"
                  name="Input"
                  placeholder="Input Nama/Tipe Mobil"
                  type="Text"
                />
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="Harga"
              sm={2}
            >
              Harga
            </Label>
              <Col sm={10}>
                <Input
                  name="Harga"
                  placeholder="Input Harga Sewa Mobil"
                />
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="Input Foto"
              sm={2}
            >
              Foto
            </Label>
              <Col sm={10}>
                <Input
                  id="Input Foto"
                  name="Foto"
                  placeholder="Upload Foto Mobil"
                  type="File"
                />
                  <FormText>
                    File size max. 2MB
                  </FormText>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="Select"
              sm={2}
            >
              Kategori
            </Label>
              <Col sm={10}>
                <Input
                  id="Kategori"
                  name="select"
                  placeholder="Pilih Kategori Mobil"
                  type="select"
                >
                  <option>Avanza</option>
                  <option>Xenia</option>
                  <option>Innova</option>
                  <option>Agya</option>
                  <option>Ayla</option>
                </Input>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              Created at
            </Label>
              <Col sm={10}>
                <p>-</p>
              </Col>
          </FormGroup>
          <FormGroup row>
            <Label
              for="exampleText"
              sm={2}
            >
              Updated at
            </Label>
              <Col sm={10}>
                <p>-</p>
              </Col>
          </FormGroup>
              <Button className="cancel">
                Cancel
              </Button>
              <Button className="save">
                Save
              </Button>
        </Form>
      </div>
    </div>
    )
}

export default Formaddnewcar;