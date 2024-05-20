import React from 'react';
import './SubsectionsYt.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeSubsection } from '../../features/changeSection/sectionSlice.js'


export default function SubsectionsYt()  {
    const subsectionName = useSelector((state) => state.section.subsectionName)
    const dispatch = useDispatch()

    function clickOnSubsection(subsection) {
        dispatch(changeSubsection(subsection))
    }
        return (             
                   
            <div >
                <div  className={`subsections_elems-elem ${(subsectionName == 'yt-channel') ? 'subsections_elems-elem-active' : ''}`} 
                onClick={() => clickOnSubsection('yt-channel')}
                id="yt-channel" >
                    Получить данные канала
                </div>
                <div  className={`subsections_elems-elem ${(subsectionName == 'yt-search') ? 'subsections_elems-elem-active' : ''}`}
                onClick={() => clickOnSubsection('yt-search')}
                id="yt-search">
                    Поиск по ключ. словам
                </div> 
            </div>
            )
     
}