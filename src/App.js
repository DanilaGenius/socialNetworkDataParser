import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import AuthorizedRouter from './utils/AuthorizedRouter';
import {Route, Routes} from 'react-router-dom'

import UserPage from './pages/UserPage/UserPage';

import PrivateRoute from './utils/PrivateRoute';




function App() {


  return (
    <div classNameName="App">
           
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route  path='/' element={<UserPage />}/>
        </Route>
        {/* <Route element={<AuthorizedRouter />}> */}
          <Route  path='/auth' element={<LoginPage/>}/>
          <Route  path='/registration' element={<RegistrationPage />}/>
        {/* </Route> */}
        
        
      </Routes>
    </div>
  )
}

export default App;
