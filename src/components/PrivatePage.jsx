import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Products from './ProductListPage';
import PrivateProducts from './PrivateProducts';
import Basket from './Basket';
import Profile from './Profile';
import { LoginContext } from './LoginContext';
import RoleControl from './RoleControl';
import ProductListPage from './ProductListPage';
import Admin from './Admin';


function App() {
  let navigate = useNavigate();

  const handleProducts = () => {
    navigate('/');
  };

  const handleBasket = () => {
    navigate('/admin');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const { loginStatus, setloginStatus } = useContext(LoginContext);

  const signout = () => {
    setloginStatus(false);
    localStorage.setItem('login', false);
    navigate('/')
}

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick= {handleProducts} variant="h6" sx={{ flexGrow: 1 }}>
            Products
          </Button>
          <Button color="inherit" onClick={handleBasket}>
            Admin
          </Button>
          <Button color="inherit" onClick={signout}>
            SignOut
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<PrivateProducts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
