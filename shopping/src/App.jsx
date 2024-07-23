import React from 'react'
import {Route,Routes,BrowserRouter, Router} from "react-router-dom"
import Home from './Pages/Home'
import Order from './Pages/Order'
import Dashboard from './Pages/Admin_dashboard/Dashboard'
import Cart from './Pages/Cart'
import NoPage from './Pages/NoPage'
import MyState from './context/MyState'
const App = () => {
  return (
    <div>
      <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/*" element={<NoPage />}></Route>
          </Routes>
      </Router>
      </MyState>
    </div>
  )
}

export default App
