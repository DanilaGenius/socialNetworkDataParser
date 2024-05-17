import React from 'react';

import './Checkbox.css'



export default function Checkbox(props)  {
        const {textLabel, index, id} = props;

        
        return (             
        <div className="checkbox" key={index}>
            
            {textLabel == 'Получить информацию' ? 
            <input className="checkbox-input" 
                type="checkbox"
                id={id}  checked
            /> :
            <input className="checkbox-input" 
                type="checkbox"
                id={id}  
            />}


            <label className="checkbox-label"  
            htmlFor={index}>
                {textLabel}
            </label>
        </div>
        )
}