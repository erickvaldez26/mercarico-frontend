import React from 'react';

import { ContentForm } from './style';

const LoginForm = () => {
    return (
        <ContentForm>
            <input type="email" placeholder="Correo electrónico"/>
            <input type="password" placeholder="Contraseña"/>

            <button>Ingresar</button>
        </ContentForm>
    )
}

export default LoginForm
