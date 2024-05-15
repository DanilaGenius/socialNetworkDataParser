import React from 'react';
import './SubsectionsVk.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeSubsection } from '../../features/changeSection/sectionSlice.js'


export default function SubsectionsVk()  {
    const subsectionName = useSelector((state) => state.section.subsectionName)
    const dispatch = useDispatch()
    function clickOnSubsection(subsection) {
        dispatch(changeSubsection(subsection))
    }
        return (             
                 
            <div >
                
                <div  className={`subsections_elems-elem ${(subsectionName == 'vk-profiles') ? 'subsections_elems-elem-active' : ''}`} 
                onClick={() => clickOnSubsection('vk-profiles')}
                id="vk-profiles">
                    Получить профиля 
                </div>
                <div  className={`subsections_elems-elem ${(subsectionName == 'vk-communities') ? 'subsections_elems-elem-active' : ''}`} 
                onClick={() => clickOnSubsection('vk-communities')}
                id="vk-communities">
                    Получить сообщества
                </div>
                {/* <div  className={`subsections_elems-elem ${(subsectionName == 'vk-search') ? 'subsections_elems-elem-active' : ''}`} 
                onClick={() => clickOnSubsection('vk-search')}
                id="vk-search">
                    Поиск по ключ. словам
                </div>  */}
            </div>   
        
        )
}