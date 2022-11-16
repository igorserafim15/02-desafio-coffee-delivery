import { Route, Routes } from 'react-router-dom'
import { Checkout } from './Views/Checkout'
import { Home } from './Views/Home'
import { Success } from './Views/Success'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
