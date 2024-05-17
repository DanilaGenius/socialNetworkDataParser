import React from "react";
import { useRef, useState } from "react";
import "./OkGetCommunity.css";
import Checkbox from "../Checkbox/Checkbox";
import ResultTable from "../ResultTable/ResultTable";
import okGroupParsing from "../../modules/ok/okGroupParsing/okGroupParsing.js";
import translit from "../../utils/translit.js";
import collectFilters from "../../utils/collectFilters.js";
import { useSelector } from "react-redux";

export default function OkGetCommunity() {
  const okAccessToken = useSelector(
    (state) => state.accountLinking.okAccessToken
  );
  const okApplicationID = useSelector(
    (state) => state.accountLinking.okApplicationID
  );
  const okApplicationPublicKey = useSelector(
    (state) => state.accountLinking.okApplicationPublicKey
  );
  const okSessionSecretKey = useSelector(
    (state) => state.accountLinking.okSessionSecretKey
  );
  const okApplicationSecretKey = useSelector(
    (state) => state.accountLinking.okApplicationSecretKey
  );

  const okGetCommunityButtonSave = useRef(null);
  const okGetCommunityButtonStop = useRef(null);
  const okGetCommunityButtonStart = useRef(null);
  const okGetCommunityInputLink = useRef(null);

  // const rows = [];
  const [rows, setRows] = useState([]);
  const [objData, setObjData] = useState([]);
  const [resultTableData, setResultTableData] = useState(null);
  const [value, setValue] = useState("");

  const column = ["Наименование", "Автор", "Тип объекта", "Статус"];

  async function handlerOkStartParsingCommunity() {
    const filtersObj = collectFilters(filters);
    const groupId = okGetCommunityInputLink.current.value;
    if (groupId == "" || false) return;
    const obj2 = {
      count: "5",
      okAccessToken,
      okApplicationID,
      okApplicationPublicKey,
      okSessionSecretKey,
      okApplicationSecretKey,
    };

    await okGroupParsing(groupId, { ...filtersObj, ...obj2 }).then((res) => {
      setResultTableData(res);
    });
    if (resultTableData == null) return;
    let id;
    let name;
    if ('error_code' in resultTableData.info || 'error_code' in resultTableData.error_msg) {
      id = 'Ошибка'
      name = 'Ошибка'
    } else {
      id = resultTableData.info[0].uid;
      name = resultTableData.info[0].name;
    }
 
    
    
    for (const key in resultTableData) {
      if (resultTableData[key] == "no requested and error") continue;
      const status =
        "error_code" in resultTableData[key] ? "Ошибка" : "Успешно";

      rows.push([id, name, key, status]);

      objData.push(JSON.stringify(resultTableData[key]));
    }
  }

  const filters = [
    "Получить информацию",
    "Получить видео",
    "Получить фотографии",
    "Получить альбомы",
    "Получить участников",
    "Получить записи",
  ];

  return (
    <div className="okGetCommunity">
      <div className="okGetCommunity_inputs">
        <input
          className="okGetCommunity_inputs-input"
          type="text"
          placeholder="Идентификатор группы, пример 70000001858236"
          id={"okGetCommunity-inputLink"}
          ref={okGetCommunityInputLink}
        ></input>
      </div>

      <div className="okGetCommunity_filters">
        {filters.map((e, i) => (
          <Checkbox textLabel={e} index={i} id={translit(e)} />
        ))}
      </div>

      <ResultTable
        column={column}
        rows={rows}
        id={"okGetCommunity-tableResult"}
        objs={objData}
      />

      <div className="okGetCommunity_btns">
        <button
          className="okGetCommunity_btns-btn"
          id={"okGetCommunity-save"}
          ref={okGetCommunityButtonSave}
        >
          Сохранить список
        </button>
        <button
          className="okGetCommunity_btns-btn"
          id={"okGetCommunity-stop"}
          ref={okGetCommunityButtonStop}
        >
          Стоп
        </button>
        <button
          className="okGetCommunity_btns-btn"
          id={"okGetCommunity-start"}
          ref={okGetCommunityButtonStart}
          onClick={handlerOkStartParsingCommunity}
        >
          Начать
        </button>
      </div>
    </div>
  );
}
