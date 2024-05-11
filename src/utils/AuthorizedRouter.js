import {Outlet, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthorizedRouter = () => {
    
    const auth = useSelector((state) => state.auth.authStatus)
    return (
        !auth && <Navigate to="/auth" />
    )
}

export default AuthorizedRouter