import React from 'react';
import './SubsectionsMain.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeSubsection } from '../../features/changeSection/sectionSlice.js'


export default function SubsectionsMain()  {
    const subsectionName = useSelector((state) => state.section.subsectionName)
    const dispatch = useDispatch()
    function clickOnSubsection(subsection) {
        dispatch(changeSubsection(subsection))
    }
        return (             
        
                
                <div>
                    {/* <div  className={`subsections_elems-elem ${(subsectionName == 'main-statistics') ? 'subsections_elems-elem-active' : ''}`} 
                        onClick={() => clickOnSubsection('main-statistics')}
                        id="main-statistics">
                        Статистика
                    </div> */}

                    <div  className={`subsections_elems-elem ${(subsectionName == 'main-data') ? 'subsections_elems-elem-active' : ''}`} 
                    onClick={() => clickOnSubsection('main-data')}
                    id="main-data">
                        Личные данные
                    </div>

                    <div  className={`subsections_elems-elem ${(subsectionName == 'main-options') ? 'subsections_elems-elem-active' : ''}`} 
                    onClick={() => clickOnSubsection('main-options')}
                    id="main-options">
                        Параметры
                    </div>

                    {/* <div  className={`subsections_elems-elem ${(subsectionName == 'main-story') ? 'subsections_elems-elem-active' : ''}`} 
                    onClick={() => clickOnSubsection('main-story')}
                    id="main-story">
                        История
                    </div> */}

                </div>

           
        )
}