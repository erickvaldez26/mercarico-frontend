import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {LoginContext} from '../../context/LoginContext';

import { Container, Mercarico, Links } from './style';
import Logo from '../../assets/logo.svg';

const Navbar = () => {
    const {user, handleSignOut} = useContext(LoginContext);

    return (
        <Container>
            <Mercarico>
                <Link to="/">
                    <img src={Logo} alt="mercado"/>
                </Link>
            </Mercarico>
            <Links>
                {user? (
                    <>
                        <Link to="/add-market">Agregar</Link>
                        <Link to="/contributions">Aportes</Link>
                        <p onClick={handleSignOut} style={{color: "#ffffff", fontSize: "14px", cursor: "pointer"}}>Salir</p>
                    </>
                ): (
                    <>
                        <Link to="/login">Ingresar</Link>
                        <Link to="/new-account">Registrarme</Link>
                    </>
                )}
                
            </Links>
        </Container>
    )
}

export default Navbar;