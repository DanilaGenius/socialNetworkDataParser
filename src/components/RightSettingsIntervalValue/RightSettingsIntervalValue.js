import React from 'react';
import './RightSettingsIntervalValue.css'



export default function RightSettingsIntervalValue(props)  {
        const {label, valueStart, valueEnd, id} = props

        return (             
        <div  className="rightSettingsIntervalValue" key={label + id}>
                <label  className="rightSettingsIntervalValue-label" htmlFor={id}>
                        {label}
                </label>

                <div className='rightSettingsIntervalValue-interval'>
                        <input className="rightSettingsIntervalValue-value" type='number' id={id + "-start"} defaultValue={valueStart || 0} maxLength={2} min="0" max="100"/>
                        <div className="rightSettingsIntervalValue-split">-</div>
                        <input className="rightSettingsIntervalValue-value" type='number' id={id + "-end"} defaultValue={valueEnd || 1} maxLength={2} min="0" max="100"/>
                </div>
                
                        
             
        </div>
        )
}