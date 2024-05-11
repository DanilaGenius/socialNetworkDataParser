import {Outlet, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    
    const auth = useSelector((state) => state.auth.authStatus)
    return (
        (auth === true) ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoute