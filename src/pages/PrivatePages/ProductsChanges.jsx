import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

function ProductsChanges() {

  
  return (
    <>
     <div>
      <h3>Admin Panel</h3>
      <ul style={{display: 'flex'}}>
        <li>
          <NavLink style={{marginRight: '30px'}} to="/admin/basket">Basket</NavLink>
        </li>
        <li>
          <NavLink style={{marginRight: '30px'}} to="/admin/productschanges">Products Changes</NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders">Orders</NavLink>
        </li>
      </ul>
    </div>
    <h1>Products Changes</h1>
    </>
  )
}

export default ProductsChanges