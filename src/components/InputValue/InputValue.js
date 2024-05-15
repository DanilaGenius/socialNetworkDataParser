import React from 'react';
import { useRef } from 'react';
import './InputValue.css'

export default function InputValue(props)  {
        const {label, presentValue, id} = props
        const ref = useRef(id)

        function handlerInput() {
                console.log(ref)
        }
        return (             
        <div>
                <div  className="inputValue" key={label + id}>
                <label  className="inputValue-label" htmlFor={id}>
                        {label}
                </label>
                <input className="inputValue-value" type='text' id={id} defaultValue={presentValue || ''} ref={ref} onClick={handlerInput}/>

                
                        
             
        </div>
        <div className="inputValue-presentValue">{`Текущее значение: ${presentValue || 'Не задано'}`}</div>
        </div>
        )
}