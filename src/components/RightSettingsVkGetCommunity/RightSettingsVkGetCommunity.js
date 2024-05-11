import React from 'react';
import './RightSettingsVkGetCommunity.css'
import RightSettingsInputValue from '../RightSettingsInputValue/RightSettingsInputValue';
import RightSettingsIntervalValue from '../RightSettingsIntervalValue/RightSettingsIntervalValue';
import RightSettingsCheckBox from '../RightSettingsCheckBox/RightSettingsCheckBox';


export default function RightSettingsTgGetCommunity()  {
        

        return (             
        <div  className="rightSettingsTgGetCommunity">       
            <RightSettingsInputValue label="Лимит постов" value="5" id="vk-limit" />
            {/* <RightSettingsIntervalValue label="Лимит" valueStart="0" valueEnd="5" id="vk-long" />
            <RightSettingsCheckBox label="Комментарии" value='' id="vk-comments" /> */}
        </div>
        )
}