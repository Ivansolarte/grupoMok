import { useEffect, useState } from "react"
import { UserContext } from "./UserContext"



export const UserProvider = ({children}:any) => {

  
   const [users, setUsers] = useState([])
   const [origin, setOrigin] = useState([])


   
   
  return (
    <UserContext.Provider value={{users,setUsers,origin,setOrigin}} >
        {children}
    </UserContext.Provider>
  )
}
