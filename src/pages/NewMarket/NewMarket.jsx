import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NewMarketForm from '../../components/NewMarketForm/NewMarketForm';

import { Container, Content } from './style';

const NewMarket = () => {
    return (
        <Container>
            <Navbar />
            <Content>
                <p>Registrar un mercado</p>
                <NewMarketForm />
            </Content>
        </Container>
    )
}

export default NewMarket;