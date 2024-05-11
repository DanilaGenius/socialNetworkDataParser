import React from 'react';
import './RightSettings.css'
import RightSettingsTgGetCommunity from '../RightSettingsTgGetCommunity/RightSettingsTgGetCommunity';
import RightSettingsVkGetCommunity from '../RightSettingsVkGetCommunity/RightSettingsVkGetCommunity';

import { useSelector } from 'react-redux';

export default function RightSettings()  {
    const sectionName = useSelector((state) => state.section.sectionName)
    const subsectionName = useSelector((state) => state.section.subsectionName)

    if (subsectionName == 'main-statistics' ||
        subsectionName == 'main-data' || 
        subsectionName == 'main-options' || 
        subsectionName == 'main-story' || 
        subsectionName == '') {
        return ''
    } else {
        return (             
            <div  className="rightSettings">       
                {(sectionName == 'yt' && subsectionName == 'yt-channel') && ''}
                {(sectionName == 'yt' && subsectionName == 'yt-search') && ''}

                {(sectionName == 'vk' && subsectionName == 'vk-profiles') && ''}
                {(sectionName == 'vk' && subsectionName == 'vk-communities') && <RightSettingsVkGetCommunity />}
                {(sectionName == 'vk' && subsectionName == 'vk-search') && ''}

                {/* {(sectionName == 'tg' && subsectionName == 'tg-communities') && <RightSettingsTgGetCommunity />} */}
                {(sectionName == 'tg' && subsectionName == 'tg-search') && ''}

                {(sectionName == 'ok' && subsectionName == 'ok-profiles') && ''}
                {(sectionName == 'ok' && subsectionName == 'ok-communities') && ''}
            </div>
        )
    }
        
    
        
}