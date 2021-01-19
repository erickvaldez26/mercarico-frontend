import React, { useContext } from 'react';
import { Map as Mapex , TileLayer } from 'react-leaflet';

import { MainContext } from '../../context/MainContext';

import { Container } from './style';
import 'leaflet/dist/leaflet.css';

const Map = () => {

    const { geopoint } = useContext(MainContext);

    const click = () => {
        console.log(geopoint);
    }

    return (
        <Container onClick={click}>
            <Mapex
                center={[geopoint.longitud, geopoint.latitud]}
                zoom={8}
                minZoom={4}
                maxZoom={15}     
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Mapex>
        </Container>
    )
}

export default Map;