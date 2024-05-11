import React from 'react';
import './DropDownMenu.css'

import { useNavigate } from "react-router-dom";
import { changeAuthStatus } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux';


export default function DropDownMenu(props)  {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    function clickButtonLoginLogout() {
        dispatch(changeAuthStatus(false))
        return navigate('/auth')
    }
    
        return (             
        <div className="dropDownMenu">
            <div className="dropDownMenu_positions">
                {/* <div className="dropDownMenu_positions-elem">Статистика</div> */}
                {/* <div className="dropDownMenu_positions-elem">Профиль</div> */}
                <div className="dropDownMenu_positions-elem" onClick={clickButtonLoginLogout}>Выйти из аккаунта</div>
            </div>
        </div>
        )
}

// dispatch(changeAuthStatus(true))
//                 return navigate('/')