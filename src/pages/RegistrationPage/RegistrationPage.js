import React from 'react';
import './RegistrationPage.css'
import addDataInUsersBase from '../../modules/auth/saveDataInUsersBase';
import { useNavigate, NavLink } from "react-router-dom";
import { changeAuthStatus } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux';
import {useRef} from 'react';


export default function RegistrationPage()  {

        const inputLogin = useRef(null);
        const inputPassword = useRef(null);
        const inputEmail = useRef(null);
        const inputPhone = useRef(null)
        const navigate = useNavigate();
        const dispatch = useDispatch()

        function clickButtonRegistration(event) {
            event.preventDefault();
            const login = inputLogin.current.value;
            const password = inputPassword.current.value;
            const email = inputEmail.current.value;
            const phone = inputPhone.current.value;

            const userObj = {
                    login: login,
                    password: password,
                    email: email,
                    phone: phone, 
            }


            addDataInUsersBase(userObj)
            dispatch(changeAuthStatus('Ваш аккаунт зарегистрирован пройдите авторизацию'))
            
            return navigate('/auth')
      
        }

        return (             
        <div  className="RegistrationPage">
            <div  className="RegistrationPage_content">
                <div  className="RegistrationPage_container">
                    <div  className="RegistrationPage_tabs">
                        <NavLink  className="RegistrationPage_tabs-tab" to='/auth'>
                            Войти
                        </NavLink>
                        <NavLink  className="RegistrationPage_tabs-tab">
                            Создать аккаунт
                        </NavLink>
                    </div>

                    <form onSubmit={clickButtonRegistration} method='post' action='/userbase'>
                        <div  className="RegistrationPage_inputs" >
                            <input  className="RegistrationPage_inputs-input" type='text' placeholder='Введите никнейм' ref={inputLogin}></input>
                            <input  className="RegistrationPage_inputs-input" type='password' placeholder='Введите пароль' ref={inputPassword}></input>
                            <input  className="RegistrationPage_inputs-input" type='email' placeholder='Электронная почта' ref={inputEmail}></input>
                            <input  className="RegistrationPage_inputs-input" type='tel' placeholder='Введите номер телефона' ref={inputPhone}></input>
                            
                        </div>

                        <div  className="RegistrationPage_enter">
                            <input  className="RegistrationPage_enter-btn" type='submit' id='buttun-registration' value="Создать" />
                        </div>
                    </form>

                    <div  className="RegistrationPage_futter">
                        <div  className="RegistrationPage_futter-text">
                            Создавая аккаунт в “Название” вы соглашаетесь с пользовательским соглашением    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}