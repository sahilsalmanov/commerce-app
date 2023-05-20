import './App.css';
import PrivatePages from './components/PrivatePage'
import PublicPages from './components/PublicPage'
import Navbar from './components/Navbar'
import { LoginContext } from './components/LoginContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const { loginStatus } = useContext(LoginContext);

  return (
    <div className="App"> 
     <>
     {
        loginStatus == true ? <PrivatePages /> : <PublicPages />
     }
     </>
    </div>
  );
}

export default App;
