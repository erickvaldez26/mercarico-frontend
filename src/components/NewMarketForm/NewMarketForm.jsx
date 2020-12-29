import React from 'react';

import { ContentForm, Camera } from './style';
import Cam from '../../assets/camera.svg';

const NewMarketForm = () => {
    return (
        <ContentForm>
            <p>Por favor llene todos los campos</p>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Referencia"/>
            <Camera>
                <input type="text" placeholder="Tomar una foto (Opcional)" readOnly/>
                <div className="TouchCam">
                    <img src={Cam} alt="camera"/>
                </div>
            </Camera>
            <button>Enviar</button>
        </ContentForm>
    )
}

export default NewMarketForm;