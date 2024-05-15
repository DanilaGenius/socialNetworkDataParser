import React from 'react';
import {useState} from 'react';
import './TgGetCommunity.css'
import Checkbox from '../Checkbox/Checkbox';
import ResultTable from '../ResultTable/ResultTable';
import {useRef} from 'react';
import telegramCommunityParsing from '../../modules/tg/telegramCommunityParsing/telegramCommunityParsing';



export default function TgGetCommunity()  {
        const tgGetCommunityButtonSave = useRef(null);
        const tgGetCommunityButtonStop = useRef(null);
        const tgGetCommunityButtonStart = useRef(null);

        const tgGetCommunityInputLink = useRef(null);

        const [resultTableData, setResultTableData] = useState(null);
        const [rows, setRows] = useState([
            // ['1','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            // ['2','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            
        ]);
        const [objData, setObjData] = useState([
            // ['1','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            // ['2','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            
        ]);
        const column = ['Наименование','Дата загрузки','Просмотры','Сообщение','Имя пользователя','Сссылка на пользователя','Тип объекта','Статус'];

        async function handlerTgStartParsingCommunity() {
            const channelName = tgGetCommunityInputLink.current.value
            if (channelName == '' || false) return
            await telegramCommunityParsing(channelName).then(res => {
                setResultTableData(res)
            })

            if (resultTableData == null) return
            resultTableData.forEach((e, index) => {
                const {data_post, data_view,user_url, user_photo, user_name, message_url,message_text, views, datetime} = e;
                rows.push([data_post,datetime,views,message_text, user_name, user_url , 'Пост','Успешно'])
                objData.push(JSON.stringify(e))
            })

 
        }

        // const filters = ['Пользователи', 'Фото ', 'Видео', 'Истории', 'Файлы', 'Аудио', 'Ссылки', 'Гифки', 'Ссылки', 'Записи'];
        const filters = [];
       

        
        return (             
            <div  className="tgGetCommunity">
                <div  className="tgGetCommunity_inputs">
                    <input  className="tgGetCommunity_inputs-input" type='text' placeholder='Ссылка на группу, пример rabota_novosibirsk3' id={'tgGetCommunity-inputLink'} ref={tgGetCommunityInputLink}></input>
                </div>

                <div className='tgGetCommunity_filters'>
                           
                    {filters.map( (e,i) =>  <Checkbox textLabel={e} index={i} /> )}
               
                </div>

                <ResultTable column={column} rows={rows} id={'tgGetCommunity-tableResult'} objs={objData}/>
               

                <div className='tgGetCommunity_btns'>
                           
                        <button className='tgGetCommunity_btns-btn' id={'tgGetCommunity-save'} ref={tgGetCommunityButtonSave}>Сохранить список</button>
                        <button className='tgGetCommunity_btns-btn' id={'tgGetCommunity-stop'} ref={tgGetCommunityButtonStop}>Стоп</button>
                        <button className='tgGetCommunity_btns-btn' id={'tgGetCommunity-start'} ref={tgGetCommunityButtonStart} onClick={handlerTgStartParsingCommunity}>Начать</button>
                      
                </div>

                
            </div>
        )
}