import "./style.scss"
import { FormGroup, Label, Input, Button } from "reactstrap"
import axios from 'axios'
import { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom"


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState('')

    //CONFIRM PASSWORD
    const [cPassword, setCPassword] = useState('')
    const [cPasswordClass, setCPasswordClass] = useState('form-control')
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    const handleEmail = (e) => {
        //console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        //console.log(e.target.value)
        setPassword(e.target.value)
    }

    //CONFIRM PASWORD
    useEffect(() => {
        if (password === cPassword) {
            setShowErrorMessage(false)
            setCPasswordClass('form-control is-valid')
        } else {
            setShowErrorMessage(true)
            setCPasswordClass('form-control is-invalid')
        }
    }, [cPassword])

    const handleCPassword = (e) => {
        setCPassword(e.target.value)
        setIsCPasswordDirty(true)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(email, password)
        const payload = {
            email: email,
            password: password
        }

        axios
        .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register', payload)
        .then((response) => {
            setRole(response.data)
            setTimeout(() => {
                navigate('/login')
            }, 3000)
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
                            {!!error && <div className="alert alert-danger">{error.message} </div>}
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
                                    placeholder='Type your password min 6 character'
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirm-password">
                                    Confirm Password :
                                </Label>
                                <Input
                                    type="password"
                                    className={cPasswordClass}
                                    onChange={(e) => handleCPassword(e)}  
                                    placeholder='Retype your password'
                                    required
                                />
                                {showErrorMessage && isCPasswordDirty ? <p className="small text-danger mt-2"> Password tidak cocok! </p> : ''}
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
 
export default memo(Register);