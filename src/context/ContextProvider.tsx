import React, { createContext, ReactNode } from 'react'
import { CaffeType } from '../@types/CaffeeType'
import { caffeeReducer } from '../reduces/checkout/reducer'

interface AppContextType {
  caffeeCart: CaffeType[]
  dispatch: React.Dispatch<any>
}

export const AppContext = createContext({} as AppContextType)

interface ContextProviderProps {
  children: ReactNode
}
export const ContextProvider = ({ children }: ContextProviderProps) => {
  const initialState: CaffeType[] = []

  const [caffeeCart, dispatch] = React.useReducer(caffeeReducer, initialState)

  return (
    <AppContext.Provider value={{ caffeeCart, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
