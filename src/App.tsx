import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './Components/Header'
import { ContextProvider } from './context/ContextProvider'

import { GlobalStyle } from './styles/globals'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <ContextProvider>
          <Header />
          <Router />
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
