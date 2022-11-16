import { GlobalStyle } from './styles/globals'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export const App = () => {
  return (
    <BrowserRouter>
      <Router />

      <GlobalStyle />
    </BrowserRouter>
  )
}
