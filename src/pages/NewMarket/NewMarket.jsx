import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NewMarketForm from '../../components/NewMarketForm/NewMarketForm';
import { Route } from 'react-router-dom';
import { isBrowser } from 'react-device-detect';

import { Container, Content } from './style';

const NewMarket = () => {
    const renderContent = () => {
        if(isBrowser) {
            return(
                <>
                    <h3 style={{marginTop: '18px'}}>Esta funcionalidad no esta habilitado para computadoras</h3>
                    <p style={{fontSize: '12px', marginTop: '0'}}>Por favor! Registre desde un movil para mayor precisión en su localización</p>
                </>
            )
        }else{
            return(
                <>
                    <p>Registrar un mercado</p>
                    <NewMarketForm />
                </>
            )
        }
    }

    return (
        <Route>
            <Container>
                <Navbar />
                <Content>
                    {renderContent()}
                </Content>
            </Container>
        </Route>
    )
}

export default NewMarket;