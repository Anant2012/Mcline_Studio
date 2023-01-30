import React from 'react'
import LoginContext  from './LoginContext'

const LoginState = (props) =>{
    const loginData = {
        "checkLogin":false,
        "name":"random"
    }

    
    return(
        <LoginContext.Provider value={loginData}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState;