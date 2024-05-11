import React from 'react';
import './Content.css'
import MainPersonalData from '../MainPersonalData/MainPersonalData';
import MainOptions from '../MainOptions/MainOptions';
import VkGetCommunity from '../VkGetCommunity/VkGetCommunity';
import TgGetCommunity from '../TgGetCommunity/TgGetCommunity';
import YtGetChannel from '../YtGetChannel/YtGetChannel';
import OkGetCommunity from '../OkGetCommunity/OkGetCommunity'

import { useSelector } from 'react-redux';



export default function Content()  {
        const sectionName = useSelector((state) => state.section.sectionName)
        const subsectionName = useSelector((state) => state.section.subsectionName)


        return (             
        <div  className="content">
                {(sectionName == 'main' && subsectionName == 'main-statistics') && ''}
                {(sectionName == 'main' && subsectionName == 'main-data') && <MainPersonalData /> }
                {(sectionName == 'main' && subsectionName == 'main-options') && <MainOptions /> }
                {(sectionName == 'main' && subsectionName == 'main-story') && ''}

                {(sectionName == 'yt' && subsectionName == 'yt-channel') && <YtGetChannel />}
                {(sectionName == 'yt' && subsectionName == 'yt-search') && ''}

                {(sectionName == 'vk' && subsectionName == 'vk-profiles') && ''}
                {(sectionName == 'vk' && subsectionName == 'vk-communities') && <VkGetCommunity /> }
                {(sectionName == 'vk' && subsectionName == 'vk-search') && ''}

                {(sectionName == 'tg' && subsectionName == 'tg-communities') && <TgGetCommunity />}
                {(sectionName == 'tg' && subsectionName == 'tg-search') && ''}

                {(sectionName == 'ok' && subsectionName == 'ok-profiles') && ''}
                {(sectionName == 'ok' && subsectionName == 'ok-communities') && <OkGetCommunity />}



                
                
                
                 
                 
            
        </div>
        )
}