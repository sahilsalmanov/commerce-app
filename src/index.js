import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './components/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginProvider>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </LoginProvider>


);
