import React from "react";
import Button from "./Button";
const Table = ({ columns, rows, deleteMethod, editMethod }) => {
  return (
    <div className="w-full p-4 border border-zinc-200 rounded-md">
      <div className="flex justify-around">
        {columns.map((column, ind) => (
          <div
            className="flex-1 shrink-0 text-start font-bold text-2xl"
            key={ind}
          >
            {column}
          </div>
        ))}
        <div className="flex-1 shrink-0 text-center font-bold text-2xl">
          Actions
        </div>
      </div>
      <div>
        {rows.map((row, ind) => {
          return (
            <div key={ind} className="flex justify-around items-center">
              <div
                style={{
                  maxWidth: `${
                    (100 / columns.length) * (columns.length - 1)
                  }vw`,
                }}
              ></div>
              {Object.entries(row)
                .filter((entry) => entry[0] != "id")
                .map((entry, key) => (
                  <div
                    className="flex-1 shrink-0 flex justify-start overflow-hidden"
                    key={key}
                  >
                    {row[columns[key]]}
                  </div>
                ))}
              <div className="flex justify-center  flex-1">
                <Button
                  text="Edit"
                  type="edit"
                  id={row.id}
                  onClick={editMethod}
                  exist={editMethod ? true : false}
                />
                &nbsp; &nbsp; &nbsp;
                <Button
                  text="Delete"
                  type="delete"
                  id={row.id}
                  onClick={deleteMethod}
                  exist={deleteMethod ? true : false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Table;