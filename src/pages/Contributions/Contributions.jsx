import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ItemsContri from '../../components/ItemContri/ItemContri';
import fire from '../../services/Firebase';

import { Container, Content, ContentItems } from './style';

const Contributions = () => {
    const db = fire.firestore();
    const auth = fire.auth().currentUser?.uid.toString();

    const [markets, setMarkets] = useState([]);

    useEffect(() => {
        async function getMarkets() {
            const res = await db.collection('users').doc(auth).collection('contributions').get();
            const prov = []
            res.forEach(doc => {
                prov.push({...doc.data(), id:doc.id});
            })
            setMarkets(prov);
        }
        getMarkets();
    }, [auth, db]);
    return (
        <Container>
            <Navbar />
            <Content>
                <p className="title">Tus contribuciones</p>
                <ContentItems>
                    {markets.map((market) => 
                        <ItemsContri market={market} />
                    )}
                </ContentItems>
            </Content>
        </Container>
    )
}

export default Contributions;