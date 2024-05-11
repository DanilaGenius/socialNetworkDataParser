import React from 'react';
import './SubsectionsTg.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeSubsection } from '../../features/changeSection/sectionSlice.js'


export default function SubsectionsTg()  {
    const subsectionName = useSelector((state) => state.section.subsectionName)
    const dispatch = useDispatch()
    function clickOnSubsection(subsection) {
        dispatch(changeSubsection(subsection))
    }

        return (             
                   
            <div >
                <div  className={`subsections_elems-elem ${(subsectionName == 'tg-communities') ? 'subsections_elems-elem-active' : ''}`} 
                onClick={() => clickOnSubsection('tg-communities')}
                id="tg-communities">
                    Получить  сообщества
                </div>
                {/* <div  className={`subsections_elems-elem ${(subsectionName == 'tg-search') ? 'subsections_elems-elem-active' : ''}`} 
                onClick={() => clickOnSubsection('tg-search')}
                id="tg-search">
                    Поиск по соц. сети
                </div> */}
            </div>
            )
     
}