import React, { useContext } from 'react'
import { useState } from 'react'
import { LoginContext } from './LoginContext';

function Login() {

    const { loginStatus, setloginStatus } = useContext(LoginContext);

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const loginCheck = () => {
        //
        if (email == 'cagatay@mail.com' && password == '123') {
            setloginStatus(true);
            localStorage.setItem('login',true);
            localStorage.setItem('role','superadmin')
        }
        else {
            alert('email veya password hatalı!');
        }
    }

    return (<>
        <div style={{ padding: '5%' }}>

            <div>
                <label htmlFor="">Email</label>
                <input type='text' onChange={(e) => setemail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type='password' onChange={(e) => setpassword(e.target.value)} />
            </div>
            <div>
                <button onClick={loginCheck}>Login</button>
            </div>
        </div>

    </>
    )
}

export default Login



//https://northwind.vercel.app/api/suppliers datalar axios ile çekilecek ve antd table da listelenecek
//columns =>   Id, CompanyName, ContactName, City
//CompanyName göre sort edebileyim
//ContactName göre sort edebileyim

//Table delete butonu ve ona göre delete işlemi ***



//*** City Tokyo ise o satır tamamen TOMATO olsun (opsiyonel)