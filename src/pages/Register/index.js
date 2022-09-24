import "./style.scss"
import { FormGroup, Label, Input, Button } from "reactstrap"
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleEmail = (e) => {
        //console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        //console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(email, password)
        const payload = {
            email: email,
            password: password
        }

        axios
        .post('https://bootcamp-rent-car.herokuapp.com/customer/auth/register', payload)
        .then((response) => {
            setRole(response.data)
            navigate('/')
        })
        .catch((message) => {
            setError(message)
            console.log(message)
        })
    }

    return (  
        <div className="register-wrap">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left">
                        <div className="form-left-wrap">
                            <h4 className="mb-5">Sign Up</h4>
                            {!!role && <div className="alert alert-success">Registrasi Berhasil</div>}
                            {
                                !!error && <div className="alert alert-danger">{error.message} </div>
                            }
                            <FormGroup>
                                <Label for="Email">
                                    Email :
                                </Label>
                                <Input
                                    onChange={(e) => handleEmail(e)} 
                                    type="email" 
                                    placeholder='example: youremail@mail.com'
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">
                                    Password :
                                </Label>
                                <Input
                                    onChange={(e) => handlePassword(e)}  
                                    type="password" 
                                    placeholder='type your password'
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={handleRegister} block className="mt-5 btn-cta-blue">Register</Button>
                            </FormGroup>
                            <p>Already have an account? <a href="#">Sign In here</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right">
                        <h1>Indo Car Rental</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Register;