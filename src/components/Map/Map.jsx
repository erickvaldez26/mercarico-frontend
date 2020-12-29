import React from 'react';
import { Map as Mapex , TileLayer } from 'react-leaflet';

import { Container } from './style';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    return (
        <Container>
            <Mapex
                center={[-13.1746934,-74.2296709]}
                zoom={15}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Mapex>
        </Container>
    )
}

export default Map;