import React from 'react';
import {useState, useRef} from 'react';
import './VkGetCommunity.css'
import Checkbox from '../Checkbox/Checkbox';
import ResultTable from '../ResultTable/ResultTable';
import vkCommunityParsing from '../../modules/vk/vkCommunityParsing/vkCommunityParsing';
import { useSelector } from 'react-redux';

export default function VkGetCommunity()  {
    const vkGetCommunityButtonSave = useRef(null);
    const vkGetCommunityButtonStop = useRef(null);
    const vkGetCommunityButtonStart = useRef(null);

    const vkGetCommunityInputLink = useRef(null);
    
    const [resultTableData, setResultTableData] = useState(null);
    const vkAccessToken = useSelector((state) => state.accountLinking.vkAccessToken)
    const [rows, setRows] = useState([

        // ['Наименование','Автор','Дата загрузки',
        // 'Просмотры','Комм-рии','Лайки',
        // 'Мой лайк','Тип объекта','Статус'],
        // ['Наименование','Автор','Дата загрузки',
        // 'Просмотры','Комм-рии','Лайки',
        // 'Мой лайк','Тип объекта','Статус'],
        
    ]);   
    const [objData, setObjData] = useState([
        // ['1','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
        // ['2','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
        
    ]);
                  
        // const filters = ['Получить информацию ', 'Получить видео', 'Получить фотографии',
        //  'Получить альбомы', 'Получить подписчиков', 'Получить посты', 
        //  'Получение контактов', 'Получение обсуждений', 'Получение клипов',
        //   'Получить файлы', 'Получить товары', 'Получать комментарии'];

        const filters = []

        const column = ['Идентификатор','Автор','Дата загрузки','Просмотры','Комм-рии', 'Мой лайк','Тип объекта','Статус'];;

        async function handlerVkStartParsingCommunity() {

            const channelName = vkGetCommunityInputLink.current.value || false
            
            if (channelName == false) return
            await vkCommunityParsing(channelName, 'countStatik', vkAccessToken).then(res => {
                setResultTableData(res)
            })

            

            if (resultTableData == null) return
            resultTableData.forEach((e, index) => {
                const {postId, text, likes,comments,type, reposts,views} = e;
                rows.push([postId,'Не указан',views,, comments, likes, reposts, type, 'Успешно'])
                objData.push(JSON.stringify(e))
            })

 
        }
    //     const objData = {
    //         postId: post.id,
    //         text: post.text,
    //         likes: post.likes.count,
    //         comments: post.comments.count,
    //         type: post.type,
    //         reposts: post.reposts.count,
    //         views: post.views.count,
    //         attachments: post.attachments

    // }
        
        return (             
            <div  className="vkGetCommunity">
                <div  className="vkGetCommunity_inputs">
                    <input  className="vkGetCommunity_inputs-input" type='text' placeholder='Ссылка на группу, пример nsuem' ref={vkGetCommunityInputLink}></input>
                </div>

                <div className='vkGetCommunity_filters'>
                           
                    {filters.map( (e,i) =>  <Checkbox textLabel={e} index={i} /> )}
               
                </div>

                <ResultTable column={column} rows={rows} id={'vkGetCommunity-tableResult'} objs={objData}/>

                <div className='vkGetCommunity_btns'>
                           
                        <button className='vkGetCommunity_btns-btn' ref={vkGetCommunityButtonSave}>Сохранить список</button>
                        <button className='vkGetCommunity_btns-btn' ref={vkGetCommunityButtonStop}>Стоп</button>
                        <button className='vkGetCommunity_btns-btn' ref={vkGetCommunityButtonStart} onClick={handlerVkStartParsingCommunity}>Начать </button>
                      
                </div>
            </div>
        )
}