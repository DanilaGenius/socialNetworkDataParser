        
        import React, {useRef, useState} from 'react';
        import './OkGetCommunity.css'
        import Checkbox from '../Checkbox/Checkbox';
        import ResultTable from '../ResultTable/ResultTable';
        import okGroupParsing from '../../modules/ok/okGroupParsing/okGroupParsing.js'
        import translit from '../../utils/translit.js'
        import collectFilters from '../../utils/collectFilters.js'
        import { useSelector} from 'react-redux';

        export default function OkGetCommunity()  {
        const okAccessToken = useSelector((state) => state.accountLinking.okAccessToken)
        const okApplicationID = useSelector((state) => state.accountLinking.okApplicationID)
        const okApplicationPublicKey = useSelector((state) => state.accountLinking.okApplicationPublicKey)
        const okSessionSecretKey = useSelector((state) => state.accountLinking.okSessionSecretKey)
        const okApplicationSecretKey = useSelector((state) => state.accountLinking.okApplicationSecretKey)

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
            const filtersObj = collectFilters(filters)
            const groupId = okGetCommunityInputLink.current.value
            if (groupId == '' || false) return
            const obj2 = {
                count: '5',
                okAccessToken,
                okApplicationID,
                okApplicationPublicKey,
                okSessionSecretKey,
                okApplicationSecretKey
            }

            
            
            await okGroupParsing(groupId, {...filtersObj, ...obj2}).then(res => {
                console.log(res)

                // if (res.error instanceof Object) {
                //     setResultTableData(res)
                    
                // } 
                // else
                // {setResultTableData(res) }
                
            })
                
            //     if (res.error instanceof Object) {
            //         setResultTableData(res.error)
                    
            //     } 
            //     else
            //     {setResultTableData(res.response) }

 
            // })
            
            // if (resultTableData == null) return
            // resultTableData.forEach((e,index) => {
                // const {'data_post, data_view,user_url, user_photo, user_name, message_url,message_text, views, datetime'} = e;
                // rows.push([data_post,datetime,views,message_text, user_name, user_url , 'Пост','Успешно'])

            // })

            

 
        }
        const [value, setValue] = useState('')

        const handleChange = (event) => {
            setValue(event.target.value)
        }
        

        const filters = ['Получить информацию', 'Получить видео', 'Получить фотографии', 'Получить альбомы', 'Получить участников', 'Получить записи'];
        
       

        
        return (                
            <div  className="okGetCommunity">
                <div  className="okGetCommunity_inputs">
                    <input  className="okGetCommunity_inputs-input" type='text' placeholder='Идентификатор группы, пример 70000001858236' id={'okGetCommunity-inputLink'} ref={okGetCommunityInputLink}></input>
                </div>

                <div className='okGetCommunity_filters'>
                           
                    {filters.map( (e,i) =>  <Checkbox textLabel={e} index={i} id={translit(e)}/> )}
               
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
