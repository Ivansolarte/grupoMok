import { useContext, useEffect, useState } from "react";
import { constants } from "../../app.constants";
import { Button } from "../../elements/buttons/Button";
import { Input } from "../../elements/inputs/Input";
import { AppConst } from "../../app.settings";
import { UserContext } from "../../hook/counter/UserContext";
import { Get } from "../../util/rest.util";
import { order } from "../../util/function";

export const Navbar = (props:any) => {
  const [search, setsearch] = useState("");

  const { setUsers, setOrigin, users, origin } = useContext(UserContext);

  const getApi = () => {
    const response = Get(AppConst.endpoint);
    try {
      response.then((x: any) => {
        setTimeout(() => {
          setUsers(x);
          setOrigin(x);
        }, 1000)
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  const ordenar = () => {    
    const newData = order(users)
    setUsers(newData);
    
  };

  const filtrarPorID = (obj: any) => {
    if ("email" in obj && typeof obj.email === "number" && !isNaN(obj.id)) {
      return true;
    } else {
      return false;
    }
  };

  const searchCountry = (e: any) => {
    setsearch(e);
    if (e.length !== 0) {
      let rest = users.filter((elemt: any) =>
        elemt.location.country.toLowerCase().includes(e.toLowerCase())
      );
      console.log(rest);
      if (rest.length !== 0) {
        setUsers(rest);
      }
    } else {
      setUsers(origin);
    }
  };

  useEffect(() => {
    
    getApi();
  }, []);

  return (
    <>
      <div className="mb-3">
        <div className="navbar text-center my-5">
          <p>{constants.titleNavbar}</p>
        </div>
        <div className=" flex justify-center gap-3">
          <Button onClick={()=>props.color()} text="Colorea filas" />
          <Button onClick={ordenar} text="ordenar por pais" />
          <Button
            onClick={() => setUsers(origin)}
            text="Restaurar estado inicial "
            />
          <Input
            onChange={(e) => searchCountry(e.target.value)}
            value={search}
            placeholder="Filtrar por pais"
            />
        </div>
      </div>
      <hr className="mb-2"/>
    </>
  );
};
