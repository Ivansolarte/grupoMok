import React, { useContext, useEffect, useState } from "react";
import { Table } from "../../elements/table/Table";
import { UserContext } from "../../hook/counter/UserContext";
import { Modal } from "../../elements/modal/Modal";

export const Container = (props: any) => {
  
  const title = ["Foto", "Nombre", "Apellido", "Pais", "Acciones"];

  const { users, setUsers } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");

  const deleteRow = (e: any) => {
    const { id, data } = e;
    const rest = data.filter((row: any) => row.cell !== id);
    setUsers(rest);
    setShow(false);
  };

  const showModal = (e: any) => {
    setItem(e);
    setShow(true);
  };

  useEffect(() => {
    users.sort((a: any, b: any) => {
      if (a.email > b.email) {
        return -1;
      } else if (a.email < b.email) {
        return 1;
      } else {
        return 0;
      }
    });

    setUsers(users);
  }, [props.onOrder]);
  

  return (
    <>
      <div className="">
        <Table header={title} data={users} onDelete={showModal} color={props.color}/>
      </div>
      {show && (
        <Modal
          onCancel={() => setShow(false)}
          onSucess={() => deleteRow(item)}
        />
      )}
    </>
  );
};
