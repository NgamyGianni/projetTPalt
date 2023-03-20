import {useState, createContext, useContext} from 'react'

import React from 'react'

const LoginContext = createContext({})

export function useLogin():any{
    return useContext(LoginContext)
}

function LoginProvider({children}:any) {
    const [userConnect, setUserConnect]= useState({"isConnected" : false})
  return (
    <LoginContext.Provider value={{userConnect, setUserConnect}}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider