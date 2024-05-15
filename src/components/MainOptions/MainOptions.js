import React from 'react';
import { useRef, useState } from 'react';
import './MainOptions.css'
// import MainOptionsRequisitesWindow from '../MainOptionsRequisitesWindow/MainOptionsRequisitesWindow';
import InputValue from '../InputValue/InputValue';
import { useSelector, useDispatch } from 'react-redux';
import { changeLinkingState } from '../../features/accountLinking/accountLinkingSlice.js'


export default function MainOptions()  {
        const vkRequisitesBtn = useRef(null)
        const tgRequisitesBtn = useRef(null)
        const ytRequisitesBtn = useRef(null)
        const okRequisitesBtn = useRef(null)

        const ytApiKey = useSelector((state) => state.accountLinking.ytApiKey)
        const vkAccessToken = useSelector((state) => state.accountLinking.vkAccessToken)
        const tgAccessToken = useSelector((state) => state.accountLinking.tgAccessToken)
        const okAccessToken = useSelector((state) => state.accountLinking.okAccessToken)
        const dispatch = useDispatch()

        const [visible, setVisible] = useState(false);
        const [visibleSaveBtn, setVisibleSaveBtn] = useState(false);
        const [state, setState] = useState(null)
        const [stateSaveTextRes, setStateSaveTextRes] = useState(null)

        function handlerClickRequisitesBtn(event) {
                if (event.target === vkRequisitesBtn.current && event.target.id !== state) {
setVisibleSaveBtn(true);
                        setVisible(true)
                        setState('vkRequisitesBtn')

                        return 
                }
                if (event.target === tgRequisitesBtn.current && event.target.id !== state) {
               setVisibleSaveBtn(true);
                        setVisible(true)
              
                        setState('tgRequisitesBtn')
                        
                        
                        return 
                }
                if (event.target === ytRequisitesBtn.current && event.target.id !== state) {
                        setVisibleSaveBtn(true);
                        setVisible(true)
                        setState('ytRequisitesBtn')
          
                        
                        return 
                }
                if (event.target === okRequisitesBtn.current && event.target.id !== state) {
                        setVisibleSaveBtn(true);
                        setVisible(true)
                        setState('okRequisitesBtn')
                                          
                        return 
                }
                if (event.target.id == state && visible === true) {
                        console.log('close')
                        setState(null)
                        setVisible(false)
                        setVisibleSaveBtn(false)
                                                
                        return 
                }
              
                
        }

        function handlerClickSaveRequisitesBtn(event) {
                if (state === 'vkRequisitesBtn') {
                       const vkAccessToken = document.querySelector('#vkAccessToken').value
                       console.log(vkAccessToken)
                       dispatch(changeLinkingState({vkAccessToken: vkAccessToken}))
                }
                if (state === 'tgRequisitesBtn') {
                        const tgAccessToken = document.querySelector('#tgAccessToken').value
                        console.log(tgAccessToken)
                        dispatch(changeLinkingState({tgAccessToken: tgAccessToken}))               
                }
                if (state === 'ytRequisitesBtn') {
                        const ytApiKey = document.querySelector('#ytApiKey').value
                        console.log(ytApiKey)
                        dispatch(changeLinkingState({ytApiKey: ytApiKey}))                
                }
                if (state === 'okRequisitesBtn') {
                        const okAccessToken = document.querySelector('#okAccessToken').value
                        console.log(okAccessToken)   
                        dispatch(changeLinkingState({okAccessToken: okAccessToken}))        
                }
                setVisibleSaveBtn(false)
                setStateSaveTextRes('Данные записаны')
        }

        return (             
        <div  className="mainOptions">
            <div className='mainOptions_block'>
                <div  className="mainOptions_title">
                        <div  className="mainOptions_title-text">Регион</div>
                </div>
                
                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">Язык</div>
                        <div  className="mainOptions_info-value">Россия</div>
                        {/* <div  className="mainOptions_title-edit">Изменить</div> */}
                </div>

            </div>

            <div className='mainOptions_block'>
                <div  className="mainOptions_title">
                        <div  className="mainOptions_title-text">Привязать аккаунт</div>

                </div>

                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">YouTube</div>
                        {/* <div  className="mainOptions_info-link">Подключить</div> */}
                        {/* <div  className="mainOptions_info-value">StukachDanila</div>
                        <div  className="mainOptions_info-disable">Отключить</div> */}
                        <div  className="mainOptions_info-requisites" ref={ytRequisitesBtn} presentValue={'4534534534534634'} id='ytRequisitesBtn' onClick={handlerClickRequisitesBtn}>Ввести реквизиты для использования</div>
                </div>
                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">VK</div>
                        {/* <div  className="mainOptions_info-link">Подключить</div> */}
                        {/* <div  className="mainOptions_info-value">StukachDanila</div>
                        <div  className="mainOptions_info-disable">Отключить</div> */}
                        <div  className="mainOptions_info-requisites" ref={vkRequisitesBtn} id='vkRequisitesBtn' onClick={handlerClickRequisitesBtn}>Ввести реквизиты для использования</div>
                </div>
                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">Telegramm</div>
                        {/* <div  className="mainOptions_info-value">text</div> */}
                        {/* <div  className="mainOptions_info-link">Подключить</div> */}
                        <div  className="mainOptions_info-requisites" ref={tgRequisitesBtn} id='tgRequisitesBtn' onClick={handlerClickRequisitesBtn}>Ввести реквизиты для использования</div>
                </div>
                <div  className="mainOptions_info">
                        <div  className="mainOptions_info-key">OK</div>
                        {/* <div  className="mainOptions_info-value">text</div> */}
                        {/* <div  className="mainOptions_info-link">Подключить</div> */}
                        <div  className="mainOptions_info-requisites" ref={okRequisitesBtn} id='okRequisitesBtn' onClick={handlerClickRequisitesBtn}>Ввести реквизиты для использования</div>
                </div>
                { visible &&
                        <div  className="mainOptionsRequisitesWindow">
            
                        {state == 'ytRequisitesBtn' && <InputValue label="API key yt:" id="ytApiKey" presentValue={ytApiKey} />}
                        {state == 'vkRequisitesBtn' && <InputValue label="Access token vk:" id="vkAccessToken" presentValue={vkAccessToken} />}
                        {state == 'tgRequisitesBtn' && <InputValue label="Access token tg ( Не обязательно ):" id="tgAccessToken" presentValue={tgAccessToken} />}
                        {state == 'okRequisitesBtn' && <InputValue label="Access token ok:" id="okAccessToken" presentValue={okAccessToken} />}

                        {visibleSaveBtn && <input className="mainOptionsRequisitesWindow_saveBtn" type='submit' value={'Записать'} onClick={handlerClickSaveRequisitesBtn}/>} 
                        <div className='mainOptionsRequisitesWindow_saveTextRes'>{stateSaveTextRes}</div>
                </div>
                }
            </div>

            <div className='mainOptions_block'>

                        <div  className="mainOptions_title">
                                {/* <div  className="mainOptions_title-text">Доступные услуги</div>
                                <div  className="mainOptions_title-buy">Приобрести</div> */}
                        </div>
                </div>
                        
        </div>
        )
}