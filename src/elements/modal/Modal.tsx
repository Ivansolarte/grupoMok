import { Button } from "../buttons/Button";
import { constants } from "../../app.constants";

export const Modal = (props: any) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Confirmar</h3>
             
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Esta seguro que desea eliminar registro
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center gap-4 p-6 border-t border-solid border-slate-200 rounded-b">
              <Button
                class="border-red-500 hover:bg-red-800 hover:border-red-900 focus:border-red-900"
                text={constants.btn_cancel}
                onClick={() => props.onCancel()}
              />
              <Button text={constants.btn_success} onClick={() => props.onSucess()} />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
