import React from 'react';
import './SubsectionsOk.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeSubsection } from '../../features/changeSection/sectionSlice.js'


export default function SubsectionsOk()  {
    const subsectionName = useSelector((state) => state.section.subsectionName)
    const dispatch = useDispatch()
    function clickOnSubsection(subsection) {
        dispatch(changeSubsection(subsection))
    }

        return (             
                   
            <div >
                {/* <div  className={`subsections_elems-elem ${(subsectionName == 'ok-profiles') ? 'subsections_elems-elem-active' : ''}`} 
                 onClick={() => clickOnSubsection('ok-profiles')}
                id="ok-profiles">
                    Получить  пользователей
                </div> */}
                <div  className={`subsections_elems-elem ${(subsectionName == 'ok-communities') ? 'subsections_elems-elem-active' : ''}`} 
                 onClick={() => clickOnSubsection('ok-communities')}
                id="ok-communities"> 
                    Получить данные групп
                </div>
            </div>
            )
     
}