import React from 'react';
import './MainOptions.css'



export default function MainOptions()  {
        
        return (             
        <div  className="mainOptions">
            <div className='mainOptions_block'>
                <div  className="mainOptions_title">
                        <div  className="mainOptions_title-text">Регион</div>
                </div>
                
                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">Язык</div>
                        <div  className="mainOptions_info-value">Россия</div>
                        <div  className="mainOptions_title-edit">Изменить</div>
                </div>

            </div>

            <div className='mainOptions_block'>
                <div  className="mainOptions_title">
                        <div  className="mainOptions_title-text">Привязать аккаунт</div>

                </div>

                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">YouTube</div>
                        <div  className="mainOptions_info-value">StukachDanila</div>
                        <div  className="mainOptions_info-disable">Отключить</div>
                </div>
                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">VK</div>
                        <div  className="mainOptions_info-value">StukachDanila</div>
                        <div  className="mainOptions_info-disable">Отключить</div>
                </div>
                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">Telegramm</div>
                        {/* <div  className="mainOptions_info-value">text</div> */}
                        <div  className="mainOptions_info-link">Подключить</div>
                </div>
                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">OK</div>
                        {/* <div  className="mainOptions_info-value">text</div> */}
                        <div  className="mainOptions_info-link">Подключить</div>
                </div>
            </div>

            <div className='mainOptions_block'>

                        <div  className="mainOptions_title">
                                <div  className="mainOptions_title-text">Доступные услуги</div>
                                <div  className="mainOptions_title-buy">Приобрести</div>
                        </div>
                </div>

        </div>
        )
}