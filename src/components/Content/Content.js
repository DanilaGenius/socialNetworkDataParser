import React from 'react';
import './Content.css'
import MainPersonalData from '../MainPersonalData/MainPersonalData';
import MainOptions from '../MainOptions/MainOptions';
import VkGetCommunity from '../VkGetCommunity/VkGetCommunity';
import VkGetProfiles from '../VkGetProfiles/VkGetProfiles';
import VkSearchKeys      from '../VkSearchKeys/VkSearchKeys';
import TgGetCommunity from '../TgGetCommunity/TgGetCommunity';
import YtGetChannel from '../YtGetChannel/YtGetChannel';
import YtSearchKeys      from '../YtSearchKeys/YtSearchKeys';
import OkGetCommunity from '../OkGetCommunity/OkGetCommunity'
import OkGetProfiles from '../OkGetProfiles/OkGetProfiles';
// import OkSearch from '../VkSearch/VkSearch';
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
                {(sectionName == 'yt' && subsectionName == 'yt-search') && <YtSearchKeys />}

                {(sectionName == 'vk' && subsectionName == 'vk-profiles') && <VkGetProfiles />}
                {(sectionName == 'vk' && subsectionName == 'vk-communities') && <VkGetCommunity /> }
                {(sectionName == 'vk' && subsectionName == 'vk-search') && <VkSearchKeys />}

                {(sectionName == 'tg' && subsectionName == 'tg-communities') && <TgGetCommunity />}
                {(sectionName == 'tg' && subsectionName == 'tg-search') && ''}

                {(sectionName == 'ok' && subsectionName == 'ok-profiles') && <OkGetProfiles />}
                {(sectionName == 'ok' && subsectionName == 'ok-communities') && <OkGetCommunity />}



                
                
                
                 
                 
            
        </div>
        )
}