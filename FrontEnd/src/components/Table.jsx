import React from "react";
import Button from "./Button";

const Table = ({ columns, rows }) => {
  return (
    <div className="w-full p-2 border border-zinc-200 rounded-md">
      <div className="flex justify-around">
        {columns.map((column, ind) => (
          <div
            className="flex-1 shrink-0 text-center font-bold text-2xl"
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
              {Object.values(row).map((value, key) => (
                <div className="flex-1 shrink-0 text-start" key={key}>
                  {value}
                </div>
              ))}
              <Button text="Edit" type="edit" />
              &nbsp;
              <Button text="Delete" type="delete" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;