import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProductListPage from './ProductListPage';



function App() {
  let navigate = useNavigate();

  const handleProducts = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick= {handleProducts} variant="h6" sx={{ flexGrow: 1 }}>
            Products
          </Button>
          <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
          <Button color="inherit" onClick={handleRegister}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    
      </Routes>
    </div>
  );
}

export default App;
