import React, { useContext, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {LoginContext} from '../../context/LoginContext';

import { ContentForm } from './style';

const RegisterForm = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {user, handleRegister} = useContext(LoginContext);

    useEffect(() => {
        if(!!user) {
            history.push('/');
        }
    }, [user])

    const handleSubmit = e => {
        e.preventDefault();

        handleRegister(name, email, password);
    }

    const changeName = e => {
        setName(e.target.value);
    }
    const changeEmail = e => {
        setEmail(e.target.value);
    }
    const changePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <ContentForm onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Nombre completo" 
                onChange={changeName}
            />
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

            <button type="submit">Registrarme</button>
        </ContentForm>
    )
}

export default RegisterForm;