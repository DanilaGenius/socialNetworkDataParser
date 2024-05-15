import React from 'react';
import { useRef, useState } from 'react';
import './MainOptionsRequisitesWindow.css'
import InputValue from '../InputValue/InputValue';


export default function MainOptionsRequisitesWindow(props)  {
    const {initialState} = props
    const [state, setState] = useState(initialState)
        // const vkRequisitesBtn = useRef(null)
        // const tgRequisitesBtn = useRef(null)
        // const ytRequisitesBtn = useRef(null)
        // const okRequisitesBtn = useRef(null)
console.log('MainOptionsRequisitesWindow',state)

        return (             
        <div  className="mainOptionsRequisitesWindow">
            
            {state == 'ytRequisitesBtn' && <InputValue label="yt" value="5" id="vkapi" />}
            {state == 'vkRequisitesBtn' && <InputValue label="vk" value="5" id="vkapi" />}
            {state == 'tgRequisitesBtn' && <InputValue label="tg" value="5" id="vkapi" />}
            {state == 'okRequisitesBtn' && <InputValue label="ok" value="5" id="vkapi" />}

        </div>
        )
}