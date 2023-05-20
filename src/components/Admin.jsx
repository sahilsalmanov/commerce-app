import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Basket from './Basket'
import Orders from './Orders'
import ProductsChanges from './ProductsChanges'

function Admin() {
  return (
    <>
    <ul style={{ display: 'flex'}}>
    <li style={{marginRight: '30px'}}><Link to='/admin/productschanges'>Products</Link></li>
    <li style={{marginRight: '30px'}}><Link to='/admin/basket'>Basket</Link></li>
    <li><Link to='/admin/orders'>Orders</Link></li>
   </ul>
    <Routes>
    <Route path="/admin/productschanges" element={<ProductsChanges />}></Route>
    <Route path="/admin/basket" element={<Basket />}></Route>
    <Route path="admin//orders" element={<Orders/>}></Route>
  </Routes>
  </>
  )
}

export default Admin
