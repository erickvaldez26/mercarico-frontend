import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

import { Container, Wrapper } from './Style';
import Logo from '../../assets/logo.svg';

const LoginPage = () => {
    return (
        <Container>
            <img src={Logo} alt="mercado"/>
            <Wrapper>
                <h2>Inicio de sesión</h2>
                <LoginForm />
                <p>Ayudanos a crecer en todo el Perú</p>
                <p>¿No tienes una cuenta? Registrese aquí!</p>
            </Wrapper>
        </Container>
    )
}

export default LoginPage