import React from 'react';
import {useState, useRef} from 'react';
import './VkGetProfiles.css'
import Checkbox from '../Checkbox/Checkbox';
import ResultTable from '../ResultTable/ResultTable';
import vkProfilesParsing from '../../modules/vk/vkProfilesParsing/vkProfilesParsing';
import { useSelector } from 'react-redux';

export default function VkGetProfiles()  {
    const vkGetProfilesButtonSave = useRef(null);
    const vkGetProfilesButtonStop = useRef(null);
    const vkGetProfilesButtonStart = useRef(null);
    const vkGetProfilesInputLink = useRef(null);

    const vkAccessToken = useSelector((state) => state.accountLinking.vkAccessToken)

    const [resultTableData, setResultTableData] = useState(null);
    const [rows, setRows] = useState([
 
    ]);   
    const [objData, setObjData] = useState([
        // ['1','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
        // ['2','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
        
    ]);
                  
        // const filters = ['Получить видео', 'Получить фотографии', 'Получить альбомы',
        //  'Получить записи на стене', 'Получить список друзей', 'Получить подписчиков', 
        //  'Информация о странице', 'Получить сообщества'];
         const filters = []

        const column = ['Идентификатор','Автор','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'];;

        async function handlerVkStartParsingProfiles() {

            const userIds = vkGetProfilesInputLink.current.value || false;
            userIds.trim();
            if (userIds == false) return
            await vkProfilesParsing(userIds, vkAccessToken).then(res => {
                setResultTableData(res)
            })

            

            if (resultTableData == null) return
            await resultTableData.forEach((e, index) => {
                const {id, first_name, last_name} = e;
                rows.push([id,`${first_name} ${last_name}`,'Дата загрузки', 'Нет у профиля просмотров', 'Нет у профиля комм-рий', 'Нет у профиля лайков', 'Информация о профиле', 'Успешно'])
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
            <div  className="vkGetProfiles">
                <div  className="vkGetProfiles_inputs">
                    <input  className="vkGetProfiles_inputs-input" type='text' placeholder='id1,id2,id3' ref={vkGetProfilesInputLink}></input>
                </div>

                <div className='vkGetProfiles_filters'>
                           
                    {filters.map( (e,i) =>  <Checkbox textLabel={e} index={i} /> )}
               
                </div>

                <ResultTable column={column} rows={rows} id={'vkGetProfiles-tableResult'} objs={objData}/>

                <div className='vkGetProfiles_btns'>
                           
                        <button className='vkGetProfiles_btns-btn' ref={vkGetProfilesButtonSave}>Сохранить список</button>
                        <button className='vkGetProfiles_btns-btn' ref={vkGetProfilesButtonStop}>Стоп</button>
                        <button className='vkGetProfiles_btns-btn' ref={vkGetProfilesButtonStart} onClick={handlerVkStartParsingProfiles}>Начать </button>
                      
                </div>
            </div>
        )
        

}