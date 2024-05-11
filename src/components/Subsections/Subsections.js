import React from 'react';
import './Subsections.css'
import SubsectionsMain from '../SubsectionsMain/SubsectionsMain';
import SubsectionsTg from '../SubsectionsTg/SubsectionsTg';
import SubsectionsVk from '../SubsectionsVk/SubsectionsVk';
import SubsectionsYt from '../SubsectionsYt/SubsectionsYt';
import SubsectionsOk from '../SubsectionsOk/SubsectionsOk';
import { useSelector, useDispatch } from 'react-redux';



export default function Subsections()  {
    const sectionName = useSelector((state) => state.section.sectionName)

        return (             
        <div  className="subsections">
            
            <div  className="subsections_elems">
            {(sectionName == 'main') && <SubsectionsMain />}
            {(sectionName == 'yt') && <SubsectionsYt />}
            {(sectionName == 'vk') && <SubsectionsVk />}
            {(sectionName == 'tg') && <SubsectionsTg />}          
            {(sectionName == 'ok') && <SubsectionsOk />}
            
            </div>
        </div>
        )
}