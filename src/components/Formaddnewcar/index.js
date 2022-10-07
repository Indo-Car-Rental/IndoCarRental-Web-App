import React from "react";
import { Button, Label, Input, FormGroup, Form, FormText, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Formaddnewcar/style.css'
import { FiUpload } from "react-icons/fi"

const Formaddnewcar = () => {

  return (
    <div>
      <div>
        <p>breadcrumb</p>
      </div>
      <div>
        <h3>Add New Car</h3>
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
            for="exampleSelect"
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
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label
            for="exampleText"
            sm={2}
          >
          Text Area
          </Label>
            <Col sm={10}>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
              />
            </Col>
        </FormGroup>
        <FormGroup
          check
          row
        >
          <Col
            sm={{
            offset: 2,
            size: 10
            }}
          >
            <Button>
              Cancel
            </Button>
            <Button>
              Submit
            </Button>
          </Col>
        </FormGroup>
    </Form>
  </div>
</div>
    )
}

export default Formaddnewcar;