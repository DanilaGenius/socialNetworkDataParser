import React from "react";
import { useRef, useState } from "react";
import "./OkGetProfiles.css"
import Checkbox from "../Checkbox/Checkbox";
import ResultTable from "../ResultTable/ResultTable";
import okProfilesParsing from "../../modules/ok/okProfilesParsing/okProfilesParsing.js";
import translit from "../../utils/translit.js";
import collectFilters from "../../utils/collectFilters.js";
import { useSelector } from "react-redux";

export default function OkGetProfiles() {
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

  const okGetProfilesButtonSave = useRef(null);
  const okGetProfilesButtonStop = useRef(null);
  const okGetProfilesButtonStart = useRef(null);
  const okGetProfilesInputLink = useRef(null);

  // const rows = [];
  const [rows, setRows] = useState([]);
  const [objData, setObjData] = useState([]);
  const [resultTableData, setResultTableData] = useState(null);
  const [value, setValue] = useState("");

  const column = ["Наименование", "Автор", "Тип объекта", "Статус"];

  async function handlerOkStartParsingProfiles() {
    const filtersObj = collectFilters(filters);
    const profilesId = okGetProfilesInputLink.current.value;
    if (profilesId == "" || false) return;
    const apiObj = {
      count: "5",
      okAccessToken,
      okApplicationID,
      okApplicationPublicKey,
      okSessionSecretKey,
      okApplicationSecretKey,
    };
    
    await okProfilesParsing(profilesId, { ...filtersObj, ...apiObj }).then((res) => {
      setResultTableData(res);
      console.log(res)
    });
    if (resultTableData == null) return;
    console.log('resultTableData.info',resultTableData.info)
    let id;
    let name;
    if ('error_code' in resultTableData.info) {
      id = 'Ошибка'
      name = 'Ошибка'
    } else {
      id = resultTableData.info[0].uid;
      name = resultTableData.info[0].name;
    }
 
    
    
    for (const key in resultTableData) {

      if (resultTableData[key] == "no requested and error") continue;
      // if (Array.isArray(resultTableData[key])) {
      //   rows.push([id, name, key, status]);
      //   objData.push(JSON.stringify(resultTableData[key]));
      //   continue
      // }

      const status = ("error_code" in resultTableData[key]) ? "Ошибка" : "Успешно";

      rows.push([id, name, key, status]);

      objData.push(JSON.stringify(resultTableData[key]));
    }
  }

  const filters = [
    // "Получить видео",
    "Получить фотографии",
    // "Получить заметки",
    // "Получить группы",
    "Получить список друзей",
    "Записи на странице",
    "Информация о странице"
  ];

  return (
    <div className="okGetProfiles">
      <div className="okGetProfiles_inputs">
        <input
          className="okGetProfiles_inputs-input"
          type="text"
          placeholder="Идентификатор пользователя OK, пример 325215139167"
          id={"okGetProfiles-inputLink"}
          ref={okGetProfilesInputLink}
        ></input>
      </div>

      <div className="okGetProfiles_filters">
        {filters.map((e, i) => (
          <Checkbox textLabel={e} index={i} id={translit(e)} />
        ))}
      </div>

      <ResultTable
        column={column}
        rows={rows}
        id={"okGetProfiles-tableResult"}
        objs={objData}
      />

      <div className="okGetProfiles_btns">
        <button
          className="okGetProfiles_btns-btn"
          id={"okGetProfiles-save"}
          ref={okGetProfilesButtonSave}
        >
          Сохранить список
        </button>
        <button
          className="okGetProfiles_btns-btn"
          id={"okGetProfiles-stop"}
          ref={okGetProfilesButtonStop}
        >
          Стоп
        </button>
        <button
          className="okGetProfiles_btns-btn"
          id={"okGetProfiles-start"}
          ref={okGetProfilesButtonStart}
          onClick={handlerOkStartParsingProfiles}
        >
          Начать
        </button>
      </div>
    </div>
  );
}
