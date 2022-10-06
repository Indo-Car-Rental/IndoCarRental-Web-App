import "./style.scss"
import { FormGroup, Label, Input, Button, Col, Form, FormText } from "reactstrap"

const EditCar = () => {
    return (
        <div className="formEdit">
            <div className="row">
                <Col md={6}>
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Nama <span className="text-danger">*</span></Label>
                            <Col sm={10}>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Nama Mobil"
                                    type="text"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="price" sm={2}>Harga <span className="text-danger">*</span></Label>
                            <Col sm={10}>
                                <Input
                                    id="price"
                                    name="price"
                                    placeholder="Harga Mobil"
                                    type="text"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="uploadMobil" sm={2}>Foto</Label>
                            <Col sm={10}>
                                <Input
                                    id="uploadMobil"
                                    name="uploadMobil"
                                    type="file"
                                />
                                <FormText>File size max 2MB</FormText>
                            </Col>
                        </FormGroup>

                        <FormGroup row> 
                            <Label for="kategori" sm={2}>Kategori</Label>
                            <Col sm={10}>
                                <Input
                                    id="kategori"
                                    name="kategori"
                                    type="select"
                                >
                                    <option>2 - 4 Orang</option>
                                    <option>6 - 8 Orang</option>
                                    <option>10 - 16 Orang</option>
                                </Input>
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
                                Submit
                            </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </div>
        </div>
    );
}
 
export default EditCar;