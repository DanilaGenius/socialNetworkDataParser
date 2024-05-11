
        import React, {useRef, useState} from 'react';
        import './OkGetCommunity.css'
        import Checkbox from '../Checkbox/Checkbox';
        import ResultTable from '../ResultTable/ResultTable';
        import okCommunityParsing from '../../modules/ok/okCommunityParsing/okCommunityParsing.js'

        export default function OkGetCommunity()  {
       
        const okGetCommunityButtonSave = useRef(null);
        const okGetCommunityButtonStop = useRef(null);
        const okGetCommunityButtonStart = useRef(null);

        const okGetCommunityInputLink = useRef(null);

        const [resultTableData, setResultTableData] = useState(null);
        const [rows, setRows] = useState([
            // ['1','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            // ['2','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            
        ]);
        const column = ['Наименование','Автор','Дата загрузки', 'Просмотры', 'Комментарии', 'Лайки', 'Тип объекта','Статус'];

        async function handlerOkStartParsingCommunity() {
            const channelName = okGetCommunityInputLink.current.value
            if (channelName == '' || false) return
            await okCommunityParsing(channelName).then(res => {
                setResultTableData(res)
            })

            if (resultTableData == null) return
            // resultTableData.forEach((e,index) => {
                // const {'data_post, data_view,user_url, user_photo, user_name, message_url,message_text, views, datetime'} = e;
                // rows.push([data_post,datetime,views,message_text, user_name, user_url , 'Пост','Успешно'])

            // })

            rows.push([1,2,3,4,5,6])

 
        }

        const filters = ['Получить информацию ', 'Получить видео', 'Получить фотографии', 'Получить альбомы', 'Получить участников', 'Получить записи'];
        
       

        
        return (                
            <div  className="okGetCommunity">
                <div  className="okGetCommunity_inputs">
                    <input  className="okGetCommunity_inputs-input" type='text' placeholder='Ссылка на группу' id={'okGetCommunity-inputLink'} ref={okGetCommunityInputLink}></input>
                </div>

                <div className='okGetCommunity_filters'>
                           
                    {filters.map( (e,i) =>  <Checkbox textLabel={e} index={i} /> )}
               
                </div>

                <ResultTable column={column} rows={rows} id={'okGetCommunity-tableResult'}/>
               

                <div className='okGetCommunity_btns'>
                           
                        <button className='okGetCommunity_btns-btn' id={'okGetCommunity-save'} ref={okGetCommunityButtonSave}>Сохранить список</button>
                        <button className='okGetCommunity_btns-btn' id={'okGetCommunity-stop'} ref={okGetCommunityButtonStop}>Стоп</button>
                        <button className='okGetCommunity_btns-btn' id={'okGetCommunity-start'} ref={okGetCommunityButtonStart} onClick={handlerOkStartParsingCommunity}>Начать</button>
                      
                </div>

                
            </div>
        )
}
