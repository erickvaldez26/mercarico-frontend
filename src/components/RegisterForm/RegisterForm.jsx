import React from 'react';

import { ContentForm } from './style';

const RegisterForm = () => {
    return (
        <ContentForm>
            <input type="text" placeholder="Nombre completo"/>
            <input type="email" placeholder="Correo electrónico"/>
            <input type="password" placeholder="Contraseña"/>

            <button>Registrarme</button>
        </ContentForm>
    )
}

export default RegisterForm;