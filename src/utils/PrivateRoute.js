import {Outlet, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children}) => {
    
    const auth = useSelector((state) => state.auth.authStatus)
   
    if ((auth === true)) {
        return children
    } else {
       return  (<Navigate to="/auth" replace={true}/>)
    }
}

export default PrivateRoute