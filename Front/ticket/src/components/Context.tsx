import React, {useState, createContext, useContext} from 'react'
import { Film } from '../Interfaces/film'

const Context = createContext({})

export function useGlobal():any{
    return useContext(Context)
}

function Provider({children}:any) {
    const [userConnect, setUserConnect]= useState({"isConnected" : false})
    const [userPanier, setUserPanier] = useState<Map<Film, number>>(new Map())
  return (
    <Context.Provider value={{userConnect, setUserConnect, userPanier, setUserPanier}}>
        {children}
    </Context.Provider>
  )
}

export default Provider