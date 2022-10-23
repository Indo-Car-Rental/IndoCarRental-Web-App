import "./style.scss"
import { FormGroup, Label, Input, Button, Col, Form, FormText } from "reactstrap"
import { useEffect,useState } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios'

const AdminFormCarEdit = () => {
    const { id } = useParams()
    const [data, setData] = useState([]) 

    console.log('INI ID', id)
    
    useEffect(() => {
        const accessToken = localStorage.getItem('admin-token')
        
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, {
            headers: {
                "access_token": accessToken
            }
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    },[])

    return ( 
        
        <div className="formEdit">
            
           
            <div className="row">
                <div className="col-md-12">
                    <div className="form-wrap">
                        <div className="form-white-box">
                            <div className="row">
                                <div className="col-md-6">
                                    <FormGroup row>
                                        <Label for="name" sm={3}>Nama <span className="text-danger">*</span></Label>
                                        <Col sm={9}>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Nama Mobil"
                                                type="text"
                                                defaultValue={data.name}
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="price" sm={3}>Harga <span className="text-danger">*</span></Label>
                                        <Col sm={9}>
                                            <Input
                                                id="price"
                                                name="price"
                                                placeholder="Harga Mobil"
                                                type="text"
                                                defaultValue={data.price}
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="uploadMobil" sm={3}>Foto</Label>
                                        <Col sm={9}>
                                            <Input
                                                id="uploadMobil"
                                                name="uploadMobil"
                                                type="file"
                                            />
                                            <FormText>File size max 2MB</FormText>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row> 
                                        <Label for="kategori" sm={3}>Kategori</Label>
                                        <Col sm={9}>
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

                                    <FormGroup row> 
                                        <Label for="created" sm={3}>Created At :</Label>
                                        <Col sm={9}></Col>
                                    </FormGroup>

                                    <FormGroup row> 
                                        <Label for="updated" sm={3}>Updated At: </Label>
                                        <Col sm={9}></Col>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>

                        <div className="submitBtn">
                            <FormGroup>
                                <Button color="primary" outline>Cancel</Button> &nbsp;
                                <Button color="primary">Save</Button>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
  
        </div>  
    )
}
 
export default AdminFormCarEdit;