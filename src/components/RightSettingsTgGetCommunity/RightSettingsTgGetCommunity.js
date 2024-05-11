import React from 'react';
import './RightSettingsTgGetCommunity.css'
import RightSettingsInputValue from '../RightSettingsInputValue/RightSettingsInputValue';
import RightSettingsIntervalValue from '../RightSettingsIntervalValue/RightSettingsIntervalValue';
import RightSettingsCheckBox from '../RightSettingsCheckBox/RightSettingsCheckBox';


export default function RightSettingsTgGetCommunity()  {
        

        return (             
        <div  className="rightSettingsTgGetCommunity">       
            <RightSettingsInputValue label="Лимит" value="5" id="tg-limit" />
            <RightSettingsIntervalValue label="Лимит" valueStart="0" valueEnd="5" id="tg-long" />
            <RightSettingsCheckBox label="Комментарии" value='' id="tg-comments" />
        </div>
        )
}