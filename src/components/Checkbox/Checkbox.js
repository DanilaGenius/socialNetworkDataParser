import React from 'react';
import './Checkbox.css'



export default function Checkbox(props)  {
        const {textLabel, index} = props;
    
        return (             
        <div className="checkbox" key={index}>
            <input className="checkbox-input" 
            type="checkbox"
            id={index}
            />
            <label className="checkbox-label" 
            htmlFor={index}>
                {textLabel}
            </label>
        </div>
        )
}