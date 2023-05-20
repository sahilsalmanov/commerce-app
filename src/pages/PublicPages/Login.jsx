import React, { useContext } from 'react'
import { useState } from 'react'
import { LoginContext } from './LoginContext';
import { useNavigate } from 'react-router-dom';


function Login() {
    let navigate = useNavigate()
    const { loginStatus, setloginStatus } = useContext(LoginContext);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const loginCheck = () => {
       
        //
        if (email == 'sahilss@code.edu.az' && password == '123') {
            setloginStatus(true);
            localStorage.setItem('login',true);
            localStorage.setItem('role','superadmin')
            navigate('/')
        }
        else {
            alert('Email or password is invalid');
        }
    }

    return (<>
        <div className="login">
        <div className="form">
          <form noValidate>
            <span>Login</span>

            <input
             onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter email id / username"
              className="form-control inp_text"
              id="email"
            />

            <input
            onChange={(e) => setpassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control"
            />

            <button  onClick={loginCheck} type="submit">Login</button>
            <button style={{marginTop: '30px'}}>Sign Up</button>
          </form>
        </div>
      </div>

    </>
    )
}

export default Login

