import axios from 'axios';
import { Alert } from 'reactstrap';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const navigate = useNavigate();

    const redirect = useCallback(
        () => navigate("/admin/dashboard", { replace: true }),
        [navigate]
        );

        useEffect(() => {
        const checkIfLogin = () => {
            const token = localStorage.getItem("admin-token");
            if (!token) return;
            redirect();
        };
        checkIfLogin();
    }, [redirect]);

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleSignIn = (e) =>{
        e.preventDefault(email, password);

        const payload = {
            email,
            password
        }

        axios({
            method: 'post',
            url: 'https://bootcamp-rent-car.herokuapp.com/admin/auth/login',
            data: payload
          })
          .then(function (res) {
            if(res.status === 201){
                localStorage.setItem('admin-token', res.data.access_token);
                navigate("/admin/dashboard");
            }
          })
          .catch(function (error) {
            if(error.response.status === 400){
                setAlert(error.response.data.message);
            }else if(error.response.status === 404){
                setAlert(error.response.data.message);
            }else{
                setAlert(error.response.data.message);
            }
          });
    }

    return (
        <section id="adminLogin">
            <div className="wrapper">
                <div className="col-12 col-md-12 col-lg-8 bg-car">
                </div>
                <div className="col-12 col-md-12 col-lg-4 form-login">
                    <div className='form-login-wrapper'>
                        <div className='logo'></div>
                        <div>
                            <h1>Welcome, Admin BCR</h1>
                        </div>
                        {!!alert &&(
                            <Alert color='danger'>
                                {alert}
                            </Alert>
                        )}
                        <div className='form-input'>
                            <label>Email</label>
                            <input type="text" placeholder='Contoh: johndee@gmail.com' onChange={(e) => handleEmail(e)} />
                        </div>
                        <div className='form-input'>
                            <label>Password</label>
                            <input type="password" placeholder='6+ karakter' onChange={(e) => handlePassword(e)} />
                        </div>
                        <div className='btn-login'>
                            <button onClick={handleSignIn}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default AdminLogin;