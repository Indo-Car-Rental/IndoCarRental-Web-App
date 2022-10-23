import './style.scss';
import { Link } from "react-router-dom";

const ButtonLogin = () => {
    return (
        <div className='button-login-customer'>
            <Link to='/login' className='btn btn-login btn-success'>Login</Link>
        </div>
     );
}

export default ButtonLogin;