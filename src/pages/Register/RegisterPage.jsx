import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './Style';
import Logo from '../../assets/logo.svg';

const RegisterPage = () => {
    return (
        <Container>
            <img src={Logo} alt="mercado"/>
            <Wrapper>
                <h2>Registro</h2>
                <RegisterForm />
                <p>Ayudanos a crecer en todo el Perú</p>
                <Link className="link" to="/login">¿Ya tienes una cuenta? Inicia sesión aquí!</Link>
            </Wrapper>
        </Container>
    )
}

export default RegisterPage;