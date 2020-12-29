import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ItemsContri from '../../components/ItemContri/ItemContri';

import { Container, Content } from './style';

const Contributions = () => {
    return (
        <Container>
            <Navbar />
            <Content>
                <p className="title">Tus contribuciones</p>
                <ItemsContri />
            </Content>
        </Container>
    )
}

export default Contributions;