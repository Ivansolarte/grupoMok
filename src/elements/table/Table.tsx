import { ITable, defaultTable } from "../../interfaces/interface.table";
import { Button } from "../buttons/Button";
import { constants } from "../../app.constants";
import { IsLoading } from "../isLoading/IsLoading";

export const Table = (props: ITable) => {
  return (
    <>
      {props.data.length === 0 ? (
        <IsLoading />
      ) : (
        <div className=" table">
          <div className="table-container">
            <table className=" w-[100%]  h-min ">
              <thead className="border-[#112233] border border-1">
                <tr className=" border-[#112233]">
                  {props.header.map((e: any, index: number) => {
                    return (
                      <th
                        className="border-black border border-1 h-10"
                        key={index}
                      >
                        {e}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody
                className={`border-[border-[#112233]] border border-1 ${
                  props.color ? " text-white " : "text-black"
                }`}
              >
                {Object.values(props.data).map((row: any, index: number) => {
                  return (
                    <tr
                      className={`${
                        props.color
                          ? `${index % 2 === 0 ? "bg-gray-800" : "bg-gray-600"}`
                          : `${
                              index % 2 === 0 ? "bg-slate-300" : "bg-slate-100"
                            }`
                      }   border-black border border-1 ${
                        props.color ? "hover:bg-gray-200" : "hover:bg-blue-400"
                      } `}
                      key={index}
                    >
                      <td className="border-black border border-1 ">
                        <img
                          src={row.picture.medium}
                          alt=""
                          className="mx-auto w-[40px] h-[40px]"
                          loading="lazy"
                        />
                      </td>
                      <td className="border-black border border-1 ">
                        {/* {row.name.first} */}
                        {row.email}
                      </td>
                      <td className="border-black border border-1">
                        {row.name.last}
                      </td>
                      <td className="border-black border border-1">
                        {row.location.country}
                      </td>
                      <td className="border-black border border-1 text-center">
                        <Button
                          class="text-black"
                          onClick={() =>
                            props.onDelete({ id: row.cell, data: props.data })
                          }
                          text={constants.btn_delete}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
Table.defaultProps = defaultTable;
