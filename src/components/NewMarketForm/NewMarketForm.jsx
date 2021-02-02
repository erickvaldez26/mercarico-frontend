import React, {useState, useContext} from 'react';
import {MarketContext} from '../../context/Market';

import { ContentForm, Camera } from './style';
import {AiOutlineCamera} from 'react-icons/ai';

const NewMarketForm = () => {
    const [market, setMarket] = useState({
        name: '',
        reference: '',
        picture: '',
    });

    const {name, reference, picture} = market;

    const {handleRegisterMarket} = useContext(MarketContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        handleRegisterMarket(name, reference, picture);
    }

    const setDataMarket = (e) => {
        setMarket({
            ...market,
            [e.target.name]: e.target.value
        })
    }
    const loadPicture = (e) => {
        setMarket({
            ...market,
            [e.target.name]: e.target.files[0]
        })
    }

    return (
        <ContentForm onSubmit={handleSubmit}>
            <p>Por favor llene todos los campos</p>
            <input type="text" placeholder="Nombre" name="name" onChange={setDataMarket}/>
            <input type="text" placeholder="Referencia" name="reference" onChange={setDataMarket}/>
            <Camera type="file" id="picture" name="picture"  onChange={loadPicture}/>
            <label className="TouchCam" htmlFor="picture">
                <AiOutlineCamera size={20} />
            </label>
            <button type="submit">Enviar</button>
        </ContentForm>
    )
}

export default NewMarketForm;