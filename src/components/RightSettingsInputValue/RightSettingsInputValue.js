import React from 'react';
import './RightSettingsInputValue.css'



export default function RightSettingsInputValue(props)  {
        const {label, value, id} = props

        return (             
        <div  className="rightSettingsInputValue" key={label + id}>
                <label  className="rightSettingsInputValue-label" htmlFor={id}>
                        {label}
                </label>
                <input className="rightSettingsInputValue-value" type='number' id={id} defaultValue={value || 0} maxLength={2} min="0" max="100"/>
                        
             
        </div>
        )
}