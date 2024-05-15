import React from 'react';
import {useRef, useState} from 'react';
import './YtGetChannel.css'
import Checkbox from '../Checkbox/Checkbox';
import ResultTable from '../ResultTable/ResultTable';
import ytChannelParser from '../../modules/yt/ytChannelParser/ytChannelParser';
import { useSelector } from 'react-redux';
export default function YtGetChannel()  {
       
        
        const ytGetChannelButtonSave = useRef(null);
        const ytGetChannelButtonStop = useRef(null);
        const ytGetChannelButtonStart = useRef(null);

        const ytGetChannelInputLink = useRef(null);
        const ytApiKey = useSelector((state) => state.accountLinking.ytApiKey)
        const [resultTableData, setResultTableData] = useState(null);
        const [rows, setRows] = useState([
            // ['1','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            // ['2','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            
        ]);
        const [objData, setObjData] = useState([
            // ['1','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            // ['2','Дата загрузки','Просмотры','Комм-рии','Лайки','Тип объекта','Статус'],
            
        ]);
        const column = ['Наименование','Автор','Дата создания','Тип объекта','Статус'];

        async function handlerYtStartParsingChannel() {
            const channelName = ytGetChannelInputLink.current.value

            if (channelName == '' || false) return

            await ytChannelParser(channelName, 10 ,ytApiKey).then(res => {
                console.log(res)

                if (res.error instanceof Object) {
                    setResultTableData(res)
                    
                } 
                else
                {setResultTableData(res) }
                
            })

            if (resultTableData == null) return

            const { channelInfo, liveStreams, shortVideos, videos } = resultTableData
            const { title, country , customUrl, description, publishedAt} = channelInfo
            rows.push([title, title, publishedAt, 'Информация о канале', 'Успешно'])
            objData.push(JSON.stringify(channelInfo))
            videos.forEach(element => {
                const { etag, id, kind, snippet } = element
                const {videoId} = id
                const {channelId, channelTitle,description,liveBroadcastContent,publishTime, publishedAt, title,} = snippet
                rows.push([videoId, title, publishedAt, 'Видео', 'Успешно'])
                objData.push(JSON.stringify(element))
            });
            liveStreams.forEach(element => {
                // const { etag, id, kind, snippet } = element
                // const {videoId} = id
                // const {channelId, channelTitle,description,liveBroadcastContent,publishTime, publishedAt, title,} = snippet
                rows.push(['videoId', 'title', 'publishedAt', 'Трансляция', 'Успешно'])
                objData.push(JSON.stringify(element))
            });
            shortVideos.forEach(element => {
                // const { etag, id, kind, snippet } = element
                // const {videoId} = id
                // const {channelId, channelTitle,description,liveBroadcastContent,publishTime, publishedAt, title,} = snippet
                rows.push(['videoId', 'title', 'publishedAt', 'short-видео', 'Успешно'])
                objData.push(JSON.stringify(element))
            });
           

 
        }

        // const filters = ['Получить видео', 'Получить трансляции ', 'Получить информацию', 'Получить плейлисты', 'Получить short видео'];
        const filters = [];
       

        
        return (             
            <div  className="ytGetChannel">
                <div  className="ytGetChannel_inputs">
                    <input  className="ytGetChannel_inputs-input" type='text' placeholder='Идентификатор группы, пример UCkAEWxO7NanBzHG_Xkn7-Mg' id={'ytGetChannel-inputLink'} ref={ytGetChannelInputLink}></input>
                </div>

                <div className='ytGetChannel_filters'>
                           
                    {filters.map( (e,i) =>  <Checkbox textLabel={e} index={i} /> )}
               
                </div>

                <ResultTable column={column} rows={rows} id={'ytGetChannel-tableResult'} objs={objData}/>
               

                <div className='ytGetChannel_btns'>
                           
                        <button className='ytGetChannel_btns-btn' id={'ytGetChannel-save'} ref={ytGetChannelButtonSave}>Сохранить список</button>
                        <button className='ytGetChannel_btns-btn' id={'ytGetChannel-stop'} ref={ytGetChannelButtonStop}>Стоп</button>
                        <button className='ytGetChannel_btns-btn' id={'ytGetChannel-start'} ref={ytGetChannelButtonStart} onClick={handlerYtStartParsingChannel}>Начать</button>
                      
                </div>

                
            </div>
        )
}

// const textOBJ = {
//     "channelInfo": {
//         "title": "BingHayu ch. 빙하유 ",
//         "description": "",
//         "customUrl": "@binghayu",
//         "publishedAt": "2022-02-10T16:18:44.820314Z",
//         "thumbnails": {
//             "default": {
//                 "url": "https://yt3.ggpht.com/3KztbFGWaSjtNfOTc32Z7NiL31HS9KHxdh6V20xsTITmSFstS_K1p1nhTxmS0HG24mRQETKnFA=s88-c-k-c0x00ffffff-no-rj",
//                 "width": 88,
//                 "height": 88
//             },
//             "medium": {
//                 "url": "https://yt3.ggpht.com/3KztbFGWaSjtNfOTc32Z7NiL31HS9KHxdh6V20xsTITmSFstS_K1p1nhTxmS0HG24mRQETKnFA=s240-c-k-c0x00ffffff-no-rj",
//                 "width": 240,
//                 "height": 240
//             },
//             "high": {
//                 "url": "https://yt3.ggpht.com/3KztbFGWaSjtNfOTc32Z7NiL31HS9KHxdh6V20xsTITmSFstS_K1p1nhTxmS0HG24mRQETKnFA=s800-c-k-c0x00ffffff-no-rj",
//                 "width": 800,
//                 "height": 800
//             }
//         },
//         "localized": {
//             "title": "BingHayu ch. 빙하유 ",
//             "description": ""
//         },
//         "country": "KR"
//     },
//     "videos": [
//         {
//             "kind": "youtube#searchResult",
//             "etag": "APgOZ7VsoJrD0osyjV9XJGGKKS8",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "J1AiVNo6Qys"
//             },
//             "snippet": {
//                 "publishedAt": "2024-05-09T09:59:08Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "블루아카 콜라보, 단 &quot;1트&quot; 로 욕먹은 버튜버 빙하유",
//                 "description": "빙하유 생방송 : https://chzzk.me/binghayu 빙하유 유튜브 : https://www.youtube.com/@binghayu ASMR ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/J1AiVNo6Qys/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/J1AiVNo6Qys/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/J1AiVNo6Qys/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-05-09T09:59:08Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "r97FS2bKyFsTLV-yLHQcIn3xt3o",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "J5wc8rmER7k"
//             },
//             "snippet": {
//                 "publishedAt": "2024-05-08T15:04:36Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "유튜브 마지막 ASMR 라이브 (Last ASMR live on youtube)",
//                 "description": "빙하유 투네이션 : https://toon.at/donate/638034257555842817 팬카페 주소 : https://cafe.naver.com/s2dia 빙하유 트윕 ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/J5wc8rmER7k/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/J5wc8rmER7k/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/J5wc8rmER7k/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-05-08T15:04:36Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "TGGOsGb1CGULk1JXgZaTGaeSuAE",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "PO-W50NByRk"
//             },
//             "snippet": {
//                 "publishedAt": "2024-05-06T10:05:36Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "⚠️メズマライザー (메스머라이저) Binghayu ver.⚠️",
//                 "description": "メズマライザー #메스머라이저 #MESMERIZER original : @32ki_may.",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/PO-W50NByRk/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/PO-W50NByRk/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/PO-W50NByRk/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-05-06T10:05:36Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "9Ebybm0tBbQ25RJOrydLAd-d82M",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "NCO8v89pNDs"
//             },
//             "snippet": {
//                 "publishedAt": "2024-05-04T14:45:07Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "ビビデバ / 星街すいせい covered by Binghayu",
//                 "description": "ビビデバ #bibidiba #비비디바 Original : @HoshimachiSuisei https://www.youtube.com/watch?v=8ZP5eqm4JqM Vocal : Binghayu ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/NCO8v89pNDs/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/NCO8v89pNDs/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/NCO8v89pNDs/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-05-04T14:45:07Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "STS_iDnDg17aXi8oAiT2S57YEZc",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "dsfLjAGAcy4"
//             },
//             "snippet": {
//                 "publishedAt": "2024-05-01T10:28:16Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "이러고서 네이버에서 방송하는 버튜버 빙하유",
//                 "description": "빙하유 생방송 : https://chzzk.me/binghayu 빙하유 유튜브 : https://www.youtube.com/@binghayu ASMR ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/dsfLjAGAcy4/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/dsfLjAGAcy4/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/dsfLjAGAcy4/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-05-01T10:28:16Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "jdtoUY5baTyA7oVFnZnQLwNK59k",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "FQOoM5zMC7c"
//             },
//             "snippet": {
//                 "publishedAt": "2024-04-29T14:10:39Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "버튜버 두명이서 ASMR?! 빙하유x야화님 (Vtuber twin ASMR)",
//                 "description": "빙하유 투네이션 : https://toon.at/donate/638034257555842817 팬카페 주소 : https://cafe.naver.com/s2dia 빙하유 트윕 ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/FQOoM5zMC7c/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/FQOoM5zMC7c/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/FQOoM5zMC7c/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-04-29T14:10:39Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "dZ6Pb5zElIad5Df1LRULvAB6PfY",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "Oim5iAQPkvE"
//             },
//             "snippet": {
//                 "publishedAt": "2024-04-28T14:36:17Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "ビビデバ / 星街すいせい covered by Binghayu",
//                 "description": "Original :@HoshimachiSuisei / vocal : @binghayu / animation : 이네빈 / pv: h2de / typo: @miharu5051.",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/Oim5iAQPkvE/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/Oim5iAQPkvE/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/Oim5iAQPkvE/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-04-28T14:36:17Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "XKfp7SAAqi9n6Qd-DA3W4CfuYOk",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "e_LM5HPkKcU"
//             },
//             "snippet": {
//                 "publishedAt": "2024-04-27T07:02:40Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "버튜버 마우스패드 vs 그 패드",
//                 "description": "빙하유 생방송 : https://chzzk.me/binghayu 빙하유 유튜브 : https://www.youtube.com/@binghayu ASMR ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/e_LM5HPkKcU/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/e_LM5HPkKcU/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/e_LM5HPkKcU/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-04-27T07:02:40Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "WYj08mOWvpSkaM7EhAMue7_ZfL4",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "_g4Itp3Rzs8"
//             },
//             "snippet": {
//                 "publishedAt": "2024-04-25T14:19:50Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "모기알러지 빙하유와 ASMR (Vtuber ASMR)",
//                 "description": "빙하유 투네이션 : https://toon.at/donate/638034257555842817 팬카페 주소 : https://cafe.naver.com/s2dia 빙하유 트윕 ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/_g4Itp3Rzs8/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/_g4Itp3Rzs8/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/_g4Itp3Rzs8/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-04-25T14:19:50Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "1FzIyiPhKMcM-eSfc8MyzNT3WLM",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "xLkIFiM04fo"
//             },
//             "snippet": {
//                 "publishedAt": "2024-04-20T09:38:20Z",
//                 "channelId": "UCHdHTb5jgeH8jys5_Ebqsuw",
//                 "title": "하꼬 버튜버 빙하유의 선택은...?",
//                 "description": "빙하유 생방송 : https://chzzk.me/binghayu 빙하유 유튜브 : https://www.youtube.com/@binghayu ASMR ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/xLkIFiM04fo/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/xLkIFiM04fo/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/xLkIFiM04fo/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "BingHayu ch. 빙하유 ",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2024-04-20T09:38:20Z"
//             }
//         }
//     ],
//     "liveStreams": [],
//     "shortVideos": []
// }