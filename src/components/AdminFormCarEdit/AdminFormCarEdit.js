import "./style.scss"
import { FormGroup, Label, Input, Button, Col, Form, FormText } from "reactstrap"
import { useEffect,useState } from 'react'
import { useParams, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const AdminFormCarEdit = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [update, setUpdate] = useState('')
    const [namaMobil, setNamaMobil] = useState("")
    const [hargaMobil, setHargaMobil] = useState("")
    const [fotoMobil, setFotoMobil] = useState("")
    const [kategoriMobil, setKategoriMobil] = useState("")
    const [error, setError] = useState('')
    const accessToken = localStorage.getItem('admin-token') 
    // const optionCategory = [
    //     {value: 'small', label: 'Small (2 - 4 Orang)'},
    //     {value: 'medium', label: 'Medium (6 - 8 Orang)'},
    //     {value: 'large', label: 'Large (10 - 16 Orang)'},
    // ]
    // console.log(optionCategory)
    // console.log('INI ID', id)

    // const [editCarFormData, setEditCarFormData] = useState({
    //     name: '',
    //     price: '',
    //     image: '',
    //     category: ''
    // })

    const navigate = useNavigate()
    
    useEffect(() => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, {
            headers: {
                "access_token": accessToken
            }
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    },[])

    // function changeField(e){
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     let formObject = { ...editCarFormData };
    //     setEditCarFormData({ ...formObject, [name]: value });
    // }

    // const handleUpdateCar = (e) => {
    //     e.preventDefault()
    //     const payload = {
    //         name: '',
    //         price: '',
    //         image: '',
    //         category: ''
    //     }

    //     axios
    //     .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, {
    //         payload,
    //         headers: {
    //             "access_token": accessToken
    //         }
    //     })
    //     .then((response) => {
    //         setUpdate(response.data)
    //         setTimeout(() => {
    //             navigate('/admin/cars')
    //         }, 3000)
    //     })
    //     .catch((message) => {
    //         setError(message)
    //         //console.log(error)
    //     })
    // }


    const handleNamaMobil = (e) => {
        setNamaMobil(e.target.value);
    };
    
    const handleHargaMobil = (e) => {
        setHargaMobil(e.target.value);
    };
    
    const handleFotoMobil = (e) => {
        console.log('FOTO MOBIL', e.target.files[0])
        setFotoMobil(URL.createObjectURL(e.target.files[0]))
        console.log(URL.createObjectURL(e.target.files[0]))
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
    
    const handleUpdateCar = (e) => {
        e.preventDefault(namaMobil, hargaMobil, fotoMobil, kategoriMobil);

        let formDataFoto = new FormData();
        formDataFoto.append("image", fotoMobil)
        formDataFoto.append("name", fotoMobil.name)

        const payload = {
            namaMobil,
            hargaMobil,
            formDataFoto,
            kategoriMobil,
        };
        axios({
            method: "PUT",
            url: `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
            data: {
                name: payload.namaMobil,
                category: payload.kategoriMobil,
                price: payload.hargaMobil,
                status: false,
                image: payload.formDataFoto,
            },
            headers: {
                access_token: localStorage.getItem("admin-token"),
            },
        })
        .then(function (res) {
            setUpdate(res.status)
            setTimeout(() => {
                navigate('/admin/cars')
            }, 3000)
            setError(null)
        })
        .catch(function (error) {
            setError(error);
        });
    };

    

    return ( 
        
        <div className="formEdit">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-wrap">
                        <div className="form-white-box">
                            {!!update && <div className="alert alert-success">Data berhasil diupdate! </div>}
                            {!!error && <div className="alert alert-danger">{error.message} </div>}
                            <div className="row">
                                <div className="col-md-6">
                                    <FormGroup row>
                                        <Label for="name" sm={3}>Nama <span className="text-danger">*</span></Label>
                                        <Col sm={9}>
                                            <Input
                                                id="name"
                                                name="nama"
                                                placeholder="Nama Mobil"
                                                type="text"
                                                defaultValue={data.name}
                                                onChange={(e) => handleNamaMobil(e)}
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
                                                onChange={(e) => handleHargaMobil(e)}
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
                                                onChange={(e) => handleFotoMobil(e)}
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
                                                defaultValue={data.category}
                                                onChange={(e) => handleKategoriMobil(e)}
                                            >
                                                <option>2-4 people</option>
                                                <option>4-6 people</option>
                                                <option>6-8 people</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row> 
                                        <Label for="created" sm={3}>Created At :</Label>
                                        <Col sm={9} className="mt-2">{data.createdAt}</Col>
                                    </FormGroup>

                                    <FormGroup row> 
                                        <Label for="updated" sm={3}>Updated At: </Label>
                                        <Col sm={9} className="mt-2">{data.updatedAt}</Col>
                                    </FormGroup>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-car">
                                        {/* <img 
                                            name="uploadMobil"
                                            src={data.image}
                                        /> */}
                                        {!!fotoMobil ? (
                                            <>
                                                <img src={fotoMobil} />
                                            </>
                                            ) : (
                                            <>
                                                <img src={data.image} />
                                            </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="submitBtn">
                            <FormGroup>
                                <Button color="primary" outline href="/admin/cars">Cancel</Button> &nbsp;
                                <Button color="primary" onClick={handleUpdateCar}>Save</Button>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
 
export default AdminFormCarEdit;