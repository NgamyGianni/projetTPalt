import {useState, createContext, useContext} from 'react'
import React from 'react'
import { Ticket } from '../Interfaces/ticket'

const PanierContext = createContext({})

export function usePanier():any{
    return useContext(PanierContext)
}

function PanierProvider({children}:any) {
  const [panierVisible, setPanierVisible]= useState<boolean>(false)
  const [panier, setPanier]= useState<Array<Ticket>>([])

  return (
    <PanierContext.Provider value={{panierVisible, setPanierVisible, panier, setPanier}}>
        {children}
    </PanierContext.Provider>
  )
}

export default PanierProvider