import React from "react";
import "./ResultTable.css";
import { useRef } from "react";

export default function ResultTable(props) {
  const { column, rows, objs } = props;

  return (
    <div>
      <div className="resultTable_title">Полученные данные</div>
      <div className="resultTable">
        <table class="table">
          <thead>
            <tr>
              <th>№</th>
              {column.map((e) => (
                <th>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((e, i) => (
              <CreateRows row={e} index={i} obj={objs[i]} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CreateRows(props) {
  const { row, index, obj } = props;

  const hover = useRef(null);
  const activeWhenHover = useRef(null);

  const handlerMouseOver = () => {
    activeWhenHover.current.style.opacity = 1;
    activeWhenHover.current.style.display = "block";
  };

  const handlerMouseOut = () => {
    activeWhenHover.current.style.opacity = 0;
    activeWhenHover.current.style.display = "none";
  };

  return (
    <tr className="resultTable_obj-hover">
      <td
        ref={hover}
        onMouseOut={handlerMouseOut}
        onMouseOver={handlerMouseOver}
      >
        {index + 1}
      </td>
      {row.map((e) => (
        <td ref={hover}>{e}</td>
      ))}
      <div
        className="resultTable_obj"
        id="resultTable_obj"
        ref={activeWhenHover}
      >
        {obj}
      </div>
    </tr>
  );
}
