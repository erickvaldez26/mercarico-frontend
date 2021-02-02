import React, { useContext, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {LoginContext} from '../../context/LoginContext';

import { ContentForm } from './style';

const RegisterForm = () => {
    const history = useHistory();
    const [registeruser, setRegisterUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = registeruser;
    const {user, handleRegister} = useContext(LoginContext);

    useEffect(() => {
        if(!!user) {
            history.push('/');
        }
    }, [user])

    const handleFormSubmit = e => {
        e.preventDefault();

        handleRegister(name, email, password);
    }

    const handleInputs = e => {
        setRegisterUser({
            ...registeruser,
            [e.target.name]: e.target.value
        })
    }

    return (
        <ContentForm onSubmit={handleFormSubmit}>
            <input 
                name="name"
                type="text" 
                placeholder="Nombre completo" 
                onChange={handleInputs}
            />
            <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                onChange={handleInputs}
            />
            <input
                name="password"
                type="password" 
                placeholder="Contraseña"
                onChange={handleInputs}
            />

            <button type="submit">Registrarme</button>
        </ContentForm>
    )
}

export default RegisterForm;