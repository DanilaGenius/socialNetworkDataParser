import React from "react";
import { useRef, useState } from "react";
import "./VkSearchKeys.css";
import Checkbox from "../Checkbox/Checkbox.js";
import ResultTable from "../ResultTable/ResultTable.js";
import vkSearch from "../../modules/vk/vkSearch/vkSearch.js";
import translit from "../../utils/translit.js";
import collectFilters from "../../utils/collectFilters.js";
import { useSelector } from "react-redux";

export default function VkSearchKeys() {
    const vkAccessToken = useSelector((state) => state.accountLinking.vkAccessToken)

  const vkSeachButtonSave = useRef(null);
  const vkSeachButtonStop = useRef(null);
  const vkSeachButtonStart = useRef(null);
  const vkSeachInputLink = useRef(null);

  // const rows = [];
  const [rows, setRows] = useState([]);
  const [objData, setObjData] = useState([]);
  const [resultTableData, setResultTableData] = useState(null);
  const [value, setValue] = useState("");

  const column = ["Наименование", "Тип объекта", "Статус"];

  async function handlerVkStartSearch() {
    const filtersObj = collectFilters(filters);
    const keys = vkSeachInputLink.current.value;
    if (keys == "" || false) return;
    const apiObj = {
      count: "5",
      vkAccessToken
    };
    
    await vkSearch(keys, { ...filtersObj, ...apiObj }).then((res) => {
      setResultTableData(res);
      console.log('vkSearch',res)
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
 
    for (const key in resultTableData) {
      if (resultTableData[key] == "no requested and error") continue;
      // const status =
      //   "error" in resultTableData[key] ? "Ошибка" : "Успешно";
      if ("error" in resultTableData[key]) {
        rows.push([`Ошибка: ${ resultTableData[key].error.error_msg}`, key, "Ошибка"]);
        objData.push(JSON.stringify(resultTableData[key]));
      } else {
        rows.push([`Получено ${ resultTableData[key].response.count} записей`, key, "Успешно"]);
        objData.push(JSON.stringify(resultTableData[key]));
      }

    }
  }

  const filters = [
    "Товары магазинов",
    "Видео",
    "Фотографии",
    "Новости",
    "Люди",
    "Сообщества",
  ];

  return (
    <div className="vkSeach">
      <div className="vkSeach_inputs">
        <input
          className="vkSeach_inputs-input"
          type="text"
          placeholder="Ключи для поиска"
          id={"vkSeach-inputLink"}
          ref={vkSeachInputLink}
        ></input>
      </div>

      <div className="vkSeach_filters">
        {filters.map((e, i) => (
          <Checkbox textLabel={e} index={i} id={translit(e)} />
        ))}
      </div>

      <ResultTable
        column={column}
        rows={rows}
        id={"vkSeach-tableResult"}
        objs={objData}
      />

      <div className="vkSeach_btns">
        <button
          className="vkSeach_btns-btn"
          id={"vkSeach-save"}
          ref={vkSeachButtonSave}
        >
          Сохранить список
        </button>
        <button
          className="vkSeach_btns-btn"
          id={"vkSeach-stop"}
          ref={vkSeachButtonStop}
        >
          Стоп
        </button>
        <button
          className="vkSeach_btns-btn"
          id={"vkSeach-start"}
          ref={vkSeachButtonStart}
          onClick={handlerVkStartSearch}
        >
          Начать
        </button>
      </div>
    </div>
  );
}
