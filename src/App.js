import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

import {Route, Routes} from 'react-router-dom'

import UserPage from './pages/UserPage/UserPage';

import PrivateRoute from './utils/PrivateRoute';




function App() {


  return (
    <div classNameName="App">
           
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />

          <Route  path='/auth' element={<LoginPage/>}/>
          <Route  path='/registration' element={<RegistrationPage />}/>

        
        
      </Routes>
    </div>
  )
}

export default App;
