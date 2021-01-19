import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NewMarketForm from '../../components/NewMarketForm/NewMarketForm';
import { Route } from 'react-router-dom';

import { Container, Content } from './style';

const NewMarket = () => {
    return (
        <Route>
            <Container>
                <Navbar />
                <Content>
                    <p>Registrar un mercado</p>
                    <NewMarketForm />
                </Content>
            </Container>
        </Route>
    )
}

export default NewMarket;