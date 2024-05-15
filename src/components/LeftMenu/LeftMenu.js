import React from 'react';
import './LeftMenu.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeSection,  changeSubsection} from '../../features/changeSection/sectionSlice.js'




export default function LeftMenu(props)  {
    const sectionName = useSelector((state) => state.section.sectionName)
    
    const dispatch = useDispatch()

    function clickOnSection(section, subsection) {
        dispatch(changeSection(section));
        dispatch(changeSubsection(''))
    }

        return (             
        <div  className="leftMenu">
            <div  className={`leftMenu-elem ${(sectionName == 'main') ? 'leftMenu-elem-active' : ''}`} 
            onClick={() => clickOnSection('main', 'main-data')}>ГЛАВНАЯ</div>

            <div  className={`leftMenu-elem ${(sectionName == 'yt') ? 'leftMenu-elem-active' : ''}`} 
            onClick={() => clickOnSection('yt', 'yt-channel')}>YOUTUBE</div>

            <div  className={`leftMenu-elem ${(sectionName == 'vk') ? 'leftMenu-elem-active' : ''}`} 
            onClick={() => clickOnSection('vk', 'vk-profiles')}>VK</div>

            <div  className={`leftMenu-elem ${(sectionName == 'tg') ? 'leftMenu-elem-active' : ''}`} 
            onClick={() => clickOnSection('tg', 'tg-communities')}>TELEGRAM</div>

            {/* <div  className={`leftMenu-elem ${(sectionName == 'ok') ? 'leftMenu-elem-active' : ''}`} 
            onClick={() => clickOnSection('ok', 'ok-profiles')}>OK</div> */}
        </div>
        )
}



