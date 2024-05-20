import React from "react";
import { useRef, useState } from "react";
import "./YtSearchKeys.css";
import Checkbox from "../Checkbox/Checkbox.js";
import ResultTable from "../ResultTable/ResultTable.js";
import ytSearch from "../../modules/yt/ytSearch/ytSearch.js";
import translit from "../../utils/translit.js";
import collectFilters from "../../utils/collectFilters.js";
import { useSelector } from "react-redux";

export default function YtSearchKeys() {
  const ytApiKey = useSelector(
    (state) => state.accountLinking.ytApiKey
  );

  const ytSeachKeysButtonSave = useRef(null);
  const ytSeachKeysButtonStop = useRef(null);
  const ytSeachKeysButtonStart = useRef(null);
  const ytSeachKeysInputLink = useRef(null);


  const [rows, setRows] = useState([]);
  const [objData, setObjData] = useState([]);
  const [resultTableData, setResultTableData] = useState(null);
  const [value, setValue] = useState("");

  const column = ["Наименование", "Автор", "Тип объекта", "Статус"];

 async function handlerYtStartSearch() {
    
    const filtersObj = collectFilters(filters);
    const keys = ytSeachKeysInputLink.current.value;
    if (keys == "" || false) return;
    const apiObj = {
      count: "5",
      ytApiKey
    };

    await ytSearch(keys, { ...filtersObj, ...apiObj }).then((res) => {
      setResultTableData(res);
      console.log('res', res)

    });
    // if (resultTableData == null) return;
    // let id;
    // let name;
    // if ('error_code' in resultTableData.info || 'error_code' in resultTableData.error_msg) {
    //   id = 'Ошибка'
    //   name = 'Ошибка'
    // } else {
    //   id = resultTableData.info[0].uid;
    //   name = resultTableData.info[0].name;
    // }

  //   for (const key in resultTableData) {
  //     console.log('12312',resultTableData[key].response)
  //     if (resultTableData[key] == "no requested and error") continue;
  //     const status =
  //       "error_code" in resultTableData[key] ? "Ошибка" : "Успешно";

  //     rows.push(['id', 'Имя', key, status]);

  //     objData.push(JSON.stringify(resultTableData[key]));
  //   }
  }

  const filters = [
    "Поиск по плейлистам",
    "Поиск по каналам",
    "Поиск по видео",
    "Поиск по трансляциям",
    "Получить short видео",
  ];

  return (
    <div className="ytSeachKeys">
      <div className="ytSeachKeysKeys_inputs">
        <input
          className="ytSeachKeys_inputs-input"
          type="text"
          placeholder="Ключи для поиска"
          id={"ytSeachKeys-inputLink"}
          ref={ytSeachKeysInputLink}
        ></input>
      </div>

      <div className="ytSeachKeys_filters">
        {filters.map((e, i) => (
          <Checkbox textLabel={e} index={i} id={translit(e)} />
        ))}
      </div>

      <ResultTable
        column={column}
        rows={rows}
        id={"ytSeachKeys-tableResult"}
        objs={objData}
      />

      <div className="ytSeachKeys_btns">
        <button
          className="ytSeachKeys_btns-btn"
          id={"ytSeachKeys-save"}
          ref={ytSeachKeysButtonSave}
        >
          Сохранить список
        </button>
        <button
          className="ytSeachKeys_btns-btn"
          id={"ytSeachKeys-stop"}
          ref={ytSeachKeysButtonStop}
        >
          Стоп
        </button>
        <button
          className="ytSeachKeys_btns-btn"
          id={"ytSeachKeys-start"}
          ref={ytSeachKeysButtonStart}
          onClick={handlerYtStartSearch}
        >
          Начать
        </button>
      </div>
    </div>
  );
}
