import React from 'react';
import './UserPage.css'
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import Subsections from '../../components/Subsections/Subsections';
import Workplace from '../../components/Workplace/Workplace';



export default function UserPage()  {
        

        return (     
        
        <div  className="userPage">
            <Header />
            <LeftMenu />
          
            <div className='userPage_container'>
                <Subsections />
                <Workplace />
                
                
            </div>
            
        </div>
        )
}