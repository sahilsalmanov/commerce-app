import React from 'react'

function RoleControl({ children }) {


    console.log('Children', children);
    let role = localStorage.getItem('role');

    if (role == 'superadmin') {
        return children;
    }
    else {
        return <h1>Yetki Hatası!!</h1>
    }
}

export default RoleControl