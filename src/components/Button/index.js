import './style.scss';
import { Link } from "react-router-dom";

const ButtonCTA = () => {
    return (
        <div>
            <Link to='/carimobil' className='btn btn-cta btn-success'>Mulai Sewa Mobil</Link>
        </div>
     );
}

export default ButtonCTA;