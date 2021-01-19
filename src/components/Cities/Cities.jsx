import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

import { Container, List } from './style';

const Cities = () => {

    const { setGeopoint } = useContext(MainContext);

    const setLocation = e => {
        const id = e.target.id;

        if(id === "lima"){
            setGeopoint({
                longitud: -12.045996,
                latitud: -77.030290
            })
        } else if (id === "arequipa"){
            setGeopoint({
                longitud: -16.398824,
                latitud: -71.536899
            })
        } else if (id === "ayacucho"){
            setGeopoint({
                longitud: -13.160307418527678,
                latitud: -74.2257868466724
            })
        } else if (id === "ica"){
            setGeopoint({
                longitud: -14.06414422498944, 
                latitud: -75.72925574789167
            })
        } else{
            setGeopoint({
                longitud: -11.844587,
                latitud: -74.353380
            })
        }
    }

    return (
        <Container>
            <List>
                <li id="lima" onClick={setLocation}>Lima</li>
                <li id="arequipa" onClick={setLocation}>Arequipa</li>
                <li id="ayacucho" onClick={setLocation}>Ayacucho</li>
                <li id="ica" onClick={setLocation}>Ica</li>
            </List>
        </Container>
    )
}

export default Cities;