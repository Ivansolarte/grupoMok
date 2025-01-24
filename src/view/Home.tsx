
import { Navbar } from "../components/navbar/Navbar";
import { Container } from "../components/body/Container";
import { useState } from "react";

export const Home = () => {
  const [color, setColor] = useState(true)

  return (
    <>
    {/* cambios  */}
    {/* cambios 2 */}
      <Navbar color={()=>setColor(!color)}/>
      <Container color={color}/>
    </>
  );
};
