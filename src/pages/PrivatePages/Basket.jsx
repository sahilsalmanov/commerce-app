import React, { useContext } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Orders from './Orders'
import ProductsChanges from './ProductsChanges'
import { CartContext } from './BasketContextExample';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Basket() {

  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getTotalQuantity, getTotalPrice } = useContext(CartContext);

  return (
    <>
     <div>
      <h3>Admin Panel</h3>
      <ul style={{display: 'flex'}}>
        <li style={{marginRight: '30px'}}>
          <NavLink to="/admin/basket">Basket</NavLink>
        </li>
        <li style={{marginRight: '30px'}}>
          <NavLink to="/admin/productschanges">Products Changes</NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders">Orders</NavLink>
        </li>
      </ul>
    </div>
    <h1>Basket</h1>
     <p>Total Price: {getTotalPrice()}</p>
      <div style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around'}}>
        {cartItems.map((card) => (
          <>
          <Card key={card.id}  sx={{ width: '350px', height: '700px', marginBottom: '20px', marginTop: '80px' }}>
          
          <div style={{ width: '165px', height: '220px', margin: ' 0 auto', marginTop: '30px' }}>
            <img
              alt="green iguana"
              style={{ width: '100%', height: '100%' }}
              src={card.image}
            />
          </div>
   
          <CardContent>
            <Typography style = {{height: '70px', fontSize: '18px', textAlign: 'center'}} gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>     
            <Typography style={{fontWeight: 600, color: 'red', marginLeft: '30px', marginTop: '30px'}} variant="body2" color="text.secondary">
              {card.price} $
            </Typography>
            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px', marginBottom: '20px'}}>
            <Button style= {{border: '1px solid blue'}} onClick={() => increaseQuantity(card.id)}>
              +
            </Button>
            <Button style= {{border: '1px solid blue'}} onClick={() => decreaseQuantity(card.id)}>
               -
            </Button>
            <Typography style={{fontWeight: 600, color: 'red', marginLeft: '30px', marginTop: '30px'}} variant="body2" color="text.secondary">
            Quantity: {card.quantity}
            </Typography>
            </div>
            <Button style={{backgroundColor: 'white', border: '1px solid blue', marginLeft: '90px'}} onClick={() => removeFromCart(card.id)}>
            Remove from Cart
          </Button>
          </CardContent>
        </Card> 
       
          </>
          
        ))}
      </div>
      <Button style ={{backgroundColor: 'green', marginLeft: '20px'}}>Order</Button>
     
    
    </>
  )
}

export default Basket