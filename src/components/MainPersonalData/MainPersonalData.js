import React from 'react';
import './MainPersonalData.css'



export default function MainmainPersonalData()  {
        
        return (             
        <div  className="mainPersonalData">
            <div className='mainPersonalData_block'>
                <div  className="mainPersonalData_title">
                        <div  className="mainPersonalData_title-text">Основная информация</div>
                        {/* <div  className="mainPersonalData_title-edit">Редактировать</div> */}
                </div>
                
                <div  className="mainPersonalData_info">
                        <div  className="mainPersonalData_info-key">ID</div>
                        <div  className="mainPersonalData_info-value">37589023</div>
                        {/* <div  className="mainPersonalData_info-copy">V</div> */}
                </div>

                <div  className="mainPersonalData_info">
                        <div  className="mainPersonalData_info-key">Никнейм</div>
                        <div  className="mainPersonalData_info-value">Danila Stukach</div>
                        <div  className="mainPersonalData_info-copy"></div>
                </div>

                <div  className="mainPersonalData_info">
                        <div  className="mainPersonalData_info-key">Дата регистрации</div>
                        <div  className="mainPersonalData_info-value">16.05.2023</div>
                        <div  className="mainPersonalData_info-copy"></div>
                </div>
            </div>

            <div className='mainPersonalData_block'>
                <div  className="mainPersonalData_title">
                        <div  className="mainPersonalData_title-text">Адрес электронной почты</div>
                        {/* <div  className="mainPersonalData_title-edit">Редактировать</div> */}
                </div>

                <div  className="mainPersonalData_info">
                        <div  className="mainPersonalData_info-key">Электронная почта</div>
                        <div  className="mainPersonalData_info-value">Example@mail.com</div>
                        {/* <div  className="mainPersonalData_info-mark">V</div> */}
                </div>
            </div>

            {/* <div className='mainPersonalData_block'>
                <div  className="mainPersonalData_title">
                        <div  className="mainPersonalData_title-text">Адрес электронной почты</div>
                        
                </div>

                <div  className="mainPersonalData_title">
                        
                        <div  className="mainPersonalData_title-edit">Изменить</div>
                </div>
                </div> */}

        </div>
        )
}