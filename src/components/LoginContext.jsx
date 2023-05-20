import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
// let navigate = useNavigate()
  
    let loginStatusFromStorage = false;

    if (localStorage.getItem('login') == 'true')
     loginStatusFromStorage = true;

    else
        loginStatusFromStorage = false


    const [loginStatus, setloginStatus] = useState(loginStatusFromStorage);


    return <LoginContext.Provider value={{ loginStatus, setloginStatus }}>
        {children}
    </LoginContext.Provider>


}