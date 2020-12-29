import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Mercarico, Links } from './style';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <Container>
            <Mercarico>
                <img src={Logo} alt="mercado"/>
            </Mercarico>
            <Links>
                <Link to="/login">Ingresar</Link>
                <Link to="/new-account">Registrarme</Link>
            </Links>
        </Container>
    )
}

export default Navbar;