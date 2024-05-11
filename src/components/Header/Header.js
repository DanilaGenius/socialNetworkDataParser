import React from 'react';
import './Header.css'
import DropDownMenu from '../DropDownMenu/DropDownMenu';



export default function Header()  {
        const [DropDownMenuVisibility, changeDropDownMenuVisibility] = React.useState(false);

        const handleClick = () => {
            changeDropDownMenuVisibility(!DropDownMenuVisibility);
        };

        return (             
        <div  className="header">
            
            <div  className="header_acc" >
                <div className="header_acc-container">
                    <div  className="header_acc-name" onClick={handleClick}>
                        Danila Stukach
                    </div>
                    <div  className="header_acc-btn">
                        >
                    </div>
                </div>
                {DropDownMenuVisibility && <DropDownMenu />}
                
            </div>
            
            
        </div>
        )
}