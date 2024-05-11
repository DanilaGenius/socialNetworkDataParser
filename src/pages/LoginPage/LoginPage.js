import React from 'react';
//! import {useState, useEffect} from 'react';
import './LoginPage.css';
import loginToAccount from '../../modules/auth/loginToAccount';
import { useNavigate, NavLink } from "react-router-dom";
import { changeAuthStatus } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux';
import {useRef} from 'react';

export default function LoginPage()  {
        const authStatus = useSelector((state) => state.auth.authStatus)
        const dispatch = useDispatch()
        const inputLogin = useRef(null);
        const inputPassword = useRef(null);
        const navigate = useNavigate();

        //! const [data, setData] = useState(null)
        //! useEffect(() => {
        //!     fetch('/userbase')
        //!     .then(res => res.json())
        //!     .then(res => setData(res))
        //! }, [])

        async function clickButtonLogin() {
            const login = inputLogin.current.value;
            const password = inputPassword.current.value;
            
            
            const access = await loginToAccount(login,password)
            
            if (access) {
                dispatch(changeAuthStatus(true))
                return navigate('/')
            } else {
                dispatch(changeAuthStatus('Неверный логин или пароль'))
 
            }
            
        }

        return (             
        <div  className="loginPage">
            <div  className="loginPage_content">
                <div  className="loginPage_container">
                    <div  className="loginPage_tabs">
                        <NavLink className="loginPage_tabs-tab" > 
                            Войти
                        </NavLink>
                        <NavLink  className="loginPage_tabs-tab" to='/registration'>
                            Создать аккаунт
                        </NavLink>
                    </div>

                    <div  className="loginPage_inputs">
                        <input  className="loginPage_inputs-input" type='text' placeholder='Никнейм или электронная почта' ref={inputLogin}></input>
                        <input  className="loginPage_inputs-input" type='password' placeholder='Пароль' ref={inputPassword}></input>
                    </div>

                    <div  className="loginPage_enter">
                        <button  className="loginPage_enter-btn" id='buttun-login' onClick={clickButtonLogin}>Войти</button>
                    </div>

                   
                    

                    <div  className="loginPage_futter">
                        <div  className="loginPage_futter-text">
                            Создавая аккаунт в “Название” вы соглашаетесь с пользовательским соглашением    
                        </div>
                    </div>

                    {
                    authStatus == 'Неверный логин или пароль' && 
                        <div  className="loginPage_error">
                            <div  className="loginPage_error-text">
                                Неверный логин или пароль
                            </div>
                        </div>
                    }

{
                    authStatus == 'Ваш аккаунт зарегистрирован пройдите авторизацию' && 
                        <div  className="loginPage_successfulReg">
                            <div  className="successfulReg-text">
                                 Ваш аккаунт зарегистрирован пройдите авторизацию
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        )
}

