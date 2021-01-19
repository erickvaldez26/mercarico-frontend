import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cities from '../../components/Cities/Cities';
import Map from '../../components/Map/Map';

import MainProvider from '../../context/MainContext';

import { Container, Content } from './style';

const MainPage = () => {
    return (
        <Container>
            <Navbar />
            <Content>
                <MainProvider>
                    <Cities />
                    <Map />
                </MainProvider>
            </Content>
        </Container>
    )
}

export default MainPage;