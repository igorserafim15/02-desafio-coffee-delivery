import { GlobalStyle } from './styles/globals'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './Components/Header'
import { ContextProvider } from './context/ContextProvider'

export const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Router />
      </ContextProvider>

      <GlobalStyle />
    </BrowserRouter>
  )
}
