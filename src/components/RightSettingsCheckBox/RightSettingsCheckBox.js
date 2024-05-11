import React from 'react';
import './RightSettingsCheckBox.css'



export default function RightSettingsCheckBox(props)  {
        const {label, value, id} = props
     
  


        return (             
        <div  className="rightSettingsCheckBox" key={label + id}>
                <label  className="rightSettingsCheckBox-label" htmlFor={id}>
                        {label}
                </label>
                
                <input className="rightSettingsCheckBox-checkbox" type='checkbox' id={id} />
          
        </div>
        )
}