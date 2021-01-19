import React, { useContext, useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import  { LoginContext }  from "../../context/LoginContext";

import { ContentForm } from './style';

const LoginForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { handleLogin, user } = useContext(LoginContext);

    useEffect(() => {
      if(!!user) {
        history.push('/add-market');
      }
    },[user])

    const handleSubmit = (e) => {
        e.preventDefault();

        handleLogin(email, password);
    }
    
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
      <ContentForm onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={changeEmail}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={changePassword}
        />

        <button type="submit">Ingresar</button>
      </ContentForm>
    );
}

export default LoginForm;